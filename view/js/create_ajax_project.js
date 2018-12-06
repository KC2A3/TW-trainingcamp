function getXMLHTTPRequestObject() {
  var ajax = null;
  if (window.XMLHTTPRequest) {
    ajax = new XMLHTTPRequest();
  } else if (window.ActiveXobject) { //older IE
    ajax = new ActiveXObject('MSXML2.XMLHTTP3.0');
  }
  return ajax;
}