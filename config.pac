function FindProxyForURL(url, host) {
	if (host == "localhost")
		return "DIRECT";

	return "HTTPs localhost:44300";
}
