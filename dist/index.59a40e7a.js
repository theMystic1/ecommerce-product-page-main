// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gl6Mp":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cartViewJs = require("./view/cartView.js");
var _cartViewJsDefault = parcelHelpers.interopDefault(_cartViewJs);
var _sampleViewJs = require("./view/sampleView.js");
var _sampleViewJsDefault = parcelHelpers.interopDefault(_sampleViewJs);
var _navViewJs = require("./view/navView.js");
var _navViewJsDefault = parcelHelpers.interopDefault(_navViewJs);
var _loadviewJs = require("./view/loadview.js");
var _loadviewJsDefault = parcelHelpers.interopDefault(_loadviewJs);
const controleCartView = function() {
    (0, _cartViewJsDefault.default).toggleCart();
};
const controlLocalData = function(data) {
    (0, _cartViewJsDefault.default).renderCart(data);
    if (data.length === 0) (0, _cartViewJsDefault.default).renderEmptyCartMsg();
// console.log(data);
};
const controlSampleView = function(data) {
    (0, _sampleViewJsDefault.default).renderSampleImg(data);
// console.log(data);
};
const controlSampleViewLightBox = function(data) {
    (0, _sampleViewJsDefault.default).renderSampleLightBox(data);
};
controlLightImgView = function(data) {
    (0, _sampleViewJsDefault.default).renderSampleLightBox(data);
};
const controlAddToCart = function() {
    (0, _cartViewJsDefault.default).updateCartData();
    (0, _cartViewJsDefault.default).renderCart();
};
const controlDeleteCart = function() {
    (0, _cartViewJsDefault.default).renderEmptyCartMsg();
};
const controlNav = function() {
    (0, _navViewJsDefault.default).openNav();
};
const init = function() {
    (0, _cartViewJsDefault.default).handleEventCart(controleCartView);
    (0, _cartViewJsDefault.default).loadLocalData(controlLocalData);
    (0, _cartViewJsDefault.default).handleIncValue();
    (0, _cartViewJsDefault.default).addToCart(controlAddToCart);
    (0, _cartViewJsDefault.default).deleteCart(controlDeleteCart);
    (0, _sampleViewJsDefault.default).handleSampleView(controlSampleView);
    (0, _sampleViewJsDefault.default).handleSmpleLightBox(controlSampleViewLightBox);
    (0, _sampleViewJsDefault.default).handleRemoveLightBox();
    (0, _sampleViewJsDefault.default).handleImg(controlLightImgView);
    (0, _navViewJsDefault.default).handlerOpenNav(controlNav);
    // hovers
    (0, _loadviewJsDefault.default).handleHover();
    (0, _loadviewJsDefault.default).handleMouseOut();
    (0, _loadviewJsDefault.default).handleHoverCancBtn();
    (0, _loadviewJsDefault.default).handleMouseOutlose();
    // active
    (0, _loadviewJsDefault.default).activeEvent();
};
init();

},{"./view/cartView.js":"glzQp","./view/sampleView.js":"d8bHw","./view/navView.js":"8Jmcp","./view/loadview.js":"lnUwE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"glzQp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconDeleteSvg = require("../../images/icon-delete.svg");
var _iconDeleteSvgDefault = parcelHelpers.interopDefault(_iconDeleteSvg);
var _imageProduct1ThumbnailJpg = require("../../images/image-product-1-thumbnail.jpg");
var _imageProduct1ThumbnailJpgDefault = parcelHelpers.interopDefault(_imageProduct1ThumbnailJpg);
class CartView {
    _nav = document.querySelector(".nav");
    _parentEl = document.querySelector(".cart--details");
    _valueBtn = document.querySelector(".cart_inc_dec");
    _cartQuantity = 0;
    _markup;
    handleEventCart(handler) {
        this._nav.addEventListener("click", function(e) {
            const cart = e.target.closest(".cart_img");
            if (!cart) return;
            handler();
        });
    }
    getCartData() {
        return JSON.parse(localStorage.getItem("cart")) || [];
    }
    loadLocalData(handler) {
        // Add an event listener to the window.load event
        window.addEventListener("load", ()=>{
            // Retrieve cart data from localStorage
            const cartData = this.getCartData() || this.renderEmptyCartMsg();
            cartData;
            // Render the cart with the retrieved cart data
            handler(cartData);
        // this.renderCart(cartData);
        });
    }
    handleIncValue(handler) {
        let valueCount = 0;
        const minValue = 0;
        this._valueBtn.addEventListener("click", (e)=>{
            const btn = e.target.closest(".btn_inc_dec");
            const value = document.querySelector(".value");
            if (!btn) return;
            if (btn.classList.contains("inc")) {
                valueCount++;
                value.innerHTML = valueCount;
                this._cartQuantity = valueCount;
                // Update cartData with the new quantity
                this.updateCartData();
            // Notify the handler about the change in quantity
            // handler(this._cartQuantity);
            }
            if (btn.classList.contains("dec")) {
                if (valueCount === minValue) return;
                valueCount--;
                value.innerHTML = valueCount;
                this._cartQuantity = valueCount;
                // Update cartData with the new quantity
                this.updateCartData();
                // Notify the handler about the change in quantity
                handler(this._cartQuantity);
            }
        });
    }
    updateCartData() {
        const productTitle = "Fall Limited Edition Sneakers";
        // Retrieve cart data from localStorage
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        // Find the product in cartData (assuming a unique identifier, e.g., title)
        const productInCartIndex = cartData.findIndex((item)=>item.title === productTitle);
        // Update the quantity in cartData or add a new product if not found
        if (productInCartIndex !== -1) cartData[productInCartIndex].quantity = this._cartQuantity;
        else {
            const product = {
                title: productTitle,
                price: 125.0,
                image: (0, _imageProduct1ThumbnailJpgDefault.default),
                quantity: this._cartQuantity
            };
            cartData.push(product);
        }
        // if (productInCartIndex === 0) return;
        // Save the updated cart data to localStorage
        localStorage.setItem("cart", JSON.stringify(cartData));
    }
    renderCart(cartData) {
        const prodValue = 125.0;
        // Use the passed cartData or retrieve it from localStorage
        cartData = cartData || JSON.parse(localStorage.getItem("cart")) || [];
        // Calculate total quantity and total price from cart data
        const totalQuantity = cartData.reduce((total, item)=>total + item.quantity, 0);
        // If the total quantity is 0, do not render the cart
        if (totalQuantity === 0) // this._parentEl.innerHTML = "";
        return;
        // Calculate total price from cart data
        const totalPrice = cartData.reduce((total, item)=>total + item.price * item.quantity, 0);
        this._parentEl.innerHTML = `
      <div class="cart_det">
        <img src="${0, _imageProduct1ThumbnailJpgDefault.default}" alt="" class="sample-img" />
        <span class="item_selected">
          <span class="its"> Fall Limited Edition Sneakers </span>
          <span class="pricing">
            <p class="priced">$${prodValue}.00 x <span class="qtty">${totalQuantity}</span></p>
            <p class="total">$${totalPrice}.00</p>
          </span>
        </span>
        <img src="${0, _iconDeleteSvgDefault.default}" alt="" class="delete" />
      </div>
      <button class="btn_checkout">Checkout</button>
    `;
    }
    addToCart(handler) {
        document.querySelector(".cart_btn").addEventListener("click", ()=>{
            // document.querySelector(".value").innerHTML = 0;
            handler();
        });
    }
    deleteCart(handler) {
        this._parentEl.addEventListener("click", (e)=>{
            const delBtn = e.target.closest(".delete");
            if (!delBtn) return;
            e.preventDefault(); // Prevent default behavior
            // Retrieve the product title or unique identifier from the HTML structure
            const productTitle = "Fall Limited Edition Sneakers";
            // Retrieve cart data from localStorage
            let cartData = JSON.parse(localStorage.getItem("cart")) || [];
            // Find the index of the product in cartData
            const productIndex = cartData.findIndex((item)=>item.title === productTitle);
            // Remove the product from cartData if found
            if (productIndex !== -1) {
                cartData.splice(productIndex, 1);
                // Update localStorage with the modified cartData
                localStorage.setItem("cart", JSON.stringify(cartData));
                // Render the cart with the updated data
                document.querySelector(".cart--details").innerHTML = "";
                this.renderCart(cartData);
            // console.log(cartData);
            }
            handler();
        });
    }
    toggleCart() {
        document.querySelector(".cart").classList.toggle("hidden");
    }
    renderEmptyCartMsg() {
        this._markup = `
      <div class="cart--details">
       <p class="empty_cart">Your cart is empty</p>
      </div>
    `;
        this._parentEl.insertAdjacentHTML("beforeend", this._markup);
    }
}
exports.default = new CartView();

},{"../../images/icon-delete.svg":"fHk1r","../../images/image-product-1-thumbnail.jpg":"hDlT0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHk1r":[function(require,module,exports) {
module.exports = require("858449e2a5dd77a0").getBundleURL("ixJtV") + "icon-delete.c9dd7024.svg" + "?" + Date.now();

},{"858449e2a5dd77a0":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"hDlT0":[function(require,module,exports) {
module.exports = require("4c9b5745bad83ec4").getBundleURL("ixJtV") + "image-product-1-thumbnail.cad5b7f9.jpg" + "?" + Date.now();

},{"4c9b5745bad83ec4":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"d8bHw":[function(require,module,exports) {
// import imageProd1 from "../../images/image-product-1-thumbnail.jpg";
// import imageProd2 from "../../images/image-product-2-thumbnail.jpg";
// import imageProd3 from "../../images/image-product-3-thumbnail.jpg";
// import imageProd4 from "../../images/image-product-4-thumbnail.jpg";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconCloseSvg = require("../../images/icon-close.svg");
var _iconCloseSvgDefault = parcelHelpers.interopDefault(_iconCloseSvg);
var _iconCloseCopySvg = require("../../images/icon-close-copy.svg");
var _iconCloseCopySvgDefault = parcelHelpers.interopDefault(_iconCloseCopySvg);
var _iconPreviousSvg = require("../../images/icon-previous.svg");
var _iconPreviousSvgDefault = parcelHelpers.interopDefault(_iconPreviousSvg);
var _iconNextSvg = require("../../images/icon-next.svg");
var _iconNextSvgDefault = parcelHelpers.interopDefault(_iconNextSvg);
var _iconPreviousCopySvg = require("../../images/icon-previous-copy.svg");
var _iconPreviousCopySvgDefault = parcelHelpers.interopDefault(_iconPreviousCopySvg);
var _iconNextCopySvg = require("../../images/icon-next-copy.svg");
var _iconNextCopySvgDefault = parcelHelpers.interopDefault(_iconNextCopySvg);
var _imageProduct1Jpg = require("../../images/image-product-1.jpg");
var _imageProduct1JpgDefault = parcelHelpers.interopDefault(_imageProduct1Jpg);
var _imageProduct2Jpg = require("../../images/image-product-2.jpg");
var _imageProduct2JpgDefault = parcelHelpers.interopDefault(_imageProduct2Jpg);
var _imageProduct3Jpg = require("../../images/image-product-3.jpg");
var _imageProduct3JpgDefault = parcelHelpers.interopDefault(_imageProduct3Jpg);
var _imageProduct4Jpg = require("../../images/image-product-4.jpg");
var _imageProduct4JpgDefault = parcelHelpers.interopDefault(_imageProduct4Jpg);
class SampleView {
    images = [
        (0, _imageProduct1JpgDefault.default),
        (0, _imageProduct2JpgDefault.default),
        (0, _imageProduct3JpgDefault.default),
        (0, _imageProduct4JpgDefault.default)
    ];
    myData;
    overlay = document.querySelector(".overlay");
    _parentEl = document.querySelector(".img__sample_view");
    _eventSample = document.querySelector(".sample-imgs");
    products = document.querySelector(".show_products");
    _markup;
    getClosestDet() {}
    handleSampleView(handler) {
        this._eventSample.addEventListener("click", (e)=>{
            const imgBtn = e.target.closest(".sample");
            if (!imgBtn) return;
            const allImg = document.querySelectorAll(".sample");
            allImg.forEach((img)=>img.classList.remove("sample_active"));
            imgBtn.classList.toggle("sample_active");
            const imgData = +imgBtn.dataset.sample;
            // console.log(imgBtn, imgData, );
            handler(imgData);
        });
    }
    handleSmpleLightBox(handler) {
        document.querySelector(".hero-left").addEventListener("click", (e)=>{
            const imgBtn = e.target.closest(".sample_img");
            if (!imgBtn) return;
            const imgData = +imgBtn.dataset.sampleimg;
            this.overlay.classList.remove("hidden");
            this.products.classList.remove("hide_product");
            handler(imgData);
        });
    }
    renderSampleImg(data) {
        const imageUrl = this.images[data - 1]; // Adjusted to zero-based index
        this._markup = `
    <img
    src="${imageUrl}"
    alt=""
    data-sampleimg ="${data}"
    class="sample_img"
  />
    `;
        this._parentEl.innerHTML = "";
        this._parentEl.insertAdjacentHTML("afterbegin", this._markup);
    // console.log(data);
    }
    renderSampleLightBox(data) {
        const imageUrl = this.images[data - 1]; // Adjusted to zero-based index
        this.myData = data;
        this._markup = `
      <span class="del_btn">
        <img src="${0, _iconCloseSvgDefault.default}" alt="" class="close__btn active" />
        <img src="${0, _iconCloseCopySvgDefault.default}" alt="" class="close__btn hover hidden" />
      </span>

      <span class="imgs_sample">
        <span class="prev cng_cont">
          <img
            src="${0, _iconPreviousSvgDefault.default}"
            alt=""
            class="prev_btn prev-1 chng_btn"
          />
          <img
            src="${0, _iconPreviousCopySvgDefault.default}"
            alt=""
            class="prev_btn prev-2 chng_btn hidden"
          />
        </span>

        <img
          class="sample_imgss"
          src="${imageUrl}"
          alt=""
          data-sampleImgs="1"

        />

        <span class="nex cng_cont">
          <img
            src="${0, _iconNextSvgDefault.default}"
            alt=""
            class="nex_btn nex-1 chng_btn"
          />
          <img
            src="${0, _iconNextCopySvgDefault.default}"
            alt=""
            class="nex_btn nex-2 chng_btn hidden"
          />
        </span>
      </span>
    `;
        const parentEl = document.querySelector(".show_products");
        parentEl.innerHTML = "";
        parentEl.innerHTML = this._markup;
    }
    handleRemoveLightBox() {
        document.querySelector(".section").addEventListener("click", (e)=>{
            const btn = e.target.closest(".del_btn");
            if (!btn) return;
            const parentEl = document.querySelector(".show_products");
            parentEl.innerHTML = "";
            this.overlay.classList.add("hidden");
            this.products.classList.add("hide_product");
        });
    }
    renderNextSampleImg(data) {
        const imageUrl = this.images[this.myData - 1]; // Adjusted to zero-based index
        this._markup = `
        <span class="del_btn">
          <img src="${0, _iconCloseSvgDefault.default}" alt="" class="close__btn" />
        </span>
  
        <span class="imgs_sample">
          <span class="prev cng_cont">
            <img
              src="${0, _iconPreviousSvgDefault.default}"
              alt=""
              class="prev_btn chng_btn"
            />
          </span>
  
          <img
            class="sample_imgss"
            src="${imageUrl}"
            alt=""
            data-sampleImgs="1"
          />
  
          <span class="nex cng_cont">
            <img
              src="${0, _iconNextSvgDefault.default}"
              alt=""
              class="nex_btn chng_btn"
            />
          </span>
        </span>
      `;
        const parentEl = document.querySelector(".show_products");
        parentEl.innerHTML = "";
        parentEl.innerHTML = this._markup;
    }
    handleImg(handler) {
        document.querySelector(".section").addEventListener("click", (e)=>{
            const btn = e.target.closest(".cng_cont");
            // const btn = e.target.closest(".sample_imgss");
            const maxLength = 4;
            const minLength = 1;
            if (!btn) return;
            if (btn.classList.contains("nex")) {
                if (this.myData < maxLength) {
                    this.myData++;
                    // this.renderSampleLightBox(this.myData, btn);
                    handler(this.myData);
                } else return;
            }
            if (btn.classList.contains("prev")) {
                if (this.myData > minLength) {
                    this.myData--;
                    // this.renderSampleLightBox(this.myData, btn);
                    handler(this.myData);
                } else return;
            }
        // console.log(this.myData);
        // console.log(btn);
        });
    }
}
exports.default = new SampleView();

},{"../../images/icon-close.svg":"c10Nq","../../images/icon-close-copy.svg":"2HhE1","../../images/icon-previous.svg":"c8LXz","../../images/icon-next.svg":"fnnRD","../../images/icon-previous-copy.svg":"72Prf","../../images/icon-next-copy.svg":"dmO1W","../../images/image-product-1.jpg":"5IhlW","../../images/image-product-2.jpg":"tldVd","../../images/image-product-3.jpg":"hWdlO","../../images/image-product-4.jpg":"a3K30","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c10Nq":[function(require,module,exports) {
module.exports = require("d1cd0bc0c2adbb48").getBundleURL("ixJtV") + "icon-close.cac3d951.svg" + "?" + Date.now();

},{"d1cd0bc0c2adbb48":"lgJ39"}],"2HhE1":[function(require,module,exports) {
module.exports = require("9ae59a9aaf82001e").getBundleURL("ixJtV") + "icon-close-copy.c57d7cd5.svg" + "?" + Date.now();

},{"9ae59a9aaf82001e":"lgJ39"}],"c8LXz":[function(require,module,exports) {
module.exports = require("2e84fb4af360f2ad").getBundleURL("ixJtV") + "icon-previous.073fbd70.svg" + "?" + Date.now();

},{"2e84fb4af360f2ad":"lgJ39"}],"fnnRD":[function(require,module,exports) {
module.exports = require("4651fb9f3804c353").getBundleURL("ixJtV") + "icon-next.5240f3bb.svg" + "?" + Date.now();

},{"4651fb9f3804c353":"lgJ39"}],"72Prf":[function(require,module,exports) {
module.exports = require("8d6191c74bd9fb8").getBundleURL("ixJtV") + "icon-previous-copy.9a1f6328.svg" + "?" + Date.now();

},{"8d6191c74bd9fb8":"lgJ39"}],"dmO1W":[function(require,module,exports) {
module.exports = require("87819400c5eb71c1").getBundleURL("ixJtV") + "icon-next-copy.2aad4151.svg" + "?" + Date.now();

},{"87819400c5eb71c1":"lgJ39"}],"5IhlW":[function(require,module,exports) {
module.exports = require("a479cbd004e300cd").getBundleURL("ixJtV") + "image-product-1.5f963ded.jpg" + "?" + Date.now();

},{"a479cbd004e300cd":"lgJ39"}],"tldVd":[function(require,module,exports) {
module.exports = require("5b41fc2531f3b1bc").getBundleURL("ixJtV") + "image-product-2.6c550b84.jpg" + "?" + Date.now();

},{"5b41fc2531f3b1bc":"lgJ39"}],"hWdlO":[function(require,module,exports) {
module.exports = require("1b8f3e1365c2ffeb").getBundleURL("ixJtV") + "image-product-3.ee366c07.jpg" + "?" + Date.now();

},{"1b8f3e1365c2ffeb":"lgJ39"}],"a3K30":[function(require,module,exports) {
module.exports = require("fd5407b2e6bc86bf").getBundleURL("ixJtV") + "image-product-4.20ac56af.jpg" + "?" + Date.now();

},{"fd5407b2e6bc86bf":"lgJ39"}],"8Jmcp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NavView {
    _nav = document.querySelector(".ul");
    _overLay = document.querySelector(".overlay");
    _menuBtn = document.querySelector(".menu--icon");
    _menuOpn = document.querySelector(".menu");
    _menuClose = document.querySelector(".close");
    openNav() {
        this._nav.classList.toggle("open-nav");
        this._overLay.classList.toggle("hidden");
        this._menuClose.classList.toggle("hidden");
        this._menuOpn.classList.toggle("hidden");
    }
    handlerOpenNav(handler) {
        this._menuBtn.addEventListener("click", handler);
    }
}
exports.default = new NavView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnUwE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class HoverView {
    _parentEl = document.querySelector(".show_products");
    _img = document.querySelectorAll(".chng_btn");
    _canclelImg1 = this._parentEl.querySelector(".active");
    _canclelImg2 = this._parentEl.querySelector(".hover");
    handleHover() {
        this._parentEl.addEventListener("mouseover", (e)=>{
            const btn = e.target.closest(".cng_cont");
            if (!btn) return;
            if (btn.querySelector(".chng_btn").classList.contains("prev_btn")) {
                btn.querySelector(".prev-1").classList.toggle("hidden");
                btn.querySelector(".prev-2").classList.toggle("hidden");
            } else if (btn.querySelector(".chng_btn").classList.contains("nex_btn")) {
                btn.querySelector(".nex-1").classList.toggle("hidden");
                btn.querySelector(".nex-2").classList.toggle("hidden");
            }
        // this._img.style.fill = "#ff7e1b";
        });
    }
    handleMouseOut() {
        this._parentEl.addEventListener("mouseout", (e)=>{
            const btn = e.target.closest(".cng_cont");
            if (!btn) return;
            if (btn.querySelector(".chng_btn").classList.contains("prev_btn")) {
                btn.querySelector(".prev-1").classList.toggle("hidden");
                btn.querySelector(".prev-2").classList.toggle("hidden");
            } else if (btn.querySelector(".chng_btn").classList.contains("nex_btn")) {
                btn.querySelector(".nex-1").classList.toggle("hidden");
                btn.querySelector(".nex-2").classList.toggle("hidden");
            }
            btn.style.fill = "#ffff";
        });
    }
    handleHoverCancBtn() {
        this._parentEl.addEventListener("mouseover", (e)=>{
            const btn = e.target.closest(".close__btn");
            if (!btn) return;
            this._parentEl.querySelector(".hover").classList.toggle("hidden");
            this._parentEl.querySelector(".active").classList.toggle("hidden");
            btn.style.transition = "all 600ms";
        // console.log(btn);
        });
    }
    handleMouseOutlose() {
        this._parentEl.addEventListener("mouseout", (e)=>{
            const btn = e.target.closest(".close__btn");
            if (!btn) return;
            this._parentEl.querySelector(".hover").classList.toggle("hidden");
            this._parentEl.querySelector(".active").classList.toggle("hidden");
            btn.style.transition = "all 600ms";
        });
    }
    activeEvent() {
        document.querySelector(".ul").addEventListener("click", (e)=>{
            const list = e.target.closest(".list");
            if (!list) return;
            document.querySelectorAll(".list").forEach((list)=>list.classList.remove("border-shit"));
            list.classList.add("border-shit");
        });
    }
}
exports.default = new HoverView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gl6Mp","8lRBv"], "8lRBv", "parcelRequirebd42")

//# sourceMappingURL=index.59a40e7a.js.map
