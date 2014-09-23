## Domain Info Goodness

Ever need to split up a url to get some info? Say the subdomain, or the top level domain or what have you or what not? I did, so I tossed this module together.

I used the revealing module pattern, so it's as simple as...


```javascript 

Domain = (function(){
	
	var url = function(){
		return document.URL; //e.g. http://www.example.org:8888/foo/bar?q=baz#bangbang
	}

	var protocol = function(){
		return window.location.protocol; // e.g. http:
	}
	
	var host = function(){
		return window.location.host;  // include port number if specified e.g. example.org:8888
	}

	...



Domain.url();

Domain.protocol();

Domain.and-so-on-and-so-forth



```