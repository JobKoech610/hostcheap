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

    !function() {
        function B(e, t, o, n) {
            var i = new Date
              , o = (i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3),
            "expires=" + i.toUTCString());
            n = n || "samesite=None;",
            document.cookie = e + "=" + t + ";" + o + ";" + n + "path=/;Secure"
        }
        function j(e) {
            for (var t = e + "=", o = decodeURIComponent(document.cookie).split(";"), n = 0; n < o.length; n++) {
                for (var i = o[n]; " " == i.charAt(0); )
                    i = i.substring(1);
                if (0 == i.indexOf(t))
                    return i.substring(t.length, i.length)
            }
            return ""
        }
        let e = !1;
        var D = "https://web.archive.org/web/20230225194715/https://www.powr.io";
        function U() {
            return "http://localhost:3000" != D && "https://localhost:3000" != D && "http://10.0.2.2:3000" != D && "http://192.168.1.149:3000" != D && "http://localhost:8888" != D ? function() {}
            : console.log.bind(window.console)
        }
        if ("undefined" != typeof loadPowr)
            U()("Powr already loaded");
        else {
            for (var t = document.querySelectorAll(".powrLoaded"), o = 0; o < t.length; o++) {
                var n = t[o];
                n.innerHTML = "",
                n.classList.remove("powrLoaded")
            }
            var i, z = ((t,o)=>{
                let n = null;
                return (...e)=>{
                    window.clearTimeout(n),
                    n = window.setTimeout(()=>{
                        t.apply(null, e)
                    }
                    , o)
                }
            }
            )(e=>{
                for (var t = 0; t < POWR_RECEIVERS.length; t++)
                    POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({
                        message: "triggerPowrPopupAfterInactivity"
                    }), POWR_RECEIVERS[t].url)
            }
            , 300), G = (window.addEventListener ? window.addEventListener("message", s) : window.attachEvent("onmessage", s),
            0), r = (POWR_RECEIVERS = [],
            document.createEvent("Event")), a = (r.initEvent("powrPingListener", !0, !0),
            loadPowr = function() {
                if (document.body) {
                    for (var t = null, o = null, e = null, n = !1, i = document.querySelectorAll("script"), r = 0; r < i.length; r++) {
                        var a = i[r]
                          , l = a.getAttribute("src");
                        if (null != l) {
                            var s, d = a.getAttribute("powr-token"), c = a.getAttribute("external-type"), p = ((e = F(l)) && e.loadApp && e.uniqueId && !a.getAttribute("auto-add") && ((f = document.createElement("div")).setAttribute("class", "powr-" + e.loadApp),
                            f.setAttribute("id", e.uniqueId),
                            document.body.appendChild(f),
                            a.setAttribute("auto-add", !0)),
                            c = c || a.getAttribute("platform"),
                            a.getAttribute("template-powr-token")), u = a.getAttribute("powr-load");
                            if (null == u && (u = "sync"),
                            K() && K() <= 9 && (u = "sync"),
                            n = a.getAttribute("demo-mode"),
                            null != d ? t = d : -1 < l.search("powr-token") && void 0 !== e["powr-token"] && 0 < e["powr-token"].length && (t = e["powr-token"]),
                            null != c ? o = c : -1 < l.search("external-type") ? null != (s = (e = F(l))["external-type"]) && 0 < s.length && (o = s) : -1 < l.search("platform") && null != (s = (e = F(l)).platform) && 0 < s.length && (o = s),
                            "ecwid" == o && (u = "sync"),
                            null != t || null != o)
                                break
                        }
                    }
                    if (null == t || 0 == t.length)
                        try {
                            t = window.top.location.host
                        } catch (e) {
                            t = ""
                        }
                    "wix-oauth" == o && document.querySelectorAll("head .powr-popup, head .powr-chat").forEach(function(e) {
                        document.body.append(e)
                    });
                    for (var w, g, m, h, M = /\[powr-[^\]]*\]/gi, N = /\[powr-[^\s\]]*/gi, E = document.querySelectorAll("a"), r = 0; r < E.length; r++)
                        ee(v = E[r]) || (w = v.previousSibling,
                        g = v.nextSibling,
                        w && g && v.getAttribute("href") && -1 < v.getAttribute("href").search("tel") && 3 == w.nodeType && 3 == g.nodeType && w.nodeValue.match(N) && -1 < g.nodeValue.search("]") && (m = v.innerHTML,
                        h = w.nodeValue.match(/powr-[^\s\]]*/gi)[0],
                        (b = document.createElement("div")).innerHTML = '<div class="' + h + '" label="' + m + '"></div>',
                        w.parentNode.removeChild(w),
                        g.parentNode.removeChild(g),
                        v.parentNode.replaceChild(b, v)));
                    for (var f, R, E = document.querySelectorAll("body, body *"), r = 0; r < E.length; r++) {
                        var v, y = (v = E[r]).childNodes;
                        if (!ee(v))
                            for (var C = 0; C < y.length; C++) {
                                var S, _, b, O = y[C];
                                3 == O.nodeType && (_ = (S = O.nodeValue).replace(M, X)) != S && ((b = document.createElement("div")).innerHTML = _,
                                v.replaceChild(b, O))
                            }
                    }
                    0 == document.querySelectorAll("#powrIframeLoader").length && (f = document.createElement("div"),
                    R = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                    f.id = "powrIframeLoader",
                    f.innerHTML = "&shy;<style> .powrLoaded iframe { visibility: hidden; } </style>",
                    R.parentNode.insertBefore(f, R));
                    for (var I = document.querySelectorAll("[class*=powr-]"), q = !1, H = !1, r = 0; r < I.length; r++) {
                        var P = I[r];
                        if (!ee(P) && !(P instanceof SVGElement || -1 < P.className.search("powrLoaded"))) {
                            var W = ne(P);
                            if (void 0 !== W) {
                                Q(W) && (q = !0),
                                "scroll-to-top" != W && !Q(W) || (H = !0);
                                var k = P.getAttribute("label");
                                if ("weebly_" != (k = null == k ? "" : k)) {
                                    P.className += " powrLoaded",
                                    null == p && (p = "");
                                    let e = P.getAttribute("id");
                                    null == e ? e = "" : e.includes("-template--") && (e = e.split("__")[1]);
                                    var V = P.getAttribute("view-mode")
                                      , A = "true" == n || "true" == P.getAttribute("demo-mode")
                                      , T = D + "/" + W + "/u/" + e;
                                    if (!1 === oe() && (T += "/cookieless"),
                                    e.startsWith("bigcommerce_") && P.dataset && "pagebuilder" === P.dataset.installSrc && (Q(W) || Z(W)))
                                        if ($())
                                            T += "?hideContent=true";
                                        else {
                                            var x = P.closest("[data-content-region]").querySelectorAll("div");
                                            for (let e = 0; e < x.length; e++)
                                                -1 === x[e].className.indexOf("powr-") && (x[e].style.zIndex = "9999999")
                                        }
                                    "product-reviews" === W && ((L = P.getAttribute("data-product-id")) && (T = T + "?product_id=" + L),
                                    L = P.getAttribute("data-product-name")) && (T = T + "&product_name=" + encodeURI(L)),
                                    T += "#platform=" + (s || "html");
                                    var P = encodeURIComponent(k)
                                      , L = D + "/plugins/" + W + "/cached_view?load=" + u + "&index=" + G + "&unique_label=" + e + "&powr_token=" + t + "&user_label=" + P + "&demo_mode=" + A + "&isCookieAllowed=" + oe()
                                      , k = "https://web.archive.org/web/20230225194715/https://www.powr.io/plugins/" + W + "/view.json?unique_label=" + e + "&powr_token=" + t + "&user_label=" + P + "&demo_mode=" + A + "&isCookieAllowed=" + oe();
                                    if (null != o && (k += A = "&external_type=" + o,
                                    L += A),
                                    null != p && (k += A = "&template_powr_token=" + p,
                                    L += A),
                                    null != V && (k += A = "&view_mode=" + V,
                                    L += A),
                                    U()("page url IS " + te()),
                                    te() && (k += "&url=" + encodeURIComponent(te())),
                                    document.location.host)
                                        var J = document.location.protocol + "//" + document.location.host;
                                    else
                                        try {
                                            var J = document.location.ancestorOrigins[0]
                                        } catch (e) {
                                            J = window.top && window.top.location && window.top.location.host ? window.top.location.protocol + "//" + window.top.location.host : ""
                                        }
                                    if (k += "&request_url=" + encodeURIComponent(J),
                                    L += "&request_url=" + encodeURIComponent(document.location.href),
                                    0 == P.length && (L = T,
                                    te()) && (L += "&url=" + encodeURIComponent(te())),
                                    window.CookieControl && "function" == typeof window.CookieControl.isPOWrAllowed) {
                                        V = j("isJimdoCookieSettingsShownBefore");
                                        if (!oe() && !V)
                                            return void setTimeout(function() {
                                                window.CookieControl && window.CookieControl.showCookieSettings && (window.CookieControl.showCookieSettings(),
                                                B("isJimdoCookieSettingsShownBefore", !0, 1))
                                            }, 1e3)
                                    }
                                    ie(I[r], W, G, o, L, k, u),
                                    G++
                                }
                            }
                        }
                    }
                    q && (Y(document, "click", function(e) {
                        e = (e = e || window.event).relatedTarget || e.toElement || e.target;
                        if (e && e.classList.contains("trigger-popup"))
                            for (var t = 0; t < POWR_RECEIVERS.length; t++)
                                POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({
                                    message: "triggerPowrPopupClick"
                                }), POWR_RECEIVERS[t].url);
                        else
                            z()
                    }),
                    Y(document, "keypress", z),
                    Y(document, "mousemove", z),
                    Y(document, "mouseout", function(e) {
                        if ((e = e || window.event).clientY < 5)
                            for (var t = 0; t < POWR_RECEIVERS.length; t++)
                                POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({
                                    message: "exitDocument"
                                }), POWR_RECEIVERS[t].url)
                    })),
                    H && Y(document, "scroll", function(e) {
                        for (var t = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight, o = 100 * (document.documentElement.scrollTop || document.body.scrollTop) / t, n = 0; n < POWR_RECEIVERS.length; n++)
                            POWR_RECEIVERS[n].receiver.postMessage(JSON.stringify({
                                message: "scrollPosition",
                                scrollPercentage: o
                            }), POWR_RECEIVERS[n].url)
                    })
                }
            }
            ,
            window.location.search.includes("powr-review-badge-preview") && (e = !0,
            (i = document.createElement("script")).src = D + "/powr_product_review_badge_installation.js",
            document.head.appendChild(i)),
            loadPowr(),
            setInterval(function() {
                e || loadPowr()
            }, 500),
            Y(window, "load", loadPowr),
            !1);
            Y(window, "keydown", function(e) {
                if (80 == e.keyCode && (a = !0,
                setTimeout(function() {
                    a = !1
                }, 2e3)),
                38 == e.keyCode && a) {
                    for (var t = 0; t < POWR_RECEIVERS.length; t++)
                        POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({
                            message: "showEdit"
                        }), POWR_RECEIVERS[t].url);
                    return e.preventDefault(),
                    !1
                }
                if (40 == e.keyCode && a) {
                    for (t = 0; t < POWR_RECEIVERS.length; t++)
                        POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({
                            message: "hideEdit"
                        }), POWR_RECEIVERS[t].url);
                    return e.preventDefault(),
                    !1
                }
            })
        }
        function Y(e, t, o) {
            e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent && e.attachEvent("on" + t, o)
        }
        function u(e, t, o, n) {
            var i = -1 < o.indexOf("product-reviews");
            window.Shopify;
            setTimeout(()=>{
                t.appendChild(e),
                POWR_RECEIVERS.push({
                    receiver: e.contentWindow,
                    url: o,
                    data_url: n
                })
            }
            , 0)
        }
        function X(e, t, o, n, i, r) {
            var a = e
              , e = (U()("Match:", e),
            a.match(/powr-[^\s\]]*/i))
              , l = a.match(/id="[^"]*"/i)
              , e = '<div class="' + e + '" ' + (l = null == (l = null == (l = null == (l = null == (l = null == l ? a.match(/id='[^']*'/i) : l) && null != (l = a.match(/id=[^\]]*/i)) ? l[0].replace("id=", 'id="') + '"' : l) ? a.match(/label="[^"]*"/i) : l) ? a.match(/label='[^']*'/i) : l) ? "" : l) + "></div>";
            return U()("Result is:" + e),
            e
        }
        function F(e) {
            for (var t = {}, o = e.search("\\?"), n = (e = e.substr(o + 1)).split("&"), i = 0; i < n.length; i++) {
                var r, a = n[i].split("=");
                void 0 === t[a[0]] ? t[a[0]] = a[1] : "string" == typeof t[a[0]] ? (r = [t[a[0]], a[1]],
                t[a[0]] = r) : t[a[0]].push(a[1])
            }
            return t
        }
        function K() {
            var e = navigator.userAgent.toLowerCase();
            return -1 != e.indexOf("msie") && parseInt(e.split("msie")[1])
        }
        function Q(e) {
            return -1 < ["subscription-signup-popup", "donate-now-popup", "newslettersignuppopup", "emailpopup", "ebook-popup", "shipping-delay-popup", "sales-popup", "spin-to-win", "pre-sale-popup", "cyber-monday-popup", "coronavirus-popup", "discount-popup", "exit-popup", "covid-19-popup", "spin-wheel", "discount-notification-bar", "zoom-pop-up", "exit-intent-popup", "overlay-popup", "onclick-popup", "sales-pop", "email-popup", "coupon-box", "email-subscription-popup", "popup-notification", "full-screen-popup", "survey-popup", "mailchimp-email-signup", "promotion-popup", "splash-popup", "event-registration-popup", "popup-maker", "slide-in", "donation-popup", "sale-promotion-bar", "email-sign-up", "modal-popup", "newsletter-sign-up-popup", "popup", "coupon-popup", "popup-form"].indexOf(e)
        }
        function Z(e) {
            return ["chat", "live-chat", "chat-box", "facebook-chat", "messenger-chat"].includes(e)
        }
        function $() {
            return function() {
                try {
                    return window.self !== window.top
                } catch (e) {
                    return 1
                }
            }() && window.location.search && window.location.search.includes("ctk=")
        }
        function ee(e) {
            for (var t = !1, o = e; o && o !== document; o = o.parentNode)
                if (null != o.classList && o.classList.contains("powr-ignore")) {
                    t = !0;
                    break
                }
            return t
        }
        function te() {
            try {
                return window.top.location.href
            } catch (e) {
                return U()("Couldn't get page url:", e),
                ""
            }
        }
        function w(t, e) {
            e.addEventListener && (e.addEventListener("powrPingListener", function() {
                return POWR_RECEIVERS[t].listenerConnected = !0
            }, !1),
            POWR_RECEIVERS[t].ping_interval = setInterval(function() {
                var e = document.querySelectorAll('[powrindex="' + t + '"]')[0];
                e && (POWR_RECEIVERS[t].listenerConnected = !1,
                e.dispatchEvent(r),
                !1 === POWR_RECEIVERS[t].listenerConnected) && (console.log("POWr Lost connection. Reconnecting"),
                clearInterval(POWR_RECEIVERS[t].ping_interval),
                POWR_RECEIVERS[t].receiver = e.contentWindow,
                g(t),
                w(t, e))
            }, 2e3))
        }
        function g(o) {
            var n = new XMLHttpRequest;
            n.open("GET", POWR_RECEIVERS[o].data_url, !0),
            n.withCredentials = !0,
            n.onreadystatechange = function() {
                var e, t;
                n.readyState != XMLHttpRequest.DONE && 4 != n.readyState || (200 == n.status ? ((e = JSON.parse(n.responseText)).iframe_index = o,
                POWR_RECEIVERS[o].data = e,
                t = setInterval(function() {
                    POWR_RECEIVERS[o].loaded && (POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({
                        message: "loadView",
                        data: e
                    }), POWR_RECEIVERS[o].url),
                    clearInterval(t))
                }, 10)) : U()("Error receiving POWr App Data"))
            }
            ,
            n.send()
        }
        function d(e) {
            switch (e.scrollTo) {
            case "top":
                l(0, e.scrollSpeed);
                break;
            case "bottom":
                t = e.scrollSpeed,
                l((document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight + 50, t);
                break;
            case "text":
                var t = e.scrollToText
                  , o = e.scrollSpeed;
                (t = function(e) {
                    for (var t = document.querySelectorAll("body, body *"), o = 0; o < t.length; o++)
                        for (var n = t[o], i = n.childNodes, r = 0; r < i.length; r++) {
                            var a = i[r];
                            if (3 == a.nodeType)
                                if (-1 < a.nodeValue.search(e))
                                    return n
                        }
                    return !1
                }(t)) && l(t.getBoundingClientRect().top + window.scrollY - 150, o);
                break;
            case "anchor":
                var o = e.scrollToAnchor
                  , n = e.scrollSpeed;
                (o = document.getElementById(o)) && l(o.getBoundingClientRect().top + window.scrollY - 150, n);
                break;
            case "app":
                n = document.querySelector('iframe[src="' + e.url + '"]');
                n ? e.ios ? window.scrollTo(0, n.offsetTop - 50) : l(n.offsetTop - 50, e.scrollSpeed) : window.scrollBy(0, e.distance)
            }
            var t
        }
        function l(e, t, o) {
            var n = document.documentElement.scrollTop || document.body.scrollTop;
            n !== o && (window.requestAnimationFrame(function() {
                l(e, t, n)
            }),
            n < e ? window.scrollTo(0, n + (e - n) / t) : window.scrollTo(0, n - (n - e) / t))
        }
        function s(e) {
            U()("Settings got a message!", e);
            try {
                var t = JSON.parse(e.data);
                if ("clearCart" === t.message && fetch("/cart/clear.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(()=>{
                    window.location.reload()
                }
                ).catch(e=>{
                    console.log("Error during clearing cart", e)
                }
                ),
                "checkCartIsEmpty" === t.message && fetch("/cart.js", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(e=>e.json()).then(e=>{
                    if (0 < e.item_count)
                        for (let e = 0; e < POWR_RECEIVERS.length; e++)
                            POWR_RECEIVERS[e].receiver.postMessage(JSON.stringify({
                                message: "showCartTimer"
                            }), POWR_RECEIVERS[e].url)
                }
                ).catch(e=>{
                    console.log("Error during checking cart items", e)
                }
                ),
                "viewLoaded" == t.message) {
                    U()("Settings received view loaded");
                    var o = t.data.iframe_index
                      , n = (POWR_RECEIVERS[o].loaded = !0,
                    t.data.cookiesToGet);
                    0 < n.length && (POWR_RECEIVERS[o].cookies = n.map(function(e) {
                        return {
                            cname: e,
                            value: j(e)
                        }
                    }),
                    POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({
                        message: "cookiesSent",
                        cookies: POWR_RECEIVERS[o].cookies
                    }), POWR_RECEIVERS[o].url))
                } else if ("updateSize" == t.message) {
                    "undefined" != typeof gadgets && void 0 !== gadgets.window && void 0 !== gadgets.window.adjustHeight && gadgets.window.adjustHeight(t.data.height);
                    var i, o = t.data.iframe_index, r = document.querySelectorAll('[powrindex="' + o + '"]')[0];
                    if (r) {
                        if (r.height = t.data.height + "px",
                        r.style.height = t.data.height + "px",
                        r.style.display = "inline",
                        null != t.data.postCss)
                            for (var a in t.data.postCss)
                                r.style[a] = t.data.postCss[a];
                        var l = r.parentNode
                          , s = ne(l);
                        (l.getAttribute("id") || "").startsWith("bigcommerce_") && $() && l.dataset && "pagebuilder" === l.dataset.installSrc && (Q(s) || Z(s)) && (r.style.display = "block",
                        r.style.position = "unset",
                        r.style.height = "200px")
                    }
                    t.data.postMessage && "scrollTo" == t.data.postMessage.messageType ? d(t.data.postMessage) : t.data.postMessage && "deliverHashedData" === t.data.postMessage.messageType && (i = t.data.postMessage.data,
                    U()("HASHED DATA RECEIVED", i),
                    __sharethis__) && "function" == typeof __sharethis__.hem && __sharethis__.hem(i),
                    U()("Updating size of el", r)
                } else
                    "loadMe" == t.message ? (U()("Settings received loadMe request"),
                    o = t.data.iframe_index,
                    null != POWR_RECEIVERS[o] && null != POWR_RECEIVERS[o].data && POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({
                        message: "loadView",
                        data: POWR_RECEIVERS[o].data
                    }), POWR_RECEIVERS[o].url)) : "setCookie" === t.message && B(t.cname, t.value, t.exdays)
            } catch (e) {}
        }
        function oe() {
            return window.CookieControl && window.CookieControl.isPOWrAllowed && window.CookieControl.isPOWrAllowed()
        }
        function ne(e) {
            var t = e.className.split(/\s+/);
            for (let e = 0; e < t.length; e++)
                if (0 === t[e].toLowerCase().search("powr-"))
                    return t[e].toLowerCase().replace("powr-", "")
        }
        function ie(e, t, o, n, i, r, a) {
            var l, s, d, c = document.createElement("iframe");
            function p() {
                var e = {
                    message: "loaded",
                    data: {
                        iframe_index: s,
                        parent_window_width: window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth,
                        parent_window_height: window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
                        powrMetafields: window.powrMetafields,
                        powrShopMetafields: window.powrShopMetafields
                    }
                };
                U()("POWr.js sending load message to url" + d + "; iframe:", l),
                l.contentWindow.postMessage(JSON.stringify(e), d)
            }
            c.src = i,
            e.classList && e.classList[0] && (c.title = e.classList[0].replace(/-/g, " ")),
            c.setAttribute("powrindex", o),
            c.width = "100%",
            c.height = c.style.height = "0px",
            Q(t) || (c.style.transition = "height 0.3s",
            c.style.webkitTransition = "height 0.3s"),
            c.style.display = "block",
            c.frameBorder = "0",
            c.style.visibility = "visible",
            c.setAttribute("webkitallowfullscreen", ""),
            c.setAttribute("mozallowfullscreen", ""),
            c.setAttribute("allowfullscreen", ""),
            "ecwid" == n && (e.style.minWidth = "280px"),
            s = o,
            d = i,
            (l = c).addEventListener ? l.addEventListener("load", p) : l.attachEvent("onload", p),
            "async" == a && (g(o),
            w(o, c)),
            "complete" === document.readyState || Q(t) ? u(c, e, i, r) : Y(window, "load", ()=>{
                u(c, e, i, r)
            }
            )
        }
    }();

}
/*
     FILE ARCHIVED ON 19:47:15 Feb 25, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:07:17 Apr 17, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.598
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.061
  cdx.remote: 0.059
  esindex: 0.011
  LoadShardBlock: 58.036 (3)
  PetaboxLoader3.datanode: 84.243 (4)
  load_resource: 747.668
  PetaboxLoader3.resolve: 250.217
*/
