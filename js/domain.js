/*
Domain-Info.js
By Ben Lodge
See more at benrlodge.com
 */

function helloWorld(){
    return 'Hello world!';
}

Domain = (function(){

    // Domain specific components
    function url(){
        return document.URL; //e.g. http://www.example.org:8888/foo/bar?q=baz#bangbang
    }

    function protocol(){
        return window.location.protocol; // e.g. http:
    }

    function host(){
        return window.location.host;  // include port number if specified e.g. example.org:8888
    }

    function hostName(){
        return window.location.hostname; // eg. example.org
    }

    function pathName(){
        return window.location.pathname; // eg. /foo/bar
    }

    function parts(){
        return (url()).split("//");
    }

    function sub(){
        var p = parts();
        if (!p){ return false; }
        return p[1].split('.');
    }

    function topLevelDomain(){
        var s = sub();
        if(!s[2]){ return false; }
        return s[2].split('/')[0]; // top level domain
    }

    function subdomain(){
        return (sub())[0];
    }

    // Find string anywhere in url
    function contains(query){
        return (url()).indexOf(query) > 0 ? true : false;
    }

    function matches(query){
        return query == url();
    }

    return {
        contains: contains,
        matches: matches,
        url: url,
        parts: parts,
        protocol: protocol,
        host: host,
        subdomain: subdomain,
        hostName: hostName,
        topLevelDomain: topLevelDomain,
        pathName: pathName
    };

})();