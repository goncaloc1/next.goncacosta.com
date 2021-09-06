function Page(name, changePageTriggerElems) {
  this.name = name;
  this.changePageTriggerElems = changePageTriggerElems || [];
};

Page.prototype = {
  constructor: Page,
  imagesRootPath: 'images/',
  setup: function () { }
};

function ProjectPage(name, changePageTriggerElems) {
  Page.call(this, name, changePageTriggerElems || ['back']);
};

(function (obj) {

  var _base = Page.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

  obj.prototype.setup = function (onScrollCallback) {
    function setupScrollBar(onScrollCallback) {
      var onScrollCallback = onScrollCallback || function () { };

      $("#content").mCustomScrollbar({
        horizontalScroll: true,
        scrollInertia: 550,
        scrollButtons: {
          enable: true,
          scrollSpeed: 150,
        },
        mouseWheel: true,
        mouseWheelPixels: 500,
        callbacks: { onScroll: onScrollCallback }
      });
    };

    function setupFullScreen() {
      initFullScreenAPI();
      fullScreenAPI.setupFullScreenButtons();
    };

    //-------------------------//

    _base.setup.apply(this);

    // $(window).ready(function () {
    //   setupScrollBar(onScrollCallback);
    //   setupFullScreen();
    // });

    // instead of $(window).ready
    jQuery(function () {
      setupScrollBar(onScrollCallback);
      setupFullScreen();
    })
  };

}(ProjectPage));


function ReminiscenciaPage() {
  ProjectPage.call(this, 'reminiscencia');
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

  obj.prototype.setup = function () {
    function setupFullScreen() {
      initFullScreenAPI();
      fullScreenAPI.setupFullScreenButtons();
    };

    //-------------------------//

    Page.prototype.setup.apply(this);

    //$(window).ready(function () {
    jQuery(function () {
      setupFullScreen();
    });
  };

}(ReminiscenciaPage));

function AlbaPage() {
  ProjectPage.call(this, 'alba');
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

}(AlbaPage));


function WhenPage() {
  ProjectPage.call(this, 'when');
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

}(WhenPage));


function PaperbagPage() {
  ProjectPage.call(this, 'paperbag');
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

}(PaperbagPage));


function OuluPage() {
  ProjectPage.call(this, 'oulu', ['back', 'read_book']);
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

}(OuluPage));


function SopraPage() {
  ProjectPage.call(this, 'sopra');
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

}(SopraPage));


function FadoPage() {
  ProjectPage.call(this, 'fado');
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;
}(FadoPage));



/*  ----------

    Check if running from smartphone or tablet.

    ---------- */
window.isMobile = function () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/*
Native FullScreen JavaScript API with F11 key integration
-------------
Assumes Mozilla naming conventions instead of W3C for now
*/

function initFullScreenAPI() {
  var fullScreenAPI = {
    supportsFullScreen: false,
    isFullScreen: function () { },
    isFullScreenF11: function () { },
    requestFullScreen: function () { },
    cancelFullScreen: function () { },
    fullScreenChangeEventName: '',
    fullScreenChangeF11EventName: 'fullScreenChangeF11Event',
    prefix: '',
    setupFullScreenButtons: function () { }
  };

  // check for native support
  if (typeof document.cancelFullScreen != 'undefined') {
    fullScreenAPI.supportsFullScreen = true;
  }
  else {
    // check for fullscreen support by vendor prefix
    var browserPrefixes = 'webkit moz ms o'.split(' ');

    for (var i = 0, il = browserPrefixes.length; i < il; i++) {
      fullScreenAPI.prefix = browserPrefixes[i];

      if (typeof document[fullScreenAPI.prefix + 'CancelFullScreen'] != 'undefined') {
        fullScreenAPI.supportsFullScreen = true;

        break;
      }
    }
  }

  // - - -
  // setup methods (independent of if the browser supports fullscreenAPI or not)
  // - - -

  var isFullScreen_Deprecated = function () {
    var isFullScreen = false;

    if (window.outerWidth && window.outerHeight) {
      isFullScreen = (screen.width == window.outerWidth && screen.height == window.outerHeight);
    }
    else if (document.documentElement.clientWidth && document.documentElement.clientHeight) {
      isFullScreen = (screen.width <= document.documentElement.clientWidth) &&
        (screen.height < (document.documentElement.clientHeight + 50)); // ie8
    }

    // window.fullScreen: works with firefox - for when browser is
    // in fullscreen and debug window is active and docked
    return isFullScreen || window.fullScreen;
  }

  fullScreenAPI.isFullScreen = function () {
    var fullscreenMode = document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen;

    if (!fullscreenMode) {
      // check if fullscreen is active because of F11 key
      fullscreenMode = isFullScreen_Deprecated();
    }

    return fullscreenMode;
  }

  fullScreenAPI.isFullScreenF11 = function () {
    var fullscreenMode = document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen;

    if (fullscreenMode) {
      // fullscreen mode but not because user pressed F11
      return false;
    }

    return isFullScreen_Deprecated();
  }


  // create F11 key custom event
  var fullScreenChangeF11Event;

  if (document.createEvent) {
    fullScreenChangeF11Event = document.createEvent('Event');
    fullScreenChangeF11Event.initEvent(fullScreenAPI.fullScreenChangeF11EventName, true, true);
  }
  else if (document.createEventObject) { //ie8
    fullScreenChangeF11Event = document.createEventObject();
  }

  document.onkeyup = (function (e) {
    var keyCode = e != null ? e.which : window.event.keyCode;
    if (keyCode == 122) {
      // F11 key pressed
      if (document.dispatchEvent) { document.dispatchEvent(fullScreenChangeF11Event); }
      else if (document.fireEvent) { // ie<9
        // fire the propertychange event
        document.documentElement[fullScreenAPI.fullScreenChangeF11EventName]++;
      }
    }
  });

  // - - -
  // setup methods
  // - - -
  if (fullScreenAPI.supportsFullScreen) {

    fullScreenAPI.fullScreenChangeEventName = fullScreenAPI.prefix + 'fullscreenchange';

    fullScreenAPI.requestFullScreen = function (el) {
      return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
    }

    fullScreenAPI.cancelFullScreen = function () {
      return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
    }
  }


  /*
  Integrate fullcreen and exit_fullscreen buttons
  -------------
  Notes:
  .IE does not support native fullscreen API
  .F11 key independent of native fullscreen API logic
  .Tested with Firefox 16.0.2; Safari 5.1.7; IE9.0; IE8; Chrome 22.0;
  */
  fullScreenAPI.setupFullScreenButtons = function () {

    // User could have refreshed the browser while in fullscreen F11 mode.
    var fullscreenModeF11 = fullScreenAPI.isFullScreenF11();

    SetupFullscreenButtons(fullscreenModeF11);


    var viewFullScreen = document.getElementById("fullscreen"),
      cancelFullScreen = document.getElementById("exit_fullscreen"),
      docElm = document.documentElement;

    if (fullScreenAPI.supportsFullScreen) {
      if (viewFullScreen) {
        viewFullScreen.addEventListener('click', function () {
          fullScreenAPI.requestFullScreen(docElm);
        }, false);
      }

      if (cancelFullScreen) {
        cancelFullScreen.addEventListener("click", function () {
          fullScreenAPI.cancelFullScreen();
        }, false);
      }

      document.addEventListener(fullScreenAPI.fullScreenChangeEventName, function () {
        SetupFullscreenButtons();
      }, false);
    }
    else {
      var changeMsg = function (elem, msg) {
        var child;
        if (elem.firstElementChild) { child = elem.firstElementChild; }
        else { child = elem.firstChild; }  // ie<9
        child.innerHTML = msg;
      };
      if (viewFullScreen) changeMsg(viewFullScreen, 'Press F11 to go fullscreen');
      if (cancelFullScreen) changeMsg(cancelFullScreen, 'Press F11 to exit fullscreen');
    }


    var changeF11Event = function () { SetupFullscreenButtons(true); };

    if (document.addEventListener) { document.addEventListener(fullScreenAPI.fullScreenChangeF11EventName, changeF11Event, false); }
    else if (document.attachEvent) { // ie<9
      docElm[fullScreenAPI.fullScreenChangeF11EventName] = 0; // an expando property
      docElm.attachEvent("onpropertychange", function (event) {
        if (event.propertyName == fullScreenAPI.fullScreenChangeF11EventName) {
          changeF11Event();
        }
      });
    }


    function SetupFullscreenButtons(f11pressed) {
      var viewFullScreen = document.getElementById("fullscreen"),
        cancelFullScreen = document.getElementById("exit_fullscreen");

      if (!(viewFullScreen && cancelFullScreen)) return;
      if (isMobile()) {
        viewFullScreen.style.display = 'none';
        cancelFullScreen.style.display = 'none';
        return;
      }

      var fullscreenMode = window.fullScreenAPI.isFullScreen(),
        isMSIE = /MSIE (\d+\.\d+);/.test(navigator.userAgent);

      // In IE the only way to go fullscreen is pressing F11
      if (f11pressed && !isMSIE) {
        var changeMsg = function (elem, msg1, msg2) {
          var child;
          if (elem.firstElementChild) { child = elem.firstElementChild; }
          else { child = elem.firstChild; }
          child.innerHTML = fullscreenMode ? msg1 : msg2;
        };

        changeMsg(viewFullScreen, 'press F11 to go fullscreen', 'fullscreen');
        changeMsg(cancelFullScreen, 'press F11 to exit fullscreen', 'exit fullscreen');
      }

      viewFullScreen.style.display = fullscreenMode ? 'none' : 'block';
      cancelFullScreen.style.display = fullscreenMode ? 'block' : 'none';
    }
  }

  // export api
  window.fullScreenAPI = fullScreenAPI;
}

function Project(name, link, photosRootSrc) {
  this.name = name;
  this.link = link;
  this.photosRootSrc = photosRootSrc;
  this.photos = [];
};

function Photo(project, name, mainPage, extension) {
  this.project = project;
  this.name = name;
  this.extension = extension || '.jpg';
  this.mainPage = mainPage || false;
};