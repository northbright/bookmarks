// Get broser Name

function getBrowserName() {
  var userAgent = navigator.userAgent;
  var browserName = (userAgent.match(/opera|chrome|safari|firefox/i) || [])[0];
  var appName = navigator.appName;

  if (appName === 'Microsoft Internet Explorer') {
    browserName = 'IE';
    return browserName;
  }

  if (navigator.appVersion.indexOf('Edge') > -1) {
    browserName = 'Edge';
    return browserName;
  }

  if (browserName === 'Chrome') {
    var opr = userAgent.match(/\bOPR/i);
    if (opr !== null) {
      browserName = 'Opera';
      return browserName;
    }

    return browserName;
  }else {
    return browserName;
  }
}

// about service worker and push notification
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('https://auth0.com/blog/sw.js');
}

var requestNotificationPermission = function () {

  if (Notification.requestPermission) {
    Notification.requestPermission(function (result) {
      if (result == 'granted') {
        registerForPush();
      }
    });
  }
};

function registerForPush() {
  navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {

    serviceWorkerRegistration.pushManager.getSubscription().then(
      function (pushSubscription) {
        // Check we have a subscription to unsubscribe
        if (pushSubscription) {
          return;
        }

        subscribe(serviceWorkerRegistration);
      });
  });
}

function subscribe(serviceWorkerRegistration) {
  return serviceWorkerRegistration.pushManager.subscribe({
    userVisibleOnly: true,
  })
  .then(function (subscription) {
      fetch('https://auth0-marketing.run.webtask.io/pn-push-subscriptions/push-notification',
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ 'registration_id': subscription.endpoint.substr(subscription.endpoint.lastIndexOf('/') + 1) }),
          })
        .then(function (res) {
          metricsLib.track('blog:notifications:' + browser, { 'trackData': 'accepted' });
        })
        .catch(function (err) {
          return;
        });

    })
    .catch(function (error) {
      });
}

window.unsubscribePushNotification = function () {
  return navigator.serviceWorker.ready
    .then(function (serviceWorkerRegistration) {

      serviceWorkerRegistration.pushManager.getSubscription()
        .then(
          function (pushSubscription) {
            // Check we have a subscription to unsubscribe
            if (!pushSubscription) {
              return;
            }

            var subscriptionId = pushSubscription.endpoint.substr(pushSubscription.endpoint.lastIndexOf('/') + 1);

            // request to wt to remove subscription of db
            pushSubscription.unsubscribe()
              .then(function (successful) {
                fetch('https://auth0-marketing.run.webtask.io/pn-push-subscriptions/push-notification/' + subscriptionId,
                  {
                    method: 'DELETE',
                  })
                  .then(function (res) { console.log('unsubscribe'); })
                  .catch(function (err) {
                    return;
                  });
              });
          });
    });
};

//  popup push subscription

$(document).ready(function ($) {
  var browser = getBrowserName();
  var valActive;
  function conditionalScroll(scroll) {
    if (valActive) {
      var width = $(window).width();
      if (width > 991) {
        if (scroll > 520) {
          $('.pn-popup')
            .css(
              { 'position': 'fixed',
                'z-index': '1500',
              });

          $('.pn-popup').addClass('pn-is-visible');
          $('.pn-popup-container')
            .css(
              {
                'position': 'inherit',
                'top': '110px'
              });
        }else {
          $('.pn-popup')
            .css(
              {
                'position': 'static',
              });

          $('.pn-popup').addClass('pn-is-visible');

          $('.pn-popup-container')
            .css(
              {
                'position': 'absolute',
                'top': '130px'
              });
        }
      }
    }
  }

  var popupVisibility = function () {
    var scroll = $(window).scrollTop();
    conditionalScroll(scroll);

    $(window).scroll(function () {
      scroll = $(window).scrollTop();
      conditionalScroll(scroll);
    });
  };

  // delay open pupup
  function openPopup() {
    setTimeout(function () {
      popupVisibility();
    }, 30000);
  }

  subscriptionValidation = function () {
    // if ('safari' in window && 'pushNotification' in window.safari) {
    //   if (!localStorage.getItem('permissionAllow') && localStorage.getItem('pn-subscription') != 'false') {
    //     valActive = true;
    //     return openPopup();
    //   }
    // }

    if (navigator.serviceWorker === undefined) { return; }

    return navigator.serviceWorker.ready
      .then(function (serviceWorkerRegistration) {
        serviceWorkerRegistration.pushManager.getSubscription()
          .then(
            function (pushSubscription) {

              // Check subsccription
              if (!pushSubscription && localStorage.getItem('pn-subscription') != 'false') {
                valActive = true;
                openPopup();
              }
            }
          );
      });
  };

  window.subscriptionValidationSafari = function () {
    if ('safari' in window && 'pushNotification' in window.safari) {
      if (!localStorage.getItem('permissionAllow') && localStorage.getItem('pn-subscription') != 'false') {
        valActive = true;
        return openPopup();
      }
    }
  };

  // popup buttons
  $('#push-allow').on('click', function (e) {
    $('.pn-popup').removeClass('pn-is-visible');
    valActive = false;
    if ('safari' in window && 'pushNotification' in window.safari) {
      pnSafari();
    } else {
      requestNotificationPermission();
    }
  });

  $('#push-block').on('click', function (e) {
    $('.pn-popup').removeClass('pn-is-visible');
    valActive = false;
    localStorage.setItem('pn-subscription', 'false');
    metricsLib.track('blog:notifications:' + browser, { 'trackData': 'declined' });
  });

  window.pnSafari = function(){
    if ('safari' in window && 'pushNotification' in window.safari) {
      var permissionData = window.safari.pushNotification.permission('web.com.auth0');
      checkRemotePermission(permissionData);
    }
  }

  function checkRemotePermission(permissionData) {
    if (permissionData.permission === 'default') {
      window.safari.pushNotification.requestPermission(
        'https://safari-web-service.herokuapp.com', // The web service URL.
        'web.com.auth0.website',                    // The Website Push ID.
        {},            // Data that you choose to send to your server to help you identify the user.
        checkRemotePermission                     // The callback function.
      );
    }else if (permissionData.permission === 'denied') {
      localStorage.setItem('pn-subscription', 'false');
      metricsLib.track('blog:notifications:' + browser, { 'trackData': 'declined' });
    }else if (permissionData.permission === 'granted') {
      localStorage.setItem('permissionAllow', 'true');
      metricsLib.track('blog:notifications:' + browser, { 'trackData': 'accepted' });
    }
  }

  subscriptionValidation();

});
