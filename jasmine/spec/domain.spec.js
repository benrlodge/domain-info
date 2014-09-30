
describe('Domain', function () {

  beforeEach(function () {
  });

  it('url should equal current url', function () {
    var dUrl = Domain.url()
    var currentUrl = 'http://localhost:8888/plugins/domain-info/jasmine/SpecRunner.html'
    expect(dUrl).toEqual(currentUrl);
  });

  it('protocol should equal http:', function () {
    var dProtocol = Domain.protocol()
    var currentProtocol = 'http:'
    expect(dProtocol).toEqual(currentProtocol);
  });

  it('host should equal localhost:8888', function () {
    var dHost = Domain.host()
    var currentHost = 'localhost:8888'
    expect(dHost).toEqual(currentHost);
  });



});