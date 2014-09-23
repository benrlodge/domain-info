## Domain Goodness

Every need to split up a url to get some info? Say the subdomain, or the top level domain or what have you? I did, so I threw this module together.

It's pretty straightforward so just check out the source.

I used the revealing module pattern, so it's as simple as...

`
Domain.url();

Domain.protocol();

Domain.and-so-on-and-so-forth




Domain = (function(){
	
	var url = function(){
		return document.URL; //e.g. http://www.example.org:8888/foo/bar?q=baz#bangbang
	}

	var protocol = function(){
		return window.location.protocol; // e.g. http:
	}

	.....


`