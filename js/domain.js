'use strict';

var Domain = (function(){
	
	var url = function(){
		return document.URL; //e.g. http://www.example.org:8888/foo/bar?q=baz#bangbang
	};

	var protocol = function(){
		return window.location.protocol; // e.g. http:
	};
	
	var host = function(){
		return window.location.host;  // include port number if specified e.g. example.org:8888
	};
	
	var hostName = function(){
		return window.location.hostname; // eg. example.org
	};
	
	var pathName = function(){
		return window.location.pathname; // eg. /foo/bar
	};
	
	var parts = function(){
		return url.split('//');
	};
	
	var sub = function(){
		return parts[1].split('.');
	};
	
	var topLevelDomain = function(){
		return sub[2].split('/')[0]; // top level domain
	};
	
	var subdomain = function(){
		return sub[0];
	};

	return {
		url: url,
		protocol: protocol,
		host: host,
		subdomain: subdomain,
		hostName: hostName,
		topLevelDomain: topLevelDomain,
		pathName: pathName
	};

})();