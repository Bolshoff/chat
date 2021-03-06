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
})({"hqSpz":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "04c3a0646690e0da";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] ???? Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ??? Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>???? ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2OpUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _chatWindowElementsJs = require("./chat_window_elements.js");
var _settingsElementsJs = require("./settings_elements.js");
var _authorizationElementsJs = require("./authorization_elements.js");
var _submitJs = require("./submit.js");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _webSocketOperations = require("./webSocketOperations");
var _webSocketOperationsDefault = parcelHelpers.interopDefault(_webSocketOperations);
_chatWindowElementsJs.CHAT_SCREEN_ELEMENTS.SETTING_BUTTON.addEventListener('click', ()=>{
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.remove('hide');
});
_settingsElementsJs.SETTINGS_ELEMENTS.SETTING_CLOSE.addEventListener('click', ()=>{
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.add('hide');
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.add('hide');
});
_settingsElementsJs.SETTINGS_ELEMENTS.SETTING_BACKGROUND.addEventListener('click', (e)=>{
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.add('hide');
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.add('hide');
    _authorizationElementsJs.AUTH_ELEMENTS.AUTH_WINDOW.classList.add('hide');
    _submitJs.SUBMIT_ELEMENTS.CODE.classList.add('hide');
});
_chatWindowElementsJs.CHAT_SCREEN_ELEMENTS.INPUT_FORM.addEventListener('submit', (e)=>{
    e.preventDefault();
    _webSocketOperations.sendMessage();
    _chatWindowElementsJs.CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value = '';
});
_authorizationElementsJs.AUTH_ELEMENTS.CLOSE.addEventListener('click', ()=>{
    _submitJs.SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.remove('hide');
    _authorizationElementsJs.AUTH_ELEMENTS.AUTH_WINDOW.classList.add('hide');
});
_submitJs.SUBMIT_ELEMENTS.CLOSE.addEventListener('click', ()=>{
    _submitJs.SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.add('hide');
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
});
_submitJs.SUBMIT_ELEMENTS.CODE_FORM.addEventListener('submit', (e)=>{
    _submitJs.SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.add('hide');
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
    e.preventDefault();
    setCookiesToken();
});
_authorizationElementsJs.AUTH_ELEMENTS.MAIL_FORM.addEventListener('submit', (e)=>{
    e.preventDefault();
    _authorizationElementsJs.getAuthCodeForMail();
    _authorizationElementsJs.AUTH_ELEMENTS.AUTH_WINDOW.classList.add('hide');
    _submitJs.SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.remove('hide');
});
function setCookiesToken() {
    const token = _submitJs.SUBMIT_ELEMENTS.CODE.value;
    _jsCookieDefault.default.set('token', `${token}`);
    showUserNameWindow();
}
function showUserNameWindow() {
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.remove('hide');
    _submitJs.SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.add('hide');
}
_settingsElementsJs.SETTINGS_ELEMENTS.SETTING_NAME_FORM.addEventListener('submit', (e)=>{
    e.preventDefault();
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.add('hide');
    _settingsElementsJs.SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.add('hide');
    _settingsElementsJs.setUserName();
    _chatWindowElementsJs.getMessageStory();
    _webSocketOperations.connectOnServer();
    setTimeout(showUserName, 1000);
});
async function showUserName() {
    let token = _jsCookieDefault.default.get('token');
    try {
        let user = await fetch('https://mighty-cove-31255.herokuapp.com/api/user/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        let userName = await user.json();
        document.querySelector('.nickname').textContent = `??????: ${userName.name}`;
    } catch (e) {
        alert(e);
    }
}
_chatWindowElementsJs.CHAT_SCREEN_ELEMENTS.QUIT_BUTTON.addEventListener('click', ()=>{
    _webSocketOperationsDefault.default.close(1000, '?????????? ???? ????????');
});

},{"./chat_window_elements.js":"kWvmn","./settings_elements.js":"hjjhO","./authorization_elements.js":"aBJMP","./submit.js":"9jUCy","js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./webSocketOperations":"83w8i"}],"kWvmn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CHAT_SCREEN_ELEMENTS", ()=>CHAT_SCREEN_ELEMENTS
);
parcelHelpers.export(exports, "getMessageStory", ()=>getMessageStory
);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _format = require("date-fns/format");
var _formatDefault = parcelHelpers.interopDefault(_format);
const CHAT_SCREEN_ELEMENTS = {
    SETTING_BUTTON: document.querySelector('.managing-chat__button-settings'),
    QUIT_BUTTON: document.querySelector('.managing-chat__button-quit'),
    MESSAGE_INPUT: document.querySelector('.input-chat__input'),
    SUBMIT_BUTTON: document.querySelector('.input-chat__submit-button'),
    INPUT_FORM: document.querySelector('.input-chat__form'),
    CHAT_SCREEN: document.querySelector('.chat-screen'),
    MESSAGE_SCREEN: document.querySelector('.message-screen'),
    OUTPUT_TEMPLATE: document.querySelector('#output-template'),
    OUTPUT_MESSAGE_TEXT: document.querySelector('.output-message__text'),
    INPUT_TEMPLATE: document.querySelector('#input-template'),
    INPUT_MESSAGE_TEXT: document.querySelector('.input-message__text'),
    MESSAGE_TIME: document.querySelector('.message__time'),
    MESSAGE_CONTAINER: document.querySelector('.container')
};
let messageStory;
async function getMessageStory() {
    const storyURL = 'https://mighty-cove-31255.herokuapp.com/api/messages';
    const token = _jsCookieDefault.default.get('token');
    let response = await fetch(storyURL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    messageStory = await response.json();
    showMessageStory(messageStory);
    return messageStory;
}
function showMessageStory(messageStory1) {
    let messageCount = messageStory1.messages.length - 20;
    if (messageStory1.messages.length < 20) messageCount = 0;
    for(let i = messageStory1.messages.length - 1; i > messageCount; i--)if (messageStory1.messages[i].user.email === 'abolshoff@yandex.ru') {
        let message = CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
        message.querySelector('.output-message__text').textContent = `??: ${messageStory1.messages[i].text}`;
        message.querySelector('.message__time').textContent = `${_formatDefault.default(new Date(messageStory1.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm")}`;
        CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(message);
    } else {
        let message = CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
        message.querySelector('.input-message__text').textContent = `${messageStory1.messages[i].user.name}: ${messageStory1.messages[i].text}`;
        message.querySelector('.message__time').textContent = `${_formatDefault.default(new Date(messageStory1.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm")}`;
        CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(message);
    }
    CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.scrollIntoView(false);
    messageStory1.messages = messageStory1.messages.slice(0, messageStory1.messages.length - 20);
}
CHAT_SCREEN_ELEMENTS.MESSAGE_CONTAINER.addEventListener('scroll', scrollListener);
function getLoadedMessagesHeight() {
    const messageBlock = document.querySelectorAll('.message');
    let messagesHeight = 0;
    for(let i = messageBlock.length - 1; i > messageBlock.length - 20; i--)messagesHeight += messageBlock[i].clientHeight;
    document.querySelector('.container').scrollTop = messagesHeight;
}
function showMessageAllHistoryLoad() {
    const allHistoryLoadMessage = document.createElement('div');
    allHistoryLoadMessage.classList.add('all-history-load-message');
    allHistoryLoadMessage.innerText = '?????? ?????????????? ??????????????????';
    CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(allHistoryLoadMessage);
}
function scrollListener() {
    if (messageStory.messages.length === 0 && document.querySelector('.container').scrollTop === 0) {
        showMessageAllHistoryLoad();
        document.querySelector('.container').removeEventListener('scroll', scrollListener);
    }
    if (document.querySelector('.container').scrollTop === 0) {
        showMessageStory(messageStory);
        getLoadedMessagesHeight();
    }
}

},{"js-cookie":"c8bBu","date-fns/format":"lnm6V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8bBu":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    /* eslint-disable no-var */ function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)target[key] = source[key];
        }
        return target;
    }
    /* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
        read: function(value) {
            if (value[0] === '"') value = value.slice(1, -1);
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(value) {
            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
    };
    /* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter1, defaultAttributes) {
        function set(key, value, attributes) {
            if (typeof document === 'undefined') return;
            attributes = assign({}, defaultAttributes, attributes);
            if (typeof attributes.expires === 'number') attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
            if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
            key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = '';
            for(var attributeName in attributes){
                if (!attributes[attributeName]) continue;
                stringifiedAttributes += '; ' + attributeName;
                if (attributes[attributeName] === true) continue;
                // Considers RFC 6265 section 5.2:
                // ...
                // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                //     character:
                // Consume the characters of the unparsed-attributes up to,
                // not including, the first %x3B (";") character.
                // ...
                stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
            }
            return document.cookie = key + '=' + converter1.write(value, key) + stringifiedAttributes;
        }
        function get(key) {
            if (typeof document === 'undefined' || arguments.length && !key) return;
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var jar = {};
            for(var i = 0; i < cookies.length; i++){
                var parts = cookies[i].split('=');
                var value = parts.slice(1).join('=');
                try {
                    var foundKey = decodeURIComponent(parts[0]);
                    jar[foundKey] = converter1.read(value, foundKey);
                    if (key === foundKey) break;
                } catch (e) {}
            }
            return key ? jar[key] : jar;
        }
        return Object.create({
            set: set,
            get: get,
            remove: function(key, attributes) {
                set(key, '', assign({}, attributes, {
                    expires: -1
                }));
            },
            withAttributes: function(attributes) {
                return init(this.converter, assign({}, this.attributes, attributes));
            },
            withConverter: function(converter) {
                return init(assign({}, this.converter, converter), this.attributes);
            }
        }, {
            attributes: {
                value: Object.freeze(defaultAttributes)
            },
            converter: {
                value: Object.freeze(converter1)
            }
        });
    }
    var api = init(defaultConverter, {
        path: '/'
    });
    /* eslint-enable no-var */ return api;
});

},{}],"lnm6V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isValid/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../locale/en-US/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../subMilliseconds/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toDate/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/format/formatters/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/format/longFormatters/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../_lib/protectedTokens/index.js");
var _indexJs8 = require("../_lib/toInteger/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../_lib/requiredArgs/index.js"); // This RegExp consists of three parts separated by `|`:
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs9);
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    _indexJsDefault8.default(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {};
    var locale = options.locale || _indexJsDefault1.default;
    var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault7.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault7.default(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault7.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault7.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if (!locale.localize) throw new RangeError('locale must contain localize property');
    if (!locale.formatLong) throw new RangeError('locale must contain formatLong property');
    var originalDate = _indexJsDefault3.default(dirtyDate);
    if (!_indexJsDefault.default(originalDate)) throw new RangeError('Invalid time value');
     // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = _indexJsDefault6.default(originalDate);
    var utcDate = _indexJsDefault2.default(originalDate, timezoneOffset);
    var formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale,
        _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === 'p' || firstCharacter === 'P') {
            var longFormatter = _indexJsDefault5.default[firstCharacter];
            return longFormatter(substring, locale.formatLong, formatterOptions);
        }
        return substring;
    }).join('').match(formattingTokensRegExp).map(function(substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") return "'";
        var firstCharacter = substring[0];
        if (firstCharacter === "'") return cleanEscapedString(substring);
        var formatter = _indexJsDefault4.default[firstCharacter];
        if (formatter) {
            if (!options.useAdditionalWeekYearTokens && _indexJs7.isProtectedWeekYearToken(substring)) _indexJs7.throwProtectedError(substring, dirtyFormatStr, dirtyDate);
            if (!options.useAdditionalDayOfYearTokens && _indexJs7.isProtectedDayOfYearToken(substring)) _indexJs7.throwProtectedError(substring, dirtyFormatStr, dirtyDate);
            return formatter(utcDate, substring, locale.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        return substring;
    }).join('');
    return result;
}
exports.default = format;
function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

},{"../isValid/index.js":"eXoMl","../locale/en-US/index.js":"8XKCq","../subMilliseconds/index.js":"lL2M9","../toDate/index.js":"fsust","../_lib/format/formatters/index.js":"3cYKM","../_lib/format/longFormatters/index.js":"1ztit","../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../_lib/protectedTokens/index.js":"4R0Xq","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXoMl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isValid(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    if (!_indexJsDefault.default(dirtyDate) && typeof dirtyDate !== 'number') return false;
    var date = _indexJsDefault1.default(dirtyDate);
    return !isNaN(Number(date));
}
exports.default = isValid;

},{"../isDate/index.js":"kqNhT","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqNhT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function isDate(value) {
    _indexJsDefault.default(1, arguments);
    return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}
exports.default = isDate;

},{"../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wUgQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function requiredArgs(required, args) {
    if (args.length < required) throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
}
exports.default = requiredArgs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"fsust":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function toDate(argument) {
    _indexJsDefault.default(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date
    if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
    else if (typeof argument === 'number' || argStr === '[object Number]') return new Date(argument);
    else {
        if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
exports.default = toDate;

},{"../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8XKCq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./_lib/formatDistance/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./_lib/formatLong/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./_lib/formatRelative/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./_lib/localize/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./_lib/match/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */ var locale = {
    code: 'en-US',
    formatDistance: _indexJsDefault.default,
    formatLong: _indexJsDefault1.default,
    formatRelative: _indexJsDefault2.default,
    localize: _indexJsDefault3.default,
    match: _indexJsDefault4.default,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
exports.default = locale;

},{"./_lib/formatDistance/index.js":"lLrcE","./_lib/formatLong/index.js":"cA6Xb","./_lib/formatRelative/index.js":"9QlMp","./_lib/localize/index.js":"jv1Fa","./_lib/match/index.js":"1wA2o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLrcE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds'
    },
    xSeconds: {
        one: '1 second',
        other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes'
    },
    xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes'
    },
    aboutXHours: {
        one: 'about 1 hour',
        other: 'about {{count}} hours'
    },
    xHours: {
        one: '1 hour',
        other: '{{count}} hours'
    },
    xDays: {
        one: '1 day',
        other: '{{count}} days'
    },
    aboutXWeeks: {
        one: 'about 1 week',
        other: 'about {{count}} weeks'
    },
    xWeeks: {
        one: '1 week',
        other: '{{count}} weeks'
    },
    aboutXMonths: {
        one: 'about 1 month',
        other: 'about {{count}} months'
    },
    xMonths: {
        one: '1 month',
        other: '{{count}} months'
    },
    aboutXYears: {
        one: 'about 1 year',
        other: 'about {{count}} years'
    },
    xYears: {
        one: '1 year',
        other: '{{count}} years'
    },
    overXYears: {
        one: 'over 1 year',
        other: 'over {{count}} years'
    },
    almostXYears: {
        one: 'almost 1 year',
        other: 'almost {{count}} years'
    }
};
var formatDistance = function(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === 'string') result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace('{{count}}', count.toString());
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) return 'in ' + result;
        else return result + ' ago';
    }
    return result;
};
exports.default = formatDistance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cA6Xb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildFormatLongFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
};
var timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
};
var formatLong = {
    date: _indexJsDefault.default({
        formats: dateFormats,
        defaultWidth: 'full'
    }),
    time: _indexJsDefault.default({
        formats: timeFormats,
        defaultWidth: 'full'
    }),
    dateTime: _indexJsDefault.default({
        formats: dateTimeFormats,
        defaultWidth: 'full'
    })
};
exports.default = formatLong;

},{"../../../_lib/buildFormatLongFn/index.js":"h1FGd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1FGd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // TODO: Remove String()
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
exports.default = buildFormatLongFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9QlMp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
};
var formatRelative = function(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
exports.default = formatRelative;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jv1Fa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildLocalizeFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var eraValues = {
    narrow: [
        'B',
        'A'
    ],
    abbreviated: [
        'BC',
        'AD'
    ],
    wide: [
        'Before Christ',
        'Anno Domini'
    ]
};
var quarterValues = {
    narrow: [
        '1',
        '2',
        '3',
        '4'
    ],
    abbreviated: [
        'Q1',
        'Q2',
        'Q3',
        'Q4'
    ],
    wide: [
        '1st quarter',
        '2nd quarter',
        '3rd quarter',
        '4th quarter'
    ]
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
    narrow: [
        'J',
        'F',
        'M',
        'A',
        'M',
        'J',
        'J',
        'A',
        'S',
        'O',
        'N',
        'D'
    ],
    abbreviated: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    wide: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
};
var dayValues = {
    narrow: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
    ],
    short: [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
    ],
    abbreviated: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ],
    wide: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
};
var dayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    }
};
var ordinalNumber = function(dirtyNumber, _options) {
    var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + 'st';
        case 2:
            return number + 'nd';
        case 3:
            return number + 'rd';
    }
    return number + 'th';
};
var localize = {
    ordinalNumber: ordinalNumber,
    era: _indexJsDefault.default({
        values: eraValues,
        defaultWidth: 'wide'
    }),
    quarter: _indexJsDefault.default({
        values: quarterValues,
        defaultWidth: 'wide',
        argumentCallback: function(quarter) {
            return quarter - 1;
        }
    }),
    month: _indexJsDefault.default({
        values: monthValues,
        defaultWidth: 'wide'
    }),
    day: _indexJsDefault.default({
        values: dayValues,
        defaultWidth: 'wide'
    }),
    dayPeriod: _indexJsDefault.default({
        values: dayPeriodValues,
        defaultWidth: 'wide',
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: 'wide'
    })
};
exports.default = localize;

},{"../../../_lib/buildLocalizeFn/index.js":"5l2rZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5l2rZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildLocalizeFn(args) {
    return function(dirtyIndex, dirtyOptions) {
        var options = dirtyOptions || {};
        var context = options.context ? String(options.context) : 'standalone';
        var valuesArray;
        if (context === 'formatting' && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
exports.default = buildLocalizeFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wA2o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildMatchFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/buildMatchPatternFn/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: _indexJsDefault1.default({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function(value) {
            return parseInt(value, 10);
        }
    }),
    era: _indexJsDefault.default({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseEraPatterns,
        defaultParseWidth: 'any'
    }),
    quarter: _indexJsDefault.default({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: 'any',
        valueCallback: function(index) {
            return index + 1;
        }
    }),
    month: _indexJsDefault.default({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: 'any'
    }),
    day: _indexJsDefault.default({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseDayPatterns,
        defaultParseWidth: 'any'
    }),
    dayPeriod: _indexJsDefault.default({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: 'any',
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: 'any'
    })
};
exports.default = match;

},{"../../../_lib/buildMatchFn/index.js":"2nEf9","../../../_lib/buildMatchPatternFn/index.js":"4GjCS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nEf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchFn;
function findKey(object, predicate) {
    for(var key in object){
        if (object.hasOwnProperty(key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4GjCS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchPatternFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lL2M9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subMilliseconds(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subMilliseconds;

},{"../_lib/toInteger/index.js":"f7kKX","../addMilliseconds/index.js":"7Tp9s","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7kKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) return NaN;
    var number = Number(dirtyNumber);
    if (isNaN(number)) return number;
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}
exports.default = toInteger;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Tp9s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addMilliseconds(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var timestamp = _indexJsDefault1.default(dirtyDate).getTime();
    var amount = _indexJsDefault.default(dirtyAmount);
    return new Date(timestamp + amount);
}
exports.default = addMilliseconds;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3cYKM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/getUTCDayOfYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/getUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../../../_lib/getUTCISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../../../_lib/getUTCWeek/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../../../_lib/getUTCWeekYear/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../../addLeadingZeros/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../lightFormatters/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var dayPeriodEnum = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */ var formatters = {
    // Era
    G: function(date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case 'G':
            case 'GG':
            case 'GGG':
                return localize.era(era, {
                    width: 'abbreviated'
                });
            // A, B
            case 'GGGGG':
                return localize.era(era, {
                    width: 'narrow'
                });
            // Anno Domini, Before Christ
            case 'GGGG':
            default:
                return localize.era(era, {
                    width: 'wide'
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === 'yo') {
            var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: 'year'
            });
        }
        return _indexJsDefault6.default.y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        var signedWeekYear = _indexJsDefault4.default(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year
        if (token === 'YY') {
            var twoDigitYear = weekYear % 100;
            return _indexJsDefault5.default(twoDigitYear, 2);
        } // Ordinal number
        if (token === 'Yo') return localize.ordinalNumber(weekYear, {
            unit: 'year'
        });
         // Padding
        return _indexJsDefault5.default(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        var isoWeekYear = _indexJsDefault2.default(date); // Padding
        return _indexJsDefault5.default(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        var year = date.getUTCFullYear();
        return _indexJsDefault5.default(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case 'Q':
                return String(quarter);
            // 01, 02, 03, 04
            case 'QQ':
                return _indexJsDefault5.default(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case 'Qo':
                return localize.ordinalNumber(quarter, {
                    unit: 'quarter'
                });
            // Q1, Q2, Q3, Q4
            case 'QQQ':
                return localize.quarter(quarter, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case 'QQQQQ':
                return localize.quarter(quarter, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // 1st quarter, 2nd quarter, ...
            case 'QQQQ':
            default:
                return localize.quarter(quarter, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case 'q':
                return String(quarter);
            // 01, 02, 03, 04
            case 'qq':
                return _indexJsDefault5.default(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case 'qo':
                return localize.ordinalNumber(quarter, {
                    unit: 'quarter'
                });
            // Q1, Q2, Q3, Q4
            case 'qqq':
                return localize.quarter(quarter, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case 'qqqqq':
                return localize.quarter(quarter, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // 1st quarter, 2nd quarter, ...
            case 'qqqq':
            default:
                return localize.quarter(quarter, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            case 'M':
            case 'MM':
                return _indexJsDefault6.default.M(date, token);
            // 1st, 2nd, ..., 12th
            case 'Mo':
                return localize.ordinalNumber(month + 1, {
                    unit: 'month'
                });
            // Jan, Feb, ..., Dec
            case 'MMM':
                return localize.month(month, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // J, F, ..., D
            case 'MMMMM':
                return localize.month(month, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // January, February, ..., December
            case 'MMMM':
            default:
                return localize.month(month, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            // 1, 2, ..., 12
            case 'L':
                return String(month + 1);
            // 01, 02, ..., 12
            case 'LL':
                return _indexJsDefault5.default(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case 'Lo':
                return localize.ordinalNumber(month + 1, {
                    unit: 'month'
                });
            // Jan, Feb, ..., Dec
            case 'LLL':
                return localize.month(month, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // J, F, ..., D
            case 'LLLLL':
                return localize.month(month, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // January, February, ..., December
            case 'LLLL':
            default:
                return localize.month(month, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        var week = _indexJsDefault3.default(date, options);
        if (token === 'wo') return localize.ordinalNumber(week, {
            unit: 'week'
        });
        return _indexJsDefault5.default(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        var isoWeek = _indexJsDefault1.default(date);
        if (token === 'Io') return localize.ordinalNumber(isoWeek, {
            unit: 'week'
        });
        return _indexJsDefault5.default(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === 'do') return localize.ordinalNumber(date.getUTCDate(), {
            unit: 'date'
        });
        return _indexJsDefault6.default.d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        var dayOfYear = _indexJsDefault.default(date);
        if (token === 'Do') return localize.ordinalNumber(dayOfYear, {
            unit: 'dayOfYear'
        });
        return _indexJsDefault5.default(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        switch(token){
            // Tue
            case 'E':
            case 'EE':
            case 'EEE':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'EEEEE':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'EEEEEE':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'EEEE':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case 'e':
                return String(localDayOfWeek);
            // Padded numerical value
            case 'ee':
                return _indexJsDefault5.default(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case 'eo':
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: 'day'
                });
            case 'eee':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'eeeee':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'eeeeee':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'eeee':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case 'c':
                return String(localDayOfWeek);
            // Padded numerical value
            case 'cc':
                return _indexJsDefault5.default(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case 'co':
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: 'day'
                });
            case 'ccc':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // T
            case 'ccccc':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // Tu
            case 'cccccc':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'standalone'
                });
            // Tuesday
            case 'cccc':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case 'i':
                return String(isoDayOfWeek);
            // 02
            case 'ii':
                return _indexJsDefault5.default(isoDayOfWeek, token.length);
            // 2nd
            case 'io':
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: 'day'
                });
            // Tue
            case 'iii':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'iiiii':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'iiiiii':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'iiii':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'a':
            case 'aa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'aaa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                }).toLowerCase();
            case 'aaaaa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'aaaa':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
        else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
        else dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'b':
            case 'bb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'bbb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                }).toLowerCase();
            case 'bbbbb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'bbbb':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
        else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
        else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
        else dayPeriodEnumValue = dayPeriodEnum.night;
        switch(token){
            case 'B':
            case 'BB':
            case 'BBB':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'BBBBB':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'BBBB':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === 'ho') {
            var hours = date.getUTCHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: 'hour'
            });
        }
        return _indexJsDefault6.default.h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === 'Ho') return localize.ordinalNumber(date.getUTCHours(), {
            unit: 'hour'
        });
        return _indexJsDefault6.default.H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        var hours = date.getUTCHours() % 12;
        if (token === 'Ko') return localize.ordinalNumber(hours, {
            unit: 'hour'
        });
        return _indexJsDefault5.default(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        var hours = date.getUTCHours();
        if (hours === 0) hours = 24;
        if (token === 'ko') return localize.ordinalNumber(hours, {
            unit: 'hour'
        });
        return _indexJsDefault5.default(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === 'mo') return localize.ordinalNumber(date.getUTCMinutes(), {
            unit: 'minute'
        });
        return _indexJsDefault6.default.m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === 'so') return localize.ordinalNumber(date.getUTCSeconds(), {
            unit: 'second'
        });
        return _indexJsDefault6.default.s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return _indexJsDefault6.default.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) return 'Z';
        switch(token){
            // Hours and optional minutes
            case 'X':
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case 'XXXX':
            case 'XX':
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case 'XXXXX':
            case 'XXX':
            default:
                return formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case 'x':
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case 'xxxx':
            case 'xx':
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case 'xxxxx':
            case 'xxx':
            default:
                return formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case 'O':
            case 'OO':
            case 'OOO':
                return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
            // Long
            case 'OOOO':
            default:
                return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case 'z':
            case 'zz':
            case 'zzz':
                return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
            // Long
            case 'zzzz':
            default:
                return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1000);
        return _indexJsDefault5.default(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return _indexJsDefault5.default(timestamp, token.length);
    }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    var delimiter = dirtyDelimiter || '';
    return sign + String(hours) + delimiter + _indexJsDefault5.default(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
        var sign = offset > 0 ? '-' : '+';
        return sign + _indexJsDefault5.default(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = _indexJsDefault5.default(Math.floor(absOffset / 60), 2);
    var minutes = _indexJsDefault5.default(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
exports.default = formatters;

},{"../../../_lib/getUTCDayOfYear/index.js":"7wqIf","../../../_lib/getUTCISOWeek/index.js":"4nEkI","../../../_lib/getUTCISOWeekYear/index.js":"03QaQ","../../../_lib/getUTCWeek/index.js":"b7GgV","../../../_lib/getUTCWeekYear/index.js":"8i6st","../../addLeadingZeros/index.js":"6pP6x","../lightFormatters/index.js":"9oZiA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wqIf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
function getUTCDayOfYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
exports.default = getUTCDayOfYear;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nEkI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
function getUTCISOWeek(dirtyDate) {
    _indexJsDefault3.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var diff = _indexJsDefault1.default(date).getTime() - _indexJsDefault2.default(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getUTCISOWeek;

},{"../../toDate/index.js":"fsust","../startOfUTCISOWeek/index.js":"3ta4C","../startOfUTCISOWeekYear/index.js":"4u8O6","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ta4C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfUTCISOWeek(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var weekStartsOn = 1;
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfUTCISOWeek;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4u8O6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getUTCISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../requiredArgs/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfUTCISOWeekYear(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    var year = _indexJsDefault.default(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = _indexJsDefault1.default(fourthOfJanuary);
    return date;
}
exports.default = startOfUTCISOWeekYear;

},{"../getUTCISOWeekYear/index.js":"03QaQ","../startOfUTCISOWeek/index.js":"3ta4C","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03QaQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeek/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function getUTCISOWeekYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = _indexJsDefault2.default(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = _indexJsDefault2.default(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getUTCISOWeekYear;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../startOfUTCISOWeek/index.js":"3ta4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7GgV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
function getUTCWeek(dirtyDate, options) {
    _indexJsDefault3.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var diff = _indexJsDefault1.default(date, options).getTime() - _indexJsDefault2.default(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getUTCWeek;

},{"../../toDate/index.js":"fsust","../startOfUTCWeek/index.js":"dDZbE","../startOfUTCWeekYear/index.js":"bJAVl","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDZbE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfUTCWeek(dirtyDate, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault2.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault2.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfUTCWeek;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJAVl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getUTCWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault3.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault3.default(options.firstWeekContainsDate);
    var year = _indexJsDefault.default(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = _indexJsDefault2.default(firstWeek, dirtyOptions);
    return date;
}
exports.default = startOfUTCWeekYear;

},{"../getUTCWeekYear/index.js":"8i6st","../requiredArgs/index.js":"9wUgQ","../startOfUTCWeek/index.js":"dDZbE","../toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8i6st":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function getUTCWeekYear(dirtyDate, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault3.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault3.default(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = _indexJsDefault2.default(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = _indexJsDefault2.default(firstWeekOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getUTCWeekYear;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../startOfUTCWeek/index.js":"dDZbE","../toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pP6x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? '-' : '';
    var output = Math.abs(number).toString();
    while(output.length < targetLength)output = '0' + output;
    return sign + output;
}
exports.default = addLeadingZeros;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9oZiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../addLeadingZeros/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */ var formatters = {
    // Year
    y: function(date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return _indexJsDefault.default(token === 'yy' ? year % 100 : year, token.length);
    },
    // Month
    M: function(date, token) {
        var month = date.getUTCMonth();
        return token === 'M' ? String(month + 1) : _indexJsDefault.default(month + 1, 2);
    },
    // Day of the month
    d: function(date, token) {
        return _indexJsDefault.default(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'a':
            case 'aa':
                return dayPeriodEnumValue.toUpperCase();
            case 'aaa':
                return dayPeriodEnumValue;
            case 'aaaaa':
                return dayPeriodEnumValue[0];
            case 'aaaa':
            default:
                return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
        }
    },
    // Hour [1-12]
    h: function(date, token) {
        return _indexJsDefault.default(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function(date, token) {
        return _indexJsDefault.default(date.getUTCHours(), token.length);
    },
    // Minute
    m: function(date, token) {
        return _indexJsDefault.default(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function(date, token) {
        return _indexJsDefault.default(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return _indexJsDefault.default(fractionalSeconds, token.length);
    }
};
exports.default = formatters;

},{"../../addLeadingZeros/index.js":"6pP6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ztit":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function dateLongFormatter(pattern, formatLong) {
    switch(pattern){
        case 'P':
            return formatLong.date({
                width: 'short'
            });
        case 'PP':
            return formatLong.date({
                width: 'medium'
            });
        case 'PPP':
            return formatLong.date({
                width: 'long'
            });
        case 'PPPP':
        default:
            return formatLong.date({
                width: 'full'
            });
    }
}
function timeLongFormatter(pattern, formatLong) {
    switch(pattern){
        case 'p':
            return formatLong.time({
                width: 'short'
            });
        case 'pp':
            return formatLong.time({
                width: 'medium'
            });
        case 'ppp':
            return formatLong.time({
                width: 'long'
            });
        case 'pppp':
        default:
            return formatLong.time({
                width: 'full'
            });
    }
}
function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) return dateLongFormatter(pattern, formatLong);
    var dateTimeFormat;
    switch(datePattern){
        case 'P':
            dateTimeFormat = formatLong.dateTime({
                width: 'short'
            });
            break;
        case 'PP':
            dateTimeFormat = formatLong.dateTime({
                width: 'medium'
            });
            break;
        case 'PPP':
            dateTimeFormat = formatLong.dateTime({
                width: 'long'
            });
            break;
        case 'PPPP':
        default:
            dateTimeFormat = formatLong.dateTime({
                width: 'full'
            });
            break;
    }
    return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
exports.default = longFormatters;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bc74C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
}
exports.default = getTimezoneOffsetInMilliseconds;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4R0Xq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isProtectedDayOfYearToken", ()=>isProtectedDayOfYearToken
);
parcelHelpers.export(exports, "isProtectedWeekYearToken", ()=>isProtectedWeekYearToken
);
parcelHelpers.export(exports, "throwProtectedError", ()=>throwProtectedError
);
var protectedDayOfYearTokens = [
    'D',
    'DD'
];
var protectedWeekYearTokens = [
    'YY',
    'YYYY'
];
function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
    if (token === 'YYYY') throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === 'YY') throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === 'D') throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === 'DD') throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjjhO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SETTINGS_ELEMENTS", ()=>SETTINGS_ELEMENTS
);
parcelHelpers.export(exports, "setUserName", ()=>setUserName
);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
const SETTINGS_ELEMENTS = {
    SETTING_BACKGROUND: document.querySelector('.modal-background'),
    SETTING_CLOSE: document.querySelector('.chat-settings__close-button'),
    SETTING_NAME_FORM: document.querySelector('.chat-settings__user-name-form'),
    SETTING_NAME_INPUT: document.querySelector('.chat-settings__user-name-input'),
    SETTING_NAME_SUBMIT: document.querySelector('.chat-settings__user-name-submit-button'),
    SETTING_WINDOW: document.querySelector('.chat-settings__window')
};
async function setUserName() {
    const url = "https://mighty-cove-31255.herokuapp.com/api/user";
    const token = _jsCookieDefault.default.get('token');
    const userName = SETTINGS_ELEMENTS.SETTING_NAME_INPUT.value;
    try {
        let response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name: `${userName}`
            })
        });
    } catch (e) {
        alert(e);
    }
}

},{"js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aBJMP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AUTH_ELEMENTS", ()=>AUTH_ELEMENTS
);
parcelHelpers.export(exports, "getAuthCodeForMail", ()=>getAuthCodeForMail
);
const AUTH_ELEMENTS = {
    CLOSE: document.querySelector('.authorization__close-button'),
    MAIL: document.querySelector('.authorization__mail-input'),
    MAIL_FORM: document.querySelector('.authorization__mail-form'),
    MAIL_SUBMIT: document.querySelector('.authorization__submit-button'),
    AUTH_WINDOW: document.querySelector('.authorization')
};
async function getAuthCodeForMail() {
    const url = 'https://mighty-cove-31255.herokuapp.com/api/user';
    let mail = {
        email: `${AUTH_ELEMENTS.MAIL.value}`
    };
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(mail)
        });
    } catch (e) {
        alert(e);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9jUCy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SUBMIT_ELEMENTS", ()=>SUBMIT_ELEMENTS
);
const SUBMIT_ELEMENTS = {
    CLOSE: document.querySelector('.submit__close-button'),
    CODE: document.querySelector('.submit__code-input'),
    CODE_FORM: document.querySelector('.submit__code-form'),
    CODE_SUBMIT: document.querySelector('.submit__submit-button'),
    SUBMIT_WINDOW: document.querySelector('.submit')
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"83w8i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "connectOnServer", ()=>connectOnServer
);
parcelHelpers.export(exports, "sendMessage", ()=>sendMessage
);
var _chatWindowElements = require("./chat_window_elements");
var _format = require("date-fns/format");
var _formatDefault = parcelHelpers.interopDefault(_format);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _reconnectingWebsocket = require("reconnecting-websocket");
var _reconnectingWebsocketDefault = parcelHelpers.interopDefault(_reconnectingWebsocket);
const url = 'mighty-cove-31255.herokuapp.com/websockets?';
const token = _jsCookieDefault.default.get('token');
const socket = new WebSocket(`ws://${url}${token}`);
function connectOnServer() {
    const socket1 = new WebSocket(`ws://${url}${token}`);
    socket1.onopen = function(e) {
        console.log(" ???????????????????? ??????????????????????, ???????????????? ????????????");
    };
    socket1.onmessage = function(event) {
        try {
            const messageText = JSON.parse(event.data);
            if (messageText.user.email === "abolshoff@yandex.ru") {
                let message = _chatWindowElements.CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
                message.querySelector('.output-message__text').textContent = `??: ${messageText.text}`;
                message.querySelector('.message__time').innerHTML = `${_formatDefault.default(new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm")}`;
                _chatWindowElements.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
            } else {
                let message = _chatWindowElements.CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
                message.querySelector('.input-message__text').textContent = `${messageText.user.name}: ${messageText.text}`;
                message.querySelector('.message__time').textContent = `${_formatDefault.default(new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm")}`;
                _chatWindowElements.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
            }
        } catch (e) {
            console.log(e);
        }
        const messageContainer = document.querySelector('.container');
        const isScrolledToBottom = messageContainer.scrollHeight - messageContainer.clientHeight <= messageContainer.scrollTop + 1;
        if (!isScrolledToBottom) messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    // if (document.querySelector('.container').scrollTop = document.querySelector('.container').scrollHeight){
    //   CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.scrollIntoView(false);
    // }
    };
// socket.onclose = function(event){
//   console.log(event.code);
//   console.log(event.reason);
//   console.log('???? ???????? ???? ?????????????? ??????????????');
//   const rws = new ReconnectingWebSocket(`ws://${url}${token}`);
// }
}
socket.onclose = function(event) {
    console.log(event.code);
    console.log(event.reason);
    console.log('???? ???????? ???? ?????????????? ??????????????');
    if (event.code === 1006) // const socket = new ReconnectingWebSocket(`ws://${url}${token}`);
    connectOnServer();
};
function sendMessage() {
    const outputMessage = _chatWindowElements.CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value;
    socket.send(JSON.stringify({
        text: `${outputMessage}`
    }));
}
exports.default = socket;

},{"./chat_window_elements":"kWvmn","date-fns/format":"lnm6V","js-cookie":"c8bBu","reconnecting-websocket":"foTU5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"foTU5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
var Event = /** @class */ function() {
    function Event1(type, target) {
        this.target = target;
        this.type = type;
    }
    return Event1;
}();
var ErrorEvent = /** @class */ function(_super) {
    __extends(ErrorEvent1, _super);
    function ErrorEvent1(error, target) {
        var _this = _super.call(this, 'error', target) || this;
        _this.message = error.message;
        _this.error = error;
        return _this;
    }
    return ErrorEvent1;
}(Event);
var CloseEvent = /** @class */ function(_super) {
    __extends(CloseEvent1, _super);
    function CloseEvent1(code, reason, target) {
        if (code === void 0) code = 1000;
        if (reason === void 0) reason = '';
        var _this = _super.call(this, 'close', target) || this;
        _this.wasClean = true;
        _this.code = code;
        _this.reason = reason;
        return _this;
    }
    return CloseEvent1;
}(Event);
/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */ var getGlobalWebSocket = function() {
    if (typeof WebSocket !== 'undefined') // @ts-ignore
    return WebSocket;
};
/**
 * Returns true if given argument looks like a WebSocket class
 */ var isWebSocket = function(w) {
    return typeof w !== 'undefined' && !!w && w.CLOSING === 2;
};
var DEFAULT = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    maxEnqueuedMessages: Infinity,
    startClosed: false,
    debug: false
};
var ReconnectingWebSocket = /** @class */ function() {
    function ReconnectingWebSocket1(url, protocols, options) {
        var _this = this;
        if (options === void 0) options = {};
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: []
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = 'blob';
        this._closeCalled = false;
        this._messageQueue = [];
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
         */ this.onclose = null;
        /**
         * An event listener to be called when an error occurs
         */ this.onerror = null;
        /**
         * An event listener to be called when a message is received from the server
         */ this.onmessage = null;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
         * this indicates that the connection is ready to send and receive data
         */ this.onopen = null;
        this._handleOpen = function(event) {
            _this._debug('open event');
            var _a = _this._options.minUptime, minUptime = _a === void 0 ? DEFAULT.minUptime : _a;
            clearTimeout(_this._connectTimeout);
            _this._uptimeTimeout = setTimeout(function() {
                return _this._acceptOpen();
            }, minUptime);
            _this._ws.binaryType = _this._binaryType;
            // send enqueued messages (messages sent before websocket open event)
            _this._messageQueue.forEach(function(message) {
                return _this._ws.send(message);
            });
            _this._messageQueue = [];
            if (_this.onopen) _this.onopen(event);
            _this._listeners.open.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
        };
        this._handleMessage = function(event) {
            _this._debug('message event');
            if (_this.onmessage) _this.onmessage(event);
            _this._listeners.message.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
        };
        this._handleError = function(event) {
            _this._debug('error event', event.message);
            _this._disconnect(undefined, event.message === 'TIMEOUT' ? 'timeout' : undefined);
            if (_this.onerror) _this.onerror(event);
            _this._debug('exec error listeners');
            _this._listeners.error.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
            _this._connect();
        };
        this._handleClose = function(event) {
            _this._debug('close event');
            _this._clearTimeouts();
            if (_this._shouldReconnect) _this._connect();
            if (_this.onclose) _this.onclose(event);
            _this._listeners.close.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options;
        if (this._options.startClosed) this._shouldReconnect = false;
        this._connect();
    }
    Object.defineProperty(ReconnectingWebSocket1, "CONNECTING", {
        get: function() {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1, "OPEN", {
        get: function() {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1, "CLOSING", {
        get: function() {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1, "CLOSED", {
        get: function() {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1.prototype, "CONNECTING", {
        get: function() {
            return ReconnectingWebSocket1.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1.prototype, "OPEN", {
        get: function() {
            return ReconnectingWebSocket1.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1.prototype, "CLOSING", {
        get: function() {
            return ReconnectingWebSocket1.CLOSING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1.prototype, "CLOSED", {
        get: function() {
            return ReconnectingWebSocket1.CLOSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1.prototype, "binaryType", {
        get: function() {
            return this._ws ? this._ws.binaryType : this._binaryType;
        },
        set: function(value) {
            this._binaryType = value;
            if (this._ws) this._ws.binaryType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1.prototype, "retryCount", {
        /**
         * Returns the number or connection retries
         */ get: function() {
            return Math.max(this._retryCount, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1.prototype, "bufferedAmount", {
        /**
         * The number of bytes of data that have been queued using calls to send() but not yet
         * transmitted to the network. This value resets to zero once all queued data has been sent.
         * This value does not reset to zero when the connection is closed; if you keep calling send(),
         * this will continue to climb. Read only
         */ get: function() {
            var bytes = this._messageQueue.reduce(function(acc, message) {
                if (typeof message === 'string') acc += message.length; // not byte size
                else if (message instanceof Blob) acc += message.size;
                else acc += message.byteLength;
                return acc;
            }, 0);
            return bytes + (this._ws ? this._ws.bufferedAmount : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1.prototype, "extensions", {
        /**
         * The extensions selected by the server. This is currently only the empty string or a list of
         * extensions as negotiated by the connection
         */ get: function() {
            return this._ws ? this._ws.extensions : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1.prototype, "protocol", {
        /**
         * A string indicating the name of the sub-protocol the server selected;
         * this will be one of the strings specified in the protocols parameter when creating the
         * WebSocket object
         */ get: function() {
            return this._ws ? this._ws.protocol : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1.prototype, "readyState", {
        /**
         * The current state of the connection; this is one of the Ready state constants
         */ get: function() {
            if (this._ws) return this._ws.readyState;
            return this._options.startClosed ? ReconnectingWebSocket1.CLOSED : ReconnectingWebSocket1.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket1.prototype, "url", {
        /**
         * The URL as resolved by the constructor
         */ get: function() {
            return this._ws ? this._ws.url : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */ ReconnectingWebSocket1.prototype.close = function(code, reason) {
        if (code === void 0) code = 1000;
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug('close enqueued: no ws instance');
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug('close: already closed');
            return;
        }
        this._ws.close(code, reason);
    };
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */ ReconnectingWebSocket1.prototype.reconnect = function(code, reason) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) this._connect();
        else {
            this._disconnect(code, reason);
            this._connect();
        }
    };
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */ ReconnectingWebSocket1.prototype.send = function(data) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug('send', data);
            this._ws.send(data);
        } else {
            var _a = this._options.maxEnqueuedMessages, maxEnqueuedMessages = _a === void 0 ? DEFAULT.maxEnqueuedMessages : _a;
            if (this._messageQueue.length < maxEnqueuedMessages) {
                this._debug('enqueue', data);
                this._messageQueue.push(data);
            }
        }
    };
    /**
     * Register an event handler of a specific event type
     */ ReconnectingWebSocket1.prototype.addEventListener = function(type, listener) {
        if (this._listeners[type]) // @ts-ignore
        this._listeners[type].push(listener);
    };
    ReconnectingWebSocket1.prototype.dispatchEvent = function(event) {
        var e_1, _a;
        var listeners = this._listeners[event.type];
        if (listeners) try {
            for(var listeners_1 = __values(listeners), listeners_1_1 = listeners_1.next(); !listeners_1_1.done; listeners_1_1 = listeners_1.next()){
                var listener = listeners_1_1.value;
                this._callEventListener(event, listener);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (listeners_1_1 && !listeners_1_1.done && (_a = listeners_1.return)) _a.call(listeners_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return true;
    };
    /**
     * Removes an event listener
     */ ReconnectingWebSocket1.prototype.removeEventListener = function(type, listener) {
        if (this._listeners[type]) // @ts-ignore
        this._listeners[type] = this._listeners[type].filter(function(l) {
            return l !== listener;
        });
    };
    ReconnectingWebSocket1.prototype._debug = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (this._options.debug) // not using spread because compiled version uses Symbols
        // tslint:disable-next-line
        console.log.apply(console, __spread([
            'RWS>'
        ], args));
    };
    ReconnectingWebSocket1.prototype._getNextDelay = function() {
        var _a = this._options, _b = _a.reconnectionDelayGrowFactor, reconnectionDelayGrowFactor = _b === void 0 ? DEFAULT.reconnectionDelayGrowFactor : _b, _c = _a.minReconnectionDelay, minReconnectionDelay = _c === void 0 ? DEFAULT.minReconnectionDelay : _c, _d = _a.maxReconnectionDelay, maxReconnectionDelay = _d === void 0 ? DEFAULT.maxReconnectionDelay : _d;
        var delay = 0;
        if (this._retryCount > 0) {
            delay = minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
            if (delay > maxReconnectionDelay) delay = maxReconnectionDelay;
        }
        this._debug('next delay', delay);
        return delay;
    };
    ReconnectingWebSocket1.prototype._wait = function() {
        var _this = this;
        return new Promise(function(resolve) {
            setTimeout(resolve, _this._getNextDelay());
        });
    };
    ReconnectingWebSocket1.prototype._getNextUrl = function(urlProvider) {
        if (typeof urlProvider === 'string') return Promise.resolve(urlProvider);
        if (typeof urlProvider === 'function') {
            var url = urlProvider();
            if (typeof url === 'string') return Promise.resolve(url);
            if (!!url.then) return url;
        }
        throw Error('Invalid URL');
    };
    ReconnectingWebSocket1.prototype._connect = function() {
        var _this = this;
        if (this._connectLock || !this._shouldReconnect) return;
        this._connectLock = true;
        var _a = this._options, _b = _a.maxRetries, maxRetries = _b === void 0 ? DEFAULT.maxRetries : _b, _c = _a.connectionTimeout, connectionTimeout = _c === void 0 ? DEFAULT.connectionTimeout : _c, _d = _a.WebSocket, WebSocket = _d === void 0 ? getGlobalWebSocket() : _d;
        if (this._retryCount >= maxRetries) {
            this._debug('max retries reached', this._retryCount, '>=', maxRetries);
            return;
        }
        this._retryCount++;
        this._debug('connect', this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket)) throw Error('No valid WebSocket class provided');
        this._wait().then(function() {
            return _this._getNextUrl(_this._url);
        }).then(function(url) {
            // close could be called before creating the ws
            if (_this._closeCalled) return;
            _this._debug('connect', {
                url: url,
                protocols: _this._protocols
            });
            _this._ws = _this._protocols ? new WebSocket(url, _this._protocols) : new WebSocket(url);
            _this._ws.binaryType = _this._binaryType;
            _this._connectLock = false;
            _this._addListeners();
            _this._connectTimeout = setTimeout(function() {
                return _this._handleTimeout();
            }, connectionTimeout);
        });
    };
    ReconnectingWebSocket1.prototype._handleTimeout = function() {
        this._debug('timeout event');
        this._handleError(new ErrorEvent(Error('TIMEOUT'), this));
    };
    ReconnectingWebSocket1.prototype._disconnect = function(code, reason) {
        if (code === void 0) code = 1000;
        this._clearTimeouts();
        if (!this._ws) return;
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new CloseEvent(code, reason, this));
        } catch (error) {
        // ignore
        }
    };
    ReconnectingWebSocket1.prototype._acceptOpen = function() {
        this._debug('accept open');
        this._retryCount = 0;
    };
    ReconnectingWebSocket1.prototype._callEventListener = function(event, listener) {
        if ('handleEvent' in listener) // @ts-ignore
        listener.handleEvent(event);
        else // @ts-ignore
        listener(event);
    };
    ReconnectingWebSocket1.prototype._removeListeners = function() {
        if (!this._ws) return;
        this._debug('removeListeners');
        this._ws.removeEventListener('open', this._handleOpen);
        this._ws.removeEventListener('close', this._handleClose);
        this._ws.removeEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener('error', this._handleError);
    };
    ReconnectingWebSocket1.prototype._addListeners = function() {
        if (!this._ws) return;
        this._debug('addListeners');
        this._ws.addEventListener('open', this._handleOpen);
        this._ws.addEventListener('close', this._handleClose);
        this._ws.addEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener('error', this._handleError);
    };
    ReconnectingWebSocket1.prototype._clearTimeouts = function() {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    };
    return ReconnectingWebSocket1;
}();
exports.default = ReconnectingWebSocket;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hqSpz","2OpUZ"], "2OpUZ", "parcelRequire25d8")

//# sourceMappingURL=index.6690e0da.js.map
