## Domain Info Goodness

Ever need to split up a url to get some info? Say the subdomain, or the top level domain or what have you or what not? I did, so I tossed this module together.

[View a demo and full documentation](http://benrlodge.github.io/domain-info/)

It's as simple as...

```javascript
<script src='domain.js'></script>

<script>

    Domain.url(); // http://benrlodge.github.io/domain-info/

    Domain.protocol(); // http:

    Domain.subdomain(); // benrlodge

    Domain.hostName(); // benrlodge.github.io

    Domain.host(); // benrlodge.github.io, includes port number if specified e.g. github.io:8888

    Domain.topLevelDomain(); // .io

    Domain.pathName(); // /plugins/domain-info/

    Domain.contains('ben'); // true

    Domain.matches('http://benrlodge.github.io/domain-info/') // true


</script>
```