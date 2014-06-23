'use strict';

describe('Controller: ScotchCtrl', function () {

  // load the controller's module
  beforeEach(module('angularUiRouter2App'));

  var ScotchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScotchCtrl = $controller('ScotchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
