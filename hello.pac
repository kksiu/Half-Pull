function FindProxyForURL(url, host) {
  if (url.indexOf("localhost") > -1) {
  	return "DIRECT";
  }
  return "HTTPS www.siu.email:44300";
}