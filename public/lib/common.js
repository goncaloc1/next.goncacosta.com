function Page(name, changePageTriggerElems) {
  this.name = name;
  this.changePageTriggerElems = changePageTriggerElems || [];
};

Page.prototype = {

  constructor: Page,
  imagesRootPath: 'images/',
  setup: function () { }
};

function HomePage() {
  Page.call(this, 'home', ['reminiscencia', 'alba', 'when', 'paperbag', 'oulu', 'sopra', 'fado']);
};

(function (obj) {

  var _base = Page.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

  obj.prototype.setup = function () {

    function randomFromInterval(from, to) {
      return Math.floor(Math.random() * (to - from + 1) + from);
    };

    function pickOne(list) {
      var idx = randomFromInterval(0, list.length - 1);
      return { 'obj': list[idx], 'idx': idx };
    };

    function loadRandomPhoto() {

      var pageInfo, mainImage, img = new Image(),
        pages = [ReminiscenciaPage, AlbaPage, WhenPage, PaperbagPage, OuluPage, SopraPage, FadoPage];

      while (mainImage === undefined) {
        var pagesInfo = [], mainPageImages = [],
          res, mainPageImagesAux, lastIndex = -1;

        // get all mainpage images into an array and save respective pageInfo
        for (var i = 0; i < pages.length; ++i) {
          pagesInfo.push(pages[i].prototype.getInfo());

          mainPageImagesAux = pagesInfo[i].imagesInfo.filter(
            function (element, index, array) { return element.mainpage; }
          );

          mainPageImages = mainPageImages.concat(mainPageImagesAux);

          lastIndex += mainPageImagesAux.length;
          pagesInfo[i].lastIndex = lastIndex;
        }

        // pick one random image and get the respective pageInfo
        if (mainPageImages.length != 0) {
          res = pickOne(mainPageImages);

          for (var j = 0; j < pagesInfo.length; ++j) {
            if (pagesInfo[j].lastIndex >= res.idx) {
              pageInfo = pagesInfo[j];
              mainImage = res.obj;
              break;
            }
          }
        }
        else return;
      }

      mainImage.src = pageInfo.imagesRootPath + pageInfo.relativePath +
        mainImage.name + pageInfo.imagesExtension;

      img.onload = function () {
        var wrapper = document.getElementById("main_img_wrapper"),
          mainPhoto = document.getElementById("main_img"),
          photoLink = document.getElementById("img_project_lnk"),
          photoDesc = document.getElementById("main_img_project");

        if (wrapper) {
          wrapper.style.visibility = 'visible';
          wrapper.style.opacity = '1';
          mainPhoto.src = mainImage.src;
          photoLink.href = pageInfo.relativePath;
          photoDesc.innerHTML = pageInfo.title;
        }
      };
      img.onerror = function () {
        if (typeof nTry === 'undefined') { nTry = 1; }
        // Maximum tentatives: 3
        if (++nTry <= 3) {
          // try again with a different image
          loadRandomPhoto();
        }
      };

      //preload image
      img.src = mainImage.src;
    };

    function setupMenu() {
      var goncalocosta = document.getElementById("goncalocosta"),
        email = document.getElementById("email"),
        gallery = document.getElementById("gallery"),
        archive = document.getElementById("archive"),
        reminiscencia = document.getElementById("reminiscencia"),
        alba = document.getElementById("alba"),
        when = document.getElementById("when"),
        sopra = document.getElementById("sopra"),
        paperbag = document.getElementById("paperbag"),
        oulu = document.getElementById("oulu"),
        fado = document.getElementById("fado");


      var mainColors = [
        'mainColor1', 'mainColor2', 'mainColor3', 'mainColor4', 'mainColor5', 'mainColor6', 'mainColor7',
        'mainColor8', 'mainColor9'];

      var secondaryColors = [
        'secondaryColor1', 'secondaryColor2', 'secondaryColor3', 'secondaryColor4', 'secondaryColor5',
        'secondaryColor11', 'secondaryColor12', 'secondaryColor13', 'secondaryColor14'];

      var maxIdxMC = mainColors.length - 1,
        maxIdxSC = secondaryColors.length - 1;

      goncalocosta.className = secondaryColors[randomFromInterval(maxIdxSC - 3, maxIdxSC)];
      email.className = secondaryColors[randomFromInterval(maxIdxSC - 3, maxIdxSC)];
      gallery.className = archive.className = secondaryColors[randomFromInterval(maxIdxSC - 3, maxIdxSC)];

      var elems = [reminiscencia, alba, when, paperbag],
        mainColorElemIdx = randomFromInterval(0, elems.length - 1);

      for (var i = 0; i < elems.length; i++) {
        if (i == mainColorElemIdx) elems[i].className = mainColors[randomFromInterval(0, maxIdxMC)];
        else elems[i].className = secondaryColors[randomFromInterval(0, maxIdxSC - 4)];
      }

      sopra.className = secondaryColors[randomFromInterval(0, maxIdxSC - 4)];
      oulu.className = secondaryColors[randomFromInterval(0, maxIdxSC - 4)];
      fado.className = secondaryColors[randomFromInterval(0, maxIdxSC - 4)];
    };

    //---------//

    _base.setup.call(this);

    loadRandomPhoto();
    setupMenu();
  };

}(HomePage));


function ProjectPage(name, changePageTriggerElems) {
  Page.call(this, name, changePageTriggerElems || ['back']);
};

(function (obj) {

  var _base = Page.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

  obj.prototype.getInfo = function () { };

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

  obj.prototype.getInfo = function () {
    return {
      title: 'reminiscencia',
      imagesRootPath: this.imagesRootPath, relativePath: 'reminiscencia/', imagesExtension: '.jpg', imagesInfo:
        [{ name: 'a', mainpage: true }, { name: 'b', mainpage: true }, { name: 'c', mainpage: true },
        { name: 'd', mainpage: true }, { name: 'e', mainpage: true }, { name: 'f', mainpage: false },
        { name: 'g', mainpage: false }, { name: 'h', mainpage: false }, { name: 'i', mainpage: false },
        { name: 'j', mainpage: false }, { name: 'k', mainpage: true }, { name: 'l', mainpage: true },
        { name: 'm', mainpage: true }, { name: 'n', mainpage: false }, { name: 'o', mainpage: true },
        { name: 'p', mainpage: true }, { name: 'q', mainpage: true }, { name: 'r', mainpage: true },
        { name: 's', mainpage: true }, { name: 't', mainpage: true }, { name: 'u', mainpage: true }]
    };
  };

  obj.prototype.setup = function () {
    function setupFullScreen() {
      initFullScreenAPI();
      fullScreenAPI.setupFullScreenButtons();
    };

    //-------------------------//

    Page.prototype.setup.apply(this);

    $('.my-cycle-slideshow').cycle();

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

  obj.prototype.getInfo = function () {
    return {
      title: 'alba', imagesRootPath: this.imagesRootPath, relativePath: 'alba/', imagesExtension: '.jpg', imagesInfo:
        [{ name: 'a', mainpage: true }, { name: 'b', mainpage: true }, { name: 'c', mainpage: false },
        { name: 'd', mainpage: true }, { name: 'e', mainpage: true }, { name: 'f', mainpage: false },
        { name: 'g', mainpage: false }, { name: 'h', mainpage: true }, { name: 'i', mainpage: false },
        { name: 'j', mainpage: false }, { name: 'k', mainpage: true }, { name: 'l', mainpage: true },
        { name: 'm', mainpage: true }, { name: 'n', mainpage: true }, { name: 'o', mainpage: true },
        { name: 'p', mainpage: true }, { name: 'q', mainpage: true }, { name: 'r', mainpage: true },
        { name: 's', mainpage: false }, { name: 't', mainpage: false }, { name: 'u', mainpage: false },
        { name: 'v', mainpage: true }, { name: 'w', mainpage: true }, { name: 'x', mainpage: false },
        { name: 'y', mainpage: false }]
    };
  };

}(AlbaPage));


function WhenPage() {
  ProjectPage.call(this, 'when');
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

  obj.prototype.getInfo = function () {
    return {
      title: 'when was the last time someone wrote you a love letter?',
      imagesRootPath: this.imagesRootPath, relativePath: 'when/', imagesExtension: '.jpg', imagesInfo:
        [{ name: 'a', mainpage: true }, { name: 'b', mainpage: true }, { name: 'c', mainpage: true },
        { name: 'd', mainpage: true }, { name: 'e', mainpage: true }, { name: 'f', mainpage: true },
        { name: 'g', mainpage: false }, { name: 'g1', mainpage: false }, { name: 'g2', mainpage: false },
        { name: 'h', mainpage: false }, { name: 'i', mainpage: true },
        { name: 'j', mainpage: false }, { name: 'k', mainpage: true }, { name: 'l', mainpage: true },
        { name: 'm', mainpage: false }, { name: 'n', mainpage: true }, { name: 'o', mainpage: true },
        { name: 'p', mainpage: false }, { name: 'q', mainpage: false }, { name: 'z', mainpage: true }]
    };
  };

  obj.prototype.setup = function () {
    function setupLayout() {
      // center first image horizontally
      var wrapper = document.getElementById("first_img_wrapper"),
        firstCell = document.getElementById("firstCell"),
        secondCell = document.getElementById("secondCell");

      if (wrapper && firstCell && secondCell) {
        wrapper.style.width = document.body.clientWidth - (2 * (firstCell.clientWidth + secondCell.clientWidth)) + 'px';
      }

      // calculate padding for handwriting image: zoom description logic related
      var viewport = document.getElementById("viewport"), padding;

      if (viewport) {
        padding = Math.round(1.22 * (document.body.clientWidth - viewport.clientWidth));
        viewport.style.marginLeft = padding * 0.4 + 'px';
        viewport.style.marginRight = padding * 0.7 + 'px';
      }

      var viewportCell = document.getElementById("viewportCell");
      viewportCell.children[0].style.visibility = 'visible';
    }

    if (typeof zoomInActive === "undefined") { zoomInActive = false; }

    // onscroll callback function
    function zoomDescription() {

      var inViewPort = $("#viewportCell > img:in-viewport").length == 1;

      if (inViewPort) {

        var inViewPortLeft = $("#photo_z:in-viewport").length == 1,
          inViewPortRight = $("#photo_a:in-viewport").length == 1;

        if (!zoomInActive && !(inViewPortLeft || inViewPortRight)) {
          setTimeout(function () {  	// zoom in
            $("#viewportCell>img:in-viewport").animate({ height: '500', width: '672' }, 1000);
            $('#viewportCell').children('#zoomView').delay(850).fadeIn(250);
            zoomInActive = true;
          }, 300); return;
        }
      }

      if (zoomInActive) {

        var inViewPortLeft = $("#photo_z:in-viewport").length == 1,
          inViewPortRight = $("#photo_a:in-viewport").length == 1;

        if (!inViewPort || inViewPortLeft || inViewPortRight) {	// zoom out
          $('#viewportCell').children('#zoomView').fadeOut(250);
          $('#viewportCell>img').animate({ height: '400', width: '537' }, 1000);
          zoomInActive = false;
        }
      }
    }

    //----------//

    Page.prototype.setup.call(this);
    setupLayout();
    _base.setup.call(this, zoomDescription);
  };

}(WhenPage));


function PaperbagPage() {
  ProjectPage.call(this, 'paperbag');
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

  obj.prototype.getInfo = function () {
    return {
      title: "it's a paper bag to scream, it's a bag of affections",
      imagesRootPath: this.imagesRootPath, relativePath: 'paperbag/', imagesExtension: '.jpg', imagesInfo:
        [{ name: '1', mainpage: true }, { name: '5', mainpage: true }, { name: '7', mainpage: true },
        { name: 'f', mainpage: false }, { name: 'g', mainpage: false }, { name: 'h', mainpage: false },
        { name: '6', mainpage: true }, { name: 'e', mainpage: false }, { name: 'a', mainpage: false },
        { name: 'i', mainpage: true }]
    };
  };

}(PaperbagPage));


function OuluPage() {
  ProjectPage.call(this, 'oulu', ['back', 'read_book']);
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

  obj.prototype.getInfo = function () {
    return {
      title: 'oulu', imagesRootPath: this.imagesRootPath, relativePath: 'oulu/', imagesExtension: '.jpg', imagesInfo:
        [{ name: '4', mainpage: false }, { name: '20', mainpage: false }, { name: '30', mainpage: false },
        { name: '31', mainpage: false }, { name: 'q', mainpage: true }, { name: 'g', mainpage: false },
        { name: '18', mainpage: false }, { name: '99', mainpage: true }, { name: 'j', mainpage: false },
        { name: '98', mainpage: false }, { name: '28', mainpage: false },
        { name: 'f', mainpage: false }, { name: 'i', mainpage: false }, { name: 'k', mainpage: false }]
    };
  };

}(OuluPage));


function SopraPage() {
  ProjectPage.call(this, 'sopra');
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

  obj.prototype.getInfo = function () {
    return {
      title: 'sopra', imagesRootPath: this.imagesRootPath, relativePath: 'sopra/', imagesExtension: '.jpg', imagesInfo:
        [{ name: '7', mainpage: false }, { name: '6', mainpage: false }, { name: '26', mainpage: false },
        { name: '2', mainpage: false }, { name: '4', mainpage: false }, { name: '15', mainpage: false },
        { name: '10 (1)', mainpage: false }, { name: 'prove0004', mainpage: false }, { name: '8', mainpage: false },
        { name: '10', mainpage: false }, { name: '14', mainpage: false }, { name: '11', mainpage: false },
        { name: '16', mainpage: false }, { name: '8 (1)', mainpage: false }, { name: '5', mainpage: false },
        { name: '35', mainpage: false }, { name: '34', mainpage: false }, { name: 'prov0005', mainpage: false },
        { name: '20', mainpage: false }, { name: 'prove0005', mainpage: false }, { name: '30', mainpage: false },
        { name: '6 (1)', mainpage: false }, { name: '6 (2)', mainpage: false }, { name: '7 (1)', mainpage: false },
        { name: '31', mainpage: false }, { name: '33', mainpage: false }, { name: 'provenc0006', mainpage: false }]
    };
  };

}(SopraPage));


function FadoPage() {
  ProjectPage.call(this, 'fado');
};

(function (obj) {

  var _base = ProjectPage.prototype;
  obj.prototype = Object.create(_base);
  obj.prototype.constructor = obj;

  obj.prototype.getInfo = function () {
    return {
      title: 'fado', imagesRootPath: this.imagesRootPath, relativePath: 'fado/', imagesExtension: '.jpg', imagesInfo:
        [{ name: 'proven0004', mainpage: true }, { name: 'pro0018', mainpage: true }, { name: 'prov0002', mainpage: false },
        { name: 'prov0012', mainpage: true }, { name: '21', mainpage: false }, { name: '9', mainpage: false },
        { name: '7', mainpage: false }, { name: '35(2)', mainpage: true }, { name: '16', mainpage: false },
        { name: '2', mainpage: false }, { name: 'provence0019', mainpage: false }, { name: '33', mainpage: false },
        { name: '10', mainpage: false }]
    };
  };

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