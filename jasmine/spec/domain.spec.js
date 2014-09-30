// http://angular-tips.com/blog/2014/03/introduction-to-unit-test-spies/


describe("The Domain constructor", function() {
 
  beforeEach(function () {
    spyOn(Domain.prototype, 'getUrl');
    var d = new Domain();
  });


  it("should call its prototype's getURL", function() {
    expect(Domain.prototype.getUrl).toHaveBeenCalled();
  });




});