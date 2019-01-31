(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['fe-shared-components'] = {})));
}(this, (function (exports) { 'use strict';

  var default_1 = /** @class */ (function () {
      function default_1() {
      }
      default_1.selectMore = function (query, page, orders) {
          return {
              query: query,
              page: page,
              orders: orders,
          };
      };
      default_1.pager = function (index, size) {
          if (index === void 0) { index = 0; }
          if (size === void 0) { size = 20; }
          return {
              page_index: index,
              page_size: size,
          };
      };
      default_1.order = function (column, isDesc) {
          return {
              column_name: column,
              desc: isDesc,
          };
      };
      return default_1;
  }());

  exports.queryBuilder = default_1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
