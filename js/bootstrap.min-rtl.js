var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /*!
  * Bootstrap v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
    }(this, function(t, g, u) {
        "use strict";
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function s(t, e, n) {
            return e && i(t.prototype, e),
            n && i(t, n),
            t
        }
        function l(o) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , e = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable
                }))),
                e.forEach(function(t) {
                    var e, n, i;
                    e = o,
                    i = r[n = t],
                    n in e ? Object.defineProperty(e, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = i
                })
            }
            return o
        }
        g = g && g.hasOwnProperty("default") ? g.default : g,
        u = u && u.hasOwnProperty("default") ? u.default : u;
        var e = "transitionend";
        function n(t) {
            var e = this
              , n = !1;
            return g(this).one(_.TRANSITION_END, function() {
                n = !0
            }),
            setTimeout(function() {
                n || _.triggerTransitionEnd(e)
            }, t),
            this
        }
        var _ = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                for (; t += ~~(1e6 * Math.random()),
                document.getElementById(t); )
                    ;
                return t
            },
            getSelectorFromElement: function(t) {
                var e = t.getAttribute("data-target");
                if (!e || "#" === e) {
                    var n = t.getAttribute("href");
                    e = n && "#" !== n ? n.trim() : ""
                }
                return e && document.querySelector(e) ? e : null
            },
            getTransitionDurationFromElement: function(t) {
                if (!t)
                    return 0;
                var e = g(t).css("transition-duration")
                  , n = g(t).css("transition-delay")
                  , i = parseFloat(e)
                  , o = parseFloat(n);
                return i || o ? (e = e.split(",")[0],
                n = n.split(",")[0],
                1e3 * (parseFloat(e) + parseFloat(n))) : 0
            },
            reflow: function(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function(t) {
                g(t).trigger(e)
            },
            supportsTransitionEnd: function() {
                return Boolean(e)
            },
            isElement: function(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function(t, e, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var o = n[i]
                          , r = e[i]
                          , s = r && _.isElement(r) ? "element" : (a = r,
                        {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(o).test(s))
                            throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                    }
                var a
            },
            findShadowRoot: function(t) {
                if (!document.documentElement.attachShadow)
                    return null;
                if ("function" == typeof t.getRootNode) {
                    var e = t.getRootNode();
                    return e instanceof ShadowRoot ? e : null
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null
            }
        };
        g.fn.emulateTransitionEnd = n,
        g.event.special[_.TRANSITION_END] = {
            bindType: e,
            delegateType: e,
            handle: function(t) {
                if (g(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        };
        var o = "alert"
          , r = "bs.alert"
          , a = "." + r
          , c = g.fn[o]
          , h = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        }
          , f = "alert"
          , d = "fade"
          , m = "show"
          , p = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)),
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }
            ,
            t.dispose = function() {
                g.removeData(this._element, r),
                this._element = null
            }
            ,
            t._getRootElement = function(t) {
                var e = _.getSelectorFromElement(t)
                  , n = !1;
                return e && (n = document.querySelector(e)),
                n || (n = g(t).closest("." + f)[0]),
                n
            }
            ,
            t._triggerCloseEvent = function(t) {
                var e = g.Event(h.CLOSE);
                return g(t).trigger(e),
                e
            }
            ,
            t._removeElement = function(e) {
                var n = this;
                if (g(e).removeClass(m),
                g(e).hasClass(d)) {
                    var t = _.getTransitionDurationFromElement(e);
                    g(e).one(_.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else
                    this._destroyElement(e)
            }
            ,
            t._destroyElement = function(t) {
                g(t).detach().trigger(h.CLOSED).remove()
            }
            ,
            i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this)
                      , e = t.data(r);
                    e || (e = new i(this),
                    t.data(r, e)),
                    "close" === n && e[n](this)
                })
            }
            ,
            i._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(),
                    e.close(this)
                }
            }
            ,
            s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }]),
            i
        }();
        g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
        g.fn[o] = p._jQueryInterface,
        g.fn[o].Constructor = p,
        g.fn[o].noConflict = function() {
            return g.fn[o] = c,
            p._jQueryInterface
        }
        ;
        var v = "button"
          , E = "bs.button"
          , y = "." + E
          , T = ".data-api"
          , C = g.fn[v]
          , S = "active"
          , b = "btn"
          , I = "focus"
          , D = '[data-toggle^="button"]'
          , w = '[data-toggle="buttons"]'
          , A = 'input:not([type="hidden"])'
          , N = ".active"
          , O = ".btn"
          , k = {
            CLICK_DATA_API: "click" + y + T,
            FOCUS_BLUR_DATA_API: "focus" + y + T + " blur" + y + T
        }
          , P = function() {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0
                  , e = !0
                  , n = g(this._element).closest(w)[0];
                if (n) {
                    var i = this._element.querySelector(A);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(S))
                                t = !1;
                            else {
                                var o = n.querySelector(N);
                                o && g(o).removeClass(S)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                                return;
                            i.checked = !this._element.classList.contains(S),
                            g(i).trigger("change")
                        }
                        i.focus(),
                        e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)),
                t && g(this._element).toggleClass(S)
            }
            ,
            t.dispose = function() {
                g.removeData(this._element, E),
                this._element = null
            }
            ,
            n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(E);
                    t || (t = new n(this),
                    g(this).data(E, t)),
                    "toggle" === e && t[e]()
                })
            }
            ,
            s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }]),
            n
        }();
        g(document).on(k.CLICK_DATA_API, D, function(t) {
            t.preventDefault();
            var e = t.target;
            g(e).hasClass(b) || (e = g(e).closest(O)),
            P._jQueryInterface.call(g(e), "toggle")
        }).on(k.FOCUS_BLUR_DATA_API, D, function(t) {
            var e = g(t.target).closest(O)[0];
            g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
        }),
        g.fn[v] = P._jQueryInterface,
        g.fn[v].Constructor = P,
        g.fn[v].noConflict = function() {
            return g.fn[v] = C,
            P._jQueryInterface
        }
        ;
        var L = "carousel"
          , H = "bs.carousel"
          , j = "." + H
          , R = ".data-api"
          , U = g.fn[L]
          , F = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        }
          , W = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }
          , M = "next"
          , x = "prev"
          , q = "left"
          , K = "right"
          , Q = {
            SLIDE: "slide" + j,
            SLID: "slid" + j,
            KEYDOWN: "keydown" + j,
            MOUSEENTER: "mouseenter" + j,
            MOUSELEAVE: "mouseleave" + j,
            TOUCHSTART: "touchstart" + j,
            TOUCHMOVE: "touchmove" + j,
            TOUCHEND: "touchend" + j,
            POINTERDOWN: "pointerdown" + j,
            POINTERUP: "pointerup" + j,
            DRAG_START: "dragstart" + j,
            LOAD_DATA_API: "load" + j + R,
            CLICK_DATA_API: "click" + j + R
        }
          , B = "carousel"
          , V = "active"
          , Y = "slide"
          , X = "carousel-item-right"
          , G = "carousel-item-left"
          , z = "carousel-item-next"
          , J = "carousel-item-prev"
          , Z = "pointer-event"
          , $ = ".active"
          , tt = ".active.carousel-item"
          , et = ".carousel-item"
          , nt = ".carousel-item img"
          , it = ".carousel-item-next, .carousel-item-prev"
          , ot = ".carousel-indicators"
          , rt = "[data-slide], [data-slide-to]"
          , st = '[data-ride="carousel"]'
          , at = {
            TOUCH: "touch",
            PEN: "pen"
        }
          , lt = function() {
            function r(t, e) {
                this._items = null,
                this._interval = null,
                this._activeElement = null,
                this._isPaused = !1,
                this._isSliding = !1,
                this.touchTimeout = null,
                this.touchStartX = 0,
                this.touchDeltaX = 0,
                this._config = this._getConfig(e),
                this._element = t,
                this._indicatorsElement = this._element.querySelector(ot),
                this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
                this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
                this._addEventListeners()
            }
            var t = r.prototype;
            return t.next = function() {
                this._isSliding || this._slide(M)
            }
            ,
            t.nextWhenVisible = function() {
                !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
            }
            ,
            t.prev = function() {
                this._isSliding || this._slide(x)
            }
            ,
            t.pause = function(t) {
                t || (this._isPaused = !0),
                this._element.querySelector(it) && (_.triggerTransitionEnd(this._element),
                this.cycle(!0)),
                clearInterval(this._interval),
                this._interval = null
            }
            ,
            t.cycle = function(t) {
                t || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval),
                this._interval = null),
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }
            ,
            t.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(tt);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding)
                        g(this._element).one(Q.SLID, function() {
                            return e.to(t)
                        });
                    else {
                        if (n === t)
                            return this.pause(),
                            void this.cycle();
                        var i = n < t ? M : x;
                        this._slide(i, this._items[t])
                    }
            }
            ,
            t.dispose = function() {
                g(this._element).off(j),
                g.removeData(this._element, H),
                this._items = null,
                this._config = null,
                this._element = null,
                this._interval = null,
                this._isPaused = null,
                this._isSliding = null,
                this._activeElement = null,
                this._indicatorsElement = null
            }
            ,
            t._getConfig = function(t) {
                return t = l({}, F, t),
                _.typeCheckConfig(L, t, W),
                t
            }
            ,
            t._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    0 < e && this.prev(),
                    e < 0 && this.next()
                }
            }
            ,
            t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && g(this._element).on(Q.KEYDOWN, function(t) {
                    return e._keydown(t)
                }),
                "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(Q.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }),
                this._addTouchEventListeners()
            }
            ,
            t._addTouchEventListeners = function() {
                var n = this;
                if (this._touchSupported) {
                    var e = function(t) {
                        n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                    }
                      , i = function(t) {
                        n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                        n._handleSwipe(),
                        "hover" === n._config.pause && (n.pause(),
                        n.touchTimeout && clearTimeout(n.touchTimeout),
                        n.touchTimeout = setTimeout(function(t) {
                            return n.cycle(t)
                        }, 500 + n._config.interval))
                    };
                    g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function(t) {
                        return t.preventDefault()
                    }),
                    this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function(t) {
                        return e(t)
                    }),
                    g(this._element).on(Q.POINTERUP, function(t) {
                        return i(t)
                    }),
                    this._element.classList.add(Z)) : (g(this._element).on(Q.TOUCHSTART, function(t) {
                        return e(t)
                    }),
                    g(this._element).on(Q.TOUCHMOVE, function(t) {
                        var e;
                        (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                    }),
                    g(this._element).on(Q.TOUCHEND, function(t) {
                        return i(t)
                    }))
                }
            }
            ,
            t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName))
                    switch (t.which) {
                    case 37:
                        t.preventDefault(),
                        this.prev();
                        break;
                    case 39:
                        t.preventDefault(),
                        this.next()
                    }
            }
            ,
            t._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [],
                this._items.indexOf(t)
            }
            ,
            t._getItemByDirection = function(t, e) {
                var n = t === M
                  , i = t === x
                  , o = this._getItemIndex(e)
                  , r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap)
                    return e;
                var s = (o + (t === x ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }
            ,
            t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t)
                  , i = this._getItemIndex(this._element.querySelector(tt))
                  , o = g.Event(Q.SLIDE, {
                    relatedTarget: t,
                    direction: e,
                    from: i,
                    to: n
                });
                return g(this._element).trigger(o),
                o
            }
            ,
            t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll($));
                    g(e).removeClass(V);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && g(n).addClass(V)
                }
            }
            ,
            t._slide = function(t, e) {
                var n, i, o, r = this, s = this._element.querySelector(tt), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
                if (t === M ? (n = G,
                i = z,
                o = q) : (n = X,
                i = J,
                o = K),
                l && g(l).hasClass(V))
                    this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                    this._isSliding = !0,
                    h && this.pause(),
                    this._setActiveIndicatorElement(l);
                    var u = g.Event(Q.SLID, {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    if (g(this._element).hasClass(Y)) {
                        g(l).addClass(i),
                        _.reflow(l),
                        g(s).addClass(n),
                        g(l).addClass(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                        this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var d = _.getTransitionDurationFromElement(s);
                        g(s).one(_.TRANSITION_END, function() {
                            g(l).removeClass(n + " " + i).addClass(V),
                            g(s).removeClass(V + " " + i + " " + n),
                            r._isSliding = !1,
                            setTimeout(function() {
                                return g(r._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(d)
                    } else
                        g(s).removeClass(V),
                        g(l).addClass(V),
                        this._isSliding = !1,
                        g(this._element).trigger(u);
                    h && this.cycle()
                }
            }
            ,
            r._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = g(this).data(H)
                      , e = l({}, F, g(this).data());
                    "object" == typeof i && (e = l({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new r(this,e),
                    g(this).data(H, t)),
                    "number" == typeof i)
                        t.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n])
                            throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else
                        e.interval && (t.pause(),
                        t.cycle())
                })
            }
            ,
            r._dataApiClickHandler = function(t) {
                var e = _.getSelectorFromElement(this);
                if (e) {
                    var n = g(e)[0];
                    if (n && g(n).hasClass(B)) {
                        var i = l({}, g(n).data(), g(this).data())
                          , o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1),
                        r._jQueryInterface.call(g(n), i),
                        o && g(n).data(H).to(o),
                        t.preventDefault()
                    }
                }
            }
            ,
            s(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return F
                }
            }]),
            r
        }();
        g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
        g(window).on(Q.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
                var i = g(t[e]);
                lt._jQueryInterface.call(i, i.data())
            }
        }),
        g.fn[L] = lt._jQueryInterface,
        g.fn[L].Constructor = lt,
        g.fn[L].noConflict = function() {
            return g.fn[L] = U,
            lt._jQueryInterface
        }
        ;
        var ct, ht = "collapse", ut = "bs.collapse", ft = "." + ut, dt = g.fn[ht], gt = {
            toggle: !0,
            parent: ""
        }, _t = {
            toggle: "boolean",
            parent: "(string|element)"
        }, mt = {
            SHOW: "show" + ft,
            SHOWN: "shown" + ft,
            HIDE: "hide" + ft,
            HIDDEN: "hidden" + ft,
            CLICK_DATA_API: "click" + ft + ".data-api"
        }, pt = "show", vt = "collapse", Et = "collapsing", yt = "collapsed", Tt = "width", Ct = "height", St = ".show, .collapsing", bt = '[data-toggle="collapse"]', It = function() {
            function a(e, t) {
                this._isTransitioning = !1,
                this._element = e,
                this._config = this._getConfig(t),
                this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(bt)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i]
                      , s = _.getSelectorFromElement(r)
                      , a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                        return t === e
                    });
                    null !== s && 0 < a.length && (this._selector = s,
                    this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() {
                g(this._element).hasClass(pt) ? this.hide() : this.show()
            }
            ,
            t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !g(this._element).hasClass(pt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(St)).filter(function(t) {
                    return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(vt)
                })).length && (t = null),
                !(t && (e = g(t).not(this._selector).data(ut)) && e._isTransitioning))) {
                    var i = g.Event(mt.SHOW);
                    if (g(this._element).trigger(i),
                    !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"),
                        e || g(t).data(ut, null));
                        var o = this._getDimension();
                        g(this._element).removeClass(vt).addClass(Et),
                        this._element.style[o] = 0,
                        this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0),
                        this.setTransitioning(!0);
                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1))
                          , s = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() {
                            g(n._element).removeClass(Et).addClass(vt).addClass(pt),
                            n._element.style[o] = "",
                            n.setTransitioning(!1),
                            g(n._element).trigger(mt.SHOWN)
                        }).emulateTransitionEnd(s),
                        this._element.style[o] = this._element[r] + "px"
                    }
                }
            }
            ,
            t.hide = function() {
                var t = this;
                if (!this._isTransitioning && g(this._element).hasClass(pt)) {
                    var e = g.Event(mt.HIDE);
                    if (g(this._element).trigger(e),
                    !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                        _.reflow(this._element),
                        g(this._element).addClass(Et).removeClass(vt).removeClass(pt);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var o = 0; o < i; o++) {
                                var r = this._triggerArray[o]
                                  , s = _.getSelectorFromElement(r);
                                if (null !== s)
                                    g([].slice.call(document.querySelectorAll(s))).hasClass(pt) || g(r).addClass(yt).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() {
                            t.setTransitioning(!1),
                            g(t._element).removeClass(Et).addClass(vt).trigger(mt.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }
            ,
            t.setTransitioning = function(t) {
                this._isTransitioning = t
            }
            ,
            t.dispose = function() {
                g.removeData(this._element, ut),
                this._config = null,
                this._parent = null,
                this._element = null,
                this._triggerArray = null,
                this._isTransitioning = null
            }
            ,
            t._getConfig = function(t) {
                return (t = l({}, gt, t)).toggle = Boolean(t.toggle),
                _.typeCheckConfig(ht, t, _t),
                t
            }
            ,
            t._getDimension = function() {
                return g(this._element).hasClass(Tt) ? Tt : Ct
            }
            ,
            t._getParent = function() {
                var t, n = this;
                _.isElement(this._config.parent) ? (t = this._config.parent,
                "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
                  , i = [].slice.call(t.querySelectorAll(e));
                return g(i).each(function(t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }),
                t
            }
            ,
            t._addAriaAndCollapsedClass = function(t, e) {
                var n = g(t).hasClass(pt);
                e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n)
            }
            ,
            a._getTargetFromElement = function(t) {
                var e = _.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }
            ,
            a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = g(this)
                      , e = t.data(ut)
                      , n = l({}, gt, t.data(), "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                    e || (e = new a(this,n),
                    t.data(ut, e)),
                    "string" == typeof i) {
                        if ("undefined" == typeof e[i])
                            throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }
            ,
            s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return gt
                }
            }]),
            a
        }();
        g(document).on(mt.CLICK_DATA_API, bt, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = g(this)
              , e = _.getSelectorFromElement(this)
              , i = [].slice.call(document.querySelectorAll(e));
            g(i).each(function() {
                var t = g(this)
                  , e = t.data(ut) ? "toggle" : n.data();
                It._jQueryInterface.call(t, e)
            })
        }),
        g.fn[ht] = It._jQueryInterface,
        g.fn[ht].Constructor = It,
        g.fn[ht].noConflict = function() {
            return g.fn[ht] = dt,
            It._jQueryInterface
        }
        ;
        var Dt = "dropdown"
          , wt = "bs.dropdown"
          , At = "." + wt
          , Nt = ".data-api"
          , Ot = g.fn[Dt]
          , kt = new RegExp("38|40|27")
          , Pt = "rtl" === document.documentElement.dir
          , Lt = {
            HIDE: "hide" + At,
            HIDDEN: "hidden" + At,
            SHOW: "show" + At,
            SHOWN: "shown" + At,
            CLICK: "click" + At,
            CLICK_DATA_API: "click" + At + Nt,
            KEYDOWN_DATA_API: "keydown" + At + Nt,
            KEYUP_DATA_API: "keyup" + At + Nt
        }
          , Ht = "disabled"
          , jt = "show"
          , Rt = "dropup"
          , Ut = "dropright"
          , Ft = "dropleft"
          , Wt = "dropdown-menu-right"
          , Mt = "position-static"
          , xt = '[data-toggle="dropdown"]'
          , qt = ".dropdown form"
          , Kt = ".dropdown-menu"
          , Qt = ".navbar-nav"
          , Bt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
          , Vt = ((ct = {})[Pt ? "TOPEND" : "TOP"] = "top-start",
        ct[Pt ? "TOP" : "TOPEND"] = "top-end",
        ct[Pt ? "BOTTOMEND" : "BOTTOM"] = "bottom-start",
        ct[Pt ? "BOTTOM" : "BOTTOMEND"] = "bottom-end",
        ct[Pt ? "LEFT" : "RIGHT"] = "right-start",
        ct[Pt ? "LEFTEND" : "RIGHTEND"] = "right-end",
        ct[Pt ? "RIGHT" : "LEFT"] = "left-start",
        ct[Pt ? "RIGHTEND" : "LEFTEND"] = "left-end",
        ct)
          , Yt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }
          , Xt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }
          , Gt = function() {
            function c(t, e) {
                this._element = t,
                this._popper = null,
                this._config = this._getConfig(e),
                this._menu = this._getMenuElement(),
                this._inNavbar = this._detectNavbar(),
                this._addEventListeners()
            }
            var t = c.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
                    var t = c._getParentFromElement(this._element)
                      , e = g(this._menu).hasClass(jt);
                    if (c._clearMenus(),
                    !e) {
                        var n = {
                            relatedTarget: this._element
                        }
                          , i = g.Event(Lt.SHOW, n);
                        if (g(t).trigger(i),
                        !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof u)
                                    throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var o = this._element;
                                "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference,
                                "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                                "scrollParent" !== this._config.boundary && g(t).addClass(Mt),
                                this._popper = new u(o,this._menu,this._getPopperConfig())
                            }
                            "ontouchstart"in document.documentElement && 0 === g(t).closest(Qt).length && g(document.body).children().on("mouseover", null, g.noop),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            g(this._menu).toggleClass(jt),
                            g(t).toggleClass(jt).trigger(g.Event(Lt.SHOWN, n))
                        }
                    }
                }
            }
            ,
            t.show = function() {
                if (!(this._element.disabled || g(this._element).hasClass(Ht) || g(this._menu).hasClass(jt))) {
                    var t = {
                        relatedTarget: this._element
                    }
                      , e = g.Event(Lt.SHOW, t)
                      , n = c._getParentFromElement(this._element);
                    g(n).trigger(e),
                    e.isDefaultPrevented() || (g(this._menu).toggleClass(jt),
                    g(n).toggleClass(jt).trigger(g.Event(Lt.SHOWN, t)))
                }
            }
            ,
            t.hide = function() {
                if (!this._element.disabled && !g(this._element).hasClass(Ht) && g(this._menu).hasClass(jt)) {
                    var t = {
                        relatedTarget: this._element
                    }
                      , e = g.Event(Lt.HIDE, t)
                      , n = c._getParentFromElement(this._element);
                    g(n).trigger(e),
                    e.isDefaultPrevented() || (g(this._menu).toggleClass(jt),
                    g(n).toggleClass(jt).trigger(g.Event(Lt.HIDDEN, t)))
                }
            }
            ,
            t.dispose = function() {
                g.removeData(this._element, wt),
                g(this._element).off(At),
                this._element = null,
                (this._menu = null) !== this._popper && (this._popper.destroy(),
                this._popper = null)
            }
            ,
            t.update = function() {
                this._inNavbar = this._detectNavbar(),
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            t._addEventListeners = function() {
                var e = this;
                g(this._element).on(Lt.CLICK, function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    e.toggle()
                })
            }
            ,
            t._getConfig = function(t) {
                return t = l({}, this.constructor.Default, g(this._element).data(), t),
                _.typeCheckConfig(Dt, t, this.constructor.DefaultType),
                t
            }
            ,
            t._getMenuElement = function() {
                if (!this._menu) {
                    var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(Kt))
                }
                return this._menu
            }
            ,
            t._getPlacement = function() {
                var t = g(this._element.parentNode)
                  , e = Vt.BOTTOM;
                return t.hasClass(Rt) ? (e = Vt.TOP,
                g(this._menu).hasClass(Wt) && (e = Vt.TOPEND)) : t.hasClass(Ut) ? e = Vt.RIGHT : t.hasClass(Ft) ? e = Vt.LEFT : g(this._menu).hasClass(Wt) && (e = Vt.BOTTOMEND),
                e
            }
            ,
            t._detectNavbar = function() {
                return 0 < g(this._element).closest(".navbar").length
            }
            ,
            t._getPopperConfig = function() {
                var e = this
                  , t = {};
                "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}),
                    t
                }
                : t.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }),
                n
            }
            ,
            c._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(wt);
                    if (t || (t = new c(this,"object" == typeof e ? e : null),
                    g(this).data(wt, t)),
                    "string" == typeof e) {
                        if ("undefined" == typeof t[e])
                            throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }
            ,
            c._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = [].slice.call(document.querySelectorAll(xt)), n = 0, i = e.length; n < i; n++) {
                        var o = c._getParentFromElement(e[n])
                          , r = g(e[n]).data(wt)
                          , s = {
                            relatedTarget: e[n]
                        };
                        if (t && "click" === t.type && (s.clickEvent = t),
                        r) {
                            var a = r._menu;
                            if (g(o).hasClass(jt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                                var l = g.Event(Lt.HIDE, s);
                                g(o).trigger(l),
                                l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                                e[n].setAttribute("aria-expanded", "false"),
                                g(a).removeClass(jt),
                                g(o).removeClass(jt).trigger(g.Event(Lt.HIDDEN, s)))
                            }
                        }
                    }
            }
            ,
            c._getParentFromElement = function(t) {
                var e, n = _.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)),
                e || t.parentNode
            }
            ,
            c._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(Kt).length)) : kt.test(t.which)) && (t.preventDefault(),
                t.stopPropagation(),
                !this.disabled && !g(this).hasClass(Ht))) {
                    var e = c._getParentFromElement(this)
                      , n = g(e).hasClass(jt);
                    if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = [].slice.call(e.querySelectorAll(Bt));
                        if (0 !== i.length) {
                            var o = i.indexOf(t.target);
                            38 === t.which && 0 < o && o--,
                            40 === t.which && o < i.length - 1 && o++,
                            o < 0 && (o = 0),
                            i[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var r = e.querySelector(xt);
                            g(r).trigger("focus")
                        }
                        g(this).trigger("click")
                    }
                }
            }
            ,
            s(c, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Yt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Xt
                }
            }]),
            c
        }();
        g(document).on(Lt.KEYDOWN_DATA_API, xt, Gt._dataApiKeydownHandler).on(Lt.KEYDOWN_DATA_API, Kt, Gt._dataApiKeydownHandler).on(Lt.CLICK_DATA_API + " " + Lt.KEYUP_DATA_API, Gt._clearMenus).on(Lt.CLICK_DATA_API, xt, function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            Gt._jQueryInterface.call(g(this), "toggle")
        }).on(Lt.CLICK_DATA_API, qt, function(t) {
            t.stopPropagation()
        }),
        g.fn[Dt] = Gt._jQueryInterface,
        g.fn[Dt].Constructor = Gt,
        g.fn[Dt].noConflict = function() {
            return g.fn[Dt] = Ot,
            Gt._jQueryInterface
        }
        ;
        var zt, Jt = "modal", Zt = "bs.modal", $t = "." + Zt, te = g.fn[Jt], ee = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, ne = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, ie = {
            HIDE: "hide" + $t,
            HIDDEN: "hidden" + $t,
            SHOW: "show" + $t,
            SHOWN: "shown" + $t,
            FOCUSIN: "focusin" + $t,
            RESIZE: "resize" + $t,
            CLICK_DISMISS: "click.dismiss" + $t,
            KEYDOWN_DISMISS: "keydown.dismiss" + $t,
            MOUSEUP_DISMISS: "mouseup.dismiss" + $t,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + $t,
            CLICK_DATA_API: "click" + $t + ".data-api"
        }, oe = "modal-scrollbar-measure", re = "modal-backdrop", se = "modal-open", ae = "fade", le = "show", ce = ".modal-dialog", he = '[data-toggle="modal"]', ue = '[data-dismiss="modal"]', fe = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", de = ".sticky-top", ge = function() {
            function o(t, e) {
                this._config = this._getConfig(e),
                this._element = t,
                this._dialog = t.querySelector(ce),
                this._backdrop = null,
                this._isShown = !1,
                this._isBodyOverflowing = !1,
                this._ignoreBackdropClick = !1,
                this._isTransitioning = !1,
                this._scrollbarWidth = 0
            }
            var t = o.prototype;
            return t.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }
            ,
            t.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    g(this._element).hasClass(ae) && (this._isTransitioning = !0);
                    var n = g.Event(ie.SHOW, {
                        relatedTarget: t
                    });
                    g(this._element).trigger(n),
                    this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    g(this._element).on(ie.CLICK_DISMISS, ue, function(t) {
                        return e.hide(t)
                    }),
                    g(this._dialog).on(ie.MOUSEDOWN_DISMISS, function() {
                        g(e._element).one(ie.MOUSEUP_DISMISS, function(t) {
                            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }),
                    this._showBackdrop(function() {
                        return e._showElement(t)
                    }))
                }
            }
            ,
            t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(),
                this._isShown && !this._isTransitioning) {
                    var n = g.Event(ie.HIDE);
                    if (g(this._element).trigger(n),
                    this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = g(this._element).hasClass(ae);
                        if (i && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        g(document).off(ie.FOCUSIN),
                        g(this._element).removeClass(le),
                        g(this._element).off(ie.CLICK_DISMISS),
                        g(this._dialog).off(ie.MOUSEDOWN_DISMISS),
                        i) {
                            var o = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, function(t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(o)
                        } else
                            this._hideModal()
                    }
                }
            }
            ,
            t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) {
                    return g(t).off($t)
                }),
                g(document).off(ie.FOCUSIN),
                g.removeData(this._element, Zt),
                this._config = null,
                this._element = null,
                this._dialog = null,
                this._backdrop = null,
                this._isShown = null,
                this._isBodyOverflowing = null,
                this._ignoreBackdropClick = null,
                this._isTransitioning = null,
                this._scrollbarWidth = null
            }
            ,
            t.handleUpdate = function() {
                this._adjustDialog()
            }
            ,
            t._getConfig = function(t) {
                return t = l({}, ee, t),
                _.typeCheckConfig(Jt, t, ne),
                t
            }
            ,
            t._showElement = function(t) {
                var e = this
                  , n = g(this._element).hasClass(ae);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                this._element.style.display = "block",
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.scrollTop = 0,
                n && _.reflow(this._element),
                g(this._element).addClass(le),
                this._config.focus && this._enforceFocus();
                var i = g.Event(ie.SHOWN, {
                    relatedTarget: t
                })
                  , o = function() {
                    e._config.focus && e._element.focus(),
                    e._isTransitioning = !1,
                    g(e._element).trigger(i)
                };
                if (n) {
                    var r = _.getTransitionDurationFromElement(this._dialog);
                    g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o()
            }
            ,
            t._enforceFocus = function() {
                var e = this;
                g(document).off(ie.FOCUSIN).on(ie.FOCUSIN, function(t) {
                    document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
                })
            }
            ,
            t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? g(this._element).on(ie.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(),
                    e.hide())
                }) : this._isShown || g(this._element).off(ie.KEYDOWN_DISMISS)
            }
            ,
            t._setResizeEvent = function() {
                var e = this;
                this._isShown ? g(window).on(ie.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : g(window).off(ie.RESIZE)
            }
            ,
            t._hideModal = function() {
                var t = this;
                this._element.style.display = "none",
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._isTransitioning = !1,
                this._showBackdrop(function() {
                    g(document.body).removeClass(se),
                    t._resetAdjustments(),
                    t._resetScrollbar(),
                    g(t._element).trigger(ie.HIDDEN)
                })
            }
            ,
            t._removeBackdrop = function() {
                this._backdrop && (g(this._backdrop).remove(),
                this._backdrop = null)
            }
            ,
            t._showBackdrop = function(t) {
                var e = this
                  , n = g(this._element).hasClass(ae) ? ae : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"),
                    this._backdrop.className = re,
                    n && this._backdrop.classList.add(n),
                    g(this._backdrop).appendTo(document.body),
                    g(this._element).on(ie.CLICK_DISMISS, function(t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                    }),
                    n && _.reflow(this._backdrop),
                    g(this._backdrop).addClass(le),
                    !t)
                        return;
                    if (!n)
                        return void t();
                    var i = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    g(this._backdrop).removeClass(le);
                    var o = function() {
                        e._removeBackdrop(),
                        t && t()
                    };
                    if (g(this._element).hasClass(ae)) {
                        var r = _.getTransitionDurationFromElement(this._backdrop);
                        g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else
                        o()
                } else
                    t && t()
            }
            ,
            t._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }
            ,
            t._resetAdjustments = function() {
                this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
            }
            ,
            t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                this._scrollbarWidth = this._getScrollbarWidth()
            }
            ,
            t._setScrollbar = function() {
                var o = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(fe))
                      , e = [].slice.call(document.querySelectorAll(de));
                    g(t).each(function(t, e) {
                        var n = e.style.paddingRight
                          , i = g(e).css("padding-right");
                        g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                    }),
                    g(e).each(function(t, e) {
                        var n = e.style.marginRight
                          , i = g(e).css("margin-right");
                        g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight
                      , i = g(document.body).css("padding-right");
                    g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                g(document.body).addClass(se)
            }
            ,
            t._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(fe));
                g(t).each(function(t, e) {
                    var n = g(e).data("padding-right");
                    g(e).removeData("padding-right"),
                    e.style.paddingRight = n || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + de));
                g(e).each(function(t, e) {
                    var n = g(e).data("margin-right");
                    "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
                });
                var n = g(document.body).data("padding-right");
                g(document.body).removeData("padding-right"),
                document.body.style.paddingRight = n || ""
            }
            ,
            t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = oe,
                document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t),
                e
            }
            ,
            o._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = g(this).data(Zt)
                      , e = l({}, ee, g(this).data(), "object" == typeof n && n ? n : {});
                    if (t || (t = new o(this,e),
                    g(this).data(Zt, t)),
                    "string" == typeof n) {
                        if ("undefined" == typeof t[n])
                            throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else
                        e.show && t.show(i)
                })
            }
            ,
            s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ee
                }
            }]),
            o
        }();
        g(document).on(ie.CLICK_DATA_API, he, function(t) {
            var e, n = this, i = _.getSelectorFromElement(this);
            i && (e = document.querySelector(i));
            var o = g(e).data(Zt) ? "toggle" : l({}, g(e).data(), g(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var r = g(e).one(ie.SHOW, function(t) {
                t.isDefaultPrevented() || r.one(ie.HIDDEN, function() {
                    g(n).is(":visible") && n.focus()
                })
            });
            ge._jQueryInterface.call(g(e), o, this)
        }),
        g.fn[Jt] = ge._jQueryInterface,
        g.fn[Jt].Constructor = ge,
        g.fn[Jt].noConflict = function() {
            return g.fn[Jt] = te,
            ge._jQueryInterface
        }
        ;
        var _e = "tooltip"
          , me = "bs.tooltip"
          , pe = "." + me
          , ve = g.fn[_e]
          , Ee = "bs-tooltip"
          , ye = new RegExp("(^|\\s)" + Ee + "\\S+","g")
          , Te = "rtl" === document.documentElement.dir
          , Ce = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }
          , Se = ((zt = {
            AUTO: "auto",
            TOP: "top"
        })[Te ? "LEFT" : "RIGHT"] = "right",
        zt.BOTTOM = "bottom",
        zt[Te ? "RIGHT" : "LEFT"] = "left",
        zt)
          , be = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }
          , Ie = "show"
          , De = "out"
          , we = {
            HIDE: "hide" + pe,
            HIDDEN: "hidden" + pe,
            SHOW: "show" + pe,
            SHOWN: "shown" + pe,
            INSERTED: "inserted" + pe,
            CLICK: "click" + pe,
            FOCUSIN: "focusin" + pe,
            FOCUSOUT: "focusout" + pe,
            MOUSEENTER: "mouseenter" + pe,
            MOUSELEAVE: "mouseleave" + pe
        }
          , Ae = "fade"
          , Ne = "show"
          , Oe = ".tooltip-inner"
          , ke = ".arrow"
          , Pe = "hover"
          , Le = "focus"
          , He = "click"
          , je = "manual"
          , Re = function() {
            function i(t, e) {
                if ("undefined" == typeof u)
                    throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._popper = null,
                this.element = t,
                this.config = this._getConfig(e),
                this.tip = null,
                this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }
            ,
            t.disable = function() {
                this._isEnabled = !1
            }
            ,
            t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }
            ,
            t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY
                          , n = g(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                        g(t.currentTarget).data(e, n)),
                        n._activeTrigger.click = !n._activeTrigger.click,
                        n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (g(this.getTipElement()).hasClass(Ne))
                            return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }
            ,
            t.dispose = function() {
                clearTimeout(this._timeout),
                g.removeData(this.element, this.constructor.DATA_KEY),
                g(this.element).off(this.constructor.EVENT_KEY),
                g(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && g(this.tip).remove(),
                this._isEnabled = null,
                this._timeout = null,
                this._hoverState = null,
                (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                this._popper = null,
                this.element = null,
                this.config = null,
                this.tip = null
            }
            ,
            t.show = function() {
                var e = this;
                if ("none" === g(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                var t = g.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    g(this.element).trigger(t);
                    var n = _.findShadowRoot(this.element)
                      , i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !i)
                        return;
                    var o = this.getTipElement()
                      , r = _.getUID(this.constructor.NAME);
                    o.setAttribute("id", r),
                    this.element.setAttribute("aria-describedby", r),
                    this.setContent(),
                    this.config.animation && g(o).addClass(Ae);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                      , a = this._getAttachment(s);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    g(o).data(this.constructor.DATA_KEY, this),
                    g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l),
                    g(this.element).trigger(this.constructor.Event.INSERTED),
                    this._popper = new u(this.element,o,{
                        placement: a,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ke
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }),
                    g(o).addClass(Ne),
                    "ontouchstart"in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                    var c = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null,
                        g(e.element).trigger(e.constructor.Event.SHOWN),
                        t === De && e._leave(null, e)
                    };
                    if (g(this.tip).hasClass(Ae)) {
                        var h = _.getTransitionDurationFromElement(this.tip);
                        g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                    } else
                        c()
                }
            }
            ,
            t.hide = function(t) {
                var e = this
                  , n = this.getTipElement()
                  , i = g.Event(this.constructor.Event.HIDE)
                  , o = function() {
                    e._hoverState !== Ie && n.parentNode && n.parentNode.removeChild(n),
                    e._cleanTipClass(),
                    e.element.removeAttribute("aria-describedby"),
                    g(e.element).trigger(e.constructor.Event.HIDDEN),
                    null !== e._popper && e._popper.destroy(),
                    t && t()
                };
                if (g(this.element).trigger(i),
                !i.isDefaultPrevented()) {
                    if (g(n).removeClass(Ne),
                    "ontouchstart"in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                    this._activeTrigger[He] = !1,
                    this._activeTrigger[Le] = !1,
                    this._activeTrigger[Pe] = !1,
                    g(this.tip).hasClass(Ae)) {
                        var r = _.getTransitionDurationFromElement(n);
                        g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else
                        o();
                    this._hoverState = ""
                }
            }
            ,
            t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            t.isWithContent = function() {
                return Boolean(this.getTitle())
            }
            ,
            t.addAttachmentClass = function(t) {
                g(this.getTipElement()).addClass(Ee + "-" + t)
            }
            ,
            t.getTipElement = function() {
                return this.tip = this.tip || g(this.config.template)[0],
                this.tip
            }
            ,
            t.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(g(t.querySelectorAll(Oe)), this.getTitle()),
                g(t).removeClass(Ae + " " + Ne)
            }
            ,
            t.setElementContent = function(t, e) {
                var n = this.config.html;
                "object" == typeof e && (e.nodeType || e.jquery) ? n ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text()) : t[n ? "html" : "text"](e)
            }
            ,
            t.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                t
            }
            ,
            t._getContainer = function() {
                return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
            }
            ,
            t._getAttachment = function(t) {
                return Se[t.toUpperCase()]
            }
            ,
            t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t)
                        g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                            return i.toggle(t)
                        });
                    else if (t !== je) {
                        var e = t === Pe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                          , n = t === Pe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        g(i.element).on(e, i.config.selector, function(t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function(t) {
                            return i._leave(t)
                        })
                    }
                }),
                g(this.element).closest(".modal").on("hide.bs.modal", function() {
                    i.element && i.hide()
                }),
                this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }
            ,
            t._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                this.element.setAttribute("title", ""))
            }
            ,
            t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                g(t.currentTarget).data(n, e)),
                t && (e._activeTrigger["focusin" === t.type ? Le : Pe] = !0),
                g(e.getTipElement()).hasClass(Ne) || e._hoverState === Ie ? e._hoverState = Ie : (clearTimeout(e._timeout),
                e._hoverState = Ie,
                e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === Ie && e.show()
                }, e.config.delay.show) : e.show())
            }
            ,
            t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                g(t.currentTarget).data(n, e)),
                t && (e._activeTrigger["focusout" === t.type ? Le : Pe] = !1),
                e._isWithActiveTrigger() || (clearTimeout(e._timeout),
                e._hoverState = De,
                e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                    e._hoverState === De && e.hide()
                }, e.config.delay.hide) : e.hide())
            }
            ,
            t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t])
                        return !0;
                return !1
            }
            ,
            t._getConfig = function(t) {
                return "number" == typeof (t = l({}, this.constructor.Default, g(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content.toString()),
                _.typeCheckConfig(_e, t, this.constructor.DefaultType),
                t
            }
            ,
            t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config)
                        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }
            ,
            t._cleanTipClass = function() {
                var t = g(this.getTipElement())
                  , e = t.attr("class").match(ye);
                null !== e && e.length && t.removeClass(e.join(""))
            }
            ,
            t._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper,
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(Se[t.placement.toUpperCase()]))
            }
            ,
            t._fixTransition = function() {
                var t = this.getTipElement()
                  , e = this.config.animation;
                null === t.getAttribute("x-placement") && (g(t).removeClass(Ae),
                this.config.animation = !1,
                this.hide(),
                this.show(),
                this.config.animation = e)
            }
            ,
            i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this).data(me)
                      , e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                    g(this).data(me, t)),
                    "string" == typeof n)) {
                        if ("undefined" == typeof t[n])
                            throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }
            ,
            s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return be
                }
            }, {
                key: "NAME",
                get: function() {
                    return _e
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return me
                }
            }, {
                key: "Event",
                get: function() {
                    return we
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return pe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ce
                }
            }]),
            i
        }();
        g.fn[_e] = Re._jQueryInterface,
        g.fn[_e].Constructor = Re,
        g.fn[_e].noConflict = function() {
            return g.fn[_e] = ve,
            Re._jQueryInterface
        }
        ;
        var Ue = "popover"
          , Fe = "bs.popover"
          , We = "." + Fe
          , Me = g.fn[Ue]
          , xe = "bs-popover"
          , qe = new RegExp("(^|\\s)" + xe + "\\S+","g")
          , Ke = l({}, Re.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
          , Qe = l({}, Re.DefaultType, {
            content: "(string|element|function)"
        })
          , Be = "fade"
          , Ve = "show"
          , Ye = ".popover-header"
          , Xe = ".popover-body"
          , Ge = {
            HIDE: "hide" + We,
            HIDDEN: "hidden" + We,
            SHOW: "show" + We,
            SHOWN: "shown" + We,
            INSERTED: "inserted" + We,
            CLICK: "click" + We,
            FOCUSIN: "focusin" + We,
            FOCUSOUT: "focusout" + We,
            MOUSEENTER: "mouseenter" + We,
            MOUSELEAVE: "mouseleave" + We
        }
          , ze = function(t) {
            var e, n;
            function i() {
                return t.apply(this, arguments) || this
            }
            n = t,
            (e = i).prototype = Object.create(n.prototype),
            (e.prototype.constructor = e).__proto__ = n;
            var o = i.prototype;
            return o.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }
            ,
            o.addAttachmentClass = function(t) {
                g(this.getTipElement()).addClass(xe + "-" + t)
            }
            ,
            o.getTipElement = function() {
                return this.tip = this.tip || g(this.config.template)[0],
                this.tip
            }
            ,
            o.setContent = function() {
                var t = g(this.getTipElement());
                this.setElementContent(t.find(Ye), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)),
                this.setElementContent(t.find(Xe), e),
                t.removeClass(Be + " " + Ve)
            }
            ,
            o._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }
            ,
            o._cleanTipClass = function() {
                var t = g(this.getTipElement())
                  , e = t.attr("class").match(qe);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }
            ,
            i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this).data(Fe)
                      , e = "object" == typeof n ? n : null;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                    g(this).data(Fe, t)),
                    "string" == typeof n)) {
                        if ("undefined" == typeof t[n])
                            throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }
            ,
            s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ke
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ue
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Fe
                }
            }, {
                key: "Event",
                get: function() {
                    return Ge
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return We
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Qe
                }
            }]),
            i
        }(Re);
        g.fn[Ue] = ze._jQueryInterface,
        g.fn[Ue].Constructor = ze,
        g.fn[Ue].noConflict = function() {
            return g.fn[Ue] = Me,
            ze._jQueryInterface
        }
        ;
        var Je = "scrollspy"
          , Ze = "bs.scrollspy"
          , $e = "." + Ze
          , tn = g.fn[Je]
          , en = {
            offset: 10,
            method: "auto",
            target: ""
        }
          , nn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
          , on = {
            ACTIVATE: "activate" + $e,
            SCROLL: "scroll" + $e,
            LOAD_DATA_API: "load" + $e + ".data-api"
        }
          , rn = "dropdown-item"
          , sn = "active"
          , an = '[data-spy="scroll"]'
          , ln = ".nav, .list-group"
          , cn = ".nav-link"
          , hn = ".nav-item"
          , un = ".list-group-item"
          , fn = ".dropdown"
          , dn = ".dropdown-item"
          , gn = ".dropdown-toggle"
          , _n = "offset"
          , mn = "position"
          , pn = function() {
            function n(t, e) {
                var n = this;
                this._element = t,
                this._scrollElement = "BODY" === t.tagName ? window : t,
                this._config = this._getConfig(e),
                this._selector = this._config.target + " " + cn + "," + this._config.target + " " + un + "," + this._config.target + " " + dn,
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null,
                this._scrollHeight = 0,
                g(this._scrollElement).on(on.SCROLL, function(t) {
                    return n._process(t)
                }),
                this.refresh(),
                this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this
                  , t = this._scrollElement === this._scrollElement.window ? _n : mn
                  , o = "auto" === this._config.method ? t : this._config.method
                  , r = o === mn ? this._getScrollTop() : 0;
                this._offsets = [],
                this._targets = [],
                this._scrollHeight = this._getScrollHeight(),
                [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                    var e, n = _.getSelectorFromElement(t);
                    if (n && (e = document.querySelector(n)),
                    e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height)
                            return [g(e)[o]().top + r, n]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]),
                    e._targets.push(t[1])
                })
            }
            ,
            t.dispose = function() {
                g.removeData(this._element, Ze),
                g(this._scrollElement).off($e),
                this._element = null,
                this._scrollElement = null,
                this._config = null,
                this._selector = null,
                this._offsets = null,
                this._targets = null,
                this._activeTarget = null,
                this._scrollHeight = null
            }
            ,
            t._getConfig = function(t) {
                if ("string" != typeof (t = l({}, en, "object" == typeof t && t ? t : {})).target) {
                    var e = g(t.target).attr("id");
                    e || (e = _.getUID(Je),
                    g(t.target).attr("id", e)),
                    t.target = "#" + e
                }
                return _.typeCheckConfig(Je, t, nn),
                t
            }
            ,
            t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }
            ,
            t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }
            ,
            t._process = function() {
                var t = this._getScrollTop() + this._config.offset
                  , e = this._getScrollHeight()
                  , n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(),
                n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                        return this._activeTarget = null,
                        void this._clear();
                    for (var o = this._offsets.length; o--; ) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }
            ,
            t._activate = function(e) {
                this._activeTarget = e,
                this._clear();
                var t = this._selector.split(",").map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                })
                  , n = g([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(rn) ? (n.closest(fn).find(gn).addClass(sn),
                n.addClass(sn)) : (n.addClass(sn),
                n.parents(ln).prev(cn + ", " + un).addClass(sn),
                n.parents(ln).prev(hn).children(cn).addClass(sn)),
                g(this._scrollElement).trigger(on.ACTIVATE, {
                    relatedTarget: e
                })
            }
            ,
            t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                    return t.classList.contains(sn)
                }).forEach(function(t) {
                    return t.classList.remove(sn)
                })
            }
            ,
            n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(Ze);
                    if (t || (t = new n(this,"object" == typeof e && e),
                    g(this).data(Ze, t)),
                    "string" == typeof e) {
                        if ("undefined" == typeof t[e])
                            throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }
            ,
            s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return en
                }
            }]),
            n
        }();
        g(window).on(on.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(an)), e = t.length; e--; ) {
                var n = g(t[e]);
                pn._jQueryInterface.call(n, n.data())
            }
        }),
        g.fn[Je] = pn._jQueryInterface,
        g.fn[Je].Constructor = pn,
        g.fn[Je].noConflict = function() {
            return g.fn[Je] = tn,
            pn._jQueryInterface
        }
        ;
        var vn = "bs.tab"
          , En = "." + vn
          , yn = g.fn.tab
          , Tn = {
            HIDE: "hide" + En,
            HIDDEN: "hidden" + En,
            SHOW: "show" + En,
            SHOWN: "shown" + En,
            CLICK_DATA_API: "click" + En + ".data-api"
        }
          , Cn = "dropdown-menu"
          , Sn = "active"
          , bn = "disabled"
          , In = "fade"
          , Dn = "show"
          , wn = ".dropdown"
          , An = ".nav, .list-group"
          , Nn = ".active"
          , On = "> li > .active"
          , kn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
          , Pn = ".dropdown-toggle"
          , Ln = "> .dropdown-menu .active"
          , Hn = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Sn) || g(this._element).hasClass(bn))) {
                    var t, i, e = g(this._element).closest(An)[0], o = _.getSelectorFromElement(this._element);
                    if (e) {
                        var r = "UL" === e.nodeName || "OL" === e.nodeName ? On : Nn;
                        i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                    }
                    var s = g.Event(Tn.HIDE, {
                        relatedTarget: this._element
                    })
                      , a = g.Event(Tn.SHOW, {
                        relatedTarget: i
                    });
                    if (i && g(i).trigger(s),
                    g(this._element).trigger(a),
                    !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)),
                        this._activate(this._element, e);
                        var l = function() {
                            var t = g.Event(Tn.HIDDEN, {
                                relatedTarget: n._element
                            })
                              , e = g.Event(Tn.SHOWN, {
                                relatedTarget: i
                            });
                            g(i).trigger(t),
                            g(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }
            ,
            t.dispose = function() {
                g.removeData(this._element, vn),
                this._element = null
            }
            ,
            t._activate = function(t, e, n) {
                var i = this
                  , o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Nn) : g(e).find(On))[0]
                  , r = n && o && g(o).hasClass(In)
                  , s = function() {
                    return i._transitionComplete(t, o, n)
                };
                if (o && r) {
                    var a = _.getTransitionDurationFromElement(o);
                    g(o).removeClass(Dn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
                } else
                    s()
            }
            ,
            t._transitionComplete = function(t, e, n) {
                if (e) {
                    g(e).removeClass(Sn);
                    var i = g(e.parentNode).find(Ln)[0];
                    i && g(i).removeClass(Sn),
                    "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (g(t).addClass(Sn),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                _.reflow(t),
                g(t).addClass(Dn),
                t.parentNode && g(t.parentNode).hasClass(Cn)) {
                    var o = g(t).closest(wn)[0];
                    if (o) {
                        var r = [].slice.call(o.querySelectorAll(Pn));
                        g(r).addClass(Sn)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }
            ,
            i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this)
                      , e = t.data(vn);
                    if (e || (e = new i(this),
                    t.data(vn, e)),
                    "string" == typeof n) {
                        if ("undefined" == typeof e[n])
                            throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }
            ,
            s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }]),
            i
        }();
        g(document).on(Tn.CLICK_DATA_API, kn, function(t) {
            t.preventDefault(),
            Hn._jQueryInterface.call(g(this), "show")
        }),
        g.fn.tab = Hn._jQueryInterface,
        g.fn.tab.Constructor = Hn,
        g.fn.tab.noConflict = function() {
            return g.fn.tab = yn,
            Hn._jQueryInterface
        }
        ;
        var jn = "toast"
          , Rn = "bs.toast"
          , Un = "." + Rn
          , Fn = g.fn[jn]
          , Wn = {
            CLICK_DISMISS: "click.dismiss" + Un,
            HIDE: "hide" + Un,
            HIDDEN: "hidden" + Un,
            SHOW: "show" + Un,
            SHOWN: "shown" + Un
        }
          , Mn = "fade"
          , xn = "hide"
          , qn = "show"
          , Kn = "showing"
          , Qn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        }
          , Bn = {
            animation: !0,
            autohide: !0,
            delay: 500
        }
          , Vn = '[data-dismiss="toast"]'
          , Yn = function() {
            function i(t, e) {
                this._element = t,
                this._config = this._getConfig(e),
                this._timeout = null,
                this._setListeners()
            }
            var t = i.prototype;
            return t.show = function() {
                var t = this;
                g(this._element).trigger(Wn.SHOW),
                this._config.animation && this._element.classList.add(Mn);
                var e = function() {
                    t._element.classList.remove(Kn),
                    t._element.classList.add(qn),
                    g(t._element).trigger(Wn.SHOWN),
                    t._config.autohide && t.hide()
                };
                if (this._element.classList.remove(xn),
                this._element.classList.add(Kn),
                this._config.animation) {
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                } else
                    e()
            }
            ,
            t.hide = function(t) {
                var e = this;
                this._element.classList.contains(qn) && (g(this._element).trigger(Wn.HIDE),
                t ? this._close() : this._timeout = setTimeout(function() {
                    e._close()
                }, this._config.delay))
            }
            ,
            t.dispose = function() {
                clearTimeout(this._timeout),
                this._timeout = null,
                this._element.classList.contains(qn) && this._element.classList.remove(qn),
                g(this._element).off(Wn.CLICK_DISMISS),
                g.removeData(this._element, Rn),
                this._element = null,
                this._config = null
            }
            ,
            t._getConfig = function(t) {
                return t = l({}, Bn, g(this._element).data(), "object" == typeof t && t ? t : {}),
                _.typeCheckConfig(jn, t, this.constructor.DefaultType),
                t
            }
            ,
            t._setListeners = function() {
                var t = this;
                g(this._element).on(Wn.CLICK_DISMISS, Vn, function() {
                    return t.hide(!0)
                })
            }
            ,
            t._close = function() {
                var t = this
                  , e = function() {
                    t._element.classList.add(xn),
                    g(t._element).trigger(Wn.HIDDEN)
                };
                if (this._element.classList.remove(qn),
                this._config.animation) {
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                } else
                    e()
            }
            ,
            i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this)
                      , e = t.data(Rn);
                    if (e || (e = new i(this,"object" == typeof n && n),
                    t.data(Rn, e)),
                    "string" == typeof n) {
                        if ("undefined" == typeof e[n])
                            throw new TypeError('No method named "' + n + '"');
                        e[n](this)
                    }
                })
            }
            ,
            s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.2.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Qn
                }
            }]),
            i
        }();
        g.fn[jn] = Yn._jQueryInterface,
        g.fn[jn].Constructor = Yn,
        g.fn[jn].noConflict = function() {
            return g.fn[jn] = Fn,
            Yn._jQueryInterface
        }
        ,
        function() {
            if ("undefined" == typeof g)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = g.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(),
        t.Util = _,
        t.Alert = p,
        t.Button = P,
        t.Carousel = lt,
        t.Collapse = It,
        t.Dropdown = Gt,
        t.Modal = ge,
        t.Popover = ze,
        t.Scrollspy = pn,
        t.Tab = Hn,
        t.Toast = Yn,
        t.Tooltip = Re,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    });

}
/*
     FILE ARCHIVED ON 00:02:23 Jun 22, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:07:20 Apr 17, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.942
  exclusion.robots: 0.156
  exclusion.robots.policy: 0.141
  cdx.remote: 0.115
  esindex: 0.011
  LoadShardBlock: 105.249 (3)
  PetaboxLoader3.resolve: 155.721 (3)
  PetaboxLoader3.datanode: 73.752 (5)
  load_resource: 152.931
  loaddict: 34.658
*/
