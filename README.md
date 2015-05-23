# Half-Pull

Simple Document for Half Pull 

Proxy side:

server.js and spdyproxy provide the implementation UDP half pull requests and fetch corresponding URLs. 
They should be to replace files in spdyproxy module in npm.

Client side:
Thera are two ways to issue UDP half pull requests. The first is shown in clientcache.js as a prototype for higher level function API in javascript. 
The other is contained in C++ code for Chrome integration.
