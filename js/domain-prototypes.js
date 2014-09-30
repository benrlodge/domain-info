/*
Domain-Info.js
By Ben Lodge
See more at benrlodge.com
 */


Domain = function(){
	this.url = this.getUrl();
};

	Domain.prototype = {

	getUrl: function(){
	    return document.URL;
	},

	protocol: function(){
	    return window.location.protocol;
	},

	host: function(){
	   return window.location.host;  // include port number if specified e.g. example.org:8888
	},

	hostName: function(){
	   return window.location.hostname; // eg. example.org
	},

	pathName: function(){
	   return window.location.pathname; // eg. /foo/bar
	},

	parts: function(){
	   return (this.url()).split("//");
	},

	sub: function(){
	   var p = this.parts();
	   if (!p){ return false; }
	   return p[1].split('.');
	},

	topLevelDomain: function(){
	   var s = this.sub();
	   if(!s[2]){ return false; }
	   return s[2].split('/')[0]; // top level domain
	},

	subdomain: function(){
	   return (this.sub())[0];
	},

	// Find string anywhere in url
	contains: function(query){
	   return (this.url()).indexOf(query) > 0 ? true : false;
	}

};