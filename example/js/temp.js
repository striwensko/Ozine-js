(function() {
  var companyId = "1";
  var companyName = "https://www.selltuion.com";
  var apiBaseUrl = "https://api.mysellution.net/api/";
  companyId = companyId.replace(/\{/gim, "").replace(/\}/gim, "");

  function ouibounce(el, custom_config) {
    "use strict";

    var config = custom_config || {},
      aggressive = config.aggressive || false,
      sensitivity = setDefault(config.sensitivity, 20),
      timer = setDefault(config.timer, 1000),
      delay = setDefault(config.delay, 100),
      callback = config.callback || function() {},
      cookieExpire = setDefaultCookieExpire(config.cookieExpire) || "",
      cookieDomain = config.cookieDomain
        ? ";domain=" + config.cookieDomain
        : "",
      cookieName = config.cookieName
        ? config.cookieName
        : "viewedOuibounceModal",
      sitewide = config.sitewide === true ? ";path=/" : "",
      _delayTimer = null,
      _html = document.documentElement;

    function setDefault(_property, _default) {
      return typeof _property === "undefined" ? _default : _property;
    }

    function setDefaultCookieExpire(days) {
      // transform days to milliseconds
      var ms = days * 24 * 60 * 60 * 1000;

      var date = new Date();
      date.setTime(date.getTime() + ms);

      return "; expires=" + date.toUTCString();
    }

    setTimeout(attachOuiBounce, timer);
    function attachOuiBounce() {
      //if (isDisabled()) { return; }
      _html.addEventListener("mouseleave", handleMouseleave);
      _html.addEventListener("mouseenter", handleMouseenter);
      _html.addEventListener("keydown", handleKeydown);
    }

    function handleMouseleave(e) {
      if (e.clientY > sensitivity) {
        return;
      }
      _delayTimer = setTimeout(fire, delay);
    }

    function handleMouseenter() {
      if (_delayTimer) {
        clearTimeout(_delayTimer);
        _delayTimer = null;
      }
    }

    var disableKeydown = false;
    function handleKeydown(e) {
      if (disableKeydown) {
        return;
      } else if (!e.metaKey || e.keyCode !== 76) {
        return;
      }

      disableKeydown = true;
      _delayTimer = setTimeout(fire, delay);
    }

    function checkCookieValue(cookieName, value) {
      return parseCookies()[cookieName] === value;
    }

    function parseCookies() {
      // cookies are separated by '; '
      var cookies = document.cookie.split("; ");

      var ret = {};
      for (var i = cookies.length - 1; i >= 0; i--) {
        var el = cookies[i].split("=");
        ret[el[0]] = el[1];
      }
      return ret;
    }

    function isDisabled() {
      return false;
      return checkCookieValue(cookieName, "true") && !aggressive;
    }

    // You can use ouibounce without passing an element
    // https://github.com/carlsednaoui/ouibounce/issues/30
    function fire() {
      if (isDisabled()) {
        return;
      }

      if (el && el.constructor == Function) {
        el();
      } else if (el) {
        el.style.display = "block";
      }

      callback();
      disable();
    }

    function disable(custom_options) {
      var options = custom_options || {};

      // you can pass a specific cookie expiration when using the OuiBounce API
      // ex: _ouiBounce.disable({ cookieExpire: 5 });
      if (typeof options.cookieExpire !== "undefined") {
        cookieExpire = setDefaultCookieExpire(options.cookieExpire);
      }

      // you can pass use sitewide cookies too
      // ex: _ouiBounce.disable({ cookieExpire: 5, sitewide: true });
      if (options.sitewide === true) {
        sitewide = ";path=/";
      }

      // you can pass a domain string when the cookie should be read subdomain-wise
      // ex: _ouiBounce.disable({ cookieDomain: '.example.com' });
      if (typeof options.cookieDomain !== "undefined") {
        cookieDomain = ";domain=" + options.cookieDomain;
      }

      if (typeof options.cookieName !== "undefined") {
        cookieName = options.cookieName;
      }

      document.cookie =
        cookieName + "=true" + cookieExpire + cookieDomain + sitewide;

      // remove listeners
      _html.removeEventListener("mouseleave", handleMouseleave);
      _html.removeEventListener("mouseenter", handleMouseenter);
      _html.removeEventListener("keydown", handleKeydown);
    }

    return {
      fire: fire,
      disable: disable,
      isDisabled: isDisabled
    };
  }

  console.log("trackingCodeScriptJs > companyId = " + companyId);
  console.log("trackingCodeScriptJs > companyName = " + companyName);

  var Object_extend = function(a, c) {
    for (var b in c) {
      a[b] = c[b];
    }
    return a;
  };
  var DIMS = {};

  function readSize() {
    var myWidth = 0,
      myHeight = 0;
    if (typeof window.innerWidth == "number") {
      //Non-IE
      myWidth = window.innerWidth;
      myHeight = window.innerHeight;
    } else if (
      document.documentElement &&
      (document.documentElement.clientWidth ||
        document.documentElement.clientHeight)
    ) {
      //IE 6+ in 'standards compliant mode'
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else if (
      document.body &&
      (document.body.clientWidth || document.body.clientHeight)
    ) {
      //IE 4 compatible
      myWidth = document.body.clientWidth;
      myHeight = document.body.clientHeight;
    }
    //alert( 'Width = ' + myWidth + ', Height = ' + myHeight + "." + f_clientWidth() + "." + f_clientHeight());
    DIMS.width = myWidth;
    DIMS.height = myHeight;
    //alert(DIMS.width + "x" + DIMS.height);
  }
  var Event = {};
  Event.ERROR = "error";
  Event.CANCEL = "cancel";
  Event.OPEN = "open";
  Event.CLOSE = "close";
  Event.COMPLETE = "onComplete";
  Event.CHANGE = "onChange";
  Event.MOVE = "MOVE";
  Event.START = "START";
  Event.STOP = "STOP";
  Event.RESIZE = "resize";
  Event.SELECT = "select";
  Event.RENDER = "render";
  Event.REFRESH = "refresh";
  Event.STATE_CHANGE = "stateChange";
  Event.SOUND_COMPLETE = "soundComplete";
  Event.FOCUS_OUT = "focusOut";
  Event.FOCUS_IN = "focusIn";
  Event.REMOVE = "remove";
  Event.PROGRESS = "progress";
  Event.UPLOAD = "upload";
  Event.REMOVE = "remove";
  Event.DELETE = "delete";
  function addEvent(c, a, b) {
    if (c.addEventListener) {
      c.addEventListener(a, b, false);
    } else {
      if (c.attachEvent) {
        c.attachEvent("on" + a, b);
      }
    }
  }
  function removeEvent(c, a, b) {
    if (c.removeEventListener) {
      c.removeEventListener(a, b, false);
    } else {
      if (c.detachEvent) {
        c.detachEvent("on" + a, b);
      }
    }
  }
  var addEventSimple = addEvent;
  var removeEventSimple = removeEvent;
  var Event_Dispatcher = {};
  function ADD_EVENT_DISPATCHER(a) {
    Object_extend(a, Event_Dispatcher);
  }
  Event_Dispatcher.all = function(a) {};
  Event_Dispatcher.addEventListener = function(b, c, a) {
    if (!this.events) {
      this.events = {};
    }
    if (!this.events[b]) {
      this.events[b] = new Array();
    }
    a = a ? a : this;
    this.events[b].push({ listener: c, scope: a });
  };
  Event_Dispatcher.dispatchEvent = function(c, e) {
    if (!this.events) {
      this.events = {};
    }
    if (this.events[c]) {
      var a = this.events[c];
      for (var f = 0; f < a.length; f++) {
        var d = a[f].listener;
        var b = a[f].scope;
        if ((typeof d).toString() == "function") {
          if (b) {
            b.eventRecieverFunction = d;
            b.eventRecieverFunction({ currentTarget: this, type: c, data: e });
          } else {
            d({ currentTarget: this, type: c, data: e });
          }
        } else {
          b[d]({ currentTarget: this, type: c, data: e });
        }
      }
    }
  };
  Event_Dispatcher.removeEventListener = function(c, d, b) {
    if (!this.events) {
      return false;
    }
    if (!this.events[c]) {
      return false;
    }
    var a = this.events[c];
    for (var e = 0; e < a.length; e++) {
      if (d == a[e].listener && b == a[e].scope) {
        a.splice(e, 1);
      }
    }
  };
  Event_Dispatcher._addEventListener = Event_Dispatcher.addEventListener;
  Event_Dispatcher._dispatchEvent = Event_Dispatcher.dispatchEvent;
  Event_Dispatcher._removeEventListener = Event_Dispatcher.removeEventListener;
  function TimeLine(b, a) {
    (this.duration = b),
      (this.direction = 1),
      (this._position = 0),
      (this.status = "STOP"),
      (this.startTime = 0),
      (this.interval = a),
      this.intervalObj,
      (this.data = {}),
      (this.events = {}),
      ADD_EVENT_DISPATCHER(this);
    var c = this;
    this.REQ_ANIMATION = function(d) {
      c.update();
    };
  }
  (TimeLine.prototype.play = function() {
    if (
      (1 == this.direction && this._position == this.duration) ||
      (-1 == this.direction && 0 == this._position)
    ) {
    } else {
      if (
        ((this.startTime = new Date().getTime() - this._position),
        "PLAY" != this.status)
      ) {
        var b = this,
          a =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.oRequestAnimationFrame;
        if (a) {
          a(this.REQ_ANIMATION);
        } else {
          b = this;
          this.intervalObj = setInterval(function() {
            b.update();
          }, this.interval);
        }
      }
      this.status = "PLAY";
    }
  }),
    (TimeLine.prototype.pause = function() {
      (this.status = "PAUSE"), clearInterval(this.intervalObj);
    }),
    (TimeLine.prototype.stop = function() {
      (this.status = "STOP"), clearInterval(this.intervalObj);
    }),
    Object.defineProperty(TimeLine.prototype, "position", {
      get: function() {
        return this._position;
      },
      set: function(a) {
        (this._position = a),
          (this.startTime = new Date().getTime() - this._position);
      },
      configurable: !0
    }),
    (TimeLine.prototype.update = function() {
      if (
        (Date.now ||
          (Date.now = function() {
            return new Date().getTime();
          }),
        "PLAY" != this.status)
      ) {
        return !1;
      }
      var b = Date.now();
      if (1 == this.direction) {
        (this._position = b - this.startTime),
          (this._position = Math.min(this.duration, this._position)),
          this._position == this.duration
            ? ((this.status = "STOP"),
              clearInterval(this.intervalObj),
              this.dispatchEvent(Event.COMPLETE),
              this.onComplete && this.onComplete())
            : "PLAY" == this.status &&
              (a =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.oRequestAnimationFrame) &&
              a(this.REQ_ANIMATION);
      } else {
        if (
          ((this._position = Math.max(
            2 * this._position - (b - this.startTime),
            0
          )),
          (this.startTime = b - this._position),
          0 == this._position)
        ) {
          (this.status = "STOP"),
            clearInterval(this.intervalObj),
            this.dispatchEvent(Event.COMPLETE),
            this.onComplete && this.onComplete();
        } else {
          if ("PLAY" == this.status) {
            var a =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.oRequestAnimationFrame;
            a && a(this.REQ_ANIMATION);
          }
        }
      }
      this.dispatchEvent(Event.CHANGE);
    }),
    (TimeLine.prototype.getTime = function(b, a, c) {
      var d = Math.min(Math.max(this._position - b, 0), a);
      return null != c ? c(d, 0, 1, a) : this.easeInOut(d, 0, 1, a);
    }),
    (TimeLine.prototype.easeInOut = function(b, a, c, d) {
      return (-c / 2) * (Math.cos((Math.PI * b) / d) - 1) + a;
    }),
    (TimeLine.prototype.easeInOutPos = function(b, a, c, d) {
      return (Math.acos((2 / c) * -(b - a) + 1) * d) / Math.PI;
    }),
    (TimeLine.applyMatrix = function(C, v) {
      if (((C = C.constructor == Array ? C : [C]), !v)) {
        for (f = 0; f < C.length; f++) {
          ((y = C[f]).style.transform = ""),
            (y.style.MozTransform = ""),
            (y.style.WebkitTransform = ""),
            (y.style.msTransform = ""),
            (y.style.OTransform = "");
        }
        return !1;
      }
      var x = v.hasOwnProperty("scale") ? v.scale : 1,
        j = v.hasOwnProperty("scaleX") ? v.scaleX * x : x,
        g = v.hasOwnProperty("scaleY") ? v.scaleY * x : x,
        D = (v.hasOwnProperty("rotation") ? v.rotation : 0) * (Math.PI / 180),
        A = v.hasOwnProperty("x") ? v.x : 0,
        b = v.hasOwnProperty("y") ? v.y : 0,
        q = v.hasOwnProperty("opacity") ? v.opacity : 1;
      if (v.hasOwnProperty("radius") && v.hasOwnProperty("angle")) {
        var w = v.radius,
          k = v.angle;
        (A = Math.round(w * Math.cos((k * Math.PI) / 180) * 100) / 100 + A),
          (b = Math.round(w * Math.sin((k * Math.PI) / 180) * 100) / 100 + b);
      }
      for (
        var z =
            "matrix(" +
            [
              j * Math.cos(D),
              -g * Math.sin(D),
              g * Math.sin(D),
              g * Math.cos(D),
              A,
              b
            ].join(",") +
            ")",
          f = 0;
        f < C.length;
        f++
      ) {
        var B = !1,
          y = C[f];
        y.animation || (y.animation = {}),
          y.animation.x != A && ((y.animation.x = A), (B = !0)),
          y.animation.y != b && ((y.animation.y = b), (B = !0)),
          y.animation.scaleX != j && ((y.animation.scaleX = j), (B = !0)),
          y.animation.scaleY != g && ((y.animation.scaleY = g), (B = !0)),
          y.animation.rotation != v.rotation &&
            ((y.animation.rotation = v.rotation), (B = !0)),
          v.hasOwnProperty("opacity") &&
            y.animation.opacity != q &&
            ((y.style.opacity = q), (y.animation.opacity = q)),
          B &&
            ((y.style.transform = z),
            (y.style.MozTransform = z),
            (y.style.WebkitTransform = z),
            (y.style.msTransform = z),
            (y.style.OTransform = z));
      }
    });
  function JSON_Loader() {
    this.request, this.url, (this.isReady = !1), ADD_EVENT_DISPATCHER(this);
  }
  JSON_Loader.prototype.abort = function() {
    this.request && this.request.abort();
  };
  JSON_Loader.prototype.send = function(a) {
    this.load(
      a.url,
      a.data,
      a.contentType || null,
      a.requestMethod || null,
      a.headers || null
    );
  };
  JSON_Loader.prototype.load = function(h, d, f, g, c) {
    (this.url = h), (this.data = null), (this.isReady = !1);
    var b = this;
    if ((this.request && this.request.abort(), window.XMLHttpRequest)) {
      (this.request = new XMLHttpRequest()),
        this.request.overrideMimeType &&
          this.request.overrideMimeType("text/xml");
    } else {
      if (window.ActiveXObject) {
        try {
          this.request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (h) {
          try {
            this.request = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (h) {}
        }
      }
    }
    if (!this.request) {
      return alert("Giving up :( Cannot create an XMLHTTP instance"), !1;
    }
    if (
      ((this.request.onreadystatechange = function(l) {
        var a = !1,
          i = l.target;
        if (4 == i.readyState) {
          if (400 == i.status) {
            try {
              k = unescape(
                escape(this.responseText)
                  .replace(/%0A/gim, "")
                  .replace(/%0D/gim, "")
              );
              (b.data = JSON.parse(k)), b.dispatchEvent(Event.ERROR);
            } catch (l) {
              console.log(l), b.dispatchEvent(Event.ERROR);
            }
          } else {
            if (
              200 == i.status ||
              ("file:" === window.location.protocol && 0 == i.status)
            ) {
              try {
                var k = unescape(
                  escape(this.responseText)
                    .replace(/%0A/gim, "")
                    .replace(/%0D/gim, "")
                );
                b.data = JSON.parse(k);
              } catch (l) {
                a = !0;
              }
              a
                ? (console.log("error:" + b.url + "," + a),
                  console.log("string:" + k),
                  b.dispatchEvent(Event.CANCEL))
                : ((b.isReady = !0), b.dispatchEvent(Event.COMPLETE));
            }
          }
        }
      }),
      d)
    ) {
      if (
        (this.request.open(g || "POST", this.url, !0),
        f
          ? this.request.setRequestHeader("Content-Type", f)
          : this.request.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            ),
        c)
      ) {
        for (j = 0; j < c.length; j++) {
          console.log(c[j].name, c[j].value),
            this.request.setRequestHeader(c[j].name, c[j].value);
        }
      }
      this.request.send(d);
    } else {
      if (
        (this.request.open(g || "GET", this.url, !0),
        f && this.request.setRequestHeader("Content-Type", f),
        c)
      ) {
        for (var j = 0; j < c.length; j++) {
          this.request.setRequestHeader(c[j].name, c[j].value);
        }
      }
      this.request.send(null);
    }
  };

  var Browser = {};
  Browser.DOM = function(html, scope) {
    var node = document.createElement("div");
    node.innerHTML = html;

    var _scope = scope || {};

    function toScope(node, scope) {
      var children = node.children;
      for (var iChild = 0; iChild < children.length; iChild++) {
        if (children[iChild].getAttribute("var")) {
          var names = children[iChild].getAttribute("var").split(".");
          var obj = scope;
          while (names.length > 0) {
            var _property = names.shift();
            if (names.length == 0) {
              obj[_property] = children[iChild];
            } else {
              obj = obj[_property];
            }
          }
        }
        toScope(children[iChild], scope);
      }
    }
    toScope(node, _scope);

    if (node.childNodes.length == 1) {
      if (!scope) {
        node.childNodes[0].nodes = _scope;
      }
      return node.childNodes[0];
    }

    var fragment = document.createDocumentFragment();
    var children = node.childNodes;
    while (children.length > 0) {
      fragment.append(children[0]);
    }
    fragment.nodes = _scope;
    return fragment;
  };

  var CSS = document.createElement("link");
  CSS.setAttribute("rel", "stylesheet");
  CSS.setAttribute(
    "href",
    "//sellutionstorage.blob.core.windows.net/default-files/trackingcodeStyleTemplate.css?" +
      new Date().getTime()
  );
  document.head.appendChild(CSS);

  /*
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', 'https://corporate.mysellution.net/trackingcodescript.js');
  document.head.appendChild(script);
*/
  var demo_data = {
    isSuccessful: true,
    errorMessage: null,
    data: [
      {
        typeId: 1,
        type: "POPUP",
        formId: 2,
        name: "test one",
        description: "",
        isPublish: true,
        formTypeId: 1,
        formType: "Pop-up Box",
        image:
          "https://app.mysellution.net/cimages/storage/ba63bf11adb847a4abc9563b0ab0a1f3_grupo_hunan.jpg",
        calloutText: "Title Callout",
        calloutBody: "<p>Text Callout dssacfscscswcswcfewfew</p>",
        calloutButtonText: "Show Form",
        calloutThemeColor: "#66A5E9",
        formBody: "<p>Form Body<br></p>",
        formButtonText: "Form Button Text",
        thankYouMessage: "<p>Thank you Text</p>",
        isForAllPages: false,
        on50PercentPageScroll: true,
        onExitIntent: true,
        isElapsedTime: false,
        elapsedTimeInSecond: 5.0,
        turnOffOnSmallScreenSizes: true,
        formDismissedTypeId: 4,
        formDismissedType: "Two Week",
        formFields: [
          { formFieldTypeId: 1, formFieldType: "Name" },
          { formFieldTypeId: 3, formFieldType: "PhoneNumber" }
        ],
        //pageUrlList: ["www.google.com, youtube.com, /http[s]:/"],
        pageUrlList: ["www.google.com, youtube.com"],
        emailList: ["sumaira@tplex.com"]
      }
    ]
  };
  var COOKIES = {};

  var domain = window.location.href.substr(
    0,
    window.location.href.search(/[^\/\:]\//) + 1
  );
  var iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src =
    "https://sellutionstorage.blob.core.windows.net/default-files/trackingCookie.html?domain=" +
    domain;
  iframe.onload = function() {};
  if (document.body) {
    document.body.appendChild(iframe);
  } else {
    addEvent(window, "load", function() {
      document.body.appendChild(iframe);
    });
  }
  /* */
  window.addEventListener("message", function(event) {
    try {
      var data = JSON.parse(event.data);
      if (data.sellutionCookie) {
        // Cookies read
        console.log(data);
        COOKIES = data.sellutionCookie;

        var json = new JSON_Loader();
        json.load(apiBaseUrl + "Marketing/GetEmbedDataList/" +  companyId  );
        json.addEventListener(Event.COMPLETE, "onData", json);
        json.onData = function() {
          //console.log(this.data.data);
          build(this.data.data);
        };
      }
    } catch (e) {}
  });

  var durationTypes = {};
  durationTypes["One Day"] = 1000 * 60 * 60 * 24 * 1;
  durationTypes["Three Days"] = 1000 * 60 * 60 * 24 * 3;
  durationTypes["One Week"] = 1000 * 60 * 60 * 24 * 7;
  durationTypes["Two Week"] = 1000 * 60 * 60 * 24 * 14;
  durationTypes["One Month"] = 1000 * 60 * 60 * 24 * 30;

  var items = {};
  function build(data) {
    for (var iData = 0; iData < data.length; iData++) {
      var urls = data[iData].pageUrlList;
      var renderItem = false;
      console.log("\n")
      if (data[iData].isForAllPages) {
        renderItem = true;
      } else {
        for (var iUrl = 0; iUrl < urls.length; iUrl++) {
          urls[iUrl] = urls[iUrl].replace(/^[ ]*/, "").replace(/[ ]*$/, "");
          if (urls[iUrl][0] == "/") {
            urls[iUrl] = new RegExp(
              urls[iUrl].replace(/^[//]*/, "").replace(/[//]*$/, "")
            );
          }
          console.log(urls[iUrl], window.location.href, window.location.href.search(urls[iUrl]))
          if (window.location.href.search(urls[iUrl]) >= 0) {
            renderItem = true;
          }
        }
      }
      console.log(data[iData], renderItem)
      if (renderItem) {
        render(data[iData]);
      }
    }
  }

  function render(data) {
    if (data.type == "POPUP") {
      data.formFieldTypeIds = [];
      for (var iField = 0; iField < data.formFields.length; iField++) {
        data.formFieldTypeIds.push(data.formFields[iField].formFieldTypeId);
      }
      data.popup_image_url = data.image;

      if (
        data.isElapsedTime ||
        data.on50PercentPageScroll ||
        data.onExitIntent
      ) {
        if (data.isElapsedTime) {
          setTimeout(function() {
            if (!data.isElapsedTime) {
              return false;
            }
            data.onExitIntent = false;
            data.on50PercentPageScroll = false;
            data.isElapsedTime = false;
            renderPopup(data);
          }, data.elapsedTimeInSecond * 1000);
        }
        if (data.onExitIntent) {
          ouibounce(function() {
            if (!data.onExitIntent) {
              return false;
            }
            renderPopup(data);
            data.onExitIntent = false;
            data.on50PercentPageScroll = false;
            data.isElapsedTime = false;
          });
        }
        if (data.on50PercentPageScroll) {
          addEvent(window, "scroll", function() {
            if (!data.on50PercentPageScroll) {
              return false;
            }
            readSize();
            var y =
              (DIMS.height - document.body.getBoundingClientRect().height) / 2;
            if (document.body.getBoundingClientRect().top < y) {
              data.onExitIntent = false;
              data.on50PercentPageScroll = false;
              data.isElapsedTime = false;
              renderPopup(data);
            }
          });
        }
      } else {
        renderPopup(data);
      }
    }
  }
  function renderPopup(data) {
    console.log(
      "COOKIES->",
      companyId + "_" + data.type + "_" + data.formId,
      COOKIES,
      COOKIES[companyId + "_" + data.type + "_" + data.formId]
    );
    if (COOKIES[companyId + "_" + data.type + "_" + data.formId]) {
      return false;
    }
    var id = data.type + "_" + data.formId;
    var types = [
      {
        name: "Pop-up box",
        value: "popup-banner",
        description: "Pop-up box description",
        image:
          "https://static.hsappstatic.net/lead-flows-ui/static-1.1641/img/dynos/pop_over.png"
      },
      {
        name: "Drop-down banner",
        value: "dropdown-banner",
        description: "Drop-down banner description",
        image:
          "https://static.hsappstatic.net/lead-flows-ui/static-1.1641/img/dynos/top.png"
      },
      {
        name: "Slide-in box left",
        value: "slide-left",
        description: "Slide-in box left description",
        image:
          "https://static.hsappstatic.net/lead-flows-ui/static-1.1641/img/dynos/top.png"
      },
      {
        name: "Slide-in box right",
        value: "slide-right",
        description: "Slide-in box right description",
        image:
          "https://static.hsappstatic.net/lead-flows-ui/static-1.1641/img/dynos/bottom_right.png"
      }
    ];

    var popup_type = types[data.typeId - 1].value;

    if (!items[id]) {
      items[id] = SELLUTION.createPopup(popup_type, data);
    }
    console.log(
      "start-popup->",
      companyId + "_" + data.type + "_" + data.formId
    );
    items[id].start();
    var cookie = {};
    cookie[companyId + "_" + data.type + "_" + data.formId] =
      durationTypes[data.formDismissedType] || 1;
    iframe.contentWindow.postMessage(
      JSON.stringify({ sellutionCookie: cookie }),
      "https://sellutionstorage.blob.core.windows.net"
    );
    //this.POPUP.setData(data);
  }
  var SELLUTION = SELLUTION || {};
  SELLUTION.createPopup = function(type, data) {
    var popup = new SELLUTION.Popup(type);
    data && popup.setData(data);
    return popup;
  };

  SELLUTION.Popup = function(type) {
    var self = this;
    this.holder = document.createElement("div");
    this.holder.className = "sellution-popup " + type;

    this.container = document.createElement("div");
    this.container.className = "sellution-container";

    this.UI = {};
    var template = "";
    template += '<div class="sellution-close-button" var="closeButton">';
    template +=
      '  <svg viewbox="0 0 40 40"><path class="close-x" d= "M 10,10 L 30,30 M 30,10 L 10,30"/></svg >';
    template += "</div>";
    template += '<div class="steps step-1" var="call_out">';
    template += '  <h3 var="title"></h3>';
    template += '  <div class="text" var="text"></div>';
    template += '  <b class="button" var="button"></b>';
    template += "</div>";
    template +=
      '<div class="steps step-2" var="form_step" style="display: none">';
    template += '  <h3 var="form_title"></h3>';
    template +=
      '  <img var="image_popup" style="display:block;margin:0 auto;max-width:100%; max-height:200px;"/>';
    template += '  <div class="form_text" var="form_text"></div>';
    template += '  <div class="form" var="form"></div>';
    template += '  <b class="button" var="form_button"></b>';
    template += "  <i>We don't send spam. Unsubscribe at any time.</i>";
    template += "</div>";
    template +=
      '<div class="steps step-3" var="thank_you" style="display: none">';
    template += '  <div class="text" var="thank_you_text"></div>';
    template += '  <b class="closeText" var="closeText">Close</b>';
    template += "</div>";
    template += '<a href="#" class="powered">Powered by Sellution</a>';
    this.container.appendChild(Browser.DOM(template, this.UI));

    this.UI.closeText.onclick = function() {
      self.timeLine.direction = -1;
      self.timeLine.play();
    };
    this.UI.closeButton.onclick = this.UI.closeText.onclick;
    this.UI.button.onclick = function() {
      self.show_screen("form");
    };

    this.UI.form.fields = [];
    this.UI.form_button.onclick = function() {
      var isValid = true;
      var fields = self.UI.form.fields;
      for (var iField = 0; iField < fields.length; iField++) {
        if (!fields[iField].validate()) {
          isValid = false;
          fields[iField].classList.add("invalid");
        } else {
          fields[iField].classList.remove("invalid");
        }
        console.log(fields[iField].validate(), fields[iField].classList);
      }
      if (isValid) {
        var data = {
          formId: self.data.formId,
          companyId: companyId
        };
        //name, email, phone number
        var fields = self.UI.form.fields;
        for (var iField = 0; iField < fields.length; iField++) {
          data[fields[iField].param] = fields[iField].value;
        }

        var json = new JSON_Loader();
        json.send({
          url: apiBaseUrl+ "Marketing/CaptureFormContact",
          requestMethod: "POST",
          data: JSON.stringify(data),
          contentType: "application/json"
        });
        json.addEventListener(Event.COMPLETE, "onData", json);
        json.onData = function() {
          console.log(this.data.data);
        };

        self.show_screen("thank_you");
      }
    };

    this.holder.appendChild(this.container);

    this.type = type;
    console.log(this.holder);
    console.log(document.body);
    document.body.appendChild(this.holder);

    this.timeLine = new TimeLine(800, 33);
    this.timeLine.addEventListener(Event.CHANGE, "render", this);

    this.render();
  };
  SELLUTION.Popup.prototype.createForm = function(fields) {
    this.UI.form.innerHTML = "";

    for (var iField = 0; iField < fields.length; iField++) {
      //name, email, phone number
      if (Number(fields[iField]) == 1) {
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Name");
        input.validate = function() {
          return this.value != "";
        };
        input.param = "name";
        this.UI.form.appendChild(input);
        this.UI.form.fields.push(input);
      } else if (Number(fields[iField]) == 2) {
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Email");
        input.errorMessage = document.createElement("div");
        input.errorMessage.className = "error-message";
        input.validate = function() {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          var isValid = re.test(this.value.toLowerCase());
          if (!isValid) {
            this.errorMessage.innerHTML = "Please enter valid email";
            return false;
          }
          this.errorMessage.innerHTML = "";
          return true;
        };
        input.param = "email";
        this.UI.form.appendChild(input);
        this.UI.form.appendChild(input.errorMessage);

        this.UI.form.fields.push(input);
      } else if (Number(fields[iField]) == 3) {
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Phone Number");
        input.errorMessage = document.createElement("div");
        input.errorMessage.className = "error-message";
        input.validate = function() {
          var stripped = this.value.replace(/[\(\)\.\-\ ]/g, "");
          if (stripped == "") {
            return false;
          } else if (isNaN(parseInt(stripped))) {
            this.errorMessage.innerHTML = "Please enter valid phone number";
            return false;
          } else if (!(stripped.length == 10)) {
            this.errorMessage.innerHTML = "Phone number should have 10 digits";
            return false;
          }
          this.errorMessage.innerHTML = "";
          return true;
        };
        input.param = "phoneNumber";
        this.UI.form.appendChild(input);
        this.UI.form.appendChild(input.errorMessage);

        this.UI.form.fields.push(input);
      }
    }
    console.log(this.UI.form);
  };
  SELLUTION.Popup.prototype.setData = function(data) {
    //console.log(data);
    this.data = data;
    this.UI.title.innerHTML = data.calloutText;
    this.UI.form_title.innerHTML = data.calloutText;

    this.UI.text.innerHTML = data.calloutBody;
    this.UI.form_text.innerHTML = data.formBody;

    this.UI.thank_you_text.innerHTML = data.thankYouMessage;

    this.UI.title.style.display = data.calloutText ? "" : "none";
    this.UI.form_title.style.display = data.calloutText ? "" : "none";

    this.UI.text.style.display = data.calloutBody ? "" : "none";
    this.UI.form_text.style.display = data.formBody ? "" : "none";
    this.createForm(data.formFieldTypeIds);
    this.UI.thank_you_text.style.display = data.thankYouMessage ? "" : "none";

    this.UI.image_popup.src = data.popup_image_url;
    this.UI.button.innerHTML = data.calloutButtonText;
    this.UI.button.style.backgroundColor = data.calloutThemeColor;

    this.UI.form_button.innerHTML = data.formButtonText;
    this.UI.form_button.style.backgroundColor = data.calloutThemeColor;

    this.UI.closeText.style.backgroundColor = data.calloutThemeColor;
  };
  SELLUTION.Popup.prototype.show_screen = function(name) {
    this.UI.call_out.style.display = name == "call_out" ? "" : "none";
    this.UI.thank_you.style.display = name == "thank_you" ? "" : "none";
    this.UI.form_step.style.display = name == "form" ? "" : "none";
  };
  SELLUTION.Popup.prototype.start = function() {
    console.log(this.timeLine.position, this.timeLine.direction);
    this.timeLine.play();
  };
  SELLUTION.Popup.prototype.render = function(event) {
    if (this.type == "dropdown-banner") {
      var y = -100 + 100 * this.timeLine.getTime(0, 300);
      this.container.style.transform = "translate(0, " + y + "%)";
    } else if (this.type == "popup-banner") {
      this.holder.style.opacity = this.timeLine.getTime(0, 300);
      this.holder.style.transform = "";
      this.holder.style.MozTransform = "";
      this.holder.style.WebkitTransform = "";
      this.holder.style.msTransform = "";
      this.holder.style.OTransform = "";
      //TimeLine.applyMatrix(this.container, { y: -30 + 30 * this.timeLine.getTime(200, 300), opacity: this.timeLine.getTime(200, 300) });
    } else if (this.type == "slide-left") {
      var y = 100 - 100 * this.timeLine.getTime(0, 300);
      this.container.style.transform = "translate(0, " + y + "%)";
    } else if (this.type == "slide-right") {
      var y = 100 - 100 * this.timeLine.getTime(0, 300);
      this.container.style.transform = "translate(0, " + y + "%)";
    }
    this.holder.style.display = this.timeLine.position > 0 ? "" : "none";
  };
  SELLUTION.Popup.prototype.destroy = function() {
    document.body.removeChild(this.holder);
  };
})();
