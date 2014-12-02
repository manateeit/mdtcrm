'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /mspec when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/mspec");
  });


  describe('mspec', function() {

    beforeEach(function() {
      browser.get('index.html#/mspec');
    });


    it('should render mspec when user navigates to /mspec', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('mquote', function() {

    beforeEach(function() {
      browser.get('index.html#/mquote');
    });


    it('should render mquote when user navigates to /mquote', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
