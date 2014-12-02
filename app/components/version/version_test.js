'use strict';

describe('mdtcrm.version module', function() {
  beforeEach(module('mdtcrm.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
