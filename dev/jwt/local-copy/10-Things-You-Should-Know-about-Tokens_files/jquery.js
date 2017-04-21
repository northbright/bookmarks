// VERSION: 1.2 LAST UPDATE: 12.09.2016
/*
 *           .       .   .
 *          |       |   |
 * ,-. ,-. |-. . . |-  |-  ,-. ;-. ,-.
 * |   `-. | | | | |   |   | | | | `-.
 * `-' `-' `-' `-` `-' `-' `-' ' ' `-'
 *
 * Social customs counter buttons (Facebook, Twitter, Google+, LinkedIn, Pinterest)
 * Made by Mathieu ORLANDO, contact@acrow.fr, Acrow, FRANCE
 * Website: http://csbuttons.acrow.fr/
 */
(function($)
{
  $.fn.cSButtons = function(options)
  {
    // Default params
    var defaults =
    {
      "url"   : null,
      "type"  : 'facebook',
      "txt" : null,
      "via" : null,
      "count" : false,
      "count_position" : 'right',
      "apikey": null,
      "media" : null,
      "lang"  : null,
      "total" : null,
    }

    var parametres  = $.extend(defaults, options);
    var totalShare  = 0;
    var nbButtons   = this.length;
    var i   = 0;
    var jg  = 0;

    return this.each(function()
    {
      i++;
      // If option on the link attributs
      var url   = ($(this).attr('data-url') != undefined && $(this).attr('data-url') != '') ?  $(this).attr('data-url') : parametres.url;
      var type  = ($(this).attr('data-type') != undefined && $(this).attr('data-type') != '') ?  $(this).attr('data-type') : parametres.type;
      var txt   = ($(this).attr('data-txt') != undefined && $(this).attr('data-txt') != '') ?  $(this).attr('data-txt') : parametres.txt;
      var via   = ($(this).attr('data-via') != undefined && $(this).attr('data-via') != '') ?  $(this).attr('data-via') : parametres.via;
      var count   = ($(this).attr('data-count') != undefined && $(this).attr('data-count') != '') ?  $(this).attr('data-count') : parametres.count;
      var cPosition   = ($(this).attr('data-count-position') != undefined && $(this).attr('data-count-position') != '') ?  $(this).attr('data-count-position') : parametres.count_position;
      var apikey  = ($(this).attr('data-apikey') != undefined && $(this).attr('data-apikey') != '') ?  $(this).attr('data-apikey') : parametres.apikey;
      var media   = ($(this).attr('data-media') != undefined && $(this).attr('data-media') != '') ?  $(this).attr('data-media') : parametres.media;
      var lang  = ($(this).attr('data-lang') != undefined && $(this).attr('data-lang') != '') ?  $(this).attr('data-lang') : parametres.lang;
      var popupWidth  = 0;
      var popupHeight = 0;
      var shareUrl  = '';

      // Url use to share
      url = (url != null) ? url : document.URL;
      $URL  = url;

      // If count total share
      if(count){
        if(cPosition == 'left'){
          $(this).prepend('<span class="csbuttons-count" />');
        }
        else
        {
          $(this).append('<span class="csbuttons-count" />');
        }
      }

      switch(type)
      {
        case 'twitter': // Twitter share
        var twitter = $(this);
        popupWidth  = 550;
        popupHeight = 420;
        shareUrl  = (txt != null) ? '//twitter.com/intent/tweet?original_referer=' + encodeURIComponent(document.URL) + '&text=' + encodeURIComponent(txt) + '&url=' + encodeURIComponent(url) : '//twitter.com/intent/tweet?original_referer=' + encodeURIComponent(document.URL) + '&url=' + encodeURIComponent(url);
        shareUrl  = (via != null) ? shareUrl + '&via=' + via : shareUrl;

        if(count)
        {
          $('span.csbuttons-count', twitter).text(0);
          $.getJSON('https://webtask.it.auth0.com/api/run/wt-matiasw-gmail_com-0/proxy2?url=http://opensharecount.com/count.json?url=' + $URL, function( twitdata ) {
            $('span.csbuttons-count', twitter).text(twitdata.count);
            totalShare += (isNaN(parseInt(twitdata.count))) ? 0 : parseInt(twitdata.count);

            if(parametres.total != null && i == nbButtons)
            $(parametres.total).text(totalShare);
          });
        }
        break;
        case 'google': // Google + share
        var google = $(this);
        jg++;

        popupWidth  = 600;
        popupHeight = 600;
        shareUrl  = '//plus.google.com/share?url=' + url;
        shareUrl  = (lang != null) ? shareUrl + '&hl=' + lang : shareUrl;

        if(count)
        {
          $('span.csbuttons-count', google).text(0);
          if(apikey != null)
          {
            $.post('//clients6.google.com/rpc?key=' + apikey,
            {
              "method":"pos.plusones.get",
              "id":"p",
              "params":{
                "nolog":true,
                "id": $URL,
                "source":"widget",
                "userId":"@viewer",
                "groupId":"@self"
              },
              "jsonrpc":"2.0",
              "key":"p",
              "apiVersion":"v1"
            },
            function(gpdata){
              $('span.csbuttons-count', google).text(gpdata.result.metadata.globalCounts.count);
              totalShare += (isNaN(parseInt(gpdata.result.metadata.globalCounts.count))) ? 0 : parseInt(gpdata.result.metadata.globalCounts.count);
              if(parametres.total != null && i == nbButtons)
              $(parametres.total).text(totalShare);
            });
          }
          else // Alternative yandex
          {
            window['gplus'+jg] = google;
            if (!window.services) window.services = {};
            window.services.gplus = {
              cb: function(number) {
                window['gplusnb'+jg] = (number == '') ? 0 : number;
              }
            };
            $.getScript( '//share.yandex.ru/gpp.xml?url=' + $URL + '&callback=?', function(){
              $('span.csbuttons-count', google).text(window['gplusnb'+jg]);
              totalShare += (isNaN(parseInt(window['gplusnb'+jg]))) ? 0 : parseInt(window['gplusnb'+jg]);
              if(parametres.total != null && i == nbButtons)
              $(parametres.total).text(totalShare);
            });
          }
        }
        break;
        case 'linkedin' : // Linkedin share
        var linkedin  = $(this);
        popupWidth  = 600;
        popupHeight = 213;
        shareUrl  = '//www.linkedin.com/cws/share?url=' + url;

        if(count)
        {
          $('span.csbuttons-count', linkedin).text(0);
          // $.getJSON('http://www.linkedin.com/countserv/count/share?url=' + $URL + '&callback=?', function( indata ) {
          //  $('span.csbuttons-count', linkedin).text(indata.count);
          //  totalShare += (isNaN(parseInt(indata.count))) ? 0 : parseInt(indata.count);
          //  if(parametres.total != null && i == nbButtons)
          //  $(parametres.total).text(totalShare);
          // });
          $.ajax({
          dataType: "jsonp",
            url: "//www.linkedin.com/countserv/count/share?url=" + $URL,
            jsonpCallback: function() {
                var text = "";
                  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                  for( var i=0; i < 5; i++ )
                  text += possible.charAt(Math.floor(Math.random() * possible.length));
                  return text;
                },
              }).done(function(linkedinCount) {
                  $('span.csbuttons-count', linkedin).text(linkedinCount.count);
                    totalShare += (isNaN(parseInt(linkedinCount.count))) ? 0 : parseInt(linkedinCount.count);
                      if(parametres.total != null && i == nbButtons)
                        $(parametres.total).text(totalShare);
                      }).fail(function(errorData) {
                          console.log(errorData);
                        });
          }
          break;
          case 'pinterest': // Pinterest share
            var pinterest = $(this);
            popupWidth  = 1000;
            popupHeight = 617;
            shareUrl  = '//www.pinterest.com/pin/create/button/?url=' + url;
            shareUrl  = (media != null) ? shareUrl + '&media=' + media : shareUrl;
            shareUrl  = (txt != null) ? shareUrl + '&description=' + txt : shareUrl;

            if(count)
            {
              $('span.csbuttons-count', pinterest).text(0);
              $.getJSON('//api.pinterest.com/v1/urls/count.json?url=' + $URL + '&callback=?', function( ptrdata ) {
                $('span.csbuttons-count', pinterest).text(ptrdata.count);
                totalShare += (isNaN(parseInt(ptrdata.count))) ? 0 : parseInt(ptrdata.count);
                if(parametres.total != null && i == nbButtons)
                $(parametres.total).text(totalShare);
              })
            }
            break;
            default: // Default Facebook share
              var facebook  = $(this);
              popupWidth  = 670;
              popupHeight = 340;
              shareUrl  = '//www.facebook.com/sharer/sharer.php?u=' + url;

              if(count)
              {
                $('span.csbuttons-count', facebook).text(0);
                $.getJSON('//graph.facebook.com/?id=' + $URL, function( fbdata ) {
                  if(fbdata.share){
                    $('span.csbuttons-count', facebook).text(fbdata.share.share_count);

                    totalShare += (isNaN(parseInt(fbdata.share.share_count))) ? 0 : parseInt(fbdata.share.share_count);
                    if(parametres.total != null && i == nbButtons)
                    $(parametres.total).text(totalShare);
                  }
                });
              }
              break;
            }

        // Click to Action Open Popup Share
        $(this).on('click tap', function()
        {
          // Center popup to the screen
          var left  = (screen.width/2)-(popupWidth/2);
          var top   = (screen.height/2)-(popupHeight/2);

          popupWindow = window.open(shareUrl,'popUpWindow','height=' + popupHeight + ',width=' + popupWidth + ',left=' + left + ',top=' + top + ',resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes');
        });
    });
  };
})(jQuery);
