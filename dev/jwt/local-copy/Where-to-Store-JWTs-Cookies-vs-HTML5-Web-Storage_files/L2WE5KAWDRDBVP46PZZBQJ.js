(function () {
  var scheme = (("https:" == document.location.protocol) ? "https" : "http");
  var adnxs_domain = 'secure.adnxs.com';
  var aol_domain = 'secure.leadback.advertising.com';
  var rule = ["*", "*"];
  if (scheme=='http') { adnxs_domain = 'ib.adnxs.com'; aol_domain = 'leadback.advertising.com';}
  var el = document.createElement("div");
  el.style["width"] = "1px";
  el.style["height"] = "1px";
  el.style["display"] = "inline";
  el.style["position"] = "absolute";
  var content = unescape('%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/r/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/b/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/w/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/x/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/l/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/o/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/g/out%3fgoogle_nid%3dadroll2%22/%3e%0a');



  try {
  } catch(e) {}


  var r = Math.random()*10000000000000000;
  content = content.replace(/\[ord\]/gi, r);
  content = content.replace(/\[protocol\]/gi, scheme);
  content = content.replace(/\[adnxs_domain\]/gi, adnxs_domain);
  content = content.replace(/\[aol_domain\]/gi, aol_domain);
  content = __adroll.replace_external_data(content);
  el.innerHTML = content;
  __adroll._head().appendChild(el);
  if (typeof __adroll.set_pixel_cookie != 'undefined') {__adroll.set_pixel_cookie(adroll_adv_id, adroll_pix_id, "ROM52XMDAVBJXNN2WGQCRS");}
}());
