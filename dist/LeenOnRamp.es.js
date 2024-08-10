import je, { useState as Se, useEffect as we } from "react";
var Q = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function vr() {
  if (Ce) return $;
  Ce = 1;
  var m = je, g = Symbol.for("react.element"), T = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, y = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(O, c, P) {
    var p, R = {}, S = null, W = null;
    P !== void 0 && (S = "" + P), c.key !== void 0 && (S = "" + c.key), c.ref !== void 0 && (W = c.ref);
    for (p in c) h.call(c, p) && !_.hasOwnProperty(p) && (R[p] = c[p]);
    if (O && O.defaultProps) for (p in c = O.defaultProps, c) R[p] === void 0 && (R[p] = c[p]);
    return { $$typeof: g, type: O, key: S, ref: W, props: R, _owner: y.current };
  }
  return $.Fragment = T, $.jsx = D, $.jsxs = D, $;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function pr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var m = je, g = Symbol.for("react.element"), T = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), O = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ee = Symbol.iterator, xe = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var j = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ae = !1, Fe = !1, Ie = !1, $e = !1, Le = !1, re;
    re = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === _ || Le || e === y || e === P || e === p || $e || e === W || Ae || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === R || e.$$typeof === D || e.$$typeof === O || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case T:
          return "Portal";
        case _:
          return "Profiler";
        case y:
          return "StrictMode";
        case P:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var r = e;
            return te(r) + ".Consumer";
          case D:
            var t = e;
            return te(t._context) + ".Provider";
          case c:
            return Ye(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case S: {
            var o = e, u = o._payload, i = o._init;
            try {
              return E(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, A = 0, ne, ae, ie, oe, ue, se, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ve() {
      {
        if (A === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Ue() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ne
            }),
            info: w({}, e, {
              value: ae
            }),
            warn: w({}, e, {
              value: ie
            }),
            error: w({}, e, {
              value: oe
            }),
            group: w({}, e, {
              value: ue
            }),
            groupCollapsed: w({}, e, {
              value: se
            }),
            groupEnd: w({}, e, {
              value: le
            })
          });
        }
        A < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = j.ReactCurrentDispatcher, B;
    function Y(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var J = !1, V;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Me();
    }
    function ce(e, r) {
      if (!e || J)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = N.current, N.current = null, Ve();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (v) {
              n = v;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var b = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, b), b;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        J = !1, N.current = u, Ue(), Error.prepareStackTrace = o;
      }
      var k = e ? e.displayName || e.name : "", C = k ? Y(k) : "";
      return typeof e == "function" && V.set(e, C), C;
    }
    function Ne(e, r, t) {
      return ce(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Be(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case P:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ne(e.render);
          case R:
            return U(e.type, r, t);
          case S: {
            var n = e, o = n._payload, u = n._init;
            try {
              return U(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, de = {}, ve = j.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, o) {
      {
        var u = Function.call.bind(F);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, M(o), f("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var qe = Array.isArray;
    function q(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ge(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), pe(e);
    }
    var I = j.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, he, K;
    K = {};
    function Xe(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = E(I.current.type);
        K[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(I.current.type), e.ref), K[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          he || (he = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, o) {
      {
        var u, i = {}, a = null, d = null;
        t !== void 0 && (ge(t), a = "" + t), He(r) && (ge(r.key), a = "" + r.key), Xe(r) && (d = r.ref, Ze(r, o));
        for (u in r)
          F.call(r, u) && !ze.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(i, l), d && er(i, l);
        }
        return rr(e, a, d, o, n, I.current, i);
      }
    }
    var G = j.ReactCurrentOwner, ye = j.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function me() {
      {
        if (G.current) {
          var e = E(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var Ee = {};
    function ar(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + E(e._owner.type) + "."), x(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Re(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = ke(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              X(i.value) && Re(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = E(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    var Te = {};
    function Oe(e, r, t, n, o, u) {
      {
        var i = We(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = nr();
          d ? a += d : a += me();
          var s;
          e === null ? s = "null" : q(e) ? s = "array" : e !== void 0 && e.$$typeof === g ? (s = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = tr(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (q(b)) {
                for (var k = 0; k < b.length; k++)
                  _e(b[k], e);
                Object.freeze && Object.freeze(b);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(b, e);
        }
        if (F.call(r, "key")) {
          var C = E(e), v = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), H = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[C + H]) {
            var cr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, C, cr, C), Te[C + H] = !0;
          }
        }
        return e === h ? or(l) : ir(l), l;
      }
    }
    function ur(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var lr = sr, fr = ur;
    L.Fragment = h, L.jsx = lr, L.jsxs = fr;
  }()), L;
}
process.env.NODE_ENV === "production" ? Q.exports = vr() : Q.exports = pr();
var Z = Q.exports;
const gr = (m) => new Promise((g, T) => {
  if (Array.from(
    document.getElementsByTagName("script")
  ).find((_) => _.src === m)) {
    g("");
    return;
  }
  const y = document.createElement("script");
  y.src = m, y.onload = g, y.onerror = T, document.body.appendChild(y);
}), hr = ({ ...m }) => {
  const [g, T] = Se(!1), [h, y] = Se(!1), _ = m.bundleVersion == "dev" ? "https://static.leen.dev/dev/bundle.js" : `https://static.leen.dev/prod/${m.bundleVersion ?? "latest"}/bundle.js`;
  return we(() => (gr(_).then(() => {
    T(!0);
  }).catch(() => {
    y(!0);
  }), () => {
  }), []), we(() => {
    g && !h && (window.renderLeenOnRamp ? window.renderLeenOnRamp(m) : console.error("renderLeenOnRamp is not defined on window!"));
  }, [g, h]), g ? h ? /* @__PURE__ */ Z.jsx("div", { children: "Error loading script" }) : /* @__PURE__ */ Z.jsx("div", { id: "leenOnRampComponent" }) : /* @__PURE__ */ Z.jsx("div", { children: "Loading..." });
};
export {
  hr as LeenOnRamp
};
