import {
  require_react_dom
} from "./chunk-PWZSRT5W.js";
import {
  __commonJS,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/lodash.throttle/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.throttle/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function throttle(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = throttle;
  }
});

// node_modules/react-scroll/modules/mixins/passive-event-listeners.js
var require_passive_event_listeners = __commonJS({
  "node_modules/react-scroll/modules/mixins/passive-event-listeners.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener2(target, eventName, listener) {
      var listenerName = listener.name;
      if (!listenerName) {
        listenerName = eventName;
        console.warn("Listener must be a named function.");
      }
      if (!attachedListeners.has(eventName)) attachedListeners.set(eventName, /* @__PURE__ */ new Set());
      var listeners = attachedListeners.get(eventName);
      if (listeners.has(listenerName)) return;
      var supportsPassiveOption = function() {
        var supportsPassiveOption2 = false;
        try {
          var opts = Object.defineProperty({}, "passive", {
            get: function get() {
              supportsPassiveOption2 = true;
            }
          });
          window.addEventListener("test", null, opts);
        } catch (e) {
        }
        return supportsPassiveOption2;
      }();
      target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
      listeners.add(listenerName);
    };
    var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener2(target, eventName, listener) {
      target.removeEventListener(eventName, listener);
      attachedListeners.get(eventName).delete(listener.name || eventName);
    };
    var attachedListeners = /* @__PURE__ */ new Map();
  }
});

// node_modules/react-scroll/modules/mixins/scroll-spy.js
var require_scroll_spy = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroll-spy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _lodash = require_lodash();
    var _lodash2 = _interopRequireDefault(_lodash);
    var _passiveEventListeners = require_passive_event_listeners();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var eventThrottler = function eventThrottler2(eventHandler) {
      var throttleAmount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
      return (0, _lodash2.default)(eventHandler, throttleAmount);
    };
    var scrollSpy = {
      spyCallbacks: [],
      spySetState: [],
      scrollSpyContainers: [],
      mount: function mount(scrollSpyContainer, throttle) {
        if (scrollSpyContainer) {
          var eventHandler = eventThrottler(function(event) {
            scrollSpy.scrollHandler(scrollSpyContainer);
          }, throttle);
          scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
          (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, "scroll", eventHandler);
          return function() {
            (0, _passiveEventListeners.removePassiveEventListener)(scrollSpyContainer, "scroll", eventHandler);
            scrollSpy.scrollSpyContainers.splice(scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer), 1);
          };
        }
        return function() {
        };
      },
      isMounted: function isMounted(scrollSpyContainer) {
        return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
      },
      currentPositionX: function currentPositionX(scrollSpyContainer) {
        if (scrollSpyContainer === document) {
          var supportPageOffset = window.scrollY !== void 0;
          var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
          return supportPageOffset ? window.scrollX : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
        } else {
          return scrollSpyContainer.scrollLeft;
        }
      },
      currentPositionY: function currentPositionY(scrollSpyContainer) {
        if (scrollSpyContainer === document) {
          var supportPageOffset = window.scrollX !== void 0;
          var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
          return supportPageOffset ? window.scrollY : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        } else {
          return scrollSpyContainer.scrollTop;
        }
      },
      scrollHandler: function scrollHandler(scrollSpyContainer) {
        var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
        callbacks.forEach(function(c) {
          return c(scrollSpy.currentPositionX(scrollSpyContainer), scrollSpy.currentPositionY(scrollSpyContainer));
        });
      },
      addStateHandler: function addStateHandler(handler) {
        scrollSpy.spySetState.push(handler);
      },
      addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
        var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];
        if (!container.spyCallbacks) {
          container.spyCallbacks = [];
        }
        container.spyCallbacks.push(handler);
      },
      updateStates: function updateStates() {
        scrollSpy.spySetState.forEach(function(s) {
          return s();
        });
      },
      unmount: function unmount(stateHandler, spyHandler) {
        scrollSpy.scrollSpyContainers.forEach(function(c) {
          return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.indexOf(spyHandler) > -1 && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
        });
        if (scrollSpy.spySetState && scrollSpy.spySetState.length && scrollSpy.spySetState.indexOf(stateHandler) > -1) {
          scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
        }
        document.removeEventListener("scroll", scrollSpy.scrollHandler);
      },
      update: function update() {
        return scrollSpy.scrollSpyContainers.forEach(function(c) {
          return scrollSpy.scrollHandler(c);
        });
      }
    };
    exports.default = scrollSpy;
  }
});

// node_modules/react-scroll/modules/mixins/utils.js
var require_utils = __commonJS({
  "node_modules/react-scroll/modules/mixins/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var updateHash = function updateHash2(hash, historyUpdate) {
      var hashVal = hash.indexOf("#") === 0 ? hash.substring(1) : hash;
      var hashToUpdate = hashVal ? "#" + hashVal : "";
      var curLoc = window && window.location;
      var urlToPush = hashToUpdate ? curLoc.pathname + curLoc.search + hashToUpdate : curLoc.pathname + curLoc.search;
      historyUpdate ? history.pushState(history.state, "", urlToPush) : history.replaceState(history.state, "", urlToPush);
    };
    var getHash = function getHash2() {
      return window.location.hash.replace(/^#/, "");
    };
    var filterElementInContainer = function filterElementInContainer2(container) {
      return function(element) {
        return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
      };
    };
    var isPositioned = function isPositioned2(element) {
      return getComputedStyle(element).position !== "static";
    };
    var getElementOffsetInfoUntil = function getElementOffsetInfoUntil2(element, predicate) {
      var offsetTop = element.offsetTop;
      var currentOffsetParent = element.offsetParent;
      while (currentOffsetParent && !predicate(currentOffsetParent)) {
        offsetTop += currentOffsetParent.offsetTop;
        currentOffsetParent = currentOffsetParent.offsetParent;
      }
      return { offsetTop, offsetParent: currentOffsetParent };
    };
    var scrollOffset = function scrollOffset2(c, t, horizontal) {
      if (horizontal) {
        return c === document ? t.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(c).position !== "static" ? t.offsetLeft : t.offsetLeft - c.offsetLeft;
      } else {
        if (c === document) {
          return t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        }
        if (isPositioned(c)) {
          if (t.offsetParent !== c) {
            var isContainerElementOrDocument = function isContainerElementOrDocument2(e) {
              return e === c || e === document;
            };
            var _getElementOffsetInfo = getElementOffsetInfoUntil(t, isContainerElementOrDocument), offsetTop = _getElementOffsetInfo.offsetTop, offsetParent = _getElementOffsetInfo.offsetParent;
            if (offsetParent !== c) {
              throw new Error("Seems containerElement is not an ancestor of the Element");
            }
            return offsetTop;
          }
          return t.offsetTop;
        }
        if (t.offsetParent === c.offsetParent) {
          return t.offsetTop - c.offsetTop;
        }
        var isDocument = function isDocument2(e) {
          return e === document;
        };
        return getElementOffsetInfoUntil(t, isDocument).offsetTop - getElementOffsetInfoUntil(c, isDocument).offsetTop;
      }
    };
    exports.default = {
      updateHash,
      getHash,
      filterElementInContainer,
      scrollOffset
    };
  }
});

// node_modules/react-scroll/modules/mixins/smooth.js
var require_smooth = __commonJS({
  "node_modules/react-scroll/modules/mixins/smooth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = {
      /*
       * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
       */
      defaultEasing: function defaultEasing(x) {
        if (x < 0.5) {
          return Math.pow(x * 2, 2) / 2;
        }
        return 1 - Math.pow((1 - x) * 2, 2) / 2;
      },
      /*
       * https://gist.github.com/gre/1650294
       */
      // no easing, no acceleration
      linear: function linear(x) {
        return x;
      },
      // accelerating from zero velocity
      easeInQuad: function easeInQuad(x) {
        return x * x;
      },
      // decelerating to zero velocity
      easeOutQuad: function easeOutQuad(x) {
        return x * (2 - x);
      },
      // acceleration until halfway, then deceleration
      easeInOutQuad: function easeInOutQuad(x) {
        return x < 0.5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
      },
      // accelerating from zero velocity 
      easeInCubic: function easeInCubic(x) {
        return x * x * x;
      },
      // decelerating to zero velocity π
      easeOutCubic: function easeOutCubic(x) {
        return --x * x * x + 1;
      },
      // acceleration until halfway, then deceleration 
      easeInOutCubic: function easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
      },
      // accelerating from zero velocity 
      easeInQuart: function easeInQuart(x) {
        return x * x * x * x;
      },
      // decelerating to zero velocity 
      easeOutQuart: function easeOutQuart(x) {
        return 1 - --x * x * x * x;
      },
      // acceleration until halfway, then deceleration
      easeInOutQuart: function easeInOutQuart(x) {
        return x < 0.5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
      },
      // accelerating from zero velocity
      easeInQuint: function easeInQuint(x) {
        return x * x * x * x * x;
      },
      // decelerating to zero velocity
      easeOutQuint: function easeOutQuint(x) {
        return 1 + --x * x * x * x * x;
      },
      // acceleration until halfway, then deceleration 
      easeInOutQuint: function easeInOutQuint(x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
      }
    };
  }
});

// node_modules/react-scroll/modules/mixins/cancel-events.js
var require_cancel_events = __commonJS({
  "node_modules/react-scroll/modules/mixins/cancel-events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _passiveEventListeners = require_passive_event_listeners();
    var events = ["mousedown", "wheel", "touchmove", "keydown"];
    exports.default = {
      subscribe: function subscribe(cancelEvent) {
        return typeof document !== "undefined" && events.forEach(function(event) {
          return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
        });
      }
    };
  }
});

// node_modules/react-scroll/modules/mixins/scroll-events.js
var require_scroll_events = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroll-events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Events = {
      registered: {},
      scrollEvent: {
        register: function register(evtName, callback) {
          Events.registered[evtName] = callback;
        },
        remove: function remove(evtName) {
          Events.registered[evtName] = null;
        }
      }
    };
    exports.default = Events;
  }
});

// node_modules/react-scroll/modules/mixins/animate-scroll.js
var require_animate_scroll = __commonJS({
  "node_modules/react-scroll/modules/mixins/animate-scroll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _utils = require_utils();
    var _utils2 = _interopRequireDefault(_utils);
    var _smooth = require_smooth();
    var _smooth2 = _interopRequireDefault(_smooth);
    var _cancelEvents = require_cancel_events();
    var _cancelEvents2 = _interopRequireDefault(_cancelEvents);
    var _scrollEvents = require_scroll_events();
    var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var getAnimationType = function getAnimationType2(options) {
      return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
    };
    var functionWrapper = function functionWrapper2(value) {
      return typeof value === "function" ? value : function() {
        return value;
      };
    };
    var currentWindowProperties = function currentWindowProperties2() {
      if (typeof window !== "undefined") {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
      }
    };
    var requestAnimationFrameHelper = function() {
      return currentWindowProperties() || function(callback, element, delay) {
        window.setTimeout(callback, delay || 1e3 / 60, (/* @__PURE__ */ new Date()).getTime());
      };
    }();
    var makeData = function makeData2() {
      return {
        currentPosition: 0,
        startPosition: 0,
        targetPosition: 0,
        progress: 0,
        duration: 0,
        cancel: false,
        target: null,
        containerElement: null,
        to: null,
        start: null,
        delta: null,
        percent: null,
        delayTimeout: null
      };
    };
    var currentPositionX = function currentPositionX2(options) {
      var containerElement = options.data.containerElement;
      if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollLeft;
      } else {
        var supportPageOffset = window.pageXOffset !== void 0;
        var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
        return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
      }
    };
    var currentPositionY = function currentPositionY2(options) {
      var containerElement = options.data.containerElement;
      if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollTop;
      } else {
        var supportPageOffset = window.pageXOffset !== void 0;
        var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
      }
    };
    var scrollContainerWidth = function scrollContainerWidth2(options) {
      var containerElement = options.data.containerElement;
      if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollWidth - containerElement.offsetWidth;
      } else {
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
      }
    };
    var scrollContainerHeight = function scrollContainerHeight2(options) {
      var containerElement = options.data.containerElement;
      if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollHeight - containerElement.offsetHeight;
      } else {
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      }
    };
    var animateScroll = function animateScroll2(easing, options, timestamp) {
      var data = options.data;
      if (!options.ignoreCancelEvents && data.cancel) {
        if (_scrollEvents2.default.registered["end"]) {
          _scrollEvents2.default.registered["end"](data.to, data.target, data.currentPositionY);
        }
        return;
      }
      ;
      data.delta = Math.round(data.targetPosition - data.startPosition);
      if (data.start === null) {
        data.start = timestamp;
      }
      data.progress = timestamp - data.start;
      data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);
      data.currentPosition = data.startPosition + Math.ceil(data.delta * data.percent);
      if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
        if (options.horizontal) {
          data.containerElement.scrollLeft = data.currentPosition;
        } else {
          data.containerElement.scrollTop = data.currentPosition;
        }
      } else {
        if (options.horizontal) {
          window.scrollTo(data.currentPosition, 0);
        } else {
          window.scrollTo(0, data.currentPosition);
        }
      }
      if (data.percent < 1) {
        var easedAnimate = animateScroll2.bind(null, easing, options);
        requestAnimationFrameHelper.call(window, easedAnimate);
        return;
      }
      if (_scrollEvents2.default.registered["end"]) {
        _scrollEvents2.default.registered["end"](data.to, data.target, data.currentPosition);
      }
    };
    var setContainer = function setContainer2(options) {
      options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
    };
    var animateTopScroll = function animateTopScroll2(scrollOffset, options, to, target) {
      options.data = options.data || makeData();
      window.clearTimeout(options.data.delayTimeout);
      var setCancel = function setCancel2() {
        options.data.cancel = true;
      };
      _cancelEvents2.default.subscribe(setCancel);
      setContainer(options);
      options.data.start = null;
      options.data.cancel = false;
      options.data.startPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
      options.data.targetPosition = options.absolute ? scrollOffset : scrollOffset + options.data.startPosition;
      if (options.data.startPosition === options.data.targetPosition) {
        if (_scrollEvents2.default.registered["end"]) {
          _scrollEvents2.default.registered["end"](options.data.to, options.data.target, options.data.currentPosition);
        }
        return;
      }
      options.data.delta = Math.round(options.data.targetPosition - options.data.startPosition);
      options.data.duration = functionWrapper(options.duration)(options.data.delta);
      options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1e3 : parseFloat(options.data.duration);
      options.data.to = to;
      options.data.target = target;
      var easing = getAnimationType(options);
      var easedAnimate = animateScroll.bind(null, easing, options);
      if (options && options.delay > 0) {
        options.data.delayTimeout = window.setTimeout(function() {
          if (_scrollEvents2.default.registered["begin"]) {
            _scrollEvents2.default.registered["begin"](options.data.to, options.data.target);
          }
          requestAnimationFrameHelper.call(window, easedAnimate);
        }, options.delay);
        return;
      }
      if (_scrollEvents2.default.registered["begin"]) {
        _scrollEvents2.default.registered["begin"](options.data.to, options.data.target);
      }
      requestAnimationFrameHelper.call(window, easedAnimate);
    };
    var proceedOptions = function proceedOptions2(options) {
      options = _extends({}, options);
      options.data = options.data || makeData();
      options.absolute = true;
      return options;
    };
    var scrollToTop = function scrollToTop2(options) {
      animateTopScroll(0, proceedOptions(options));
    };
    var scrollTo = function scrollTo2(toPosition, options) {
      animateTopScroll(toPosition, proceedOptions(options));
    };
    var scrollToBottom = function scrollToBottom2(options) {
      options = proceedOptions(options);
      setContainer(options);
      animateTopScroll(options.horizontal ? scrollContainerWidth(options) : scrollContainerHeight(options), options);
    };
    var scrollMore = function scrollMore2(toPosition, options) {
      options = proceedOptions(options);
      setContainer(options);
      var currentPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
      animateTopScroll(toPosition + currentPosition, options);
    };
    exports.default = {
      animateTopScroll,
      getAnimationType,
      scrollToTop,
      scrollToBottom,
      scrollTo,
      scrollMore
    };
  }
});

// node_modules/react-scroll/modules/mixins/scroller.js
var require_scroller = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroller.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _utils = require_utils();
    var _utils2 = _interopRequireDefault(_utils);
    var _animateScroll = require_animate_scroll();
    var _animateScroll2 = _interopRequireDefault(_animateScroll);
    var _scrollEvents = require_scroll_events();
    var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var __mapped = {};
    var __activeLink = void 0;
    exports.default = {
      unmount: function unmount() {
        __mapped = {};
      },
      register: function register(name, element) {
        __mapped[name] = element;
      },
      unregister: function unregister(name) {
        delete __mapped[name];
      },
      get: function get(name) {
        return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
      },
      setActiveLink: function setActiveLink(link) {
        return __activeLink = link;
      },
      getActiveLink: function getActiveLink() {
        return __activeLink;
      },
      scrollTo: function scrollTo(to, props) {
        var target = this.get(to);
        if (!target) {
          console.warn("target Element not found");
          return;
        }
        props = _extends({}, props, { absolute: false });
        var containerId = props.containerId;
        var container = props.container;
        var containerElement = void 0;
        if (containerId) {
          containerElement = document.getElementById(containerId);
        } else if (container && container.nodeType) {
          containerElement = container;
        } else {
          containerElement = document;
        }
        props.absolute = true;
        var horizontal = props.horizontal;
        var scrollOffset = _utils2.default.scrollOffset(containerElement, target, horizontal) + (props.offset || 0);
        if (!props.smooth) {
          if (_scrollEvents2.default.registered["begin"]) {
            _scrollEvents2.default.registered["begin"](to, target);
          }
          if (containerElement === document) {
            if (props.horizontal) {
              window.scrollTo(scrollOffset, 0);
            } else {
              window.scrollTo(0, scrollOffset);
            }
          } else {
            containerElement.scrollTop = scrollOffset;
          }
          if (_scrollEvents2.default.registered["end"]) {
            _scrollEvents2.default.registered["end"](to, target);
          }
          return;
        }
        _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
      }
    };
  }
});

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-scroll/modules/mixins/scroll-hash.js
var require_scroll_hash = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroll-hash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _passiveEventListeners = require_passive_event_listeners();
    var _utils = require_utils();
    var _utils2 = _interopRequireDefault(_utils);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var scrollHash = {
      mountFlag: false,
      initialized: false,
      scroller: null,
      containers: {},
      mount: function mount(scroller) {
        this.scroller = scroller;
        this.handleHashChange = this.handleHashChange.bind(this);
        window.addEventListener("hashchange", this.handleHashChange);
        this.initStateFromHash();
        this.mountFlag = true;
      },
      mapContainer: function mapContainer(to, container) {
        this.containers[to] = container;
      },
      isMounted: function isMounted() {
        return this.mountFlag;
      },
      isInitialized: function isInitialized() {
        return this.initialized;
      },
      initStateFromHash: function initStateFromHash() {
        var _this = this;
        var hash = this.getHash();
        if (hash) {
          window.setTimeout(function() {
            _this.scrollTo(hash, true);
            _this.initialized = true;
          }, 10);
        } else {
          this.initialized = true;
        }
      },
      scrollTo: function scrollTo(to, isInit) {
        var scroller = this.scroller;
        var element = scroller.get(to);
        if (element && (isInit || to !== scroller.getActiveLink())) {
          var container = this.containers[to] || document;
          scroller.scrollTo(to, { container });
        }
      },
      getHash: function getHash() {
        return _utils2.default.getHash();
      },
      changeHash: function changeHash(to, saveHashHistory) {
        if (this.isInitialized() && _utils2.default.getHash() !== to) {
          _utils2.default.updateHash(to, saveHashHistory);
        }
      },
      handleHashChange: function handleHashChange() {
        this.scrollTo(this.getHash());
      },
      unmount: function unmount() {
        this.scroller = null;
        this.containers = null;
        window.removeEventListener("hashchange", this.handleHashChange);
      }
    };
    exports.default = scrollHash;
  }
});

// node_modules/react-scroll/modules/mixins/scroll-link.js
var require_scroll_link = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroll-link.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _scrollSpy = require_scroll_spy();
    var _scrollSpy2 = _interopRequireDefault(_scrollSpy);
    var _scroller = require_scroller();
    var _scroller2 = _interopRequireDefault(_scroller);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _scrollHash = require_scroll_hash();
    var _scrollHash2 = _interopRequireDefault(_scrollHash);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var protoTypes = {
      to: _propTypes2.default.string.isRequired,
      containerId: _propTypes2.default.string,
      container: _propTypes2.default.object,
      activeClass: _propTypes2.default.string,
      activeStyle: _propTypes2.default.object,
      spy: _propTypes2.default.bool,
      horizontal: _propTypes2.default.bool,
      smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
      offset: _propTypes2.default.number,
      delay: _propTypes2.default.number,
      isDynamic: _propTypes2.default.bool,
      onClick: _propTypes2.default.func,
      duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
      absolute: _propTypes2.default.bool,
      onSetActive: _propTypes2.default.func,
      onSetInactive: _propTypes2.default.func,
      ignoreCancelEvents: _propTypes2.default.bool,
      hashSpy: _propTypes2.default.bool,
      saveHashHistory: _propTypes2.default.bool,
      spyThrottle: _propTypes2.default.number
    };
    exports.default = function(Component, customScroller) {
      var scroller = customScroller || _scroller2.default;
      var Link = function(_React$PureComponent) {
        _inherits(Link2, _React$PureComponent);
        function Link2(props) {
          _classCallCheck(this, Link2);
          var _this = _possibleConstructorReturn(this, (Link2.__proto__ || Object.getPrototypeOf(Link2)).call(this, props));
          _initialiseProps.call(_this);
          _this.state = {
            active: false
          };
          _this.beforeUnmountCallbacks = [];
          return _this;
        }
        _createClass(Link2, [{
          key: "getScrollSpyContainer",
          value: function getScrollSpyContainer() {
            var containerId = this.props.containerId;
            var container = this.props.container;
            if (containerId && !container) {
              return document.getElementById(containerId);
            }
            if (container && container.nodeType) {
              return container;
            }
            return document;
          }
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            if (this.props.spy || this.props.hashSpy) {
              var scrollSpyContainer = this.getScrollSpyContainer();
              if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
                var fn = _scrollSpy2.default.mount(scrollSpyContainer, this.props.spyThrottle);
                this.beforeUnmountCallbacks.push(fn);
              }
              if (this.props.hashSpy) {
                if (!_scrollHash2.default.isMounted()) {
                  _scrollHash2.default.mount(scroller);
                }
                _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
              }
              _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);
              this.setState({
                container: scrollSpyContainer
              });
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
            this.beforeUnmountCallbacks.forEach(function(fn) {
              return fn();
            });
          }
        }, {
          key: "render",
          value: function render() {
            var className = "";
            if (this.state && this.state.active) {
              className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
            } else {
              className = this.props.className;
            }
            var style = {};
            if (this.state && this.state.active) {
              style = _extends({}, this.props.style, this.props.activeStyle);
            } else {
              style = _extends({}, this.props.style);
            }
            var props = _extends({}, this.props);
            for (var prop in protoTypes) {
              if (props.hasOwnProperty(prop)) {
                delete props[prop];
              }
            }
            props.className = className;
            props.style = style;
            props.onClick = this.handleClick;
            return _react2.default.createElement(Component, props);
          }
        }]);
        return Link2;
      }(_react2.default.PureComponent);
      var _initialiseProps = function _initialiseProps2() {
        var _this2 = this;
        this.scrollTo = function(to, props) {
          scroller.scrollTo(to, _extends({}, _this2.state, props));
        };
        this.handleClick = function(event) {
          if (_this2.props.onClick) {
            _this2.props.onClick(event);
          }
          if (event.stopPropagation) event.stopPropagation();
          if (event.preventDefault) event.preventDefault();
          _this2.scrollTo(_this2.props.to, _this2.props);
        };
        this.spyHandler = function(x, y) {
          var scrollSpyContainer = _this2.getScrollSpyContainer();
          if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
            return;
          }
          var horizontal = _this2.props.horizontal;
          var to = _this2.props.to;
          var element = null;
          var isInside = void 0;
          var isOutside = void 0;
          if (horizontal) {
            var elemLeftBound = 0;
            var elemRightBound = 0;
            var containerLeft = 0;
            if (scrollSpyContainer.getBoundingClientRect) {
              var containerCords = scrollSpyContainer.getBoundingClientRect();
              containerLeft = containerCords.left;
            }
            if (!element || _this2.props.isDynamic) {
              element = scroller.get(to);
              if (!element) {
                return;
              }
              var cords = element.getBoundingClientRect();
              elemLeftBound = cords.left - containerLeft + x;
              elemRightBound = elemLeftBound + cords.width;
            }
            var offsetX = x - _this2.props.offset;
            isInside = offsetX >= Math.floor(elemLeftBound) && offsetX < Math.floor(elemRightBound);
            isOutside = offsetX < Math.floor(elemLeftBound) || offsetX >= Math.floor(elemRightBound);
          } else {
            var elemTopBound = 0;
            var elemBottomBound = 0;
            var containerTop = 0;
            if (scrollSpyContainer.getBoundingClientRect) {
              var _containerCords = scrollSpyContainer.getBoundingClientRect();
              containerTop = _containerCords.top;
            }
            if (!element || _this2.props.isDynamic) {
              element = scroller.get(to);
              if (!element) {
                return;
              }
              var _cords = element.getBoundingClientRect();
              elemTopBound = _cords.top - containerTop + y;
              elemBottomBound = elemTopBound + _cords.height;
            }
            var offsetY = y - _this2.props.offset;
            isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
            isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
          }
          var activeLink = scroller.getActiveLink();
          if (isOutside) {
            if (to === activeLink) {
              scroller.setActiveLink(void 0);
            }
            if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
              var _props$saveHashHistor = _this2.props.saveHashHistory, saveHashHistory = _props$saveHashHistor === void 0 ? false : _props$saveHashHistor;
              _scrollHash2.default.changeHash("", saveHashHistory);
            }
            if (_this2.props.spy && _this2.state.active) {
              _this2.setState({ active: false });
              _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
            }
          }
          if (isInside && (activeLink !== to || _this2.state.active === false)) {
            scroller.setActiveLink(to);
            var _props$saveHashHistor2 = _this2.props.saveHashHistory, _saveHashHistory = _props$saveHashHistor2 === void 0 ? false : _props$saveHashHistor2;
            _this2.props.hashSpy && _scrollHash2.default.changeHash(to, _saveHashHistory);
            if (_this2.props.spy) {
              _this2.setState({ active: true });
              _this2.props.onSetActive && _this2.props.onSetActive(to, element);
            }
          }
        };
      };
      Link.propTypes = protoTypes;
      Link.defaultProps = { offset: 0 };
      return Link;
    };
  }
});

// node_modules/react-scroll/modules/components/Link.js
var require_Link = __commonJS({
  "node_modules/react-scroll/modules/components/Link.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _scrollLink = require_scroll_link();
    var _scrollLink2 = _interopRequireDefault(_scrollLink);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var LinkElement = function(_React$Component) {
      _inherits(LinkElement2, _React$Component);
      function LinkElement2() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, LinkElement2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement2.__proto__ || Object.getPrototypeOf(LinkElement2)).call.apply(_ref, [this].concat(args))), _this), _this.render = function() {
          return _react2.default.createElement(
            "a",
            _this.props,
            _this.props.children
          );
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      return LinkElement2;
    }(_react2.default.Component);
    exports.default = (0, _scrollLink2.default)(LinkElement);
  }
});

// node_modules/react-scroll/modules/components/Button.js
var require_Button = __commonJS({
  "node_modules/react-scroll/modules/components/Button.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _scrollLink = require_scroll_link();
    var _scrollLink2 = _interopRequireDefault(_scrollLink);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ButtonElement = function(_React$Component) {
      _inherits(ButtonElement2, _React$Component);
      function ButtonElement2() {
        _classCallCheck(this, ButtonElement2);
        return _possibleConstructorReturn(this, (ButtonElement2.__proto__ || Object.getPrototypeOf(ButtonElement2)).apply(this, arguments));
      }
      _createClass(ButtonElement2, [{
        key: "render",
        value: function render() {
          return _react2.default.createElement(
            "button",
            this.props,
            this.props.children
          );
        }
      }]);
      return ButtonElement2;
    }(_react2.default.Component);
    exports.default = (0, _scrollLink2.default)(ButtonElement);
  }
});

// node_modules/react-scroll/modules/mixins/scroll-element.js
var require_scroll_element = __commonJS({
  "node_modules/react-scroll/modules/mixins/scroll-element.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _reactDom = require_react_dom();
    var _reactDom2 = _interopRequireDefault(_reactDom);
    var _scroller = require_scroller();
    var _scroller2 = _interopRequireDefault(_scroller);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    exports.default = function(Component) {
      var Element = function(_React$Component) {
        _inherits(Element2, _React$Component);
        function Element2(props) {
          _classCallCheck(this, Element2);
          var _this = _possibleConstructorReturn(this, (Element2.__proto__ || Object.getPrototypeOf(Element2)).call(this, props));
          _this.childBindings = {
            domNode: null
          };
          return _this;
        }
        _createClass(Element2, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            if (typeof window === "undefined") {
              return false;
            }
            this.registerElems(this.props.name);
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            if (this.props.name !== prevProps.name) {
              this.registerElems(this.props.name);
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (typeof window === "undefined") {
              return false;
            }
            _scroller2.default.unregister(this.props.name);
          }
        }, {
          key: "registerElems",
          value: function registerElems(name) {
            _scroller2.default.register(name, this.childBindings.domNode);
          }
        }, {
          key: "render",
          value: function render() {
            return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
          }
        }]);
        return Element2;
      }(_react2.default.Component);
      ;
      Element.propTypes = {
        name: _propTypes2.default.string,
        id: _propTypes2.default.string
      };
      return Element;
    };
  }
});

// node_modules/react-scroll/modules/components/Element.js
var require_Element = __commonJS({
  "node_modules/react-scroll/modules/components/Element.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _scrollElement = require_scroll_element();
    var _scrollElement2 = _interopRequireDefault(_scrollElement);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ElementWrapper = function(_React$Component) {
      _inherits(ElementWrapper2, _React$Component);
      function ElementWrapper2() {
        _classCallCheck(this, ElementWrapper2);
        return _possibleConstructorReturn(this, (ElementWrapper2.__proto__ || Object.getPrototypeOf(ElementWrapper2)).apply(this, arguments));
      }
      _createClass(ElementWrapper2, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var newProps = _extends({}, this.props);
          delete newProps.name;
          if (newProps.parentBindings) {
            delete newProps.parentBindings;
          }
          return _react2.default.createElement(
            "div",
            _extends({}, newProps, { ref: function ref(el) {
              _this2.props.parentBindings.domNode = el;
            } }),
            this.props.children
          );
        }
      }]);
      return ElementWrapper2;
    }(_react2.default.Component);
    ElementWrapper.propTypes = {
      name: _propTypes2.default.string,
      id: _propTypes2.default.string
    };
    exports.default = (0, _scrollElement2.default)(ElementWrapper);
  }
});

// node_modules/react-scroll/modules/mixins/Helpers.js
var require_Helpers = __commonJS({
  "node_modules/react-scroll/modules/mixins/Helpers.js"(exports, module) {
    "use strict";
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var React = require_react();
    var ReactDOM = require_react_dom();
    var utils = require_utils();
    var scrollSpy = require_scroll_spy();
    var defaultScroller = require_scroller();
    var PropTypes = require_prop_types();
    var scrollHash = require_scroll_hash();
    var protoTypes = {
      to: PropTypes.string.isRequired,
      containerId: PropTypes.string,
      container: PropTypes.object,
      activeClass: PropTypes.string,
      spy: PropTypes.bool,
      smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      offset: PropTypes.number,
      delay: PropTypes.number,
      isDynamic: PropTypes.bool,
      onClick: PropTypes.func,
      duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
      absolute: PropTypes.bool,
      onSetActive: PropTypes.func,
      onSetInactive: PropTypes.func,
      ignoreCancelEvents: PropTypes.bool,
      hashSpy: PropTypes.bool,
      spyThrottle: PropTypes.number
    };
    var Helpers = {
      Scroll: function Scroll(Component, customScroller) {
        console.warn("Helpers.Scroll is deprecated since v1.7.0");
        var scroller = customScroller || defaultScroller;
        var Scroll2 = function(_React$Component) {
          _inherits(Scroll3, _React$Component);
          function Scroll3(props) {
            _classCallCheck(this, Scroll3);
            var _this = _possibleConstructorReturn(this, (Scroll3.__proto__ || Object.getPrototypeOf(Scroll3)).call(this, props));
            _initialiseProps.call(_this);
            _this.state = {
              active: false
            };
            return _this;
          }
          _createClass(Scroll3, [{
            key: "getScrollSpyContainer",
            value: function getScrollSpyContainer() {
              var containerId = this.props.containerId;
              var container = this.props.container;
              if (containerId) {
                return document.getElementById(containerId);
              }
              if (container && container.nodeType) {
                return container;
              }
              return document;
            }
          }, {
            key: "componentDidMount",
            value: function componentDidMount() {
              if (this.props.spy || this.props.hashSpy) {
                var scrollSpyContainer = this.getScrollSpyContainer();
                if (!scrollSpy.isMounted(scrollSpyContainer)) {
                  scrollSpy.mount(scrollSpyContainer, this.props.spyThrottle);
                }
                if (this.props.hashSpy) {
                  if (!scrollHash.isMounted()) {
                    scrollHash.mount(scroller);
                  }
                  scrollHash.mapContainer(this.props.to, scrollSpyContainer);
                }
                if (this.props.spy) {
                  scrollSpy.addStateHandler(this.stateHandler);
                }
                scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);
                this.setState({
                  container: scrollSpyContainer
                });
              }
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              scrollSpy.unmount(this.stateHandler, this.spyHandler);
            }
          }, {
            key: "render",
            value: function render() {
              var className = "";
              if (this.state && this.state.active) {
                className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
              } else {
                className = this.props.className;
              }
              var props = _extends({}, this.props);
              for (var prop in protoTypes) {
                if (props.hasOwnProperty(prop)) {
                  delete props[prop];
                }
              }
              props.className = className;
              props.onClick = this.handleClick;
              return React.createElement(Component, props);
            }
          }]);
          return Scroll3;
        }(React.Component);
        var _initialiseProps = function _initialiseProps2() {
          var _this2 = this;
          this.scrollTo = function(to, props) {
            scroller.scrollTo(to, _extends({}, _this2.state, props));
          };
          this.handleClick = function(event) {
            if (_this2.props.onClick) {
              _this2.props.onClick(event);
            }
            if (event.stopPropagation) event.stopPropagation();
            if (event.preventDefault) event.preventDefault();
            _this2.scrollTo(_this2.props.to, _this2.props);
          };
          this.stateHandler = function() {
            if (scroller.getActiveLink() !== _this2.props.to) {
              if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
                _this2.props.onSetInactive();
              }
              _this2.setState({ active: false });
            }
          };
          this.spyHandler = function(y) {
            var scrollSpyContainer = _this2.getScrollSpyContainer();
            if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
              return;
            }
            var to = _this2.props.to;
            var element = null;
            var elemTopBound = 0;
            var elemBottomBound = 0;
            var containerTop = 0;
            if (scrollSpyContainer.getBoundingClientRect) {
              var containerCords = scrollSpyContainer.getBoundingClientRect();
              containerTop = containerCords.top;
            }
            if (!element || _this2.props.isDynamic) {
              element = scroller.get(to);
              if (!element) {
                return;
              }
              var cords = element.getBoundingClientRect();
              elemTopBound = cords.top - containerTop + y;
              elemBottomBound = elemTopBound + cords.height;
            }
            var offsetY = y - _this2.props.offset;
            var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
            var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
            var activeLink = scroller.getActiveLink();
            if (isOutside) {
              if (to === activeLink) {
                scroller.setActiveLink(void 0);
              }
              if (_this2.props.hashSpy && scrollHash.getHash() === to) {
                scrollHash.changeHash();
              }
              if (_this2.props.spy && _this2.state.active) {
                _this2.setState({ active: false });
                _this2.props.onSetInactive && _this2.props.onSetInactive();
              }
              return scrollSpy.updateStates();
            }
            if (isInside && activeLink !== to) {
              scroller.setActiveLink(to);
              _this2.props.hashSpy && scrollHash.changeHash(to);
              if (_this2.props.spy) {
                _this2.setState({ active: true });
                _this2.props.onSetActive && _this2.props.onSetActive(to);
              }
              return scrollSpy.updateStates();
            }
          };
        };
        ;
        Scroll2.propTypes = protoTypes;
        Scroll2.defaultProps = { offset: 0 };
        return Scroll2;
      },
      Element: function Element(Component) {
        console.warn("Helpers.Element is deprecated since v1.7.0");
        var Element2 = function(_React$Component2) {
          _inherits(Element3, _React$Component2);
          function Element3(props) {
            _classCallCheck(this, Element3);
            var _this3 = _possibleConstructorReturn(this, (Element3.__proto__ || Object.getPrototypeOf(Element3)).call(this, props));
            _this3.childBindings = {
              domNode: null
            };
            return _this3;
          }
          _createClass(Element3, [{
            key: "componentDidMount",
            value: function componentDidMount() {
              if (typeof window === "undefined") {
                return false;
              }
              this.registerElems(this.props.name);
            }
          }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
              if (this.props.name !== prevProps.name) {
                this.registerElems(this.props.name);
              }
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              if (typeof window === "undefined") {
                return false;
              }
              defaultScroller.unregister(this.props.name);
            }
          }, {
            key: "registerElems",
            value: function registerElems(name) {
              defaultScroller.register(name, this.childBindings.domNode);
            }
          }, {
            key: "render",
            value: function render() {
              return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
            }
          }]);
          return Element3;
        }(React.Component);
        ;
        Element2.propTypes = {
          name: PropTypes.string,
          id: PropTypes.string
        };
        return Element2;
      }
    };
    module.exports = Helpers;
  }
});

// node_modules/react-scroll/modules/index.js
var require_modules = __commonJS({
  "node_modules/react-scroll/modules/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = void 0;
    var _Link = require_Link();
    var _Link2 = _interopRequireDefault(_Link);
    var _Button = require_Button();
    var _Button2 = _interopRequireDefault(_Button);
    var _Element = require_Element();
    var _Element2 = _interopRequireDefault(_Element);
    var _scroller = require_scroller();
    var _scroller2 = _interopRequireDefault(_scroller);
    var _scrollEvents = require_scroll_events();
    var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
    var _scrollSpy = require_scroll_spy();
    var _scrollSpy2 = _interopRequireDefault(_scrollSpy);
    var _animateScroll = require_animate_scroll();
    var _animateScroll2 = _interopRequireDefault(_animateScroll);
    var _scrollLink = require_scroll_link();
    var _scrollLink2 = _interopRequireDefault(_scrollLink);
    var _scrollElement = require_scroll_element();
    var _scrollElement2 = _interopRequireDefault(_scrollElement);
    var _Helpers = require_Helpers();
    var _Helpers2 = _interopRequireDefault(_Helpers);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.Link = _Link2.default;
    exports.Button = _Button2.default;
    exports.Element = _Element2.default;
    exports.scroller = _scroller2.default;
    exports.Events = _scrollEvents2.default;
    exports.scrollSpy = _scrollSpy2.default;
    exports.animateScroll = _animateScroll2.default;
    exports.ScrollLink = _scrollLink2.default;
    exports.ScrollElement = _scrollElement2.default;
    exports.Helpers = _Helpers2.default;
    exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };
  }
});
export default require_modules();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-scroll.js.map
