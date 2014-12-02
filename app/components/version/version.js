'use strict';

angular.module('mdtcrm.version', [
  'mdtcrm.version.interpolate-filter',
  'mdtcrm.version.version-directive'
])

.value('version', '0.1');
