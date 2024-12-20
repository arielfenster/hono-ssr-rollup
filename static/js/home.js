(function (require$$0, require$$0$1) {
  'use strict';

  var jsxRuntime = {exports: {}};

  var reactJsxRuntime_production_min = {};

  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production_min;
  function requireReactJsxRuntime_production_min() {
    if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    hasRequiredReactJsxRuntime_production_min = 1;
    var f = require$$0,
      k = Symbol.for("react.element"),
      l = Symbol.for("react.fragment"),
      m = Object.prototype.hasOwnProperty,
      n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      p = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };
    function q(c, a, g) {
      var b,
        d = {},
        e = null,
        h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
      };
    }
    reactJsxRuntime_production_min.Fragment = l;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    return reactJsxRuntime_production_min;
  }

  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
    }
    return jsxRuntime.exports;
  }

  var jsxRuntimeExports = requireJsxRuntime();

  var client = {};

  var hasRequiredClient;
  function requireClient() {
    if (hasRequiredClient) return client;
    hasRequiredClient = 1;
    var m = require$$0$1;
    {
      client.createRoot = m.createRoot;
      client.hydrateRoot = m.hydrateRoot;
    }
    return client;
  }

  var clientExports = requireClient();

  function Button({ children, onClick, ...props }) {
      return (jsxRuntimeExports.jsx("button", { type: 'button', style: { fontSize: '24px', borderRadius: '12px', padding: '8px' }, onClick: onClick, ...props, children: children }));
  }

  function LayoutHome() {
      return (jsxRuntimeExports.jsxs("div", { children: ["This is the layout of the home Page", jsxRuntimeExports.jsx(Button, { className: 'zibi', children: "This is the common button" })] }));
  }

  function HomePage() {
      return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("h1", { children: "Home Page" }), jsxRuntimeExports.jsx("span", { children: "meow3" }), jsxRuntimeExports.jsx(LayoutHome, {})] }));
  }

  clientExports.hydrateRoot(document.getElementById('app'), jsxRuntimeExports.jsx(HomePage, {}));

})(React, ReactDOM);
//# sourceMappingURL=home.js.map
