/*
* =========================================================================
* Copyright 2018 T-Mobile, US
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* See the readme.txt file for additional language around disclaimer of warranties.
* =========================================================================
*/

(function() {
  'use strict';

  angular
    .module('vault')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, AppConstant, IdleProvider) {
      var timeout = AppConstant['SESSION-TIMEOUT'] * 60;
      if (timeout <= 300) {
          IdleProvider.idle(1);
          IdleProvider.timeout(timeout);
      } else {
          IdleProvider.idle(timeout - 300);
          IdleProvider.timeout(300);
      }
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 2000;
    toastrConfig.positionClass = 'custom-toast';
    toastrConfig.tapToDismiss = true;
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = false;
  }

})();
