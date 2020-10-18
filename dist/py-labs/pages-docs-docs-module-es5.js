(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-docs-docs-module"], {
    /***/
    4:
    /*!**********************!*\
      !*** zlib (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    5:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    6:
    /*!**********************!*\
      !*** http (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    7:
    /*!***********************!*\
      !*** https (ignored) ***!
      \***********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    8:
    /*!*********************!*\
      !*** url (ignored) ***!
      \*********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "Bsbq":
    /*!**********************************************!*\
      !*** ./src/app/pages/docs/docs.component.ts ***!
      \**********************************************/

    /*! exports provided: DocsComponent */

    /***/
    function Bsbq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocsComponent", function () {
        return DocsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shell_sidebar_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shell/sidebar-links */
      "VbHM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-pdf-viewer */
      "IkSl");

      function DocsComponent_pdf_viewer_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pdf-viewer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function DocsComponent_pdf_viewer_0_Template_pdf_viewer_error_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.onError();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r0.src))("render-text", true)("autoresize", true)("fit-to-page", true);
        }
      }

      var preffix = "assets/docs/";

      var DocsComponent = /*#__PURE__*/function () {
        function DocsComponent(route, router) {
          _classCallCheck(this, DocsComponent);

          this.route = route;
          this.router = router;
          this.str = "assets/docs/getting-started.pdf";
        }

        _createClass(DocsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.src = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (paramMap) {
              return preffix.concat(paramMap.get("name"));
            }));
          }
        }, {
          key: "onError",
          value: function onError() {
            this.router.navigate([src_app_shell_sidebar_links__WEBPACK_IMPORTED_MODULE_2__["SIDEBAR_LINKS"][0].value]);
          }
        }]);

        return DocsComponent;
      }();

      DocsComponent.ɵfac = function DocsComponent_Factory(t) {
        return new (t || DocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      DocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocsComponent,
        selectors: [["app-docs"]],
        decls: 2,
        vars: 3,
        consts: [["style", "display: block;", 3, "src", "render-text", "autoresize", "fit-to-page", "error", 4, "ngIf"], [2, "display", "block", 3, "src", "render-text", "autoresize", "fit-to-page", "error"]],
        template: function DocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DocsComponent_pdf_viewer_0_Template, 2, 6, "pdf-viewer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.src));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__["PdfViewerComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["app-getting-started[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jcy9kb2NzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3MvZG9jcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0KGFwcC1nZXR0aW5nLXN0YXJ0ZWQpIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-docs",
            templateUrl: "./docs.component.html",
            styleUrls: ["./docs.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IkSl":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js ***!
      \*****************************************************************************/

    /*! exports provided: PdfViewerComponent, PdfViewerModule, RenderTextMode */

    /***/
    function IkSl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfViewerComponent", function () {
        return PdfViewerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PdfViewerModule", function () {
        return PdfViewerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderTextMode", function () {
        return RenderTextMode;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["pdfViewerContainer"];

      function _createEventBus(pdfJsViewer) {
        var globalEventBus = new pdfJsViewer.EventBus(true);
        attachDOMEventsToEventBus(globalEventBus);
        return globalEventBus;
      }

      function attachDOMEventsToEventBus(eventBus) {
        eventBus.on('documentload', function () {
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('documentload', true, true, {});
          window.dispatchEvent(event);
        });
        eventBus.on('pagerendered', function (evt) {
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('pagerendered', true, true, {
            pageNumber: evt.pageNumber,
            cssTransform: evt.cssTransform
          });
          evt.source.div.dispatchEvent(event);
        });
        eventBus.on('textlayerrendered', function (evt) {
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('textlayerrendered', true, true, {
            pageNumber: evt.pageNumber
          });
          evt.source.textLayerDiv.dispatchEvent(event);
        });
        eventBus.on('pagechanging', function (evt) {
          var event = document.createEvent('UIEvents');
          event.initEvent('pagechanging', true, true);
          event['pageNumber'] = evt.pageNumber;
          evt.source.container.dispatchEvent(event);
        });
        eventBus.on('pagesinit', function (evt) {
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('pagesinit', true, true, null);
          evt.source.container.dispatchEvent(event);
        });
        eventBus.on('pagesloaded', function (evt) {
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('pagesloaded', true, true, {
            pagesCount: evt.pagesCount
          });
          evt.source.container.dispatchEvent(event);
        });
        eventBus.on('scalechange', function (evt) {
          var event = document.createEvent('UIEvents');
          event.initEvent('scalechange', true, true);
          event['scale'] = evt.scale;
          event['presetValue'] = evt.presetValue;
          evt.source.container.dispatchEvent(event);
        });
        eventBus.on('updateviewarea', function (evt) {
          var event = document.createEvent('UIEvents');
          event.initEvent('updateviewarea', true, true);
          event['location'] = evt.location;
          evt.source.container.dispatchEvent(event);
        });
        eventBus.on('find', function (evt) {
          if (evt.source === window) {
            return; // event comes from FirefoxCom, no need to replicate
          }

          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('find' + evt.type, true, true, {
            query: evt.query,
            phraseSearch: evt.phraseSearch,
            caseSensitive: evt.caseSensitive,
            highlightAll: evt.highlightAll,
            findPrevious: evt.findPrevious
          });
          window.dispatchEvent(event);
        });
        eventBus.on('attachmentsloaded', function (evt) {
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('attachmentsloaded', true, true, {
            attachmentsCount: evt.attachmentsCount
          });
          evt.source.container.dispatchEvent(event);
        });
        eventBus.on('sidebarviewchanged', function (evt) {
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('sidebarviewchanged', true, true, {
            view: evt.view
          });
          evt.source.outerContainer.dispatchEvent(event);
        });
        eventBus.on('pagemode', function (evt) {
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('pagemode', true, true, {
            mode: evt.mode
          });
          evt.source.pdfViewer.container.dispatchEvent(event);
        });
        eventBus.on('namedaction', function (evt) {
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('namedaction', true, true, {
            action: evt.action
          });
          evt.source.pdfViewer.container.dispatchEvent(event);
        });
        eventBus.on('presentationmodechanged', function (evt) {
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('presentationmodechanged', true, true, {
            active: evt.active,
            switchInProgress: evt.switchInProgress
          });
          window.dispatchEvent(event);
        });
        eventBus.on('outlineloaded', function (evt) {
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent('outlineloaded', true, true, {
            outlineCount: evt.outlineCount
          });
          evt.source.container.dispatchEvent(event);
        });
      }

      var createEventBus = _createEventBus;
      var PdfViewerComponent_1;
      var PDFJS;
      var PDFJSViewer;

      function isSSR() {
        return typeof window === 'undefined';
      }

      if (!isSSR()) {
        PDFJS = __webpack_require__(
        /*! pdfjs-dist/build/pdf */
        "lRFz");
        PDFJSViewer = __webpack_require__(
        /*! pdfjs-dist/web/pdf_viewer */
        "louq");
        PDFJS.verbosity = PDFJS.VerbosityLevel.ERRORS;
      }

      var RenderTextMode;

      (function (RenderTextMode) {
        RenderTextMode[RenderTextMode["DISABLED"] = 0] = "DISABLED";
        RenderTextMode[RenderTextMode["ENABLED"] = 1] = "ENABLED";
        RenderTextMode[RenderTextMode["ENHANCED"] = 2] = "ENHANCED";
      })(RenderTextMode || (RenderTextMode = {}));

      var PdfViewerComponent = PdfViewerComponent_1 = /*#__PURE__*/function () {
        function PdfViewerComponent(element) {
          _classCallCheck(this, PdfViewerComponent);

          this.element = element;
          this.isVisible = false;
          this._cMapsUrl = typeof PDFJS !== 'undefined' ? "https://unpkg.com/pdfjs-dist@".concat(PDFJS.version, "/cmaps/") : null;
          this._renderText = true;
          this._renderTextMode = RenderTextMode.ENABLED;
          this._stickToPage = false;
          this._originalSize = true;
          this._page = 1;
          this._zoom = 1;
          this._rotation = 0;
          this._showAll = true;
          this._canAutoResize = true;
          this._fitToPage = false;
          this._externalLinkTarget = 'blank';
          this._showBorders = false;
          this.isInitialized = false;
          this.afterLoadComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.pageRendered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.textLayerRendered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);

          if (isSSR()) {
            return;
          }

          var pdfWorkerSrc;

          if (window.hasOwnProperty('pdfWorkerSrc') && typeof window.pdfWorkerSrc === 'string' && window.pdfWorkerSrc) {
            pdfWorkerSrc = window.pdfWorkerSrc;
          } else {
            pdfWorkerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(PDFJS.version, "/pdf.worker.min.js");
          }

          PDFJS.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;
        }

        _createClass(PdfViewerComponent, [{
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this = this;

            if (this.isInitialized) {
              return;
            }

            var offset = this.pdfViewerContainer.nativeElement.offsetParent;

            if (this.isVisible === true && offset == null) {
              this.isVisible = false;
              return;
            }

            if (this.isVisible === false && offset != null) {
              this.isVisible = true;
              setTimeout(function () {
                _this.ngOnInit();

                _this.ngOnChanges({
                  src: _this.src
                });
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!isSSR() && this.isVisible) {
              this.isInitialized = true;
              this.setupMultiPageViewer();
              this.setupSinglePageViewer();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._pdf) {
              this._pdf.destroy();
            }
          }
        }, {
          key: "onPageResize",
          value: function onPageResize() {
            var _this2 = this;

            if (!this._canAutoResize || !this._pdf) {
              return;
            }

            if (this.resizeTimeout) {
              clearTimeout(this.resizeTimeout);
            }

            this.resizeTimeout = setTimeout(function () {
              _this2.updateSize();
            }, 100);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (isSSR() || !this.isVisible) {
              return;
            }

            if ('src' in changes) {
              this.loadPDF();
            } else if (this._pdf) {
              if ('renderText' in changes) {
                this.getCurrentViewer().textLayerMode = this._renderText ? this._renderTextMode : RenderTextMode.DISABLED;
                this.resetPdfDocument();
              } else if ('showAll' in changes) {
                this.resetPdfDocument();
              }

              if ('page' in changes) {
                if (changes['page'].currentValue === this._latestScrolledPage) {
                  return;
                } // New form of page changing: The viewer will now jump to the specified page when it is changed.
                // This behavior is introducedby using the PDFSinglePageViewer


                this.getCurrentViewer().scrollPageIntoView({
                  pageNumber: this._page
                });
              }

              this.update();
            }
          }
        }, {
          key: "updateSize",
          value: function updateSize() {
            var _this3 = this;

            var currentViewer = this.getCurrentViewer();

            this._pdf.getPage(currentViewer.currentPageNumber).then(function (page) {
              var rotation = _this3._rotation || page.rotate;
              var viewportWidth = page.getViewport({
                scale: _this3._zoom,
                rotation: rotation
              }).width * PdfViewerComponent_1.CSS_UNITS;
              var scale = _this3._zoom;
              var stickToPage = true; // Scale the document when it shouldn't be in original size or doesn't fit into the viewport

              if (!_this3._originalSize || _this3._fitToPage && viewportWidth > _this3.pdfViewerContainer.nativeElement.clientWidth) {
                scale = _this3.getScale(page.getViewport({
                  scale: 1,
                  rotation: rotation
                }).width);
                stickToPage = !_this3._stickToPage;
              }

              currentViewer._setScale(scale, stickToPage);
            });
          }
        }, {
          key: "clear",
          value: function clear() {
            if (this.loadingTask && !this.loadingTask.destroyed) {
              this.loadingTask.destroy();
            }

            if (this._pdf) {
              this._pdf.destroy();

              this._pdf = null;
              this.pdfMultiPageViewer.setDocument(null);
              this.pdfSinglePageViewer.setDocument(null);
              this.pdfMultiPageLinkService.setDocument(null, null);
              this.pdfSinglePageLinkService.setDocument(null, null);
              this.pdfMultiPageFindController.setDocument(null);
              this.pdfSinglePageFindController.setDocument(null);
            }
          }
        }, {
          key: "setupMultiPageViewer",
          value: function setupMultiPageViewer() {
            var _this4 = this;

            PDFJS.disableTextLayer = !this._renderText;
            PdfViewerComponent_1.setExternalLinkTarget(this._externalLinkTarget);
            var eventBus = createEventBus(PDFJSViewer);
            eventBus.on('pagerendered', function (e) {
              _this4.pageRendered.emit(e);
            });
            eventBus.on('pagechanging', function (e) {
              if (_this4.pageScrollTimeout) {
                clearTimeout(_this4.pageScrollTimeout);
              }

              _this4.pageScrollTimeout = setTimeout(function () {
                _this4._latestScrolledPage = e.pageNumber;

                _this4.pageChange.emit(e.pageNumber);
              }, 100);
            });
            eventBus.on('textlayerrendered', function (e) {
              _this4.textLayerRendered.emit(e);
            });
            this.pdfMultiPageLinkService = new PDFJSViewer.PDFLinkService({
              eventBus: eventBus
            });
            this.pdfMultiPageFindController = new PDFJSViewer.PDFFindController({
              linkService: this.pdfMultiPageLinkService,
              eventBus: eventBus
            });
            var pdfOptions = {
              eventBus: eventBus,
              container: this.element.nativeElement.querySelector('div'),
              removePageBorders: !this._showBorders,
              linkService: this.pdfMultiPageLinkService,
              textLayerMode: this._renderText ? this._renderTextMode : RenderTextMode.DISABLED,
              findController: this.pdfMultiPageFindController
            };
            this.pdfMultiPageViewer = new PDFJSViewer.PDFViewer(pdfOptions);
            this.pdfMultiPageLinkService.setViewer(this.pdfMultiPageViewer);
            this.pdfMultiPageFindController.setDocument(this._pdf);
          }
        }, {
          key: "setupSinglePageViewer",
          value: function setupSinglePageViewer() {
            var _this5 = this;

            PDFJS.disableTextLayer = !this._renderText;
            PdfViewerComponent_1.setExternalLinkTarget(this._externalLinkTarget);
            var eventBus = createEventBus(PDFJSViewer);
            eventBus.on('pagechanging', function (e) {
              if (e.pageNumber != _this5._page) {
                _this5.page = e.pageNumber;
              }
            });
            eventBus.on('pagerendered', function (e) {
              _this5.pageRendered.emit(e);
            });
            eventBus.on('textlayerrendered', function (e) {
              _this5.textLayerRendered.emit(e);
            });
            this.pdfSinglePageLinkService = new PDFJSViewer.PDFLinkService({
              eventBus: eventBus
            });
            this.pdfSinglePageFindController = new PDFJSViewer.PDFFindController({
              linkService: this.pdfSinglePageLinkService,
              eventBus: eventBus
            });
            var pdfOptions = {
              eventBus: eventBus,
              container: this.element.nativeElement.querySelector('div'),
              removePageBorders: !this._showBorders,
              linkService: this.pdfSinglePageLinkService,
              textLayerMode: this._renderText ? this._renderTextMode : RenderTextMode.DISABLED,
              findController: this.pdfSinglePageFindController
            };
            this.pdfSinglePageViewer = new PDFJSViewer.PDFSinglePageViewer(pdfOptions);
            this.pdfSinglePageLinkService.setViewer(this.pdfSinglePageViewer);
            this.pdfSinglePageFindController.setDocument(this._pdf);
            this.pdfSinglePageViewer._currentPageNumber = this._page;
          }
        }, {
          key: "getValidPageNumber",
          value: function getValidPageNumber(page) {
            if (page < 1) {
              return 1;
            }

            if (page > this._pdf.numPages) {
              return this._pdf.numPages;
            }

            return page;
          }
        }, {
          key: "getDocumentParams",
          value: function getDocumentParams() {
            var srcType = typeof this.src;

            if (!this._cMapsUrl) {
              return this.src;
            }

            var params = {
              cMapUrl: this._cMapsUrl,
              cMapPacked: true
            };

            if (srcType === 'string') {
              params.url = this.src;
            } else if (srcType === 'object') {
              if (this.src.byteLength !== undefined) {
                params.data = this.src;
              } else {
                Object.assign(params, this.src);
              }
            }

            return params;
          }
        }, {
          key: "loadPDF",
          value: function loadPDF() {
            var _this6 = this;

            if (!this.src) {
              return;
            }

            if (this.lastLoaded === this.src) {
              this.update();
              return;
            }

            this.clear();
            this.loadingTask = PDFJS.getDocument(this.getDocumentParams());

            this.loadingTask.onProgress = function (progressData) {
              _this6.onProgress.emit(progressData);
            };

            var src = this.src;
            this.loadingTask.promise.then(function (pdf) {
              _this6._pdf = pdf;
              _this6.lastLoaded = src;

              _this6.afterLoadComplete.emit(pdf);

              if (!_this6.pdfMultiPageViewer) {
                _this6.setupMultiPageViewer();

                _this6.setupSinglePageViewer();
              }

              _this6.resetPdfDocument();

              _this6.update();
            }, function (error) {
              _this6.onError.emit(error);
            });
          }
        }, {
          key: "update",
          value: function update() {
            this.page = this._page;
            this.render();
          }
        }, {
          key: "render",
          value: function render() {
            var _this7 = this;

            this._page = this.getValidPageNumber(this._page);
            var currentViewer = this.getCurrentViewer();

            if (this._rotation !== 0 || currentViewer.pagesRotation !== this._rotation) {
              setTimeout(function () {
                currentViewer.pagesRotation = _this7._rotation;
              });
            }

            if (this._stickToPage) {
              setTimeout(function () {
                currentViewer.currentPageNumber = _this7._page;
              });
            }

            this.updateSize();
          }
        }, {
          key: "getScale",
          value: function getScale(viewportWidth) {
            var pdfContainerWidth = this.pdfViewerContainer.nativeElement.clientWidth - (this._showBorders ? 2 * PdfViewerComponent_1.BORDER_WIDTH : 0);

            if (pdfContainerWidth === 0 || viewportWidth === 0) {
              return 1;
            }

            return this._zoom * (pdfContainerWidth / viewportWidth) / PdfViewerComponent_1.CSS_UNITS;
          }
        }, {
          key: "getCurrentViewer",
          value: function getCurrentViewer() {
            return this._showAll ? this.pdfMultiPageViewer : this.pdfSinglePageViewer;
          }
        }, {
          key: "resetPdfDocument",
          value: function resetPdfDocument() {
            this.pdfFindController.setDocument(this._pdf);

            if (this._showAll) {
              this.pdfSinglePageViewer.setDocument(null);
              this.pdfSinglePageLinkService.setDocument(null);
              this.pdfMultiPageViewer.setDocument(this._pdf);
              this.pdfMultiPageLinkService.setDocument(this._pdf, null);
            } else {
              this.pdfMultiPageViewer.setDocument(null);
              this.pdfMultiPageLinkService.setDocument(null);
              this.pdfSinglePageViewer.setDocument(this._pdf);
              this.pdfSinglePageLinkService.setDocument(this._pdf, null);
            }
          }
        }, {
          key: "cMapsUrl",
          set: function set(cMapsUrl) {
            this._cMapsUrl = cMapsUrl;
          }
        }, {
          key: "page",
          set: function set(_page) {
            _page = parseInt(_page, 10) || 1;
            var orginalPage = _page;

            if (this._pdf) {
              _page = this.getValidPageNumber(_page);
            }

            this._page = _page;

            if (orginalPage !== _page) {
              this.pageChange.emit(_page);
            }
          }
        }, {
          key: "renderText",
          set: function set(renderText) {
            this._renderText = renderText;
          }
        }, {
          key: "renderTextMode",
          set: function set(renderTextMode) {
            this._renderTextMode = renderTextMode;
          }
        }, {
          key: "originalSize",
          set: function set(originalSize) {
            this._originalSize = originalSize;
          }
        }, {
          key: "showAll",
          set: function set(value) {
            this._showAll = value;
          }
        }, {
          key: "stickToPage",
          set: function set(value) {
            this._stickToPage = value;
          }
        }, {
          key: "zoom",
          set: function set(value) {
            if (value <= 0) {
              return;
            }

            this._zoom = value;
          },
          get: function get() {
            return this._zoom;
          }
        }, {
          key: "rotation",
          set: function set(value) {
            if (!(typeof value === 'number' && value % 90 === 0)) {
              console.warn('Invalid pages rotation angle.');
              return;
            }

            this._rotation = value;
          }
        }, {
          key: "externalLinkTarget",
          set: function set(value) {
            this._externalLinkTarget = value;
          }
        }, {
          key: "autoresize",
          set: function set(value) {
            this._canAutoResize = Boolean(value);
          }
        }, {
          key: "fitToPage",
          set: function set(value) {
            this._fitToPage = Boolean(value);
          }
        }, {
          key: "showBorders",
          set: function set(value) {
            this._showBorders = Boolean(value);
          }
        }, {
          key: "pdfLinkService",
          get: function get() {
            return this._showAll ? this.pdfMultiPageLinkService : this.pdfSinglePageLinkService;
          }
        }, {
          key: "pdfViewer",
          get: function get() {
            return this.getCurrentViewer();
          }
        }, {
          key: "pdfFindController",
          get: function get() {
            return this._showAll ? this.pdfMultiPageFindController : this.pdfSinglePageFindController;
          }
        }], [{
          key: "getLinkTarget",
          value: function getLinkTarget(type) {
            switch (type) {
              case 'blank':
                return PDFJS.LinkTarget.BLANK;

              case 'none':
                return PDFJS.LinkTarget.NONE;

              case 'self':
                return PDFJS.LinkTarget.SELF;

              case 'parent':
                return PDFJS.LinkTarget.PARENT;

              case 'top':
                return PDFJS.LinkTarget.TOP;
            }

            return null;
          }
        }, {
          key: "setExternalLinkTarget",
          value: function setExternalLinkTarget(type) {
            var linkTarget = PdfViewerComponent_1.getLinkTarget(type);

            if (linkTarget !== null) {
              PDFJS.externalLinkTarget = linkTarget;
            }
          }
        }]);

        return PdfViewerComponent;
      }();

      PdfViewerComponent.ɵfac = function PdfViewerComponent_Factory(t) {
        return new (t || PdfViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      PdfViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PdfViewerComponent,
        selectors: [["pdf-viewer"]],
        viewQuery: function PdfViewerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pdfViewerContainer = _t.first);
          }
        },
        hostBindings: function PdfViewerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function PdfViewerComponent_resize_HostBindingHandler() {
              return ctx.onPageResize();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        inputs: {
          cMapsUrl: ["c-maps-url", "cMapsUrl"],
          page: "page",
          renderText: ["render-text", "renderText"],
          renderTextMode: ["render-text-mode", "renderTextMode"],
          originalSize: ["original-size", "originalSize"],
          showAll: ["show-all", "showAll"],
          stickToPage: ["stick-to-page", "stickToPage"],
          zoom: "zoom",
          rotation: "rotation",
          externalLinkTarget: ["external-link-target", "externalLinkTarget"],
          autoresize: "autoresize",
          fitToPage: ["fit-to-page", "fitToPage"],
          showBorders: ["show-borders", "showBorders"],
          src: "src"
        },
        outputs: {
          afterLoadComplete: "after-load-complete",
          pageRendered: "page-rendered",
          textLayerRendered: "text-layer-rendered",
          onError: "error",
          onProgress: "on-progress",
          pageChange: "pageChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 0,
        consts: [[1, "ng2-pdf-viewer-container"], ["pdfViewerContainer", ""], [1, "pdfViewer"]],
        template: function PdfViewerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: [".ng2-pdf-viewer-container[_ngcontent-%COMP%]{overflow-x:auto;position:relative;height:100%}[_nghost-%COMP%]     .textLayer{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1}[_nghost-%COMP%]     .textLayer>span{color:transparent;position:absolute;white-space:pre;cursor:text;-webkit-transform-origin:0 0;transform-origin:0 0}[_nghost-%COMP%]     .textLayer .highlight{margin:-1px;padding:1px;background-color:#b400aa;border-radius:4px}[_nghost-%COMP%]     .textLayer .highlight.begin{border-radius:4px 0 0 4px}[_nghost-%COMP%]     .textLayer .highlight.end{border-radius:0 4px 4px 0}[_nghost-%COMP%]     .textLayer .highlight.middle{border-radius:0}[_nghost-%COMP%]     .textLayer .highlight.selected{background-color:#006400}[_nghost-%COMP%]     .textLayer ::-moz-selection{background:#00f}[_nghost-%COMP%]     .textLayer ::-moz-selection, [_nghost-%COMP%]     .textLayer ::selection{background:#00f}[_nghost-%COMP%]     .textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]     .textLayer .endOfContent.active{top:0}[_nghost-%COMP%]     .annotationLayer section{position:absolute}[_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.pushButton>a, [_nghost-%COMP%]     .annotationLayer .linkAnnotation>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}[_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.pushButton>a:hover, [_nghost-%COMP%]     .annotationLayer .linkAnnotation>a:hover{opacity:.2;background:#ff0;box-shadow:0 2px 10px #ff0}[_nghost-%COMP%]     .annotationLayer .textAnnotation img{position:absolute;cursor:pointer}[_nghost-%COMP%]     .annotationLayer .textWidgetAnnotation input, [_nghost-%COMP%]     .annotationLayer .textWidgetAnnotation textarea{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}[_nghost-%COMP%]     .annotationLayer .choiceWidgetAnnotation select{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}[_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.checkBox input, [_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.radioButton input{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;vertical-align:top;width:100%}[_nghost-%COMP%]     .annotationLayer .choiceWidgetAnnotation select option{padding:0}[_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}[_nghost-%COMP%]     .annotationLayer .textWidgetAnnotation textarea{font:message-box;font-size:9px;resize:none}[_nghost-%COMP%]     .annotationLayer .textWidgetAnnotation input[disabled], [_nghost-%COMP%]     .annotationLayer .textWidgetAnnotation textarea[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}[_nghost-%COMP%]     .annotationLayer .choiceWidgetAnnotation select[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}[_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.checkBox input[disabled], [_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}[_nghost-%COMP%]     .annotationLayer .textWidgetAnnotation input:hover, [_nghost-%COMP%]     .annotationLayer .textWidgetAnnotation textarea:hover{border:1px solid #000}[_nghost-%COMP%]     .annotationLayer .choiceWidgetAnnotation select:hover{border:1px solid #000}[_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.checkBox input:hover, [_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.radioButton input:hover{border:1px solid #000}[_nghost-%COMP%]     .annotationLayer .textWidgetAnnotation input:focus, [_nghost-%COMP%]     .annotationLayer .textWidgetAnnotation textarea:focus{background:0 0;border:1px solid transparent}[_nghost-%COMP%]     .annotationLayer .choiceWidgetAnnotation select:focus{background:0 0;border:1px solid transparent}[_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after, [_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{background-color:#000;content:\"\";display:block;position:absolute;height:80%;left:45%;width:1px}[_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:#000;content:\"\";display:block;position:absolute;border-radius:50%;height:50%;left:30%;top:20%;width:50%}[_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}[_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}[_nghost-%COMP%]     .annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}[_nghost-%COMP%]     .annotationLayer .textWidgetAnnotation input.comb:focus{width:115%}[_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.checkBox input, [_nghost-%COMP%]     .annotationLayer .buttonWidgetAnnotation.radioButton input{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}[_nghost-%COMP%]     .annotationLayer .popupWrapper{position:absolute;width:20em}[_nghost-%COMP%]     .annotationLayer .popup{position:absolute;z-index:200;max-width:20em;background-color:#ff9;box-shadow:0 2px 5px #333;border-radius:2px;padding:.6em;margin-left:5px;cursor:pointer;font:message-box;word-wrap:break-word}[_nghost-%COMP%]     .annotationLayer .popup h1{font-size:1em;border-bottom:1px solid #000;margin:0;padding-bottom:.2em}[_nghost-%COMP%]     .annotationLayer .popup p{margin:0;padding-top:.2em}[_nghost-%COMP%]     .annotationLayer .circleAnnotation svg ellipse, [_nghost-%COMP%]     .annotationLayer .fileAttachmentAnnotation, [_nghost-%COMP%]     .annotationLayer .highlightAnnotation, [_nghost-%COMP%]     .annotationLayer .inkAnnotation svg polyline, [_nghost-%COMP%]     .annotationLayer .lineAnnotation svg line, [_nghost-%COMP%]     .annotationLayer .polygonAnnotation svg polygon, [_nghost-%COMP%]     .annotationLayer .polylineAnnotation svg polyline, [_nghost-%COMP%]     .annotationLayer .squareAnnotation svg rect, [_nghost-%COMP%]     .annotationLayer .squigglyAnnotation, [_nghost-%COMP%]     .annotationLayer .stampAnnotation, [_nghost-%COMP%]     .annotationLayer .strikeoutAnnotation, [_nghost-%COMP%]     .annotationLayer .underlineAnnotation{cursor:pointer}[_nghost-%COMP%]     .pdfViewer{padding-bottom:10px}[_nghost-%COMP%]     .pdfViewer .canvasWrapper{overflow:hidden}[_nghost-%COMP%]     .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px;position:relative;overflow:visible;border:9px solid rgba(0,0,0,.01);background-clip:content-box;-o-border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;-webkit-border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;background-color:#fff}[_nghost-%COMP%]     .pdfViewer.removePageBorders .page{margin:0 auto 10px;border:none}[_nghost-%COMP%]     .pdfViewer.removePageBorders{padding-bottom:0}[_nghost-%COMP%]     .pdfViewer.singlePageView{display:inline-block}[_nghost-%COMP%]     .pdfViewer.singlePageView .page{margin:0;border:none}[_nghost-%COMP%]     .pdfViewer.scrollHorizontal, [_nghost-%COMP%]     .pdfViewer.scrollWrapped{margin-left:3.5px;margin-right:3.5px;text-align:center}[_nghost-%COMP%]     .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}[_nghost-%COMP%]     .pdfViewer.scrollHorizontal, [_nghost-%COMP%]     .spread{white-space:nowrap}[_nghost-%COMP%]     .pdfViewer.removePageBorders, [_nghost-%COMP%]     .pdfViewer.scrollHorizontal .spread, [_nghost-%COMP%]     .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}[_nghost-%COMP%]     .spread .page{display:inline-block;vertical-align:middle;margin-left:-3.5px;margin-right:-3.5px}[_nghost-%COMP%]     .pdfViewer.scrollHorizontal .page, [_nghost-%COMP%]     .pdfViewer.scrollHorizontal .spread, [_nghost-%COMP%]     .pdfViewer.scrollWrapped .page, [_nghost-%COMP%]     .pdfViewer.scrollWrapped .spread{display:inline-block;vertical-align:middle}[_nghost-%COMP%]     .pdfViewer.scrollHorizontal .page, [_nghost-%COMP%]     .pdfViewer.scrollWrapped .page{margin-left:-3.5px;margin-right:-3.5px}[_nghost-%COMP%]     .pdfViewer.removePageBorders .spread .page, [_nghost-%COMP%]     .pdfViewer.removePageBorders.scrollHorizontal .page, [_nghost-%COMP%]     .pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}[_nghost-%COMP%]     .pdfViewer .page canvas{margin:0;display:block}[_nghost-%COMP%]     .pdfViewer .page canvas[hidden]{display:none}[_nghost-%COMP%]     .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(data:image/gif;base64,R0lGODlhGAAYAPQAAP///wAAAM7Ozvr6+uDg4LCwsOjo6I6OjsjIyJycnNjY2KioqMDAwPLy8nZ2doaGhri4uGhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJBwAAACwAAAAAGAAYAAAFriAgjiQAQWVaDgr5POSgkoTDjFE0NoQ8iw8HQZQTDQjDn4jhSABhAAOhoTqSDg7qSUQwxEaEwwFhXHhHgzOA1xshxAnfTzotGRaHglJqkJcaVEqCgyoCBQkJBQKDDXQGDYaIioyOgYSXA36XIgYMBWRzXZoKBQUMmil0lgalLSIClgBpO0g+s26nUWddXyoEDIsACq5SsTMMDIECwUdJPw0Mzsu0qHYkw72bBmozIQAh+QQJBwAAACwAAAAAGAAYAAAFsCAgjiTAMGVaDgR5HKQwqKNxIKPjjFCk0KNXC6ATKSI7oAhxWIhezwhENTCQEoeGCdWIPEgzESGxEIgGBWstEW4QCGGAIJEoxGmGt5ZkgCRQQHkGd2CESoeIIwoMBQUMP4cNeQQGDYuNj4iSb5WJnmeGng0CDGaBlIQEJziHk3sABidDAHBgagButSKvAAoyuHuUYHgCkAZqebw0AgLBQyyzNKO3byNuoSS8x8OfwIchACH5BAkHAAAALAAAAAAYABgAAAW4ICCOJIAgZVoOBJkkpDKoo5EI43GMjNPSokXCINKJCI4HcCRIQEQvqIOhGhBHhUTDhGo4diOZyFAoKEQDxra2mAEgjghOpCgz3LTBIxJ5kgwMBShACREHZ1V4Kg1rS44pBAgMDAg/Sw0GBAQGDZGTlY+YmpyPpSQDiqYiDQoCliqZBqkGAgKIS5kEjQ21VwCyp76dBHiNvz+MR74AqSOdVwbQuo+abppo10ssjdkAnc0rf8vgl8YqIQAh+QQJBwAAACwAAAAAGAAYAAAFrCAgjiQgCGVaDgZZFCQxqKNRKGOSjMjR0qLXTyciHA7AkaLACMIAiwOC1iAxCrMToHHYjWQiA4NBEA0Q1RpWxHg4cMXxNDk4OBxNUkPAQAEXDgllKgMzQA1pSYopBgonCj9JEA8REQ8QjY+RQJOVl4ugoYssBJuMpYYjDQSliwasiQOwNakALKqsqbWvIohFm7V6rQAGP6+JQLlFg7KDQLKJrLjBKbvAor3IKiEAIfkECQcAAAAsAAAAABgAGAAABbUgII4koChlmhokw5DEoI4NQ4xFMQoJO4uuhignMiQWvxGBIQC+AJBEUyUcIRiyE6CR0CllW4HABxBURTUw4nC4FcWo5CDBRpQaCoF7VjgsyCUDYDMNZ0mHdwYEBAaGMwwHDg4HDA2KjI4qkJKUiJ6faJkiA4qAKQkRB3E0i6YpAw8RERAjA4tnBoMApCMQDhFTuySKoSKMJAq6rD4GzASiJYtgi6PUcs9Kew0xh7rNJMqIhYchACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJEAQZZo2JIKQxqCOjWCMDDMqxT2LAgELkBMZCoXfyCBQiFwiRsGpku0EshNgUNAtrYPT0GQVNRBWwSKBMp98P24iISgNDAS4ipGA6JUpA2WAhDR4eWM/CAkHBwkIDYcGiTOLjY+FmZkNlCN3eUoLDmwlDW+AAwcODl5bYl8wCVYMDw5UWzBtnAANEQ8kBIM0oAAGPgcREIQnVloAChEOqARjzgAQEbczg8YkWJq8nSUhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJGAYZZoOpKKQqDoORDMKwkgwtiwSBBYAJ2owGL5RgxBziQQMgkwoMkhNqAEDARPSaiMDFdDIiRSFQowMXE8Z6RdpYHWnEAWGPVkajPmARVZMPUkCBQkJBQINgwaFPoeJi4GVlQ2Qc3VJBQcLV0ptfAMJBwdcIl+FYjALQgimoGNWIhAQZA4HXSpLMQ8PIgkOSHxAQhERPw7ASTSFyCMMDqBTJL8tf3y2fCEAIfkECQcAAAAsAAAAABgAGAAABa8gII4k0DRlmg6kYZCoOg5EDBDEaAi2jLO3nEkgkMEIL4BLpBAkVy3hCTAQKGAznM0AFNFGBAbj2cA9jQixcGZAGgECBu/9HnTp+FGjjezJFAwFBQwKe2Z+KoCChHmNjVMqA21nKQwJEJRlbnUFCQlFXlpeCWcGBUACCwlrdw8RKGImBwktdyMQEQciB7oACwcIeA4RVwAODiIGvHQKERAjxyMIB5QlVSTLYLZ0sW8hACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWPM5wNiV0UDUIBNkdoepTfMkA7thIECiyRtUAGq8fm2O4jIBgMBA1eAZ6Knx+gHaJR4QwdCMKBxEJRggFDGgQEREPjjAMBQUKIwIRDhBDC2QNDDEKoEkDoiMHDigICGkJBS2dDA6TAAnAEAkCdQ8ORQcHTAkLcQQODLPMIgIJaCWxJMIkPIoAt3EhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWHM5wNiV0UN3xdLiqr+mENcWpM9TIbrsBkEck8oC0DQqBQGGIz+t3eXtob0ZTPgNrIwQJDgtGAgwCWSIMDg4HiiUIDAxFAAoODwxDBWINCEGdSTQkCQcoegADBaQ6MggHjwAFBZUFCm0HB0kJCUy9bAYHCCPGIwqmRq0jySMGmj6yRiEAIfkECQcAAAAsAAAAABgAGAAABbIgII4k0DRlmg6kYZCsOg4EKhLE2BCxDOAxnIiW84l2L4BLZKipBopW8XRLDkeCiAMyMvQAA+uON4JEIo+vqukkKQ6RhLHplVGN+LyKcXA4Dgx5DWwGDXx+gIKENnqNdzIDaiMECwcFRgQCCowiCAcHCZIlCgICVgSfCEMMnA0CXaU2YSQFoQAKUQMMqjoyAglcAAyBAAIMRUYLCUkFlybDeAYJryLNk6xGNCTQXY0juHghACH5BAkHAAAALAAAAAAYABgAAAWzICCOJNA0ZVoOAmkY5KCSSgSNBDE2hDyLjohClBMNij8RJHIQvZwEVOpIekRQJyJs5AMoHA+GMbE1lnm9EcPhOHRnhpwUl3AsknHDm5RN+v8qCAkHBwkIfw1xBAYNgoSGiIqMgJQifZUjBhAJYj95ewIJCQV7KYpzBAkLLQADCHOtOpY5PgNlAAykAEUsQ1wzCgWdCIdeArczBQVbDJ0NAqyeBb64nQAGArBTt8R8mLuyPyEAOwAAAAAAAAAAAA==) center no-repeat}[_nghost-%COMP%]     .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}[_nghost-%COMP%]     .pdfPresentationMode .pdfViewer .page, [_nghost-%COMP%]     .pdfPresentationMode .pdfViewer .spread{display:block}[_nghost-%COMP%]     .pdfPresentationMode .pdfViewer .page, [_nghost-%COMP%]     .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}[_nghost-%COMP%]     .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100%!important}[_nghost-%COMP%]     .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100%;border:0}[_nghost-%COMP%]     .pdfPresentationMode:-moz-full-screen .pdfViewer .page, [_nghost-%COMP%]     .pdfPresentationMode:-webkit-full-screen .pdfViewer .page, [_nghost-%COMP%]     .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100%;border:0}"]
      });
      PdfViewerComponent.CSS_UNITS = 96.0 / 72.0;
      PdfViewerComponent.BORDER_WIDTH = 9;

      PdfViewerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfViewerContainer')], PdfViewerComponent.prototype, "pdfViewerContainer", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('after-load-complete')], PdfViewerComponent.prototype, "afterLoadComplete", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('page-rendered')], PdfViewerComponent.prototype, "pageRendered", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('text-layer-rendered')], PdfViewerComponent.prototype, "textLayerRendered", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('error')], PdfViewerComponent.prototype, "onError", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('on-progress')], PdfViewerComponent.prototype, "onProgress", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PdfViewerComponent.prototype, "pageChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PdfViewerComponent.prototype, "src", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('c-maps-url')], PdfViewerComponent.prototype, "cMapsUrl", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('page')], PdfViewerComponent.prototype, "page", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('render-text')], PdfViewerComponent.prototype, "renderText", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('render-text-mode')], PdfViewerComponent.prototype, "renderTextMode", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('original-size')], PdfViewerComponent.prototype, "originalSize", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('show-all')], PdfViewerComponent.prototype, "showAll", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('stick-to-page')], PdfViewerComponent.prototype, "stickToPage", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('zoom')], PdfViewerComponent.prototype, "zoom", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rotation')], PdfViewerComponent.prototype, "rotation", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('external-link-target')], PdfViewerComponent.prototype, "externalLinkTarget", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('autoresize')], PdfViewerComponent.prototype, "autoresize", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('fit-to-page')], PdfViewerComponent.prototype, "fitToPage", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('show-borders')], PdfViewerComponent.prototype, "showBorders", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', [])], PdfViewerComponent.prototype, "onPageResize", null);

      var PdfViewerModule = function PdfViewerModule() {
        _classCallCheck(this, PdfViewerModule);
      };

      PdfViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: PdfViewerModule
      });
      PdfViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function PdfViewerModule_Factory(t) {
          return new (t || PdfViewerModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PdfViewerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'pdf-viewer',
            template: "\n    <div #pdfViewerContainer class=\"ng2-pdf-viewer-container\">\n      <div class=\"pdfViewer\"></div>\n    </div>\n  ",
            styles: [".ng2-pdf-viewer-container{overflow-x:auto;position:relative;height:100%}:host ::ng-deep .textLayer{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1}:host ::ng-deep .textLayer>span{color:transparent;position:absolute;white-space:pre;cursor:text;-webkit-transform-origin:0 0;transform-origin:0 0}:host ::ng-deep .textLayer .highlight{margin:-1px;padding:1px;background-color:#b400aa;border-radius:4px}:host ::ng-deep .textLayer .highlight.begin{border-radius:4px 0 0 4px}:host ::ng-deep .textLayer .highlight.end{border-radius:0 4px 4px 0}:host ::ng-deep .textLayer .highlight.middle{border-radius:0}:host ::ng-deep .textLayer .highlight.selected{background-color:#006400}:host ::ng-deep .textLayer ::-moz-selection{background:#00f}:host ::ng-deep .textLayer ::-moz-selection,:host ::ng-deep .textLayer ::selection{background:#00f}:host ::ng-deep .textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .textLayer .endOfContent.active{top:0}:host ::ng-deep .annotationLayer section{position:absolute}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.pushButton>a,:host ::ng-deep .annotationLayer .linkAnnotation>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.pushButton>a:hover,:host ::ng-deep .annotationLayer .linkAnnotation>a:hover{opacity:.2;background:#ff0;box-shadow:0 2px 10px #ff0}:host ::ng-deep .annotationLayer .textAnnotation img{position:absolute;cursor:pointer}:host ::ng-deep .annotationLayer .textWidgetAnnotation input,:host ::ng-deep .annotationLayer .textWidgetAnnotation textarea{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}:host ::ng-deep .annotationLayer .choiceWidgetAnnotation select{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input,:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;vertical-align:top;width:100%}:host ::ng-deep .annotationLayer .choiceWidgetAnnotation select option{padding:0}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}:host ::ng-deep .annotationLayer .textWidgetAnnotation textarea{font:message-box;font-size:9px;resize:none}:host ::ng-deep .annotationLayer .textWidgetAnnotation input[disabled],:host ::ng-deep .annotationLayer .textWidgetAnnotation textarea[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}:host ::ng-deep .annotationLayer .choiceWidgetAnnotation select[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}:host ::ng-deep .annotationLayer .textWidgetAnnotation input:hover,:host ::ng-deep .annotationLayer .textWidgetAnnotation textarea:hover{border:1px solid #000}:host ::ng-deep .annotationLayer .choiceWidgetAnnotation select:hover{border:1px solid #000}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input:hover,:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input:hover{border:1px solid #000}:host ::ng-deep .annotationLayer .textWidgetAnnotation input:focus,:host ::ng-deep .annotationLayer .textWidgetAnnotation textarea:focus{background:0 0;border:1px solid transparent}:host ::ng-deep .annotationLayer .choiceWidgetAnnotation select:focus{background:0 0;border:1px solid transparent}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{background-color:#000;content:\"\";display:block;position:absolute;height:80%;left:45%;width:1px}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:#000;content:\"\";display:block;position:absolute;border-radius:50%;height:50%;left:30%;top:20%;width:50%}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}:host ::ng-deep .annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}:host ::ng-deep .annotationLayer .textWidgetAnnotation input.comb:focus{width:115%}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input,:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}:host ::ng-deep .annotationLayer .popupWrapper{position:absolute;width:20em}:host ::ng-deep .annotationLayer .popup{position:absolute;z-index:200;max-width:20em;background-color:#ff9;box-shadow:0 2px 5px #333;border-radius:2px;padding:.6em;margin-left:5px;cursor:pointer;font:message-box;word-wrap:break-word}:host ::ng-deep .annotationLayer .popup h1{font-size:1em;border-bottom:1px solid #000;margin:0;padding-bottom:.2em}:host ::ng-deep .annotationLayer .popup p{margin:0;padding-top:.2em}:host ::ng-deep .annotationLayer .circleAnnotation svg ellipse,:host ::ng-deep .annotationLayer .fileAttachmentAnnotation,:host ::ng-deep .annotationLayer .highlightAnnotation,:host ::ng-deep .annotationLayer .inkAnnotation svg polyline,:host ::ng-deep .annotationLayer .lineAnnotation svg line,:host ::ng-deep .annotationLayer .polygonAnnotation svg polygon,:host ::ng-deep .annotationLayer .polylineAnnotation svg polyline,:host ::ng-deep .annotationLayer .squareAnnotation svg rect,:host ::ng-deep .annotationLayer .squigglyAnnotation,:host ::ng-deep .annotationLayer .stampAnnotation,:host ::ng-deep .annotationLayer .strikeoutAnnotation,:host ::ng-deep .annotationLayer .underlineAnnotation{cursor:pointer}:host ::ng-deep .pdfViewer{padding-bottom:10px}:host ::ng-deep .pdfViewer .canvasWrapper{overflow:hidden}:host ::ng-deep .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px;position:relative;overflow:visible;border:9px solid rgba(0,0,0,.01);background-clip:content-box;-o-border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;-webkit-border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;background-color:#fff}:host ::ng-deep .pdfViewer.removePageBorders .page{margin:0 auto 10px;border:none}:host ::ng-deep .pdfViewer.removePageBorders{padding-bottom:0}:host ::ng-deep .pdfViewer.singlePageView{display:inline-block}:host ::ng-deep .pdfViewer.singlePageView .page{margin:0;border:none}:host ::ng-deep .pdfViewer.scrollHorizontal,:host ::ng-deep .pdfViewer.scrollWrapped{margin-left:3.5px;margin-right:3.5px;text-align:center}:host ::ng-deep .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}:host ::ng-deep .pdfViewer.scrollHorizontal,:host ::ng-deep .spread{white-space:nowrap}:host ::ng-deep .pdfViewer.removePageBorders,:host ::ng-deep .pdfViewer.scrollHorizontal .spread,:host ::ng-deep .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}:host ::ng-deep .spread .page{display:inline-block;vertical-align:middle;margin-left:-3.5px;margin-right:-3.5px}:host ::ng-deep .pdfViewer.scrollHorizontal .page,:host ::ng-deep .pdfViewer.scrollHorizontal .spread,:host ::ng-deep .pdfViewer.scrollWrapped .page,:host ::ng-deep .pdfViewer.scrollWrapped .spread{display:inline-block;vertical-align:middle}:host ::ng-deep .pdfViewer.scrollHorizontal .page,:host ::ng-deep .pdfViewer.scrollWrapped .page{margin-left:-3.5px;margin-right:-3.5px}:host ::ng-deep .pdfViewer.removePageBorders .spread .page,:host ::ng-deep .pdfViewer.removePageBorders.scrollHorizontal .page,:host ::ng-deep .pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}:host ::ng-deep .pdfViewer .page canvas{margin:0;display:block}:host ::ng-deep .pdfViewer .page canvas[hidden]{display:none}:host ::ng-deep .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(data:image/gif;base64,R0lGODlhGAAYAPQAAP///wAAAM7Ozvr6+uDg4LCwsOjo6I6OjsjIyJycnNjY2KioqMDAwPLy8nZ2doaGhri4uGhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJBwAAACwAAAAAGAAYAAAFriAgjiQAQWVaDgr5POSgkoTDjFE0NoQ8iw8HQZQTDQjDn4jhSABhAAOhoTqSDg7qSUQwxEaEwwFhXHhHgzOA1xshxAnfTzotGRaHglJqkJcaVEqCgyoCBQkJBQKDDXQGDYaIioyOgYSXA36XIgYMBWRzXZoKBQUMmil0lgalLSIClgBpO0g+s26nUWddXyoEDIsACq5SsTMMDIECwUdJPw0Mzsu0qHYkw72bBmozIQAh+QQJBwAAACwAAAAAGAAYAAAFsCAgjiTAMGVaDgR5HKQwqKNxIKPjjFCk0KNXC6ATKSI7oAhxWIhezwhENTCQEoeGCdWIPEgzESGxEIgGBWstEW4QCGGAIJEoxGmGt5ZkgCRQQHkGd2CESoeIIwoMBQUMP4cNeQQGDYuNj4iSb5WJnmeGng0CDGaBlIQEJziHk3sABidDAHBgagButSKvAAoyuHuUYHgCkAZqebw0AgLBQyyzNKO3byNuoSS8x8OfwIchACH5BAkHAAAALAAAAAAYABgAAAW4ICCOJIAgZVoOBJkkpDKoo5EI43GMjNPSokXCINKJCI4HcCRIQEQvqIOhGhBHhUTDhGo4diOZyFAoKEQDxra2mAEgjghOpCgz3LTBIxJ5kgwMBShACREHZ1V4Kg1rS44pBAgMDAg/Sw0GBAQGDZGTlY+YmpyPpSQDiqYiDQoCliqZBqkGAgKIS5kEjQ21VwCyp76dBHiNvz+MR74AqSOdVwbQuo+abppo10ssjdkAnc0rf8vgl8YqIQAh+QQJBwAAACwAAAAAGAAYAAAFrCAgjiQgCGVaDgZZFCQxqKNRKGOSjMjR0qLXTyciHA7AkaLACMIAiwOC1iAxCrMToHHYjWQiA4NBEA0Q1RpWxHg4cMXxNDk4OBxNUkPAQAEXDgllKgMzQA1pSYopBgonCj9JEA8REQ8QjY+RQJOVl4ugoYssBJuMpYYjDQSliwasiQOwNakALKqsqbWvIohFm7V6rQAGP6+JQLlFg7KDQLKJrLjBKbvAor3IKiEAIfkECQcAAAAsAAAAABgAGAAABbUgII4koChlmhokw5DEoI4NQ4xFMQoJO4uuhignMiQWvxGBIQC+AJBEUyUcIRiyE6CR0CllW4HABxBURTUw4nC4FcWo5CDBRpQaCoF7VjgsyCUDYDMNZ0mHdwYEBAaGMwwHDg4HDA2KjI4qkJKUiJ6faJkiA4qAKQkRB3E0i6YpAw8RERAjA4tnBoMApCMQDhFTuySKoSKMJAq6rD4GzASiJYtgi6PUcs9Kew0xh7rNJMqIhYchACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJEAQZZo2JIKQxqCOjWCMDDMqxT2LAgELkBMZCoXfyCBQiFwiRsGpku0EshNgUNAtrYPT0GQVNRBWwSKBMp98P24iISgNDAS4ipGA6JUpA2WAhDR4eWM/CAkHBwkIDYcGiTOLjY+FmZkNlCN3eUoLDmwlDW+AAwcODl5bYl8wCVYMDw5UWzBtnAANEQ8kBIM0oAAGPgcREIQnVloAChEOqARjzgAQEbczg8YkWJq8nSUhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJGAYZZoOpKKQqDoORDMKwkgwtiwSBBYAJ2owGL5RgxBziQQMgkwoMkhNqAEDARPSaiMDFdDIiRSFQowMXE8Z6RdpYHWnEAWGPVkajPmARVZMPUkCBQkJBQINgwaFPoeJi4GVlQ2Qc3VJBQcLV0ptfAMJBwdcIl+FYjALQgimoGNWIhAQZA4HXSpLMQ8PIgkOSHxAQhERPw7ASTSFyCMMDqBTJL8tf3y2fCEAIfkECQcAAAAsAAAAABgAGAAABa8gII4k0DRlmg6kYZCoOg5EDBDEaAi2jLO3nEkgkMEIL4BLpBAkVy3hCTAQKGAznM0AFNFGBAbj2cA9jQixcGZAGgECBu/9HnTp+FGjjezJFAwFBQwKe2Z+KoCChHmNjVMqA21nKQwJEJRlbnUFCQlFXlpeCWcGBUACCwlrdw8RKGImBwktdyMQEQciB7oACwcIeA4RVwAODiIGvHQKERAjxyMIB5QlVSTLYLZ0sW8hACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWPM5wNiV0UDUIBNkdoepTfMkA7thIECiyRtUAGq8fm2O4jIBgMBA1eAZ6Knx+gHaJR4QwdCMKBxEJRggFDGgQEREPjjAMBQUKIwIRDhBDC2QNDDEKoEkDoiMHDigICGkJBS2dDA6TAAnAEAkCdQ8ORQcHTAkLcQQODLPMIgIJaCWxJMIkPIoAt3EhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWHM5wNiV0UN3xdLiqr+mENcWpM9TIbrsBkEck8oC0DQqBQGGIz+t3eXtob0ZTPgNrIwQJDgtGAgwCWSIMDg4HiiUIDAxFAAoODwxDBWINCEGdSTQkCQcoegADBaQ6MggHjwAFBZUFCm0HB0kJCUy9bAYHCCPGIwqmRq0jySMGmj6yRiEAIfkECQcAAAAsAAAAABgAGAAABbIgII4k0DRlmg6kYZCsOg4EKhLE2BCxDOAxnIiW84l2L4BLZKipBopW8XRLDkeCiAMyMvQAA+uON4JEIo+vqukkKQ6RhLHplVGN+LyKcXA4Dgx5DWwGDXx+gIKENnqNdzIDaiMECwcFRgQCCowiCAcHCZIlCgICVgSfCEMMnA0CXaU2YSQFoQAKUQMMqjoyAglcAAyBAAIMRUYLCUkFlybDeAYJryLNk6xGNCTQXY0juHghACH5BAkHAAAALAAAAAAYABgAAAWzICCOJNA0ZVoOAmkY5KCSSgSNBDE2hDyLjohClBMNij8RJHIQvZwEVOpIekRQJyJs5AMoHA+GMbE1lnm9EcPhOHRnhpwUl3AsknHDm5RN+v8qCAkHBwkIfw1xBAYNgoSGiIqMgJQifZUjBhAJYj95ewIJCQV7KYpzBAkLLQADCHOtOpY5PgNlAAykAEUsQ1wzCgWdCIdeArczBQVbDJ0NAqyeBb64nQAGArBTt8R8mLuyPyEAOwAAAAAAAAAAAA==) center no-repeat}:host ::ng-deep .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}:host ::ng-deep .pdfPresentationMode .pdfViewer .page,:host ::ng-deep .pdfPresentationMode .pdfViewer .spread{display:block}:host ::ng-deep .pdfPresentationMode .pdfViewer .page,:host ::ng-deep .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}:host ::ng-deep .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100%!important}:host ::ng-deep .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100%;border:0}:host ::ng-deep .pdfPresentationMode:-moz-full-screen .pdfViewer .page,:host ::ng-deep .pdfPresentationMode:-webkit-full-screen .pdfViewer .page,:host ::ng-deep .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100%;border:0}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          afterLoadComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['after-load-complete']
          }],
          pageRendered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['page-rendered']
          }],
          textLayerRendered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['text-layer-rendered']
          }],
          onError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['error']
          }],
          onProgress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['on-progress']
          }],
          pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          cMapsUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['c-maps-url']
          }],
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['page']
          }],
          renderText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['render-text']
          }],
          renderTextMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['render-text-mode']
          }],
          originalSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['original-size']
          }],
          showAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['show-all']
          }],
          stickToPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['stick-to-page']
          }],
          zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['zoom']
          }],
          rotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['rotation']
          }],
          externalLinkTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['external-link-target']
          }],
          autoresize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['autoresize']
          }],
          fitToPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['fit-to-page']
          }],
          showBorders: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['show-borders']
          }],
          onPageResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', []]
          }],
          pdfViewerContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['pdfViewerContainer']
          }],
          src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PdfViewerModule, {
          declarations: [PdfViewerComponent],
          exports: [PdfViewerComponent]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PdfViewerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [PdfViewerComponent],
            exports: [PdfViewerComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-pdf-viewer.js.map

      /***/

    },

    /***/
    "Xc4I":
    /*!*******************************************!*\
      !*** ./src/app/pages/docs/docs.module.ts ***!
      \*******************************************/

    /*! exports provided: DocsModule */

    /***/
    function Xc4I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocsModule", function () {
        return DocsModule;
      });
      /* harmony import */


      var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-pdf-viewer */
      "IkSl");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _docs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./docs-routing.module */
      "mplv");
      /* harmony import */


      var _docs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./docs.component */
      "Bsbq");

      var DocsModule = function DocsModule() {
        _classCallCheck(this, DocsModule);
      };

      DocsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: DocsModule
      });
      DocsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function DocsModule_Factory(t) {
          return new (t || DocsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _docs_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocsRoutingModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_0__["PdfViewerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DocsModule, {
          declarations: [_docs_component__WEBPACK_IMPORTED_MODULE_4__["DocsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _docs_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocsRoutingModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_0__["PdfViewerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DocsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_docs_component__WEBPACK_IMPORTED_MODULE_4__["DocsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _docs_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocsRoutingModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_0__["PdfViewerModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lRFz":
    /*!**********************************************!*\
      !*** ./node_modules/pdfjs-dist/build/pdf.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function lRFz(module, exports, __webpack_require__) {
      /**
       * @licstart The following is the entire license notice for the
       * Javascript code in this page
       *
       * Copyright 2020 Mozilla Foundation
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       *
       * @licend The above is the entire license notice for the
       * Javascript code in this page
       */
      (function webpackUniversalModuleDefinition(root, factory) {
        if (true) module.exports = factory();else {}
      })(this, function () {
        return (
          /******/
          function (modules) {
            // webpackBootstrap

            /******/
            // The module cache

            /******/
            var installedModules = {};
            /******/

            /******/
            // The require function

            /******/

            function __w_pdfjs_require__(moduleId) {
              /******/

              /******/
              // Check if module is in cache

              /******/
              if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
              }
              /******/
              // Create a new module (and put it into the cache)

              /******/


              var module = installedModules[moduleId] = {
                /******/
                i: moduleId,

                /******/
                l: false,

                /******/
                exports: {}
                /******/

              };
              /******/

              /******/
              // Execute the module function

              /******/

              modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
              /******/

              /******/
              // Flag the module as loaded

              /******/

              module.l = true;
              /******/

              /******/
              // Return the exports of the module

              /******/

              return module.exports;
              /******/
            }
            /******/

            /******/

            /******/
            // expose the modules object (__webpack_modules__)

            /******/


            __w_pdfjs_require__.m = modules;
            /******/

            /******/
            // expose the module cache

            /******/

            __w_pdfjs_require__.c = installedModules;
            /******/

            /******/
            // define getter function for harmony exports

            /******/

            __w_pdfjs_require__.d = function (exports, name, getter) {
              /******/
              if (!__w_pdfjs_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                  enumerable: true,
                  get: getter
                });
                /******/
              }
              /******/

            };
            /******/

            /******/
            // define __esModule on exports

            /******/


            __w_pdfjs_require__.r = function (exports) {
              /******/
              if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                  value: 'Module'
                });
                /******/
              }
              /******/


              Object.defineProperty(exports, '__esModule', {
                value: true
              });
              /******/
            };
            /******/

            /******/
            // create a fake namespace object

            /******/
            // mode & 1: value is a module id, require it

            /******/
            // mode & 2: merge all properties of value into the ns

            /******/
            // mode & 4: return value when already ns object

            /******/
            // mode & 8|1: behave like require

            /******/


            __w_pdfjs_require__.t = function (value, mode) {
              /******/
              if (mode & 1) value = __w_pdfjs_require__(value);
              /******/

              if (mode & 8) return value;
              /******/

              if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
              /******/

              var ns = Object.create(null);
              /******/

              __w_pdfjs_require__.r(ns);
              /******/


              Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
              });
              /******/

              if (mode & 2 && typeof value != 'string') for (var key in value) {
                __w_pdfjs_require__.d(ns, key, function (key) {
                  return value[key];
                }.bind(null, key));
              }
              /******/

              return ns;
              /******/
            };
            /******/

            /******/
            // getDefaultExport function for compatibility with non-harmony modules

            /******/


            __w_pdfjs_require__.n = function (module) {
              /******/
              var getter = module && module.__esModule ?
              /******/
              function getDefault() {
                return module['default'];
              } :
              /******/
              function getModuleExports() {
                return module;
              };
              /******/

              __w_pdfjs_require__.d(getter, 'a', getter);
              /******/


              return getter;
              /******/
            };
            /******/

            /******/
            // Object.prototype.hasOwnProperty.call

            /******/


            __w_pdfjs_require__.o = function (object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/

            /******/
            // __webpack_public_path__

            /******/


            __w_pdfjs_require__.p = "";
            /******/

            /******/

            /******/
            // Load entry module and return exports

            /******/

            return __w_pdfjs_require__(__w_pdfjs_require__.s = 0);
            /******/
          }(
          /************************************************************************/

          /******/
          [
          /* 0 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            var pdfjsVersion = '2.4.456';
            var pdfjsBuild = '228a591c';

            var pdfjsSharedUtil = __w_pdfjs_require__(1);

            var pdfjsDisplayAPI = __w_pdfjs_require__(3);

            var pdfjsDisplayTextLayer = __w_pdfjs_require__(16);

            var pdfjsDisplayAnnotationLayer = __w_pdfjs_require__(17);

            var pdfjsDisplayDisplayUtils = __w_pdfjs_require__(4);

            var pdfjsDisplaySVG = __w_pdfjs_require__(18);

            var pdfjsDisplayWorkerOptions = __w_pdfjs_require__(10);

            var pdfjsDisplayAPICompatibility = __w_pdfjs_require__(6);

            {
              var _w_pdfjs_require__ = __w_pdfjs_require__(7),
                  isNodeJS = _w_pdfjs_require__.isNodeJS;

              if (isNodeJS) {
                var PDFNodeStream = __w_pdfjs_require__(19).PDFNodeStream;

                pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
                  return new PDFNodeStream(params);
                });
              } else {
                var PDFNetworkStream = __w_pdfjs_require__(22).PDFNetworkStream;

                var PDFFetchStream;

                if (pdfjsDisplayDisplayUtils.isFetchSupported()) {
                  PDFFetchStream = __w_pdfjs_require__(23).PDFFetchStream;
                }

                pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
                  if (PDFFetchStream && pdfjsDisplayDisplayUtils.isValidFetchUrl(params.url)) {
                    return new PDFFetchStream(params);
                  }

                  return new PDFNetworkStream(params);
                });
              }
            }
            exports.build = pdfjsDisplayAPI.build;
            exports.version = pdfjsDisplayAPI.version;
            exports.getDocument = pdfjsDisplayAPI.getDocument;
            exports.LoopbackPort = pdfjsDisplayAPI.LoopbackPort;
            exports.PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
            exports.PDFWorker = pdfjsDisplayAPI.PDFWorker;
            exports.renderTextLayer = pdfjsDisplayTextLayer.renderTextLayer;
            exports.AnnotationLayer = pdfjsDisplayAnnotationLayer.AnnotationLayer;
            exports.createPromiseCapability = pdfjsSharedUtil.createPromiseCapability;
            exports.PasswordResponses = pdfjsSharedUtil.PasswordResponses;
            exports.InvalidPDFException = pdfjsSharedUtil.InvalidPDFException;
            exports.MissingPDFException = pdfjsSharedUtil.MissingPDFException;
            exports.SVGGraphics = pdfjsDisplaySVG.SVGGraphics;
            exports.NativeImageDecoding = pdfjsSharedUtil.NativeImageDecoding;
            exports.CMapCompressionType = pdfjsSharedUtil.CMapCompressionType;
            exports.PermissionFlag = pdfjsSharedUtil.PermissionFlag;
            exports.UnexpectedResponseException = pdfjsSharedUtil.UnexpectedResponseException;
            exports.OPS = pdfjsSharedUtil.OPS;
            exports.VerbosityLevel = pdfjsSharedUtil.VerbosityLevel;
            exports.UNSUPPORTED_FEATURES = pdfjsSharedUtil.UNSUPPORTED_FEATURES;
            exports.createValidAbsoluteUrl = pdfjsSharedUtil.createValidAbsoluteUrl;
            exports.createObjectURL = pdfjsSharedUtil.createObjectURL;
            exports.removeNullCharacters = pdfjsSharedUtil.removeNullCharacters;
            exports.shadow = pdfjsSharedUtil.shadow;
            exports.Util = pdfjsSharedUtil.Util;
            exports.RenderingCancelledException = pdfjsDisplayDisplayUtils.RenderingCancelledException;
            exports.getFilenameFromUrl = pdfjsDisplayDisplayUtils.getFilenameFromUrl;
            exports.LinkTarget = pdfjsDisplayDisplayUtils.LinkTarget;
            exports.addLinkAttributes = pdfjsDisplayDisplayUtils.addLinkAttributes;
            exports.loadScript = pdfjsDisplayDisplayUtils.loadScript;
            exports.PDFDateString = pdfjsDisplayDisplayUtils.PDFDateString;
            exports.GlobalWorkerOptions = pdfjsDisplayWorkerOptions.GlobalWorkerOptions;
            exports.apiCompatibilityParams = pdfjsDisplayAPICompatibility.apiCompatibilityParams;
            /***/
          },
          /* 1 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.arrayByteLength = arrayByteLength;
            exports.arraysToBytes = arraysToBytes;
            exports.assert = assert;
            exports.bytesToString = bytesToString;
            exports.createPromiseCapability = createPromiseCapability;
            exports.getVerbosityLevel = getVerbosityLevel;
            exports.info = info;
            exports.isArrayBuffer = isArrayBuffer;
            exports.isArrayEqual = isArrayEqual;
            exports.isBool = isBool;
            exports.isEmptyObj = isEmptyObj;
            exports.isNum = isNum;
            exports.isString = isString;
            exports.isSameOrigin = isSameOrigin;
            exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
            exports.removeNullCharacters = removeNullCharacters;
            exports.setVerbosityLevel = setVerbosityLevel;
            exports.shadow = shadow;
            exports.string32 = string32;
            exports.stringToBytes = stringToBytes;
            exports.stringToPDFString = stringToPDFString;
            exports.stringToUTF8String = stringToUTF8String;
            exports.utf8StringToString = utf8StringToString;
            exports.warn = warn;
            exports.unreachable = unreachable;
            exports.IsEvalSupportedCached = exports.IsLittleEndianCached = exports.createObjectURL = exports.FormatError = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.PermissionFlag = exports.PasswordResponses = exports.PasswordException = exports.NativeImageDecoding = exports.MissingPDFException = exports.InvalidPDFException = exports.AbortException = exports.CMapCompressionType = exports.ImageKind = exports.FontType = exports.AnnotationType = exports.AnnotationStateModelType = exports.AnnotationReviewState = exports.AnnotationReplyType = exports.AnnotationMarkedState = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.UNSUPPORTED_FEATURES = exports.VerbosityLevel = exports.OPS = exports.IDENTITY_MATRIX = exports.FONT_IDENTITY_MATRIX = exports.BaseException = void 0;

            __w_pdfjs_require__(2);

            var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
            exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
            var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
            exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
            var NativeImageDecoding = {
              NONE: "none",
              DECODE: "decode",
              DISPLAY: "display"
            };
            exports.NativeImageDecoding = NativeImageDecoding;
            var PermissionFlag = {
              PRINT: 0x04,
              MODIFY_CONTENTS: 0x08,
              COPY: 0x10,
              MODIFY_ANNOTATIONS: 0x20,
              FILL_INTERACTIVE_FORMS: 0x100,
              COPY_FOR_ACCESSIBILITY: 0x200,
              ASSEMBLE: 0x400,
              PRINT_HIGH_QUALITY: 0x800
            };
            exports.PermissionFlag = PermissionFlag;
            var TextRenderingMode = {
              FILL: 0,
              STROKE: 1,
              FILL_STROKE: 2,
              INVISIBLE: 3,
              FILL_ADD_TO_PATH: 4,
              STROKE_ADD_TO_PATH: 5,
              FILL_STROKE_ADD_TO_PATH: 6,
              ADD_TO_PATH: 7,
              FILL_STROKE_MASK: 3,
              ADD_TO_PATH_FLAG: 4
            };
            exports.TextRenderingMode = TextRenderingMode;
            var ImageKind = {
              GRAYSCALE_1BPP: 1,
              RGB_24BPP: 2,
              RGBA_32BPP: 3
            };
            exports.ImageKind = ImageKind;
            var AnnotationType = {
              TEXT: 1,
              LINK: 2,
              FREETEXT: 3,
              LINE: 4,
              SQUARE: 5,
              CIRCLE: 6,
              POLYGON: 7,
              POLYLINE: 8,
              HIGHLIGHT: 9,
              UNDERLINE: 10,
              SQUIGGLY: 11,
              STRIKEOUT: 12,
              STAMP: 13,
              CARET: 14,
              INK: 15,
              POPUP: 16,
              FILEATTACHMENT: 17,
              SOUND: 18,
              MOVIE: 19,
              WIDGET: 20,
              SCREEN: 21,
              PRINTERMARK: 22,
              TRAPNET: 23,
              WATERMARK: 24,
              THREED: 25,
              REDACT: 26
            };
            exports.AnnotationType = AnnotationType;
            var AnnotationStateModelType = {
              MARKED: "Marked",
              REVIEW: "Review"
            };
            exports.AnnotationStateModelType = AnnotationStateModelType;
            var AnnotationMarkedState = {
              MARKED: "Marked",
              UNMARKED: "Unmarked"
            };
            exports.AnnotationMarkedState = AnnotationMarkedState;
            var AnnotationReviewState = {
              ACCEPTED: "Accepted",
              REJECTED: "Rejected",
              CANCELLED: "Cancelled",
              COMPLETED: "Completed",
              NONE: "None"
            };
            exports.AnnotationReviewState = AnnotationReviewState;
            var AnnotationReplyType = {
              GROUP: "Group",
              REPLY: "R"
            };
            exports.AnnotationReplyType = AnnotationReplyType;
            var AnnotationFlag = {
              INVISIBLE: 0x01,
              HIDDEN: 0x02,
              PRINT: 0x04,
              NOZOOM: 0x08,
              NOROTATE: 0x10,
              NOVIEW: 0x20,
              READONLY: 0x40,
              LOCKED: 0x80,
              TOGGLENOVIEW: 0x100,
              LOCKEDCONTENTS: 0x200
            };
            exports.AnnotationFlag = AnnotationFlag;
            var AnnotationFieldFlag = {
              READONLY: 0x0000001,
              REQUIRED: 0x0000002,
              NOEXPORT: 0x0000004,
              MULTILINE: 0x0001000,
              PASSWORD: 0x0002000,
              NOTOGGLETOOFF: 0x0004000,
              RADIO: 0x0008000,
              PUSHBUTTON: 0x0010000,
              COMBO: 0x0020000,
              EDIT: 0x0040000,
              SORT: 0x0080000,
              FILESELECT: 0x0100000,
              MULTISELECT: 0x0200000,
              DONOTSPELLCHECK: 0x0400000,
              DONOTSCROLL: 0x0800000,
              COMB: 0x1000000,
              RICHTEXT: 0x2000000,
              RADIOSINUNISON: 0x2000000,
              COMMITONSELCHANGE: 0x4000000
            };
            exports.AnnotationFieldFlag = AnnotationFieldFlag;
            var AnnotationBorderStyleType = {
              SOLID: 1,
              DASHED: 2,
              BEVELED: 3,
              INSET: 4,
              UNDERLINE: 5
            };
            exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
            var StreamType = {
              UNKNOWN: "UNKNOWN",
              FLATE: "FLATE",
              LZW: "LZW",
              DCT: "DCT",
              JPX: "JPX",
              JBIG: "JBIG",
              A85: "A85",
              AHX: "AHX",
              CCF: "CCF",
              RLX: "RLX"
            };
            exports.StreamType = StreamType;
            var FontType = {
              UNKNOWN: "UNKNOWN",
              TYPE1: "TYPE1",
              TYPE1C: "TYPE1C",
              CIDFONTTYPE0: "CIDFONTTYPE0",
              CIDFONTTYPE0C: "CIDFONTTYPE0C",
              TRUETYPE: "TRUETYPE",
              CIDFONTTYPE2: "CIDFONTTYPE2",
              TYPE3: "TYPE3",
              OPENTYPE: "OPENTYPE",
              TYPE0: "TYPE0",
              MMTYPE1: "MMTYPE1"
            };
            exports.FontType = FontType;
            var VerbosityLevel = {
              ERRORS: 0,
              WARNINGS: 1,
              INFOS: 5
            };
            exports.VerbosityLevel = VerbosityLevel;
            var CMapCompressionType = {
              NONE: 0,
              BINARY: 1,
              STREAM: 2
            };
            exports.CMapCompressionType = CMapCompressionType;
            var OPS = {
              dependency: 1,
              setLineWidth: 2,
              setLineCap: 3,
              setLineJoin: 4,
              setMiterLimit: 5,
              setDash: 6,
              setRenderingIntent: 7,
              setFlatness: 8,
              setGState: 9,
              save: 10,
              restore: 11,
              transform: 12,
              moveTo: 13,
              lineTo: 14,
              curveTo: 15,
              curveTo2: 16,
              curveTo3: 17,
              closePath: 18,
              rectangle: 19,
              stroke: 20,
              closeStroke: 21,
              fill: 22,
              eoFill: 23,
              fillStroke: 24,
              eoFillStroke: 25,
              closeFillStroke: 26,
              closeEOFillStroke: 27,
              endPath: 28,
              clip: 29,
              eoClip: 30,
              beginText: 31,
              endText: 32,
              setCharSpacing: 33,
              setWordSpacing: 34,
              setHScale: 35,
              setLeading: 36,
              setFont: 37,
              setTextRenderingMode: 38,
              setTextRise: 39,
              moveText: 40,
              setLeadingMoveText: 41,
              setTextMatrix: 42,
              nextLine: 43,
              showText: 44,
              showSpacedText: 45,
              nextLineShowText: 46,
              nextLineSetSpacingShowText: 47,
              setCharWidth: 48,
              setCharWidthAndBounds: 49,
              setStrokeColorSpace: 50,
              setFillColorSpace: 51,
              setStrokeColor: 52,
              setStrokeColorN: 53,
              setFillColor: 54,
              setFillColorN: 55,
              setStrokeGray: 56,
              setFillGray: 57,
              setStrokeRGBColor: 58,
              setFillRGBColor: 59,
              setStrokeCMYKColor: 60,
              setFillCMYKColor: 61,
              shadingFill: 62,
              beginInlineImage: 63,
              beginImageData: 64,
              endInlineImage: 65,
              paintXObject: 66,
              markPoint: 67,
              markPointProps: 68,
              beginMarkedContent: 69,
              beginMarkedContentProps: 70,
              endMarkedContent: 71,
              beginCompat: 72,
              endCompat: 73,
              paintFormXObjectBegin: 74,
              paintFormXObjectEnd: 75,
              beginGroup: 76,
              endGroup: 77,
              beginAnnotations: 78,
              endAnnotations: 79,
              beginAnnotation: 80,
              endAnnotation: 81,
              paintJpegXObject: 82,
              paintImageMaskXObject: 83,
              paintImageMaskXObjectGroup: 84,
              paintImageXObject: 85,
              paintInlineImageXObject: 86,
              paintInlineImageXObjectGroup: 87,
              paintImageXObjectRepeat: 88,
              paintImageMaskXObjectRepeat: 89,
              paintSolidColorImageMask: 90,
              constructPath: 91
            };
            exports.OPS = OPS;
            var UNSUPPORTED_FEATURES = {
              unknown: "unknown",
              forms: "forms",
              javaScript: "javaScript",
              smask: "smask",
              shadingPattern: "shadingPattern",
              font: "font"
            };
            exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
            var PasswordResponses = {
              NEED_PASSWORD: 1,
              INCORRECT_PASSWORD: 2
            };
            exports.PasswordResponses = PasswordResponses;
            var verbosity = VerbosityLevel.WARNINGS;

            function setVerbosityLevel(level) {
              if (Number.isInteger(level)) {
                verbosity = level;
              }
            }

            function getVerbosityLevel() {
              return verbosity;
            }

            function info(msg) {
              if (verbosity >= VerbosityLevel.INFOS) {
                console.log("Info: ".concat(msg));
              }
            }

            function warn(msg) {
              if (verbosity >= VerbosityLevel.WARNINGS) {
                console.log("Warning: ".concat(msg));
              }
            }

            function unreachable(msg) {
              throw new Error(msg);
            }

            function assert(cond, msg) {
              if (!cond) {
                unreachable(msg);
              }
            }

            function isSameOrigin(baseUrl, otherUrl) {
              var base;

              try {
                base = new URL(baseUrl);

                if (!base.origin || base.origin === "null") {
                  return false;
                }
              } catch (e) {
                return false;
              }

              var other = new URL(otherUrl, base);
              return base.origin === other.origin;
            }

            function _isValidProtocol(url) {
              if (!url) {
                return false;
              }

              switch (url.protocol) {
                case "http:":
                case "https:":
                case "ftp:":
                case "mailto:":
                case "tel:":
                  return true;

                default:
                  return false;
              }
            }

            function createValidAbsoluteUrl(url, baseUrl) {
              if (!url) {
                return null;
              }

              try {
                var absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);

                if (_isValidProtocol(absoluteUrl)) {
                  return absoluteUrl;
                }
              } catch (ex) {}

              return null;
            }

            function shadow(obj, prop, value) {
              Object.defineProperty(obj, prop, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: false
              });
              return value;
            }

            var BaseException = function BaseExceptionClosure() {
              function BaseException(message) {
                if (this.constructor === BaseException) {
                  unreachable("Cannot initialize BaseException.");
                }

                this.message = message;
                this.name = this.constructor.name;
              }

              BaseException.prototype = new Error();
              BaseException.constructor = BaseException;
              return BaseException;
            }();

            exports.BaseException = BaseException;

            var PasswordException = /*#__PURE__*/function (_BaseException) {
              _inherits(PasswordException, _BaseException);

              var _super = _createSuper(PasswordException);

              function PasswordException(msg, code) {
                var _this8;

                _classCallCheck(this, PasswordException);

                _this8 = _super.call(this, msg);
                _this8.code = code;
                return _this8;
              }

              return PasswordException;
            }(BaseException);

            exports.PasswordException = PasswordException;

            var UnknownErrorException = /*#__PURE__*/function (_BaseException2) {
              _inherits(UnknownErrorException, _BaseException2);

              var _super2 = _createSuper(UnknownErrorException);

              function UnknownErrorException(msg, details) {
                var _this9;

                _classCallCheck(this, UnknownErrorException);

                _this9 = _super2.call(this, msg);
                _this9.details = details;
                return _this9;
              }

              return UnknownErrorException;
            }(BaseException);

            exports.UnknownErrorException = UnknownErrorException;

            var InvalidPDFException = /*#__PURE__*/function (_BaseException3) {
              _inherits(InvalidPDFException, _BaseException3);

              var _super3 = _createSuper(InvalidPDFException);

              function InvalidPDFException() {
                _classCallCheck(this, InvalidPDFException);

                return _super3.apply(this, arguments);
              }

              return InvalidPDFException;
            }(BaseException);

            exports.InvalidPDFException = InvalidPDFException;

            var MissingPDFException = /*#__PURE__*/function (_BaseException4) {
              _inherits(MissingPDFException, _BaseException4);

              var _super4 = _createSuper(MissingPDFException);

              function MissingPDFException() {
                _classCallCheck(this, MissingPDFException);

                return _super4.apply(this, arguments);
              }

              return MissingPDFException;
            }(BaseException);

            exports.MissingPDFException = MissingPDFException;

            var UnexpectedResponseException = /*#__PURE__*/function (_BaseException5) {
              _inherits(UnexpectedResponseException, _BaseException5);

              var _super5 = _createSuper(UnexpectedResponseException);

              function UnexpectedResponseException(msg, status) {
                var _this10;

                _classCallCheck(this, UnexpectedResponseException);

                _this10 = _super5.call(this, msg);
                _this10.status = status;
                return _this10;
              }

              return UnexpectedResponseException;
            }(BaseException);

            exports.UnexpectedResponseException = UnexpectedResponseException;

            var FormatError = /*#__PURE__*/function (_BaseException6) {
              _inherits(FormatError, _BaseException6);

              var _super6 = _createSuper(FormatError);

              function FormatError() {
                _classCallCheck(this, FormatError);

                return _super6.apply(this, arguments);
              }

              return FormatError;
            }(BaseException);

            exports.FormatError = FormatError;

            var AbortException = /*#__PURE__*/function (_BaseException7) {
              _inherits(AbortException, _BaseException7);

              var _super7 = _createSuper(AbortException);

              function AbortException() {
                _classCallCheck(this, AbortException);

                return _super7.apply(this, arguments);
              }

              return AbortException;
            }(BaseException);

            exports.AbortException = AbortException;
            var NullCharactersRegExp = /\x00/g;

            function removeNullCharacters(str) {
              if (typeof str !== "string") {
                warn("The argument for removeNullCharacters must be a string.");
                return str;
              }

              return str.replace(NullCharactersRegExp, "");
            }

            function bytesToString(bytes) {
              assert(bytes !== null && typeof bytes === "object" && bytes.length !== undefined, "Invalid argument for bytesToString");
              var length = bytes.length;
              var MAX_ARGUMENT_COUNT = 8192;

              if (length < MAX_ARGUMENT_COUNT) {
                return String.fromCharCode.apply(null, bytes);
              }

              var strBuf = [];

              for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
                var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
                var chunk = bytes.subarray(i, chunkEnd);
                strBuf.push(String.fromCharCode.apply(null, chunk));
              }

              return strBuf.join("");
            }

            function stringToBytes(str) {
              assert(typeof str === "string", "Invalid argument for stringToBytes");
              var length = str.length;
              var bytes = new Uint8Array(length);

              for (var i = 0; i < length; ++i) {
                bytes[i] = str.charCodeAt(i) & 0xff;
              }

              return bytes;
            }

            function arrayByteLength(arr) {
              if (arr.length !== undefined) {
                return arr.length;
              }

              assert(arr.byteLength !== undefined);
              return arr.byteLength;
            }

            function arraysToBytes(arr) {
              var length = arr.length;

              if (length === 1 && arr[0] instanceof Uint8Array) {
                return arr[0];
              }

              var resultLength = 0;

              for (var i = 0; i < length; i++) {
                resultLength += arrayByteLength(arr[i]);
              }

              var pos = 0;
              var data = new Uint8Array(resultLength);

              for (var _i = 0; _i < length; _i++) {
                var item = arr[_i];

                if (!(item instanceof Uint8Array)) {
                  if (typeof item === "string") {
                    item = stringToBytes(item);
                  } else {
                    item = new Uint8Array(item);
                  }
                }

                var itemLength = item.byteLength;
                data.set(item, pos);
                pos += itemLength;
              }

              return data;
            }

            function string32(value) {
              return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
            }

            function isLittleEndian() {
              var buffer8 = new Uint8Array(4);
              buffer8[0] = 1;
              var view32 = new Uint32Array(buffer8.buffer, 0, 1);
              return view32[0] === 1;
            }

            var IsLittleEndianCached = {
              get value() {
                return shadow(this, "value", isLittleEndian());
              }

            };
            exports.IsLittleEndianCached = IsLittleEndianCached;

            function isEvalSupported() {
              try {
                new Function("");
                return true;
              } catch (e) {
                return false;
              }
            }

            var IsEvalSupportedCached = {
              get value() {
                return shadow(this, "value", isEvalSupported());
              }

            };
            exports.IsEvalSupportedCached = IsEvalSupportedCached;
            var rgbBuf = ["rgb(", 0, ",", 0, ",", 0, ")"];

            var Util = /*#__PURE__*/function () {
              function Util() {
                _classCallCheck(this, Util);
              }

              _createClass(Util, null, [{
                key: "makeCssRgb",
                value: function makeCssRgb(r, g, b) {
                  rgbBuf[1] = r;
                  rgbBuf[3] = g;
                  rgbBuf[5] = b;
                  return rgbBuf.join("");
                }
              }, {
                key: "transform",
                value: function transform(m1, m2) {
                  return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
                }
              }, {
                key: "applyTransform",
                value: function applyTransform(p, m) {
                  var xt = p[0] * m[0] + p[1] * m[2] + m[4];
                  var yt = p[0] * m[1] + p[1] * m[3] + m[5];
                  return [xt, yt];
                }
              }, {
                key: "applyInverseTransform",
                value: function applyInverseTransform(p, m) {
                  var d = m[0] * m[3] - m[1] * m[2];
                  var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
                  var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
                  return [xt, yt];
                }
              }, {
                key: "getAxialAlignedBoundingBox",
                value: function getAxialAlignedBoundingBox(r, m) {
                  var p1 = Util.applyTransform(r, m);
                  var p2 = Util.applyTransform(r.slice(2, 4), m);
                  var p3 = Util.applyTransform([r[0], r[3]], m);
                  var p4 = Util.applyTransform([r[2], r[1]], m);
                  return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
                }
              }, {
                key: "inverseTransform",
                value: function inverseTransform(m) {
                  var d = m[0] * m[3] - m[1] * m[2];
                  return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
                }
              }, {
                key: "apply3dTransform",
                value: function apply3dTransform(m, v) {
                  return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
                }
              }, {
                key: "singularValueDecompose2dScale",
                value: function singularValueDecompose2dScale(m) {
                  var transpose = [m[0], m[2], m[1], m[3]];
                  var a = m[0] * transpose[0] + m[1] * transpose[2];
                  var b = m[0] * transpose[1] + m[1] * transpose[3];
                  var c = m[2] * transpose[0] + m[3] * transpose[2];
                  var d = m[2] * transpose[1] + m[3] * transpose[3];
                  var first = (a + d) / 2;
                  var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
                  var sx = first + second || 1;
                  var sy = first - second || 1;
                  return [Math.sqrt(sx), Math.sqrt(sy)];
                }
              }, {
                key: "normalizeRect",
                value: function normalizeRect(rect) {
                  var r = rect.slice(0);

                  if (rect[0] > rect[2]) {
                    r[0] = rect[2];
                    r[2] = rect[0];
                  }

                  if (rect[1] > rect[3]) {
                    r[1] = rect[3];
                    r[3] = rect[1];
                  }

                  return r;
                }
              }, {
                key: "intersect",
                value: function intersect(rect1, rect2) {
                  function compare(a, b) {
                    return a - b;
                  }

                  var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare);
                  var orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare);
                  var result = [];
                  rect1 = Util.normalizeRect(rect1);
                  rect2 = Util.normalizeRect(rect2);

                  if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
                    result[0] = orderedX[1];
                    result[2] = orderedX[2];
                  } else {
                    return null;
                  }

                  if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
                    result[1] = orderedY[1];
                    result[3] = orderedY[2];
                  } else {
                    return null;
                  }

                  return result;
                }
              }]);

              return Util;
            }();

            exports.Util = Util;
            var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];

            function stringToPDFString(str) {
              var length = str.length,
                  strBuf = [];

              if (str[0] === "\xFE" && str[1] === "\xFF") {
                for (var i = 2; i < length; i += 2) {
                  strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
                }
              } else if (str[0] === "\xFF" && str[1] === "\xFE") {
                for (var _i2 = 2; _i2 < length; _i2 += 2) {
                  strBuf.push(String.fromCharCode(str.charCodeAt(_i2 + 1) << 8 | str.charCodeAt(_i2)));
                }
              } else {
                for (var _i3 = 0; _i3 < length; ++_i3) {
                  var code = PDFStringTranslateTable[str.charCodeAt(_i3)];
                  strBuf.push(code ? String.fromCharCode(code) : str.charAt(_i3));
                }
              }

              return strBuf.join("");
            }

            function stringToUTF8String(str) {
              return decodeURIComponent(escape(str));
            }

            function utf8StringToString(str) {
              return unescape(encodeURIComponent(str));
            }

            function isEmptyObj(obj) {
              for (var key in obj) {
                return false;
              }

              return true;
            }

            function isBool(v) {
              return typeof v === "boolean";
            }

            function isNum(v) {
              return typeof v === "number";
            }

            function isString(v) {
              return typeof v === "string";
            }

            function isArrayBuffer(v) {
              return typeof v === "object" && v !== null && v.byteLength !== undefined;
            }

            function isArrayEqual(arr1, arr2) {
              if (arr1.length !== arr2.length) {
                return false;
              }

              return arr1.every(function (element, index) {
                return element === arr2[index];
              });
            }

            function createPromiseCapability() {
              var capability = Object.create(null);
              var isSettled = false;
              Object.defineProperty(capability, "settled", {
                get: function get() {
                  return isSettled;
                }
              });
              capability.promise = new Promise(function (resolve, reject) {
                capability.resolve = function (data) {
                  isSettled = true;
                  resolve(data);
                };

                capability.reject = function (reason) {
                  isSettled = true;
                  reject(reason);
                };
              });
              return capability;
            }

            var createObjectURL = function createObjectURLClosure() {
              var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              return function createObjectURL(data, contentType) {
                var forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                if (!forceDataSchema && URL.createObjectURL) {
                  var blob = new Blob([data], {
                    type: contentType
                  });
                  return URL.createObjectURL(blob);
                }

                var buffer = "data:".concat(contentType, ";base64,");

                for (var i = 0, ii = data.length; i < ii; i += 3) {
                  var b1 = data[i] & 0xff;
                  var b2 = data[i + 1] & 0xff;
                  var b3 = data[i + 2] & 0xff;
                  var d1 = b1 >> 2,
                      d2 = (b1 & 3) << 4 | b2 >> 4;
                  var d3 = i + 1 < ii ? (b2 & 0xf) << 2 | b3 >> 6 : 64;
                  var d4 = i + 2 < ii ? b3 & 0x3f : 64;
                  buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
                }

                return buffer;
              };
            }();

            exports.createObjectURL = createObjectURL;
            /***/
          },
          /* 2 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            ;
            /***/
          },
          /* 3 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.getDocument = getDocument;
            exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
            exports.build = exports.version = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFWorker = exports.PDFDataRangeTransport = exports.LoopbackPort = void 0;

            var _util = __w_pdfjs_require__(1);

            var _display_utils = __w_pdfjs_require__(4);

            var _font_loader = __w_pdfjs_require__(5);

            var _api_compatibility = __w_pdfjs_require__(6);

            var _canvas = __w_pdfjs_require__(8);

            var _worker_options = __w_pdfjs_require__(10);

            var _is_node = __w_pdfjs_require__(7);

            var _message_handler = __w_pdfjs_require__(11);

            var _metadata = __w_pdfjs_require__(12);

            var _transport_stream = __w_pdfjs_require__(14);

            var _webgl = __w_pdfjs_require__(15);

            var DEFAULT_RANGE_CHUNK_SIZE = 65536;
            var RENDERING_CANCELLED_TIMEOUT = 100;
            var createPDFNetworkStream;

            function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
              createPDFNetworkStream = pdfNetworkStreamFactory;
            }

            function getDocument(src) {
              var task = new PDFDocumentLoadingTask();
              var source;

              if (typeof src === "string") {
                source = {
                  url: src
                };
              } else if ((0, _util.isArrayBuffer)(src)) {
                source = {
                  data: src
                };
              } else if (src instanceof PDFDataRangeTransport) {
                source = {
                  range: src
                };
              } else {
                if (typeof src !== "object") {
                  throw new Error("Invalid parameter in getDocument, " + "need either Uint8Array, string or a parameter object");
                }

                if (!src.url && !src.data && !src.range) {
                  throw new Error("Invalid parameter object: need either .data, .range or .url");
                }

                source = src;
              }

              var params = Object.create(null);
              var rangeTransport = null,
                  worker = null;

              for (var key in source) {
                if (key === "url" && typeof window !== "undefined") {
                  params[key] = new URL(source[key], window.location).href;
                  continue;
                } else if (key === "range") {
                  rangeTransport = source[key];
                  continue;
                } else if (key === "worker") {
                  worker = source[key];
                  continue;
                } else if (key === "data" && !(source[key] instanceof Uint8Array)) {
                  var pdfBytes = source[key];

                  if (typeof pdfBytes === "string") {
                    params[key] = (0, _util.stringToBytes)(pdfBytes);
                  } else if (typeof pdfBytes === "object" && pdfBytes !== null && !isNaN(pdfBytes.length)) {
                    params[key] = new Uint8Array(pdfBytes);
                  } else if ((0, _util.isArrayBuffer)(pdfBytes)) {
                    params[key] = new Uint8Array(pdfBytes);
                  } else {
                    throw new Error("Invalid PDF binary data: either typed array, " + "string or array-like object is expected in the " + "data property.");
                  }

                  continue;
                }

                params[key] = source[key];
              }

              params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
              params.CMapReaderFactory = params.CMapReaderFactory || _display_utils.DOMCMapReaderFactory;
              params.ignoreErrors = params.stopAtErrors !== true;
              params.pdfBug = params.pdfBug === true;
              var NativeImageDecoderValues = Object.values(_util.NativeImageDecoding);

              if (params.nativeImageDecoderSupport === undefined || !NativeImageDecoderValues.includes(params.nativeImageDecoderSupport)) {
                params.nativeImageDecoderSupport = _api_compatibility.apiCompatibilityParams.nativeImageDecoderSupport || _util.NativeImageDecoding.DECODE;
              }

              if (!Number.isInteger(params.maxImageSize)) {
                params.maxImageSize = -1;
              }

              if (typeof params.isEvalSupported !== "boolean") {
                params.isEvalSupported = true;
              }

              if (typeof params.disableFontFace !== "boolean") {
                params.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || false;
              }

              if (typeof params.disableRange !== "boolean") {
                params.disableRange = false;
              }

              if (typeof params.disableStream !== "boolean") {
                params.disableStream = false;
              }

              if (typeof params.disableAutoFetch !== "boolean") {
                params.disableAutoFetch = false;
              }

              if (typeof params.disableCreateObjectURL !== "boolean") {
                params.disableCreateObjectURL = _api_compatibility.apiCompatibilityParams.disableCreateObjectURL || false;
              }

              (0, _util.setVerbosityLevel)(params.verbosity);

              if (!worker) {
                var workerParams = {
                  verbosity: params.verbosity,
                  port: _worker_options.GlobalWorkerOptions.workerPort
                };
                worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
                task._worker = worker;
              }

              var docId = task.docId;
              worker.promise.then(function () {
                if (task.destroyed) {
                  throw new Error("Loading aborted");
                }

                return _fetchDocument(worker, params, rangeTransport, docId).then(function (workerId) {
                  if (task.destroyed) {
                    throw new Error("Loading aborted");
                  }

                  var networkStream;

                  if (rangeTransport) {
                    networkStream = new _transport_stream.PDFDataTransportStream({
                      length: params.length,
                      initialData: params.initialData,
                      progressiveDone: params.progressiveDone,
                      disableRange: params.disableRange,
                      disableStream: params.disableStream
                    }, rangeTransport);
                  } else if (!params.data) {
                    networkStream = createPDFNetworkStream({
                      url: params.url,
                      length: params.length,
                      httpHeaders: params.httpHeaders,
                      withCredentials: params.withCredentials,
                      rangeChunkSize: params.rangeChunkSize,
                      disableRange: params.disableRange,
                      disableStream: params.disableStream
                    });
                  }

                  var messageHandler = new _message_handler.MessageHandler(docId, workerId, worker.port);
                  messageHandler.postMessageTransfers = worker.postMessageTransfers;
                  var transport = new WorkerTransport(messageHandler, task, networkStream, params);
                  task._transport = transport;
                  messageHandler.send("Ready", null);
                });
              })["catch"](task._capability.reject);
              return task;
            }

            function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
              if (worker.destroyed) {
                return Promise.reject(new Error("Worker was destroyed"));
              }

              if (pdfDataRangeTransport) {
                source.length = pdfDataRangeTransport.length;
                source.initialData = pdfDataRangeTransport.initialData;
                source.progressiveDone = pdfDataRangeTransport.progressiveDone;
              }

              return worker.messageHandler.sendWithPromise("GetDocRequest", {
                docId: docId,
                apiVersion: '2.4.456',
                source: {
                  data: source.data,
                  url: source.url,
                  password: source.password,
                  disableAutoFetch: source.disableAutoFetch,
                  rangeChunkSize: source.rangeChunkSize,
                  length: source.length
                },
                maxImageSize: source.maxImageSize,
                disableFontFace: source.disableFontFace,
                disableCreateObjectURL: source.disableCreateObjectURL,
                postMessageTransfers: worker.postMessageTransfers,
                docBaseUrl: source.docBaseUrl,
                nativeImageDecoderSupport: source.nativeImageDecoderSupport,
                ignoreErrors: source.ignoreErrors,
                isEvalSupported: source.isEvalSupported
              }).then(function (workerId) {
                if (worker.destroyed) {
                  throw new Error("Worker was destroyed");
                }

                return workerId;
              });
            }

            var PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
              var nextDocumentId = 0;

              var PDFDocumentLoadingTask = /*#__PURE__*/function () {
                function PDFDocumentLoadingTask() {
                  _classCallCheck(this, PDFDocumentLoadingTask);

                  this._capability = (0, _util.createPromiseCapability)();
                  this._transport = null;
                  this._worker = null;
                  this.docId = "d" + nextDocumentId++;
                  this.destroyed = false;
                  this.onPassword = null;
                  this.onProgress = null;
                  this.onUnsupportedFeature = null;
                }

                _createClass(PDFDocumentLoadingTask, [{
                  key: "destroy",
                  value: function destroy() {
                    var _this11 = this;

                    this.destroyed = true;
                    var transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
                    return transportDestroyed.then(function () {
                      _this11._transport = null;

                      if (_this11._worker) {
                        _this11._worker.destroy();

                        _this11._worker = null;
                      }
                    });
                  }
                }, {
                  key: "then",
                  value: function then(onFulfilled, onRejected) {
                    throw new Error("Removed API method: " + "PDFDocumentLoadingTask.then, use the `promise` getter instead.");
                  }
                }, {
                  key: "promise",
                  get: function get() {
                    return this._capability.promise;
                  }
                }]);

                return PDFDocumentLoadingTask;
              }();

              return PDFDocumentLoadingTask;
            }();

            var PDFDataRangeTransport = /*#__PURE__*/function () {
              function PDFDataRangeTransport(length, initialData) {
                var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                _classCallCheck(this, PDFDataRangeTransport);

                this.length = length;
                this.initialData = initialData;
                this.progressiveDone = progressiveDone;
                this._rangeListeners = [];
                this._progressListeners = [];
                this._progressiveReadListeners = [];
                this._progressiveDoneListeners = [];
                this._readyCapability = (0, _util.createPromiseCapability)();
              }

              _createClass(PDFDataRangeTransport, [{
                key: "addRangeListener",
                value: function addRangeListener(listener) {
                  this._rangeListeners.push(listener);
                }
              }, {
                key: "addProgressListener",
                value: function addProgressListener(listener) {
                  this._progressListeners.push(listener);
                }
              }, {
                key: "addProgressiveReadListener",
                value: function addProgressiveReadListener(listener) {
                  this._progressiveReadListeners.push(listener);
                }
              }, {
                key: "addProgressiveDoneListener",
                value: function addProgressiveDoneListener(listener) {
                  this._progressiveDoneListeners.push(listener);
                }
              }, {
                key: "onDataRange",
                value: function onDataRange(begin, chunk) {
                  var _iterator = _createForOfIteratorHelper(this._rangeListeners),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var listener = _step.value;
                      listener(begin, chunk);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }
              }, {
                key: "onDataProgress",
                value: function onDataProgress(loaded, total) {
                  var _this12 = this;

                  this._readyCapability.promise.then(function () {
                    var _iterator2 = _createForOfIteratorHelper(_this12._progressListeners),
                        _step2;

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var listener = _step2.value;
                        listener(loaded, total);
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  });
                }
              }, {
                key: "onDataProgressiveRead",
                value: function onDataProgressiveRead(chunk) {
                  var _this13 = this;

                  this._readyCapability.promise.then(function () {
                    var _iterator3 = _createForOfIteratorHelper(_this13._progressiveReadListeners),
                        _step3;

                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        var listener = _step3.value;
                        listener(chunk);
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }
                  });
                }
              }, {
                key: "onDataProgressiveDone",
                value: function onDataProgressiveDone() {
                  var _this14 = this;

                  this._readyCapability.promise.then(function () {
                    var _iterator4 = _createForOfIteratorHelper(_this14._progressiveDoneListeners),
                        _step4;

                    try {
                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                        var listener = _step4.value;
                        listener();
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }
                  });
                }
              }, {
                key: "transportReady",
                value: function transportReady() {
                  this._readyCapability.resolve();
                }
              }, {
                key: "requestDataRange",
                value: function requestDataRange(begin, end) {
                  (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
                }
              }, {
                key: "abort",
                value: function abort() {}
              }]);

              return PDFDataRangeTransport;
            }();

            exports.PDFDataRangeTransport = PDFDataRangeTransport;

            var PDFDocumentProxy = /*#__PURE__*/function () {
              function PDFDocumentProxy(pdfInfo, transport) {
                _classCallCheck(this, PDFDocumentProxy);

                this._pdfInfo = pdfInfo;
                this._transport = transport;
              }

              _createClass(PDFDocumentProxy, [{
                key: "getPage",
                value: function getPage(pageNumber) {
                  return this._transport.getPage(pageNumber);
                }
              }, {
                key: "getPageIndex",
                value: function getPageIndex(ref) {
                  return this._transport.getPageIndex(ref);
                }
              }, {
                key: "getDestinations",
                value: function getDestinations() {
                  return this._transport.getDestinations();
                }
              }, {
                key: "getDestination",
                value: function getDestination(id) {
                  return this._transport.getDestination(id);
                }
              }, {
                key: "getPageLabels",
                value: function getPageLabels() {
                  return this._transport.getPageLabels();
                }
              }, {
                key: "getPageLayout",
                value: function getPageLayout() {
                  return this._transport.getPageLayout();
                }
              }, {
                key: "getPageMode",
                value: function getPageMode() {
                  return this._transport.getPageMode();
                }
              }, {
                key: "getViewerPreferences",
                value: function getViewerPreferences() {
                  return this._transport.getViewerPreferences();
                }
              }, {
                key: "getOpenAction",
                value: function getOpenAction() {
                  return this._transport.getOpenAction();
                }
              }, {
                key: "getOpenActionDestination",
                value: function getOpenActionDestination() {
                  (0, _display_utils.deprecated)("getOpenActionDestination, use getOpenAction instead.");
                  return this.getOpenAction().then(function (openAction) {
                    return openAction && openAction.dest ? openAction.dest : null;
                  });
                }
              }, {
                key: "getAttachments",
                value: function getAttachments() {
                  return this._transport.getAttachments();
                }
              }, {
                key: "getJavaScript",
                value: function getJavaScript() {
                  return this._transport.getJavaScript();
                }
              }, {
                key: "getOutline",
                value: function getOutline() {
                  return this._transport.getOutline();
                }
              }, {
                key: "getPermissions",
                value: function getPermissions() {
                  return this._transport.getPermissions();
                }
              }, {
                key: "getMetadata",
                value: function getMetadata() {
                  return this._transport.getMetadata();
                }
              }, {
                key: "getData",
                value: function getData() {
                  return this._transport.getData();
                }
              }, {
                key: "getDownloadInfo",
                value: function getDownloadInfo() {
                  return this._transport.downloadInfoCapability.promise;
                }
              }, {
                key: "getStats",
                value: function getStats() {
                  return this._transport.getStats();
                }
              }, {
                key: "cleanup",
                value: function cleanup() {
                  return this._transport.startCleanup();
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  return this.loadingTask.destroy();
                }
              }, {
                key: "numPages",
                get: function get() {
                  return this._pdfInfo.numPages;
                }
              }, {
                key: "fingerprint",
                get: function get() {
                  return this._pdfInfo.fingerprint;
                }
              }, {
                key: "loadingParams",
                get: function get() {
                  return this._transport.loadingParams;
                }
              }, {
                key: "loadingTask",
                get: function get() {
                  return this._transport.loadingTask;
                }
              }]);

              return PDFDocumentProxy;
            }();

            exports.PDFDocumentProxy = PDFDocumentProxy;

            var PDFPageProxy = /*#__PURE__*/function () {
              function PDFPageProxy(pageIndex, pageInfo, transport) {
                var pdfBug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

                _classCallCheck(this, PDFPageProxy);

                this._pageIndex = pageIndex;
                this._pageInfo = pageInfo;
                this._transport = transport;
                this._stats = pdfBug ? new _display_utils.StatTimer() : null;
                this._pdfBug = pdfBug;
                this.commonObjs = transport.commonObjs;
                this.objs = new PDFObjects();
                this.cleanupAfterRender = false;
                this.pendingCleanup = false;
                this.intentStates = Object.create(null);
                this.destroyed = false;
              }

              _createClass(PDFPageProxy, [{
                key: "getViewport",
                value: function getViewport() {
                  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      scale = _ref.scale,
                      _ref$rotation = _ref.rotation,
                      rotation = _ref$rotation === void 0 ? this.rotate : _ref$rotation,
                      _ref$offsetX = _ref.offsetX,
                      offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
                      _ref$offsetY = _ref.offsetY,
                      offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY,
                      _ref$dontFlip = _ref.dontFlip,
                      dontFlip = _ref$dontFlip === void 0 ? false : _ref$dontFlip;

                  if (arguments.length > 1 || typeof arguments[0] === "number") {
                    throw new Error("PDFPageProxy.getViewport is called with obsolete arguments.");
                  }

                  return new _display_utils.PageViewport({
                    viewBox: this.view,
                    scale: scale,
                    rotation: rotation,
                    offsetX: offsetX,
                    offsetY: offsetY,
                    dontFlip: dontFlip
                  });
                }
              }, {
                key: "getAnnotations",
                value: function getAnnotations() {
                  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      _ref2$intent = _ref2.intent,
                      intent = _ref2$intent === void 0 ? null : _ref2$intent;

                  if (!this.annotationsPromise || this.annotationsIntent !== intent) {
                    this.annotationsPromise = this._transport.getAnnotations(this._pageIndex, intent);
                    this.annotationsIntent = intent;
                  }

                  return this.annotationsPromise;
                }
              }, {
                key: "render",
                value: function render(_ref3) {
                  var _this15 = this;

                  var canvasContext = _ref3.canvasContext,
                      viewport = _ref3.viewport,
                      _ref3$intent = _ref3.intent,
                      intent = _ref3$intent === void 0 ? "display" : _ref3$intent,
                      _ref3$enableWebGL = _ref3.enableWebGL,
                      enableWebGL = _ref3$enableWebGL === void 0 ? false : _ref3$enableWebGL,
                      _ref3$renderInteracti = _ref3.renderInteractiveForms,
                      renderInteractiveForms = _ref3$renderInteracti === void 0 ? false : _ref3$renderInteracti,
                      _ref3$transform = _ref3.transform,
                      transform = _ref3$transform === void 0 ? null : _ref3$transform,
                      _ref3$imageLayer = _ref3.imageLayer,
                      imageLayer = _ref3$imageLayer === void 0 ? null : _ref3$imageLayer,
                      _ref3$canvasFactory = _ref3.canvasFactory,
                      canvasFactory = _ref3$canvasFactory === void 0 ? null : _ref3$canvasFactory,
                      _ref3$background = _ref3.background,
                      background = _ref3$background === void 0 ? null : _ref3$background;

                  if (this._stats) {
                    this._stats.time("Overall");
                  }

                  var renderingIntent = intent === "print" ? "print" : "display";
                  this.pendingCleanup = false;

                  if (!this.intentStates[renderingIntent]) {
                    this.intentStates[renderingIntent] = Object.create(null);
                  }

                  var intentState = this.intentStates[renderingIntent];

                  if (intentState.streamReaderCancelTimeout) {
                    clearTimeout(intentState.streamReaderCancelTimeout);
                    intentState.streamReaderCancelTimeout = null;
                  }

                  var canvasFactoryInstance = canvasFactory || new _display_utils.DOMCanvasFactory();
                  var webGLContext = new _webgl.WebGLContext({
                    enable: enableWebGL
                  });

                  if (!intentState.displayReadyCapability) {
                    intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
                    intentState.operatorList = {
                      fnArray: [],
                      argsArray: [],
                      lastChunk: false
                    };

                    if (this._stats) {
                      this._stats.time("Page Request");
                    }

                    this._pumpOperatorList({
                      pageIndex: this._pageIndex,
                      intent: renderingIntent,
                      renderInteractiveForms: renderInteractiveForms === true
                    });
                  }

                  var complete = function complete(error) {
                    var i = intentState.renderTasks.indexOf(internalRenderTask);

                    if (i >= 0) {
                      intentState.renderTasks.splice(i, 1);
                    }

                    if (_this15.cleanupAfterRender || renderingIntent === "print") {
                      _this15.pendingCleanup = true;
                    }

                    _this15._tryCleanup();

                    if (error) {
                      internalRenderTask.capability.reject(error);

                      _this15._abortOperatorList({
                        intentState: intentState,
                        reason: error
                      });
                    } else {
                      internalRenderTask.capability.resolve();
                    }

                    if (_this15._stats) {
                      _this15._stats.timeEnd("Rendering");

                      _this15._stats.timeEnd("Overall");
                    }
                  };

                  var internalRenderTask = new InternalRenderTask({
                    callback: complete,
                    params: {
                      canvasContext: canvasContext,
                      viewport: viewport,
                      transform: transform,
                      imageLayer: imageLayer,
                      background: background
                    },
                    objs: this.objs,
                    commonObjs: this.commonObjs,
                    operatorList: intentState.operatorList,
                    pageIndex: this._pageIndex,
                    canvasFactory: canvasFactoryInstance,
                    webGLContext: webGLContext,
                    useRequestAnimationFrame: renderingIntent !== "print",
                    pdfBug: this._pdfBug
                  });

                  if (!intentState.renderTasks) {
                    intentState.renderTasks = [];
                  }

                  intentState.renderTasks.push(internalRenderTask);
                  var renderTask = internalRenderTask.task;
                  intentState.displayReadyCapability.promise.then(function (transparency) {
                    if (_this15.pendingCleanup) {
                      complete();
                      return;
                    }

                    if (_this15._stats) {
                      _this15._stats.time("Rendering");
                    }

                    internalRenderTask.initializeGraphics(transparency);
                    internalRenderTask.operatorListChanged();
                  })["catch"](complete);
                  return renderTask;
                }
              }, {
                key: "getOperatorList",
                value: function getOperatorList() {
                  function operatorListChanged() {
                    if (intentState.operatorList.lastChunk) {
                      intentState.opListReadCapability.resolve(intentState.operatorList);
                      var i = intentState.renderTasks.indexOf(opListTask);

                      if (i >= 0) {
                        intentState.renderTasks.splice(i, 1);
                      }
                    }
                  }

                  var renderingIntent = "oplist";

                  if (!this.intentStates[renderingIntent]) {
                    this.intentStates[renderingIntent] = Object.create(null);
                  }

                  var intentState = this.intentStates[renderingIntent];
                  var opListTask;

                  if (!intentState.opListReadCapability) {
                    opListTask = {};
                    opListTask.operatorListChanged = operatorListChanged;
                    intentState.opListReadCapability = (0, _util.createPromiseCapability)();
                    intentState.renderTasks = [];
                    intentState.renderTasks.push(opListTask);
                    intentState.operatorList = {
                      fnArray: [],
                      argsArray: [],
                      lastChunk: false
                    };

                    if (this._stats) {
                      this._stats.time("Page Request");
                    }

                    this._pumpOperatorList({
                      pageIndex: this._pageIndex,
                      intent: renderingIntent
                    });
                  }

                  return intentState.opListReadCapability.promise;
                }
              }, {
                key: "streamTextContent",
                value: function streamTextContent() {
                  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      _ref4$normalizeWhites = _ref4.normalizeWhitespace,
                      normalizeWhitespace = _ref4$normalizeWhites === void 0 ? false : _ref4$normalizeWhites,
                      _ref4$disableCombineT = _ref4.disableCombineTextItems,
                      disableCombineTextItems = _ref4$disableCombineT === void 0 ? false : _ref4$disableCombineT;

                  var TEXT_CONTENT_CHUNK_SIZE = 100;
                  return this._transport.messageHandler.sendWithStream("GetTextContent", {
                    pageIndex: this._pageIndex,
                    normalizeWhitespace: normalizeWhitespace === true,
                    combineTextItems: disableCombineTextItems !== true
                  }, {
                    highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
                    size: function size(textContent) {
                      return textContent.items.length;
                    }
                  });
                }
              }, {
                key: "getTextContent",
                value: function getTextContent() {
                  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  var readableStream = this.streamTextContent(params);
                  return new Promise(function (resolve, reject) {
                    function pump() {
                      reader.read().then(function (_ref5) {
                        var _textContent$items;

                        var value = _ref5.value,
                            done = _ref5.done;

                        if (done) {
                          resolve(textContent);
                          return;
                        }

                        Object.assign(textContent.styles, value.styles);

                        (_textContent$items = textContent.items).push.apply(_textContent$items, _toConsumableArray(value.items));

                        pump();
                      }, reject);
                    }

                    var reader = readableStream.getReader();
                    var textContent = {
                      items: [],
                      styles: Object.create(null)
                    };
                    pump();
                  });
                }
              }, {
                key: "_destroy",
                value: function _destroy() {
                  var _this16 = this;

                  this.destroyed = true;
                  this._transport.pageCache[this._pageIndex] = null;
                  var waitOn = [];
                  Object.keys(this.intentStates).forEach(function (intent) {
                    var intentState = _this16.intentStates[intent];

                    _this16._abortOperatorList({
                      intentState: intentState,
                      reason: new Error("Page was destroyed."),
                      force: true
                    });

                    if (intent === "oplist") {
                      return;
                    }

                    intentState.renderTasks.forEach(function (renderTask) {
                      var renderCompleted = renderTask.capability.promise["catch"](function () {});
                      waitOn.push(renderCompleted);
                      renderTask.cancel();
                    });
                  });
                  this.objs.clear();
                  this.annotationsPromise = null;
                  this.pendingCleanup = false;
                  return Promise.all(waitOn);
                }
              }, {
                key: "cleanup",
                value: function cleanup() {
                  var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                  this.pendingCleanup = true;
                  return this._tryCleanup(resetStats);
                }
              }, {
                key: "_tryCleanup",
                value: function _tryCleanup() {
                  var _this17 = this;

                  var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                  if (!this.pendingCleanup || Object.keys(this.intentStates).some(function (intent) {
                    var intentState = _this17.intentStates[intent];
                    return intentState.renderTasks.length !== 0 || !intentState.operatorList.lastChunk;
                  })) {
                    return false;
                  }

                  Object.keys(this.intentStates).forEach(function (intent) {
                    delete _this17.intentStates[intent];
                  });
                  this.objs.clear();
                  this.annotationsPromise = null;

                  if (resetStats && this._stats) {
                    this._stats = new _display_utils.StatTimer();
                  }

                  this.pendingCleanup = false;
                  return true;
                }
              }, {
                key: "_startRenderPage",
                value: function _startRenderPage(transparency, intent) {
                  var intentState = this.intentStates[intent];

                  if (!intentState) {
                    return;
                  }

                  if (this._stats) {
                    this._stats.timeEnd("Page Request");
                  }

                  if (intentState.displayReadyCapability) {
                    intentState.displayReadyCapability.resolve(transparency);
                  }
                }
              }, {
                key: "_renderPageChunk",
                value: function _renderPageChunk(operatorListChunk, intentState) {
                  for (var i = 0, ii = operatorListChunk.length; i < ii; i++) {
                    intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
                    intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
                  }

                  intentState.operatorList.lastChunk = operatorListChunk.lastChunk;

                  for (var _i4 = 0; _i4 < intentState.renderTasks.length; _i4++) {
                    intentState.renderTasks[_i4].operatorListChanged();
                  }

                  if (operatorListChunk.lastChunk) {
                    this._tryCleanup();
                  }
                }
              }, {
                key: "_pumpOperatorList",
                value: function _pumpOperatorList(args) {
                  var _this18 = this;

                  (0, _util.assert)(args.intent, 'PDFPageProxy._pumpOperatorList: Expected "intent" argument.');

                  var readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", args);

                  var reader = readableStream.getReader();
                  var intentState = this.intentStates[args.intent];
                  intentState.streamReader = reader;

                  var pump = function pump() {
                    reader.read().then(function (_ref6) {
                      var value = _ref6.value,
                          done = _ref6.done;

                      if (done) {
                        intentState.streamReader = null;
                        return;
                      }

                      if (_this18._transport.destroyed) {
                        return;
                      }

                      _this18._renderPageChunk(value, intentState);

                      pump();
                    }, function (reason) {
                      intentState.streamReader = null;

                      if (_this18._transport.destroyed) {
                        return;
                      }

                      if (intentState.operatorList) {
                        intentState.operatorList.lastChunk = true;

                        for (var i = 0; i < intentState.renderTasks.length; i++) {
                          intentState.renderTasks[i].operatorListChanged();
                        }

                        _this18._tryCleanup();
                      }

                      if (intentState.displayReadyCapability) {
                        intentState.displayReadyCapability.reject(reason);
                      } else if (intentState.opListReadCapability) {
                        intentState.opListReadCapability.reject(reason);
                      } else {
                        throw reason;
                      }
                    });
                  };

                  pump();
                }
              }, {
                key: "_abortOperatorList",
                value: function _abortOperatorList(_ref7) {
                  var _this19 = this;

                  var intentState = _ref7.intentState,
                      reason = _ref7.reason,
                      _ref7$force = _ref7.force,
                      force = _ref7$force === void 0 ? false : _ref7$force;
                  (0, _util.assert)(reason instanceof Error || typeof reason === "object" && reason !== null, 'PDFPageProxy._abortOperatorList: Expected "reason" argument.');

                  if (!intentState.streamReader) {
                    return;
                  }

                  if (!force) {
                    if (intentState.renderTasks.length !== 0) {
                      return;
                    }

                    if (reason instanceof _display_utils.RenderingCancelledException) {
                      intentState.streamReaderCancelTimeout = setTimeout(function () {
                        _this19._abortOperatorList({
                          intentState: intentState,
                          reason: reason,
                          force: true
                        });

                        intentState.streamReaderCancelTimeout = null;
                      }, RENDERING_CANCELLED_TIMEOUT);
                      return;
                    }
                  }

                  intentState.streamReader.cancel(new _util.AbortException(reason && reason.message));
                  intentState.streamReader = null;

                  if (this._transport.destroyed) {
                    return;
                  }

                  Object.keys(this.intentStates).some(function (intent) {
                    if (_this19.intentStates[intent] === intentState) {
                      delete _this19.intentStates[intent];
                      return true;
                    }

                    return false;
                  });
                  this.cleanup();
                }
              }, {
                key: "pageNumber",
                get: function get() {
                  return this._pageIndex + 1;
                }
              }, {
                key: "rotate",
                get: function get() {
                  return this._pageInfo.rotate;
                }
              }, {
                key: "ref",
                get: function get() {
                  return this._pageInfo.ref;
                }
              }, {
                key: "userUnit",
                get: function get() {
                  return this._pageInfo.userUnit;
                }
              }, {
                key: "view",
                get: function get() {
                  return this._pageInfo.view;
                }
              }, {
                key: "stats",
                get: function get() {
                  return this._stats;
                }
              }]);

              return PDFPageProxy;
            }();

            exports.PDFPageProxy = PDFPageProxy;

            var LoopbackPort = /*#__PURE__*/function () {
              function LoopbackPort() {
                var defer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                _classCallCheck(this, LoopbackPort);

                this._listeners = [];
                this._defer = defer;
                this._deferred = Promise.resolve(undefined);
              }

              _createClass(LoopbackPort, [{
                key: "postMessage",
                value: function postMessage(obj, transfers) {
                  var _this20 = this;

                  function cloneValue(value) {
                    if (typeof value !== "object" || value === null) {
                      return value;
                    }

                    if (cloned.has(value)) {
                      return cloned.get(value);
                    }

                    var buffer, result;

                    if ((buffer = value.buffer) && (0, _util.isArrayBuffer)(buffer)) {
                      var transferable = transfers && transfers.includes(buffer);

                      if (transferable) {
                        result = new value.constructor(buffer, value.byteOffset, value.byteLength);
                      } else {
                        result = new value.constructor(value);
                      }

                      cloned.set(value, result);
                      return result;
                    }

                    result = Array.isArray(value) ? [] : {};
                    cloned.set(value, result);

                    for (var i in value) {
                      var desc = void 0,
                          p = value;

                      while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
                        p = Object.getPrototypeOf(p);
                      }

                      if (typeof desc.value === "undefined") {
                        continue;
                      }

                      if (typeof desc.value === "function") {
                        if (value.hasOwnProperty && value.hasOwnProperty(i)) {
                          throw new Error("LoopbackPort.postMessage - cannot clone: ".concat(value[i]));
                        }

                        continue;
                      }

                      result[i] = cloneValue(desc.value);
                    }

                    return result;
                  }

                  if (!this._defer) {
                    this._listeners.forEach(function (listener) {
                      listener.call(_this20, {
                        data: obj
                      });
                    });

                    return;
                  }

                  var cloned = new WeakMap();
                  var e = {
                    data: cloneValue(obj)
                  };

                  this._deferred.then(function () {
                    _this20._listeners.forEach(function (listener) {
                      listener.call(_this20, e);
                    });
                  });
                }
              }, {
                key: "addEventListener",
                value: function addEventListener(name, listener) {
                  this._listeners.push(listener);
                }
              }, {
                key: "removeEventListener",
                value: function removeEventListener(name, listener) {
                  var i = this._listeners.indexOf(listener);

                  this._listeners.splice(i, 1);
                }
              }, {
                key: "terminate",
                value: function terminate() {
                  this._listeners.length = 0;
                }
              }]);

              return LoopbackPort;
            }();

            exports.LoopbackPort = LoopbackPort;

            var PDFWorker = function PDFWorkerClosure() {
              var pdfWorkerPorts = new WeakMap();
              var isWorkerDisabled = false;
              var fallbackWorkerSrc;
              var nextFakeWorkerId = 0;
              var fakeWorkerCapability;

              if (_is_node.isNodeJS && "function" === "function") {
                isWorkerDisabled = true;
                fallbackWorkerSrc = "./pdf.worker.js";
              } else if (typeof document === "object" && "currentScript" in document) {
                var pdfjsFilePath = document.currentScript && document.currentScript.src;

                if (pdfjsFilePath) {
                  fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
                }
              }

              function _getWorkerSrc() {
                if (_worker_options.GlobalWorkerOptions.workerSrc) {
                  return _worker_options.GlobalWorkerOptions.workerSrc;
                }

                if (typeof fallbackWorkerSrc !== "undefined") {
                  if (!_is_node.isNodeJS) {
                    (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');
                  }

                  return fallbackWorkerSrc;
                }

                throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
              }

              function getMainThreadWorkerMessageHandler() {
                var mainWorkerMessageHandler;

                try {
                  mainWorkerMessageHandler = globalThis.pdfjsWorker && globalThis.pdfjsWorker.WorkerMessageHandler;
                } catch (ex) {}

                return mainWorkerMessageHandler || null;
              }

              function setupFakeWorkerGlobal() {
                if (fakeWorkerCapability) {
                  return fakeWorkerCapability.promise;
                }

                fakeWorkerCapability = (0, _util.createPromiseCapability)();

                var loader = /*#__PURE__*/function () {
                  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var mainWorkerMessageHandler, worker;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();

                            if (!mainWorkerMessageHandler) {
                              _context.next = 3;
                              break;
                            }

                            return _context.abrupt("return", mainWorkerMessageHandler);

                          case 3:
                            if (!(_is_node.isNodeJS && "function" === "function")) {
                              _context.next = 6;
                              break;
                            }

                            worker = eval("require")(_getWorkerSrc());
                            return _context.abrupt("return", worker.WorkerMessageHandler);

                          case 6:
                            _context.next = 8;
                            return (0, _display_utils.loadScript)(_getWorkerSrc());

                          case 8:
                            return _context.abrupt("return", window.pdfjsWorker.WorkerMessageHandler);

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function loader() {
                    return _ref8.apply(this, arguments);
                  };
                }();

                loader().then(fakeWorkerCapability.resolve, fakeWorkerCapability.reject);
                return fakeWorkerCapability.promise;
              }

              function createCDNWrapper(url) {
                var wrapper = "importScripts('" + url + "');";
                return URL.createObjectURL(new Blob([wrapper]));
              }

              var PDFWorker = /*#__PURE__*/function () {
                function PDFWorker() {
                  var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      _ref9$name = _ref9.name,
                      name = _ref9$name === void 0 ? null : _ref9$name,
                      _ref9$port = _ref9.port,
                      port = _ref9$port === void 0 ? null : _ref9$port,
                      _ref9$verbosity = _ref9.verbosity,
                      verbosity = _ref9$verbosity === void 0 ? (0, _util.getVerbosityLevel)() : _ref9$verbosity;

                  _classCallCheck(this, PDFWorker);

                  if (port && pdfWorkerPorts.has(port)) {
                    throw new Error("Cannot use more than one PDFWorker per port");
                  }

                  this.name = name;
                  this.destroyed = false;
                  this.postMessageTransfers = true;
                  this.verbosity = verbosity;
                  this._readyCapability = (0, _util.createPromiseCapability)();
                  this._port = null;
                  this._webWorker = null;
                  this._messageHandler = null;

                  if (port) {
                    pdfWorkerPorts.set(port, this);

                    this._initializeFromPort(port);

                    return;
                  }

                  this._initialize();
                }

                _createClass(PDFWorker, [{
                  key: "_initializeFromPort",
                  value: function _initializeFromPort(port) {
                    this._port = port;
                    this._messageHandler = new _message_handler.MessageHandler("main", "worker", port);

                    this._messageHandler.on("ready", function () {});

                    this._readyCapability.resolve();
                  }
                }, {
                  key: "_initialize",
                  value: function _initialize() {
                    var _this21 = this;

                    if (typeof Worker !== "undefined" && !isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
                      var workerSrc = _getWorkerSrc();

                      try {
                        if (!(0, _util.isSameOrigin)(window.location.href, workerSrc)) {
                          workerSrc = createCDNWrapper(new URL(workerSrc, window.location).href);
                        }

                        var worker = new Worker(workerSrc);
                        var messageHandler = new _message_handler.MessageHandler("main", "worker", worker);

                        var terminateEarly = function terminateEarly() {
                          worker.removeEventListener("error", onWorkerError);
                          messageHandler.destroy();
                          worker.terminate();

                          if (_this21.destroyed) {
                            _this21._readyCapability.reject(new Error("Worker was destroyed"));
                          } else {
                            _this21._setupFakeWorker();
                          }
                        };

                        var onWorkerError = function onWorkerError() {
                          if (!_this21._webWorker) {
                            terminateEarly();
                          }
                        };

                        worker.addEventListener("error", onWorkerError);
                        messageHandler.on("test", function (data) {
                          worker.removeEventListener("error", onWorkerError);

                          if (_this21.destroyed) {
                            terminateEarly();
                            return;
                          }

                          if (data) {
                            _this21._messageHandler = messageHandler;
                            _this21._port = worker;
                            _this21._webWorker = worker;

                            if (!data.supportTransfers) {
                              _this21.postMessageTransfers = false;
                            }

                            _this21._readyCapability.resolve();

                            messageHandler.send("configure", {
                              verbosity: _this21.verbosity
                            });
                          } else {
                            _this21._setupFakeWorker();

                            messageHandler.destroy();
                            worker.terminate();
                          }
                        });
                        messageHandler.on("ready", function (data) {
                          worker.removeEventListener("error", onWorkerError);

                          if (_this21.destroyed) {
                            terminateEarly();
                            return;
                          }

                          try {
                            sendTest();
                          } catch (e) {
                            _this21._setupFakeWorker();
                          }
                        });

                        var sendTest = function sendTest() {
                          var testObj = new Uint8Array([_this21.postMessageTransfers ? 255 : 0]);

                          try {
                            messageHandler.send("test", testObj, [testObj.buffer]);
                          } catch (ex) {
                            (0, _util.warn)("Cannot use postMessage transfers.");
                            testObj[0] = 0;
                            messageHandler.send("test", testObj);
                          }
                        };

                        sendTest();
                        return;
                      } catch (e) {
                        (0, _util.info)("The worker has been disabled.");
                      }
                    }

                    this._setupFakeWorker();
                  }
                }, {
                  key: "_setupFakeWorker",
                  value: function _setupFakeWorker() {
                    var _this22 = this;

                    if (!isWorkerDisabled) {
                      (0, _util.warn)("Setting up fake worker.");
                      isWorkerDisabled = true;
                    }

                    setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
                      if (_this22.destroyed) {
                        _this22._readyCapability.reject(new Error("Worker was destroyed"));

                        return;
                      }

                      var port = new LoopbackPort();
                      _this22._port = port;
                      var id = "fake" + nextFakeWorkerId++;
                      var workerHandler = new _message_handler.MessageHandler(id + "_worker", id, port);
                      WorkerMessageHandler.setup(workerHandler, port);
                      var messageHandler = new _message_handler.MessageHandler(id, id + "_worker", port);
                      _this22._messageHandler = messageHandler;

                      _this22._readyCapability.resolve();

                      messageHandler.send("configure", {
                        verbosity: _this22.verbosity
                      });
                    })["catch"](function (reason) {
                      _this22._readyCapability.reject(new Error("Setting up fake worker failed: \"".concat(reason.message, "\".")));
                    });
                  }
                }, {
                  key: "destroy",
                  value: function destroy() {
                    this.destroyed = true;

                    if (this._webWorker) {
                      this._webWorker.terminate();

                      this._webWorker = null;
                    }

                    pdfWorkerPorts["delete"](this._port);
                    this._port = null;

                    if (this._messageHandler) {
                      this._messageHandler.destroy();

                      this._messageHandler = null;
                    }
                  }
                }, {
                  key: "promise",
                  get: function get() {
                    return this._readyCapability.promise;
                  }
                }, {
                  key: "port",
                  get: function get() {
                    return this._port;
                  }
                }, {
                  key: "messageHandler",
                  get: function get() {
                    return this._messageHandler;
                  }
                }], [{
                  key: "fromPort",
                  value: function fromPort(params) {
                    if (!params || !params.port) {
                      throw new Error("PDFWorker.fromPort - invalid method signature.");
                    }

                    if (pdfWorkerPorts.has(params.port)) {
                      return pdfWorkerPorts.get(params.port);
                    }

                    return new PDFWorker(params);
                  }
                }, {
                  key: "getWorkerSrc",
                  value: function getWorkerSrc() {
                    return _getWorkerSrc();
                  }
                }]);

                return PDFWorker;
              }();

              return PDFWorker;
            }();

            exports.PDFWorker = PDFWorker;

            var WorkerTransport = /*#__PURE__*/function () {
              function WorkerTransport(messageHandler, loadingTask, networkStream, params) {
                _classCallCheck(this, WorkerTransport);

                this.messageHandler = messageHandler;
                this.loadingTask = loadingTask;
                this.commonObjs = new PDFObjects();
                this.fontLoader = new _font_loader.FontLoader({
                  docId: loadingTask.docId,
                  onUnsupportedFeature: this._onUnsupportedFeature.bind(this)
                });
                this._params = params;
                this.CMapReaderFactory = new params.CMapReaderFactory({
                  baseUrl: params.cMapUrl,
                  isCompressed: params.cMapPacked
                });
                this.destroyed = false;
                this.destroyCapability = null;
                this._passwordCapability = null;
                this._networkStream = networkStream;
                this._fullReader = null;
                this._lastProgress = null;
                this.pageCache = [];
                this.pagePromises = [];
                this.downloadInfoCapability = (0, _util.createPromiseCapability)();
                this.setupMessageHandler();
              }

              _createClass(WorkerTransport, [{
                key: "destroy",
                value: function destroy() {
                  var _this23 = this;

                  if (this.destroyCapability) {
                    return this.destroyCapability.promise;
                  }

                  this.destroyed = true;
                  this.destroyCapability = (0, _util.createPromiseCapability)();

                  if (this._passwordCapability) {
                    this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                  }

                  var waitOn = [];
                  this.pageCache.forEach(function (page) {
                    if (page) {
                      waitOn.push(page._destroy());
                    }
                  });
                  this.pageCache.length = 0;
                  this.pagePromises.length = 0;
                  var terminated = this.messageHandler.sendWithPromise("Terminate", null);
                  waitOn.push(terminated);
                  Promise.all(waitOn).then(function () {
                    _this23.fontLoader.clear();

                    if (_this23._networkStream) {
                      _this23._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));
                    }

                    if (_this23.messageHandler) {
                      _this23.messageHandler.destroy();

                      _this23.messageHandler = null;
                    }

                    _this23.destroyCapability.resolve();
                  }, this.destroyCapability.reject);
                  return this.destroyCapability.promise;
                }
              }, {
                key: "setupMessageHandler",
                value: function setupMessageHandler() {
                  var _this24 = this;

                  var messageHandler = this.messageHandler,
                      loadingTask = this.loadingTask;
                  messageHandler.on("GetReader", function (data, sink) {
                    (0, _util.assert)(_this24._networkStream);
                    _this24._fullReader = _this24._networkStream.getFullReader();

                    _this24._fullReader.onProgress = function (evt) {
                      _this24._lastProgress = {
                        loaded: evt.loaded,
                        total: evt.total
                      };
                    };

                    sink.onPull = function () {
                      _this24._fullReader.read().then(function (_ref10) {
                        var value = _ref10.value,
                            done = _ref10.done;

                        if (done) {
                          sink.close();
                          return;
                        }

                        (0, _util.assert)((0, _util.isArrayBuffer)(value));
                        sink.enqueue(new Uint8Array(value), 1, [value]);
                      })["catch"](function (reason) {
                        sink.error(reason);
                      });
                    };

                    sink.onCancel = function (reason) {
                      _this24._fullReader.cancel(reason);
                    };
                  });
                  messageHandler.on("ReaderHeadersReady", function (data) {
                    var headersCapability = (0, _util.createPromiseCapability)();
                    var fullReader = _this24._fullReader;
                    fullReader.headersReady.then(function () {
                      if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
                        if (_this24._lastProgress && loadingTask.onProgress) {
                          loadingTask.onProgress(_this24._lastProgress);
                        }

                        fullReader.onProgress = function (evt) {
                          if (loadingTask.onProgress) {
                            loadingTask.onProgress({
                              loaded: evt.loaded,
                              total: evt.total
                            });
                          }
                        };
                      }

                      headersCapability.resolve({
                        isStreamingSupported: fullReader.isStreamingSupported,
                        isRangeSupported: fullReader.isRangeSupported,
                        contentLength: fullReader.contentLength
                      });
                    }, headersCapability.reject);
                    return headersCapability.promise;
                  });
                  messageHandler.on("GetRangeReader", function (data, sink) {
                    (0, _util.assert)(_this24._networkStream);

                    var rangeReader = _this24._networkStream.getRangeReader(data.begin, data.end);

                    if (!rangeReader) {
                      sink.close();
                      return;
                    }

                    sink.onPull = function () {
                      rangeReader.read().then(function (_ref11) {
                        var value = _ref11.value,
                            done = _ref11.done;

                        if (done) {
                          sink.close();
                          return;
                        }

                        (0, _util.assert)((0, _util.isArrayBuffer)(value));
                        sink.enqueue(new Uint8Array(value), 1, [value]);
                      })["catch"](function (reason) {
                        sink.error(reason);
                      });
                    };

                    sink.onCancel = function (reason) {
                      rangeReader.cancel(reason);
                    };
                  });
                  messageHandler.on("GetDoc", function (_ref12) {
                    var pdfInfo = _ref12.pdfInfo;
                    _this24._numPages = pdfInfo.numPages;

                    loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, _this24));
                  });
                  messageHandler.on("DocException", function (ex) {
                    var reason;

                    switch (ex.name) {
                      case "PasswordException":
                        reason = new _util.PasswordException(ex.message, ex.code);
                        break;

                      case "InvalidPDFException":
                        reason = new _util.InvalidPDFException(ex.message);
                        break;

                      case "MissingPDFException":
                        reason = new _util.MissingPDFException(ex.message);
                        break;

                      case "UnexpectedResponseException":
                        reason = new _util.UnexpectedResponseException(ex.message, ex.status);
                        break;

                      case "UnknownErrorException":
                        reason = new _util.UnknownErrorException(ex.message, ex.details);
                        break;
                    }

                    loadingTask._capability.reject(reason);
                  });
                  messageHandler.on("PasswordRequest", function (exception) {
                    _this24._passwordCapability = (0, _util.createPromiseCapability)();

                    if (loadingTask.onPassword) {
                      var updatePassword = function updatePassword(password) {
                        _this24._passwordCapability.resolve({
                          password: password
                        });
                      };

                      try {
                        loadingTask.onPassword(updatePassword, exception.code);
                      } catch (ex) {
                        _this24._passwordCapability.reject(ex);
                      }
                    } else {
                      _this24._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
                    }

                    return _this24._passwordCapability.promise;
                  });
                  messageHandler.on("DataLoaded", function (data) {
                    if (loadingTask.onProgress) {
                      loadingTask.onProgress({
                        loaded: data.length,
                        total: data.length
                      });
                    }

                    _this24.downloadInfoCapability.resolve(data);
                  });
                  messageHandler.on("StartRenderPage", function (data) {
                    if (_this24.destroyed) {
                      return;
                    }

                    var page = _this24.pageCache[data.pageIndex];

                    page._startRenderPage(data.transparency, data.intent);
                  });
                  messageHandler.on("commonobj", function (data) {
                    if (_this24.destroyed) {
                      return;
                    }

                    var _data = _slicedToArray(data, 3),
                        id = _data[0],
                        type = _data[1],
                        exportedData = _data[2];

                    if (_this24.commonObjs.has(id)) {
                      return;
                    }

                    switch (type) {
                      case "Font":
                        var params = _this24._params;

                        if ("error" in exportedData) {
                          var exportedError = exportedData.error;
                          (0, _util.warn)("Error during font loading: ".concat(exportedError));

                          _this24.commonObjs.resolve(id, exportedError);

                          break;
                        }

                        var fontRegistry = null;

                        if (params.pdfBug && globalThis.FontInspector && globalThis.FontInspector.enabled) {
                          fontRegistry = {
                            registerFont: function registerFont(font, url) {
                              globalThis.FontInspector.fontAdded(font, url);
                            }
                          };
                        }

                        var font = new _font_loader.FontFaceObject(exportedData, {
                          isEvalSupported: params.isEvalSupported,
                          disableFontFace: params.disableFontFace,
                          ignoreErrors: params.ignoreErrors,
                          onUnsupportedFeature: _this24._onUnsupportedFeature.bind(_this24),
                          fontRegistry: fontRegistry
                        });

                        _this24.fontLoader.bind(font).then(function () {
                          _this24.commonObjs.resolve(id, font);
                        }, function (reason) {
                          messageHandler.sendWithPromise("FontFallback", {
                            id: id
                          })["finally"](function () {
                            _this24.commonObjs.resolve(id, font);
                          });
                        });

                        break;

                      case "FontPath":
                      case "FontType3Res":
                        _this24.commonObjs.resolve(id, exportedData);

                        break;

                      default:
                        throw new Error("Got unknown common object type ".concat(type));
                    }
                  });
                  messageHandler.on("obj", function (data) {
                    if (_this24.destroyed) {
                      return undefined;
                    }

                    var _data2 = _slicedToArray(data, 4),
                        id = _data2[0],
                        pageIndex = _data2[1],
                        type = _data2[2],
                        imageData = _data2[3];

                    var pageProxy = _this24.pageCache[pageIndex];

                    if (pageProxy.objs.has(id)) {
                      return undefined;
                    }

                    switch (type) {
                      case "JpegStream":
                        return new Promise(function (resolve, reject) {
                          var img = new Image();

                          img.onload = function () {
                            resolve(img);
                          };

                          img.onerror = function () {
                            reject(new Error("Error during JPEG image loading"));
                            (0, _display_utils.releaseImageResources)(img);
                          };

                          img.src = imageData;
                        }).then(function (img) {
                          pageProxy.objs.resolve(id, img);
                        });

                      case "Image":
                        pageProxy.objs.resolve(id, imageData);
                        var MAX_IMAGE_SIZE_TO_STORE = 8000000;

                        if (imageData && "data" in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
                          pageProxy.cleanupAfterRender = true;
                        }

                        break;

                      default:
                        throw new Error("Got unknown object type ".concat(type));
                    }

                    return undefined;
                  });
                  messageHandler.on("DocProgress", function (data) {
                    if (_this24.destroyed) {
                      return;
                    }

                    if (loadingTask.onProgress) {
                      loadingTask.onProgress({
                        loaded: data.loaded,
                        total: data.total
                      });
                    }
                  });
                  messageHandler.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
                  messageHandler.on("JpegDecode", function (data) {
                    if (_this24.destroyed) {
                      return Promise.reject(new Error("Worker was destroyed"));
                    }

                    if (typeof document === "undefined") {
                      return Promise.reject(new Error('"document" is not defined.'));
                    }

                    var _data3 = _slicedToArray(data, 2),
                        imageUrl = _data3[0],
                        components = _data3[1];

                    if (components !== 3 && components !== 1) {
                      return Promise.reject(new Error("Only 3 components or 1 component can be returned"));
                    }

                    return new Promise(function (resolve, reject) {
                      var img = new Image();

                      img.onload = function () {
                        var width = img.width,
                            height = img.height;
                        var size = width * height;
                        var rgbaLength = size * 4;
                        var buf = new Uint8ClampedArray(size * components);
                        var tmpCanvas = document.createElement("canvas");
                        tmpCanvas.width = width;
                        tmpCanvas.height = height;
                        var tmpCtx = tmpCanvas.getContext("2d");
                        tmpCtx.drawImage(img, 0, 0);
                        var data = tmpCtx.getImageData(0, 0, width, height).data;

                        if (components === 3) {
                          for (var i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
                            buf[j] = data[i];
                            buf[j + 1] = data[i + 1];
                            buf[j + 2] = data[i + 2];
                          }
                        } else if (components === 1) {
                          for (var _i5 = 0, _j = 0; _i5 < rgbaLength; _i5 += 4, _j++) {
                            buf[_j] = data[_i5];
                          }
                        }

                        resolve({
                          data: buf,
                          width: width,
                          height: height
                        });
                        (0, _display_utils.releaseImageResources)(img);
                        tmpCanvas.width = 0;
                        tmpCanvas.height = 0;
                        tmpCanvas = null;
                        tmpCtx = null;
                      };

                      img.onerror = function () {
                        reject(new Error("JpegDecode failed to load image"));
                        (0, _display_utils.releaseImageResources)(img);
                      };

                      img.src = imageUrl;
                    });
                  });
                  messageHandler.on("FetchBuiltInCMap", function (data, sink) {
                    if (_this24.destroyed) {
                      sink.error(new Error("Worker was destroyed"));
                      return;
                    }

                    var fetched = false;

                    sink.onPull = function () {
                      if (fetched) {
                        sink.close();
                        return;
                      }

                      fetched = true;

                      _this24.CMapReaderFactory.fetch(data).then(function (builtInCMap) {
                        sink.enqueue(builtInCMap, 1, [builtInCMap.cMapData.buffer]);
                      })["catch"](function (reason) {
                        sink.error(reason);
                      });
                    };
                  });
                }
              }, {
                key: "_onUnsupportedFeature",
                value: function _onUnsupportedFeature(_ref13) {
                  var featureId = _ref13.featureId;

                  if (this.destroyed) {
                    return;
                  }

                  if (this.loadingTask.onUnsupportedFeature) {
                    this.loadingTask.onUnsupportedFeature(featureId);
                  }
                }
              }, {
                key: "getData",
                value: function getData() {
                  return this.messageHandler.sendWithPromise("GetData", null);
                }
              }, {
                key: "getPage",
                value: function getPage(pageNumber) {
                  var _this25 = this;

                  if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
                    return Promise.reject(new Error("Invalid page request"));
                  }

                  var pageIndex = pageNumber - 1;

                  if (pageIndex in this.pagePromises) {
                    return this.pagePromises[pageIndex];
                  }

                  var promise = this.messageHandler.sendWithPromise("GetPage", {
                    pageIndex: pageIndex
                  }).then(function (pageInfo) {
                    if (_this25.destroyed) {
                      throw new Error("Transport destroyed");
                    }

                    var page = new PDFPageProxy(pageIndex, pageInfo, _this25, _this25._params.pdfBug);
                    _this25.pageCache[pageIndex] = page;
                    return page;
                  });
                  this.pagePromises[pageIndex] = promise;
                  return promise;
                }
              }, {
                key: "getPageIndex",
                value: function getPageIndex(ref) {
                  return this.messageHandler.sendWithPromise("GetPageIndex", {
                    ref: ref
                  })["catch"](function (reason) {
                    return Promise.reject(new Error(reason));
                  });
                }
              }, {
                key: "getAnnotations",
                value: function getAnnotations(pageIndex, intent) {
                  return this.messageHandler.sendWithPromise("GetAnnotations", {
                    pageIndex: pageIndex,
                    intent: intent
                  });
                }
              }, {
                key: "getDestinations",
                value: function getDestinations() {
                  return this.messageHandler.sendWithPromise("GetDestinations", null);
                }
              }, {
                key: "getDestination",
                value: function getDestination(id) {
                  if (typeof id !== "string") {
                    return Promise.reject(new Error("Invalid destination request."));
                  }

                  return this.messageHandler.sendWithPromise("GetDestination", {
                    id: id
                  });
                }
              }, {
                key: "getPageLabels",
                value: function getPageLabels() {
                  return this.messageHandler.sendWithPromise("GetPageLabels", null);
                }
              }, {
                key: "getPageLayout",
                value: function getPageLayout() {
                  return this.messageHandler.sendWithPromise("GetPageLayout", null);
                }
              }, {
                key: "getPageMode",
                value: function getPageMode() {
                  return this.messageHandler.sendWithPromise("GetPageMode", null);
                }
              }, {
                key: "getViewerPreferences",
                value: function getViewerPreferences() {
                  return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
                }
              }, {
                key: "getOpenAction",
                value: function getOpenAction() {
                  return this.messageHandler.sendWithPromise("GetOpenAction", null);
                }
              }, {
                key: "getAttachments",
                value: function getAttachments() {
                  return this.messageHandler.sendWithPromise("GetAttachments", null);
                }
              }, {
                key: "getJavaScript",
                value: function getJavaScript() {
                  return this.messageHandler.sendWithPromise("GetJavaScript", null);
                }
              }, {
                key: "getOutline",
                value: function getOutline() {
                  return this.messageHandler.sendWithPromise("GetOutline", null);
                }
              }, {
                key: "getPermissions",
                value: function getPermissions() {
                  return this.messageHandler.sendWithPromise("GetPermissions", null);
                }
              }, {
                key: "getMetadata",
                value: function getMetadata() {
                  var _this26 = this;

                  return this.messageHandler.sendWithPromise("GetMetadata", null).then(function (results) {
                    return {
                      info: results[0],
                      metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
                      contentDispositionFilename: _this26._fullReader ? _this26._fullReader.filename : null
                    };
                  });
                }
              }, {
                key: "getStats",
                value: function getStats() {
                  return this.messageHandler.sendWithPromise("GetStats", null);
                }
              }, {
                key: "startCleanup",
                value: function startCleanup() {
                  var _this27 = this;

                  return this.messageHandler.sendWithPromise("Cleanup", null).then(function () {
                    for (var i = 0, ii = _this27.pageCache.length; i < ii; i++) {
                      var page = _this27.pageCache[i];

                      if (page) {
                        var cleanupSuccessful = page.cleanup();

                        if (!cleanupSuccessful) {
                          throw new Error("startCleanup: Page ".concat(i + 1, " is currently rendering."));
                        }
                      }
                    }

                    _this27.commonObjs.clear();

                    _this27.fontLoader.clear();
                  });
                }
              }, {
                key: "loadingParams",
                get: function get() {
                  var params = this._params;
                  return (0, _util.shadow)(this, "loadingParams", {
                    disableAutoFetch: params.disableAutoFetch,
                    disableCreateObjectURL: params.disableCreateObjectURL,
                    disableFontFace: params.disableFontFace,
                    nativeImageDecoderSupport: params.nativeImageDecoderSupport
                  });
                }
              }]);

              return WorkerTransport;
            }();

            var PDFObjects = /*#__PURE__*/function () {
              function PDFObjects() {
                _classCallCheck(this, PDFObjects);

                this._objs = Object.create(null);
              }

              _createClass(PDFObjects, [{
                key: "_ensureObj",
                value: function _ensureObj(objId) {
                  if (this._objs[objId]) {
                    return this._objs[objId];
                  }

                  return this._objs[objId] = {
                    capability: (0, _util.createPromiseCapability)(),
                    data: null,
                    resolved: false
                  };
                }
              }, {
                key: "get",
                value: function get(objId) {
                  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                  if (callback) {
                    this._ensureObj(objId).capability.promise.then(callback);

                    return null;
                  }

                  var obj = this._objs[objId];

                  if (!obj || !obj.resolved) {
                    throw new Error("Requesting object that isn't resolved yet ".concat(objId, "."));
                  }

                  return obj.data;
                }
              }, {
                key: "has",
                value: function has(objId) {
                  var obj = this._objs[objId];
                  return obj ? obj.resolved : false;
                }
              }, {
                key: "resolve",
                value: function resolve(objId, data) {
                  var obj = this._ensureObj(objId);

                  obj.resolved = true;
                  obj.data = data;
                  obj.capability.resolve(data);
                }
              }, {
                key: "clear",
                value: function clear() {
                  for (var objId in this._objs) {
                    var data = this._objs[objId].data;

                    if (typeof Image !== "undefined" && data instanceof Image) {
                      (0, _display_utils.releaseImageResources)(data);
                    }
                  }

                  this._objs = Object.create(null);
                }
              }]);

              return PDFObjects;
            }();

            var RenderTask = /*#__PURE__*/function () {
              function RenderTask(internalRenderTask) {
                _classCallCheck(this, RenderTask);

                this._internalRenderTask = internalRenderTask;
                this.onContinue = null;
              }

              _createClass(RenderTask, [{
                key: "cancel",
                value: function cancel() {
                  this._internalRenderTask.cancel();
                }
              }, {
                key: "then",
                value: function then(onFulfilled, onRejected) {
                  throw new Error("Removed API method: " + "RenderTask.then, use the `promise` getter instead.");
                }
              }, {
                key: "promise",
                get: function get() {
                  return this._internalRenderTask.capability.promise;
                }
              }]);

              return RenderTask;
            }();

            var InternalRenderTask = function InternalRenderTaskClosure() {
              var canvasInRendering = new WeakSet();

              var InternalRenderTask = /*#__PURE__*/function () {
                function InternalRenderTask(_ref14) {
                  var callback = _ref14.callback,
                      params = _ref14.params,
                      objs = _ref14.objs,
                      commonObjs = _ref14.commonObjs,
                      operatorList = _ref14.operatorList,
                      pageIndex = _ref14.pageIndex,
                      canvasFactory = _ref14.canvasFactory,
                      webGLContext = _ref14.webGLContext,
                      _ref14$useRequestAnim = _ref14.useRequestAnimationFrame,
                      useRequestAnimationFrame = _ref14$useRequestAnim === void 0 ? false : _ref14$useRequestAnim,
                      _ref14$pdfBug = _ref14.pdfBug,
                      pdfBug = _ref14$pdfBug === void 0 ? false : _ref14$pdfBug;

                  _classCallCheck(this, InternalRenderTask);

                  this.callback = callback;
                  this.params = params;
                  this.objs = objs;
                  this.commonObjs = commonObjs;
                  this.operatorListIdx = null;
                  this.operatorList = operatorList;
                  this._pageIndex = pageIndex;
                  this.canvasFactory = canvasFactory;
                  this.webGLContext = webGLContext;
                  this._pdfBug = pdfBug;
                  this.running = false;
                  this.graphicsReadyCallback = null;
                  this.graphicsReady = false;
                  this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
                  this.cancelled = false;
                  this.capability = (0, _util.createPromiseCapability)();
                  this.task = new RenderTask(this);
                  this._continueBound = this._continue.bind(this);
                  this._scheduleNextBound = this._scheduleNext.bind(this);
                  this._nextBound = this._next.bind(this);
                  this._canvas = params.canvasContext.canvas;
                }

                _createClass(InternalRenderTask, [{
                  key: "initializeGraphics",
                  value: function initializeGraphics() {
                    var transparency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                    if (this.cancelled) {
                      return;
                    }

                    if (this._canvas) {
                      if (canvasInRendering.has(this._canvas)) {
                        throw new Error("Cannot use the same canvas during multiple render() operations. " + "Use different canvas or ensure previous operations were " + "cancelled or completed.");
                      }

                      canvasInRendering.add(this._canvas);
                    }

                    if (this._pdfBug && globalThis.StepperManager && globalThis.StepperManager.enabled) {
                      this.stepper = globalThis.StepperManager.create(this._pageIndex);
                      this.stepper.init(this.operatorList);
                      this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
                    }

                    var _this$params = this.params,
                        canvasContext = _this$params.canvasContext,
                        viewport = _this$params.viewport,
                        transform = _this$params.transform,
                        imageLayer = _this$params.imageLayer,
                        background = _this$params.background;
                    this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext, imageLayer);
                    this.gfx.beginDrawing({
                      transform: transform,
                      viewport: viewport,
                      transparency: transparency,
                      background: background
                    });
                    this.operatorListIdx = 0;
                    this.graphicsReady = true;

                    if (this.graphicsReadyCallback) {
                      this.graphicsReadyCallback();
                    }
                  }
                }, {
                  key: "cancel",
                  value: function cancel() {
                    var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    this.running = false;
                    this.cancelled = true;

                    if (this.gfx) {
                      this.gfx.endDrawing();
                    }

                    if (this._canvas) {
                      canvasInRendering["delete"](this._canvas);
                    }

                    this.callback(error || new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this._pageIndex + 1), "canvas"));
                  }
                }, {
                  key: "operatorListChanged",
                  value: function operatorListChanged() {
                    if (!this.graphicsReady) {
                      if (!this.graphicsReadyCallback) {
                        this.graphicsReadyCallback = this._continueBound;
                      }

                      return;
                    }

                    if (this.stepper) {
                      this.stepper.updateOperatorList(this.operatorList);
                    }

                    if (this.running) {
                      return;
                    }

                    this._continue();
                  }
                }, {
                  key: "_continue",
                  value: function _continue() {
                    this.running = true;

                    if (this.cancelled) {
                      return;
                    }

                    if (this.task.onContinue) {
                      this.task.onContinue(this._scheduleNextBound);
                    } else {
                      this._scheduleNext();
                    }
                  }
                }, {
                  key: "_scheduleNext",
                  value: function _scheduleNext() {
                    var _this28 = this;

                    if (this._useRequestAnimationFrame) {
                      window.requestAnimationFrame(function () {
                        _this28._nextBound()["catch"](_this28.cancel.bind(_this28));
                      });
                    } else {
                      Promise.resolve().then(this._nextBound)["catch"](this.cancel.bind(this));
                    }
                  }
                }, {
                  key: "_next",
                  value: function () {
                    var _next2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              if (!this.cancelled) {
                                _context2.next = 2;
                                break;
                              }

                              return _context2.abrupt("return");

                            case 2:
                              this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);

                              if (this.operatorListIdx === this.operatorList.argsArray.length) {
                                this.running = false;

                                if (this.operatorList.lastChunk) {
                                  this.gfx.endDrawing();

                                  if (this._canvas) {
                                    canvasInRendering["delete"](this._canvas);
                                  }

                                  this.callback();
                                }
                              }

                            case 4:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, this);
                    }));

                    function _next() {
                      return _next2.apply(this, arguments);
                    }

                    return _next;
                  }()
                }]);

                return InternalRenderTask;
              }();

              return InternalRenderTask;
            }();

            var version = '2.4.456';
            exports.version = version;
            var build = '228a591c';
            exports.build = build;
            /***/
          },
          /* 4 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.addLinkAttributes = addLinkAttributes;
            exports.getFilenameFromUrl = getFilenameFromUrl;
            exports.isFetchSupported = isFetchSupported;
            exports.isValidFetchUrl = isValidFetchUrl;
            exports.loadScript = loadScript;
            exports.deprecated = deprecated;
            exports.releaseImageResources = releaseImageResources;
            exports.PDFDateString = exports.StatTimer = exports.DOMSVGFactory = exports.DOMCMapReaderFactory = exports.DOMCanvasFactory = exports.DEFAULT_LINK_REL = exports.LinkTarget = exports.RenderingCancelledException = exports.PageViewport = void 0;

            var _util = __w_pdfjs_require__(1);

            var DEFAULT_LINK_REL = "noopener noreferrer nofollow";
            exports.DEFAULT_LINK_REL = DEFAULT_LINK_REL;
            var SVG_NS = "http://www.w3.org/2000/svg";

            var DOMCanvasFactory = /*#__PURE__*/function () {
              function DOMCanvasFactory() {
                _classCallCheck(this, DOMCanvasFactory);
              }

              _createClass(DOMCanvasFactory, [{
                key: "create",
                value: function create(width, height) {
                  if (width <= 0 || height <= 0) {
                    throw new Error("Invalid canvas size");
                  }

                  var canvas = document.createElement("canvas");
                  var context = canvas.getContext("2d");
                  canvas.width = width;
                  canvas.height = height;
                  return {
                    canvas: canvas,
                    context: context
                  };
                }
              }, {
                key: "reset",
                value: function reset(canvasAndContext, width, height) {
                  if (!canvasAndContext.canvas) {
                    throw new Error("Canvas is not specified");
                  }

                  if (width <= 0 || height <= 0) {
                    throw new Error("Invalid canvas size");
                  }

                  canvasAndContext.canvas.width = width;
                  canvasAndContext.canvas.height = height;
                }
              }, {
                key: "destroy",
                value: function destroy(canvasAndContext) {
                  if (!canvasAndContext.canvas) {
                    throw new Error("Canvas is not specified");
                  }

                  canvasAndContext.canvas.width = 0;
                  canvasAndContext.canvas.height = 0;
                  canvasAndContext.canvas = null;
                  canvasAndContext.context = null;
                }
              }]);

              return DOMCanvasFactory;
            }();

            exports.DOMCanvasFactory = DOMCanvasFactory;

            var DOMCMapReaderFactory = /*#__PURE__*/function () {
              function DOMCMapReaderFactory(_ref15) {
                var _ref15$baseUrl = _ref15.baseUrl,
                    baseUrl = _ref15$baseUrl === void 0 ? null : _ref15$baseUrl,
                    _ref15$isCompressed = _ref15.isCompressed,
                    isCompressed = _ref15$isCompressed === void 0 ? false : _ref15$isCompressed;

                _classCallCheck(this, DOMCMapReaderFactory);

                this.baseUrl = baseUrl;
                this.isCompressed = isCompressed;
              }

              _createClass(DOMCMapReaderFactory, [{
                key: "fetch",
                value: function (_fetch) {
                  function fetch(_x) {
                    return _fetch.apply(this, arguments);
                  }

                  fetch.toString = function () {
                    return _fetch.toString();
                  };

                  return fetch;
                }( /*#__PURE__*/function () {
                  var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref16) {
                    var _this29 = this;

                    var name, url, compressionType;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            name = _ref16.name;

                            if (this.baseUrl) {
                              _context4.next = 3;
                              break;
                            }

                            throw new Error('The CMap "baseUrl" parameter must be specified, ensure that ' + 'the "cMapUrl" and "cMapPacked" API parameters are provided.');

                          case 3:
                            if (name) {
                              _context4.next = 5;
                              break;
                            }

                            throw new Error("CMap name must be specified.");

                          case 5:
                            url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
                            compressionType = this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE;

                            if (!(isFetchSupported() && isValidFetchUrl(url, document.baseURI))) {
                              _context4.next = 9;
                              break;
                            }

                            return _context4.abrupt("return", fetch(url).then( /*#__PURE__*/function () {
                              var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(response) {
                                var cMapData;
                                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                  while (1) {
                                    switch (_context3.prev = _context3.next) {
                                      case 0:
                                        if (response.ok) {
                                          _context3.next = 2;
                                          break;
                                        }

                                        throw new Error(response.statusText);

                                      case 2:
                                        if (!_this29.isCompressed) {
                                          _context3.next = 10;
                                          break;
                                        }

                                        _context3.t0 = Uint8Array;
                                        _context3.next = 6;
                                        return response.arrayBuffer();

                                      case 6:
                                        _context3.t1 = _context3.sent;
                                        cMapData = new _context3.t0(_context3.t1);
                                        _context3.next = 15;
                                        break;

                                      case 10:
                                        _context3.t2 = (0, _util.stringToBytes);
                                        _context3.next = 13;
                                        return response.text();

                                      case 13:
                                        _context3.t3 = _context3.sent;
                                        cMapData = (0, _context3.t2)(_context3.t3);

                                      case 15:
                                        return _context3.abrupt("return", {
                                          cMapData: cMapData,
                                          compressionType: compressionType
                                        });

                                      case 16:
                                      case "end":
                                        return _context3.stop();
                                    }
                                  }
                                }, _callee3);
                              }));

                              return function (_x3) {
                                return _ref18.apply(this, arguments);
                              };
                            }())["catch"](function (reason) {
                              throw new Error("Unable to load ".concat(_this29.isCompressed ? "binary " : "") + "CMap at: ".concat(url));
                            }));

                          case 9:
                            return _context4.abrupt("return", new Promise(function (resolve, reject) {
                              var request = new XMLHttpRequest();
                              request.open("GET", url, true);

                              if (_this29.isCompressed) {
                                request.responseType = "arraybuffer";
                              }

                              request.onreadystatechange = function () {
                                if (request.readyState !== XMLHttpRequest.DONE) {
                                  return;
                                }

                                if (request.status === 200 || request.status === 0) {
                                  var cMapData;

                                  if (_this29.isCompressed && request.response) {
                                    cMapData = new Uint8Array(request.response);
                                  } else if (!_this29.isCompressed && request.responseText) {
                                    cMapData = (0, _util.stringToBytes)(request.responseText);
                                  }

                                  if (cMapData) {
                                    resolve({
                                      cMapData: cMapData,
                                      compressionType: compressionType
                                    });
                                    return;
                                  }
                                }

                                reject(new Error(request.statusText));
                              };

                              request.send(null);
                            })["catch"](function (reason) {
                              throw new Error("Unable to load ".concat(_this29.isCompressed ? "binary " : "") + "CMap at: ".concat(url));
                            }));

                          case 10:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, this);
                  }));

                  return function (_x2) {
                    return _ref17.apply(this, arguments);
                  };
                }())
              }]);

              return DOMCMapReaderFactory;
            }();

            exports.DOMCMapReaderFactory = DOMCMapReaderFactory;

            var DOMSVGFactory = /*#__PURE__*/function () {
              function DOMSVGFactory() {
                _classCallCheck(this, DOMSVGFactory);
              }

              _createClass(DOMSVGFactory, [{
                key: "create",
                value: function create(width, height) {
                  (0, _util.assert)(width > 0 && height > 0, "Invalid SVG dimensions");
                  var svg = document.createElementNS(SVG_NS, "svg:svg");
                  svg.setAttribute("version", "1.1");
                  svg.setAttribute("width", width + "px");
                  svg.setAttribute("height", height + "px");
                  svg.setAttribute("preserveAspectRatio", "none");
                  svg.setAttribute("viewBox", "0 0 " + width + " " + height);
                  return svg;
                }
              }, {
                key: "createElement",
                value: function createElement(type) {
                  (0, _util.assert)(typeof type === "string", "Invalid SVG element type");
                  return document.createElementNS(SVG_NS, type);
                }
              }]);

              return DOMSVGFactory;
            }();

            exports.DOMSVGFactory = DOMSVGFactory;

            var PageViewport = /*#__PURE__*/function () {
              function PageViewport(_ref19) {
                var viewBox = _ref19.viewBox,
                    scale = _ref19.scale,
                    rotation = _ref19.rotation,
                    _ref19$offsetX = _ref19.offsetX,
                    offsetX = _ref19$offsetX === void 0 ? 0 : _ref19$offsetX,
                    _ref19$offsetY = _ref19.offsetY,
                    offsetY = _ref19$offsetY === void 0 ? 0 : _ref19$offsetY,
                    _ref19$dontFlip = _ref19.dontFlip,
                    dontFlip = _ref19$dontFlip === void 0 ? false : _ref19$dontFlip;

                _classCallCheck(this, PageViewport);

                this.viewBox = viewBox;
                this.scale = scale;
                this.rotation = rotation;
                this.offsetX = offsetX;
                this.offsetY = offsetY;
                var centerX = (viewBox[2] + viewBox[0]) / 2;
                var centerY = (viewBox[3] + viewBox[1]) / 2;
                var rotateA, rotateB, rotateC, rotateD;
                rotation = rotation % 360;
                rotation = rotation < 0 ? rotation + 360 : rotation;

                switch (rotation) {
                  case 180:
                    rotateA = -1;
                    rotateB = 0;
                    rotateC = 0;
                    rotateD = 1;
                    break;

                  case 90:
                    rotateA = 0;
                    rotateB = 1;
                    rotateC = 1;
                    rotateD = 0;
                    break;

                  case 270:
                    rotateA = 0;
                    rotateB = -1;
                    rotateC = -1;
                    rotateD = 0;
                    break;

                  default:
                    rotateA = 1;
                    rotateB = 0;
                    rotateC = 0;
                    rotateD = -1;
                    break;
                }

                if (dontFlip) {
                  rotateC = -rotateC;
                  rotateD = -rotateD;
                }

                var offsetCanvasX, offsetCanvasY;
                var width, height;

                if (rotateA === 0) {
                  offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
                  offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
                  width = Math.abs(viewBox[3] - viewBox[1]) * scale;
                  height = Math.abs(viewBox[2] - viewBox[0]) * scale;
                } else {
                  offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
                  offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
                  width = Math.abs(viewBox[2] - viewBox[0]) * scale;
                  height = Math.abs(viewBox[3] - viewBox[1]) * scale;
                }

                this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
                this.width = width;
                this.height = height;
              }

              _createClass(PageViewport, [{
                key: "clone",
                value: function clone() {
                  var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      _ref20$scale = _ref20.scale,
                      scale = _ref20$scale === void 0 ? this.scale : _ref20$scale,
                      _ref20$rotation = _ref20.rotation,
                      rotation = _ref20$rotation === void 0 ? this.rotation : _ref20$rotation,
                      _ref20$offsetX = _ref20.offsetX,
                      offsetX = _ref20$offsetX === void 0 ? this.offsetX : _ref20$offsetX,
                      _ref20$offsetY = _ref20.offsetY,
                      offsetY = _ref20$offsetY === void 0 ? this.offsetY : _ref20$offsetY,
                      _ref20$dontFlip = _ref20.dontFlip,
                      dontFlip = _ref20$dontFlip === void 0 ? false : _ref20$dontFlip;

                  return new PageViewport({
                    viewBox: this.viewBox.slice(),
                    scale: scale,
                    rotation: rotation,
                    offsetX: offsetX,
                    offsetY: offsetY,
                    dontFlip: dontFlip
                  });
                }
              }, {
                key: "convertToViewportPoint",
                value: function convertToViewportPoint(x, y) {
                  return _util.Util.applyTransform([x, y], this.transform);
                }
              }, {
                key: "convertToViewportRectangle",
                value: function convertToViewportRectangle(rect) {
                  var topLeft = _util.Util.applyTransform([rect[0], rect[1]], this.transform);

                  var bottomRight = _util.Util.applyTransform([rect[2], rect[3]], this.transform);

                  return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
                }
              }, {
                key: "convertToPdfPoint",
                value: function convertToPdfPoint(x, y) {
                  return _util.Util.applyInverseTransform([x, y], this.transform);
                }
              }]);

              return PageViewport;
            }();

            exports.PageViewport = PageViewport;

            var RenderingCancelledException = /*#__PURE__*/function (_util$BaseException) {
              _inherits(RenderingCancelledException, _util$BaseException);

              var _super8 = _createSuper(RenderingCancelledException);

              function RenderingCancelledException(msg, type) {
                var _this30;

                _classCallCheck(this, RenderingCancelledException);

                _this30 = _super8.call(this, msg);
                _this30.type = type;
                return _this30;
              }

              return RenderingCancelledException;
            }(_util.BaseException);

            exports.RenderingCancelledException = RenderingCancelledException;
            var LinkTarget = {
              NONE: 0,
              SELF: 1,
              BLANK: 2,
              PARENT: 3,
              TOP: 4
            };
            exports.LinkTarget = LinkTarget;

            function addLinkAttributes(link) {
              var _ref21 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                  url = _ref21.url,
                  target = _ref21.target,
                  rel = _ref21.rel,
                  _ref21$enabled = _ref21.enabled,
                  enabled = _ref21$enabled === void 0 ? true : _ref21$enabled;

              (0, _util.assert)(url && typeof url === "string", 'addLinkAttributes: A valid "url" parameter must provided.');
              var urlNullRemoved = (0, _util.removeNullCharacters)(url);

              if (enabled) {
                link.href = link.title = urlNullRemoved;
              } else {
                link.href = "";
                link.title = "Disabled: ".concat(urlNullRemoved);

                link.onclick = function () {
                  return false;
                };
              }

              var targetStr = "";

              switch (target) {
                case LinkTarget.NONE:
                  break;

                case LinkTarget.SELF:
                  targetStr = "_self";
                  break;

                case LinkTarget.BLANK:
                  targetStr = "_blank";
                  break;

                case LinkTarget.PARENT:
                  targetStr = "_parent";
                  break;

                case LinkTarget.TOP:
                  targetStr = "_top";
                  break;
              }

              link.target = targetStr;
              link.rel = typeof rel === "string" ? rel : DEFAULT_LINK_REL;
            }

            function getFilenameFromUrl(url) {
              var anchor = url.indexOf("#");
              var query = url.indexOf("?");
              var end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
              return url.substring(url.lastIndexOf("/", end) + 1, end);
            }

            var StatTimer = /*#__PURE__*/function () {
              function StatTimer() {
                _classCallCheck(this, StatTimer);

                this.started = Object.create(null);
                this.times = [];
              }

              _createClass(StatTimer, [{
                key: "time",
                value: function time(name) {
                  if (name in this.started) {
                    (0, _util.warn)("Timer is already running for ".concat(name));
                  }

                  this.started[name] = Date.now();
                }
              }, {
                key: "timeEnd",
                value: function timeEnd(name) {
                  if (!(name in this.started)) {
                    (0, _util.warn)("Timer has not been started for ".concat(name));
                  }

                  this.times.push({
                    name: name,
                    start: this.started[name],
                    end: Date.now()
                  });
                  delete this.started[name];
                }
              }, {
                key: "toString",
                value: function toString() {
                  var outBuf = [];
                  var longest = 0;

                  var _iterator5 = _createForOfIteratorHelper(this.times),
                      _step5;

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var time = _step5.value;
                      var name = time.name;

                      if (name.length > longest) {
                        longest = name.length;
                      }
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }

                  var _iterator6 = _createForOfIteratorHelper(this.times),
                      _step6;

                  try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                      var _time = _step6.value;
                      var duration = _time.end - _time.start;
                      outBuf.push("".concat(_time.name.padEnd(longest), " ").concat(duration, "ms\n"));
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }

                  return outBuf.join("");
                }
              }]);

              return StatTimer;
            }();

            exports.StatTimer = StatTimer;

            function isFetchSupported() {
              return typeof fetch !== "undefined" && typeof Response !== "undefined" && "body" in Response.prototype && typeof ReadableStream !== "undefined";
            }

            function isValidFetchUrl(url, baseUrl) {
              try {
                var _ref22 = baseUrl ? new URL(url, baseUrl) : new URL(url),
                    protocol = _ref22.protocol;

                return protocol === "http:" || protocol === "https:";
              } catch (ex) {
                return false;
              }
            }

            function loadScript(src) {
              return new Promise(function (resolve, reject) {
                var script = document.createElement("script");
                script.src = src;
                script.onload = resolve;

                script.onerror = function () {
                  reject(new Error("Cannot load script at: ".concat(script.src)));
                };

                (document.head || document.documentElement).appendChild(script);
              });
            }

            function deprecated(details) {
              console.log("Deprecated API usage: " + details);
            }

            function releaseImageResources(img) {
              (0, _util.assert)(img instanceof Image, "Invalid `img` parameter.");
              var url = img.src;

              if (typeof url === "string" && url.startsWith("blob:") && URL.revokeObjectURL) {
                URL.revokeObjectURL(url);
              }

              img.removeAttribute("src");
            }

            var pdfDateStringRegex;

            var PDFDateString = /*#__PURE__*/function () {
              function PDFDateString() {
                _classCallCheck(this, PDFDateString);
              }

              _createClass(PDFDateString, null, [{
                key: "toDateObject",
                value: function toDateObject(input) {
                  if (!input || !(0, _util.isString)(input)) {
                    return null;
                  }

                  if (!pdfDateStringRegex) {
                    pdfDateStringRegex = new RegExp("^D:" + "(\\d{4})" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "([Z|+|-])?" + "(\\d{2})?" + "'?" + "(\\d{2})?" + "'?");
                  }

                  var matches = pdfDateStringRegex.exec(input);

                  if (!matches) {
                    return null;
                  }

                  var year = parseInt(matches[1], 10);
                  var month = parseInt(matches[2], 10);
                  month = month >= 1 && month <= 12 ? month - 1 : 0;
                  var day = parseInt(matches[3], 10);
                  day = day >= 1 && day <= 31 ? day : 1;
                  var hour = parseInt(matches[4], 10);
                  hour = hour >= 0 && hour <= 23 ? hour : 0;
                  var minute = parseInt(matches[5], 10);
                  minute = minute >= 0 && minute <= 59 ? minute : 0;
                  var second = parseInt(matches[6], 10);
                  second = second >= 0 && second <= 59 ? second : 0;
                  var universalTimeRelation = matches[7] || "Z";
                  var offsetHour = parseInt(matches[8], 10);
                  offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
                  var offsetMinute = parseInt(matches[9], 10) || 0;
                  offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;

                  if (universalTimeRelation === "-") {
                    hour += offsetHour;
                    minute += offsetMinute;
                  } else if (universalTimeRelation === "+") {
                    hour -= offsetHour;
                    minute -= offsetMinute;
                  }

                  return new Date(Date.UTC(year, month, day, hour, minute, second));
                }
              }]);

              return PDFDateString;
            }();

            exports.PDFDateString = PDFDateString;
            /***/
          },
          /* 5 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.FontLoader = exports.FontFaceObject = void 0;

            var _util = __w_pdfjs_require__(1);

            var BaseFontLoader = /*#__PURE__*/function () {
              function BaseFontLoader(_ref23) {
                var docId = _ref23.docId,
                    onUnsupportedFeature = _ref23.onUnsupportedFeature;

                _classCallCheck(this, BaseFontLoader);

                if (this.constructor === BaseFontLoader) {
                  (0, _util.unreachable)("Cannot initialize BaseFontLoader.");
                }

                this.docId = docId;
                this._onUnsupportedFeature = onUnsupportedFeature;
                this.nativeFontFaces = [];
                this.styleElement = null;
              }

              _createClass(BaseFontLoader, [{
                key: "addNativeFontFace",
                value: function addNativeFontFace(nativeFontFace) {
                  this.nativeFontFaces.push(nativeFontFace);
                  document.fonts.add(nativeFontFace);
                }
              }, {
                key: "insertRule",
                value: function insertRule(rule) {
                  var styleElement = this.styleElement;

                  if (!styleElement) {
                    styleElement = this.styleElement = document.createElement("style");
                    styleElement.id = "PDFJS_FONT_STYLE_TAG_".concat(this.docId);
                    document.documentElement.getElementsByTagName("head")[0].appendChild(styleElement);
                  }

                  var styleSheet = styleElement.sheet;
                  styleSheet.insertRule(rule, styleSheet.cssRules.length);
                }
              }, {
                key: "clear",
                value: function clear() {
                  this.nativeFontFaces.forEach(function (nativeFontFace) {
                    document.fonts["delete"](nativeFontFace);
                  });
                  this.nativeFontFaces.length = 0;

                  if (this.styleElement) {
                    this.styleElement.remove();
                    this.styleElement = null;
                  }
                }
              }, {
                key: "bind",
                value: function () {
                  var _bind = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(font) {
                    var _this31 = this;

                    var nativeFontFace, rule;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!(font.attached || font.missingFile)) {
                              _context5.next = 2;
                              break;
                            }

                            return _context5.abrupt("return");

                          case 2:
                            font.attached = true;

                            if (!this.isFontLoadingAPISupported) {
                              _context5.next = 19;
                              break;
                            }

                            nativeFontFace = font.createNativeFontFace();

                            if (!nativeFontFace) {
                              _context5.next = 18;
                              break;
                            }

                            this.addNativeFontFace(nativeFontFace);
                            _context5.prev = 7;
                            _context5.next = 10;
                            return nativeFontFace.loaded;

                          case 10:
                            _context5.next = 18;
                            break;

                          case 12:
                            _context5.prev = 12;
                            _context5.t0 = _context5["catch"](7);

                            this._onUnsupportedFeature({
                              featureId: _util.UNSUPPORTED_FEATURES.font
                            });

                            (0, _util.warn)("Failed to load font '".concat(nativeFontFace.family, "': '").concat(_context5.t0, "'."));
                            font.disableFontFace = true;
                            throw _context5.t0;

                          case 18:
                            return _context5.abrupt("return");

                          case 19:
                            rule = font.createFontFaceRule();

                            if (!rule) {
                              _context5.next = 26;
                              break;
                            }

                            this.insertRule(rule);

                            if (!this.isSyncFontLoadingSupported) {
                              _context5.next = 24;
                              break;
                            }

                            return _context5.abrupt("return");

                          case 24:
                            _context5.next = 26;
                            return new Promise(function (resolve) {
                              var request = _this31._queueLoadingCallback(resolve);

                              _this31._prepareFontLoadEvent([rule], [font], request);
                            });

                          case 26:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this, [[7, 12]]);
                  }));

                  function bind(_x4) {
                    return _bind.apply(this, arguments);
                  }

                  return bind;
                }()
              }, {
                key: "_queueLoadingCallback",
                value: function _queueLoadingCallback(callback) {
                  (0, _util.unreachable)("Abstract method `_queueLoadingCallback`.");
                }
              }, {
                key: "_prepareFontLoadEvent",
                value: function _prepareFontLoadEvent(rules, fontsToLoad, request) {
                  (0, _util.unreachable)("Abstract method `_prepareFontLoadEvent`.");
                }
              }, {
                key: "isFontLoadingAPISupported",
                get: function get() {
                  var supported = typeof document !== "undefined" && !!document.fonts;
                  return (0, _util.shadow)(this, "isFontLoadingAPISupported", supported);
                }
              }, {
                key: "isSyncFontLoadingSupported",
                get: function get() {
                  (0, _util.unreachable)("Abstract method `isSyncFontLoadingSupported`.");
                }
              }, {
                key: "_loadTestFont",
                get: function get() {
                  (0, _util.unreachable)("Abstract method `_loadTestFont`.");
                }
              }]);

              return BaseFontLoader;
            }();

            var FontLoader;
            exports.FontLoader = FontLoader;
            {
              exports.FontLoader = FontLoader = /*#__PURE__*/function (_BaseFontLoader) {
                _inherits(GenericFontLoader, _BaseFontLoader);

                var _super9 = _createSuper(GenericFontLoader);

                function GenericFontLoader(docId) {
                  var _this32;

                  _classCallCheck(this, GenericFontLoader);

                  _this32 = _super9.call(this, docId);
                  _this32.loadingContext = {
                    requests: [],
                    nextRequestId: 0
                  };
                  _this32.loadTestFontId = 0;
                  return _this32;
                }

                _createClass(GenericFontLoader, [{
                  key: "_queueLoadingCallback",
                  value: function _queueLoadingCallback(callback) {
                    function completeRequest() {
                      (0, _util.assert)(!request.done, "completeRequest() cannot be called twice.");
                      request.done = true;

                      while (context.requests.length > 0 && context.requests[0].done) {
                        var otherRequest = context.requests.shift();
                        setTimeout(otherRequest.callback, 0);
                      }
                    }

                    var context = this.loadingContext;
                    var request = {
                      id: "pdfjs-font-loading-".concat(context.nextRequestId++),
                      done: false,
                      complete: completeRequest,
                      callback: callback
                    };
                    context.requests.push(request);
                    return request;
                  }
                }, {
                  key: "_prepareFontLoadEvent",
                  value: function _prepareFontLoadEvent(rules, fonts, request) {
                    function int32(data, offset) {
                      return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
                    }

                    function spliceString(s, offset, remove, insert) {
                      var chunk1 = s.substring(0, offset);
                      var chunk2 = s.substring(offset + remove);
                      return chunk1 + insert + chunk2;
                    }

                    var i, ii;
                    var canvas = document.createElement("canvas");
                    canvas.width = 1;
                    canvas.height = 1;
                    var ctx = canvas.getContext("2d");
                    var called = 0;

                    function isFontReady(name, callback) {
                      called++;

                      if (called > 30) {
                        (0, _util.warn)("Load test font never loaded.");
                        callback();
                        return;
                      }

                      ctx.font = "30px " + name;
                      ctx.fillText(".", 0, 20);
                      var imageData = ctx.getImageData(0, 0, 1, 1);

                      if (imageData.data[3] > 0) {
                        callback();
                        return;
                      }

                      setTimeout(isFontReady.bind(null, name, callback));
                    }

                    var loadTestFontId = "lt".concat(Date.now()).concat(this.loadTestFontId++);
                    var data = this._loadTestFont;
                    var COMMENT_OFFSET = 976;
                    data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
                    var CFF_CHECKSUM_OFFSET = 16;
                    var XXXX_VALUE = 0x58585858;
                    var checksum = int32(data, CFF_CHECKSUM_OFFSET);

                    for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
                      checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
                    }

                    if (i < loadTestFontId.length) {
                      checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
                    }

                    data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util.string32)(checksum));
                    var url = "url(data:font/opentype;base64,".concat(btoa(data), ");");
                    var rule = "@font-face {font-family:\"".concat(loadTestFontId, "\";src:").concat(url, "}");
                    this.insertRule(rule);
                    var names = [];

                    for (i = 0, ii = fonts.length; i < ii; i++) {
                      names.push(fonts[i].loadedName);
                    }

                    names.push(loadTestFontId);
                    var div = document.createElement("div");
                    div.style.visibility = "hidden";
                    div.style.width = div.style.height = "10px";
                    div.style.position = "absolute";
                    div.style.top = div.style.left = "0px";

                    for (i = 0, ii = names.length; i < ii; ++i) {
                      var span = document.createElement("span");
                      span.textContent = "Hi";
                      span.style.fontFamily = names[i];
                      div.appendChild(span);
                    }

                    document.body.appendChild(div);
                    isFontReady(loadTestFontId, function () {
                      document.body.removeChild(div);
                      request.complete();
                    });
                  }
                }, {
                  key: "isSyncFontLoadingSupported",
                  get: function get() {
                    var supported = false;

                    if (typeof navigator === "undefined") {
                      supported = true;
                    } else {
                      var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);

                      if (m && m[1] >= 14) {
                        supported = true;
                      }
                    }

                    return (0, _util.shadow)(this, "isSyncFontLoadingSupported", supported);
                  }
                }, {
                  key: "_loadTestFont",
                  get: function get() {
                    var getLoadTestFont = function getLoadTestFont() {
                      return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA" + "FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA" + "ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA" + "AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1" + "AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD" + "6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM" + "AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D" + "IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA" + "AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA" + "AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB" + "AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY" + "AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA" + "AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA" + "AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC" + "AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3" + "Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj" + "FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
                    };

                    return (0, _util.shadow)(this, "_loadTestFont", getLoadTestFont());
                  }
                }]);

                return GenericFontLoader;
              }(BaseFontLoader);
            }

            var FontFaceObject = /*#__PURE__*/function () {
              function FontFaceObject(translatedData, _ref24) {
                var _ref24$isEvalSupporte = _ref24.isEvalSupported,
                    isEvalSupported = _ref24$isEvalSupporte === void 0 ? true : _ref24$isEvalSupporte,
                    _ref24$disableFontFac = _ref24.disableFontFace,
                    disableFontFace = _ref24$disableFontFac === void 0 ? false : _ref24$disableFontFac,
                    _ref24$ignoreErrors = _ref24.ignoreErrors,
                    ignoreErrors = _ref24$ignoreErrors === void 0 ? false : _ref24$ignoreErrors,
                    _ref24$onUnsupportedF = _ref24.onUnsupportedFeature,
                    onUnsupportedFeature = _ref24$onUnsupportedF === void 0 ? null : _ref24$onUnsupportedF,
                    _ref24$fontRegistry = _ref24.fontRegistry,
                    fontRegistry = _ref24$fontRegistry === void 0 ? null : _ref24$fontRegistry;

                _classCallCheck(this, FontFaceObject);

                this.compiledGlyphs = Object.create(null);

                for (var i in translatedData) {
                  this[i] = translatedData[i];
                }

                this.isEvalSupported = isEvalSupported !== false;
                this.disableFontFace = disableFontFace === true;
                this.ignoreErrors = ignoreErrors === true;
                this._onUnsupportedFeature = onUnsupportedFeature;
                this.fontRegistry = fontRegistry;
              }

              _createClass(FontFaceObject, [{
                key: "createNativeFontFace",
                value: function createNativeFontFace() {
                  if (!this.data || this.disableFontFace) {
                    return null;
                  }

                  var nativeFontFace = new FontFace(this.loadedName, this.data, {});

                  if (this.fontRegistry) {
                    this.fontRegistry.registerFont(this);
                  }

                  return nativeFontFace;
                }
              }, {
                key: "createFontFaceRule",
                value: function createFontFaceRule() {
                  if (!this.data || this.disableFontFace) {
                    return null;
                  }

                  var data = (0, _util.bytesToString)(new Uint8Array(this.data));
                  var url = "url(data:".concat(this.mimetype, ";base64,").concat(btoa(data), ");");
                  var rule = "@font-face {font-family:\"".concat(this.loadedName, "\";src:").concat(url, "}");

                  if (this.fontRegistry) {
                    this.fontRegistry.registerFont(this, url);
                  }

                  return rule;
                }
              }, {
                key: "getPathGenerator",
                value: function getPathGenerator(objs, character) {
                  if (this.compiledGlyphs[character] !== undefined) {
                    return this.compiledGlyphs[character];
                  }

                  var cmds, current;

                  try {
                    cmds = objs.get(this.loadedName + "_path_" + character);
                  } catch (ex) {
                    if (!this.ignoreErrors) {
                      throw ex;
                    }

                    if (this._onUnsupportedFeature) {
                      this._onUnsupportedFeature({
                        featureId: _util.UNSUPPORTED_FEATURES.font
                      });
                    }

                    (0, _util.warn)("getPathGenerator - ignoring character: \"".concat(ex, "\"."));
                    return this.compiledGlyphs[character] = function (c, size) {};
                  }

                  if (this.isEvalSupported && _util.IsEvalSupportedCached.value) {
                    var args,
                        js = "";

                    for (var i = 0, ii = cmds.length; i < ii; i++) {
                      current = cmds[i];

                      if (current.args !== undefined) {
                        args = current.args.join(",");
                      } else {
                        args = "";
                      }

                      js += "c." + current.cmd + "(" + args + ");\n";
                    }

                    return this.compiledGlyphs[character] = new Function("c", "size", js);
                  }

                  return this.compiledGlyphs[character] = function (c, size) {
                    for (var _i6 = 0, _ii = cmds.length; _i6 < _ii; _i6++) {
                      current = cmds[_i6];

                      if (current.cmd === "scale") {
                        current.args = [size, -size];
                      }

                      c[current.cmd].apply(c, current.args);
                    }
                  };
                }
              }]);

              return FontFaceObject;
            }();

            exports.FontFaceObject = FontFaceObject;
            /***/
          },
          /* 6 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            var compatibilityParams = Object.create(null);
            {
              var _w_pdfjs_require__2 = __w_pdfjs_require__(7),
                  isNodeJS = _w_pdfjs_require__2.isNodeJS;

              var userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";
              var isIE = /Trident/.test(userAgent);
              var isIOSChrome = /CriOS/.test(userAgent);

              (function checkOnBlobSupport() {
                if (isIE || isIOSChrome) {
                  compatibilityParams.disableCreateObjectURL = true;
                }
              })();

              (function checkFontFaceAndImage() {
                if (isNodeJS) {
                  compatibilityParams.disableFontFace = true;
                  compatibilityParams.nativeImageDecoderSupport = "none";
                }
              })();
            }
            exports.apiCompatibilityParams = Object.freeze(compatibilityParams);
            /***/
          },
          /* 7 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.isNodeJS = void 0;
            var isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions["nw"] && !process.versions["electron"];
            exports.isNodeJS = isNodeJS;
            /***/
          },
          /* 8 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.CanvasGraphics = void 0;

            var _util = __w_pdfjs_require__(1);

            var _pattern_helper = __w_pdfjs_require__(9);

            var MIN_FONT_SIZE = 16;
            var MAX_FONT_SIZE = 100;
            var MAX_GROUP_SIZE = 4096;
            var MIN_WIDTH_FACTOR = 0.65;
            var COMPILE_TYPE3_GLYPHS = true;
            var MAX_SIZE_TO_COMPILE = 1000;
            var FULL_CHUNK_HEIGHT = 16;

            function addContextCurrentTransform(ctx) {
              if (!ctx.mozCurrentTransform) {
                ctx._originalSave = ctx.save;
                ctx._originalRestore = ctx.restore;
                ctx._originalRotate = ctx.rotate;
                ctx._originalScale = ctx.scale;
                ctx._originalTranslate = ctx.translate;
                ctx._originalTransform = ctx.transform;
                ctx._originalSetTransform = ctx.setTransform;
                ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
                ctx._transformStack = [];
                Object.defineProperty(ctx, "mozCurrentTransform", {
                  get: function getCurrentTransform() {
                    return this._transformMatrix;
                  }
                });
                Object.defineProperty(ctx, "mozCurrentTransformInverse", {
                  get: function getCurrentTransformInverse() {
                    var m = this._transformMatrix;
                    var a = m[0],
                        b = m[1],
                        c = m[2],
                        d = m[3],
                        e = m[4],
                        f = m[5];
                    var ad_bc = a * d - b * c;
                    var bc_ad = b * c - a * d;
                    return [d / ad_bc, b / bc_ad, c / bc_ad, a / ad_bc, (d * e - c * f) / bc_ad, (b * e - a * f) / ad_bc];
                  }
                });

                ctx.save = function ctxSave() {
                  var old = this._transformMatrix;

                  this._transformStack.push(old);

                  this._transformMatrix = old.slice(0, 6);

                  this._originalSave();
                };

                ctx.restore = function ctxRestore() {
                  var prev = this._transformStack.pop();

                  if (prev) {
                    this._transformMatrix = prev;

                    this._originalRestore();
                  }
                };

                ctx.translate = function ctxTranslate(x, y) {
                  var m = this._transformMatrix;
                  m[4] = m[0] * x + m[2] * y + m[4];
                  m[5] = m[1] * x + m[3] * y + m[5];

                  this._originalTranslate(x, y);
                };

                ctx.scale = function ctxScale(x, y) {
                  var m = this._transformMatrix;
                  m[0] = m[0] * x;
                  m[1] = m[1] * x;
                  m[2] = m[2] * y;
                  m[3] = m[3] * y;

                  this._originalScale(x, y);
                };

                ctx.transform = function ctxTransform(a, b, c, d, e, f) {
                  var m = this._transformMatrix;
                  this._transformMatrix = [m[0] * a + m[2] * b, m[1] * a + m[3] * b, m[0] * c + m[2] * d, m[1] * c + m[3] * d, m[0] * e + m[2] * f + m[4], m[1] * e + m[3] * f + m[5]];

                  ctx._originalTransform(a, b, c, d, e, f);
                };

                ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
                  this._transformMatrix = [a, b, c, d, e, f];

                  ctx._originalSetTransform(a, b, c, d, e, f);
                };

                ctx.rotate = function ctxRotate(angle) {
                  var cosValue = Math.cos(angle);
                  var sinValue = Math.sin(angle);
                  var m = this._transformMatrix;
                  this._transformMatrix = [m[0] * cosValue + m[2] * sinValue, m[1] * cosValue + m[3] * sinValue, m[0] * -sinValue + m[2] * cosValue, m[1] * -sinValue + m[3] * cosValue, m[4], m[5]];

                  this._originalRotate(angle);
                };
              }
            }

            var CachedCanvases = function CachedCanvasesClosure() {
              function CachedCanvases(canvasFactory) {
                this.canvasFactory = canvasFactory;
                this.cache = Object.create(null);
              }

              CachedCanvases.prototype = {
                getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
                  var canvasEntry;

                  if (this.cache[id] !== undefined) {
                    canvasEntry = this.cache[id];
                    this.canvasFactory.reset(canvasEntry, width, height);
                    canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
                  } else {
                    canvasEntry = this.canvasFactory.create(width, height);
                    this.cache[id] = canvasEntry;
                  }

                  if (trackTransform) {
                    addContextCurrentTransform(canvasEntry.context);
                  }

                  return canvasEntry;
                },
                clear: function clear() {
                  for (var id in this.cache) {
                    var canvasEntry = this.cache[id];
                    this.canvasFactory.destroy(canvasEntry);
                    delete this.cache[id];
                  }
                }
              };
              return CachedCanvases;
            }();

            function compileType3Glyph(imgData) {
              var POINT_TO_PROCESS_LIMIT = 1000;
              var width = imgData.width,
                  height = imgData.height;
              var i,
                  j,
                  j0,
                  width1 = width + 1;
              var points = new Uint8Array(width1 * (height + 1));
              var POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
              var lineSize = width + 7 & ~7,
                  data0 = imgData.data;
              var data = new Uint8Array(lineSize * height),
                  pos = 0,
                  ii;

              for (i = 0, ii = data0.length; i < ii; i++) {
                var mask = 128,
                    elem = data0[i];

                while (mask > 0) {
                  data[pos++] = elem & mask ? 0 : 255;
                  mask >>= 1;
                }
              }

              var count = 0;
              pos = 0;

              if (data[pos] !== 0) {
                points[0] = 1;
                ++count;
              }

              for (j = 1; j < width; j++) {
                if (data[pos] !== data[pos + 1]) {
                  points[j] = data[pos] ? 2 : 1;
                  ++count;
                }

                pos++;
              }

              if (data[pos] !== 0) {
                points[j] = 2;
                ++count;
              }

              for (i = 1; i < height; i++) {
                pos = i * lineSize;
                j0 = i * width1;

                if (data[pos - lineSize] !== data[pos]) {
                  points[j0] = data[pos] ? 1 : 8;
                  ++count;
                }

                var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);

                for (j = 1; j < width; j++) {
                  sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);

                  if (POINT_TYPES[sum]) {
                    points[j0 + j] = POINT_TYPES[sum];
                    ++count;
                  }

                  pos++;
                }

                if (data[pos - lineSize] !== data[pos]) {
                  points[j0 + j] = data[pos] ? 2 : 4;
                  ++count;
                }

                if (count > POINT_TO_PROCESS_LIMIT) {
                  return null;
                }
              }

              pos = lineSize * (height - 1);
              j0 = i * width1;

              if (data[pos] !== 0) {
                points[j0] = 8;
                ++count;
              }

              for (j = 1; j < width; j++) {
                if (data[pos] !== data[pos + 1]) {
                  points[j0 + j] = data[pos] ? 4 : 8;
                  ++count;
                }

                pos++;
              }

              if (data[pos] !== 0) {
                points[j0 + j] = 4;
                ++count;
              }

              if (count > POINT_TO_PROCESS_LIMIT) {
                return null;
              }

              var steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
              var outlines = [];

              for (i = 0; count && i <= height; i++) {
                var p = i * width1;
                var end = p + width;

                while (p < end && !points[p]) {
                  p++;
                }

                if (p === end) {
                  continue;
                }

                var coords = [p % width1, i];
                var type = points[p],
                    p0 = p,
                    pp;

                do {
                  var step = steps[type];

                  do {
                    p += step;
                  } while (!points[p]);

                  pp = points[p];

                  if (pp !== 5 && pp !== 10) {
                    type = pp;
                    points[p] = 0;
                  } else {
                    type = pp & 0x33 * type >> 4;
                    points[p] &= type >> 2 | type << 2;
                  }

                  coords.push(p % width1);
                  coords.push(p / width1 | 0);

                  if (!points[p]) {
                    --count;
                  }
                } while (p0 !== p);

                outlines.push(coords);
                --i;
              }

              var drawOutline = function drawOutline(c) {
                c.save();
                c.scale(1 / width, -1 / height);
                c.translate(0, -height);
                c.beginPath();

                for (var i = 0, ii = outlines.length; i < ii; i++) {
                  var o = outlines[i];
                  c.moveTo(o[0], o[1]);

                  for (var j = 2, jj = o.length; j < jj; j += 2) {
                    c.lineTo(o[j], o[j + 1]);
                  }
                }

                c.fill();
                c.beginPath();
                c.restore();
              };

              return drawOutline;
            }

            var CanvasExtraState = function CanvasExtraStateClosure() {
              function CanvasExtraState() {
                this.alphaIsShape = false;
                this.fontSize = 0;
                this.fontSizeScale = 1;
                this.textMatrix = _util.IDENTITY_MATRIX;
                this.textMatrixScale = 1;
                this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
                this.leading = 0;
                this.x = 0;
                this.y = 0;
                this.lineX = 0;
                this.lineY = 0;
                this.charSpacing = 0;
                this.wordSpacing = 0;
                this.textHScale = 1;
                this.textRenderingMode = _util.TextRenderingMode.FILL;
                this.textRise = 0;
                this.fillColor = "#000000";
                this.strokeColor = "#000000";
                this.patternFill = false;
                this.fillAlpha = 1;
                this.strokeAlpha = 1;
                this.lineWidth = 1;
                this.activeSMask = null;
                this.resumeSMaskCtx = null;
              }

              CanvasExtraState.prototype = {
                clone: function CanvasExtraState_clone() {
                  return Object.create(this);
                },
                setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
                  this.x = x;
                  this.y = y;
                }
              };
              return CanvasExtraState;
            }();

            var CanvasGraphics = function CanvasGraphicsClosure() {
              var EXECUTION_TIME = 15;
              var EXECUTION_STEPS = 10;

              function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory, webGLContext, imageLayer) {
                this.ctx = canvasCtx;
                this.current = new CanvasExtraState();
                this.stateStack = [];
                this.pendingClip = null;
                this.pendingEOFill = false;
                this.res = null;
                this.xobjs = null;
                this.commonObjs = commonObjs;
                this.objs = objs;
                this.canvasFactory = canvasFactory;
                this.webGLContext = webGLContext;
                this.imageLayer = imageLayer;
                this.groupStack = [];
                this.processingType3 = null;
                this.baseTransform = null;
                this.baseTransformStack = [];
                this.groupLevel = 0;
                this.smaskStack = [];
                this.smaskCounter = 0;
                this.tempSMask = null;
                this.cachedCanvases = new CachedCanvases(this.canvasFactory);

                if (canvasCtx) {
                  addContextCurrentTransform(canvasCtx);
                }

                this._cachedGetSinglePixelWidth = null;
              }

              function putBinaryImageData(ctx, imgData) {
                if (typeof ImageData !== "undefined" && imgData instanceof ImageData) {
                  ctx.putImageData(imgData, 0, 0);
                  return;
                }

                var height = imgData.height,
                    width = imgData.width;
                var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
                var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
                var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
                var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
                var srcPos = 0,
                    destPos;
                var src = imgData.data;
                var dest = chunkImgData.data;
                var i, j, thisChunkHeight, elemsInThisChunk;

                if (imgData.kind === _util.ImageKind.GRAYSCALE_1BPP) {
                  var srcLength = src.byteLength;
                  var dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
                  var dest32DataLength = dest32.length;
                  var fullSrcDiff = width + 7 >> 3;
                  var white = 0xffffffff;
                  var black = _util.IsLittleEndianCached.value ? 0xff000000 : 0x000000ff;

                  for (i = 0; i < totalChunks; i++) {
                    thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
                    destPos = 0;

                    for (j = 0; j < thisChunkHeight; j++) {
                      var srcDiff = srcLength - srcPos;
                      var k = 0;
                      var kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
                      var kEndUnrolled = kEnd & ~7;
                      var mask = 0;
                      var srcByte = 0;

                      for (; k < kEndUnrolled; k += 8) {
                        srcByte = src[srcPos++];
                        dest32[destPos++] = srcByte & 128 ? white : black;
                        dest32[destPos++] = srcByte & 64 ? white : black;
                        dest32[destPos++] = srcByte & 32 ? white : black;
                        dest32[destPos++] = srcByte & 16 ? white : black;
                        dest32[destPos++] = srcByte & 8 ? white : black;
                        dest32[destPos++] = srcByte & 4 ? white : black;
                        dest32[destPos++] = srcByte & 2 ? white : black;
                        dest32[destPos++] = srcByte & 1 ? white : black;
                      }

                      for (; k < kEnd; k++) {
                        if (mask === 0) {
                          srcByte = src[srcPos++];
                          mask = 128;
                        }

                        dest32[destPos++] = srcByte & mask ? white : black;
                        mask >>= 1;
                      }
                    }

                    while (destPos < dest32DataLength) {
                      dest32[destPos++] = 0;
                    }

                    ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
                  }
                } else if (imgData.kind === _util.ImageKind.RGBA_32BPP) {
                  j = 0;
                  elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;

                  for (i = 0; i < fullChunks; i++) {
                    dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
                    srcPos += elemsInThisChunk;
                    ctx.putImageData(chunkImgData, 0, j);
                    j += FULL_CHUNK_HEIGHT;
                  }

                  if (i < totalChunks) {
                    elemsInThisChunk = width * partialChunkHeight * 4;
                    dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
                    ctx.putImageData(chunkImgData, 0, j);
                  }
                } else if (imgData.kind === _util.ImageKind.RGB_24BPP) {
                  thisChunkHeight = FULL_CHUNK_HEIGHT;
                  elemsInThisChunk = width * thisChunkHeight;

                  for (i = 0; i < totalChunks; i++) {
                    if (i >= fullChunks) {
                      thisChunkHeight = partialChunkHeight;
                      elemsInThisChunk = width * thisChunkHeight;
                    }

                    destPos = 0;

                    for (j = elemsInThisChunk; j--;) {
                      dest[destPos++] = src[srcPos++];
                      dest[destPos++] = src[srcPos++];
                      dest[destPos++] = src[srcPos++];
                      dest[destPos++] = 255;
                    }

                    ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
                  }
                } else {
                  throw new Error("bad image kind: ".concat(imgData.kind));
                }
              }

              function putBinaryImageMask(ctx, imgData) {
                var height = imgData.height,
                    width = imgData.width;
                var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
                var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
                var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
                var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
                var srcPos = 0;
                var src = imgData.data;
                var dest = chunkImgData.data;

                for (var i = 0; i < totalChunks; i++) {
                  var thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
                  var destPos = 3;

                  for (var j = 0; j < thisChunkHeight; j++) {
                    var mask = 0;

                    for (var k = 0; k < width; k++) {
                      if (!mask) {
                        var elem = src[srcPos++];
                        mask = 128;
                      }

                      dest[destPos] = elem & mask ? 0 : 255;
                      destPos += 4;
                      mask >>= 1;
                    }
                  }

                  ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
                }
              }

              function copyCtxState(sourceCtx, destCtx) {
                var properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];

                for (var i = 0, ii = properties.length; i < ii; i++) {
                  var property = properties[i];

                  if (sourceCtx[property] !== undefined) {
                    destCtx[property] = sourceCtx[property];
                  }
                }

                if (sourceCtx.setLineDash !== undefined) {
                  destCtx.setLineDash(sourceCtx.getLineDash());
                  destCtx.lineDashOffset = sourceCtx.lineDashOffset;
                }
              }

              function resetCtxToDefault(ctx) {
                ctx.strokeStyle = "#000000";
                ctx.fillStyle = "#000000";
                ctx.fillRule = "nonzero";
                ctx.globalAlpha = 1;
                ctx.lineWidth = 1;
                ctx.lineCap = "butt";
                ctx.lineJoin = "miter";
                ctx.miterLimit = 10;
                ctx.globalCompositeOperation = "source-over";
                ctx.font = "10px sans-serif";

                if (ctx.setLineDash !== undefined) {
                  ctx.setLineDash([]);
                  ctx.lineDashOffset = 0;
                }
              }

              function composeSMaskBackdrop(bytes, r0, g0, b0) {
                var length = bytes.length;

                for (var i = 3; i < length; i += 4) {
                  var alpha = bytes[i];

                  if (alpha === 0) {
                    bytes[i - 3] = r0;
                    bytes[i - 2] = g0;
                    bytes[i - 1] = b0;
                  } else if (alpha < 255) {
                    var alpha_ = 255 - alpha;
                    bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
                    bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
                    bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
                  }
                }
              }

              function composeSMaskAlpha(maskData, layerData, transferMap) {
                var length = maskData.length;
                var scale = 1 / 255;

                for (var i = 3; i < length; i += 4) {
                  var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
                  layerData[i] = layerData[i] * alpha * scale | 0;
                }
              }

              function composeSMaskLuminosity(maskData, layerData, transferMap) {
                var length = maskData.length;

                for (var i = 3; i < length; i += 4) {
                  var y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
                  layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
                }
              }

              function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
                var hasBackdrop = !!backdrop;
                var r0 = hasBackdrop ? backdrop[0] : 0;
                var g0 = hasBackdrop ? backdrop[1] : 0;
                var b0 = hasBackdrop ? backdrop[2] : 0;
                var composeFn;

                if (subtype === "Luminosity") {
                  composeFn = composeSMaskLuminosity;
                } else {
                  composeFn = composeSMaskAlpha;
                }

                var PIXELS_TO_PROCESS = 1048576;
                var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));

                for (var row = 0; row < height; row += chunkSize) {
                  var chunkHeight = Math.min(chunkSize, height - row);
                  var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
                  var layerData = layerCtx.getImageData(0, row, width, chunkHeight);

                  if (hasBackdrop) {
                    composeSMaskBackdrop(maskData.data, r0, g0, b0);
                  }

                  composeFn(maskData.data, layerData.data, transferMap);
                  maskCtx.putImageData(layerData, 0, row);
                }
              }

              function composeSMask(ctx, smask, layerCtx, webGLContext) {
                var mask = smask.canvas;
                var maskCtx = smask.context;
                ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
                var backdrop = smask.backdrop || null;

                if (!smask.transferMap && webGLContext.isEnabled) {
                  var composed = webGLContext.composeSMask({
                    layer: layerCtx.canvas,
                    mask: mask,
                    properties: {
                      subtype: smask.subtype,
                      backdrop: backdrop
                    }
                  });
                  ctx.setTransform(1, 0, 0, 1, 0, 0);
                  ctx.drawImage(composed, smask.offsetX, smask.offsetY);
                  return;
                }

                genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
                ctx.drawImage(mask, 0, 0);
              }

              var LINE_CAP_STYLES = ["butt", "round", "square"];
              var LINE_JOIN_STYLES = ["miter", "round", "bevel"];
              var NORMAL_CLIP = {};
              var EO_CLIP = {};
              CanvasGraphics.prototype = {
                beginDrawing: function beginDrawing(_ref25) {
                  var transform = _ref25.transform,
                      viewport = _ref25.viewport,
                      _ref25$transparency = _ref25.transparency,
                      transparency = _ref25$transparency === void 0 ? false : _ref25$transparency,
                      _ref25$background = _ref25.background,
                      background = _ref25$background === void 0 ? null : _ref25$background;
                  var width = this.ctx.canvas.width;
                  var height = this.ctx.canvas.height;
                  this.ctx.save();
                  this.ctx.fillStyle = background || "rgb(255, 255, 255)";
                  this.ctx.fillRect(0, 0, width, height);
                  this.ctx.restore();

                  if (transparency) {
                    var transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height, true);
                    this.compositeCtx = this.ctx;
                    this.transparentCanvas = transparentCanvas.canvas;
                    this.ctx = transparentCanvas.context;
                    this.ctx.save();
                    this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
                  }

                  this.ctx.save();
                  resetCtxToDefault(this.ctx);

                  if (transform) {
                    this.ctx.transform.apply(this.ctx, transform);
                  }

                  this.ctx.transform.apply(this.ctx, viewport.transform);
                  this.baseTransform = this.ctx.mozCurrentTransform.slice();

                  if (this.imageLayer) {
                    this.imageLayer.beginLayout();
                  }
                },
                executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
                  var argsArray = operatorList.argsArray;
                  var fnArray = operatorList.fnArray;
                  var i = executionStartIdx || 0;
                  var argsArrayLen = argsArray.length;

                  if (argsArrayLen === i) {
                    return i;
                  }

                  var chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
                  var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
                  var steps = 0;
                  var commonObjs = this.commonObjs;
                  var objs = this.objs;
                  var fnId;

                  while (true) {
                    if (stepper !== undefined && i === stepper.nextBreakPoint) {
                      stepper.breakIt(i, continueCallback);
                      return i;
                    }

                    fnId = fnArray[i];

                    if (fnId !== _util.OPS.dependency) {
                      this[fnId].apply(this, argsArray[i]);
                    } else {
                      var _iterator7 = _createForOfIteratorHelper(argsArray[i]),
                          _step7;

                      try {
                        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                          var depObjId = _step7.value;
                          var objsPool = depObjId.startsWith("g_") ? commonObjs : objs;

                          if (!objsPool.has(depObjId)) {
                            objsPool.get(depObjId, continueCallback);
                            return i;
                          }
                        }
                      } catch (err) {
                        _iterator7.e(err);
                      } finally {
                        _iterator7.f();
                      }
                    }

                    i++;

                    if (i === argsArrayLen) {
                      return i;
                    }

                    if (chunkOperations && ++steps > EXECUTION_STEPS) {
                      if (Date.now() > endTime) {
                        continueCallback();
                        return i;
                      }

                      steps = 0;
                    }
                  }
                },
                endDrawing: function CanvasGraphics_endDrawing() {
                  if (this.current.activeSMask !== null) {
                    this.endSMaskGroup();
                  }

                  this.ctx.restore();

                  if (this.transparentCanvas) {
                    this.ctx = this.compositeCtx;
                    this.ctx.save();
                    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                    this.ctx.drawImage(this.transparentCanvas, 0, 0);
                    this.ctx.restore();
                    this.transparentCanvas = null;
                  }

                  this.cachedCanvases.clear();
                  this.webGLContext.clear();

                  if (this.imageLayer) {
                    this.imageLayer.endLayout();
                  }
                },
                setLineWidth: function CanvasGraphics_setLineWidth(width) {
                  this.current.lineWidth = width;
                  this.ctx.lineWidth = width;
                },
                setLineCap: function CanvasGraphics_setLineCap(style) {
                  this.ctx.lineCap = LINE_CAP_STYLES[style];
                },
                setLineJoin: function CanvasGraphics_setLineJoin(style) {
                  this.ctx.lineJoin = LINE_JOIN_STYLES[style];
                },
                setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
                  this.ctx.miterLimit = limit;
                },
                setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
                  var ctx = this.ctx;

                  if (ctx.setLineDash !== undefined) {
                    ctx.setLineDash(dashArray);
                    ctx.lineDashOffset = dashPhase;
                  }
                },
                setRenderingIntent: function setRenderingIntent(intent) {},
                setFlatness: function setFlatness(flatness) {},
                setGState: function CanvasGraphics_setGState(states) {
                  for (var i = 0, ii = states.length; i < ii; i++) {
                    var state = states[i];
                    var key = state[0];
                    var value = state[1];

                    switch (key) {
                      case "LW":
                        this.setLineWidth(value);
                        break;

                      case "LC":
                        this.setLineCap(value);
                        break;

                      case "LJ":
                        this.setLineJoin(value);
                        break;

                      case "ML":
                        this.setMiterLimit(value);
                        break;

                      case "D":
                        this.setDash(value[0], value[1]);
                        break;

                      case "RI":
                        this.setRenderingIntent(value);
                        break;

                      case "FL":
                        this.setFlatness(value);
                        break;

                      case "Font":
                        this.setFont(value[0], value[1]);
                        break;

                      case "CA":
                        this.current.strokeAlpha = state[1];
                        break;

                      case "ca":
                        this.current.fillAlpha = state[1];
                        this.ctx.globalAlpha = state[1];
                        break;

                      case "BM":
                        this.ctx.globalCompositeOperation = value;
                        break;

                      case "SMask":
                        if (this.current.activeSMask) {
                          if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
                            this.suspendSMaskGroup();
                          } else {
                            this.endSMaskGroup();
                          }
                        }

                        this.current.activeSMask = value ? this.tempSMask : null;

                        if (this.current.activeSMask) {
                          this.beginSMaskGroup();
                        }

                        this.tempSMask = null;
                        break;
                    }
                  }
                },
                beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
                  var activeSMask = this.current.activeSMask;
                  var drawnWidth = activeSMask.canvas.width;
                  var drawnHeight = activeSMask.canvas.height;
                  var cacheId = "smaskGroupAt" + this.groupLevel;
                  var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
                  var currentCtx = this.ctx;
                  var currentTransform = currentCtx.mozCurrentTransform;
                  this.ctx.save();
                  var groupCtx = scratchCanvas.context;
                  groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
                  groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
                  groupCtx.transform.apply(groupCtx, currentTransform);
                  activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
                  copyCtxState(currentCtx, groupCtx);
                  this.ctx = groupCtx;
                  this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
                  this.groupStack.push(currentCtx);
                  this.groupLevel++;
                },
                suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
                  var groupCtx = this.ctx;
                  this.groupLevel--;
                  this.ctx = this.groupStack.pop();
                  composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
                  this.ctx.restore();
                  this.ctx.save();
                  copyCtxState(groupCtx, this.ctx);
                  this.current.resumeSMaskCtx = groupCtx;

                  var deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);

                  this.ctx.transform.apply(this.ctx, deltaTransform);
                  groupCtx.save();
                  groupCtx.setTransform(1, 0, 0, 1, 0, 0);
                  groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
                  groupCtx.restore();
                },
                resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
                  var groupCtx = this.current.resumeSMaskCtx;
                  var currentCtx = this.ctx;
                  this.ctx = groupCtx;
                  this.groupStack.push(currentCtx);
                  this.groupLevel++;
                },
                endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
                  var groupCtx = this.ctx;
                  this.groupLevel--;
                  this.ctx = this.groupStack.pop();
                  composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
                  this.ctx.restore();
                  copyCtxState(groupCtx, this.ctx);

                  var deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);

                  this.ctx.transform.apply(this.ctx, deltaTransform);
                },
                save: function CanvasGraphics_save() {
                  this.ctx.save();
                  var old = this.current;
                  this.stateStack.push(old);
                  this.current = old.clone();
                  this.current.resumeSMaskCtx = null;
                },
                restore: function CanvasGraphics_restore() {
                  if (this.current.resumeSMaskCtx) {
                    this.resumeSMaskGroup();
                  }

                  if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
                    this.endSMaskGroup();
                  }

                  if (this.stateStack.length !== 0) {
                    this.current = this.stateStack.pop();
                    this.ctx.restore();
                    this.pendingClip = null;
                    this._cachedGetSinglePixelWidth = null;
                  }
                },
                transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
                  this.ctx.transform(a, b, c, d, e, f);
                  this._cachedGetSinglePixelWidth = null;
                },
                constructPath: function CanvasGraphics_constructPath(ops, args) {
                  var ctx = this.ctx;
                  var current = this.current;
                  var x = current.x,
                      y = current.y;

                  for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
                    switch (ops[i] | 0) {
                      case _util.OPS.rectangle:
                        x = args[j++];
                        y = args[j++];
                        var width = args[j++];
                        var height = args[j++];

                        if (width === 0) {
                          width = this.getSinglePixelWidth();
                        }

                        if (height === 0) {
                          height = this.getSinglePixelWidth();
                        }

                        var xw = x + width;
                        var yh = y + height;
                        this.ctx.moveTo(x, y);
                        this.ctx.lineTo(xw, y);
                        this.ctx.lineTo(xw, yh);
                        this.ctx.lineTo(x, yh);
                        this.ctx.lineTo(x, y);
                        this.ctx.closePath();
                        break;

                      case _util.OPS.moveTo:
                        x = args[j++];
                        y = args[j++];
                        ctx.moveTo(x, y);
                        break;

                      case _util.OPS.lineTo:
                        x = args[j++];
                        y = args[j++];
                        ctx.lineTo(x, y);
                        break;

                      case _util.OPS.curveTo:
                        x = args[j + 4];
                        y = args[j + 5];
                        ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
                        j += 6;
                        break;

                      case _util.OPS.curveTo2:
                        ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
                        x = args[j + 2];
                        y = args[j + 3];
                        j += 4;
                        break;

                      case _util.OPS.curveTo3:
                        x = args[j + 2];
                        y = args[j + 3];
                        ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
                        j += 4;
                        break;

                      case _util.OPS.closePath:
                        ctx.closePath();
                        break;
                    }
                  }

                  current.setCurrentPoint(x, y);
                },
                closePath: function CanvasGraphics_closePath() {
                  this.ctx.closePath();
                },
                stroke: function CanvasGraphics_stroke(consumePath) {
                  consumePath = typeof consumePath !== "undefined" ? consumePath : true;
                  var ctx = this.ctx;
                  var strokeColor = this.current.strokeColor;
                  ctx.globalAlpha = this.current.strokeAlpha;

                  if (strokeColor && strokeColor.hasOwnProperty("type") && strokeColor.type === "Pattern") {
                    ctx.save();
                    var transform = ctx.mozCurrentTransform;

                    var scale = _util.Util.singularValueDecompose2dScale(transform)[0];

                    ctx.strokeStyle = strokeColor.getPattern(ctx, this);
                    ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth * scale);
                    ctx.stroke();
                    ctx.restore();
                  } else {
                    ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth);
                    ctx.stroke();
                  }

                  if (consumePath) {
                    this.consumePath();
                  }

                  ctx.globalAlpha = this.current.fillAlpha;
                },
                closeStroke: function CanvasGraphics_closeStroke() {
                  this.closePath();
                  this.stroke();
                },
                fill: function CanvasGraphics_fill(consumePath) {
                  consumePath = typeof consumePath !== "undefined" ? consumePath : true;
                  var ctx = this.ctx;
                  var fillColor = this.current.fillColor;
                  var isPatternFill = this.current.patternFill;
                  var needRestore = false;

                  if (isPatternFill) {
                    ctx.save();

                    if (this.baseTransform) {
                      ctx.setTransform.apply(ctx, this.baseTransform);
                    }

                    ctx.fillStyle = fillColor.getPattern(ctx, this);
                    needRestore = true;
                  }

                  if (this.pendingEOFill) {
                    ctx.fill("evenodd");
                    this.pendingEOFill = false;
                  } else {
                    ctx.fill();
                  }

                  if (needRestore) {
                    ctx.restore();
                  }

                  if (consumePath) {
                    this.consumePath();
                  }
                },
                eoFill: function CanvasGraphics_eoFill() {
                  this.pendingEOFill = true;
                  this.fill();
                },
                fillStroke: function CanvasGraphics_fillStroke() {
                  this.fill(false);
                  this.stroke(false);
                  this.consumePath();
                },
                eoFillStroke: function CanvasGraphics_eoFillStroke() {
                  this.pendingEOFill = true;
                  this.fillStroke();
                },
                closeFillStroke: function CanvasGraphics_closeFillStroke() {
                  this.closePath();
                  this.fillStroke();
                },
                closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
                  this.pendingEOFill = true;
                  this.closePath();
                  this.fillStroke();
                },
                endPath: function CanvasGraphics_endPath() {
                  this.consumePath();
                },
                clip: function CanvasGraphics_clip() {
                  this.pendingClip = NORMAL_CLIP;
                },
                eoClip: function CanvasGraphics_eoClip() {
                  this.pendingClip = EO_CLIP;
                },
                beginText: function CanvasGraphics_beginText() {
                  this.current.textMatrix = _util.IDENTITY_MATRIX;
                  this.current.textMatrixScale = 1;
                  this.current.x = this.current.lineX = 0;
                  this.current.y = this.current.lineY = 0;
                },
                endText: function CanvasGraphics_endText() {
                  var paths = this.pendingTextPaths;
                  var ctx = this.ctx;

                  if (paths === undefined) {
                    ctx.beginPath();
                    return;
                  }

                  ctx.save();
                  ctx.beginPath();

                  for (var i = 0; i < paths.length; i++) {
                    var path = paths[i];
                    ctx.setTransform.apply(ctx, path.transform);
                    ctx.translate(path.x, path.y);
                    path.addToPath(ctx, path.fontSize);
                  }

                  ctx.restore();
                  ctx.clip();
                  ctx.beginPath();
                  delete this.pendingTextPaths;
                },
                setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
                  this.current.charSpacing = spacing;
                },
                setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
                  this.current.wordSpacing = spacing;
                },
                setHScale: function CanvasGraphics_setHScale(scale) {
                  this.current.textHScale = scale / 100;
                },
                setLeading: function CanvasGraphics_setLeading(leading) {
                  this.current.leading = -leading;
                },
                setFont: function CanvasGraphics_setFont(fontRefName, size) {
                  var fontObj = this.commonObjs.get(fontRefName);
                  var current = this.current;

                  if (!fontObj) {
                    throw new Error("Can't find font for ".concat(fontRefName));
                  }

                  current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;

                  if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
                    (0, _util.warn)("Invalid font matrix for font " + fontRefName);
                  }

                  if (size < 0) {
                    size = -size;
                    current.fontDirection = -1;
                  } else {
                    current.fontDirection = 1;
                  }

                  this.current.font = fontObj;
                  this.current.fontSize = size;

                  if (fontObj.isType3Font) {
                    return;
                  }

                  var name = fontObj.loadedName || "sans-serif";
                  var bold = "normal";

                  if (fontObj.black) {
                    bold = "900";
                  } else if (fontObj.bold) {
                    bold = "bold";
                  }

                  var italic = fontObj.italic ? "italic" : "normal";
                  var typeface = "\"".concat(name, "\", ").concat(fontObj.fallbackName);
                  var browserFontSize = size;

                  if (size < MIN_FONT_SIZE) {
                    browserFontSize = MIN_FONT_SIZE;
                  } else if (size > MAX_FONT_SIZE) {
                    browserFontSize = MAX_FONT_SIZE;
                  }

                  this.current.fontSizeScale = size / browserFontSize;
                  this.ctx.font = "".concat(italic, " ").concat(bold, " ").concat(browserFontSize, "px ").concat(typeface);
                },
                setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
                  this.current.textRenderingMode = mode;
                },
                setTextRise: function CanvasGraphics_setTextRise(rise) {
                  this.current.textRise = rise;
                },
                moveText: function CanvasGraphics_moveText(x, y) {
                  this.current.x = this.current.lineX += x;
                  this.current.y = this.current.lineY += y;
                },
                setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
                  this.setLeading(-y);
                  this.moveText(x, y);
                },
                setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
                  this.current.textMatrix = [a, b, c, d, e, f];
                  this.current.textMatrixScale = Math.sqrt(a * a + b * b);
                  this.current.x = this.current.lineX = 0;
                  this.current.y = this.current.lineY = 0;
                },
                nextLine: function CanvasGraphics_nextLine() {
                  this.moveText(0, this.current.leading);
                },
                paintChar: function paintChar(character, x, y, patternTransform) {
                  var ctx = this.ctx;
                  var current = this.current;
                  var font = current.font;
                  var textRenderingMode = current.textRenderingMode;
                  var fontSize = current.fontSize / current.fontSizeScale;
                  var fillStrokeMode = textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
                  var isAddToPathSet = !!(textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
                  var patternFill = current.patternFill && font.data;
                  var addToPath;

                  if (font.disableFontFace || isAddToPathSet || patternFill) {
                    addToPath = font.getPathGenerator(this.commonObjs, character);
                  }

                  if (font.disableFontFace || patternFill) {
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.beginPath();
                    addToPath(ctx, fontSize);

                    if (patternTransform) {
                      ctx.setTransform.apply(ctx, patternTransform);
                    }

                    if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                      ctx.fill();
                    }

                    if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                      ctx.stroke();
                    }

                    ctx.restore();
                  } else {
                    if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                      ctx.fillText(character, x, y);
                    }

                    if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                      ctx.strokeText(character, x, y);
                    }
                  }

                  if (isAddToPathSet) {
                    var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
                    paths.push({
                      transform: ctx.mozCurrentTransform,
                      x: x,
                      y: y,
                      fontSize: fontSize,
                      addToPath: addToPath
                    });
                  }
                },

                get isFontSubpixelAAEnabled() {
                  var _this$cachedCanvases$ = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10),
                      ctx = _this$cachedCanvases$.context;

                  ctx.scale(1.5, 1);
                  ctx.fillText("I", 0, 10);
                  var data = ctx.getImageData(0, 0, 10, 10).data;
                  var enabled = false;

                  for (var i = 3; i < data.length; i += 4) {
                    if (data[i] > 0 && data[i] < 255) {
                      enabled = true;
                      break;
                    }
                  }

                  return (0, _util.shadow)(this, "isFontSubpixelAAEnabled", enabled);
                },

                showText: function CanvasGraphics_showText(glyphs) {
                  var current = this.current;
                  var font = current.font;

                  if (font.isType3Font) {
                    return this.showType3Text(glyphs);
                  }

                  var fontSize = current.fontSize;

                  if (fontSize === 0) {
                    return undefined;
                  }

                  var ctx = this.ctx;
                  var fontSizeScale = current.fontSizeScale;
                  var charSpacing = current.charSpacing;
                  var wordSpacing = current.wordSpacing;
                  var fontDirection = current.fontDirection;
                  var textHScale = current.textHScale * fontDirection;
                  var glyphsLength = glyphs.length;
                  var vertical = font.vertical;
                  var spacingDir = vertical ? 1 : -1;
                  var defaultVMetrics = font.defaultVMetrics;
                  var widthAdvanceScale = fontSize * current.fontMatrix[0];
                  var simpleFillText = current.textRenderingMode === _util.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
                  ctx.save();
                  var patternTransform;

                  if (current.patternFill) {
                    ctx.save();
                    var pattern = current.fillColor.getPattern(ctx, this);
                    patternTransform = ctx.mozCurrentTransform;
                    ctx.restore();
                    ctx.fillStyle = pattern;
                  }

                  ctx.transform.apply(ctx, current.textMatrix);
                  ctx.translate(current.x, current.y + current.textRise);

                  if (fontDirection > 0) {
                    ctx.scale(textHScale, -1);
                  } else {
                    ctx.scale(textHScale, 1);
                  }

                  var lineWidth = current.lineWidth;
                  var scale = current.textMatrixScale;

                  if (scale === 0 || lineWidth === 0) {
                    var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;

                    if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                      this._cachedGetSinglePixelWidth = null;
                      lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
                    }
                  } else {
                    lineWidth /= scale;
                  }

                  if (fontSizeScale !== 1.0) {
                    ctx.scale(fontSizeScale, fontSizeScale);
                    lineWidth /= fontSizeScale;
                  }

                  ctx.lineWidth = lineWidth;
                  var x = 0,
                      i;

                  for (i = 0; i < glyphsLength; ++i) {
                    var glyph = glyphs[i];

                    if ((0, _util.isNum)(glyph)) {
                      x += spacingDir * glyph * fontSize / 1000;
                      continue;
                    }

                    var restoreNeeded = false;
                    var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                    var character = glyph.fontChar;
                    var accent = glyph.accent;
                    var scaledX, scaledY, scaledAccentX, scaledAccentY;
                    var width = glyph.width;

                    if (vertical) {
                      var vmetric, vx, vy;
                      vmetric = glyph.vmetric || defaultVMetrics;
                      vx = glyph.vmetric ? vmetric[1] : width * 0.5;
                      vx = -vx * widthAdvanceScale;
                      vy = vmetric[2] * widthAdvanceScale;
                      width = vmetric ? -vmetric[0] : width;
                      scaledX = vx / fontSizeScale;
                      scaledY = (x + vy) / fontSizeScale;
                    } else {
                      scaledX = x / fontSizeScale;
                      scaledY = 0;
                    }

                    if (font.remeasure && width > 0) {
                      var measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;

                      if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
                        var characterScaleX = width / measuredWidth;
                        restoreNeeded = true;
                        ctx.save();
                        ctx.scale(characterScaleX, 1);
                        scaledX /= characterScaleX;
                      } else if (width !== measuredWidth) {
                        scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
                      }
                    }

                    if (glyph.isInFont || font.missingFile) {
                      if (simpleFillText && !accent) {
                        ctx.fillText(character, scaledX, scaledY);
                      } else {
                        this.paintChar(character, scaledX, scaledY, patternTransform);

                        if (accent) {
                          scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
                          scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
                          this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
                        }
                      }
                    }

                    var charWidth;

                    if (vertical) {
                      charWidth = width * widthAdvanceScale - spacing * fontDirection;
                    } else {
                      charWidth = width * widthAdvanceScale + spacing * fontDirection;
                    }

                    x += charWidth;

                    if (restoreNeeded) {
                      ctx.restore();
                    }
                  }

                  if (vertical) {
                    current.y -= x;
                  } else {
                    current.x += x * textHScale;
                  }

                  ctx.restore();
                },
                showType3Text: function CanvasGraphics_showType3Text(glyphs) {
                  var ctx = this.ctx;
                  var current = this.current;
                  var font = current.font;
                  var fontSize = current.fontSize;
                  var fontDirection = current.fontDirection;
                  var spacingDir = font.vertical ? 1 : -1;
                  var charSpacing = current.charSpacing;
                  var wordSpacing = current.wordSpacing;
                  var textHScale = current.textHScale * fontDirection;
                  var fontMatrix = current.fontMatrix || _util.FONT_IDENTITY_MATRIX;
                  var glyphsLength = glyphs.length;
                  var isTextInvisible = current.textRenderingMode === _util.TextRenderingMode.INVISIBLE;
                  var i, glyph, width, spacingLength;

                  if (isTextInvisible || fontSize === 0) {
                    return;
                  }

                  this._cachedGetSinglePixelWidth = null;
                  ctx.save();
                  ctx.transform.apply(ctx, current.textMatrix);
                  ctx.translate(current.x, current.y);
                  ctx.scale(textHScale, fontDirection);

                  for (i = 0; i < glyphsLength; ++i) {
                    glyph = glyphs[i];

                    if ((0, _util.isNum)(glyph)) {
                      spacingLength = spacingDir * glyph * fontSize / 1000;
                      this.ctx.translate(spacingLength, 0);
                      current.x += spacingLength * textHScale;
                      continue;
                    }

                    var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                    var operatorList = font.charProcOperatorList[glyph.operatorListId];

                    if (!operatorList) {
                      (0, _util.warn)("Type3 character \"".concat(glyph.operatorListId, "\" is not available."));
                      continue;
                    }

                    this.processingType3 = glyph;
                    this.save();
                    ctx.scale(fontSize, fontSize);
                    ctx.transform.apply(ctx, fontMatrix);
                    this.executeOperatorList(operatorList);
                    this.restore();

                    var transformed = _util.Util.applyTransform([glyph.width, 0], fontMatrix);

                    width = transformed[0] * fontSize + spacing;
                    ctx.translate(width, 0);
                    current.x += width * textHScale;
                  }

                  ctx.restore();
                  this.processingType3 = null;
                },
                setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {},
                setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
                  this.ctx.rect(llx, lly, urx - llx, ury - lly);
                  this.clip();
                  this.endPath();
                },
                getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
                  var _this33 = this;

                  var pattern;

                  if (IR[0] === "TilingPattern") {
                    var color = IR[1];
                    var baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
                    var canvasGraphicsFactory = {
                      createCanvasGraphics: function createCanvasGraphics(ctx) {
                        return new CanvasGraphics(ctx, _this33.commonObjs, _this33.objs, _this33.canvasFactory, _this33.webGLContext);
                      }
                    };
                    pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
                  } else {
                    pattern = (0, _pattern_helper.getShadingPatternFromIR)(IR);
                  }

                  return pattern;
                },
                setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
                  this.current.strokeColor = this.getColorN_Pattern(arguments);
                },
                setFillColorN: function CanvasGraphics_setFillColorN() {
                  this.current.fillColor = this.getColorN_Pattern(arguments);
                  this.current.patternFill = true;
                },
                setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
                  var color = _util.Util.makeCssRgb(r, g, b);

                  this.ctx.strokeStyle = color;
                  this.current.strokeColor = color;
                },
                setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
                  var color = _util.Util.makeCssRgb(r, g, b);

                  this.ctx.fillStyle = color;
                  this.current.fillColor = color;
                  this.current.patternFill = false;
                },
                shadingFill: function CanvasGraphics_shadingFill(patternIR) {
                  var ctx = this.ctx;
                  this.save();
                  var pattern = (0, _pattern_helper.getShadingPatternFromIR)(patternIR);
                  ctx.fillStyle = pattern.getPattern(ctx, this, true);
                  var inv = ctx.mozCurrentTransformInverse;

                  if (inv) {
                    var canvas = ctx.canvas;
                    var width = canvas.width;
                    var height = canvas.height;

                    var bl = _util.Util.applyTransform([0, 0], inv);

                    var br = _util.Util.applyTransform([0, height], inv);

                    var ul = _util.Util.applyTransform([width, 0], inv);

                    var ur = _util.Util.applyTransform([width, height], inv);

                    var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
                    var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
                    var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
                    var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
                    this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
                  } else {
                    this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                  }

                  this.restore();
                },
                beginInlineImage: function CanvasGraphics_beginInlineImage() {
                  (0, _util.unreachable)("Should not call beginInlineImage");
                },
                beginImageData: function CanvasGraphics_beginImageData() {
                  (0, _util.unreachable)("Should not call beginImageData");
                },
                paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
                  this.save();
                  this.baseTransformStack.push(this.baseTransform);

                  if (Array.isArray(matrix) && matrix.length === 6) {
                    this.transform.apply(this, matrix);
                  }

                  this.baseTransform = this.ctx.mozCurrentTransform;

                  if (bbox) {
                    var width = bbox[2] - bbox[0];
                    var height = bbox[3] - bbox[1];
                    this.ctx.rect(bbox[0], bbox[1], width, height);
                    this.clip();
                    this.endPath();
                  }
                },
                paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
                  this.restore();
                  this.baseTransform = this.baseTransformStack.pop();
                },
                beginGroup: function CanvasGraphics_beginGroup(group) {
                  this.save();
                  var currentCtx = this.ctx;

                  if (!group.isolated) {
                    (0, _util.info)("TODO: Support non-isolated groups.");
                  }

                  if (group.knockout) {
                    (0, _util.warn)("Knockout groups not supported.");
                  }

                  var currentTransform = currentCtx.mozCurrentTransform;

                  if (group.matrix) {
                    currentCtx.transform.apply(currentCtx, group.matrix);
                  }

                  if (!group.bbox) {
                    throw new Error("Bounding box is required.");
                  }

                  var bounds = _util.Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);

                  var canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
                  bounds = _util.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
                  var offsetX = Math.floor(bounds[0]);
                  var offsetY = Math.floor(bounds[1]);
                  var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
                  var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
                  var scaleX = 1,
                      scaleY = 1;

                  if (drawnWidth > MAX_GROUP_SIZE) {
                    scaleX = drawnWidth / MAX_GROUP_SIZE;
                    drawnWidth = MAX_GROUP_SIZE;
                  }

                  if (drawnHeight > MAX_GROUP_SIZE) {
                    scaleY = drawnHeight / MAX_GROUP_SIZE;
                    drawnHeight = MAX_GROUP_SIZE;
                  }

                  var cacheId = "groupAt" + this.groupLevel;

                  if (group.smask) {
                    cacheId += "_smask_" + this.smaskCounter++ % 2;
                  }

                  var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
                  var groupCtx = scratchCanvas.context;
                  groupCtx.scale(1 / scaleX, 1 / scaleY);
                  groupCtx.translate(-offsetX, -offsetY);
                  groupCtx.transform.apply(groupCtx, currentTransform);

                  if (group.smask) {
                    this.smaskStack.push({
                      canvas: scratchCanvas.canvas,
                      context: groupCtx,
                      offsetX: offsetX,
                      offsetY: offsetY,
                      scaleX: scaleX,
                      scaleY: scaleY,
                      subtype: group.smask.subtype,
                      backdrop: group.smask.backdrop,
                      transferMap: group.smask.transferMap || null,
                      startTransformInverse: null
                    });
                  } else {
                    currentCtx.setTransform(1, 0, 0, 1, 0, 0);
                    currentCtx.translate(offsetX, offsetY);
                    currentCtx.scale(scaleX, scaleY);
                  }

                  copyCtxState(currentCtx, groupCtx);
                  this.ctx = groupCtx;
                  this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
                  this.groupStack.push(currentCtx);
                  this.groupLevel++;
                  this.current.activeSMask = null;
                },
                endGroup: function CanvasGraphics_endGroup(group) {
                  this.groupLevel--;
                  var groupCtx = this.ctx;
                  this.ctx = this.groupStack.pop();

                  if (this.ctx.imageSmoothingEnabled !== undefined) {
                    this.ctx.imageSmoothingEnabled = false;
                  } else {
                    this.ctx.mozImageSmoothingEnabled = false;
                  }

                  if (group.smask) {
                    this.tempSMask = this.smaskStack.pop();
                  } else {
                    this.ctx.drawImage(groupCtx.canvas, 0, 0);
                  }

                  this.restore();
                },
                beginAnnotations: function CanvasGraphics_beginAnnotations() {
                  this.save();

                  if (this.baseTransform) {
                    this.ctx.setTransform.apply(this.ctx, this.baseTransform);
                  }
                },
                endAnnotations: function CanvasGraphics_endAnnotations() {
                  this.restore();
                },
                beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
                  this.save();
                  resetCtxToDefault(this.ctx);
                  this.current = new CanvasExtraState();

                  if (Array.isArray(rect) && rect.length === 4) {
                    var width = rect[2] - rect[0];
                    var height = rect[3] - rect[1];
                    this.ctx.rect(rect[0], rect[1], width, height);
                    this.clip();
                    this.endPath();
                  }

                  this.transform.apply(this, transform);
                  this.transform.apply(this, matrix);
                },
                endAnnotation: function CanvasGraphics_endAnnotation() {
                  this.restore();
                },
                paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
                  var domImage = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

                  if (!domImage) {
                    (0, _util.warn)("Dependent image isn't ready yet");
                    return;
                  }

                  this.save();
                  var ctx = this.ctx;
                  ctx.scale(1 / w, -1 / h);
                  ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height, 0, -h, w, h);

                  if (this.imageLayer) {
                    var currentTransform = ctx.mozCurrentTransformInverse;
                    var position = this.getCanvasPosition(0, 0);
                    this.imageLayer.appendImage({
                      objId: objId,
                      left: position[0],
                      top: position[1],
                      width: w / currentTransform[0],
                      height: h / currentTransform[3]
                    });
                  }

                  this.restore();
                },
                paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
                  var ctx = this.ctx;
                  var width = img.width,
                      height = img.height;
                  var fillColor = this.current.fillColor;
                  var isPatternFill = this.current.patternFill;
                  var glyph = this.processingType3;

                  if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
                    if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
                      glyph.compiled = compileType3Glyph({
                        data: img.data,
                        width: width,
                        height: height
                      });
                    } else {
                      glyph.compiled = null;
                    }
                  }

                  if (glyph && glyph.compiled) {
                    glyph.compiled(ctx);
                    return;
                  }

                  var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
                  var maskCtx = maskCanvas.context;
                  maskCtx.save();
                  putBinaryImageMask(maskCtx, img);
                  maskCtx.globalCompositeOperation = "source-in";
                  maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
                  maskCtx.fillRect(0, 0, width, height);
                  maskCtx.restore();
                  this.paintInlineImageXObject(maskCanvas.canvas);
                },
                paintImageMaskXObjectRepeat: function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX, scaleY, positions) {
                  var width = imgData.width;
                  var height = imgData.height;
                  var fillColor = this.current.fillColor;
                  var isPatternFill = this.current.patternFill;
                  var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
                  var maskCtx = maskCanvas.context;
                  maskCtx.save();
                  putBinaryImageMask(maskCtx, imgData);
                  maskCtx.globalCompositeOperation = "source-in";
                  maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
                  maskCtx.fillRect(0, 0, width, height);
                  maskCtx.restore();
                  var ctx = this.ctx;

                  for (var i = 0, ii = positions.length; i < ii; i += 2) {
                    ctx.save();
                    ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
                    ctx.scale(1, -1);
                    ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
                    ctx.restore();
                  }
                },
                paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
                  var ctx = this.ctx;
                  var fillColor = this.current.fillColor;
                  var isPatternFill = this.current.patternFill;

                  for (var i = 0, ii = images.length; i < ii; i++) {
                    var image = images[i];
                    var width = image.width,
                        height = image.height;
                    var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
                    var maskCtx = maskCanvas.context;
                    maskCtx.save();
                    putBinaryImageMask(maskCtx, image);
                    maskCtx.globalCompositeOperation = "source-in";
                    maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
                    maskCtx.fillRect(0, 0, width, height);
                    maskCtx.restore();
                    ctx.save();
                    ctx.transform.apply(ctx, image.transform);
                    ctx.scale(1, -1);
                    ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
                    ctx.restore();
                  }
                },
                paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
                  var imgData = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

                  if (!imgData) {
                    (0, _util.warn)("Dependent image isn't ready yet");
                    return;
                  }

                  this.paintInlineImageXObject(imgData);
                },
                paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
                  var imgData = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

                  if (!imgData) {
                    (0, _util.warn)("Dependent image isn't ready yet");
                    return;
                  }

                  var width = imgData.width;
                  var height = imgData.height;
                  var map = [];

                  for (var i = 0, ii = positions.length; i < ii; i += 2) {
                    map.push({
                      transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
                      x: 0,
                      y: 0,
                      w: width,
                      h: height
                    });
                  }

                  this.paintInlineImageXObjectGroup(imgData, map);
                },
                paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
                  var width = imgData.width;
                  var height = imgData.height;
                  var ctx = this.ctx;
                  this.save();
                  ctx.scale(1 / width, -1 / height);
                  var currentTransform = ctx.mozCurrentTransformInverse;
                  var a = currentTransform[0],
                      b = currentTransform[1];
                  var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
                  var c = currentTransform[2],
                      d = currentTransform[3];
                  var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
                  var imgToPaint, tmpCanvas;

                  if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
                    imgToPaint = imgData;
                  } else {
                    tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
                    var tmpCtx = tmpCanvas.context;
                    putBinaryImageData(tmpCtx, imgData);
                    imgToPaint = tmpCanvas.canvas;
                  }

                  var paintWidth = width,
                      paintHeight = height;
                  var tmpCanvasId = "prescale1";

                  while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
                    var newWidth = paintWidth,
                        newHeight = paintHeight;

                    if (widthScale > 2 && paintWidth > 1) {
                      newWidth = Math.ceil(paintWidth / 2);
                      widthScale /= paintWidth / newWidth;
                    }

                    if (heightScale > 2 && paintHeight > 1) {
                      newHeight = Math.ceil(paintHeight / 2);
                      heightScale /= paintHeight / newHeight;
                    }

                    tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
                    tmpCtx = tmpCanvas.context;
                    tmpCtx.clearRect(0, 0, newWidth, newHeight);
                    tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
                    imgToPaint = tmpCanvas.canvas;
                    paintWidth = newWidth;
                    paintHeight = newHeight;
                    tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
                  }

                  ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);

                  if (this.imageLayer) {
                    var position = this.getCanvasPosition(0, -height);
                    this.imageLayer.appendImage({
                      imgData: imgData,
                      left: position[0],
                      top: position[1],
                      width: width / currentTransform[0],
                      height: height / currentTransform[3]
                    });
                  }

                  this.restore();
                },
                paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
                  var ctx = this.ctx;
                  var w = imgData.width;
                  var h = imgData.height;
                  var tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
                  var tmpCtx = tmpCanvas.context;
                  putBinaryImageData(tmpCtx, imgData);

                  for (var i = 0, ii = map.length; i < ii; i++) {
                    var entry = map[i];
                    ctx.save();
                    ctx.transform.apply(ctx, entry.transform);
                    ctx.scale(1, -1);
                    ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);

                    if (this.imageLayer) {
                      var position = this.getCanvasPosition(entry.x, entry.y);
                      this.imageLayer.appendImage({
                        imgData: imgData,
                        left: position[0],
                        top: position[1],
                        width: w,
                        height: h
                      });
                    }

                    ctx.restore();
                  }
                },
                paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
                  this.ctx.fillRect(0, 0, 1, 1);
                },
                paintXObject: function CanvasGraphics_paintXObject() {
                  (0, _util.warn)("Unsupported 'paintXObject' command.");
                },
                markPoint: function CanvasGraphics_markPoint(tag) {},
                markPointProps: function CanvasGraphics_markPointProps(tag, properties) {},
                beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {},
                beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {},
                endMarkedContent: function CanvasGraphics_endMarkedContent() {},
                beginCompat: function CanvasGraphics_beginCompat() {},
                endCompat: function CanvasGraphics_endCompat() {},
                consumePath: function CanvasGraphics_consumePath() {
                  var ctx = this.ctx;

                  if (this.pendingClip) {
                    if (this.pendingClip === EO_CLIP) {
                      ctx.clip("evenodd");
                    } else {
                      ctx.clip();
                    }

                    this.pendingClip = null;
                  }

                  ctx.beginPath();
                },
                getSinglePixelWidth: function getSinglePixelWidth(scale) {
                  if (this._cachedGetSinglePixelWidth === null) {
                    var inverse = this.ctx.mozCurrentTransformInverse;
                    this._cachedGetSinglePixelWidth = Math.sqrt(Math.max(inverse[0] * inverse[0] + inverse[1] * inverse[1], inverse[2] * inverse[2] + inverse[3] * inverse[3]));
                  }

                  return this._cachedGetSinglePixelWidth;
                },
                getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
                  var transform = this.ctx.mozCurrentTransform;
                  return [transform[0] * x + transform[2] * y + transform[4], transform[1] * x + transform[3] * y + transform[5]];
                }
              };

              for (var op in _util.OPS) {
                CanvasGraphics.prototype[_util.OPS[op]] = CanvasGraphics.prototype[op];
              }

              return CanvasGraphics;
            }();

            exports.CanvasGraphics = CanvasGraphics;
            /***/
          },
          /* 9 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.getShadingPatternFromIR = getShadingPatternFromIR;
            exports.TilingPattern = void 0;

            var _util = __w_pdfjs_require__(1);

            var ShadingIRs = {};

            function applyBoundingBox(ctx, bbox) {
              if (!bbox || typeof Path2D === "undefined") {
                return;
              }

              var width = bbox[2] - bbox[0];
              var height = bbox[3] - bbox[1];
              var region = new Path2D();
              region.rect(bbox[0], bbox[1], width, height);
              ctx.clip(region);
            }

            ShadingIRs.RadialAxial = {
              fromIR: function RadialAxial_fromIR(raw) {
                var type = raw[1];
                var bbox = raw[2];
                var colorStops = raw[3];
                var p0 = raw[4];
                var p1 = raw[5];
                var r0 = raw[6];
                var r1 = raw[7];
                return {
                  type: "Pattern",
                  getPattern: function RadialAxial_getPattern(ctx) {
                    applyBoundingBox(ctx, bbox);
                    var grad;

                    if (type === "axial") {
                      grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
                    } else if (type === "radial") {
                      grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
                    }

                    for (var i = 0, ii = colorStops.length; i < ii; ++i) {
                      var c = colorStops[i];
                      grad.addColorStop(c[0], c[1]);
                    }

                    return grad;
                  }
                };
              }
            };

            var createMeshCanvas = function createMeshCanvasClosure() {
              function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
                var coords = context.coords,
                    colors = context.colors;
                var bytes = data.data,
                    rowSize = data.width * 4;
                var tmp;

                if (coords[p1 + 1] > coords[p2 + 1]) {
                  tmp = p1;
                  p1 = p2;
                  p2 = tmp;
                  tmp = c1;
                  c1 = c2;
                  c2 = tmp;
                }

                if (coords[p2 + 1] > coords[p3 + 1]) {
                  tmp = p2;
                  p2 = p3;
                  p3 = tmp;
                  tmp = c2;
                  c2 = c3;
                  c3 = tmp;
                }

                if (coords[p1 + 1] > coords[p2 + 1]) {
                  tmp = p1;
                  p1 = p2;
                  p2 = tmp;
                  tmp = c1;
                  c1 = c2;
                  c2 = tmp;
                }

                var x1 = (coords[p1] + context.offsetX) * context.scaleX;
                var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
                var x2 = (coords[p2] + context.offsetX) * context.scaleX;
                var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
                var x3 = (coords[p3] + context.offsetX) * context.scaleX;
                var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;

                if (y1 >= y3) {
                  return;
                }

                var c1r = colors[c1],
                    c1g = colors[c1 + 1],
                    c1b = colors[c1 + 2];
                var c2r = colors[c2],
                    c2g = colors[c2 + 1],
                    c2b = colors[c2 + 2];
                var c3r = colors[c3],
                    c3g = colors[c3 + 1],
                    c3b = colors[c3 + 2];
                var minY = Math.round(y1),
                    maxY = Math.round(y3);
                var xa, car, cag, cab;
                var xb, cbr, cbg, cbb;

                for (var y = minY; y <= maxY; y++) {
                  if (y < y2) {
                    var _k = void 0;

                    if (y < y1) {
                      _k = 0;
                    } else if (y1 === y2) {
                      _k = 1;
                    } else {
                      _k = (y1 - y) / (y1 - y2);
                    }

                    xa = x1 - (x1 - x2) * _k;
                    car = c1r - (c1r - c2r) * _k;
                    cag = c1g - (c1g - c2g) * _k;
                    cab = c1b - (c1b - c2b) * _k;
                  } else {
                    var _k2 = void 0;

                    if (y > y3) {
                      _k2 = 1;
                    } else if (y2 === y3) {
                      _k2 = 0;
                    } else {
                      _k2 = (y2 - y) / (y2 - y3);
                    }

                    xa = x2 - (x2 - x3) * _k2;
                    car = c2r - (c2r - c3r) * _k2;
                    cag = c2g - (c2g - c3g) * _k2;
                    cab = c2b - (c2b - c3b) * _k2;
                  }

                  var k = void 0;

                  if (y < y1) {
                    k = 0;
                  } else if (y > y3) {
                    k = 1;
                  } else {
                    k = (y1 - y) / (y1 - y3);
                  }

                  xb = x1 - (x1 - x3) * k;
                  cbr = c1r - (c1r - c3r) * k;
                  cbg = c1g - (c1g - c3g) * k;
                  cbb = c1b - (c1b - c3b) * k;
                  var x1_ = Math.round(Math.min(xa, xb));
                  var x2_ = Math.round(Math.max(xa, xb));
                  var j = rowSize * y + x1_ * 4;

                  for (var x = x1_; x <= x2_; x++) {
                    var _k3 = (xa - x) / (xa - xb);

                    if (_k3 < 0) {
                      _k3 = 0;
                    } else if (_k3 > 1) {
                      _k3 = 1;
                    }

                    bytes[j++] = car - (car - cbr) * _k3 | 0;
                    bytes[j++] = cag - (cag - cbg) * _k3 | 0;
                    bytes[j++] = cab - (cab - cbb) * _k3 | 0;
                    bytes[j++] = 255;
                  }
                }
              }

              function drawFigure(data, figure, context) {
                var ps = figure.coords;
                var cs = figure.colors;
                var i, ii;

                switch (figure.type) {
                  case "lattice":
                    var verticesPerRow = figure.verticesPerRow;
                    var rows = Math.floor(ps.length / verticesPerRow) - 1;
                    var cols = verticesPerRow - 1;

                    for (i = 0; i < rows; i++) {
                      var q = i * verticesPerRow;

                      for (var j = 0; j < cols; j++, q++) {
                        drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
                        drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
                      }
                    }

                    break;

                  case "triangles":
                    for (i = 0, ii = ps.length; i < ii; i += 3) {
                      drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
                    }

                    break;

                  default:
                    throw new Error("illegal figure");
                }
              }

              function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases, webGLContext) {
                var EXPECTED_SCALE = 1.1;
                var MAX_PATTERN_SIZE = 3000;
                var BORDER_SIZE = 2;
                var offsetX = Math.floor(bounds[0]);
                var offsetY = Math.floor(bounds[1]);
                var boundsWidth = Math.ceil(bounds[2]) - offsetX;
                var boundsHeight = Math.ceil(bounds[3]) - offsetY;
                var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
                var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
                var scaleX = boundsWidth / width;
                var scaleY = boundsHeight / height;
                var context = {
                  coords: coords,
                  colors: colors,
                  offsetX: -offsetX,
                  offsetY: -offsetY,
                  scaleX: 1 / scaleX,
                  scaleY: 1 / scaleY
                };
                var paddedWidth = width + BORDER_SIZE * 2;
                var paddedHeight = height + BORDER_SIZE * 2;
                var canvas, tmpCanvas, i, ii;

                if (webGLContext.isEnabled) {
                  canvas = webGLContext.drawFigures({
                    width: width,
                    height: height,
                    backgroundColor: backgroundColor,
                    figures: figures,
                    context: context
                  });
                  tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
                  tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
                  canvas = tmpCanvas.canvas;
                } else {
                  tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
                  var tmpCtx = tmpCanvas.context;
                  var data = tmpCtx.createImageData(width, height);

                  if (backgroundColor) {
                    var bytes = data.data;

                    for (i = 0, ii = bytes.length; i < ii; i += 4) {
                      bytes[i] = backgroundColor[0];
                      bytes[i + 1] = backgroundColor[1];
                      bytes[i + 2] = backgroundColor[2];
                      bytes[i + 3] = 255;
                    }
                  }

                  for (i = 0; i < figures.length; i++) {
                    drawFigure(data, figures[i], context);
                  }

                  tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
                  canvas = tmpCanvas.canvas;
                }

                return {
                  canvas: canvas,
                  offsetX: offsetX - BORDER_SIZE * scaleX,
                  offsetY: offsetY - BORDER_SIZE * scaleY,
                  scaleX: scaleX,
                  scaleY: scaleY
                };
              }

              return createMeshCanvas;
            }();

            ShadingIRs.Mesh = {
              fromIR: function Mesh_fromIR(raw) {
                var coords = raw[2];
                var colors = raw[3];
                var figures = raw[4];
                var bounds = raw[5];
                var matrix = raw[6];
                var bbox = raw[7];
                var background = raw[8];
                return {
                  type: "Pattern",
                  getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
                    applyBoundingBox(ctx, bbox);
                    var scale;

                    if (shadingFill) {
                      scale = _util.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
                    } else {
                      scale = _util.Util.singularValueDecompose2dScale(owner.baseTransform);

                      if (matrix) {
                        var matrixScale = _util.Util.singularValueDecompose2dScale(matrix);

                        scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
                      }
                    }

                    var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases, owner.webGLContext);

                    if (!shadingFill) {
                      ctx.setTransform.apply(ctx, owner.baseTransform);

                      if (matrix) {
                        ctx.transform.apply(ctx, matrix);
                      }
                    }

                    ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
                    ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
                    return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
                  }
                };
              }
            };
            ShadingIRs.Dummy = {
              fromIR: function Dummy_fromIR() {
                return {
                  type: "Pattern",
                  getPattern: function Dummy_fromIR_getPattern() {
                    return "hotpink";
                  }
                };
              }
            };

            function getShadingPatternFromIR(raw) {
              var shadingIR = ShadingIRs[raw[0]];

              if (!shadingIR) {
                throw new Error("Unknown IR type: ".concat(raw[0]));
              }

              return shadingIR.fromIR(raw);
            }

            var TilingPattern = function TilingPatternClosure() {
              var PaintType = {
                COLORED: 1,
                UNCOLORED: 2
              };
              var MAX_PATTERN_SIZE = 3000;

              function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
                this.operatorList = IR[2];
                this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
                this.bbox = IR[4];
                this.xstep = IR[5];
                this.ystep = IR[6];
                this.paintType = IR[7];
                this.tilingType = IR[8];
                this.color = color;
                this.canvasGraphicsFactory = canvasGraphicsFactory;
                this.baseTransform = baseTransform;
                this.type = "Pattern";
                this.ctx = ctx;
              }

              TilingPattern.prototype = {
                createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
                  var operatorList = this.operatorList;
                  var bbox = this.bbox;
                  var xstep = this.xstep;
                  var ystep = this.ystep;
                  var paintType = this.paintType;
                  var tilingType = this.tilingType;
                  var color = this.color;
                  var canvasGraphicsFactory = this.canvasGraphicsFactory;
                  (0, _util.info)("TilingType: " + tilingType);
                  var x0 = bbox[0],
                      y0 = bbox[1],
                      x1 = bbox[2],
                      y1 = bbox[3];

                  var matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);

                  var curMatrixScale = _util.Util.singularValueDecompose2dScale(this.baseTransform);

                  var combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
                  var dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
                  var dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
                  var tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size, true);
                  var tmpCtx = tmpCanvas.context;
                  var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
                  graphics.groupLevel = owner.groupLevel;
                  this.setFillAndStrokeStyleToContext(graphics, paintType, color);
                  graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
                  graphics.transform(1, 0, 0, 1, -x0, -y0);
                  this.clipBbox(graphics, bbox, x0, y0, x1, y1);
                  graphics.executeOperatorList(operatorList);
                  this.ctx.transform(1, 0, 0, 1, x0, y0);
                  this.ctx.scale(1 / dimx.scale, 1 / dimy.scale);
                  return tmpCanvas.canvas;
                },
                getSizeAndScale: function TilingPattern_getSizeAndScale(step, realOutputSize, scale) {
                  step = Math.abs(step);
                  var maxSize = Math.max(MAX_PATTERN_SIZE, realOutputSize);
                  var size = Math.ceil(step * scale);

                  if (size >= maxSize) {
                    size = maxSize;
                  } else {
                    scale = size / step;
                  }

                  return {
                    scale: scale,
                    size: size
                  };
                },
                clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
                  if (Array.isArray(bbox) && bbox.length === 4) {
                    var bboxWidth = x1 - x0;
                    var bboxHeight = y1 - y0;
                    graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
                    graphics.clip();
                    graphics.endPath();
                  }
                },
                setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(graphics, paintType, color) {
                  var context = graphics.ctx,
                      current = graphics.current;

                  switch (paintType) {
                    case PaintType.COLORED:
                      var ctx = this.ctx;
                      context.fillStyle = ctx.fillStyle;
                      context.strokeStyle = ctx.strokeStyle;
                      current.fillColor = ctx.fillStyle;
                      current.strokeColor = ctx.strokeStyle;
                      break;

                    case PaintType.UNCOLORED:
                      var cssColor = _util.Util.makeCssRgb(color[0], color[1], color[2]);

                      context.fillStyle = cssColor;
                      context.strokeStyle = cssColor;
                      current.fillColor = cssColor;
                      current.strokeColor = cssColor;
                      break;

                    default:
                      throw new _util.FormatError("Unsupported paint type: ".concat(paintType));
                  }
                },
                getPattern: function TilingPattern_getPattern(ctx, owner) {
                  ctx = this.ctx;
                  ctx.setTransform.apply(ctx, this.baseTransform);
                  ctx.transform.apply(ctx, this.matrix);
                  var temporaryPatternCanvas = this.createPatternCanvas(owner);
                  return ctx.createPattern(temporaryPatternCanvas, "repeat");
                }
              };
              return TilingPattern;
            }();

            exports.TilingPattern = TilingPattern;
            /***/
          },
          /* 10 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.GlobalWorkerOptions = void 0;
            var GlobalWorkerOptions = Object.create(null);
            exports.GlobalWorkerOptions = GlobalWorkerOptions;
            GlobalWorkerOptions.workerPort = GlobalWorkerOptions.workerPort === undefined ? null : GlobalWorkerOptions.workerPort;
            GlobalWorkerOptions.workerSrc = GlobalWorkerOptions.workerSrc === undefined ? "" : GlobalWorkerOptions.workerSrc;
            /***/
          },
          /* 11 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.MessageHandler = void 0;

            var _util = __w_pdfjs_require__(1);

            var CallbackKind = {
              UNKNOWN: 0,
              DATA: 1,
              ERROR: 2
            };
            var StreamKind = {
              UNKNOWN: 0,
              CANCEL: 1,
              CANCEL_COMPLETE: 2,
              CLOSE: 3,
              ENQUEUE: 4,
              ERROR: 5,
              PULL: 6,
              PULL_COMPLETE: 7,
              START_COMPLETE: 8
            };

            function wrapReason(reason) {
              if (typeof reason !== "object" || reason === null) {
                return reason;
              }

              switch (reason.name) {
                case "AbortException":
                  return new _util.AbortException(reason.message);

                case "MissingPDFException":
                  return new _util.MissingPDFException(reason.message);

                case "UnexpectedResponseException":
                  return new _util.UnexpectedResponseException(reason.message, reason.status);

                case "UnknownErrorException":
                  return new _util.UnknownErrorException(reason.message, reason.details);

                default:
                  return new _util.UnknownErrorException(reason.message, reason.toString());
              }
            }

            var MessageHandler = /*#__PURE__*/function () {
              function MessageHandler(sourceName, targetName, comObj) {
                var _this34 = this;

                _classCallCheck(this, MessageHandler);

                this.sourceName = sourceName;
                this.targetName = targetName;
                this.comObj = comObj;
                this.callbackId = 1;
                this.streamId = 1;
                this.postMessageTransfers = true;
                this.streamSinks = Object.create(null);
                this.streamControllers = Object.create(null);
                this.callbackCapabilities = Object.create(null);
                this.actionHandler = Object.create(null);

                this._onComObjOnMessage = function (event) {
                  var data = event.data;

                  if (data.targetName !== _this34.sourceName) {
                    return;
                  }

                  if (data.stream) {
                    _this34._processStreamMessage(data);

                    return;
                  }

                  if (data.callback) {
                    var callbackId = data.callbackId;
                    var capability = _this34.callbackCapabilities[callbackId];

                    if (!capability) {
                      throw new Error("Cannot resolve callback ".concat(callbackId));
                    }

                    delete _this34.callbackCapabilities[callbackId];

                    if (data.callback === CallbackKind.DATA) {
                      capability.resolve(data.data);
                    } else if (data.callback === CallbackKind.ERROR) {
                      capability.reject(wrapReason(data.reason));
                    } else {
                      throw new Error("Unexpected callback case");
                    }

                    return;
                  }

                  var action = _this34.actionHandler[data.action];

                  if (!action) {
                    throw new Error("Unknown action from worker: ".concat(data.action));
                  }

                  if (data.callbackId) {
                    var _sourceName = _this34.sourceName;
                    var _targetName = data.sourceName;
                    new Promise(function (resolve) {
                      resolve(action(data.data));
                    }).then(function (result) {
                      comObj.postMessage({
                        sourceName: _sourceName,
                        targetName: _targetName,
                        callback: CallbackKind.DATA,
                        callbackId: data.callbackId,
                        data: result
                      });
                    }, function (reason) {
                      comObj.postMessage({
                        sourceName: _sourceName,
                        targetName: _targetName,
                        callback: CallbackKind.ERROR,
                        callbackId: data.callbackId,
                        reason: wrapReason(reason)
                      });
                    });
                    return;
                  }

                  if (data.streamId) {
                    _this34._createStreamSink(data);

                    return;
                  }

                  action(data.data);
                };

                comObj.addEventListener("message", this._onComObjOnMessage);
              }

              _createClass(MessageHandler, [{
                key: "on",
                value: function on(actionName, handler) {
                  var ah = this.actionHandler;

                  if (ah[actionName]) {
                    throw new Error("There is already an actionName called \"".concat(actionName, "\""));
                  }

                  ah[actionName] = handler;
                }
              }, {
                key: "send",
                value: function send(actionName, data, transfers) {
                  this._postMessage({
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: actionName,
                    data: data
                  }, transfers);
                }
              }, {
                key: "sendWithPromise",
                value: function sendWithPromise(actionName, data, transfers) {
                  var callbackId = this.callbackId++;
                  var capability = (0, _util.createPromiseCapability)();
                  this.callbackCapabilities[callbackId] = capability;

                  try {
                    this._postMessage({
                      sourceName: this.sourceName,
                      targetName: this.targetName,
                      action: actionName,
                      callbackId: callbackId,
                      data: data
                    }, transfers);
                  } catch (ex) {
                    capability.reject(ex);
                  }

                  return capability.promise;
                }
              }, {
                key: "sendWithStream",
                value: function sendWithStream(actionName, data, queueingStrategy, transfers) {
                  var _this35 = this;

                  var streamId = this.streamId++;
                  var sourceName = this.sourceName;
                  var targetName = this.targetName;
                  var comObj = this.comObj;
                  return new ReadableStream({
                    start: function start(controller) {
                      var startCapability = (0, _util.createPromiseCapability)();
                      _this35.streamControllers[streamId] = {
                        controller: controller,
                        startCall: startCapability,
                        pullCall: null,
                        cancelCall: null,
                        isClosed: false
                      };

                      _this35._postMessage({
                        sourceName: sourceName,
                        targetName: targetName,
                        action: actionName,
                        streamId: streamId,
                        data: data,
                        desiredSize: controller.desiredSize
                      }, transfers);

                      return startCapability.promise;
                    },
                    pull: function pull(controller) {
                      var pullCapability = (0, _util.createPromiseCapability)();
                      _this35.streamControllers[streamId].pullCall = pullCapability;
                      comObj.postMessage({
                        sourceName: sourceName,
                        targetName: targetName,
                        stream: StreamKind.PULL,
                        streamId: streamId,
                        desiredSize: controller.desiredSize
                      });
                      return pullCapability.promise;
                    },
                    cancel: function cancel(reason) {
                      (0, _util.assert)(reason instanceof Error, "cancel must have a valid reason");
                      var cancelCapability = (0, _util.createPromiseCapability)();
                      _this35.streamControllers[streamId].cancelCall = cancelCapability;
                      _this35.streamControllers[streamId].isClosed = true;
                      comObj.postMessage({
                        sourceName: sourceName,
                        targetName: targetName,
                        stream: StreamKind.CANCEL,
                        streamId: streamId,
                        reason: wrapReason(reason)
                      });
                      return cancelCapability.promise;
                    }
                  }, queueingStrategy);
                }
              }, {
                key: "_createStreamSink",
                value: function _createStreamSink(data) {
                  var self = this;
                  var action = this.actionHandler[data.action];
                  var streamId = data.streamId;
                  var sourceName = this.sourceName;
                  var targetName = data.sourceName;
                  var comObj = this.comObj;
                  var streamSink = {
                    enqueue: function enqueue(chunk) {
                      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                      var transfers = arguments.length > 2 ? arguments[2] : undefined;

                      if (this.isCancelled) {
                        return;
                      }

                      var lastDesiredSize = this.desiredSize;
                      this.desiredSize -= size;

                      if (lastDesiredSize > 0 && this.desiredSize <= 0) {
                        this.sinkCapability = (0, _util.createPromiseCapability)();
                        this.ready = this.sinkCapability.promise;
                      }

                      self._postMessage({
                        sourceName: sourceName,
                        targetName: targetName,
                        stream: StreamKind.ENQUEUE,
                        streamId: streamId,
                        chunk: chunk
                      }, transfers);
                    },
                    close: function close() {
                      if (this.isCancelled) {
                        return;
                      }

                      this.isCancelled = true;
                      comObj.postMessage({
                        sourceName: sourceName,
                        targetName: targetName,
                        stream: StreamKind.CLOSE,
                        streamId: streamId
                      });
                      delete self.streamSinks[streamId];
                    },
                    error: function error(reason) {
                      (0, _util.assert)(reason instanceof Error, "error must have a valid reason");

                      if (this.isCancelled) {
                        return;
                      }

                      this.isCancelled = true;
                      comObj.postMessage({
                        sourceName: sourceName,
                        targetName: targetName,
                        stream: StreamKind.ERROR,
                        streamId: streamId,
                        reason: wrapReason(reason)
                      });
                    },
                    sinkCapability: (0, _util.createPromiseCapability)(),
                    onPull: null,
                    onCancel: null,
                    isCancelled: false,
                    desiredSize: data.desiredSize,
                    ready: null
                  };
                  streamSink.sinkCapability.resolve();
                  streamSink.ready = streamSink.sinkCapability.promise;
                  this.streamSinks[streamId] = streamSink;
                  new Promise(function (resolve) {
                    resolve(action(data.data, streamSink));
                  }).then(function () {
                    comObj.postMessage({
                      sourceName: sourceName,
                      targetName: targetName,
                      stream: StreamKind.START_COMPLETE,
                      streamId: streamId,
                      success: true
                    });
                  }, function (reason) {
                    comObj.postMessage({
                      sourceName: sourceName,
                      targetName: targetName,
                      stream: StreamKind.START_COMPLETE,
                      streamId: streamId,
                      reason: wrapReason(reason)
                    });
                  });
                }
              }, {
                key: "_processStreamMessage",
                value: function _processStreamMessage(data) {
                  var streamId = data.streamId;
                  var sourceName = this.sourceName;
                  var targetName = data.sourceName;
                  var comObj = this.comObj;

                  switch (data.stream) {
                    case StreamKind.START_COMPLETE:
                      if (data.success) {
                        this.streamControllers[streamId].startCall.resolve();
                      } else {
                        this.streamControllers[streamId].startCall.reject(wrapReason(data.reason));
                      }

                      break;

                    case StreamKind.PULL_COMPLETE:
                      if (data.success) {
                        this.streamControllers[streamId].pullCall.resolve();
                      } else {
                        this.streamControllers[streamId].pullCall.reject(wrapReason(data.reason));
                      }

                      break;

                    case StreamKind.PULL:
                      if (!this.streamSinks[streamId]) {
                        comObj.postMessage({
                          sourceName: sourceName,
                          targetName: targetName,
                          stream: StreamKind.PULL_COMPLETE,
                          streamId: streamId,
                          success: true
                        });
                        break;
                      }

                      if (this.streamSinks[streamId].desiredSize <= 0 && data.desiredSize > 0) {
                        this.streamSinks[streamId].sinkCapability.resolve();
                      }

                      this.streamSinks[streamId].desiredSize = data.desiredSize;
                      var onPull = this.streamSinks[data.streamId].onPull;
                      new Promise(function (resolve) {
                        resolve(onPull && onPull());
                      }).then(function () {
                        comObj.postMessage({
                          sourceName: sourceName,
                          targetName: targetName,
                          stream: StreamKind.PULL_COMPLETE,
                          streamId: streamId,
                          success: true
                        });
                      }, function (reason) {
                        comObj.postMessage({
                          sourceName: sourceName,
                          targetName: targetName,
                          stream: StreamKind.PULL_COMPLETE,
                          streamId: streamId,
                          reason: wrapReason(reason)
                        });
                      });
                      break;

                    case StreamKind.ENQUEUE:
                      (0, _util.assert)(this.streamControllers[streamId], "enqueue should have stream controller");

                      if (this.streamControllers[streamId].isClosed) {
                        break;
                      }

                      this.streamControllers[streamId].controller.enqueue(data.chunk);
                      break;

                    case StreamKind.CLOSE:
                      (0, _util.assert)(this.streamControllers[streamId], "close should have stream controller");

                      if (this.streamControllers[streamId].isClosed) {
                        break;
                      }

                      this.streamControllers[streamId].isClosed = true;
                      this.streamControllers[streamId].controller.close();

                      this._deleteStreamController(streamId);

                      break;

                    case StreamKind.ERROR:
                      (0, _util.assert)(this.streamControllers[streamId], "error should have stream controller");
                      this.streamControllers[streamId].controller.error(wrapReason(data.reason));

                      this._deleteStreamController(streamId);

                      break;

                    case StreamKind.CANCEL_COMPLETE:
                      if (data.success) {
                        this.streamControllers[streamId].cancelCall.resolve();
                      } else {
                        this.streamControllers[streamId].cancelCall.reject(wrapReason(data.reason));
                      }

                      this._deleteStreamController(streamId);

                      break;

                    case StreamKind.CANCEL:
                      if (!this.streamSinks[streamId]) {
                        break;
                      }

                      var onCancel = this.streamSinks[data.streamId].onCancel;
                      new Promise(function (resolve) {
                        resolve(onCancel && onCancel(wrapReason(data.reason)));
                      }).then(function () {
                        comObj.postMessage({
                          sourceName: sourceName,
                          targetName: targetName,
                          stream: StreamKind.CANCEL_COMPLETE,
                          streamId: streamId,
                          success: true
                        });
                      }, function (reason) {
                        comObj.postMessage({
                          sourceName: sourceName,
                          targetName: targetName,
                          stream: StreamKind.CANCEL_COMPLETE,
                          streamId: streamId,
                          reason: wrapReason(reason)
                        });
                      });
                      this.streamSinks[streamId].sinkCapability.reject(wrapReason(data.reason));
                      this.streamSinks[streamId].isCancelled = true;
                      delete this.streamSinks[streamId];
                      break;

                    default:
                      throw new Error("Unexpected stream case");
                  }
                }
              }, {
                key: "_deleteStreamController",
                value: function () {
                  var _deleteStreamController2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(streamId) {
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.next = 2;
                            return Promise.allSettled([this.streamControllers[streamId].startCall, this.streamControllers[streamId].pullCall, this.streamControllers[streamId].cancelCall].map(function (capability) {
                              return capability && capability.promise;
                            }));

                          case 2:
                            delete this.streamControllers[streamId];

                          case 3:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6, this);
                  }));

                  function _deleteStreamController(_x5) {
                    return _deleteStreamController2.apply(this, arguments);
                  }

                  return _deleteStreamController;
                }()
              }, {
                key: "_postMessage",
                value: function _postMessage(message, transfers) {
                  if (transfers && this.postMessageTransfers) {
                    this.comObj.postMessage(message, transfers);
                  } else {
                    this.comObj.postMessage(message);
                  }
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  this.comObj.removeEventListener("message", this._onComObjOnMessage);
                }
              }]);

              return MessageHandler;
            }();

            exports.MessageHandler = MessageHandler;
            /***/
          },
          /* 12 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Metadata = void 0;

            var _util = __w_pdfjs_require__(1);

            var _xml_parser = __w_pdfjs_require__(13);

            var Metadata = /*#__PURE__*/function () {
              function Metadata(data) {
                _classCallCheck(this, Metadata);

                (0, _util.assert)(typeof data === "string", "Metadata: input is not a string");
                data = this._repair(data);
                var parser = new _xml_parser.SimpleXMLParser();
                var xmlDocument = parser.parseFromString(data);
                this._metadataMap = new Map();

                if (xmlDocument) {
                  this._parse(xmlDocument);
                }
              }

              _createClass(Metadata, [{
                key: "_repair",
                value: function _repair(data) {
                  return data.replace(/^[^<]+/, "").replace(/>\\376\\377([^<]+)/g, function (all, codes) {
                    var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g, function (code, d1, d2, d3) {
                      return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
                    }).replace(/&(amp|apos|gt|lt|quot);/g, function (str, name) {
                      switch (name) {
                        case "amp":
                          return "&";

                        case "apos":
                          return "'";

                        case "gt":
                          return ">";

                        case "lt":
                          return "<";

                        case "quot":
                          return '"';
                      }

                      throw new Error("_repair: ".concat(name, " isn't defined."));
                    });
                    var chars = "";

                    for (var i = 0, ii = bytes.length; i < ii; i += 2) {
                      var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);

                      if (code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38) {
                        chars += String.fromCharCode(code);
                      } else {
                        chars += "&#x" + (0x10000 + code).toString(16).substring(1) + ";";
                      }
                    }

                    return ">" + chars;
                  });
                }
              }, {
                key: "_parse",
                value: function _parse(xmlDocument) {
                  var rdf = xmlDocument.documentElement;

                  if (rdf.nodeName.toLowerCase() !== "rdf:rdf") {
                    rdf = rdf.firstChild;

                    while (rdf && rdf.nodeName.toLowerCase() !== "rdf:rdf") {
                      rdf = rdf.nextSibling;
                    }
                  }

                  var nodeName = rdf ? rdf.nodeName.toLowerCase() : null;

                  if (!rdf || nodeName !== "rdf:rdf" || !rdf.hasChildNodes()) {
                    return;
                  }

                  var children = rdf.childNodes;

                  for (var i = 0, ii = children.length; i < ii; i++) {
                    var desc = children[i];

                    if (desc.nodeName.toLowerCase() !== "rdf:description") {
                      continue;
                    }

                    for (var j = 0, jj = desc.childNodes.length; j < jj; j++) {
                      if (desc.childNodes[j].nodeName.toLowerCase() !== "#text") {
                        var entry = desc.childNodes[j];
                        var name = entry.nodeName.toLowerCase();

                        this._metadataMap.set(name, entry.textContent.trim());
                      }
                    }
                  }
                }
              }, {
                key: "get",
                value: function get(name) {
                  return this._metadataMap.has(name) ? this._metadataMap.get(name) : null;
                }
              }, {
                key: "getAll",
                value: function getAll() {
                  var obj = Object.create(null);

                  var _iterator8 = _createForOfIteratorHelper(this._metadataMap),
                      _step8;

                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                      var _step8$value = _slicedToArray(_step8.value, 2),
                          key = _step8$value[0],
                          value = _step8$value[1];

                      obj[key] = value;
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }

                  return obj;
                }
              }, {
                key: "has",
                value: function has(name) {
                  return this._metadataMap.has(name);
                }
              }]);

              return Metadata;
            }();

            exports.Metadata = Metadata;
            /***/
          },
          /* 13 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.SimpleXMLParser = void 0;
            var XMLParserErrorCode = {
              NoError: 0,
              EndOfDocument: -1,
              UnterminatedCdat: -2,
              UnterminatedXmlDeclaration: -3,
              UnterminatedDoctypeDeclaration: -4,
              UnterminatedComment: -5,
              MalformedElement: -6,
              OutOfMemory: -7,
              UnterminatedAttributeValue: -8,
              UnterminatedElement: -9,
              ElementNeverBegun: -10
            };

            function isWhitespace(s, index) {
              var ch = s[index];
              return ch === " " || ch === "\n" || ch === "\r" || ch === "\t";
            }

            function isWhitespaceString(s) {
              for (var i = 0, ii = s.length; i < ii; i++) {
                if (!isWhitespace(s, i)) {
                  return false;
                }
              }

              return true;
            }

            var XMLParserBase = /*#__PURE__*/function () {
              function XMLParserBase() {
                _classCallCheck(this, XMLParserBase);
              }

              _createClass(XMLParserBase, [{
                key: "_resolveEntities",
                value: function _resolveEntities(s) {
                  var _this36 = this;

                  return s.replace(/&([^;]+);/g, function (all, entity) {
                    if (entity.substring(0, 2) === "#x") {
                      return String.fromCharCode(parseInt(entity.substring(2), 16));
                    } else if (entity.substring(0, 1) === "#") {
                      return String.fromCharCode(parseInt(entity.substring(1), 10));
                    }

                    switch (entity) {
                      case "lt":
                        return "<";

                      case "gt":
                        return ">";

                      case "amp":
                        return "&";

                      case "quot":
                        return '"';
                    }

                    return _this36.onResolveEntity(entity);
                  });
                }
              }, {
                key: "_parseContent",
                value: function _parseContent(s, start) {
                  var attributes = [];
                  var pos = start;

                  function skipWs() {
                    while (pos < s.length && isWhitespace(s, pos)) {
                      ++pos;
                    }
                  }

                  while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== ">" && s[pos] !== "/") {
                    ++pos;
                  }

                  var name = s.substring(start, pos);
                  skipWs();

                  while (pos < s.length && s[pos] !== ">" && s[pos] !== "/" && s[pos] !== "?") {
                    skipWs();
                    var attrName = "",
                        attrValue = "";

                    while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== "=") {
                      attrName += s[pos];
                      ++pos;
                    }

                    skipWs();

                    if (s[pos] !== "=") {
                      return null;
                    }

                    ++pos;
                    skipWs();
                    var attrEndChar = s[pos];

                    if (attrEndChar !== '"' && attrEndChar !== "'") {
                      return null;
                    }

                    var attrEndIndex = s.indexOf(attrEndChar, ++pos);

                    if (attrEndIndex < 0) {
                      return null;
                    }

                    attrValue = s.substring(pos, attrEndIndex);
                    attributes.push({
                      name: attrName,
                      value: this._resolveEntities(attrValue)
                    });
                    pos = attrEndIndex + 1;
                    skipWs();
                  }

                  return {
                    name: name,
                    attributes: attributes,
                    parsed: pos - start
                  };
                }
              }, {
                key: "_parseProcessingInstruction",
                value: function _parseProcessingInstruction(s, start) {
                  var pos = start;

                  function skipWs() {
                    while (pos < s.length && isWhitespace(s, pos)) {
                      ++pos;
                    }
                  }

                  while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== ">" && s[pos] !== "/") {
                    ++pos;
                  }

                  var name = s.substring(start, pos);
                  skipWs();
                  var attrStart = pos;

                  while (pos < s.length && (s[pos] !== "?" || s[pos + 1] !== ">")) {
                    ++pos;
                  }

                  var value = s.substring(attrStart, pos);
                  return {
                    name: name,
                    value: value,
                    parsed: pos - start
                  };
                }
              }, {
                key: "parseXml",
                value: function parseXml(s) {
                  var i = 0;

                  while (i < s.length) {
                    var ch = s[i];
                    var j = i;

                    if (ch === "<") {
                      ++j;
                      var ch2 = s[j];
                      var q = void 0;

                      switch (ch2) {
                        case "/":
                          ++j;
                          q = s.indexOf(">", j);

                          if (q < 0) {
                            this.onError(XMLParserErrorCode.UnterminatedElement);
                            return;
                          }

                          this.onEndElement(s.substring(j, q));
                          j = q + 1;
                          break;

                        case "?":
                          ++j;

                          var pi = this._parseProcessingInstruction(s, j);

                          if (s.substring(j + pi.parsed, j + pi.parsed + 2) !== "?>") {
                            this.onError(XMLParserErrorCode.UnterminatedXmlDeclaration);
                            return;
                          }

                          this.onPi(pi.name, pi.value);
                          j += pi.parsed + 2;
                          break;

                        case "!":
                          if (s.substring(j + 1, j + 3) === "--") {
                            q = s.indexOf("-->", j + 3);

                            if (q < 0) {
                              this.onError(XMLParserErrorCode.UnterminatedComment);
                              return;
                            }

                            this.onComment(s.substring(j + 3, q));
                            j = q + 3;
                          } else if (s.substring(j + 1, j + 8) === "[CDATA[") {
                            q = s.indexOf("]]>", j + 8);

                            if (q < 0) {
                              this.onError(XMLParserErrorCode.UnterminatedCdat);
                              return;
                            }

                            this.onCdata(s.substring(j + 8, q));
                            j = q + 3;
                          } else if (s.substring(j + 1, j + 8) === "DOCTYPE") {
                            var q2 = s.indexOf("[", j + 8);
                            var complexDoctype = false;
                            q = s.indexOf(">", j + 8);

                            if (q < 0) {
                              this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                              return;
                            }

                            if (q2 > 0 && q > q2) {
                              q = s.indexOf("]>", j + 8);

                              if (q < 0) {
                                this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                                return;
                              }

                              complexDoctype = true;
                            }

                            var doctypeContent = s.substring(j + 8, q + (complexDoctype ? 1 : 0));
                            this.onDoctype(doctypeContent);
                            j = q + (complexDoctype ? 2 : 1);
                          } else {
                            this.onError(XMLParserErrorCode.MalformedElement);
                            return;
                          }

                          break;

                        default:
                          var content = this._parseContent(s, j);

                          if (content === null) {
                            this.onError(XMLParserErrorCode.MalformedElement);
                            return;
                          }

                          var isClosed = false;

                          if (s.substring(j + content.parsed, j + content.parsed + 2) === "/>") {
                            isClosed = true;
                          } else if (s.substring(j + content.parsed, j + content.parsed + 1) !== ">") {
                            this.onError(XMLParserErrorCode.UnterminatedElement);
                            return;
                          }

                          this.onBeginElement(content.name, content.attributes, isClosed);
                          j += content.parsed + (isClosed ? 2 : 1);
                          break;
                      }
                    } else {
                      while (j < s.length && s[j] !== "<") {
                        j++;
                      }

                      var text = s.substring(i, j);
                      this.onText(this._resolveEntities(text));
                    }

                    i = j;
                  }
                }
              }, {
                key: "onResolveEntity",
                value: function onResolveEntity(name) {
                  return "&".concat(name, ";");
                }
              }, {
                key: "onPi",
                value: function onPi(name, value) {}
              }, {
                key: "onComment",
                value: function onComment(text) {}
              }, {
                key: "onCdata",
                value: function onCdata(text) {}
              }, {
                key: "onDoctype",
                value: function onDoctype(doctypeContent) {}
              }, {
                key: "onText",
                value: function onText(text) {}
              }, {
                key: "onBeginElement",
                value: function onBeginElement(name, attributes, isEmpty) {}
              }, {
                key: "onEndElement",
                value: function onEndElement(name) {}
              }, {
                key: "onError",
                value: function onError(code) {}
              }]);

              return XMLParserBase;
            }();

            var SimpleDOMNode = /*#__PURE__*/function () {
              function SimpleDOMNode(nodeName, nodeValue) {
                _classCallCheck(this, SimpleDOMNode);

                this.nodeName = nodeName;
                this.nodeValue = nodeValue;
                Object.defineProperty(this, "parentNode", {
                  value: null,
                  writable: true
                });
              }

              _createClass(SimpleDOMNode, [{
                key: "hasChildNodes",
                value: function hasChildNodes() {
                  return this.childNodes && this.childNodes.length > 0;
                }
              }, {
                key: "firstChild",
                get: function get() {
                  return this.childNodes && this.childNodes[0];
                }
              }, {
                key: "nextSibling",
                get: function get() {
                  var childNodes = this.parentNode.childNodes;

                  if (!childNodes) {
                    return undefined;
                  }

                  var index = childNodes.indexOf(this);

                  if (index === -1) {
                    return undefined;
                  }

                  return childNodes[index + 1];
                }
              }, {
                key: "textContent",
                get: function get() {
                  if (!this.childNodes) {
                    return this.nodeValue || "";
                  }

                  return this.childNodes.map(function (child) {
                    return child.textContent;
                  }).join("");
                }
              }]);

              return SimpleDOMNode;
            }();

            var SimpleXMLParser = /*#__PURE__*/function (_XMLParserBase) {
              _inherits(SimpleXMLParser, _XMLParserBase);

              var _super10 = _createSuper(SimpleXMLParser);

              function SimpleXMLParser() {
                var _this37;

                _classCallCheck(this, SimpleXMLParser);

                _this37 = _super10.call(this);
                _this37._currentFragment = null;
                _this37._stack = null;
                _this37._errorCode = XMLParserErrorCode.NoError;
                return _this37;
              }

              _createClass(SimpleXMLParser, [{
                key: "parseFromString",
                value: function parseFromString(data) {
                  this._currentFragment = [];
                  this._stack = [];
                  this._errorCode = XMLParserErrorCode.NoError;
                  this.parseXml(data);

                  if (this._errorCode !== XMLParserErrorCode.NoError) {
                    return undefined;
                  }

                  var _this$_currentFragmen = _slicedToArray(this._currentFragment, 1),
                      documentElement = _this$_currentFragmen[0];

                  if (!documentElement) {
                    return undefined;
                  }

                  return {
                    documentElement: documentElement
                  };
                }
              }, {
                key: "onResolveEntity",
                value: function onResolveEntity(name) {
                  switch (name) {
                    case "apos":
                      return "'";
                  }

                  return _get(_getPrototypeOf(SimpleXMLParser.prototype), "onResolveEntity", this).call(this, name);
                }
              }, {
                key: "onText",
                value: function onText(text) {
                  if (isWhitespaceString(text)) {
                    return;
                  }

                  var node = new SimpleDOMNode("#text", text);

                  this._currentFragment.push(node);
                }
              }, {
                key: "onCdata",
                value: function onCdata(text) {
                  var node = new SimpleDOMNode("#text", text);

                  this._currentFragment.push(node);
                }
              }, {
                key: "onBeginElement",
                value: function onBeginElement(name, attributes, isEmpty) {
                  var node = new SimpleDOMNode(name);
                  node.childNodes = [];

                  this._currentFragment.push(node);

                  if (isEmpty) {
                    return;
                  }

                  this._stack.push(this._currentFragment);

                  this._currentFragment = node.childNodes;
                }
              }, {
                key: "onEndElement",
                value: function onEndElement(name) {
                  this._currentFragment = this._stack.pop() || [];
                  var lastElement = this._currentFragment[this._currentFragment.length - 1];

                  if (!lastElement) {
                    return;
                  }

                  for (var i = 0, ii = lastElement.childNodes.length; i < ii; i++) {
                    lastElement.childNodes[i].parentNode = lastElement;
                  }
                }
              }, {
                key: "onError",
                value: function onError(code) {
                  this._errorCode = code;
                }
              }]);

              return SimpleXMLParser;
            }(XMLParserBase);

            exports.SimpleXMLParser = SimpleXMLParser;
            /***/
          },
          /* 14 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PDFDataTransportStream = void 0;

            var _util = __w_pdfjs_require__(1);

            var PDFDataTransportStream = /*#__PURE__*/function () {
              function PDFDataTransportStream(params, pdfDataRangeTransport) {
                var _this38 = this;

                _classCallCheck(this, PDFDataTransportStream);

                (0, _util.assert)(pdfDataRangeTransport);
                this._queuedChunks = [];
                this._progressiveDone = params.progressiveDone || false;
                var initialData = params.initialData;

                if (initialData && initialData.length > 0) {
                  var buffer = new Uint8Array(initialData).buffer;

                  this._queuedChunks.push(buffer);
                }

                this._pdfDataRangeTransport = pdfDataRangeTransport;
                this._isStreamingSupported = !params.disableStream;
                this._isRangeSupported = !params.disableRange;
                this._contentLength = params.length;
                this._fullRequestReader = null;
                this._rangeReaders = [];

                this._pdfDataRangeTransport.addRangeListener(function (begin, chunk) {
                  _this38._onReceiveData({
                    begin: begin,
                    chunk: chunk
                  });
                });

                this._pdfDataRangeTransport.addProgressListener(function (loaded, total) {
                  _this38._onProgress({
                    loaded: loaded,
                    total: total
                  });
                });

                this._pdfDataRangeTransport.addProgressiveReadListener(function (chunk) {
                  _this38._onReceiveData({
                    chunk: chunk
                  });
                });

                this._pdfDataRangeTransport.addProgressiveDoneListener(function () {
                  _this38._onProgressiveDone();
                });

                this._pdfDataRangeTransport.transportReady();
              }

              _createClass(PDFDataTransportStream, [{
                key: "_onReceiveData",
                value: function _onReceiveData(args) {
                  var buffer = new Uint8Array(args.chunk).buffer;

                  if (args.begin === undefined) {
                    if (this._fullRequestReader) {
                      this._fullRequestReader._enqueue(buffer);
                    } else {
                      this._queuedChunks.push(buffer);
                    }
                  } else {
                    var found = this._rangeReaders.some(function (rangeReader) {
                      if (rangeReader._begin !== args.begin) {
                        return false;
                      }

                      rangeReader._enqueue(buffer);

                      return true;
                    });

                    (0, _util.assert)(found);
                  }
                }
              }, {
                key: "_onProgress",
                value: function _onProgress(evt) {
                  if (evt.total === undefined) {
                    var firstReader = this._rangeReaders[0];

                    if (firstReader && firstReader.onProgress) {
                      firstReader.onProgress({
                        loaded: evt.loaded
                      });
                    }
                  } else {
                    var fullReader = this._fullRequestReader;

                    if (fullReader && fullReader.onProgress) {
                      fullReader.onProgress({
                        loaded: evt.loaded,
                        total: evt.total
                      });
                    }
                  }
                }
              }, {
                key: "_onProgressiveDone",
                value: function _onProgressiveDone() {
                  if (this._fullRequestReader) {
                    this._fullRequestReader.progressiveDone();
                  }

                  this._progressiveDone = true;
                }
              }, {
                key: "_removeRangeReader",
                value: function _removeRangeReader(reader) {
                  var i = this._rangeReaders.indexOf(reader);

                  if (i >= 0) {
                    this._rangeReaders.splice(i, 1);
                  }
                }
              }, {
                key: "getFullReader",
                value: function getFullReader() {
                  (0, _util.assert)(!this._fullRequestReader);
                  var queuedChunks = this._queuedChunks;
                  this._queuedChunks = null;
                  return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone);
                }
              }, {
                key: "getRangeReader",
                value: function getRangeReader(begin, end) {
                  if (end <= this._progressiveDataLength) {
                    return null;
                  }

                  var reader = new PDFDataTransportStreamRangeReader(this, begin, end);

                  this._pdfDataRangeTransport.requestDataRange(begin, end);

                  this._rangeReaders.push(reader);

                  return reader;
                }
              }, {
                key: "cancelAllRequests",
                value: function cancelAllRequests(reason) {
                  if (this._fullRequestReader) {
                    this._fullRequestReader.cancel(reason);
                  }

                  var readers = this._rangeReaders.slice(0);

                  readers.forEach(function (rangeReader) {
                    rangeReader.cancel(reason);
                  });

                  this._pdfDataRangeTransport.abort();
                }
              }, {
                key: "_progressiveDataLength",
                get: function get() {
                  return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
                }
              }]);

              return PDFDataTransportStream;
            }();

            exports.PDFDataTransportStream = PDFDataTransportStream;

            var PDFDataTransportStreamReader = /*#__PURE__*/function () {
              function PDFDataTransportStreamReader(stream, queuedChunks) {
                var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                _classCallCheck(this, PDFDataTransportStreamReader);

                this._stream = stream;
                this._done = progressiveDone || false;
                this._filename = null;
                this._queuedChunks = queuedChunks || [];
                this._loaded = 0;

                var _iterator9 = _createForOfIteratorHelper(this._queuedChunks),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var chunk = _step9.value;
                    this._loaded += chunk.byteLength;
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }

                this._requests = [];
                this._headersReady = Promise.resolve();
                stream._fullRequestReader = this;
                this.onProgress = null;
              }

              _createClass(PDFDataTransportStreamReader, [{
                key: "_enqueue",
                value: function _enqueue(chunk) {
                  if (this._done) {
                    return;
                  }

                  if (this._requests.length > 0) {
                    var requestCapability = this._requests.shift();

                    requestCapability.resolve({
                      value: chunk,
                      done: false
                    });
                  } else {
                    this._queuedChunks.push(chunk);
                  }

                  this._loaded += chunk.byteLength;
                }
              }, {
                key: "read",
                value: function () {
                  var _read = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                    var chunk, requestCapability;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            if (!(this._queuedChunks.length > 0)) {
                              _context7.next = 3;
                              break;
                            }

                            chunk = this._queuedChunks.shift();
                            return _context7.abrupt("return", {
                              value: chunk,
                              done: false
                            });

                          case 3:
                            if (!this._done) {
                              _context7.next = 5;
                              break;
                            }

                            return _context7.abrupt("return", {
                              value: undefined,
                              done: true
                            });

                          case 5:
                            requestCapability = (0, _util.createPromiseCapability)();

                            this._requests.push(requestCapability);

                            return _context7.abrupt("return", requestCapability.promise);

                          case 8:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7, this);
                  }));

                  function read() {
                    return _read.apply(this, arguments);
                  }

                  return read;
                }()
              }, {
                key: "cancel",
                value: function cancel(reason) {
                  this._done = true;

                  this._requests.forEach(function (requestCapability) {
                    requestCapability.resolve({
                      value: undefined,
                      done: true
                    });
                  });

                  this._requests = [];
                }
              }, {
                key: "progressiveDone",
                value: function progressiveDone() {
                  if (this._done) {
                    return;
                  }

                  this._done = true;
                }
              }, {
                key: "headersReady",
                get: function get() {
                  return this._headersReady;
                }
              }, {
                key: "filename",
                get: function get() {
                  return this._filename;
                }
              }, {
                key: "isRangeSupported",
                get: function get() {
                  return this._stream._isRangeSupported;
                }
              }, {
                key: "isStreamingSupported",
                get: function get() {
                  return this._stream._isStreamingSupported;
                }
              }, {
                key: "contentLength",
                get: function get() {
                  return this._stream._contentLength;
                }
              }]);

              return PDFDataTransportStreamReader;
            }();

            var PDFDataTransportStreamRangeReader = /*#__PURE__*/function () {
              function PDFDataTransportStreamRangeReader(stream, begin, end) {
                _classCallCheck(this, PDFDataTransportStreamRangeReader);

                this._stream = stream;
                this._begin = begin;
                this._end = end;
                this._queuedChunk = null;
                this._requests = [];
                this._done = false;
                this.onProgress = null;
              }

              _createClass(PDFDataTransportStreamRangeReader, [{
                key: "_enqueue",
                value: function _enqueue(chunk) {
                  if (this._done) {
                    return;
                  }

                  if (this._requests.length === 0) {
                    this._queuedChunk = chunk;
                  } else {
                    var requestsCapability = this._requests.shift();

                    requestsCapability.resolve({
                      value: chunk,
                      done: false
                    });

                    this._requests.forEach(function (requestCapability) {
                      requestCapability.resolve({
                        value: undefined,
                        done: true
                      });
                    });

                    this._requests = [];
                  }

                  this._done = true;

                  this._stream._removeRangeReader(this);
                }
              }, {
                key: "read",
                value: function () {
                  var _read2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                    var chunk, requestCapability;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            if (!this._queuedChunk) {
                              _context8.next = 4;
                              break;
                            }

                            chunk = this._queuedChunk;
                            this._queuedChunk = null;
                            return _context8.abrupt("return", {
                              value: chunk,
                              done: false
                            });

                          case 4:
                            if (!this._done) {
                              _context8.next = 6;
                              break;
                            }

                            return _context8.abrupt("return", {
                              value: undefined,
                              done: true
                            });

                          case 6:
                            requestCapability = (0, _util.createPromiseCapability)();

                            this._requests.push(requestCapability);

                            return _context8.abrupt("return", requestCapability.promise);

                          case 9:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8, this);
                  }));

                  function read() {
                    return _read2.apply(this, arguments);
                  }

                  return read;
                }()
              }, {
                key: "cancel",
                value: function cancel(reason) {
                  this._done = true;

                  this._requests.forEach(function (requestCapability) {
                    requestCapability.resolve({
                      value: undefined,
                      done: true
                    });
                  });

                  this._requests = [];

                  this._stream._removeRangeReader(this);
                }
              }, {
                key: "isStreamingSupported",
                get: function get() {
                  return false;
                }
              }]);

              return PDFDataTransportStreamRangeReader;
            }();
            /***/

          },
          /* 15 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.WebGLContext = void 0;

            var _util = __w_pdfjs_require__(1);

            var WebGLContext = /*#__PURE__*/function () {
              function WebGLContext(_ref26) {
                var _ref26$enable = _ref26.enable,
                    enable = _ref26$enable === void 0 ? false : _ref26$enable;

                _classCallCheck(this, WebGLContext);

                this._enabled = enable === true;
              }

              _createClass(WebGLContext, [{
                key: "composeSMask",
                value: function composeSMask(_ref27) {
                  var layer = _ref27.layer,
                      mask = _ref27.mask,
                      properties = _ref27.properties;
                  return WebGLUtils.composeSMask(layer, mask, properties);
                }
              }, {
                key: "drawFigures",
                value: function drawFigures(_ref28) {
                  var width = _ref28.width,
                      height = _ref28.height,
                      backgroundColor = _ref28.backgroundColor,
                      figures = _ref28.figures,
                      context = _ref28.context;
                  return WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
                }
              }, {
                key: "clear",
                value: function clear() {
                  WebGLUtils.cleanup();
                }
              }, {
                key: "isEnabled",
                get: function get() {
                  var enabled = this._enabled;

                  if (enabled) {
                    enabled = WebGLUtils.tryInitGL();
                  }

                  return (0, _util.shadow)(this, "isEnabled", enabled);
                }
              }]);

              return WebGLContext;
            }();

            exports.WebGLContext = WebGLContext;

            var WebGLUtils = function WebGLUtilsClosure() {
              function loadShader(gl, code, shaderType) {
                var shader = gl.createShader(shaderType);
                gl.shaderSource(shader, code);
                gl.compileShader(shader);
                var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

                if (!compiled) {
                  var errorMsg = gl.getShaderInfoLog(shader);
                  throw new Error("Error during shader compilation: " + errorMsg);
                }

                return shader;
              }

              function createVertexShader(gl, code) {
                return loadShader(gl, code, gl.VERTEX_SHADER);
              }

              function createFragmentShader(gl, code) {
                return loadShader(gl, code, gl.FRAGMENT_SHADER);
              }

              function createProgram(gl, shaders) {
                var program = gl.createProgram();

                for (var i = 0, ii = shaders.length; i < ii; ++i) {
                  gl.attachShader(program, shaders[i]);
                }

                gl.linkProgram(program);
                var linked = gl.getProgramParameter(program, gl.LINK_STATUS);

                if (!linked) {
                  var errorMsg = gl.getProgramInfoLog(program);
                  throw new Error("Error during program linking: " + errorMsg);
                }

                return program;
              }

              function createTexture(gl, image, textureId) {
                gl.activeTexture(textureId);
                var texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                return texture;
              }

              var currentGL, currentCanvas;

              function generateGL() {
                if (currentGL) {
                  return;
                }

                currentCanvas = document.createElement("canvas");
                currentGL = currentCanvas.getContext("webgl", {
                  premultipliedalpha: false
                });
              }

              var smaskVertexShaderCode = "\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ";
              var smaskFragmentShaderCode = "\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ";
              var smaskCache = null;

              function initSmaskGL() {
                var canvas, gl;
                generateGL();
                canvas = currentCanvas;
                currentCanvas = null;
                gl = currentGL;
                currentGL = null;
                var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
                var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
                var program = createProgram(gl, [vertexShader, fragmentShader]);
                gl.useProgram(program);
                var cache = {};
                cache.gl = gl;
                cache.canvas = canvas;
                cache.resolutionLocation = gl.getUniformLocation(program, "u_resolution");
                cache.positionLocation = gl.getAttribLocation(program, "a_position");
                cache.backdropLocation = gl.getUniformLocation(program, "u_backdrop");
                cache.subtypeLocation = gl.getUniformLocation(program, "u_subtype");
                var texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
                var texLayerLocation = gl.getUniformLocation(program, "u_image");
                var texMaskLocation = gl.getUniformLocation(program, "u_mask");
                var texCoordBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
                gl.enableVertexAttribArray(texCoordLocation);
                gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
                gl.uniform1i(texLayerLocation, 0);
                gl.uniform1i(texMaskLocation, 1);
                smaskCache = cache;
              }

              function composeSMask(layer, mask, properties) {
                var width = layer.width,
                    height = layer.height;

                if (!smaskCache) {
                  initSmaskGL();
                }

                var cache = smaskCache,
                    canvas = cache.canvas,
                    gl = cache.gl;
                canvas.width = width;
                canvas.height = height;
                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                gl.uniform2f(cache.resolutionLocation, width, height);

                if (properties.backdrop) {
                  gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
                } else {
                  gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
                }

                gl.uniform1i(cache.subtypeLocation, properties.subtype === "Luminosity" ? 1 : 0);
                var texture = createTexture(gl, layer, gl.TEXTURE0);
                var maskTexture = createTexture(gl, mask, gl.TEXTURE1);
                var buffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, width, 0, 0, height, 0, height, width, 0, width, height]), gl.STATIC_DRAW);
                gl.enableVertexAttribArray(cache.positionLocation);
                gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
                gl.clearColor(0, 0, 0, 0);
                gl.enable(gl.BLEND);
                gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.drawArrays(gl.TRIANGLES, 0, 6);
                gl.flush();
                gl.deleteTexture(texture);
                gl.deleteTexture(maskTexture);
                gl.deleteBuffer(buffer);
                return canvas;
              }

              var figuresVertexShaderCode = "\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ";
              var figuresFragmentShaderCode = "\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ";
              var figuresCache = null;

              function initFiguresGL() {
                var canvas, gl;
                generateGL();
                canvas = currentCanvas;
                currentCanvas = null;
                gl = currentGL;
                currentGL = null;
                var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
                var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
                var program = createProgram(gl, [vertexShader, fragmentShader]);
                gl.useProgram(program);
                var cache = {};
                cache.gl = gl;
                cache.canvas = canvas;
                cache.resolutionLocation = gl.getUniformLocation(program, "u_resolution");
                cache.scaleLocation = gl.getUniformLocation(program, "u_scale");
                cache.offsetLocation = gl.getUniformLocation(program, "u_offset");
                cache.positionLocation = gl.getAttribLocation(program, "a_position");
                cache.colorLocation = gl.getAttribLocation(program, "a_color");
                figuresCache = cache;
              }

              function drawFigures(width, height, backgroundColor, figures, context) {
                if (!figuresCache) {
                  initFiguresGL();
                }

                var cache = figuresCache,
                    canvas = cache.canvas,
                    gl = cache.gl;
                canvas.width = width;
                canvas.height = height;
                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                gl.uniform2f(cache.resolutionLocation, width, height);
                var count = 0;
                var i, ii, rows;

                for (i = 0, ii = figures.length; i < ii; i++) {
                  switch (figures[i].type) {
                    case "lattice":
                      rows = figures[i].coords.length / figures[i].verticesPerRow | 0;
                      count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
                      break;

                    case "triangles":
                      count += figures[i].coords.length;
                      break;
                  }
                }

                var coords = new Float32Array(count * 2);
                var colors = new Uint8Array(count * 3);
                var coordsMap = context.coords,
                    colorsMap = context.colors;
                var pIndex = 0,
                    cIndex = 0;

                for (i = 0, ii = figures.length; i < ii; i++) {
                  var figure = figures[i],
                      ps = figure.coords,
                      cs = figure.colors;

                  switch (figure.type) {
                    case "lattice":
                      var cols = figure.verticesPerRow;
                      rows = ps.length / cols | 0;

                      for (var row = 1; row < rows; row++) {
                        var offset = row * cols + 1;

                        for (var col = 1; col < cols; col++, offset++) {
                          coords[pIndex] = coordsMap[ps[offset - cols - 1]];
                          coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
                          coords[pIndex + 2] = coordsMap[ps[offset - cols]];
                          coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
                          coords[pIndex + 4] = coordsMap[ps[offset - 1]];
                          coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
                          colors[cIndex] = colorsMap[cs[offset - cols - 1]];
                          colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
                          colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
                          colors[cIndex + 3] = colorsMap[cs[offset - cols]];
                          colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
                          colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
                          colors[cIndex + 6] = colorsMap[cs[offset - 1]];
                          colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
                          colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
                          coords[pIndex + 6] = coords[pIndex + 2];
                          coords[pIndex + 7] = coords[pIndex + 3];
                          coords[pIndex + 8] = coords[pIndex + 4];
                          coords[pIndex + 9] = coords[pIndex + 5];
                          coords[pIndex + 10] = coordsMap[ps[offset]];
                          coords[pIndex + 11] = coordsMap[ps[offset] + 1];
                          colors[cIndex + 9] = colors[cIndex + 3];
                          colors[cIndex + 10] = colors[cIndex + 4];
                          colors[cIndex + 11] = colors[cIndex + 5];
                          colors[cIndex + 12] = colors[cIndex + 6];
                          colors[cIndex + 13] = colors[cIndex + 7];
                          colors[cIndex + 14] = colors[cIndex + 8];
                          colors[cIndex + 15] = colorsMap[cs[offset]];
                          colors[cIndex + 16] = colorsMap[cs[offset] + 1];
                          colors[cIndex + 17] = colorsMap[cs[offset] + 2];
                          pIndex += 12;
                          cIndex += 18;
                        }
                      }

                      break;

                    case "triangles":
                      for (var j = 0, jj = ps.length; j < jj; j++) {
                        coords[pIndex] = coordsMap[ps[j]];
                        coords[pIndex + 1] = coordsMap[ps[j] + 1];
                        colors[cIndex] = colorsMap[cs[j]];
                        colors[cIndex + 1] = colorsMap[cs[j] + 1];
                        colors[cIndex + 2] = colorsMap[cs[j] + 2];
                        pIndex += 2;
                        cIndex += 3;
                      }

                      break;
                  }
                }

                if (backgroundColor) {
                  gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
                } else {
                  gl.clearColor(0, 0, 0, 0);
                }

                gl.clear(gl.COLOR_BUFFER_BIT);
                var coordsBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
                gl.enableVertexAttribArray(cache.positionLocation);
                gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
                var colorsBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
                gl.enableVertexAttribArray(cache.colorLocation);
                gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
                gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
                gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
                gl.drawArrays(gl.TRIANGLES, 0, count);
                gl.flush();
                gl.deleteBuffer(coordsBuffer);
                gl.deleteBuffer(colorsBuffer);
                return canvas;
              }

              return {
                tryInitGL: function tryInitGL() {
                  try {
                    generateGL();
                    return !!currentGL;
                  } catch (ex) {}

                  return false;
                },
                composeSMask: composeSMask,
                drawFigures: drawFigures,
                cleanup: function cleanup() {
                  if (smaskCache && smaskCache.canvas) {
                    smaskCache.canvas.width = 0;
                    smaskCache.canvas.height = 0;
                  }

                  if (figuresCache && figuresCache.canvas) {
                    figuresCache.canvas.width = 0;
                    figuresCache.canvas.height = 0;
                  }

                  smaskCache = null;
                  figuresCache = null;
                }
              };
            }();
            /***/

          },
          /* 16 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.renderTextLayer = void 0;

            var _util = __w_pdfjs_require__(1);

            var renderTextLayer = function renderTextLayerClosure() {
              var MAX_TEXT_DIVS_TO_RENDER = 100000;
              var NonWhitespaceRegexp = /\S/;

              function isAllWhitespace(str) {
                return !NonWhitespaceRegexp.test(str);
              }

              function appendText(task, geom, styles) {
                var textDiv = document.createElement("span");
                var textDivProperties = {
                  angle: 0,
                  canvasWidth: 0,
                  isWhitespace: false,
                  originalTransform: null,
                  paddingBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  scale: 1
                };

                task._textDivs.push(textDiv);

                if (isAllWhitespace(geom.str)) {
                  textDivProperties.isWhitespace = true;

                  task._textDivProperties.set(textDiv, textDivProperties);

                  return;
                }

                var tx = _util.Util.transform(task._viewport.transform, geom.transform);

                var angle = Math.atan2(tx[1], tx[0]);
                var style = styles[geom.fontName];

                if (style.vertical) {
                  angle += Math.PI / 2;
                }

                var fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
                var fontAscent = fontHeight;

                if (style.ascent) {
                  fontAscent = style.ascent * fontAscent;
                } else if (style.descent) {
                  fontAscent = (1 + style.descent) * fontAscent;
                }

                var left, top;

                if (angle === 0) {
                  left = tx[4];
                  top = tx[5] - fontAscent;
                } else {
                  left = tx[4] + fontAscent * Math.sin(angle);
                  top = tx[5] - fontAscent * Math.cos(angle);
                }

                textDiv.style.left = "".concat(left, "px");
                textDiv.style.top = "".concat(top, "px");
                textDiv.style.fontSize = "".concat(fontHeight, "px");
                textDiv.style.fontFamily = style.fontFamily;
                textDiv.textContent = geom.str;

                if (task._fontInspectorEnabled) {
                  textDiv.dataset.fontName = geom.fontName;
                }

                if (angle !== 0) {
                  textDivProperties.angle = angle * (180 / Math.PI);
                }

                if (geom.str.length > 1) {
                  if (style.vertical) {
                    textDivProperties.canvasWidth = geom.height * task._viewport.scale;
                  } else {
                    textDivProperties.canvasWidth = geom.width * task._viewport.scale;
                  }
                }

                task._textDivProperties.set(textDiv, textDivProperties);

                if (task._textContentStream) {
                  task._layoutText(textDiv);
                }

                if (task._enhanceTextSelection) {
                  var angleCos = 1,
                      angleSin = 0;

                  if (angle !== 0) {
                    angleCos = Math.cos(angle);
                    angleSin = Math.sin(angle);
                  }

                  var divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
                  var divHeight = fontHeight;
                  var m, b;

                  if (angle !== 0) {
                    m = [angleCos, angleSin, -angleSin, angleCos, left, top];
                    b = _util.Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
                  } else {
                    b = [left, top, left + divWidth, top + divHeight];
                  }

                  task._bounds.push({
                    left: b[0],
                    top: b[1],
                    right: b[2],
                    bottom: b[3],
                    div: textDiv,
                    size: [divWidth, divHeight],
                    m: m
                  });
                }
              }

              function render(task) {
                if (task._canceled) {
                  return;
                }

                var textDivs = task._textDivs;
                var capability = task._capability;
                var textDivsLength = textDivs.length;

                if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
                  task._renderingDone = true;
                  capability.resolve();
                  return;
                }

                if (!task._textContentStream) {
                  for (var i = 0; i < textDivsLength; i++) {
                    task._layoutText(textDivs[i]);
                  }
                }

                task._renderingDone = true;
                capability.resolve();
              }

              function expand(task) {
                var bounds = task._bounds;
                var viewport = task._viewport;
                var expanded = expandBounds(viewport.width, viewport.height, bounds);

                for (var i = 0; i < expanded.length; i++) {
                  var div = bounds[i].div;

                  var divProperties = task._textDivProperties.get(div);

                  if (divProperties.angle === 0) {
                    divProperties.paddingLeft = bounds[i].left - expanded[i].left;
                    divProperties.paddingTop = bounds[i].top - expanded[i].top;
                    divProperties.paddingRight = expanded[i].right - bounds[i].right;
                    divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;

                    task._textDivProperties.set(div, divProperties);

                    continue;
                  }

                  var e = expanded[i],
                      b = bounds[i];
                  var m = b.m,
                      c = m[0],
                      s = m[1];
                  var points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
                  var ts = new Float64Array(64);
                  points.forEach(function (p, i) {
                    var t = _util.Util.applyTransform(p, m);

                    ts[i + 0] = c && (e.left - t[0]) / c;
                    ts[i + 4] = s && (e.top - t[1]) / s;
                    ts[i + 8] = c && (e.right - t[0]) / c;
                    ts[i + 12] = s && (e.bottom - t[1]) / s;
                    ts[i + 16] = s && (e.left - t[0]) / -s;
                    ts[i + 20] = c && (e.top - t[1]) / c;
                    ts[i + 24] = s && (e.right - t[0]) / -s;
                    ts[i + 28] = c && (e.bottom - t[1]) / c;
                    ts[i + 32] = c && (e.left - t[0]) / -c;
                    ts[i + 36] = s && (e.top - t[1]) / -s;
                    ts[i + 40] = c && (e.right - t[0]) / -c;
                    ts[i + 44] = s && (e.bottom - t[1]) / -s;
                    ts[i + 48] = s && (e.left - t[0]) / s;
                    ts[i + 52] = c && (e.top - t[1]) / -c;
                    ts[i + 56] = s && (e.right - t[0]) / s;
                    ts[i + 60] = c && (e.bottom - t[1]) / -c;
                  });

                  var findPositiveMin = function findPositiveMin(ts, offset, count) {
                    var result = 0;

                    for (var i = 0; i < count; i++) {
                      var t = ts[offset++];

                      if (t > 0) {
                        result = result ? Math.min(t, result) : t;
                      }
                    }

                    return result;
                  };

                  var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
                  divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
                  divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
                  divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
                  divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;

                  task._textDivProperties.set(div, divProperties);
                }
              }

              function expandBounds(width, height, boxes) {
                var bounds = boxes.map(function (box, i) {
                  return {
                    x1: box.left,
                    y1: box.top,
                    x2: box.right,
                    y2: box.bottom,
                    index: i,
                    x1New: undefined,
                    x2New: undefined
                  };
                });
                expandBoundsLTR(width, bounds);
                var expanded = new Array(boxes.length);
                bounds.forEach(function (b) {
                  var i = b.index;
                  expanded[i] = {
                    left: b.x1New,
                    top: 0,
                    right: b.x2New,
                    bottom: 0
                  };
                });
                boxes.map(function (box, i) {
                  var e = expanded[i],
                      b = bounds[i];
                  b.x1 = box.top;
                  b.y1 = width - e.right;
                  b.x2 = box.bottom;
                  b.y2 = width - e.left;
                  b.index = i;
                  b.x1New = undefined;
                  b.x2New = undefined;
                });
                expandBoundsLTR(height, bounds);
                bounds.forEach(function (b) {
                  var i = b.index;
                  expanded[i].top = b.x1New;
                  expanded[i].bottom = b.x2New;
                });
                return expanded;
              }

              function expandBoundsLTR(width, bounds) {
                bounds.sort(function (a, b) {
                  return a.x1 - b.x1 || a.index - b.index;
                });
                var fakeBoundary = {
                  x1: -Infinity,
                  y1: -Infinity,
                  x2: 0,
                  y2: Infinity,
                  index: -1,
                  x1New: 0,
                  x2New: 0
                };
                var horizon = [{
                  start: -Infinity,
                  end: Infinity,
                  boundary: fakeBoundary
                }];
                bounds.forEach(function (boundary) {
                  var i = 0;

                  while (i < horizon.length && horizon[i].end <= boundary.y1) {
                    i++;
                  }

                  var j = horizon.length - 1;

                  while (j >= 0 && horizon[j].start >= boundary.y2) {
                    j--;
                  }

                  var horizonPart, affectedBoundary;
                  var q,
                      k,
                      maxXNew = -Infinity;

                  for (q = i; q <= j; q++) {
                    horizonPart = horizon[q];
                    affectedBoundary = horizonPart.boundary;
                    var xNew;

                    if (affectedBoundary.x2 > boundary.x1) {
                      xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
                    } else if (affectedBoundary.x2New === undefined) {
                      xNew = (affectedBoundary.x2 + boundary.x1) / 2;
                    } else {
                      xNew = affectedBoundary.x2New;
                    }

                    if (xNew > maxXNew) {
                      maxXNew = xNew;
                    }
                  }

                  boundary.x1New = maxXNew;

                  for (q = i; q <= j; q++) {
                    horizonPart = horizon[q];
                    affectedBoundary = horizonPart.boundary;

                    if (affectedBoundary.x2New === undefined) {
                      if (affectedBoundary.x2 > boundary.x1) {
                        if (affectedBoundary.index > boundary.index) {
                          affectedBoundary.x2New = affectedBoundary.x2;
                        }
                      } else {
                        affectedBoundary.x2New = maxXNew;
                      }
                    } else if (affectedBoundary.x2New > maxXNew) {
                      affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
                    }
                  }

                  var changedHorizon = [],
                      lastBoundary = null;

                  for (q = i; q <= j; q++) {
                    horizonPart = horizon[q];
                    affectedBoundary = horizonPart.boundary;
                    var useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;

                    if (lastBoundary === useBoundary) {
                      changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
                    } else {
                      changedHorizon.push({
                        start: horizonPart.start,
                        end: horizonPart.end,
                        boundary: useBoundary
                      });
                      lastBoundary = useBoundary;
                    }
                  }

                  if (horizon[i].start < boundary.y1) {
                    changedHorizon[0].start = boundary.y1;
                    changedHorizon.unshift({
                      start: horizon[i].start,
                      end: boundary.y1,
                      boundary: horizon[i].boundary
                    });
                  }

                  if (boundary.y2 < horizon[j].end) {
                    changedHorizon[changedHorizon.length - 1].end = boundary.y2;
                    changedHorizon.push({
                      start: boundary.y2,
                      end: horizon[j].end,
                      boundary: horizon[j].boundary
                    });
                  }

                  for (q = i; q <= j; q++) {
                    horizonPart = horizon[q];
                    affectedBoundary = horizonPart.boundary;

                    if (affectedBoundary.x2New !== undefined) {
                      continue;
                    }

                    var used = false;

                    for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
                      used = horizon[k].boundary === affectedBoundary;
                    }

                    for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
                      used = horizon[k].boundary === affectedBoundary;
                    }

                    for (k = 0; !used && k < changedHorizon.length; k++) {
                      used = changedHorizon[k].boundary === affectedBoundary;
                    }

                    if (!used) {
                      affectedBoundary.x2New = maxXNew;
                    }
                  }

                  Array.prototype.splice.apply(horizon, [i, j - i + 1].concat(changedHorizon));
                });
                horizon.forEach(function (horizonPart) {
                  var affectedBoundary = horizonPart.boundary;

                  if (affectedBoundary.x2New === undefined) {
                    affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
                  }
                });
              }

              function TextLayerRenderTask(_ref29) {
                var _this39 = this;

                var textContent = _ref29.textContent,
                    textContentStream = _ref29.textContentStream,
                    container = _ref29.container,
                    viewport = _ref29.viewport,
                    textDivs = _ref29.textDivs,
                    textContentItemsStr = _ref29.textContentItemsStr,
                    enhanceTextSelection = _ref29.enhanceTextSelection;
                this._textContent = textContent;
                this._textContentStream = textContentStream;
                this._container = container;
                this._viewport = viewport;
                this._textDivs = textDivs || [];
                this._textContentItemsStr = textContentItemsStr || [];
                this._enhanceTextSelection = !!enhanceTextSelection;
                this._fontInspectorEnabled = !!(globalThis.FontInspector && globalThis.FontInspector.enabled);
                this._reader = null;
                this._layoutTextLastFontSize = null;
                this._layoutTextLastFontFamily = null;
                this._layoutTextCtx = null;
                this._textDivProperties = new WeakMap();
                this._renderingDone = false;
                this._canceled = false;
                this._capability = (0, _util.createPromiseCapability)();
                this._renderTimer = null;
                this._bounds = [];

                this._capability.promise["finally"](function () {
                  if (_this39._layoutTextCtx) {
                    _this39._layoutTextCtx.canvas.width = 0;
                    _this39._layoutTextCtx.canvas.height = 0;
                    _this39._layoutTextCtx = null;
                  }
                })["catch"](function () {});
              }

              TextLayerRenderTask.prototype = {
                get promise() {
                  return this._capability.promise;
                },

                cancel: function TextLayer_cancel() {
                  this._canceled = true;

                  if (this._reader) {
                    this._reader.cancel(new _util.AbortException("TextLayer task cancelled."));

                    this._reader = null;
                  }

                  if (this._renderTimer !== null) {
                    clearTimeout(this._renderTimer);
                    this._renderTimer = null;
                  }

                  this._capability.reject(new Error("TextLayer task cancelled."));
                },
                _processItems: function _processItems(items, styleCache) {
                  for (var i = 0, len = items.length; i < len; i++) {
                    this._textContentItemsStr.push(items[i].str);

                    appendText(this, items[i], styleCache);
                  }
                },
                _layoutText: function _layoutText(textDiv) {
                  var textDivProperties = this._textDivProperties.get(textDiv);

                  if (textDivProperties.isWhitespace) {
                    return;
                  }

                  var transform = "";

                  if (textDivProperties.canvasWidth !== 0) {
                    var _textDiv$style = textDiv.style,
                        fontSize = _textDiv$style.fontSize,
                        fontFamily = _textDiv$style.fontFamily;

                    if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
                      this._layoutTextCtx.font = "".concat(fontSize, " ").concat(fontFamily);
                      this._layoutTextLastFontSize = fontSize;
                      this._layoutTextLastFontFamily = fontFamily;
                    }

                    var _this$_layoutTextCtx$ = this._layoutTextCtx.measureText(textDiv.textContent),
                        width = _this$_layoutTextCtx$.width;

                    if (width > 0) {
                      textDivProperties.scale = textDivProperties.canvasWidth / width;
                      transform = "scaleX(".concat(textDivProperties.scale, ")");
                    }
                  }

                  if (textDivProperties.angle !== 0) {
                    transform = "rotate(".concat(textDivProperties.angle, "deg) ").concat(transform);
                  }

                  if (transform.length > 0) {
                    if (this._enhanceTextSelection) {
                      textDivProperties.originalTransform = transform;
                    }

                    textDiv.style.transform = transform;
                  }

                  this._textDivProperties.set(textDiv, textDivProperties);

                  this._container.appendChild(textDiv);
                },
                _render: function TextLayer_render(timeout) {
                  var _this40 = this;

                  var capability = (0, _util.createPromiseCapability)();
                  var styleCache = Object.create(null);
                  var canvas = document.createElement("canvas");
                  canvas.mozOpaque = true;
                  this._layoutTextCtx = canvas.getContext("2d", {
                    alpha: false
                  });

                  if (this._textContent) {
                    var textItems = this._textContent.items;
                    var textStyles = this._textContent.styles;

                    this._processItems(textItems, textStyles);

                    capability.resolve();
                  } else if (this._textContentStream) {
                    var pump = function pump() {
                      _this40._reader.read().then(function (_ref30) {
                        var value = _ref30.value,
                            done = _ref30.done;

                        if (done) {
                          capability.resolve();
                          return;
                        }

                        Object.assign(styleCache, value.styles);

                        _this40._processItems(value.items, styleCache);

                        pump();
                      }, capability.reject);
                    };

                    this._reader = this._textContentStream.getReader();
                    pump();
                  } else {
                    throw new Error('Neither "textContent" nor "textContentStream"' + " parameters specified.");
                  }

                  capability.promise.then(function () {
                    styleCache = null;

                    if (!timeout) {
                      render(_this40);
                    } else {
                      _this40._renderTimer = setTimeout(function () {
                        render(_this40);
                        _this40._renderTimer = null;
                      }, timeout);
                    }
                  }, this._capability.reject);
                },
                expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
                  if (!this._enhanceTextSelection || !this._renderingDone) {
                    return;
                  }

                  if (this._bounds !== null) {
                    expand(this);
                    this._bounds = null;
                  }

                  var transformBuf = [],
                      paddingBuf = [];

                  for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
                    var div = this._textDivs[i];

                    var divProps = this._textDivProperties.get(div);

                    if (divProps.isWhitespace) {
                      continue;
                    }

                    if (expandDivs) {
                      transformBuf.length = 0;
                      paddingBuf.length = 0;

                      if (divProps.originalTransform) {
                        transformBuf.push(divProps.originalTransform);
                      }

                      if (divProps.paddingTop > 0) {
                        paddingBuf.push("".concat(divProps.paddingTop, "px"));
                        transformBuf.push("translateY(".concat(-divProps.paddingTop, "px)"));
                      } else {
                        paddingBuf.push(0);
                      }

                      if (divProps.paddingRight > 0) {
                        paddingBuf.push("".concat(divProps.paddingRight / divProps.scale, "px"));
                      } else {
                        paddingBuf.push(0);
                      }

                      if (divProps.paddingBottom > 0) {
                        paddingBuf.push("".concat(divProps.paddingBottom, "px"));
                      } else {
                        paddingBuf.push(0);
                      }

                      if (divProps.paddingLeft > 0) {
                        paddingBuf.push("".concat(divProps.paddingLeft / divProps.scale, "px"));
                        transformBuf.push("translateX(".concat(-divProps.paddingLeft / divProps.scale, "px)"));
                      } else {
                        paddingBuf.push(0);
                      }

                      div.style.padding = paddingBuf.join(" ");

                      if (transformBuf.length) {
                        div.style.transform = transformBuf.join(" ");
                      }
                    } else {
                      div.style.padding = null;
                      div.style.transform = divProps.originalTransform;
                    }
                  }
                }
              };

              function renderTextLayer(renderParameters) {
                var task = new TextLayerRenderTask({
                  textContent: renderParameters.textContent,
                  textContentStream: renderParameters.textContentStream,
                  container: renderParameters.container,
                  viewport: renderParameters.viewport,
                  textDivs: renderParameters.textDivs,
                  textContentItemsStr: renderParameters.textContentItemsStr,
                  enhanceTextSelection: renderParameters.enhanceTextSelection
                });

                task._render(renderParameters.timeout);

                return task;
              }

              return renderTextLayer;
            }();

            exports.renderTextLayer = renderTextLayer;
            /***/
          },
          /* 17 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.AnnotationLayer = void 0;

            var _display_utils = __w_pdfjs_require__(4);

            var _util = __w_pdfjs_require__(1);

            var AnnotationElementFactory = /*#__PURE__*/function () {
              function AnnotationElementFactory() {
                _classCallCheck(this, AnnotationElementFactory);
              }

              _createClass(AnnotationElementFactory, null, [{
                key: "create",
                value: function create(parameters) {
                  var subtype = parameters.data.annotationType;

                  switch (subtype) {
                    case _util.AnnotationType.LINK:
                      return new LinkAnnotationElement(parameters);

                    case _util.AnnotationType.TEXT:
                      return new TextAnnotationElement(parameters);

                    case _util.AnnotationType.WIDGET:
                      var fieldType = parameters.data.fieldType;

                      switch (fieldType) {
                        case "Tx":
                          return new TextWidgetAnnotationElement(parameters);

                        case "Btn":
                          if (parameters.data.radioButton) {
                            return new RadioButtonWidgetAnnotationElement(parameters);
                          } else if (parameters.data.checkBox) {
                            return new CheckboxWidgetAnnotationElement(parameters);
                          }

                          return new PushButtonWidgetAnnotationElement(parameters);

                        case "Ch":
                          return new ChoiceWidgetAnnotationElement(parameters);
                      }

                      return new WidgetAnnotationElement(parameters);

                    case _util.AnnotationType.POPUP:
                      return new PopupAnnotationElement(parameters);

                    case _util.AnnotationType.FREETEXT:
                      return new FreeTextAnnotationElement(parameters);

                    case _util.AnnotationType.LINE:
                      return new LineAnnotationElement(parameters);

                    case _util.AnnotationType.SQUARE:
                      return new SquareAnnotationElement(parameters);

                    case _util.AnnotationType.CIRCLE:
                      return new CircleAnnotationElement(parameters);

                    case _util.AnnotationType.POLYLINE:
                      return new PolylineAnnotationElement(parameters);

                    case _util.AnnotationType.CARET:
                      return new CaretAnnotationElement(parameters);

                    case _util.AnnotationType.INK:
                      return new InkAnnotationElement(parameters);

                    case _util.AnnotationType.POLYGON:
                      return new PolygonAnnotationElement(parameters);

                    case _util.AnnotationType.HIGHLIGHT:
                      return new HighlightAnnotationElement(parameters);

                    case _util.AnnotationType.UNDERLINE:
                      return new UnderlineAnnotationElement(parameters);

                    case _util.AnnotationType.SQUIGGLY:
                      return new SquigglyAnnotationElement(parameters);

                    case _util.AnnotationType.STRIKEOUT:
                      return new StrikeOutAnnotationElement(parameters);

                    case _util.AnnotationType.STAMP:
                      return new StampAnnotationElement(parameters);

                    case _util.AnnotationType.FILEATTACHMENT:
                      return new FileAttachmentAnnotationElement(parameters);

                    default:
                      return new AnnotationElement(parameters);
                  }
                }
              }]);

              return AnnotationElementFactory;
            }();

            var AnnotationElement = /*#__PURE__*/function () {
              function AnnotationElement(parameters) {
                var isRenderable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var ignoreBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                _classCallCheck(this, AnnotationElement);

                this.isRenderable = isRenderable;
                this.data = parameters.data;
                this.layer = parameters.layer;
                this.page = parameters.page;
                this.viewport = parameters.viewport;
                this.linkService = parameters.linkService;
                this.downloadManager = parameters.downloadManager;
                this.imageResourcesPath = parameters.imageResourcesPath;
                this.renderInteractiveForms = parameters.renderInteractiveForms;
                this.svgFactory = parameters.svgFactory;

                if (isRenderable) {
                  this.container = this._createContainer(ignoreBorder);
                }
              }

              _createClass(AnnotationElement, [{
                key: "_createContainer",
                value: function _createContainer() {
                  var ignoreBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                  var data = this.data,
                      page = this.page,
                      viewport = this.viewport;
                  var container = document.createElement("section");
                  var width = data.rect[2] - data.rect[0];
                  var height = data.rect[3] - data.rect[1];
                  container.setAttribute("data-annotation-id", data.id);

                  var rect = _util.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);

                  container.style.transform = "matrix(".concat(viewport.transform.join(","), ")");
                  container.style.transformOrigin = "-".concat(rect[0], "px -").concat(rect[1], "px");

                  if (!ignoreBorder && data.borderStyle.width > 0) {
                    container.style.borderWidth = "".concat(data.borderStyle.width, "px");

                    if (data.borderStyle.style !== _util.AnnotationBorderStyleType.UNDERLINE) {
                      width = width - 2 * data.borderStyle.width;
                      height = height - 2 * data.borderStyle.width;
                    }

                    var horizontalRadius = data.borderStyle.horizontalCornerRadius;
                    var verticalRadius = data.borderStyle.verticalCornerRadius;

                    if (horizontalRadius > 0 || verticalRadius > 0) {
                      var radius = "".concat(horizontalRadius, "px / ").concat(verticalRadius, "px");
                      container.style.borderRadius = radius;
                    }

                    switch (data.borderStyle.style) {
                      case _util.AnnotationBorderStyleType.SOLID:
                        container.style.borderStyle = "solid";
                        break;

                      case _util.AnnotationBorderStyleType.DASHED:
                        container.style.borderStyle = "dashed";
                        break;

                      case _util.AnnotationBorderStyleType.BEVELED:
                        (0, _util.warn)("Unimplemented border style: beveled");
                        break;

                      case _util.AnnotationBorderStyleType.INSET:
                        (0, _util.warn)("Unimplemented border style: inset");
                        break;

                      case _util.AnnotationBorderStyleType.UNDERLINE:
                        container.style.borderBottomStyle = "solid";
                        break;

                      default:
                        break;
                    }

                    if (data.color) {
                      container.style.borderColor = _util.Util.makeCssRgb(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
                    } else {
                      container.style.borderWidth = 0;
                    }
                  }

                  container.style.left = "".concat(rect[0], "px");
                  container.style.top = "".concat(rect[1], "px");
                  container.style.width = "".concat(width, "px");
                  container.style.height = "".concat(height, "px");
                  return container;
                }
              }, {
                key: "_createPopup",
                value: function _createPopup(container, trigger, data) {
                  if (!trigger) {
                    trigger = document.createElement("div");
                    trigger.style.height = container.style.height;
                    trigger.style.width = container.style.width;
                    container.appendChild(trigger);
                  }

                  var popupElement = new PopupElement({
                    container: container,
                    trigger: trigger,
                    color: data.color,
                    title: data.title,
                    modificationDate: data.modificationDate,
                    contents: data.contents,
                    hideWrapper: true
                  });
                  var popup = popupElement.render();
                  popup.style.left = container.style.width;
                  container.appendChild(popup);
                }
              }, {
                key: "render",
                value: function render() {
                  (0, _util.unreachable)("Abstract method `AnnotationElement.render` called");
                }
              }]);

              return AnnotationElement;
            }();

            var LinkAnnotationElement = /*#__PURE__*/function (_AnnotationElement) {
              _inherits(LinkAnnotationElement, _AnnotationElement);

              var _super11 = _createSuper(LinkAnnotationElement);

              function LinkAnnotationElement(parameters) {
                _classCallCheck(this, LinkAnnotationElement);

                var isRenderable = !!(parameters.data.url || parameters.data.dest || parameters.data.action);
                return _super11.call(this, parameters, isRenderable);
              }

              _createClass(LinkAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "linkAnnotation";
                  var data = this.data,
                      linkService = this.linkService;
                  var link = document.createElement("a");

                  if (data.url) {
                    (0, _display_utils.addLinkAttributes)(link, {
                      url: data.url,
                      target: data.newWindow ? _display_utils.LinkTarget.BLANK : linkService.externalLinkTarget,
                      rel: linkService.externalLinkRel,
                      enabled: linkService.externalLinkEnabled
                    });
                  } else if (data.action) {
                    this._bindNamedAction(link, data.action);
                  } else {
                    this._bindLink(link, data.dest);
                  }

                  this.container.appendChild(link);
                  return this.container;
                }
              }, {
                key: "_bindLink",
                value: function _bindLink(link, destination) {
                  var _this41 = this;

                  link.href = this.linkService.getDestinationHash(destination);

                  link.onclick = function () {
                    if (destination) {
                      _this41.linkService.navigateTo(destination);
                    }

                    return false;
                  };

                  if (destination) {
                    link.className = "internalLink";
                  }
                }
              }, {
                key: "_bindNamedAction",
                value: function _bindNamedAction(link, action) {
                  var _this42 = this;

                  link.href = this.linkService.getAnchorUrl("");

                  link.onclick = function () {
                    _this42.linkService.executeNamedAction(action);

                    return false;
                  };

                  link.className = "internalLink";
                }
              }]);

              return LinkAnnotationElement;
            }(AnnotationElement);

            var TextAnnotationElement = /*#__PURE__*/function (_AnnotationElement2) {
              _inherits(TextAnnotationElement, _AnnotationElement2);

              var _super12 = _createSuper(TextAnnotationElement);

              function TextAnnotationElement(parameters) {
                _classCallCheck(this, TextAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                return _super12.call(this, parameters, isRenderable);
              }

              _createClass(TextAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "textAnnotation";
                  var image = document.createElement("img");
                  image.style.height = this.container.style.height;
                  image.style.width = this.container.style.width;
                  image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
                  image.alt = "[{{type}} Annotation]";
                  image.dataset.l10nId = "text_annotation_type";
                  image.dataset.l10nArgs = JSON.stringify({
                    type: this.data.name
                  });

                  if (!this.data.hasPopup) {
                    this._createPopup(this.container, image, this.data);
                  }

                  this.container.appendChild(image);
                  return this.container;
                }
              }]);

              return TextAnnotationElement;
            }(AnnotationElement);

            var WidgetAnnotationElement = /*#__PURE__*/function (_AnnotationElement3) {
              _inherits(WidgetAnnotationElement, _AnnotationElement3);

              var _super13 = _createSuper(WidgetAnnotationElement);

              function WidgetAnnotationElement() {
                _classCallCheck(this, WidgetAnnotationElement);

                return _super13.apply(this, arguments);
              }

              _createClass(WidgetAnnotationElement, [{
                key: "render",
                value: function render() {
                  return this.container;
                }
              }]);

              return WidgetAnnotationElement;
            }(AnnotationElement);

            var TextWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem) {
              _inherits(TextWidgetAnnotationElement, _WidgetAnnotationElem);

              var _super14 = _createSuper(TextWidgetAnnotationElement);

              function TextWidgetAnnotationElement(parameters) {
                _classCallCheck(this, TextWidgetAnnotationElement);

                var isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
                return _super14.call(this, parameters, isRenderable);
              }

              _createClass(TextWidgetAnnotationElement, [{
                key: "render",
                value: function render() {
                  var TEXT_ALIGNMENT = ["left", "center", "right"];
                  this.container.className = "textWidgetAnnotation";
                  var element = null;

                  if (this.renderInteractiveForms) {
                    if (this.data.multiLine) {
                      element = document.createElement("textarea");
                      element.textContent = this.data.fieldValue;
                    } else {
                      element = document.createElement("input");
                      element.type = "text";
                      element.setAttribute("value", this.data.fieldValue);
                    }

                    element.disabled = this.data.readOnly;

                    if (this.data.maxLen !== null) {
                      element.maxLength = this.data.maxLen;
                    }

                    if (this.data.comb) {
                      var fieldWidth = this.data.rect[2] - this.data.rect[0];
                      var combWidth = fieldWidth / this.data.maxLen;
                      element.classList.add("comb");
                      element.style.letterSpacing = "calc(".concat(combWidth, "px - 1ch)");
                    }
                  } else {
                    element = document.createElement("div");
                    element.textContent = this.data.fieldValue;
                    element.style.verticalAlign = "middle";
                    element.style.display = "table-cell";
                    var font = null;

                    if (this.data.fontRefName && this.page.commonObjs.has(this.data.fontRefName)) {
                      font = this.page.commonObjs.get(this.data.fontRefName);
                    }

                    this._setTextStyle(element, font);
                  }

                  if (this.data.textAlignment !== null) {
                    element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
                  }

                  this.container.appendChild(element);
                  return this.container;
                }
              }, {
                key: "_setTextStyle",
                value: function _setTextStyle(element, font) {
                  var style = element.style;
                  style.fontSize = "".concat(this.data.fontSize, "px");
                  style.direction = this.data.fontDirection < 0 ? "rtl" : "ltr";

                  if (!font) {
                    return;
                  }

                  var bold = "normal";

                  if (font.black) {
                    bold = "900";
                  } else if (font.bold) {
                    bold = "bold";
                  }

                  style.fontWeight = bold;
                  style.fontStyle = font.italic ? "italic" : "normal";
                  var fontFamily = font.loadedName ? "\"".concat(font.loadedName, "\", ") : "";
                  var fallbackName = font.fallbackName || "Helvetica, sans-serif";
                  style.fontFamily = fontFamily + fallbackName;
                }
              }]);

              return TextWidgetAnnotationElement;
            }(WidgetAnnotationElement);

            var CheckboxWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem2) {
              _inherits(CheckboxWidgetAnnotationElement, _WidgetAnnotationElem2);

              var _super15 = _createSuper(CheckboxWidgetAnnotationElement);

              function CheckboxWidgetAnnotationElement(parameters) {
                _classCallCheck(this, CheckboxWidgetAnnotationElement);

                return _super15.call(this, parameters, parameters.renderInteractiveForms);
              }

              _createClass(CheckboxWidgetAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "buttonWidgetAnnotation checkBox";
                  var element = document.createElement("input");
                  element.disabled = this.data.readOnly;
                  element.type = "checkbox";

                  if (this.data.fieldValue && this.data.fieldValue !== "Off") {
                    element.setAttribute("checked", true);
                  }

                  this.container.appendChild(element);
                  return this.container;
                }
              }]);

              return CheckboxWidgetAnnotationElement;
            }(WidgetAnnotationElement);

            var RadioButtonWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem3) {
              _inherits(RadioButtonWidgetAnnotationElement, _WidgetAnnotationElem3);

              var _super16 = _createSuper(RadioButtonWidgetAnnotationElement);

              function RadioButtonWidgetAnnotationElement(parameters) {
                _classCallCheck(this, RadioButtonWidgetAnnotationElement);

                return _super16.call(this, parameters, parameters.renderInteractiveForms);
              }

              _createClass(RadioButtonWidgetAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "buttonWidgetAnnotation radioButton";
                  var element = document.createElement("input");
                  element.disabled = this.data.readOnly;
                  element.type = "radio";
                  element.name = this.data.fieldName;

                  if (this.data.fieldValue === this.data.buttonValue) {
                    element.setAttribute("checked", true);
                  }

                  this.container.appendChild(element);
                  return this.container;
                }
              }]);

              return RadioButtonWidgetAnnotationElement;
            }(WidgetAnnotationElement);

            var PushButtonWidgetAnnotationElement = /*#__PURE__*/function (_LinkAnnotationElemen) {
              _inherits(PushButtonWidgetAnnotationElement, _LinkAnnotationElemen);

              var _super17 = _createSuper(PushButtonWidgetAnnotationElement);

              function PushButtonWidgetAnnotationElement() {
                _classCallCheck(this, PushButtonWidgetAnnotationElement);

                return _super17.apply(this, arguments);
              }

              _createClass(PushButtonWidgetAnnotationElement, [{
                key: "render",
                value: function render() {
                  var container = _get(_getPrototypeOf(PushButtonWidgetAnnotationElement.prototype), "render", this).call(this);

                  container.className = "buttonWidgetAnnotation pushButton";
                  return container;
                }
              }]);

              return PushButtonWidgetAnnotationElement;
            }(LinkAnnotationElement);

            var ChoiceWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem4) {
              _inherits(ChoiceWidgetAnnotationElement, _WidgetAnnotationElem4);

              var _super18 = _createSuper(ChoiceWidgetAnnotationElement);

              function ChoiceWidgetAnnotationElement(parameters) {
                _classCallCheck(this, ChoiceWidgetAnnotationElement);

                return _super18.call(this, parameters, parameters.renderInteractiveForms);
              }

              _createClass(ChoiceWidgetAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "choiceWidgetAnnotation";
                  var selectElement = document.createElement("select");
                  selectElement.disabled = this.data.readOnly;

                  if (!this.data.combo) {
                    selectElement.size = this.data.options.length;

                    if (this.data.multiSelect) {
                      selectElement.multiple = true;
                    }
                  }

                  var _iterator10 = _createForOfIteratorHelper(this.data.options),
                      _step10;

                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var option = _step10.value;
                      var optionElement = document.createElement("option");
                      optionElement.textContent = option.displayValue;
                      optionElement.value = option.exportValue;

                      if (this.data.fieldValue.includes(option.displayValue)) {
                        optionElement.setAttribute("selected", true);
                      }

                      selectElement.appendChild(optionElement);
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }

                  this.container.appendChild(selectElement);
                  return this.container;
                }
              }]);

              return ChoiceWidgetAnnotationElement;
            }(WidgetAnnotationElement);

            var PopupAnnotationElement = /*#__PURE__*/function (_AnnotationElement4) {
              _inherits(PopupAnnotationElement, _AnnotationElement4);

              var _super19 = _createSuper(PopupAnnotationElement);

              function PopupAnnotationElement(parameters) {
                _classCallCheck(this, PopupAnnotationElement);

                var isRenderable = !!(parameters.data.title || parameters.data.contents);
                return _super19.call(this, parameters, isRenderable);
              }

              _createClass(PopupAnnotationElement, [{
                key: "render",
                value: function render() {
                  var IGNORE_TYPES = ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"];
                  this.container.className = "popupAnnotation";

                  if (IGNORE_TYPES.includes(this.data.parentType)) {
                    return this.container;
                  }

                  var selector = "[data-annotation-id=\"".concat(this.data.parentId, "\"]");
                  var parentElement = this.layer.querySelector(selector);

                  if (!parentElement) {
                    return this.container;
                  }

                  var popup = new PopupElement({
                    container: this.container,
                    trigger: parentElement,
                    color: this.data.color,
                    title: this.data.title,
                    modificationDate: this.data.modificationDate,
                    contents: this.data.contents
                  });
                  var parentLeft = parseFloat(parentElement.style.left);
                  var parentWidth = parseFloat(parentElement.style.width);
                  this.container.style.transformOrigin = "-".concat(parentLeft + parentWidth, "px -").concat(parentElement.style.top);
                  this.container.style.left = "".concat(parentLeft + parentWidth, "px");
                  this.container.appendChild(popup.render());
                  return this.container;
                }
              }]);

              return PopupAnnotationElement;
            }(AnnotationElement);

            var PopupElement = /*#__PURE__*/function () {
              function PopupElement(parameters) {
                _classCallCheck(this, PopupElement);

                this.container = parameters.container;
                this.trigger = parameters.trigger;
                this.color = parameters.color;
                this.title = parameters.title;
                this.modificationDate = parameters.modificationDate;
                this.contents = parameters.contents;
                this.hideWrapper = parameters.hideWrapper || false;
                this.pinned = false;
              }

              _createClass(PopupElement, [{
                key: "render",
                value: function render() {
                  var BACKGROUND_ENLIGHT = 0.7;
                  var wrapper = document.createElement("div");
                  wrapper.className = "popupWrapper";
                  this.hideElement = this.hideWrapper ? wrapper : this.container;
                  this.hideElement.setAttribute("hidden", true);
                  var popup = document.createElement("div");
                  popup.className = "popup";
                  var color = this.color;

                  if (color) {
                    var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
                    var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
                    var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
                    popup.style.backgroundColor = _util.Util.makeCssRgb(r | 0, g | 0, b | 0);
                  }

                  var title = document.createElement("h1");
                  title.textContent = this.title;
                  popup.appendChild(title);

                  var dateObject = _display_utils.PDFDateString.toDateObject(this.modificationDate);

                  if (dateObject) {
                    var modificationDate = document.createElement("span");
                    modificationDate.textContent = "{{date}}, {{time}}";
                    modificationDate.dataset.l10nId = "annotation_date_string";
                    modificationDate.dataset.l10nArgs = JSON.stringify({
                      date: dateObject.toLocaleDateString(),
                      time: dateObject.toLocaleTimeString()
                    });
                    popup.appendChild(modificationDate);
                  }

                  var contents = this._formatContents(this.contents);

                  popup.appendChild(contents);
                  this.trigger.addEventListener("click", this._toggle.bind(this));
                  this.trigger.addEventListener("mouseover", this._show.bind(this, false));
                  this.trigger.addEventListener("mouseout", this._hide.bind(this, false));
                  popup.addEventListener("click", this._hide.bind(this, true));
                  wrapper.appendChild(popup);
                  return wrapper;
                }
              }, {
                key: "_formatContents",
                value: function _formatContents(contents) {
                  var p = document.createElement("p");
                  var lines = contents.split(/(?:\r\n?|\n)/);

                  for (var i = 0, ii = lines.length; i < ii; ++i) {
                    var line = lines[i];
                    p.appendChild(document.createTextNode(line));

                    if (i < ii - 1) {
                      p.appendChild(document.createElement("br"));
                    }
                  }

                  return p;
                }
              }, {
                key: "_toggle",
                value: function _toggle() {
                  if (this.pinned) {
                    this._hide(true);
                  } else {
                    this._show(true);
                  }
                }
              }, {
                key: "_show",
                value: function _show() {
                  var pin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                  if (pin) {
                    this.pinned = true;
                  }

                  if (this.hideElement.hasAttribute("hidden")) {
                    this.hideElement.removeAttribute("hidden");
                    this.container.style.zIndex += 1;
                  }
                }
              }, {
                key: "_hide",
                value: function _hide() {
                  var unpin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                  if (unpin) {
                    this.pinned = false;
                  }

                  if (!this.hideElement.hasAttribute("hidden") && !this.pinned) {
                    this.hideElement.setAttribute("hidden", true);
                    this.container.style.zIndex -= 1;
                  }
                }
              }]);

              return PopupElement;
            }();

            var FreeTextAnnotationElement = /*#__PURE__*/function (_AnnotationElement5) {
              _inherits(FreeTextAnnotationElement, _AnnotationElement5);

              var _super20 = _createSuper(FreeTextAnnotationElement);

              function FreeTextAnnotationElement(parameters) {
                _classCallCheck(this, FreeTextAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                return _super20.call(this, parameters, isRenderable, true);
              }

              _createClass(FreeTextAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "freeTextAnnotation";

                  if (!this.data.hasPopup) {
                    this._createPopup(this.container, null, this.data);
                  }

                  return this.container;
                }
              }]);

              return FreeTextAnnotationElement;
            }(AnnotationElement);

            var LineAnnotationElement = /*#__PURE__*/function (_AnnotationElement6) {
              _inherits(LineAnnotationElement, _AnnotationElement6);

              var _super21 = _createSuper(LineAnnotationElement);

              function LineAnnotationElement(parameters) {
                _classCallCheck(this, LineAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                return _super21.call(this, parameters, isRenderable, true);
              }

              _createClass(LineAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "lineAnnotation";
                  var data = this.data;
                  var width = data.rect[2] - data.rect[0];
                  var height = data.rect[3] - data.rect[1];
                  var svg = this.svgFactory.create(width, height);
                  var line = this.svgFactory.createElement("svg:line");
                  line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
                  line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
                  line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
                  line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
                  line.setAttribute("stroke-width", data.borderStyle.width || 1);
                  line.setAttribute("stroke", "transparent");
                  svg.appendChild(line);
                  this.container.append(svg);

                  this._createPopup(this.container, line, data);

                  return this.container;
                }
              }]);

              return LineAnnotationElement;
            }(AnnotationElement);

            var SquareAnnotationElement = /*#__PURE__*/function (_AnnotationElement7) {
              _inherits(SquareAnnotationElement, _AnnotationElement7);

              var _super22 = _createSuper(SquareAnnotationElement);

              function SquareAnnotationElement(parameters) {
                _classCallCheck(this, SquareAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                return _super22.call(this, parameters, isRenderable, true);
              }

              _createClass(SquareAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "squareAnnotation";
                  var data = this.data;
                  var width = data.rect[2] - data.rect[0];
                  var height = data.rect[3] - data.rect[1];
                  var svg = this.svgFactory.create(width, height);
                  var borderWidth = data.borderStyle.width;
                  var square = this.svgFactory.createElement("svg:rect");
                  square.setAttribute("x", borderWidth / 2);
                  square.setAttribute("y", borderWidth / 2);
                  square.setAttribute("width", width - borderWidth);
                  square.setAttribute("height", height - borderWidth);
                  square.setAttribute("stroke-width", borderWidth || 1);
                  square.setAttribute("stroke", "transparent");
                  square.setAttribute("fill", "none");
                  svg.appendChild(square);
                  this.container.append(svg);

                  this._createPopup(this.container, square, data);

                  return this.container;
                }
              }]);

              return SquareAnnotationElement;
            }(AnnotationElement);

            var CircleAnnotationElement = /*#__PURE__*/function (_AnnotationElement8) {
              _inherits(CircleAnnotationElement, _AnnotationElement8);

              var _super23 = _createSuper(CircleAnnotationElement);

              function CircleAnnotationElement(parameters) {
                _classCallCheck(this, CircleAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                return _super23.call(this, parameters, isRenderable, true);
              }

              _createClass(CircleAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "circleAnnotation";
                  var data = this.data;
                  var width = data.rect[2] - data.rect[0];
                  var height = data.rect[3] - data.rect[1];
                  var svg = this.svgFactory.create(width, height);
                  var borderWidth = data.borderStyle.width;
                  var circle = this.svgFactory.createElement("svg:ellipse");
                  circle.setAttribute("cx", width / 2);
                  circle.setAttribute("cy", height / 2);
                  circle.setAttribute("rx", width / 2 - borderWidth / 2);
                  circle.setAttribute("ry", height / 2 - borderWidth / 2);
                  circle.setAttribute("stroke-width", borderWidth || 1);
                  circle.setAttribute("stroke", "transparent");
                  circle.setAttribute("fill", "none");
                  svg.appendChild(circle);
                  this.container.append(svg);

                  this._createPopup(this.container, circle, data);

                  return this.container;
                }
              }]);

              return CircleAnnotationElement;
            }(AnnotationElement);

            var PolylineAnnotationElement = /*#__PURE__*/function (_AnnotationElement9) {
              _inherits(PolylineAnnotationElement, _AnnotationElement9);

              var _super24 = _createSuper(PolylineAnnotationElement);

              function PolylineAnnotationElement(parameters) {
                var _this43;

                _classCallCheck(this, PolylineAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                _this43 = _super24.call(this, parameters, isRenderable, true);
                _this43.containerClassName = "polylineAnnotation";
                _this43.svgElementName = "svg:polyline";
                return _this43;
              }

              _createClass(PolylineAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = this.containerClassName;
                  var data = this.data;
                  var width = data.rect[2] - data.rect[0];
                  var height = data.rect[3] - data.rect[1];
                  var svg = this.svgFactory.create(width, height);
                  var points = [];

                  var _iterator11 = _createForOfIteratorHelper(data.vertices),
                      _step11;

                  try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                      var coordinate = _step11.value;
                      var x = coordinate.x - data.rect[0];
                      var y = data.rect[3] - coordinate.y;
                      points.push(x + "," + y);
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
                  }

                  points = points.join(" ");
                  var polyline = this.svgFactory.createElement(this.svgElementName);
                  polyline.setAttribute("points", points);
                  polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
                  polyline.setAttribute("stroke", "transparent");
                  polyline.setAttribute("fill", "none");
                  svg.appendChild(polyline);
                  this.container.append(svg);

                  this._createPopup(this.container, polyline, data);

                  return this.container;
                }
              }]);

              return PolylineAnnotationElement;
            }(AnnotationElement);

            var PolygonAnnotationElement = /*#__PURE__*/function (_PolylineAnnotationEl) {
              _inherits(PolygonAnnotationElement, _PolylineAnnotationEl);

              var _super25 = _createSuper(PolygonAnnotationElement);

              function PolygonAnnotationElement(parameters) {
                var _this44;

                _classCallCheck(this, PolygonAnnotationElement);

                _this44 = _super25.call(this, parameters);
                _this44.containerClassName = "polygonAnnotation";
                _this44.svgElementName = "svg:polygon";
                return _this44;
              }

              return PolygonAnnotationElement;
            }(PolylineAnnotationElement);

            var CaretAnnotationElement = /*#__PURE__*/function (_AnnotationElement10) {
              _inherits(CaretAnnotationElement, _AnnotationElement10);

              var _super26 = _createSuper(CaretAnnotationElement);

              function CaretAnnotationElement(parameters) {
                _classCallCheck(this, CaretAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                return _super26.call(this, parameters, isRenderable, true);
              }

              _createClass(CaretAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "caretAnnotation";

                  if (!this.data.hasPopup) {
                    this._createPopup(this.container, null, this.data);
                  }

                  return this.container;
                }
              }]);

              return CaretAnnotationElement;
            }(AnnotationElement);

            var InkAnnotationElement = /*#__PURE__*/function (_AnnotationElement11) {
              _inherits(InkAnnotationElement, _AnnotationElement11);

              var _super27 = _createSuper(InkAnnotationElement);

              function InkAnnotationElement(parameters) {
                var _this45;

                _classCallCheck(this, InkAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                _this45 = _super27.call(this, parameters, isRenderable, true);
                _this45.containerClassName = "inkAnnotation";
                _this45.svgElementName = "svg:polyline";
                return _this45;
              }

              _createClass(InkAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = this.containerClassName;
                  var data = this.data;
                  var width = data.rect[2] - data.rect[0];
                  var height = data.rect[3] - data.rect[1];
                  var svg = this.svgFactory.create(width, height);

                  var _iterator12 = _createForOfIteratorHelper(data.inkLists),
                      _step12;

                  try {
                    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                      var inkList = _step12.value;
                      var points = [];

                      var _iterator13 = _createForOfIteratorHelper(inkList),
                          _step13;

                      try {
                        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                          var coordinate = _step13.value;
                          var x = coordinate.x - data.rect[0];
                          var y = data.rect[3] - coordinate.y;
                          points.push("".concat(x, ",").concat(y));
                        }
                      } catch (err) {
                        _iterator13.e(err);
                      } finally {
                        _iterator13.f();
                      }

                      points = points.join(" ");
                      var polyline = this.svgFactory.createElement(this.svgElementName);
                      polyline.setAttribute("points", points);
                      polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
                      polyline.setAttribute("stroke", "transparent");
                      polyline.setAttribute("fill", "none");

                      this._createPopup(this.container, polyline, data);

                      svg.appendChild(polyline);
                    }
                  } catch (err) {
                    _iterator12.e(err);
                  } finally {
                    _iterator12.f();
                  }

                  this.container.append(svg);
                  return this.container;
                }
              }]);

              return InkAnnotationElement;
            }(AnnotationElement);

            var HighlightAnnotationElement = /*#__PURE__*/function (_AnnotationElement12) {
              _inherits(HighlightAnnotationElement, _AnnotationElement12);

              var _super28 = _createSuper(HighlightAnnotationElement);

              function HighlightAnnotationElement(parameters) {
                _classCallCheck(this, HighlightAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                return _super28.call(this, parameters, isRenderable, true);
              }

              _createClass(HighlightAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "highlightAnnotation";

                  if (!this.data.hasPopup) {
                    this._createPopup(this.container, null, this.data);
                  }

                  return this.container;
                }
              }]);

              return HighlightAnnotationElement;
            }(AnnotationElement);

            var UnderlineAnnotationElement = /*#__PURE__*/function (_AnnotationElement13) {
              _inherits(UnderlineAnnotationElement, _AnnotationElement13);

              var _super29 = _createSuper(UnderlineAnnotationElement);

              function UnderlineAnnotationElement(parameters) {
                _classCallCheck(this, UnderlineAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                return _super29.call(this, parameters, isRenderable, true);
              }

              _createClass(UnderlineAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "underlineAnnotation";

                  if (!this.data.hasPopup) {
                    this._createPopup(this.container, null, this.data);
                  }

                  return this.container;
                }
              }]);

              return UnderlineAnnotationElement;
            }(AnnotationElement);

            var SquigglyAnnotationElement = /*#__PURE__*/function (_AnnotationElement14) {
              _inherits(SquigglyAnnotationElement, _AnnotationElement14);

              var _super30 = _createSuper(SquigglyAnnotationElement);

              function SquigglyAnnotationElement(parameters) {
                _classCallCheck(this, SquigglyAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                return _super30.call(this, parameters, isRenderable, true);
              }

              _createClass(SquigglyAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "squigglyAnnotation";

                  if (!this.data.hasPopup) {
                    this._createPopup(this.container, null, this.data);
                  }

                  return this.container;
                }
              }]);

              return SquigglyAnnotationElement;
            }(AnnotationElement);

            var StrikeOutAnnotationElement = /*#__PURE__*/function (_AnnotationElement15) {
              _inherits(StrikeOutAnnotationElement, _AnnotationElement15);

              var _super31 = _createSuper(StrikeOutAnnotationElement);

              function StrikeOutAnnotationElement(parameters) {
                _classCallCheck(this, StrikeOutAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                return _super31.call(this, parameters, isRenderable, true);
              }

              _createClass(StrikeOutAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "strikeoutAnnotation";

                  if (!this.data.hasPopup) {
                    this._createPopup(this.container, null, this.data);
                  }

                  return this.container;
                }
              }]);

              return StrikeOutAnnotationElement;
            }(AnnotationElement);

            var StampAnnotationElement = /*#__PURE__*/function (_AnnotationElement16) {
              _inherits(StampAnnotationElement, _AnnotationElement16);

              var _super32 = _createSuper(StampAnnotationElement);

              function StampAnnotationElement(parameters) {
                _classCallCheck(this, StampAnnotationElement);

                var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                return _super32.call(this, parameters, isRenderable, true);
              }

              _createClass(StampAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "stampAnnotation";

                  if (!this.data.hasPopup) {
                    this._createPopup(this.container, null, this.data);
                  }

                  return this.container;
                }
              }]);

              return StampAnnotationElement;
            }(AnnotationElement);

            var FileAttachmentAnnotationElement = /*#__PURE__*/function (_AnnotationElement17) {
              _inherits(FileAttachmentAnnotationElement, _AnnotationElement17);

              var _super33 = _createSuper(FileAttachmentAnnotationElement);

              function FileAttachmentAnnotationElement(parameters) {
                var _this46;

                _classCallCheck(this, FileAttachmentAnnotationElement);

                _this46 = _super33.call(this, parameters, true);
                var _this46$data$file = _this46.data.file,
                    filename = _this46$data$file.filename,
                    content = _this46$data$file.content;
                _this46.filename = (0, _display_utils.getFilenameFromUrl)(filename);
                _this46.content = content;

                if (_this46.linkService.eventBus) {
                  _this46.linkService.eventBus.dispatch("fileattachmentannotation", {
                    source: _assertThisInitialized(_this46),
                    id: (0, _util.stringToPDFString)(filename),
                    filename: filename,
                    content: content
                  });
                }

                return _this46;
              }

              _createClass(FileAttachmentAnnotationElement, [{
                key: "render",
                value: function render() {
                  this.container.className = "fileAttachmentAnnotation";
                  var trigger = document.createElement("div");
                  trigger.style.height = this.container.style.height;
                  trigger.style.width = this.container.style.width;
                  trigger.addEventListener("dblclick", this._download.bind(this));

                  if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
                    this._createPopup(this.container, trigger, this.data);
                  }

                  this.container.appendChild(trigger);
                  return this.container;
                }
              }, {
                key: "_download",
                value: function _download() {
                  if (!this.downloadManager) {
                    (0, _util.warn)("Download cannot be started due to unavailable download manager");
                    return;
                  }

                  this.downloadManager.downloadData(this.content, this.filename, "");
                }
              }]);

              return FileAttachmentAnnotationElement;
            }(AnnotationElement);

            var AnnotationLayer = /*#__PURE__*/function () {
              function AnnotationLayer() {
                _classCallCheck(this, AnnotationLayer);
              }

              _createClass(AnnotationLayer, null, [{
                key: "render",
                value: function render(parameters) {
                  var sortedAnnotations = [],
                      popupAnnotations = [];

                  var _iterator14 = _createForOfIteratorHelper(parameters.annotations),
                      _step14;

                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _data4 = _step14.value;

                      if (!_data4) {
                        continue;
                      }

                      if (_data4.annotationType === _util.AnnotationType.POPUP) {
                        popupAnnotations.push(_data4);
                        continue;
                      }

                      sortedAnnotations.push(_data4);
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }

                  if (popupAnnotations.length) {
                    sortedAnnotations.push.apply(sortedAnnotations, popupAnnotations);
                  }

                  for (var _i7 = 0, _sortedAnnotations = sortedAnnotations; _i7 < _sortedAnnotations.length; _i7++) {
                    var data = _sortedAnnotations[_i7];
                    var element = AnnotationElementFactory.create({
                      data: data,
                      layer: parameters.div,
                      page: parameters.page,
                      viewport: parameters.viewport,
                      linkService: parameters.linkService,
                      downloadManager: parameters.downloadManager,
                      imageResourcesPath: parameters.imageResourcesPath || "",
                      renderInteractiveForms: parameters.renderInteractiveForms || false,
                      svgFactory: new _display_utils.DOMSVGFactory()
                    });

                    if (element.isRenderable) {
                      parameters.div.appendChild(element.render());
                    }
                  }
                }
              }, {
                key: "update",
                value: function update(parameters) {
                  var _iterator15 = _createForOfIteratorHelper(parameters.annotations),
                      _step15;

                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                      var data = _step15.value;
                      var element = parameters.div.querySelector("[data-annotation-id=\"".concat(data.id, "\"]"));

                      if (element) {
                        element.style.transform = "matrix(".concat(parameters.viewport.transform.join(","), ")");
                      }
                    }
                  } catch (err) {
                    _iterator15.e(err);
                  } finally {
                    _iterator15.f();
                  }

                  parameters.div.removeAttribute("hidden");
                }
              }]);

              return AnnotationLayer;
            }();

            exports.AnnotationLayer = AnnotationLayer;
            /***/
          },
          /* 18 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.SVGGraphics = void 0;

            var _util = __w_pdfjs_require__(1);

            var _display_utils = __w_pdfjs_require__(4);

            var _is_node = __w_pdfjs_require__(7);

            var SVGGraphics = function SVGGraphics() {
              throw new Error("Not implemented: SVGGraphics");
            };

            exports.SVGGraphics = SVGGraphics;
            {
              var opListToTree = function opListToTree(opList) {
                var opTree = [];
                var tmp = [];

                var _iterator16 = _createForOfIteratorHelper(opList),
                    _step16;

                try {
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    var opListElement = _step16.value;

                    if (opListElement.fn === "save") {
                      opTree.push({
                        fnId: 92,
                        fn: "group",
                        items: []
                      });
                      tmp.push(opTree);
                      opTree = opTree[opTree.length - 1].items;
                      continue;
                    }

                    if (opListElement.fn === "restore") {
                      opTree = tmp.pop();
                    } else {
                      opTree.push(opListElement);
                    }
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }

                return opTree;
              };

              var pf = function pf(value) {
                if (Number.isInteger(value)) {
                  return value.toString();
                }

                var s = value.toFixed(10);
                var i = s.length - 1;

                if (s[i] !== "0") {
                  return s;
                }

                do {
                  i--;
                } while (s[i] === "0");

                return s.substring(0, s[i] === "." ? i : i + 1);
              };

              var pm = function pm(m) {
                if (m[4] === 0 && m[5] === 0) {
                  if (m[1] === 0 && m[2] === 0) {
                    if (m[0] === 1 && m[3] === 1) {
                      return "";
                    }

                    return "scale(".concat(pf(m[0]), " ").concat(pf(m[3]), ")");
                  }

                  if (m[0] === m[3] && m[1] === -m[2]) {
                    var a = Math.acos(m[0]) * 180 / Math.PI;
                    return "rotate(".concat(pf(a), ")");
                  }
                } else {
                  if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
                    return "translate(".concat(pf(m[4]), " ").concat(pf(m[5]), ")");
                  }
                }

                return "matrix(".concat(pf(m[0]), " ").concat(pf(m[1]), " ").concat(pf(m[2]), " ").concat(pf(m[3]), " ").concat(pf(m[4]), " ") + "".concat(pf(m[5]), ")");
              };

              var SVG_DEFAULTS = {
                fontStyle: "normal",
                fontWeight: "normal",
                fillColor: "#000000"
              };
              var XML_NS = "http://www.w3.org/XML/1998/namespace";
              var XLINK_NS = "http://www.w3.org/1999/xlink";
              var LINE_CAP_STYLES = ["butt", "round", "square"];
              var LINE_JOIN_STYLES = ["miter", "round", "bevel"];

              var convertImgDataToPng = function () {
                var PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
                var CHUNK_WRAPPER_SIZE = 12;
                var crcTable = new Int32Array(256);

                for (var i = 0; i < 256; i++) {
                  var c = i;

                  for (var h = 0; h < 8; h++) {
                    if (c & 1) {
                      c = 0xedb88320 ^ c >> 1 & 0x7fffffff;
                    } else {
                      c = c >> 1 & 0x7fffffff;
                    }
                  }

                  crcTable[i] = c;
                }

                function crc32(data, start, end) {
                  var crc = -1;

                  for (var _i8 = start; _i8 < end; _i8++) {
                    var a = (crc ^ data[_i8]) & 0xff;
                    var b = crcTable[a];
                    crc = crc >>> 8 ^ b;
                  }

                  return crc ^ -1;
                }

                function writePngChunk(type, body, data, offset) {
                  var p = offset;
                  var len = body.length;
                  data[p] = len >> 24 & 0xff;
                  data[p + 1] = len >> 16 & 0xff;
                  data[p + 2] = len >> 8 & 0xff;
                  data[p + 3] = len & 0xff;
                  p += 4;
                  data[p] = type.charCodeAt(0) & 0xff;
                  data[p + 1] = type.charCodeAt(1) & 0xff;
                  data[p + 2] = type.charCodeAt(2) & 0xff;
                  data[p + 3] = type.charCodeAt(3) & 0xff;
                  p += 4;
                  data.set(body, p);
                  p += body.length;
                  var crc = crc32(data, offset + 4, p);
                  data[p] = crc >> 24 & 0xff;
                  data[p + 1] = crc >> 16 & 0xff;
                  data[p + 2] = crc >> 8 & 0xff;
                  data[p + 3] = crc & 0xff;
                }

                function adler32(data, start, end) {
                  var a = 1;
                  var b = 0;

                  for (var _i9 = start; _i9 < end; ++_i9) {
                    a = (a + (data[_i9] & 0xff)) % 65521;
                    b = (b + a) % 65521;
                  }

                  return b << 16 | a;
                }

                function deflateSync(literals) {
                  if (!_is_node.isNodeJS) {
                    return deflateSyncUncompressed(literals);
                  }

                  try {
                    var input;

                    if (parseInt(process.versions.node) >= 8) {
                      input = literals;
                    } else {
                      input = Buffer.from(literals);
                    }

                    var output = __webpack_require__(
                    /*! zlib */
                    4).deflateSync(input, {
                      level: 9
                    });

                    return output instanceof Uint8Array ? output : new Uint8Array(output);
                  } catch (e) {
                    (0, _util.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + e);
                  }

                  return deflateSyncUncompressed(literals);
                }

                function deflateSyncUncompressed(literals) {
                  var len = literals.length;
                  var maxBlockLength = 0xffff;
                  var deflateBlocks = Math.ceil(len / maxBlockLength);
                  var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
                  var pi = 0;
                  idat[pi++] = 0x78;
                  idat[pi++] = 0x9c;
                  var pos = 0;

                  while (len > maxBlockLength) {
                    idat[pi++] = 0x00;
                    idat[pi++] = 0xff;
                    idat[pi++] = 0xff;
                    idat[pi++] = 0x00;
                    idat[pi++] = 0x00;
                    idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
                    pi += maxBlockLength;
                    pos += maxBlockLength;
                    len -= maxBlockLength;
                  }

                  idat[pi++] = 0x01;
                  idat[pi++] = len & 0xff;
                  idat[pi++] = len >> 8 & 0xff;
                  idat[pi++] = ~len & 0xffff & 0xff;
                  idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
                  idat.set(literals.subarray(pos), pi);
                  pi += literals.length - pos;
                  var adler = adler32(literals, 0, literals.length);
                  idat[pi++] = adler >> 24 & 0xff;
                  idat[pi++] = adler >> 16 & 0xff;
                  idat[pi++] = adler >> 8 & 0xff;
                  idat[pi++] = adler & 0xff;
                  return idat;
                }

                function encode(imgData, kind, forceDataSchema, isMask) {
                  var width = imgData.width;
                  var height = imgData.height;
                  var bitDepth, colorType, lineSize;
                  var bytes = imgData.data;

                  switch (kind) {
                    case _util.ImageKind.GRAYSCALE_1BPP:
                      colorType = 0;
                      bitDepth = 1;
                      lineSize = width + 7 >> 3;
                      break;

                    case _util.ImageKind.RGB_24BPP:
                      colorType = 2;
                      bitDepth = 8;
                      lineSize = width * 3;
                      break;

                    case _util.ImageKind.RGBA_32BPP:
                      colorType = 6;
                      bitDepth = 8;
                      lineSize = width * 4;
                      break;

                    default:
                      throw new Error("invalid format");
                  }

                  var literals = new Uint8Array((1 + lineSize) * height);
                  var offsetLiterals = 0,
                      offsetBytes = 0;

                  for (var y = 0; y < height; ++y) {
                    literals[offsetLiterals++] = 0;
                    literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
                    offsetBytes += lineSize;
                    offsetLiterals += lineSize;
                  }

                  if (kind === _util.ImageKind.GRAYSCALE_1BPP && isMask) {
                    offsetLiterals = 0;

                    for (var _y = 0; _y < height; _y++) {
                      offsetLiterals++;

                      for (var _i10 = 0; _i10 < lineSize; _i10++) {
                        literals[offsetLiterals++] ^= 0xff;
                      }
                    }
                  }

                  var ihdr = new Uint8Array([width >> 24 & 0xff, width >> 16 & 0xff, width >> 8 & 0xff, width & 0xff, height >> 24 & 0xff, height >> 16 & 0xff, height >> 8 & 0xff, height & 0xff, bitDepth, colorType, 0x00, 0x00, 0x00]);
                  var idat = deflateSync(literals);
                  var pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
                  var data = new Uint8Array(pngLength);
                  var offset = 0;
                  data.set(PNG_HEADER, offset);
                  offset += PNG_HEADER.length;
                  writePngChunk("IHDR", ihdr, data, offset);
                  offset += CHUNK_WRAPPER_SIZE + ihdr.length;
                  writePngChunk("IDATA", idat, data, offset);
                  offset += CHUNK_WRAPPER_SIZE + idat.length;
                  writePngChunk("IEND", new Uint8Array(0), data, offset);
                  return (0, _util.createObjectURL)(data, "image/png", forceDataSchema);
                }

                return function convertImgDataToPng(imgData, forceDataSchema, isMask) {
                  var kind = imgData.kind === undefined ? _util.ImageKind.GRAYSCALE_1BPP : imgData.kind;
                  return encode(imgData, kind, forceDataSchema, isMask);
                };
              }();

              var SVGExtraState = /*#__PURE__*/function () {
                function SVGExtraState() {
                  _classCallCheck(this, SVGExtraState);

                  this.fontSizeScale = 1;
                  this.fontWeight = SVG_DEFAULTS.fontWeight;
                  this.fontSize = 0;
                  this.textMatrix = _util.IDENTITY_MATRIX;
                  this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
                  this.leading = 0;
                  this.textRenderingMode = _util.TextRenderingMode.FILL;
                  this.textMatrixScale = 1;
                  this.x = 0;
                  this.y = 0;
                  this.lineX = 0;
                  this.lineY = 0;
                  this.charSpacing = 0;
                  this.wordSpacing = 0;
                  this.textHScale = 1;
                  this.textRise = 0;
                  this.fillColor = SVG_DEFAULTS.fillColor;
                  this.strokeColor = "#000000";
                  this.fillAlpha = 1;
                  this.strokeAlpha = 1;
                  this.lineWidth = 1;
                  this.lineJoin = "";
                  this.lineCap = "";
                  this.miterLimit = 0;
                  this.dashArray = [];
                  this.dashPhase = 0;
                  this.dependencies = [];
                  this.activeClipUrl = null;
                  this.clipGroup = null;
                  this.maskId = "";
                }

                _createClass(SVGExtraState, [{
                  key: "clone",
                  value: function clone() {
                    return Object.create(this);
                  }
                }, {
                  key: "setCurrentPoint",
                  value: function setCurrentPoint(x, y) {
                    this.x = x;
                    this.y = y;
                  }
                }]);

                return SVGExtraState;
              }();

              var clipCount = 0;
              var maskCount = 0;
              var shadingCount = 0;

              exports.SVGGraphics = SVGGraphics = /*#__PURE__*/function () {
                function SVGGraphics(commonObjs, objs, forceDataSchema) {
                  _classCallCheck(this, SVGGraphics);

                  this.svgFactory = new _display_utils.DOMSVGFactory();
                  this.current = new SVGExtraState();
                  this.transformMatrix = _util.IDENTITY_MATRIX;
                  this.transformStack = [];
                  this.extraStack = [];
                  this.commonObjs = commonObjs;
                  this.objs = objs;
                  this.pendingClip = null;
                  this.pendingEOFill = false;
                  this.embedFonts = false;
                  this.embeddedFonts = Object.create(null);
                  this.cssStyle = null;
                  this.forceDataSchema = !!forceDataSchema;
                  this._operatorIdMapping = [];

                  for (var op in _util.OPS) {
                    this._operatorIdMapping[_util.OPS[op]] = op;
                  }
                }

                _createClass(SVGGraphics, [{
                  key: "save",
                  value: function save() {
                    this.transformStack.push(this.transformMatrix);
                    var old = this.current;
                    this.extraStack.push(old);
                    this.current = old.clone();
                  }
                }, {
                  key: "restore",
                  value: function restore() {
                    this.transformMatrix = this.transformStack.pop();
                    this.current = this.extraStack.pop();
                    this.pendingClip = null;
                    this.tgrp = null;
                  }
                }, {
                  key: "group",
                  value: function group(items) {
                    this.save();
                    this.executeOpTree(items);
                    this.restore();
                  }
                }, {
                  key: "loadDependencies",
                  value: function loadDependencies(operatorList) {
                    var _this47 = this;

                    var fnArray = operatorList.fnArray;
                    var argsArray = operatorList.argsArray;

                    for (var i = 0, ii = fnArray.length; i < ii; i++) {
                      if (fnArray[i] !== _util.OPS.dependency) {
                        continue;
                      }

                      var _iterator17 = _createForOfIteratorHelper(argsArray[i]),
                          _step17;

                      try {
                        var _loop = function _loop() {
                          var obj = _step17.value;
                          var objsPool = obj.startsWith("g_") ? _this47.commonObjs : _this47.objs;
                          var promise = new Promise(function (resolve) {
                            objsPool.get(obj, resolve);
                          });

                          _this47.current.dependencies.push(promise);
                        };

                        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                          _loop();
                        }
                      } catch (err) {
                        _iterator17.e(err);
                      } finally {
                        _iterator17.f();
                      }
                    }

                    return Promise.all(this.current.dependencies);
                  }
                }, {
                  key: "transform",
                  value: function transform(a, b, c, d, e, f) {
                    var transformMatrix = [a, b, c, d, e, f];
                    this.transformMatrix = _util.Util.transform(this.transformMatrix, transformMatrix);
                    this.tgrp = null;
                  }
                }, {
                  key: "getSVG",
                  value: function getSVG(operatorList, viewport) {
                    var _this48 = this;

                    this.viewport = viewport;

                    var svgElement = this._initialize(viewport);

                    return this.loadDependencies(operatorList).then(function () {
                      _this48.transformMatrix = _util.IDENTITY_MATRIX;

                      _this48.executeOpTree(_this48.convertOpList(operatorList));

                      return svgElement;
                    });
                  }
                }, {
                  key: "convertOpList",
                  value: function convertOpList(operatorList) {
                    var operatorIdMapping = this._operatorIdMapping;
                    var argsArray = operatorList.argsArray;
                    var fnArray = operatorList.fnArray;
                    var opList = [];

                    for (var i = 0, ii = fnArray.length; i < ii; i++) {
                      var fnId = fnArray[i];
                      opList.push({
                        fnId: fnId,
                        fn: operatorIdMapping[fnId],
                        args: argsArray[i]
                      });
                    }

                    return opListToTree(opList);
                  }
                }, {
                  key: "executeOpTree",
                  value: function executeOpTree(opTree) {
                    var _iterator18 = _createForOfIteratorHelper(opTree),
                        _step18;

                    try {
                      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                        var opTreeElement = _step18.value;
                        var fn = opTreeElement.fn;
                        var fnId = opTreeElement.fnId;
                        var args = opTreeElement.args;

                        switch (fnId | 0) {
                          case _util.OPS.beginText:
                            this.beginText();
                            break;

                          case _util.OPS.dependency:
                            break;

                          case _util.OPS.setLeading:
                            this.setLeading(args);
                            break;

                          case _util.OPS.setLeadingMoveText:
                            this.setLeadingMoveText(args[0], args[1]);
                            break;

                          case _util.OPS.setFont:
                            this.setFont(args);
                            break;

                          case _util.OPS.showText:
                            this.showText(args[0]);
                            break;

                          case _util.OPS.showSpacedText:
                            this.showText(args[0]);
                            break;

                          case _util.OPS.endText:
                            this.endText();
                            break;

                          case _util.OPS.moveText:
                            this.moveText(args[0], args[1]);
                            break;

                          case _util.OPS.setCharSpacing:
                            this.setCharSpacing(args[0]);
                            break;

                          case _util.OPS.setWordSpacing:
                            this.setWordSpacing(args[0]);
                            break;

                          case _util.OPS.setHScale:
                            this.setHScale(args[0]);
                            break;

                          case _util.OPS.setTextMatrix:
                            this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                            break;

                          case _util.OPS.setTextRise:
                            this.setTextRise(args[0]);
                            break;

                          case _util.OPS.setTextRenderingMode:
                            this.setTextRenderingMode(args[0]);
                            break;

                          case _util.OPS.setLineWidth:
                            this.setLineWidth(args[0]);
                            break;

                          case _util.OPS.setLineJoin:
                            this.setLineJoin(args[0]);
                            break;

                          case _util.OPS.setLineCap:
                            this.setLineCap(args[0]);
                            break;

                          case _util.OPS.setMiterLimit:
                            this.setMiterLimit(args[0]);
                            break;

                          case _util.OPS.setFillRGBColor:
                            this.setFillRGBColor(args[0], args[1], args[2]);
                            break;

                          case _util.OPS.setStrokeRGBColor:
                            this.setStrokeRGBColor(args[0], args[1], args[2]);
                            break;

                          case _util.OPS.setStrokeColorN:
                            this.setStrokeColorN(args);
                            break;

                          case _util.OPS.setFillColorN:
                            this.setFillColorN(args);
                            break;

                          case _util.OPS.shadingFill:
                            this.shadingFill(args[0]);
                            break;

                          case _util.OPS.setDash:
                            this.setDash(args[0], args[1]);
                            break;

                          case _util.OPS.setRenderingIntent:
                            this.setRenderingIntent(args[0]);
                            break;

                          case _util.OPS.setFlatness:
                            this.setFlatness(args[0]);
                            break;

                          case _util.OPS.setGState:
                            this.setGState(args[0]);
                            break;

                          case _util.OPS.fill:
                            this.fill();
                            break;

                          case _util.OPS.eoFill:
                            this.eoFill();
                            break;

                          case _util.OPS.stroke:
                            this.stroke();
                            break;

                          case _util.OPS.fillStroke:
                            this.fillStroke();
                            break;

                          case _util.OPS.eoFillStroke:
                            this.eoFillStroke();
                            break;

                          case _util.OPS.clip:
                            this.clip("nonzero");
                            break;

                          case _util.OPS.eoClip:
                            this.clip("evenodd");
                            break;

                          case _util.OPS.paintSolidColorImageMask:
                            this.paintSolidColorImageMask();
                            break;

                          case _util.OPS.paintJpegXObject:
                            this.paintJpegXObject(args[0], args[1], args[2]);
                            break;

                          case _util.OPS.paintImageXObject:
                            this.paintImageXObject(args[0]);
                            break;

                          case _util.OPS.paintInlineImageXObject:
                            this.paintInlineImageXObject(args[0]);
                            break;

                          case _util.OPS.paintImageMaskXObject:
                            this.paintImageMaskXObject(args[0]);
                            break;

                          case _util.OPS.paintFormXObjectBegin:
                            this.paintFormXObjectBegin(args[0], args[1]);
                            break;

                          case _util.OPS.paintFormXObjectEnd:
                            this.paintFormXObjectEnd();
                            break;

                          case _util.OPS.closePath:
                            this.closePath();
                            break;

                          case _util.OPS.closeStroke:
                            this.closeStroke();
                            break;

                          case _util.OPS.closeFillStroke:
                            this.closeFillStroke();
                            break;

                          case _util.OPS.closeEOFillStroke:
                            this.closeEOFillStroke();
                            break;

                          case _util.OPS.nextLine:
                            this.nextLine();
                            break;

                          case _util.OPS.transform:
                            this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                            break;

                          case _util.OPS.constructPath:
                            this.constructPath(args[0], args[1]);
                            break;

                          case _util.OPS.endPath:
                            this.endPath();
                            break;

                          case 92:
                            this.group(opTreeElement.items);
                            break;

                          default:
                            (0, _util.warn)("Unimplemented operator ".concat(fn));
                            break;
                        }
                      }
                    } catch (err) {
                      _iterator18.e(err);
                    } finally {
                      _iterator18.f();
                    }
                  }
                }, {
                  key: "setWordSpacing",
                  value: function setWordSpacing(wordSpacing) {
                    this.current.wordSpacing = wordSpacing;
                  }
                }, {
                  key: "setCharSpacing",
                  value: function setCharSpacing(charSpacing) {
                    this.current.charSpacing = charSpacing;
                  }
                }, {
                  key: "nextLine",
                  value: function nextLine() {
                    this.moveText(0, this.current.leading);
                  }
                }, {
                  key: "setTextMatrix",
                  value: function setTextMatrix(a, b, c, d, e, f) {
                    var current = this.current;
                    current.textMatrix = current.lineMatrix = [a, b, c, d, e, f];
                    current.textMatrixScale = Math.sqrt(a * a + b * b);
                    current.x = current.lineX = 0;
                    current.y = current.lineY = 0;
                    current.xcoords = [];
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                    current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
                    current.tspan.setAttributeNS(null, "y", pf(-current.y));
                    current.txtElement = this.svgFactory.createElement("svg:text");
                    current.txtElement.appendChild(current.tspan);
                  }
                }, {
                  key: "beginText",
                  value: function beginText() {
                    var current = this.current;
                    current.x = current.lineX = 0;
                    current.y = current.lineY = 0;
                    current.textMatrix = _util.IDENTITY_MATRIX;
                    current.lineMatrix = _util.IDENTITY_MATRIX;
                    current.textMatrixScale = 1;
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.txtElement = this.svgFactory.createElement("svg:text");
                    current.txtgrp = this.svgFactory.createElement("svg:g");
                    current.xcoords = [];
                  }
                }, {
                  key: "moveText",
                  value: function moveText(x, y) {
                    var current = this.current;
                    current.x = current.lineX += x;
                    current.y = current.lineY += y;
                    current.xcoords = [];
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                    current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
                    current.tspan.setAttributeNS(null, "y", pf(-current.y));
                  }
                }, {
                  key: "showText",
                  value: function showText(glyphs) {
                    var current = this.current;
                    var font = current.font;
                    var fontSize = current.fontSize;

                    if (fontSize === 0) {
                      return;
                    }

                    var charSpacing = current.charSpacing;
                    var wordSpacing = current.wordSpacing;
                    var fontDirection = current.fontDirection;
                    var textHScale = current.textHScale * fontDirection;
                    var vertical = font.vertical;
                    var widthAdvanceScale = fontSize * current.fontMatrix[0];
                    var x = 0;

                    var _iterator19 = _createForOfIteratorHelper(glyphs),
                        _step19;

                    try {
                      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                        var glyph = _step19.value;

                        if (glyph === null) {
                          x += fontDirection * wordSpacing;
                          continue;
                        } else if ((0, _util.isNum)(glyph)) {
                          x += -glyph * fontSize * 0.001;
                          continue;
                        }

                        var width = glyph.width;
                        var character = glyph.fontChar;
                        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                        var charWidth = width * widthAdvanceScale + spacing * fontDirection;

                        if (!glyph.isInFont && !font.missingFile) {
                          x += charWidth;
                          continue;
                        }

                        current.xcoords.push(current.x + x);
                        current.tspan.textContent += character;
                        x += charWidth;
                      }
                    } catch (err) {
                      _iterator19.e(err);
                    } finally {
                      _iterator19.f();
                    }

                    if (vertical) {
                      current.y -= x * textHScale;
                    } else {
                      current.x += x * textHScale;
                    }

                    current.tspan.setAttributeNS(null, "x", current.xcoords.map(pf).join(" "));
                    current.tspan.setAttributeNS(null, "y", pf(-current.y));
                    current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                    current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));

                    if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
                      current.tspan.setAttributeNS(null, "font-style", current.fontStyle);
                    }

                    if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
                      current.tspan.setAttributeNS(null, "font-weight", current.fontWeight);
                    }

                    var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;

                    if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                      if (current.fillColor !== SVG_DEFAULTS.fillColor) {
                        current.tspan.setAttributeNS(null, "fill", current.fillColor);
                      }

                      if (current.fillAlpha < 1) {
                        current.tspan.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                      }
                    } else if (current.textRenderingMode === _util.TextRenderingMode.ADD_TO_PATH) {
                      current.tspan.setAttributeNS(null, "fill", "transparent");
                    } else {
                      current.tspan.setAttributeNS(null, "fill", "none");
                    }

                    if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                      var lineWidthScale = 1 / (current.textMatrixScale || 1);

                      this._setStrokeAttributes(current.tspan, lineWidthScale);
                    }

                    var textMatrix = current.textMatrix;

                    if (current.textRise !== 0) {
                      textMatrix = textMatrix.slice();
                      textMatrix[5] += current.textRise;
                    }

                    current.txtElement.setAttributeNS(null, "transform", "".concat(pm(textMatrix), " scale(").concat(pf(textHScale), ", -1)"));
                    current.txtElement.setAttributeNS(XML_NS, "xml:space", "preserve");
                    current.txtElement.appendChild(current.tspan);
                    current.txtgrp.appendChild(current.txtElement);

                    this._ensureTransformGroup().appendChild(current.txtElement);
                  }
                }, {
                  key: "setLeadingMoveText",
                  value: function setLeadingMoveText(x, y) {
                    this.setLeading(-y);
                    this.moveText(x, y);
                  }
                }, {
                  key: "addFontStyle",
                  value: function addFontStyle(fontObj) {
                    if (!this.cssStyle) {
                      this.cssStyle = this.svgFactory.createElement("svg:style");
                      this.cssStyle.setAttributeNS(null, "type", "text/css");
                      this.defs.appendChild(this.cssStyle);
                    }

                    var url = (0, _util.createObjectURL)(fontObj.data, fontObj.mimetype, this.forceDataSchema);
                    this.cssStyle.textContent += "@font-face { font-family: \"".concat(fontObj.loadedName, "\";") + " src: url(".concat(url, "); }\n");
                  }
                }, {
                  key: "setFont",
                  value: function setFont(details) {
                    var current = this.current;
                    var fontObj = this.commonObjs.get(details[0]);
                    var size = details[1];
                    current.font = fontObj;

                    if (this.embedFonts && fontObj.data && !this.embeddedFonts[fontObj.loadedName]) {
                      this.addFontStyle(fontObj);
                      this.embeddedFonts[fontObj.loadedName] = fontObj;
                    }

                    current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;
                    var bold = "normal";

                    if (fontObj.black) {
                      bold = "900";
                    } else if (fontObj.bold) {
                      bold = "bold";
                    }

                    var italic = fontObj.italic ? "italic" : "normal";

                    if (size < 0) {
                      size = -size;
                      current.fontDirection = -1;
                    } else {
                      current.fontDirection = 1;
                    }

                    current.fontSize = size;
                    current.fontFamily = fontObj.loadedName;
                    current.fontWeight = bold;
                    current.fontStyle = italic;
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.tspan.setAttributeNS(null, "y", pf(-current.y));
                    current.xcoords = [];
                  }
                }, {
                  key: "endText",
                  value: function endText() {
                    var current = this.current;

                    if (current.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG && current.txtElement && current.txtElement.hasChildNodes()) {
                      current.element = current.txtElement;
                      this.clip("nonzero");
                      this.endPath();
                    }
                  }
                }, {
                  key: "setLineWidth",
                  value: function setLineWidth(width) {
                    if (width > 0) {
                      this.current.lineWidth = width;
                    }
                  }
                }, {
                  key: "setLineCap",
                  value: function setLineCap(style) {
                    this.current.lineCap = LINE_CAP_STYLES[style];
                  }
                }, {
                  key: "setLineJoin",
                  value: function setLineJoin(style) {
                    this.current.lineJoin = LINE_JOIN_STYLES[style];
                  }
                }, {
                  key: "setMiterLimit",
                  value: function setMiterLimit(limit) {
                    this.current.miterLimit = limit;
                  }
                }, {
                  key: "setStrokeAlpha",
                  value: function setStrokeAlpha(strokeAlpha) {
                    this.current.strokeAlpha = strokeAlpha;
                  }
                }, {
                  key: "setStrokeRGBColor",
                  value: function setStrokeRGBColor(r, g, b) {
                    this.current.strokeColor = _util.Util.makeCssRgb(r, g, b);
                  }
                }, {
                  key: "setFillAlpha",
                  value: function setFillAlpha(fillAlpha) {
                    this.current.fillAlpha = fillAlpha;
                  }
                }, {
                  key: "setFillRGBColor",
                  value: function setFillRGBColor(r, g, b) {
                    this.current.fillColor = _util.Util.makeCssRgb(r, g, b);
                    this.current.tspan = this.svgFactory.createElement("svg:tspan");
                    this.current.xcoords = [];
                  }
                }, {
                  key: "setStrokeColorN",
                  value: function setStrokeColorN(args) {
                    this.current.strokeColor = this._makeColorN_Pattern(args);
                  }
                }, {
                  key: "setFillColorN",
                  value: function setFillColorN(args) {
                    this.current.fillColor = this._makeColorN_Pattern(args);
                  }
                }, {
                  key: "shadingFill",
                  value: function shadingFill(args) {
                    var width = this.viewport.width;
                    var height = this.viewport.height;

                    var inv = _util.Util.inverseTransform(this.transformMatrix);

                    var bl = _util.Util.applyTransform([0, 0], inv);

                    var br = _util.Util.applyTransform([0, height], inv);

                    var ul = _util.Util.applyTransform([width, 0], inv);

                    var ur = _util.Util.applyTransform([width, height], inv);

                    var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
                    var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
                    var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
                    var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
                    var rect = this.svgFactory.createElement("svg:rect");
                    rect.setAttributeNS(null, "x", x0);
                    rect.setAttributeNS(null, "y", y0);
                    rect.setAttributeNS(null, "width", x1 - x0);
                    rect.setAttributeNS(null, "height", y1 - y0);
                    rect.setAttributeNS(null, "fill", this._makeShadingPattern(args));

                    this._ensureTransformGroup().appendChild(rect);
                  }
                }, {
                  key: "_makeColorN_Pattern",
                  value: function _makeColorN_Pattern(args) {
                    if (args[0] === "TilingPattern") {
                      return this._makeTilingPattern(args);
                    }

                    return this._makeShadingPattern(args);
                  }
                }, {
                  key: "_makeTilingPattern",
                  value: function _makeTilingPattern(args) {
                    var color = args[1];
                    var operatorList = args[2];
                    var matrix = args[3] || _util.IDENTITY_MATRIX;

                    var _args$ = _slicedToArray(args[4], 4),
                        x0 = _args$[0],
                        y0 = _args$[1],
                        x1 = _args$[2],
                        y1 = _args$[3];

                    var xstep = args[5];
                    var ystep = args[6];
                    var paintType = args[7];
                    var tilingId = "shading".concat(shadingCount++);

                    var _util$Util$applyTrans = _util.Util.applyTransform([x0, y0], matrix),
                        _util$Util$applyTrans2 = _slicedToArray(_util$Util$applyTrans, 2),
                        tx0 = _util$Util$applyTrans2[0],
                        ty0 = _util$Util$applyTrans2[1];

                    var _util$Util$applyTrans3 = _util.Util.applyTransform([x1, y1], matrix),
                        _util$Util$applyTrans4 = _slicedToArray(_util$Util$applyTrans3, 2),
                        tx1 = _util$Util$applyTrans4[0],
                        ty1 = _util$Util$applyTrans4[1];

                    var _util$Util$singularVa = _util.Util.singularValueDecompose2dScale(matrix),
                        _util$Util$singularVa2 = _slicedToArray(_util$Util$singularVa, 2),
                        xscale = _util$Util$singularVa2[0],
                        yscale = _util$Util$singularVa2[1];

                    var txstep = xstep * xscale;
                    var tystep = ystep * yscale;
                    var tiling = this.svgFactory.createElement("svg:pattern");
                    tiling.setAttributeNS(null, "id", tilingId);
                    tiling.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
                    tiling.setAttributeNS(null, "width", txstep);
                    tiling.setAttributeNS(null, "height", tystep);
                    tiling.setAttributeNS(null, "x", "".concat(tx0));
                    tiling.setAttributeNS(null, "y", "".concat(ty0));
                    var svg = this.svg;
                    var transformMatrix = this.transformMatrix;
                    var fillColor = this.current.fillColor;
                    var strokeColor = this.current.strokeColor;
                    var bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
                    this.svg = bbox;
                    this.transformMatrix = matrix;

                    if (paintType === 2) {
                      var _util$Util;

                      var cssColor = (_util$Util = _util.Util).makeCssRgb.apply(_util$Util, _toConsumableArray(color));

                      this.current.fillColor = cssColor;
                      this.current.strokeColor = cssColor;
                    }

                    this.executeOpTree(this.convertOpList(operatorList));
                    this.svg = svg;
                    this.transformMatrix = transformMatrix;
                    this.current.fillColor = fillColor;
                    this.current.strokeColor = strokeColor;
                    tiling.appendChild(bbox.childNodes[0]);
                    this.defs.appendChild(tiling);
                    return "url(#".concat(tilingId, ")");
                  }
                }, {
                  key: "_makeShadingPattern",
                  value: function _makeShadingPattern(args) {
                    switch (args[0]) {
                      case "RadialAxial":
                        var shadingId = "shading".concat(shadingCount++);
                        var colorStops = args[3];
                        var gradient;

                        switch (args[1]) {
                          case "axial":
                            var point0 = args[4];
                            var point1 = args[5];
                            gradient = this.svgFactory.createElement("svg:linearGradient");
                            gradient.setAttributeNS(null, "id", shadingId);
                            gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                            gradient.setAttributeNS(null, "x1", point0[0]);
                            gradient.setAttributeNS(null, "y1", point0[1]);
                            gradient.setAttributeNS(null, "x2", point1[0]);
                            gradient.setAttributeNS(null, "y2", point1[1]);
                            break;

                          case "radial":
                            var focalPoint = args[4];
                            var circlePoint = args[5];
                            var focalRadius = args[6];
                            var circleRadius = args[7];
                            gradient = this.svgFactory.createElement("svg:radialGradient");
                            gradient.setAttributeNS(null, "id", shadingId);
                            gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                            gradient.setAttributeNS(null, "cx", circlePoint[0]);
                            gradient.setAttributeNS(null, "cy", circlePoint[1]);
                            gradient.setAttributeNS(null, "r", circleRadius);
                            gradient.setAttributeNS(null, "fx", focalPoint[0]);
                            gradient.setAttributeNS(null, "fy", focalPoint[1]);
                            gradient.setAttributeNS(null, "fr", focalRadius);
                            break;

                          default:
                            throw new Error("Unknown RadialAxial type: ".concat(args[1]));
                        }

                        var _iterator20 = _createForOfIteratorHelper(colorStops),
                            _step20;

                        try {
                          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                            var colorStop = _step20.value;
                            var stop = this.svgFactory.createElement("svg:stop");
                            stop.setAttributeNS(null, "offset", colorStop[0]);
                            stop.setAttributeNS(null, "stop-color", colorStop[1]);
                            gradient.appendChild(stop);
                          }
                        } catch (err) {
                          _iterator20.e(err);
                        } finally {
                          _iterator20.f();
                        }

                        this.defs.appendChild(gradient);
                        return "url(#".concat(shadingId, ")");

                      case "Mesh":
                        (0, _util.warn)("Unimplemented pattern Mesh");
                        return null;

                      case "Dummy":
                        return "hotpink";

                      default:
                        throw new Error("Unknown IR type: ".concat(args[0]));
                    }
                  }
                }, {
                  key: "setDash",
                  value: function setDash(dashArray, dashPhase) {
                    this.current.dashArray = dashArray;
                    this.current.dashPhase = dashPhase;
                  }
                }, {
                  key: "constructPath",
                  value: function constructPath(ops, args) {
                    var current = this.current;
                    var x = current.x,
                        y = current.y;
                    var d = [];
                    var j = 0;

                    var _iterator21 = _createForOfIteratorHelper(ops),
                        _step21;

                    try {
                      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                        var op = _step21.value;

                        switch (op | 0) {
                          case _util.OPS.rectangle:
                            x = args[j++];
                            y = args[j++];
                            var width = args[j++];
                            var height = args[j++];
                            var xw = x + width;
                            var yh = y + height;
                            d.push("M", pf(x), pf(y), "L", pf(xw), pf(y), "L", pf(xw), pf(yh), "L", pf(x), pf(yh), "Z");
                            break;

                          case _util.OPS.moveTo:
                            x = args[j++];
                            y = args[j++];
                            d.push("M", pf(x), pf(y));
                            break;

                          case _util.OPS.lineTo:
                            x = args[j++];
                            y = args[j++];
                            d.push("L", pf(x), pf(y));
                            break;

                          case _util.OPS.curveTo:
                            x = args[j + 4];
                            y = args[j + 5];
                            d.push("C", pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                            j += 6;
                            break;

                          case _util.OPS.curveTo2:
                            d.push("C", pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                            x = args[j + 2];
                            y = args[j + 3];
                            j += 4;
                            break;

                          case _util.OPS.curveTo3:
                            x = args[j + 2];
                            y = args[j + 3];
                            d.push("C", pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                            j += 4;
                            break;

                          case _util.OPS.closePath:
                            d.push("Z");
                            break;
                        }
                      }
                    } catch (err) {
                      _iterator21.e(err);
                    } finally {
                      _iterator21.f();
                    }

                    d = d.join(" ");

                    if (current.path && ops.length > 0 && ops[0] !== _util.OPS.rectangle && ops[0] !== _util.OPS.moveTo) {
                      d = current.path.getAttributeNS(null, "d") + d;
                    } else {
                      current.path = this.svgFactory.createElement("svg:path");

                      this._ensureTransformGroup().appendChild(current.path);
                    }

                    current.path.setAttributeNS(null, "d", d);
                    current.path.setAttributeNS(null, "fill", "none");
                    current.element = current.path;
                    current.setCurrentPoint(x, y);
                  }
                }, {
                  key: "endPath",
                  value: function endPath() {
                    var current = this.current;
                    current.path = null;

                    if (!this.pendingClip) {
                      return;
                    }

                    if (!current.element) {
                      this.pendingClip = null;
                      return;
                    }

                    var clipId = "clippath".concat(clipCount++);
                    var clipPath = this.svgFactory.createElement("svg:clipPath");
                    clipPath.setAttributeNS(null, "id", clipId);
                    clipPath.setAttributeNS(null, "transform", pm(this.transformMatrix));
                    var clipElement = current.element.cloneNode(true);

                    if (this.pendingClip === "evenodd") {
                      clipElement.setAttributeNS(null, "clip-rule", "evenodd");
                    } else {
                      clipElement.setAttributeNS(null, "clip-rule", "nonzero");
                    }

                    this.pendingClip = null;
                    clipPath.appendChild(clipElement);
                    this.defs.appendChild(clipPath);

                    if (current.activeClipUrl) {
                      current.clipGroup = null;
                      this.extraStack.forEach(function (prev) {
                        prev.clipGroup = null;
                      });
                      clipPath.setAttributeNS(null, "clip-path", current.activeClipUrl);
                    }

                    current.activeClipUrl = "url(#".concat(clipId, ")");
                    this.tgrp = null;
                  }
                }, {
                  key: "clip",
                  value: function clip(type) {
                    this.pendingClip = type;
                  }
                }, {
                  key: "closePath",
                  value: function closePath() {
                    var current = this.current;

                    if (current.path) {
                      var d = "".concat(current.path.getAttributeNS(null, "d"), "Z");
                      current.path.setAttributeNS(null, "d", d);
                    }
                  }
                }, {
                  key: "setLeading",
                  value: function setLeading(leading) {
                    this.current.leading = -leading;
                  }
                }, {
                  key: "setTextRise",
                  value: function setTextRise(textRise) {
                    this.current.textRise = textRise;
                  }
                }, {
                  key: "setTextRenderingMode",
                  value: function setTextRenderingMode(textRenderingMode) {
                    this.current.textRenderingMode = textRenderingMode;
                  }
                }, {
                  key: "setHScale",
                  value: function setHScale(scale) {
                    this.current.textHScale = scale / 100;
                  }
                }, {
                  key: "setRenderingIntent",
                  value: function setRenderingIntent(intent) {}
                }, {
                  key: "setFlatness",
                  value: function setFlatness(flatness) {}
                }, {
                  key: "setGState",
                  value: function setGState(states) {
                    var _iterator22 = _createForOfIteratorHelper(states),
                        _step22;

                    try {
                      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                        var _step22$value = _slicedToArray(_step22.value, 2),
                            key = _step22$value[0],
                            value = _step22$value[1];

                        switch (key) {
                          case "LW":
                            this.setLineWidth(value);
                            break;

                          case "LC":
                            this.setLineCap(value);
                            break;

                          case "LJ":
                            this.setLineJoin(value);
                            break;

                          case "ML":
                            this.setMiterLimit(value);
                            break;

                          case "D":
                            this.setDash(value[0], value[1]);
                            break;

                          case "RI":
                            this.setRenderingIntent(value);
                            break;

                          case "FL":
                            this.setFlatness(value);
                            break;

                          case "Font":
                            this.setFont(value);
                            break;

                          case "CA":
                            this.setStrokeAlpha(value);
                            break;

                          case "ca":
                            this.setFillAlpha(value);
                            break;

                          default:
                            (0, _util.warn)("Unimplemented graphic state operator ".concat(key));
                            break;
                        }
                      }
                    } catch (err) {
                      _iterator22.e(err);
                    } finally {
                      _iterator22.f();
                    }
                  }
                }, {
                  key: "fill",
                  value: function fill() {
                    var current = this.current;

                    if (current.element) {
                      current.element.setAttributeNS(null, "fill", current.fillColor);
                      current.element.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                      this.endPath();
                    }
                  }
                }, {
                  key: "stroke",
                  value: function stroke() {
                    var current = this.current;

                    if (current.element) {
                      this._setStrokeAttributes(current.element);

                      current.element.setAttributeNS(null, "fill", "none");
                      this.endPath();
                    }
                  }
                }, {
                  key: "_setStrokeAttributes",
                  value: function _setStrokeAttributes(element) {
                    var lineWidthScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                    var current = this.current;
                    var dashArray = current.dashArray;

                    if (lineWidthScale !== 1 && dashArray.length > 0) {
                      dashArray = dashArray.map(function (value) {
                        return lineWidthScale * value;
                      });
                    }

                    element.setAttributeNS(null, "stroke", current.strokeColor);
                    element.setAttributeNS(null, "stroke-opacity", current.strokeAlpha);
                    element.setAttributeNS(null, "stroke-miterlimit", pf(current.miterLimit));
                    element.setAttributeNS(null, "stroke-linecap", current.lineCap);
                    element.setAttributeNS(null, "stroke-linejoin", current.lineJoin);
                    element.setAttributeNS(null, "stroke-width", pf(lineWidthScale * current.lineWidth) + "px");
                    element.setAttributeNS(null, "stroke-dasharray", dashArray.map(pf).join(" "));
                    element.setAttributeNS(null, "stroke-dashoffset", pf(lineWidthScale * current.dashPhase) + "px");
                  }
                }, {
                  key: "eoFill",
                  value: function eoFill() {
                    if (this.current.element) {
                      this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
                    }

                    this.fill();
                  }
                }, {
                  key: "fillStroke",
                  value: function fillStroke() {
                    this.stroke();
                    this.fill();
                  }
                }, {
                  key: "eoFillStroke",
                  value: function eoFillStroke() {
                    if (this.current.element) {
                      this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
                    }

                    this.fillStroke();
                  }
                }, {
                  key: "closeStroke",
                  value: function closeStroke() {
                    this.closePath();
                    this.stroke();
                  }
                }, {
                  key: "closeFillStroke",
                  value: function closeFillStroke() {
                    this.closePath();
                    this.fillStroke();
                  }
                }, {
                  key: "closeEOFillStroke",
                  value: function closeEOFillStroke() {
                    this.closePath();
                    this.eoFillStroke();
                  }
                }, {
                  key: "paintSolidColorImageMask",
                  value: function paintSolidColorImageMask() {
                    var rect = this.svgFactory.createElement("svg:rect");
                    rect.setAttributeNS(null, "x", "0");
                    rect.setAttributeNS(null, "y", "0");
                    rect.setAttributeNS(null, "width", "1px");
                    rect.setAttributeNS(null, "height", "1px");
                    rect.setAttributeNS(null, "fill", this.current.fillColor);

                    this._ensureTransformGroup().appendChild(rect);
                  }
                }, {
                  key: "paintJpegXObject",
                  value: function paintJpegXObject(objId, w, h) {
                    var imgObj = this.objs.get(objId);
                    var imgEl = this.svgFactory.createElement("svg:image");
                    imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgObj.src);
                    imgEl.setAttributeNS(null, "width", pf(w));
                    imgEl.setAttributeNS(null, "height", pf(h));
                    imgEl.setAttributeNS(null, "x", "0");
                    imgEl.setAttributeNS(null, "y", pf(-h));
                    imgEl.setAttributeNS(null, "transform", "scale(".concat(pf(1 / w), " ").concat(pf(-1 / h), ")"));

                    this._ensureTransformGroup().appendChild(imgEl);
                  }
                }, {
                  key: "paintImageXObject",
                  value: function paintImageXObject(objId) {
                    var imgData = this.objs.get(objId);

                    if (!imgData) {
                      (0, _util.warn)("Dependent image with object ID ".concat(objId, " is not ready yet"));
                      return;
                    }

                    this.paintInlineImageXObject(imgData);
                  }
                }, {
                  key: "paintInlineImageXObject",
                  value: function paintInlineImageXObject(imgData, mask) {
                    var width = imgData.width;
                    var height = imgData.height;
                    var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
                    var cliprect = this.svgFactory.createElement("svg:rect");
                    cliprect.setAttributeNS(null, "x", "0");
                    cliprect.setAttributeNS(null, "y", "0");
                    cliprect.setAttributeNS(null, "width", pf(width));
                    cliprect.setAttributeNS(null, "height", pf(height));
                    this.current.element = cliprect;
                    this.clip("nonzero");
                    var imgEl = this.svgFactory.createElement("svg:image");
                    imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgSrc);
                    imgEl.setAttributeNS(null, "x", "0");
                    imgEl.setAttributeNS(null, "y", pf(-height));
                    imgEl.setAttributeNS(null, "width", pf(width) + "px");
                    imgEl.setAttributeNS(null, "height", pf(height) + "px");
                    imgEl.setAttributeNS(null, "transform", "scale(".concat(pf(1 / width), " ").concat(pf(-1 / height), ")"));

                    if (mask) {
                      mask.appendChild(imgEl);
                    } else {
                      this._ensureTransformGroup().appendChild(imgEl);
                    }
                  }
                }, {
                  key: "paintImageMaskXObject",
                  value: function paintImageMaskXObject(imgData) {
                    var current = this.current;
                    var width = imgData.width;
                    var height = imgData.height;
                    var fillColor = current.fillColor;
                    current.maskId = "mask".concat(maskCount++);
                    var mask = this.svgFactory.createElement("svg:mask");
                    mask.setAttributeNS(null, "id", current.maskId);
                    var rect = this.svgFactory.createElement("svg:rect");
                    rect.setAttributeNS(null, "x", "0");
                    rect.setAttributeNS(null, "y", "0");
                    rect.setAttributeNS(null, "width", pf(width));
                    rect.setAttributeNS(null, "height", pf(height));
                    rect.setAttributeNS(null, "fill", fillColor);
                    rect.setAttributeNS(null, "mask", "url(#".concat(current.maskId, ")"));
                    this.defs.appendChild(mask);

                    this._ensureTransformGroup().appendChild(rect);

                    this.paintInlineImageXObject(imgData, mask);
                  }
                }, {
                  key: "paintFormXObjectBegin",
                  value: function paintFormXObjectBegin(matrix, bbox) {
                    if (Array.isArray(matrix) && matrix.length === 6) {
                      this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                    }

                    if (bbox) {
                      var width = bbox[2] - bbox[0];
                      var height = bbox[3] - bbox[1];
                      var cliprect = this.svgFactory.createElement("svg:rect");
                      cliprect.setAttributeNS(null, "x", bbox[0]);
                      cliprect.setAttributeNS(null, "y", bbox[1]);
                      cliprect.setAttributeNS(null, "width", pf(width));
                      cliprect.setAttributeNS(null, "height", pf(height));
                      this.current.element = cliprect;
                      this.clip("nonzero");
                      this.endPath();
                    }
                  }
                }, {
                  key: "paintFormXObjectEnd",
                  value: function paintFormXObjectEnd() {}
                }, {
                  key: "_initialize",
                  value: function _initialize(viewport) {
                    var svg = this.svgFactory.create(viewport.width, viewport.height);
                    var definitions = this.svgFactory.createElement("svg:defs");
                    svg.appendChild(definitions);
                    this.defs = definitions;
                    var rootGroup = this.svgFactory.createElement("svg:g");
                    rootGroup.setAttributeNS(null, "transform", pm(viewport.transform));
                    svg.appendChild(rootGroup);
                    this.svg = rootGroup;
                    return svg;
                  }
                }, {
                  key: "_ensureClipGroup",
                  value: function _ensureClipGroup() {
                    if (!this.current.clipGroup) {
                      var clipGroup = this.svgFactory.createElement("svg:g");
                      clipGroup.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
                      this.svg.appendChild(clipGroup);
                      this.current.clipGroup = clipGroup;
                    }

                    return this.current.clipGroup;
                  }
                }, {
                  key: "_ensureTransformGroup",
                  value: function _ensureTransformGroup() {
                    if (!this.tgrp) {
                      this.tgrp = this.svgFactory.createElement("svg:g");
                      this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));

                      if (this.current.activeClipUrl) {
                        this._ensureClipGroup().appendChild(this.tgrp);
                      } else {
                        this.svg.appendChild(this.tgrp);
                      }
                    }

                    return this.tgrp;
                  }
                }]);

                return SVGGraphics;
              }();
            }
            /***/
          },
          /* 19 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PDFNodeStream = void 0;

            var _util = __w_pdfjs_require__(1);

            var _network_utils = __w_pdfjs_require__(20);

            var fs = __webpack_require__(
            /*! fs */
            5);

            var http = __webpack_require__(
            /*! http */
            6);

            var https = __webpack_require__(
            /*! https */
            7);

            var url = __webpack_require__(
            /*! url */
            8);

            var fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;

            function parseUrl(sourceUrl) {
              var parsedUrl = url.parse(sourceUrl);

              if (parsedUrl.protocol === "file:" || parsedUrl.host) {
                return parsedUrl;
              }

              if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
                return url.parse("file:///".concat(sourceUrl));
              }

              if (!parsedUrl.host) {
                parsedUrl.protocol = "file:";
              }

              return parsedUrl;
            }

            var PDFNodeStream = /*#__PURE__*/function () {
              function PDFNodeStream(source) {
                _classCallCheck(this, PDFNodeStream);

                this.source = source;
                this.url = parseUrl(source.url);
                this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:";
                this.isFsUrl = this.url.protocol === "file:";
                this.httpHeaders = this.isHttp && source.httpHeaders || {};
                this._fullRequestReader = null;
                this._rangeRequestReaders = [];
              }

              _createClass(PDFNodeStream, [{
                key: "getFullReader",
                value: function getFullReader() {
                  (0, _util.assert)(!this._fullRequestReader);
                  this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
                  return this._fullRequestReader;
                }
              }, {
                key: "getRangeReader",
                value: function getRangeReader(start, end) {
                  if (end <= this._progressiveDataLength) {
                    return null;
                  }

                  var rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);

                  this._rangeRequestReaders.push(rangeReader);

                  return rangeReader;
                }
              }, {
                key: "cancelAllRequests",
                value: function cancelAllRequests(reason) {
                  if (this._fullRequestReader) {
                    this._fullRequestReader.cancel(reason);
                  }

                  var readers = this._rangeRequestReaders.slice(0);

                  readers.forEach(function (reader) {
                    reader.cancel(reason);
                  });
                }
              }, {
                key: "_progressiveDataLength",
                get: function get() {
                  return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
                }
              }]);

              return PDFNodeStream;
            }();

            exports.PDFNodeStream = PDFNodeStream;

            var BaseFullReader = /*#__PURE__*/function () {
              function BaseFullReader(stream) {
                _classCallCheck(this, BaseFullReader);

                this._url = stream.url;
                this._done = false;
                this._storedError = null;
                this.onProgress = null;
                var source = stream.source;
                this._contentLength = source.length;
                this._loaded = 0;
                this._filename = null;
                this._disableRange = source.disableRange || false;
                this._rangeChunkSize = source.rangeChunkSize;

                if (!this._rangeChunkSize && !this._disableRange) {
                  this._disableRange = true;
                }

                this._isStreamingSupported = !source.disableStream;
                this._isRangeSupported = !source.disableRange;
                this._readableStream = null;
                this._readCapability = (0, _util.createPromiseCapability)();
                this._headersCapability = (0, _util.createPromiseCapability)();
              }

              _createClass(BaseFullReader, [{
                key: "read",
                value: function () {
                  var _read3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                    var chunk, buffer;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return this._readCapability.promise;

                          case 2:
                            if (!this._done) {
                              _context9.next = 4;
                              break;
                            }

                            return _context9.abrupt("return", {
                              value: undefined,
                              done: true
                            });

                          case 4:
                            if (!this._storedError) {
                              _context9.next = 6;
                              break;
                            }

                            throw this._storedError;

                          case 6:
                            chunk = this._readableStream.read();

                            if (!(chunk === null)) {
                              _context9.next = 10;
                              break;
                            }

                            this._readCapability = (0, _util.createPromiseCapability)();
                            return _context9.abrupt("return", this.read());

                          case 10:
                            this._loaded += chunk.length;

                            if (this.onProgress) {
                              this.onProgress({
                                loaded: this._loaded,
                                total: this._contentLength
                              });
                            }

                            buffer = new Uint8Array(chunk).buffer;
                            return _context9.abrupt("return", {
                              value: buffer,
                              done: false
                            });

                          case 14:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9, this);
                  }));

                  function read() {
                    return _read3.apply(this, arguments);
                  }

                  return read;
                }()
              }, {
                key: "cancel",
                value: function cancel(reason) {
                  if (!this._readableStream) {
                    this._error(reason);

                    return;
                  }

                  this._readableStream.destroy(reason);
                }
              }, {
                key: "_error",
                value: function _error(reason) {
                  this._storedError = reason;

                  this._readCapability.resolve();
                }
              }, {
                key: "_setReadableStream",
                value: function _setReadableStream(readableStream) {
                  var _this49 = this;

                  this._readableStream = readableStream;
                  readableStream.on("readable", function () {
                    _this49._readCapability.resolve();
                  });
                  readableStream.on("end", function () {
                    readableStream.destroy();
                    _this49._done = true;

                    _this49._readCapability.resolve();
                  });
                  readableStream.on("error", function (reason) {
                    _this49._error(reason);
                  });

                  if (!this._isStreamingSupported && this._isRangeSupported) {
                    this._error(new _util.AbortException("streaming is disabled"));
                  }

                  if (this._storedError) {
                    this._readableStream.destroy(this._storedError);
                  }
                }
              }, {
                key: "headersReady",
                get: function get() {
                  return this._headersCapability.promise;
                }
              }, {
                key: "filename",
                get: function get() {
                  return this._filename;
                }
              }, {
                key: "contentLength",
                get: function get() {
                  return this._contentLength;
                }
              }, {
                key: "isRangeSupported",
                get: function get() {
                  return this._isRangeSupported;
                }
              }, {
                key: "isStreamingSupported",
                get: function get() {
                  return this._isStreamingSupported;
                }
              }]);

              return BaseFullReader;
            }();

            var BaseRangeReader = /*#__PURE__*/function () {
              function BaseRangeReader(stream) {
                _classCallCheck(this, BaseRangeReader);

                this._url = stream.url;
                this._done = false;
                this._storedError = null;
                this.onProgress = null;
                this._loaded = 0;
                this._readableStream = null;
                this._readCapability = (0, _util.createPromiseCapability)();
                var source = stream.source;
                this._isStreamingSupported = !source.disableStream;
              }

              _createClass(BaseRangeReader, [{
                key: "read",
                value: function () {
                  var _read4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                    var chunk, buffer;
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            _context10.next = 2;
                            return this._readCapability.promise;

                          case 2:
                            if (!this._done) {
                              _context10.next = 4;
                              break;
                            }

                            return _context10.abrupt("return", {
                              value: undefined,
                              done: true
                            });

                          case 4:
                            if (!this._storedError) {
                              _context10.next = 6;
                              break;
                            }

                            throw this._storedError;

                          case 6:
                            chunk = this._readableStream.read();

                            if (!(chunk === null)) {
                              _context10.next = 10;
                              break;
                            }

                            this._readCapability = (0, _util.createPromiseCapability)();
                            return _context10.abrupt("return", this.read());

                          case 10:
                            this._loaded += chunk.length;

                            if (this.onProgress) {
                              this.onProgress({
                                loaded: this._loaded
                              });
                            }

                            buffer = new Uint8Array(chunk).buffer;
                            return _context10.abrupt("return", {
                              value: buffer,
                              done: false
                            });

                          case 14:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10, this);
                  }));

                  function read() {
                    return _read4.apply(this, arguments);
                  }

                  return read;
                }()
              }, {
                key: "cancel",
                value: function cancel(reason) {
                  if (!this._readableStream) {
                    this._error(reason);

                    return;
                  }

                  this._readableStream.destroy(reason);
                }
              }, {
                key: "_error",
                value: function _error(reason) {
                  this._storedError = reason;

                  this._readCapability.resolve();
                }
              }, {
                key: "_setReadableStream",
                value: function _setReadableStream(readableStream) {
                  var _this50 = this;

                  this._readableStream = readableStream;
                  readableStream.on("readable", function () {
                    _this50._readCapability.resolve();
                  });
                  readableStream.on("end", function () {
                    readableStream.destroy();
                    _this50._done = true;

                    _this50._readCapability.resolve();
                  });
                  readableStream.on("error", function (reason) {
                    _this50._error(reason);
                  });

                  if (this._storedError) {
                    this._readableStream.destroy(this._storedError);
                  }
                }
              }, {
                key: "isStreamingSupported",
                get: function get() {
                  return this._isStreamingSupported;
                }
              }]);

              return BaseRangeReader;
            }();

            function createRequestOptions(url, headers) {
              return {
                protocol: url.protocol,
                auth: url.auth,
                host: url.hostname,
                port: url.port,
                path: url.path,
                method: "GET",
                headers: headers
              };
            }

            var PDFNodeStreamFullReader = /*#__PURE__*/function (_BaseFullReader) {
              _inherits(PDFNodeStreamFullReader, _BaseFullReader);

              var _super34 = _createSuper(PDFNodeStreamFullReader);

              function PDFNodeStreamFullReader(stream) {
                var _this51;

                _classCallCheck(this, PDFNodeStreamFullReader);

                _this51 = _super34.call(this, stream);

                var handleResponse = function handleResponse(response) {
                  if (response.statusCode === 404) {
                    var error = new _util.MissingPDFException("Missing PDF \"".concat(_this51._url, "\"."));
                    _this51._storedError = error;

                    _this51._headersCapability.reject(error);

                    return;
                  }

                  _this51._headersCapability.resolve();

                  _this51._setReadableStream(response);

                  var getResponseHeader = function getResponseHeader(name) {
                    return _this51._readableStream.headers[name.toLowerCase()];
                  };

                  var _ref31 = (0, _network_utils.validateRangeRequestCapabilities)({
                    getResponseHeader: getResponseHeader,
                    isHttp: stream.isHttp,
                    rangeChunkSize: _this51._rangeChunkSize,
                    disableRange: _this51._disableRange
                  }),
                      allowRangeRequests = _ref31.allowRangeRequests,
                      suggestedLength = _ref31.suggestedLength;

                  _this51._isRangeSupported = allowRangeRequests;
                  _this51._contentLength = suggestedLength || _this51._contentLength;
                  _this51._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
                };

                _this51._request = null;

                if (_this51._url.protocol === "http:") {
                  _this51._request = http.request(createRequestOptions(_this51._url, stream.httpHeaders), handleResponse);
                } else {
                  _this51._request = https.request(createRequestOptions(_this51._url, stream.httpHeaders), handleResponse);
                }

                _this51._request.on("error", function (reason) {
                  _this51._storedError = reason;

                  _this51._headersCapability.reject(reason);
                });

                _this51._request.end();

                return _this51;
              }

              return PDFNodeStreamFullReader;
            }(BaseFullReader);

            var PDFNodeStreamRangeReader = /*#__PURE__*/function (_BaseRangeReader) {
              _inherits(PDFNodeStreamRangeReader, _BaseRangeReader);

              var _super35 = _createSuper(PDFNodeStreamRangeReader);

              function PDFNodeStreamRangeReader(stream, start, end) {
                var _this52;

                _classCallCheck(this, PDFNodeStreamRangeReader);

                _this52 = _super35.call(this, stream);
                _this52._httpHeaders = {};

                for (var property in stream.httpHeaders) {
                  var value = stream.httpHeaders[property];

                  if (typeof value === "undefined") {
                    continue;
                  }

                  _this52._httpHeaders[property] = value;
                }

                _this52._httpHeaders["Range"] = "bytes=".concat(start, "-").concat(end - 1);

                var handleResponse = function handleResponse(response) {
                  if (response.statusCode === 404) {
                    var error = new _util.MissingPDFException("Missing PDF \"".concat(_this52._url, "\"."));
                    _this52._storedError = error;
                    return;
                  }

                  _this52._setReadableStream(response);
                };

                _this52._request = null;

                if (_this52._url.protocol === "http:") {
                  _this52._request = http.request(createRequestOptions(_this52._url, _this52._httpHeaders), handleResponse);
                } else {
                  _this52._request = https.request(createRequestOptions(_this52._url, _this52._httpHeaders), handleResponse);
                }

                _this52._request.on("error", function (reason) {
                  _this52._storedError = reason;
                });

                _this52._request.end();

                return _this52;
              }

              return PDFNodeStreamRangeReader;
            }(BaseRangeReader);

            var PDFNodeStreamFsFullReader = /*#__PURE__*/function (_BaseFullReader2) {
              _inherits(PDFNodeStreamFsFullReader, _BaseFullReader2);

              var _super36 = _createSuper(PDFNodeStreamFsFullReader);

              function PDFNodeStreamFsFullReader(stream) {
                var _this53;

                _classCallCheck(this, PDFNodeStreamFsFullReader);

                _this53 = _super36.call(this, stream);
                var path = decodeURIComponent(_this53._url.path);

                if (fileUriRegex.test(_this53._url.href)) {
                  path = path.replace(/^\//, "");
                }

                fs.lstat(path, function (error, stat) {
                  if (error) {
                    if (error.code === "ENOENT") {
                      error = new _util.MissingPDFException("Missing PDF \"".concat(path, "\"."));
                    }

                    _this53._storedError = error;

                    _this53._headersCapability.reject(error);

                    return;
                  }

                  _this53._contentLength = stat.size;

                  _this53._setReadableStream(fs.createReadStream(path));

                  _this53._headersCapability.resolve();
                });
                return _this53;
              }

              return PDFNodeStreamFsFullReader;
            }(BaseFullReader);

            var PDFNodeStreamFsRangeReader = /*#__PURE__*/function (_BaseRangeReader2) {
              _inherits(PDFNodeStreamFsRangeReader, _BaseRangeReader2);

              var _super37 = _createSuper(PDFNodeStreamFsRangeReader);

              function PDFNodeStreamFsRangeReader(stream, start, end) {
                var _this54;

                _classCallCheck(this, PDFNodeStreamFsRangeReader);

                _this54 = _super37.call(this, stream);
                var path = decodeURIComponent(_this54._url.path);

                if (fileUriRegex.test(_this54._url.href)) {
                  path = path.replace(/^\//, "");
                }

                _this54._setReadableStream(fs.createReadStream(path, {
                  start: start,
                  end: end - 1
                }));

                return _this54;
              }

              return PDFNodeStreamFsRangeReader;
            }(BaseRangeReader);
            /***/

          },
          /* 20 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.createResponseStatusError = createResponseStatusError;
            exports.extractFilenameFromHeader = extractFilenameFromHeader;
            exports.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
            exports.validateResponseStatus = validateResponseStatus;

            var _util = __w_pdfjs_require__(1);

            var _content_disposition = __w_pdfjs_require__(21);

            function validateRangeRequestCapabilities(_ref32) {
              var getResponseHeader = _ref32.getResponseHeader,
                  isHttp = _ref32.isHttp,
                  rangeChunkSize = _ref32.rangeChunkSize,
                  disableRange = _ref32.disableRange;
              (0, _util.assert)(rangeChunkSize > 0, "Range chunk size must be larger than zero");
              var returnValues = {
                allowRangeRequests: false,
                suggestedLength: undefined
              };
              var length = parseInt(getResponseHeader("Content-Length"), 10);

              if (!Number.isInteger(length)) {
                return returnValues;
              }

              returnValues.suggestedLength = length;

              if (length <= 2 * rangeChunkSize) {
                return returnValues;
              }

              if (disableRange || !isHttp) {
                return returnValues;
              }

              if (getResponseHeader("Accept-Ranges") !== "bytes") {
                return returnValues;
              }

              var contentEncoding = getResponseHeader("Content-Encoding") || "identity";

              if (contentEncoding !== "identity") {
                return returnValues;
              }

              returnValues.allowRangeRequests = true;
              return returnValues;
            }

            function extractFilenameFromHeader(getResponseHeader) {
              var contentDisposition = getResponseHeader("Content-Disposition");

              if (contentDisposition) {
                var filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);

                if (filename.includes("%")) {
                  try {
                    filename = decodeURIComponent(filename);
                  } catch (ex) {}
                }

                if (/\.pdf$/i.test(filename)) {
                  return filename;
                }
              }

              return null;
            }

            function createResponseStatusError(status, url) {
              if (status === 404 || status === 0 && url.startsWith("file:")) {
                return new _util.MissingPDFException('Missing PDF "' + url + '".');
              }

              return new _util.UnexpectedResponseException("Unexpected server response (" + status + ') while retrieving PDF "' + url + '".', status);
            }

            function validateResponseStatus(status) {
              return status === 200 || status === 206;
            }
            /***/

          },
          /* 21 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;

            function getFilenameFromContentDispositionHeader(contentDisposition) {
              var needsEncodingFixup = true;
              var tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);

              if (tmp) {
                tmp = tmp[1];
                var filename = rfc2616unquote(tmp);
                filename = unescape(filename);
                filename = rfc5987decode(filename);
                filename = rfc2047decode(filename);
                return fixupEncoding(filename);
              }

              tmp = rfc2231getparam(contentDisposition);

              if (tmp) {
                var _filename = rfc2047decode(tmp);

                return fixupEncoding(_filename);
              }

              tmp = toParamRegExp("filename", "i").exec(contentDisposition);

              if (tmp) {
                tmp = tmp[1];

                var _filename2 = rfc2616unquote(tmp);

                _filename2 = rfc2047decode(_filename2);
                return fixupEncoding(_filename2);
              }

              function toParamRegExp(attributePattern, flags) {
                return new RegExp("(?:^|;)\\s*" + attributePattern + "\\s*=\\s*" + "(" + '[^";\\s][^;\\s]*' + "|" + '"(?:[^"\\\\]|\\\\"?)+"?' + ")", flags);
              }

              function textdecode(encoding, value) {
                if (encoding) {
                  if (!/^[\x00-\xFF]+$/.test(value)) {
                    return value;
                  }

                  try {
                    var decoder = new TextDecoder(encoding, {
                      fatal: true
                    });
                    var bytes = Array.from(value, function (ch) {
                      return ch.charCodeAt(0) & 0xff;
                    });
                    value = decoder.decode(new Uint8Array(bytes));
                    needsEncodingFixup = false;
                  } catch (e) {
                    if (/^utf-?8$/i.test(encoding)) {
                      try {
                        value = decodeURIComponent(escape(value));
                        needsEncodingFixup = false;
                      } catch (err) {}
                    }
                  }
                }

                return value;
              }

              function fixupEncoding(value) {
                if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
                  value = textdecode("utf-8", value);

                  if (needsEncodingFixup) {
                    value = textdecode("iso-8859-1", value);
                  }
                }

                return value;
              }

              function rfc2231getparam(contentDisposition) {
                var matches = [];
                var match;
                var iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");

                while ((match = iter.exec(contentDisposition)) !== null) {
                  var _match = match,
                      _match2 = _slicedToArray(_match, 4),
                      n = _match2[1],
                      quot = _match2[2],
                      part = _match2[3];

                  n = parseInt(n, 10);

                  if (n in matches) {
                    if (n === 0) {
                      break;
                    }

                    continue;
                  }

                  matches[n] = [quot, part];
                }

                var parts = [];

                for (var _n2 = 0; _n2 < matches.length; ++_n2) {
                  if (!(_n2 in matches)) {
                    break;
                  }

                  var _matches$_n = _slicedToArray(matches[_n2], 2),
                      _quot = _matches$_n[0],
                      _part = _matches$_n[1];

                  _part = rfc2616unquote(_part);

                  if (_quot) {
                    _part = unescape(_part);

                    if (_n2 === 0) {
                      _part = rfc5987decode(_part);
                    }
                  }

                  parts.push(_part);
                }

                return parts.join("");
              }

              function rfc2616unquote(value) {
                if (value.startsWith('"')) {
                  var parts = value.slice(1).split('\\"');

                  for (var i = 0; i < parts.length; ++i) {
                    var quotindex = parts[i].indexOf('"');

                    if (quotindex !== -1) {
                      parts[i] = parts[i].slice(0, quotindex);
                      parts.length = i + 1;
                    }

                    parts[i] = parts[i].replace(/\\(.)/g, "$1");
                  }

                  value = parts.join('"');
                }

                return value;
              }

              function rfc5987decode(extvalue) {
                var encodingend = extvalue.indexOf("'");

                if (encodingend === -1) {
                  return extvalue;
                }

                var encoding = extvalue.slice(0, encodingend);
                var langvalue = extvalue.slice(encodingend + 1);
                var value = langvalue.replace(/^[^']*'/, "");
                return textdecode(encoding, value);
              }

              function rfc2047decode(value) {
                if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
                  return value;
                }

                return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (_, charset, encoding, text) {
                  if (encoding === "q" || encoding === "Q") {
                    text = text.replace(/_/g, " ");
                    text = text.replace(/=([0-9a-fA-F]{2})/g, function (_, hex) {
                      return String.fromCharCode(parseInt(hex, 16));
                    });
                    return textdecode(charset, text);
                  }

                  try {
                    text = atob(text);
                  } catch (e) {}

                  return textdecode(charset, text);
                });
              }

              return "";
            }
            /***/

          },
          /* 22 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PDFNetworkStream = void 0;

            var _util = __w_pdfjs_require__(1);

            var _network_utils = __w_pdfjs_require__(20);

            ;
            var OK_RESPONSE = 200;
            var PARTIAL_CONTENT_RESPONSE = 206;

            function getArrayBuffer(xhr) {
              var data = xhr.response;

              if (typeof data !== "string") {
                return data;
              }

              var array = (0, _util.stringToBytes)(data);
              return array.buffer;
            }

            var NetworkManager = /*#__PURE__*/function () {
              function NetworkManager(url, args) {
                _classCallCheck(this, NetworkManager);

                this.url = url;
                args = args || {};
                this.isHttp = /^https?:/i.test(url);
                this.httpHeaders = this.isHttp && args.httpHeaders || {};
                this.withCredentials = args.withCredentials || false;

                this.getXhr = args.getXhr || function NetworkManager_getXhr() {
                  return new XMLHttpRequest();
                };

                this.currXhrId = 0;
                this.pendingRequests = Object.create(null);
              }

              _createClass(NetworkManager, [{
                key: "requestRange",
                value: function requestRange(begin, end, listeners) {
                  var args = {
                    begin: begin,
                    end: end
                  };

                  for (var prop in listeners) {
                    args[prop] = listeners[prop];
                  }

                  return this.request(args);
                }
              }, {
                key: "requestFull",
                value: function requestFull(listeners) {
                  return this.request(listeners);
                }
              }, {
                key: "request",
                value: function request(args) {
                  var xhr = this.getXhr();
                  var xhrId = this.currXhrId++;
                  var pendingRequest = this.pendingRequests[xhrId] = {
                    xhr: xhr
                  };
                  xhr.open("GET", this.url);
                  xhr.withCredentials = this.withCredentials;

                  for (var property in this.httpHeaders) {
                    var value = this.httpHeaders[property];

                    if (typeof value === "undefined") {
                      continue;
                    }

                    xhr.setRequestHeader(property, value);
                  }

                  if (this.isHttp && "begin" in args && "end" in args) {
                    xhr.setRequestHeader("Range", "bytes=".concat(args.begin, "-").concat(args.end - 1));
                    pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
                  } else {
                    pendingRequest.expectedStatus = OK_RESPONSE;
                  }

                  xhr.responseType = "arraybuffer";

                  if (args.onError) {
                    xhr.onerror = function (evt) {
                      args.onError(xhr.status);
                    };
                  }

                  xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
                  xhr.onprogress = this.onProgress.bind(this, xhrId);
                  pendingRequest.onHeadersReceived = args.onHeadersReceived;
                  pendingRequest.onDone = args.onDone;
                  pendingRequest.onError = args.onError;
                  pendingRequest.onProgress = args.onProgress;
                  xhr.send(null);
                  return xhrId;
                }
              }, {
                key: "onProgress",
                value: function onProgress(xhrId, evt) {
                  var pendingRequest = this.pendingRequests[xhrId];

                  if (!pendingRequest) {
                    return;
                  }

                  if (pendingRequest.onProgress) {
                    pendingRequest.onProgress(evt);
                  }
                }
              }, {
                key: "onStateChange",
                value: function onStateChange(xhrId, evt) {
                  var pendingRequest = this.pendingRequests[xhrId];

                  if (!pendingRequest) {
                    return;
                  }

                  var xhr = pendingRequest.xhr;

                  if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
                    pendingRequest.onHeadersReceived();
                    delete pendingRequest.onHeadersReceived;
                  }

                  if (xhr.readyState !== 4) {
                    return;
                  }

                  if (!(xhrId in this.pendingRequests)) {
                    return;
                  }

                  delete this.pendingRequests[xhrId];

                  if (xhr.status === 0 && this.isHttp) {
                    if (pendingRequest.onError) {
                      pendingRequest.onError(xhr.status);
                    }

                    return;
                  }

                  var xhrStatus = xhr.status || OK_RESPONSE;
                  var ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;

                  if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
                    if (pendingRequest.onError) {
                      pendingRequest.onError(xhr.status);
                    }

                    return;
                  }

                  var chunk = getArrayBuffer(xhr);

                  if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
                    var rangeHeader = xhr.getResponseHeader("Content-Range");
                    var matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
                    pendingRequest.onDone({
                      begin: parseInt(matches[1], 10),
                      chunk: chunk
                    });
                  } else if (chunk) {
                    pendingRequest.onDone({
                      begin: 0,
                      chunk: chunk
                    });
                  } else if (pendingRequest.onError) {
                    pendingRequest.onError(xhr.status);
                  }
                }
              }, {
                key: "hasPendingRequests",
                value: function hasPendingRequests() {
                  for (var xhrId in this.pendingRequests) {
                    return true;
                  }

                  return false;
                }
              }, {
                key: "getRequestXhr",
                value: function getRequestXhr(xhrId) {
                  return this.pendingRequests[xhrId].xhr;
                }
              }, {
                key: "isPendingRequest",
                value: function isPendingRequest(xhrId) {
                  return xhrId in this.pendingRequests;
                }
              }, {
                key: "abortAllRequests",
                value: function abortAllRequests() {
                  for (var xhrId in this.pendingRequests) {
                    this.abortRequest(xhrId | 0);
                  }
                }
              }, {
                key: "abortRequest",
                value: function abortRequest(xhrId) {
                  var xhr = this.pendingRequests[xhrId].xhr;
                  delete this.pendingRequests[xhrId];
                  xhr.abort();
                }
              }]);

              return NetworkManager;
            }();

            var PDFNetworkStream = /*#__PURE__*/function () {
              function PDFNetworkStream(source) {
                _classCallCheck(this, PDFNetworkStream);

                this._source = source;
                this._manager = new NetworkManager(source.url, {
                  httpHeaders: source.httpHeaders,
                  withCredentials: source.withCredentials
                });
                this._rangeChunkSize = source.rangeChunkSize;
                this._fullRequestReader = null;
                this._rangeRequestReaders = [];
              }

              _createClass(PDFNetworkStream, [{
                key: "_onRangeRequestReaderClosed",
                value: function _onRangeRequestReaderClosed(reader) {
                  var i = this._rangeRequestReaders.indexOf(reader);

                  if (i >= 0) {
                    this._rangeRequestReaders.splice(i, 1);
                  }
                }
              }, {
                key: "getFullReader",
                value: function getFullReader() {
                  (0, _util.assert)(!this._fullRequestReader);
                  this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
                  return this._fullRequestReader;
                }
              }, {
                key: "getRangeReader",
                value: function getRangeReader(begin, end) {
                  var reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
                  reader.onClosed = this._onRangeRequestReaderClosed.bind(this);

                  this._rangeRequestReaders.push(reader);

                  return reader;
                }
              }, {
                key: "cancelAllRequests",
                value: function cancelAllRequests(reason) {
                  if (this._fullRequestReader) {
                    this._fullRequestReader.cancel(reason);
                  }

                  var readers = this._rangeRequestReaders.slice(0);

                  readers.forEach(function (reader) {
                    reader.cancel(reason);
                  });
                }
              }]);

              return PDFNetworkStream;
            }();

            exports.PDFNetworkStream = PDFNetworkStream;

            var PDFNetworkStreamFullRequestReader = /*#__PURE__*/function () {
              function PDFNetworkStreamFullRequestReader(manager, source) {
                _classCallCheck(this, PDFNetworkStreamFullRequestReader);

                this._manager = manager;
                var args = {
                  onHeadersReceived: this._onHeadersReceived.bind(this),
                  onDone: this._onDone.bind(this),
                  onError: this._onError.bind(this),
                  onProgress: this._onProgress.bind(this)
                };
                this._url = source.url;
                this._fullRequestId = manager.requestFull(args);
                this._headersReceivedCapability = (0, _util.createPromiseCapability)();
                this._disableRange = source.disableRange || false;
                this._contentLength = source.length;
                this._rangeChunkSize = source.rangeChunkSize;

                if (!this._rangeChunkSize && !this._disableRange) {
                  this._disableRange = true;
                }

                this._isStreamingSupported = false;
                this._isRangeSupported = false;
                this._cachedChunks = [];
                this._requests = [];
                this._done = false;
                this._storedError = undefined;
                this._filename = null;
                this.onProgress = null;
              }

              _createClass(PDFNetworkStreamFullRequestReader, [{
                key: "_onHeadersReceived",
                value: function _onHeadersReceived() {
                  var fullRequestXhrId = this._fullRequestId;

                  var fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);

                  var getResponseHeader = function getResponseHeader(name) {
                    return fullRequestXhr.getResponseHeader(name);
                  };

                  var _ref33 = (0, _network_utils.validateRangeRequestCapabilities)({
                    getResponseHeader: getResponseHeader,
                    isHttp: this._manager.isHttp,
                    rangeChunkSize: this._rangeChunkSize,
                    disableRange: this._disableRange
                  }),
                      allowRangeRequests = _ref33.allowRangeRequests,
                      suggestedLength = _ref33.suggestedLength;

                  if (allowRangeRequests) {
                    this._isRangeSupported = true;
                  }

                  this._contentLength = suggestedLength || this._contentLength;
                  this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);

                  if (this._isRangeSupported) {
                    this._manager.abortRequest(fullRequestXhrId);
                  }

                  this._headersReceivedCapability.resolve();
                }
              }, {
                key: "_onDone",
                value: function _onDone(args) {
                  if (args) {
                    if (this._requests.length > 0) {
                      var requestCapability = this._requests.shift();

                      requestCapability.resolve({
                        value: args.chunk,
                        done: false
                      });
                    } else {
                      this._cachedChunks.push(args.chunk);
                    }
                  }

                  this._done = true;

                  if (this._cachedChunks.length > 0) {
                    return;
                  }

                  this._requests.forEach(function (requestCapability) {
                    requestCapability.resolve({
                      value: undefined,
                      done: true
                    });
                  });

                  this._requests = [];
                }
              }, {
                key: "_onError",
                value: function _onError(status) {
                  var url = this._url;
                  var exception = (0, _network_utils.createResponseStatusError)(status, url);
                  this._storedError = exception;

                  this._headersReceivedCapability.reject(exception);

                  this._requests.forEach(function (requestCapability) {
                    requestCapability.reject(exception);
                  });

                  this._requests = [];
                  this._cachedChunks = [];
                }
              }, {
                key: "_onProgress",
                value: function _onProgress(data) {
                  if (this.onProgress) {
                    this.onProgress({
                      loaded: data.loaded,
                      total: data.lengthComputable ? data.total : this._contentLength
                    });
                  }
                }
              }, {
                key: "read",
                value: function () {
                  var _read5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                    var chunk, requestCapability;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            if (!this._storedError) {
                              _context11.next = 2;
                              break;
                            }

                            throw this._storedError;

                          case 2:
                            if (!(this._cachedChunks.length > 0)) {
                              _context11.next = 5;
                              break;
                            }

                            chunk = this._cachedChunks.shift();
                            return _context11.abrupt("return", {
                              value: chunk,
                              done: false
                            });

                          case 5:
                            if (!this._done) {
                              _context11.next = 7;
                              break;
                            }

                            return _context11.abrupt("return", {
                              value: undefined,
                              done: true
                            });

                          case 7:
                            requestCapability = (0, _util.createPromiseCapability)();

                            this._requests.push(requestCapability);

                            return _context11.abrupt("return", requestCapability.promise);

                          case 10:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11, this);
                  }));

                  function read() {
                    return _read5.apply(this, arguments);
                  }

                  return read;
                }()
              }, {
                key: "cancel",
                value: function cancel(reason) {
                  this._done = true;

                  this._headersReceivedCapability.reject(reason);

                  this._requests.forEach(function (requestCapability) {
                    requestCapability.resolve({
                      value: undefined,
                      done: true
                    });
                  });

                  this._requests = [];

                  if (this._manager.isPendingRequest(this._fullRequestId)) {
                    this._manager.abortRequest(this._fullRequestId);
                  }

                  this._fullRequestReader = null;
                }
              }, {
                key: "filename",
                get: function get() {
                  return this._filename;
                }
              }, {
                key: "isRangeSupported",
                get: function get() {
                  return this._isRangeSupported;
                }
              }, {
                key: "isStreamingSupported",
                get: function get() {
                  return this._isStreamingSupported;
                }
              }, {
                key: "contentLength",
                get: function get() {
                  return this._contentLength;
                }
              }, {
                key: "headersReady",
                get: function get() {
                  return this._headersReceivedCapability.promise;
                }
              }]);

              return PDFNetworkStreamFullRequestReader;
            }();

            var PDFNetworkStreamRangeRequestReader = /*#__PURE__*/function () {
              function PDFNetworkStreamRangeRequestReader(manager, begin, end) {
                _classCallCheck(this, PDFNetworkStreamRangeRequestReader);

                this._manager = manager;
                var args = {
                  onDone: this._onDone.bind(this),
                  onProgress: this._onProgress.bind(this)
                };
                this._requestId = manager.requestRange(begin, end, args);
                this._requests = [];
                this._queuedChunk = null;
                this._done = false;
                this.onProgress = null;
                this.onClosed = null;
              }

              _createClass(PDFNetworkStreamRangeRequestReader, [{
                key: "_close",
                value: function _close() {
                  if (this.onClosed) {
                    this.onClosed(this);
                  }
                }
              }, {
                key: "_onDone",
                value: function _onDone(data) {
                  var chunk = data.chunk;

                  if (this._requests.length > 0) {
                    var requestCapability = this._requests.shift();

                    requestCapability.resolve({
                      value: chunk,
                      done: false
                    });
                  } else {
                    this._queuedChunk = chunk;
                  }

                  this._done = true;

                  this._requests.forEach(function (requestCapability) {
                    requestCapability.resolve({
                      value: undefined,
                      done: true
                    });
                  });

                  this._requests = [];

                  this._close();
                }
              }, {
                key: "_onProgress",
                value: function _onProgress(evt) {
                  if (!this.isStreamingSupported && this.onProgress) {
                    this.onProgress({
                      loaded: evt.loaded
                    });
                  }
                }
              }, {
                key: "read",
                value: function () {
                  var _read6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                    var chunk, requestCapability;
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            if (!(this._queuedChunk !== null)) {
                              _context12.next = 4;
                              break;
                            }

                            chunk = this._queuedChunk;
                            this._queuedChunk = null;
                            return _context12.abrupt("return", {
                              value: chunk,
                              done: false
                            });

                          case 4:
                            if (!this._done) {
                              _context12.next = 6;
                              break;
                            }

                            return _context12.abrupt("return", {
                              value: undefined,
                              done: true
                            });

                          case 6:
                            requestCapability = (0, _util.createPromiseCapability)();

                            this._requests.push(requestCapability);

                            return _context12.abrupt("return", requestCapability.promise);

                          case 9:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12, this);
                  }));

                  function read() {
                    return _read6.apply(this, arguments);
                  }

                  return read;
                }()
              }, {
                key: "cancel",
                value: function cancel(reason) {
                  this._done = true;

                  this._requests.forEach(function (requestCapability) {
                    requestCapability.resolve({
                      value: undefined,
                      done: true
                    });
                  });

                  this._requests = [];

                  if (this._manager.isPendingRequest(this._requestId)) {
                    this._manager.abortRequest(this._requestId);
                  }

                  this._close();
                }
              }, {
                key: "isStreamingSupported",
                get: function get() {
                  return false;
                }
              }]);

              return PDFNetworkStreamRangeRequestReader;
            }();
            /***/

          },
          /* 23 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PDFFetchStream = void 0;

            var _util = __w_pdfjs_require__(1);

            var _network_utils = __w_pdfjs_require__(20);

            function createFetchOptions(headers, withCredentials, abortController) {
              return {
                method: "GET",
                headers: headers,
                signal: abortController && abortController.signal,
                mode: "cors",
                credentials: withCredentials ? "include" : "same-origin",
                redirect: "follow"
              };
            }

            function createHeaders(httpHeaders) {
              var headers = new Headers();

              for (var property in httpHeaders) {
                var value = httpHeaders[property];

                if (typeof value === "undefined") {
                  continue;
                }

                headers.append(property, value);
              }

              return headers;
            }

            var PDFFetchStream = /*#__PURE__*/function () {
              function PDFFetchStream(source) {
                _classCallCheck(this, PDFFetchStream);

                this.source = source;
                this.isHttp = /^https?:/i.test(source.url);
                this.httpHeaders = this.isHttp && source.httpHeaders || {};
                this._fullRequestReader = null;
                this._rangeRequestReaders = [];
              }

              _createClass(PDFFetchStream, [{
                key: "getFullReader",
                value: function getFullReader() {
                  (0, _util.assert)(!this._fullRequestReader);
                  this._fullRequestReader = new PDFFetchStreamReader(this);
                  return this._fullRequestReader;
                }
              }, {
                key: "getRangeReader",
                value: function getRangeReader(begin, end) {
                  if (end <= this._progressiveDataLength) {
                    return null;
                  }

                  var reader = new PDFFetchStreamRangeReader(this, begin, end);

                  this._rangeRequestReaders.push(reader);

                  return reader;
                }
              }, {
                key: "cancelAllRequests",
                value: function cancelAllRequests(reason) {
                  if (this._fullRequestReader) {
                    this._fullRequestReader.cancel(reason);
                  }

                  var readers = this._rangeRequestReaders.slice(0);

                  readers.forEach(function (reader) {
                    reader.cancel(reason);
                  });
                }
              }, {
                key: "_progressiveDataLength",
                get: function get() {
                  return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
                }
              }]);

              return PDFFetchStream;
            }();

            exports.PDFFetchStream = PDFFetchStream;

            var PDFFetchStreamReader = /*#__PURE__*/function () {
              function PDFFetchStreamReader(stream) {
                var _this55 = this;

                _classCallCheck(this, PDFFetchStreamReader);

                this._stream = stream;
                this._reader = null;
                this._loaded = 0;
                this._filename = null;
                var source = stream.source;
                this._withCredentials = source.withCredentials || false;
                this._contentLength = source.length;
                this._headersCapability = (0, _util.createPromiseCapability)();
                this._disableRange = source.disableRange || false;
                this._rangeChunkSize = source.rangeChunkSize;

                if (!this._rangeChunkSize && !this._disableRange) {
                  this._disableRange = true;
                }

                if (typeof AbortController !== "undefined") {
                  this._abortController = new AbortController();
                }

                this._isStreamingSupported = !source.disableStream;
                this._isRangeSupported = !source.disableRange;
                this._headers = createHeaders(this._stream.httpHeaders);
                var url = source.url;
                fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
                  if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                    throw (0, _network_utils.createResponseStatusError)(response.status, url);
                  }

                  _this55._reader = response.body.getReader();

                  _this55._headersCapability.resolve();

                  var getResponseHeader = function getResponseHeader(name) {
                    return response.headers.get(name);
                  };

                  var _ref34 = (0, _network_utils.validateRangeRequestCapabilities)({
                    getResponseHeader: getResponseHeader,
                    isHttp: _this55._stream.isHttp,
                    rangeChunkSize: _this55._rangeChunkSize,
                    disableRange: _this55._disableRange
                  }),
                      allowRangeRequests = _ref34.allowRangeRequests,
                      suggestedLength = _ref34.suggestedLength;

                  _this55._isRangeSupported = allowRangeRequests;
                  _this55._contentLength = suggestedLength || _this55._contentLength;
                  _this55._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);

                  if (!_this55._isStreamingSupported && _this55._isRangeSupported) {
                    _this55.cancel(new _util.AbortException("Streaming is disabled."));
                  }
                })["catch"](this._headersCapability.reject);
                this.onProgress = null;
              }

              _createClass(PDFFetchStreamReader, [{
                key: "read",
                value: function () {
                  var _read7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                    var _yield$this$_reader$r, value, done, buffer;

                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            _context13.next = 2;
                            return this._headersCapability.promise;

                          case 2:
                            _context13.next = 4;
                            return this._reader.read();

                          case 4:
                            _yield$this$_reader$r = _context13.sent;
                            value = _yield$this$_reader$r.value;
                            done = _yield$this$_reader$r.done;

                            if (!done) {
                              _context13.next = 9;
                              break;
                            }

                            return _context13.abrupt("return", {
                              value: value,
                              done: done
                            });

                          case 9:
                            this._loaded += value.byteLength;

                            if (this.onProgress) {
                              this.onProgress({
                                loaded: this._loaded,
                                total: this._contentLength
                              });
                            }

                            buffer = new Uint8Array(value).buffer;
                            return _context13.abrupt("return", {
                              value: buffer,
                              done: false
                            });

                          case 13:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13, this);
                  }));

                  function read() {
                    return _read7.apply(this, arguments);
                  }

                  return read;
                }()
              }, {
                key: "cancel",
                value: function cancel(reason) {
                  if (this._reader) {
                    this._reader.cancel(reason);
                  }

                  if (this._abortController) {
                    this._abortController.abort();
                  }
                }
              }, {
                key: "headersReady",
                get: function get() {
                  return this._headersCapability.promise;
                }
              }, {
                key: "filename",
                get: function get() {
                  return this._filename;
                }
              }, {
                key: "contentLength",
                get: function get() {
                  return this._contentLength;
                }
              }, {
                key: "isRangeSupported",
                get: function get() {
                  return this._isRangeSupported;
                }
              }, {
                key: "isStreamingSupported",
                get: function get() {
                  return this._isStreamingSupported;
                }
              }]);

              return PDFFetchStreamReader;
            }();

            var PDFFetchStreamRangeReader = /*#__PURE__*/function () {
              function PDFFetchStreamRangeReader(stream, begin, end) {
                var _this56 = this;

                _classCallCheck(this, PDFFetchStreamRangeReader);

                this._stream = stream;
                this._reader = null;
                this._loaded = 0;
                var source = stream.source;
                this._withCredentials = source.withCredentials || false;
                this._readCapability = (0, _util.createPromiseCapability)();
                this._isStreamingSupported = !source.disableStream;

                if (typeof AbortController !== "undefined") {
                  this._abortController = new AbortController();
                }

                this._headers = createHeaders(this._stream.httpHeaders);

                this._headers.append("Range", "bytes=".concat(begin, "-").concat(end - 1));

                var url = source.url;
                fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
                  if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                    throw (0, _network_utils.createResponseStatusError)(response.status, url);
                  }

                  _this56._readCapability.resolve();

                  _this56._reader = response.body.getReader();
                });
                this.onProgress = null;
              }

              _createClass(PDFFetchStreamRangeReader, [{
                key: "read",
                value: function () {
                  var _read8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                    var _yield$this$_reader$r2, value, done, buffer;

                    return regeneratorRuntime.wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            _context14.next = 2;
                            return this._readCapability.promise;

                          case 2:
                            _context14.next = 4;
                            return this._reader.read();

                          case 4:
                            _yield$this$_reader$r2 = _context14.sent;
                            value = _yield$this$_reader$r2.value;
                            done = _yield$this$_reader$r2.done;

                            if (!done) {
                              _context14.next = 9;
                              break;
                            }

                            return _context14.abrupt("return", {
                              value: value,
                              done: done
                            });

                          case 9:
                            this._loaded += value.byteLength;

                            if (this.onProgress) {
                              this.onProgress({
                                loaded: this._loaded
                              });
                            }

                            buffer = new Uint8Array(value).buffer;
                            return _context14.abrupt("return", {
                              value: buffer,
                              done: false
                            });

                          case 13:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14, this);
                  }));

                  function read() {
                    return _read8.apply(this, arguments);
                  }

                  return read;
                }()
              }, {
                key: "cancel",
                value: function cancel(reason) {
                  if (this._reader) {
                    this._reader.cancel(reason);
                  }

                  if (this._abortController) {
                    this._abortController.abort();
                  }
                }
              }, {
                key: "isStreamingSupported",
                get: function get() {
                  return this._isStreamingSupported;
                }
              }]);

              return PDFFetchStreamRangeReader;
            }();
            /***/

          }
          /******/
          ])
        );
      }); //# sourceMappingURL=pdf.js.map

      /***/

    },

    /***/
    "louq":
    /*!***************************************************!*\
      !*** ./node_modules/pdfjs-dist/web/pdf_viewer.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function louq(module, exports, __webpack_require__) {
      /**
       * @licstart The following is the entire license notice for the
       * Javascript code in this page
       *
       * Copyright 2020 Mozilla Foundation
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       *
       * @licend The above is the entire license notice for the
       * Javascript code in this page
       */
      (function webpackUniversalModuleDefinition(root, factory) {
        if (true) module.exports = factory();else {}
      })(this, function () {
        return (
          /******/
          function (modules) {
            // webpackBootstrap

            /******/
            // The module cache

            /******/
            var installedModules = {};
            /******/

            /******/
            // The require function

            /******/

            function __w_pdfjs_require__(moduleId) {
              /******/

              /******/
              // Check if module is in cache

              /******/
              if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
              }
              /******/
              // Create a new module (and put it into the cache)

              /******/


              var module = installedModules[moduleId] = {
                /******/
                i: moduleId,

                /******/
                l: false,

                /******/
                exports: {}
                /******/

              };
              /******/

              /******/
              // Execute the module function

              /******/

              modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
              /******/

              /******/
              // Flag the module as loaded

              /******/

              module.l = true;
              /******/

              /******/
              // Return the exports of the module

              /******/

              return module.exports;
              /******/
            }
            /******/

            /******/

            /******/
            // expose the modules object (__webpack_modules__)

            /******/


            __w_pdfjs_require__.m = modules;
            /******/

            /******/
            // expose the module cache

            /******/

            __w_pdfjs_require__.c = installedModules;
            /******/

            /******/
            // define getter function for harmony exports

            /******/

            __w_pdfjs_require__.d = function (exports, name, getter) {
              /******/
              if (!__w_pdfjs_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                  enumerable: true,
                  get: getter
                });
                /******/
              }
              /******/

            };
            /******/

            /******/
            // define __esModule on exports

            /******/


            __w_pdfjs_require__.r = function (exports) {
              /******/
              if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                  value: 'Module'
                });
                /******/
              }
              /******/


              Object.defineProperty(exports, '__esModule', {
                value: true
              });
              /******/
            };
            /******/

            /******/
            // create a fake namespace object

            /******/
            // mode & 1: value is a module id, require it

            /******/
            // mode & 2: merge all properties of value into the ns

            /******/
            // mode & 4: return value when already ns object

            /******/
            // mode & 8|1: behave like require

            /******/


            __w_pdfjs_require__.t = function (value, mode) {
              /******/
              if (mode & 1) value = __w_pdfjs_require__(value);
              /******/

              if (mode & 8) return value;
              /******/

              if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
              /******/

              var ns = Object.create(null);
              /******/

              __w_pdfjs_require__.r(ns);
              /******/


              Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
              });
              /******/

              if (mode & 2 && typeof value != 'string') for (var key in value) {
                __w_pdfjs_require__.d(ns, key, function (key) {
                  return value[key];
                }.bind(null, key));
              }
              /******/

              return ns;
              /******/
            };
            /******/

            /******/
            // getDefaultExport function for compatibility with non-harmony modules

            /******/


            __w_pdfjs_require__.n = function (module) {
              /******/
              var getter = module && module.__esModule ?
              /******/
              function getDefault() {
                return module['default'];
              } :
              /******/
              function getModuleExports() {
                return module;
              };
              /******/

              __w_pdfjs_require__.d(getter, 'a', getter);
              /******/


              return getter;
              /******/
            };
            /******/

            /******/
            // Object.prototype.hasOwnProperty.call

            /******/


            __w_pdfjs_require__.o = function (object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/

            /******/
            // __webpack_public_path__

            /******/


            __w_pdfjs_require__.p = "";
            /******/

            /******/

            /******/
            // Load entry module and return exports

            /******/

            return __w_pdfjs_require__(__w_pdfjs_require__.s = 0);
            /******/
          }(
          /************************************************************************/

          /******/
          [
          /* 0 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            Object.defineProperty(exports, "AnnotationLayerBuilder", {
              enumerable: true,
              get: function get() {
                return _annotation_layer_builder.AnnotationLayerBuilder;
              }
            });
            Object.defineProperty(exports, "DefaultAnnotationLayerFactory", {
              enumerable: true,
              get: function get() {
                return _annotation_layer_builder.DefaultAnnotationLayerFactory;
              }
            });
            Object.defineProperty(exports, "DefaultTextLayerFactory", {
              enumerable: true,
              get: function get() {
                return _text_layer_builder.DefaultTextLayerFactory;
              }
            });
            Object.defineProperty(exports, "TextLayerBuilder", {
              enumerable: true,
              get: function get() {
                return _text_layer_builder.TextLayerBuilder;
              }
            });
            Object.defineProperty(exports, "EventBus", {
              enumerable: true,
              get: function get() {
                return _ui_utils.EventBus;
              }
            });
            Object.defineProperty(exports, "NullL10n", {
              enumerable: true,
              get: function get() {
                return _ui_utils.NullL10n;
              }
            });
            Object.defineProperty(exports, "ProgressBar", {
              enumerable: true,
              get: function get() {
                return _ui_utils.ProgressBar;
              }
            });
            Object.defineProperty(exports, "PDFLinkService", {
              enumerable: true,
              get: function get() {
                return _pdf_link_service.PDFLinkService;
              }
            });
            Object.defineProperty(exports, "SimpleLinkService", {
              enumerable: true,
              get: function get() {
                return _pdf_link_service.SimpleLinkService;
              }
            });
            Object.defineProperty(exports, "DownloadManager", {
              enumerable: true,
              get: function get() {
                return _download_manager.DownloadManager;
              }
            });
            Object.defineProperty(exports, "GenericL10n", {
              enumerable: true,
              get: function get() {
                return _genericl10n.GenericL10n;
              }
            });
            Object.defineProperty(exports, "PDFFindController", {
              enumerable: true,
              get: function get() {
                return _pdf_find_controller.PDFFindController;
              }
            });
            Object.defineProperty(exports, "PDFHistory", {
              enumerable: true,
              get: function get() {
                return _pdf_history.PDFHistory;
              }
            });
            Object.defineProperty(exports, "PDFPageView", {
              enumerable: true,
              get: function get() {
                return _pdf_page_view.PDFPageView;
              }
            });
            Object.defineProperty(exports, "PDFSinglePageViewer", {
              enumerable: true,
              get: function get() {
                return _pdf_single_page_viewer.PDFSinglePageViewer;
              }
            });
            Object.defineProperty(exports, "PDFViewer", {
              enumerable: true,
              get: function get() {
                return _pdf_viewer.PDFViewer;
              }
            });

            var _annotation_layer_builder = __w_pdfjs_require__(1);

            var _text_layer_builder = __w_pdfjs_require__(5);

            var _ui_utils = __w_pdfjs_require__(3);

            var _pdf_link_service = __w_pdfjs_require__(4);

            var _download_manager = __w_pdfjs_require__(6);

            var _genericl10n = __w_pdfjs_require__(7);

            var _pdf_find_controller = __w_pdfjs_require__(9);

            var _pdf_history = __w_pdfjs_require__(11);

            var _pdf_page_view = __w_pdfjs_require__(12);

            var _pdf_single_page_viewer = __w_pdfjs_require__(15);

            var _pdf_viewer = __w_pdfjs_require__(17);

            var pdfjsVersion = '2.4.456';
            var pdfjsBuild = '228a591c';
            /***/
          },
          /* 1 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.DefaultAnnotationLayerFactory = exports.AnnotationLayerBuilder = void 0;

            var _pdfjsLib = __w_pdfjs_require__(2);

            var _ui_utils = __w_pdfjs_require__(3);

            var _pdf_link_service = __w_pdfjs_require__(4);

            var AnnotationLayerBuilder = /*#__PURE__*/function () {
              function AnnotationLayerBuilder(_ref35) {
                var pageDiv = _ref35.pageDiv,
                    pdfPage = _ref35.pdfPage,
                    linkService = _ref35.linkService,
                    downloadManager = _ref35.downloadManager,
                    _ref35$imageResources = _ref35.imageResourcesPath,
                    imageResourcesPath = _ref35$imageResources === void 0 ? "" : _ref35$imageResources,
                    _ref35$renderInteract = _ref35.renderInteractiveForms,
                    renderInteractiveForms = _ref35$renderInteract === void 0 ? false : _ref35$renderInteract,
                    _ref35$l10n = _ref35.l10n,
                    l10n = _ref35$l10n === void 0 ? _ui_utils.NullL10n : _ref35$l10n;

                _classCallCheck(this, AnnotationLayerBuilder);

                this.pageDiv = pageDiv;
                this.pdfPage = pdfPage;
                this.linkService = linkService;
                this.downloadManager = downloadManager;
                this.imageResourcesPath = imageResourcesPath;
                this.renderInteractiveForms = renderInteractiveForms;
                this.l10n = l10n;
                this.div = null;
                this._cancelled = false;
              }

              _createClass(AnnotationLayerBuilder, [{
                key: "render",
                value: function render(viewport) {
                  var _this57 = this;

                  var intent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "display";
                  this.pdfPage.getAnnotations({
                    intent: intent
                  }).then(function (annotations) {
                    if (_this57._cancelled) {
                      return;
                    }

                    var parameters = {
                      viewport: viewport.clone({
                        dontFlip: true
                      }),
                      div: _this57.div,
                      annotations: annotations,
                      page: _this57.pdfPage,
                      imageResourcesPath: _this57.imageResourcesPath,
                      renderInteractiveForms: _this57.renderInteractiveForms,
                      linkService: _this57.linkService,
                      downloadManager: _this57.downloadManager
                    };

                    if (_this57.div) {
                      _pdfjsLib.AnnotationLayer.update(parameters);
                    } else {
                      if (annotations.length === 0) {
                        return;
                      }

                      _this57.div = document.createElement("div");
                      _this57.div.className = "annotationLayer";

                      _this57.pageDiv.appendChild(_this57.div);

                      parameters.div = _this57.div;

                      _pdfjsLib.AnnotationLayer.render(parameters);

                      _this57.l10n.translate(_this57.div);
                    }
                  });
                }
              }, {
                key: "cancel",
                value: function cancel() {
                  this._cancelled = true;
                }
              }, {
                key: "hide",
                value: function hide() {
                  if (!this.div) {
                    return;
                  }

                  this.div.setAttribute("hidden", "true");
                }
              }]);

              return AnnotationLayerBuilder;
            }();

            exports.AnnotationLayerBuilder = AnnotationLayerBuilder;

            var DefaultAnnotationLayerFactory = /*#__PURE__*/function () {
              function DefaultAnnotationLayerFactory() {
                _classCallCheck(this, DefaultAnnotationLayerFactory);
              }

              _createClass(DefaultAnnotationLayerFactory, [{
                key: "createAnnotationLayerBuilder",
                value: function createAnnotationLayerBuilder(pageDiv, pdfPage) {
                  var imageResourcesPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                  var renderInteractiveForms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                  var l10n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _ui_utils.NullL10n;
                  return new AnnotationLayerBuilder({
                    pageDiv: pageDiv,
                    pdfPage: pdfPage,
                    imageResourcesPath: imageResourcesPath,
                    renderInteractiveForms: renderInteractiveForms,
                    linkService: new _pdf_link_service.SimpleLinkService(),
                    l10n: l10n
                  });
                }
              }]);

              return DefaultAnnotationLayerFactory;
            }();

            exports.DefaultAnnotationLayerFactory = DefaultAnnotationLayerFactory;
            /***/
          },
          /* 2 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            var pdfjsLib;

            if (typeof window !== "undefined" && window["pdfjs-dist/build/pdf"]) {
              pdfjsLib = window["pdfjs-dist/build/pdf"];
            } else {
              pdfjsLib = __webpack_require__(
              /*! ../build/pdf.js */
              "lRFz");
            }

            module.exports = pdfjsLib;
            /***/
          },
          /* 3 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.isValidRotation = isValidRotation;
            exports.isValidScrollMode = isValidScrollMode;
            exports.isValidSpreadMode = isValidSpreadMode;
            exports.isPortraitOrientation = isPortraitOrientation;
            exports.getGlobalEventBus = getGlobalEventBus;
            exports.clamp = clamp;
            exports.getPDFFileNameFromURL = getPDFFileNameFromURL;
            exports.noContextMenuHandler = noContextMenuHandler;
            exports.parseQueryString = parseQueryString;
            exports.backtrackBeforeAllVisibleElements = backtrackBeforeAllVisibleElements;
            exports.getVisibleElements = getVisibleElements;
            exports.roundToDivide = roundToDivide;
            exports.getPageSizeInches = getPageSizeInches;
            exports.approximateFraction = approximateFraction;
            exports.getOutputScale = getOutputScale;
            exports.scrollIntoView = scrollIntoView;
            exports.watchScroll = watchScroll;
            exports.binarySearchFirstItem = binarySearchFirstItem;
            exports.normalizeWheelEventDelta = normalizeWheelEventDelta;
            exports.waitOnEventOrTimeout = waitOnEventOrTimeout;
            exports.moveToEndOfArray = moveToEndOfArray;
            exports.WaitOnType = exports.animationStarted = exports.ProgressBar = exports.EventBus = exports.NullL10n = exports.SpreadMode = exports.ScrollMode = exports.TextLayerMode = exports.RendererType = exports.PresentationModeState = exports.VERTICAL_PADDING = exports.SCROLLBAR_PADDING = exports.MAX_AUTO_SCALE = exports.UNKNOWN_SCALE = exports.MAX_SCALE = exports.MIN_SCALE = exports.DEFAULT_SCALE = exports.DEFAULT_SCALE_VALUE = exports.CSS_UNITS = exports.AutoPrintRegExp = void 0;
            var CSS_UNITS = 96.0 / 72.0;
            exports.CSS_UNITS = CSS_UNITS;
            var DEFAULT_SCALE_VALUE = "auto";
            exports.DEFAULT_SCALE_VALUE = DEFAULT_SCALE_VALUE;
            var DEFAULT_SCALE = 1.0;
            exports.DEFAULT_SCALE = DEFAULT_SCALE;
            var MIN_SCALE = 0.1;
            exports.MIN_SCALE = MIN_SCALE;
            var MAX_SCALE = 10.0;
            exports.MAX_SCALE = MAX_SCALE;
            var UNKNOWN_SCALE = 0;
            exports.UNKNOWN_SCALE = UNKNOWN_SCALE;
            var MAX_AUTO_SCALE = 1.25;
            exports.MAX_AUTO_SCALE = MAX_AUTO_SCALE;
            var SCROLLBAR_PADDING = 40;
            exports.SCROLLBAR_PADDING = SCROLLBAR_PADDING;
            var VERTICAL_PADDING = 5;
            exports.VERTICAL_PADDING = VERTICAL_PADDING;
            var PresentationModeState = {
              UNKNOWN: 0,
              NORMAL: 1,
              CHANGING: 2,
              FULLSCREEN: 3
            };
            exports.PresentationModeState = PresentationModeState;
            var RendererType = {
              CANVAS: "canvas",
              SVG: "svg"
            };
            exports.RendererType = RendererType;
            var TextLayerMode = {
              DISABLE: 0,
              ENABLE: 1,
              ENABLE_ENHANCE: 2
            };
            exports.TextLayerMode = TextLayerMode;
            var ScrollMode = {
              UNKNOWN: -1,
              VERTICAL: 0,
              HORIZONTAL: 1,
              WRAPPED: 2
            };
            exports.ScrollMode = ScrollMode;
            var SpreadMode = {
              UNKNOWN: -1,
              NONE: 0,
              ODD: 1,
              EVEN: 2
            };
            exports.SpreadMode = SpreadMode;
            var AutoPrintRegExp = /\bprint\s*\(/;
            exports.AutoPrintRegExp = AutoPrintRegExp;

            function formatL10nValue(text, args) {
              if (!args) {
                return text;
              }

              return text.replace(/\{\{\s*(\w+)\s*\}\}/g, function (all, name) {
                return name in args ? args[name] : "{{" + name + "}}";
              });
            }

            var NullL10n = {
              getLanguage: function getLanguage() {
                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          return _context15.abrupt("return", "en-us");

                        case 1:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee15);
                }))();
              },
              getDirection: function getDirection() {
                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) {
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          return _context16.abrupt("return", "ltr");

                        case 1:
                        case "end":
                          return _context16.stop();
                      }
                    }
                  }, _callee16);
                }))();
              },
              get: function get(property, args, fallback) {
                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                  return regeneratorRuntime.wrap(function _callee17$(_context17) {
                    while (1) {
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          return _context17.abrupt("return", formatL10nValue(fallback, args));

                        case 1:
                        case "end":
                          return _context17.stop();
                      }
                    }
                  }, _callee17);
                }))();
              },
              translate: function translate(element) {
                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) {
                      switch (_context18.prev = _context18.next) {
                        case 0:
                        case "end":
                          return _context18.stop();
                      }
                    }
                  }, _callee18);
                }))();
              }
            };
            exports.NullL10n = NullL10n;

            function getOutputScale(ctx) {
              var devicePixelRatio = window.devicePixelRatio || 1;
              var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
              var pixelRatio = devicePixelRatio / backingStoreRatio;
              return {
                sx: pixelRatio,
                sy: pixelRatio,
                scaled: pixelRatio !== 1
              };
            }

            function scrollIntoView(element, spot) {
              var skipOverflowHiddenElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
              var parent = element.offsetParent;

              if (!parent) {
                console.error("offsetParent is not set -- cannot scroll");
                return;
              }

              var offsetY = element.offsetTop + element.clientTop;
              var offsetX = element.offsetLeft + element.clientLeft;

              while (parent.clientHeight === parent.scrollHeight && parent.clientWidth === parent.scrollWidth || skipOverflowHiddenElements && getComputedStyle(parent).overflow === "hidden") {
                if (parent.dataset._scaleY) {
                  offsetY /= parent.dataset._scaleY;
                  offsetX /= parent.dataset._scaleX;
                }

                offsetY += parent.offsetTop;
                offsetX += parent.offsetLeft;
                parent = parent.offsetParent;

                if (!parent) {
                  return;
                }
              }

              if (spot) {
                if (spot.top !== undefined) {
                  offsetY += spot.top;
                }

                if (spot.left !== undefined) {
                  offsetX += spot.left;
                  parent.scrollLeft = offsetX;
                }
              }

              parent.scrollTop = offsetY;
            }

            function watchScroll(viewAreaElement, callback) {
              var debounceScroll = function debounceScroll(evt) {
                if (rAF) {
                  return;
                }

                rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
                  rAF = null;
                  var currentX = viewAreaElement.scrollLeft;
                  var lastX = state.lastX;

                  if (currentX !== lastX) {
                    state.right = currentX > lastX;
                  }

                  state.lastX = currentX;
                  var currentY = viewAreaElement.scrollTop;
                  var lastY = state.lastY;

                  if (currentY !== lastY) {
                    state.down = currentY > lastY;
                  }

                  state.lastY = currentY;
                  callback(state);
                });
              };

              var state = {
                right: true,
                down: true,
                lastX: viewAreaElement.scrollLeft,
                lastY: viewAreaElement.scrollTop,
                _eventHandler: debounceScroll
              };
              var rAF = null;
              viewAreaElement.addEventListener("scroll", debounceScroll, true);
              return state;
            }

            function parseQueryString(query) {
              var parts = query.split("&");
              var params = Object.create(null);

              for (var i = 0, ii = parts.length; i < ii; ++i) {
                var param = parts[i].split("=");
                var key = param[0].toLowerCase();
                var value = param.length > 1 ? param[1] : null;
                params[decodeURIComponent(key)] = decodeURIComponent(value);
              }

              return params;
            }

            function binarySearchFirstItem(items, condition) {
              var minIndex = 0;
              var maxIndex = items.length - 1;

              if (items.length === 0 || !condition(items[maxIndex])) {
                return items.length;
              }

              if (condition(items[minIndex])) {
                return minIndex;
              }

              while (minIndex < maxIndex) {
                var currentIndex = minIndex + maxIndex >> 1;
                var currentItem = items[currentIndex];

                if (condition(currentItem)) {
                  maxIndex = currentIndex;
                } else {
                  minIndex = currentIndex + 1;
                }
              }

              return minIndex;
            }

            function approximateFraction(x) {
              if (Math.floor(x) === x) {
                return [x, 1];
              }

              var xinv = 1 / x;
              var limit = 8;

              if (xinv > limit) {
                return [1, limit];
              } else if (Math.floor(xinv) === xinv) {
                return [1, xinv];
              }

              var x_ = x > 1 ? xinv : x;
              var a = 0,
                  b = 1,
                  c = 1,
                  d = 1;

              while (true) {
                var p = a + c,
                    q = b + d;

                if (q > limit) {
                  break;
                }

                if (x_ <= p / q) {
                  c = p;
                  d = q;
                } else {
                  a = p;
                  b = q;
                }
              }

              var result;

              if (x_ - a / b < c / d - x_) {
                result = x_ === x ? [a, b] : [b, a];
              } else {
                result = x_ === x ? [c, d] : [d, c];
              }

              return result;
            }

            function roundToDivide(x, div) {
              var r = x % div;
              return r === 0 ? x : Math.round(x - r + div);
            }

            function getPageSizeInches(_ref36) {
              var view = _ref36.view,
                  userUnit = _ref36.userUnit,
                  rotate = _ref36.rotate;

              var _view = _slicedToArray(view, 4),
                  x1 = _view[0],
                  y1 = _view[1],
                  x2 = _view[2],
                  y2 = _view[3];

              var changeOrientation = rotate % 180 !== 0;
              var width = (x2 - x1) / 72 * userUnit;
              var height = (y2 - y1) / 72 * userUnit;
              return {
                width: changeOrientation ? height : width,
                height: changeOrientation ? width : height
              };
            }

            function backtrackBeforeAllVisibleElements(index, views, top) {
              if (index < 2) {
                return index;
              }

              var elt = views[index].div;
              var pageTop = elt.offsetTop + elt.clientTop;

              if (pageTop >= top) {
                elt = views[index - 1].div;
                pageTop = elt.offsetTop + elt.clientTop;
              }

              for (var i = index - 2; i >= 0; --i) {
                elt = views[i].div;

                if (elt.offsetTop + elt.clientTop + elt.clientHeight <= pageTop) {
                  break;
                }

                index = i;
              }

              return index;
            }

            function getVisibleElements(scrollEl, views) {
              var sortByVisibility = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
              var horizontal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
              var top = scrollEl.scrollTop,
                  bottom = top + scrollEl.clientHeight;
              var left = scrollEl.scrollLeft,
                  right = left + scrollEl.clientWidth;

              function isElementBottomAfterViewTop(view) {
                var element = view.div;
                var elementBottom = element.offsetTop + element.clientTop + element.clientHeight;
                return elementBottom > top;
              }

              function isElementRightAfterViewLeft(view) {
                var element = view.div;
                var elementRight = element.offsetLeft + element.clientLeft + element.clientWidth;
                return elementRight > left;
              }

              var visible = [],
                  numViews = views.length;
              var firstVisibleElementInd = numViews === 0 ? 0 : binarySearchFirstItem(views, horizontal ? isElementRightAfterViewLeft : isElementBottomAfterViewTop);

              if (firstVisibleElementInd > 0 && firstVisibleElementInd < numViews && !horizontal) {
                firstVisibleElementInd = backtrackBeforeAllVisibleElements(firstVisibleElementInd, views, top);
              }

              var lastEdge = horizontal ? right : -1;

              for (var i = firstVisibleElementInd; i < numViews; i++) {
                var view = views[i],
                    element = view.div;
                var currentWidth = element.offsetLeft + element.clientLeft;
                var currentHeight = element.offsetTop + element.clientTop;
                var viewWidth = element.clientWidth,
                    viewHeight = element.clientHeight;
                var viewRight = currentWidth + viewWidth;
                var viewBottom = currentHeight + viewHeight;

                if (lastEdge === -1) {
                  if (viewBottom >= bottom) {
                    lastEdge = viewBottom;
                  }
                } else if ((horizontal ? currentWidth : currentHeight) > lastEdge) {
                  break;
                }

                if (viewBottom <= top || currentHeight >= bottom || viewRight <= left || currentWidth >= right) {
                  continue;
                }

                var hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, viewBottom - bottom);
                var hiddenWidth = Math.max(0, left - currentWidth) + Math.max(0, viewRight - right);
                var percent = (viewHeight - hiddenHeight) * (viewWidth - hiddenWidth) * 100 / viewHeight / viewWidth | 0;
                visible.push({
                  id: view.id,
                  x: currentWidth,
                  y: currentHeight,
                  view: view,
                  percent: percent
                });
              }

              var first = visible[0],
                  last = visible[visible.length - 1];

              if (sortByVisibility) {
                visible.sort(function (a, b) {
                  var pc = a.percent - b.percent;

                  if (Math.abs(pc) > 0.001) {
                    return -pc;
                  }

                  return a.id - b.id;
                });
              }

              return {
                first: first,
                last: last,
                views: visible
              };
            }

            function noContextMenuHandler(evt) {
              evt.preventDefault();
            }

            function isDataSchema(url) {
              var i = 0;
              var ii = url.length;

              while (i < ii && url[i].trim() === "") {
                i++;
              }

              return url.substring(i, i + 5).toLowerCase() === "data:";
            }

            function getPDFFileNameFromURL(url) {
              var defaultFilename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "document.pdf";

              if (typeof url !== "string") {
                return defaultFilename;
              }

              if (isDataSchema(url)) {
                console.warn("getPDFFileNameFromURL: " + 'ignoring "data:" URL for performance reasons.');
                return defaultFilename;
              }

              var reURI = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
              var reFilename = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
              var splitURI = reURI.exec(url);
              var suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);

              if (suggestedFilename) {
                suggestedFilename = suggestedFilename[0];

                if (suggestedFilename.includes("%")) {
                  try {
                    suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
                  } catch (ex) {}
                }
              }

              return suggestedFilename || defaultFilename;
            }

            function normalizeWheelEventDelta(evt) {
              var delta = Math.sqrt(evt.deltaX * evt.deltaX + evt.deltaY * evt.deltaY);
              var angle = Math.atan2(evt.deltaY, evt.deltaX);

              if (-0.25 * Math.PI < angle && angle < 0.75 * Math.PI) {
                delta = -delta;
              }

              var MOUSE_DOM_DELTA_PIXEL_MODE = 0;
              var MOUSE_DOM_DELTA_LINE_MODE = 1;
              var MOUSE_PIXELS_PER_LINE = 30;
              var MOUSE_LINES_PER_PAGE = 30;

              if (evt.deltaMode === MOUSE_DOM_DELTA_PIXEL_MODE) {
                delta /= MOUSE_PIXELS_PER_LINE * MOUSE_LINES_PER_PAGE;
              } else if (evt.deltaMode === MOUSE_DOM_DELTA_LINE_MODE) {
                delta /= MOUSE_LINES_PER_PAGE;
              }

              return delta;
            }

            function isValidRotation(angle) {
              return Number.isInteger(angle) && angle % 90 === 0;
            }

            function isValidScrollMode(mode) {
              return Number.isInteger(mode) && Object.values(ScrollMode).includes(mode) && mode !== ScrollMode.UNKNOWN;
            }

            function isValidSpreadMode(mode) {
              return Number.isInteger(mode) && Object.values(SpreadMode).includes(mode) && mode !== SpreadMode.UNKNOWN;
            }

            function isPortraitOrientation(size) {
              return size.width <= size.height;
            }

            var WaitOnType = {
              EVENT: "event",
              TIMEOUT: "timeout"
            };
            exports.WaitOnType = WaitOnType;

            function waitOnEventOrTimeout(_ref37) {
              var target = _ref37.target,
                  name = _ref37.name,
                  _ref37$delay = _ref37.delay,
                  delay = _ref37$delay === void 0 ? 0 : _ref37$delay;
              return new Promise(function (resolve, reject) {
                if (typeof target !== "object" || !(name && typeof name === "string") || !(Number.isInteger(delay) && delay >= 0)) {
                  throw new Error("waitOnEventOrTimeout - invalid parameters.");
                }

                function handler(type) {
                  if (target instanceof EventBus) {
                    target._off(name, eventHandler);
                  } else {
                    target.removeEventListener(name, eventHandler);
                  }

                  if (timeout) {
                    clearTimeout(timeout);
                  }

                  resolve(type);
                }

                var eventHandler = handler.bind(null, WaitOnType.EVENT);

                if (target instanceof EventBus) {
                  target._on(name, eventHandler);
                } else {
                  target.addEventListener(name, eventHandler);
                }

                var timeoutHandler = handler.bind(null, WaitOnType.TIMEOUT);
                var timeout = setTimeout(timeoutHandler, delay);
              });
            }

            var animationStarted = new Promise(function (resolve) {
              window.requestAnimationFrame(resolve);
            });
            exports.animationStarted = animationStarted;

            function dispatchDOMEvent(eventName) {
              var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var details = Object.create(null);

              if (args && args.length > 0) {
                var obj = args[0];

                for (var key in obj) {
                  var value = obj[key];

                  if (key === "source") {
                    if (value === window || value === document) {
                      return;
                    }

                    continue;
                  }

                  details[key] = value;
                }
              }

              var event = document.createEvent("CustomEvent");
              event.initCustomEvent(eventName, true, true, details);
              document.dispatchEvent(event);
            }

            var EventBus = /*#__PURE__*/function () {
              function EventBus() {
                var _ref38 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    _ref38$dispatchToDOM = _ref38.dispatchToDOM,
                    dispatchToDOM = _ref38$dispatchToDOM === void 0 ? false : _ref38$dispatchToDOM;

                _classCallCheck(this, EventBus);

                this._listeners = Object.create(null);
                this._dispatchToDOM = dispatchToDOM === true;

                if (dispatchToDOM) {
                  console.error("The `eventBusDispatchToDOM` option/preference is deprecated, " + "add event listeners to the EventBus instance rather than the DOM.");
                }
              }

              _createClass(EventBus, [{
                key: "on",
                value: function on(eventName, listener) {
                  this._on(eventName, listener, {
                    external: true
                  });
                }
              }, {
                key: "off",
                value: function off(eventName, listener) {
                  this._off(eventName, listener, {
                    external: true
                  });
                }
              }, {
                key: "dispatch",
                value: function dispatch(eventName) {
                  var eventListeners = this._listeners[eventName];

                  if (!eventListeners || eventListeners.length === 0) {
                    if (this._dispatchToDOM) {
                      var _args19 = Array.prototype.slice.call(arguments, 1);

                      dispatchDOMEvent(eventName, _args19);
                    }

                    return;
                  }

                  var args = Array.prototype.slice.call(arguments, 1);
                  var externalListeners;
                  eventListeners.slice(0).forEach(function (_ref39) {
                    var listener = _ref39.listener,
                        external = _ref39.external;

                    if (external) {
                      if (!externalListeners) {
                        externalListeners = [];
                      }

                      externalListeners.push(listener);
                      return;
                    }

                    listener.apply(null, args);
                  });

                  if (externalListeners) {
                    externalListeners.forEach(function (listener) {
                      listener.apply(null, args);
                    });
                    externalListeners = null;
                  }

                  if (this._dispatchToDOM) {
                    dispatchDOMEvent(eventName, args);
                  }
                }
              }, {
                key: "_on",
                value: function _on(eventName, listener) {
                  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                  var eventListeners = this._listeners[eventName];

                  if (!eventListeners) {
                    this._listeners[eventName] = eventListeners = [];
                  }

                  eventListeners.push({
                    listener: listener,
                    external: (options && options.external) === true
                  });
                }
              }, {
                key: "_off",
                value: function _off(eventName, listener) {
                  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                  var eventListeners = this._listeners[eventName];

                  if (!eventListeners) {
                    return;
                  }

                  for (var i = 0, ii = eventListeners.length; i < ii; i++) {
                    if (eventListeners[i].listener === listener) {
                      eventListeners.splice(i, 1);
                      return;
                    }
                  }
                }
              }]);

              return EventBus;
            }();

            exports.EventBus = EventBus;
            var globalEventBus = null;

            function getGlobalEventBus() {
              var dispatchToDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              console.error("getGlobalEventBus is deprecated, use a manually created EventBus instance instead.");

              if (!globalEventBus) {
                globalEventBus = new EventBus({
                  dispatchToDOM: dispatchToDOM
                });
              }

              return globalEventBus;
            }

            function clamp(v, min, max) {
              return Math.min(Math.max(v, min), max);
            }

            var ProgressBar = /*#__PURE__*/function () {
              function ProgressBar(id) {
                var _ref40 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    height = _ref40.height,
                    width = _ref40.width,
                    units = _ref40.units;

                _classCallCheck(this, ProgressBar);

                this.visible = true;
                this.div = document.querySelector(id + " .progress");
                this.bar = this.div.parentNode;
                this.height = height || 100;
                this.width = width || 100;
                this.units = units || "%";
                this.div.style.height = this.height + this.units;
                this.percent = 0;
              }

              _createClass(ProgressBar, [{
                key: "_updateBar",
                value: function _updateBar() {
                  if (this._indeterminate) {
                    this.div.classList.add("indeterminate");
                    this.div.style.width = this.width + this.units;
                    return;
                  }

                  this.div.classList.remove("indeterminate");
                  var progressSize = this.width * this._percent / 100;
                  this.div.style.width = progressSize + this.units;
                }
              }, {
                key: "setWidth",
                value: function setWidth(viewer) {
                  if (!viewer) {
                    return;
                  }

                  var container = viewer.parentNode;
                  var scrollbarWidth = container.offsetWidth - viewer.offsetWidth;

                  if (scrollbarWidth > 0) {
                    this.bar.style.width = "calc(100% - ".concat(scrollbarWidth, "px)");
                  }
                }
              }, {
                key: "hide",
                value: function hide() {
                  if (!this.visible) {
                    return;
                  }

                  this.visible = false;
                  this.bar.classList.add("hidden");
                  document.body.classList.remove("loadingInProgress");
                }
              }, {
                key: "show",
                value: function show() {
                  if (this.visible) {
                    return;
                  }

                  this.visible = true;
                  document.body.classList.add("loadingInProgress");
                  this.bar.classList.remove("hidden");
                }
              }, {
                key: "percent",
                get: function get() {
                  return this._percent;
                },
                set: function set(val) {
                  this._indeterminate = isNaN(val);
                  this._percent = clamp(val, 0, 100);

                  this._updateBar();
                }
              }]);

              return ProgressBar;
            }();

            exports.ProgressBar = ProgressBar;

            function moveToEndOfArray(arr, condition) {
              var moved = [],
                  len = arr.length;
              var write = 0;

              for (var read = 0; read < len; ++read) {
                if (condition(arr[read])) {
                  moved.push(arr[read]);
                } else {
                  arr[write] = arr[read];
                  ++write;
                }
              }

              for (var _read9 = 0; write < len; ++_read9, ++write) {
                arr[write] = moved[_read9];
              }
            }
            /***/

          },
          /* 4 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.SimpleLinkService = exports.PDFLinkService = void 0;

            var _ui_utils = __w_pdfjs_require__(3);

            var PDFLinkService = /*#__PURE__*/function () {
              function PDFLinkService() {
                var _ref41 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    eventBus = _ref41.eventBus,
                    _ref41$externalLinkTa = _ref41.externalLinkTarget,
                    externalLinkTarget = _ref41$externalLinkTa === void 0 ? null : _ref41$externalLinkTa,
                    _ref41$externalLinkRe = _ref41.externalLinkRel,
                    externalLinkRel = _ref41$externalLinkRe === void 0 ? null : _ref41$externalLinkRe,
                    _ref41$externalLinkEn = _ref41.externalLinkEnabled,
                    externalLinkEnabled = _ref41$externalLinkEn === void 0 ? true : _ref41$externalLinkEn,
                    _ref41$ignoreDestinat = _ref41.ignoreDestinationZoom,
                    ignoreDestinationZoom = _ref41$ignoreDestinat === void 0 ? false : _ref41$ignoreDestinat;

                _classCallCheck(this, PDFLinkService);

                this.eventBus = eventBus || (0, _ui_utils.getGlobalEventBus)();
                this.externalLinkTarget = externalLinkTarget;
                this.externalLinkRel = externalLinkRel;
                this.externalLinkEnabled = externalLinkEnabled;
                this._ignoreDestinationZoom = ignoreDestinationZoom;
                this.baseUrl = null;
                this.pdfDocument = null;
                this.pdfViewer = null;
                this.pdfHistory = null;
                this._pagesRefCache = null;
              }

              _createClass(PDFLinkService, [{
                key: "setDocument",
                value: function setDocument(pdfDocument) {
                  var baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                  this.baseUrl = baseUrl;
                  this.pdfDocument = pdfDocument;
                  this._pagesRefCache = Object.create(null);
                }
              }, {
                key: "setViewer",
                value: function setViewer(pdfViewer) {
                  this.pdfViewer = pdfViewer;
                }
              }, {
                key: "setHistory",
                value: function setHistory(pdfHistory) {
                  this.pdfHistory = pdfHistory;
                }
              }, {
                key: "navigateTo",
                value: function navigateTo(dest) {
                  var _this58 = this;

                  var goToDestination = function goToDestination(_ref42) {
                    var namedDest = _ref42.namedDest,
                        explicitDest = _ref42.explicitDest;
                    var destRef = explicitDest[0];
                    var pageNumber;

                    if (destRef instanceof Object) {
                      pageNumber = _this58._cachedPageNumber(destRef);

                      if (pageNumber === null) {
                        _this58.pdfDocument.getPageIndex(destRef).then(function (pageIndex) {
                          _this58.cachePageRef(pageIndex + 1, destRef);

                          goToDestination({
                            namedDest: namedDest,
                            explicitDest: explicitDest
                          });
                        })["catch"](function () {
                          console.error("PDFLinkService.navigateTo: \"".concat(destRef, "\" is not ") + "a valid page reference, for dest=\"".concat(dest, "\"."));
                        });

                        return;
                      }
                    } else if (Number.isInteger(destRef)) {
                      pageNumber = destRef + 1;
                    } else {
                      console.error("PDFLinkService.navigateTo: \"".concat(destRef, "\" is not ") + "a valid destination reference, for dest=\"".concat(dest, "\"."));
                      return;
                    }

                    if (!pageNumber || pageNumber < 1 || pageNumber > _this58.pagesCount) {
                      console.error("PDFLinkService.navigateTo: \"".concat(pageNumber, "\" is not ") + "a valid page number, for dest=\"".concat(dest, "\"."));
                      return;
                    }

                    if (_this58.pdfHistory) {
                      _this58.pdfHistory.pushCurrentPosition();

                      _this58.pdfHistory.push({
                        namedDest: namedDest,
                        explicitDest: explicitDest,
                        pageNumber: pageNumber
                      });
                    }

                    _this58.pdfViewer.scrollPageIntoView({
                      pageNumber: pageNumber,
                      destArray: explicitDest,
                      ignoreDestinationZoom: _this58._ignoreDestinationZoom
                    });
                  };

                  new Promise(function (resolve, reject) {
                    if (typeof dest === "string") {
                      _this58.pdfDocument.getDestination(dest).then(function (destArray) {
                        resolve({
                          namedDest: dest,
                          explicitDest: destArray
                        });
                      });

                      return;
                    }

                    resolve({
                      namedDest: "",
                      explicitDest: dest
                    });
                  }).then(function (data) {
                    if (!Array.isArray(data.explicitDest)) {
                      console.error("PDFLinkService.navigateTo: \"".concat(data.explicitDest, "\" is") + " not a valid destination array, for dest=\"".concat(dest, "\"."));
                      return;
                    }

                    goToDestination(data);
                  });
                }
              }, {
                key: "getDestinationHash",
                value: function getDestinationHash(dest) {
                  if (typeof dest === "string") {
                    return this.getAnchorUrl("#" + escape(dest));
                  }

                  if (Array.isArray(dest)) {
                    var str = JSON.stringify(dest);
                    return this.getAnchorUrl("#" + escape(str));
                  }

                  return this.getAnchorUrl("");
                }
              }, {
                key: "getAnchorUrl",
                value: function getAnchorUrl(anchor) {
                  return (this.baseUrl || "") + anchor;
                }
              }, {
                key: "setHash",
                value: function setHash(hash) {
                  var pageNumber, dest;

                  if (hash.includes("=")) {
                    var params = (0, _ui_utils.parseQueryString)(hash);

                    if ("search" in params) {
                      this.eventBus.dispatch("findfromurlhash", {
                        source: this,
                        query: params["search"].replace(/"/g, ""),
                        phraseSearch: params["phrase"] === "true"
                      });
                    }

                    if ("nameddest" in params) {
                      this.navigateTo(params.nameddest);
                      return;
                    }

                    if ("page" in params) {
                      pageNumber = params.page | 0 || 1;
                    }

                    if ("zoom" in params) {
                      var zoomArgs = params.zoom.split(",");
                      var zoomArg = zoomArgs[0];
                      var zoomArgNumber = parseFloat(zoomArg);

                      if (!zoomArg.includes("Fit")) {
                        dest = [null, {
                          name: "XYZ"
                        }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null, zoomArgs.length > 2 ? zoomArgs[2] | 0 : null, zoomArgNumber ? zoomArgNumber / 100 : zoomArg];
                      } else {
                        if (zoomArg === "Fit" || zoomArg === "FitB") {
                          dest = [null, {
                            name: zoomArg
                          }];
                        } else if (zoomArg === "FitH" || zoomArg === "FitBH" || zoomArg === "FitV" || zoomArg === "FitBV") {
                          dest = [null, {
                            name: zoomArg
                          }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
                        } else if (zoomArg === "FitR") {
                          if (zoomArgs.length !== 5) {
                            console.error('PDFLinkService.setHash: Not enough parameters for "FitR".');
                          } else {
                            dest = [null, {
                              name: zoomArg
                            }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
                          }
                        } else {
                          console.error("PDFLinkService.setHash: \"".concat(zoomArg, "\" is not ") + "a valid zoom value.");
                        }
                      }
                    }

                    if (dest) {
                      this.pdfViewer.scrollPageIntoView({
                        pageNumber: pageNumber || this.page,
                        destArray: dest,
                        allowNegativeOffset: true
                      });
                    } else if (pageNumber) {
                      this.page = pageNumber;
                    }

                    if ("pagemode" in params) {
                      this.eventBus.dispatch("pagemode", {
                        source: this,
                        mode: params.pagemode
                      });
                    }
                  } else {
                    dest = unescape(hash);

                    try {
                      dest = JSON.parse(dest);

                      if (!Array.isArray(dest)) {
                        dest = dest.toString();
                      }
                    } catch (ex) {}

                    if (typeof dest === "string" || isValidExplicitDestination(dest)) {
                      this.navigateTo(dest);
                      return;
                    }

                    console.error("PDFLinkService.setHash: \"".concat(unescape(hash), "\" is not ") + "a valid destination.");
                  }
                }
              }, {
                key: "executeNamedAction",
                value: function executeNamedAction(action) {
                  switch (action) {
                    case "GoBack":
                      if (this.pdfHistory) {
                        this.pdfHistory.back();
                      }

                      break;

                    case "GoForward":
                      if (this.pdfHistory) {
                        this.pdfHistory.forward();
                      }

                      break;

                    case "NextPage":
                      if (this.page < this.pagesCount) {
                        this.page++;
                      }

                      break;

                    case "PrevPage":
                      if (this.page > 1) {
                        this.page--;
                      }

                      break;

                    case "LastPage":
                      this.page = this.pagesCount;
                      break;

                    case "FirstPage":
                      this.page = 1;
                      break;

                    default:
                      break;
                  }

                  this.eventBus.dispatch("namedaction", {
                    source: this,
                    action: action
                  });
                }
              }, {
                key: "cachePageRef",
                value: function cachePageRef(pageNum, pageRef) {
                  if (!pageRef) {
                    return;
                  }

                  var refStr = pageRef.gen === 0 ? "".concat(pageRef.num, "R") : "".concat(pageRef.num, "R").concat(pageRef.gen);
                  this._pagesRefCache[refStr] = pageNum;
                }
              }, {
                key: "_cachedPageNumber",
                value: function _cachedPageNumber(pageRef) {
                  var refStr = pageRef.gen === 0 ? "".concat(pageRef.num, "R") : "".concat(pageRef.num, "R").concat(pageRef.gen);
                  return this._pagesRefCache && this._pagesRefCache[refStr] || null;
                }
              }, {
                key: "isPageVisible",
                value: function isPageVisible(pageNumber) {
                  return this.pdfViewer.isPageVisible(pageNumber);
                }
              }, {
                key: "pagesCount",
                get: function get() {
                  return this.pdfDocument ? this.pdfDocument.numPages : 0;
                }
              }, {
                key: "page",
                get: function get() {
                  return this.pdfViewer.currentPageNumber;
                },
                set: function set(value) {
                  this.pdfViewer.currentPageNumber = value;
                }
              }, {
                key: "rotation",
                get: function get() {
                  return this.pdfViewer.pagesRotation;
                },
                set: function set(value) {
                  this.pdfViewer.pagesRotation = value;
                }
              }]);

              return PDFLinkService;
            }();

            exports.PDFLinkService = PDFLinkService;

            function isValidExplicitDestination(dest) {
              if (!Array.isArray(dest)) {
                return false;
              }

              var destLength = dest.length;

              if (destLength < 2) {
                return false;
              }

              var page = dest[0];

              if (!(typeof page === "object" && Number.isInteger(page.num) && Number.isInteger(page.gen)) && !(Number.isInteger(page) && page >= 0)) {
                return false;
              }

              var zoom = dest[1];

              if (!(typeof zoom === "object" && typeof zoom.name === "string")) {
                return false;
              }

              var allowNull = true;

              switch (zoom.name) {
                case "XYZ":
                  if (destLength !== 5) {
                    return false;
                  }

                  break;

                case "Fit":
                case "FitB":
                  return destLength === 2;

                case "FitH":
                case "FitBH":
                case "FitV":
                case "FitBV":
                  if (destLength !== 3) {
                    return false;
                  }

                  break;

                case "FitR":
                  if (destLength !== 6) {
                    return false;
                  }

                  allowNull = false;
                  break;

                default:
                  return false;
              }

              for (var i = 2; i < destLength; i++) {
                var param = dest[i];

                if (!(typeof param === "number" || allowNull && param === null)) {
                  return false;
                }
              }

              return true;
            }

            var SimpleLinkService = /*#__PURE__*/function () {
              function SimpleLinkService() {
                _classCallCheck(this, SimpleLinkService);

                this.externalLinkTarget = null;
                this.externalLinkRel = null;
                this.externalLinkEnabled = true;
                this._ignoreDestinationZoom = false;
              }

              _createClass(SimpleLinkService, [{
                key: "navigateTo",
                value: function navigateTo(dest) {}
              }, {
                key: "getDestinationHash",
                value: function getDestinationHash(dest) {
                  return "#";
                }
              }, {
                key: "getAnchorUrl",
                value: function getAnchorUrl(hash) {
                  return "#";
                }
              }, {
                key: "setHash",
                value: function setHash(hash) {}
              }, {
                key: "executeNamedAction",
                value: function executeNamedAction(action) {}
              }, {
                key: "cachePageRef",
                value: function cachePageRef(pageNum, pageRef) {}
              }, {
                key: "isPageVisible",
                value: function isPageVisible(pageNumber) {
                  return true;
                }
              }, {
                key: "pagesCount",
                get: function get() {
                  return 0;
                }
              }, {
                key: "page",
                get: function get() {
                  return 0;
                },
                set: function set(value) {}
              }, {
                key: "rotation",
                get: function get() {
                  return 0;
                },
                set: function set(value) {}
              }]);

              return SimpleLinkService;
            }();

            exports.SimpleLinkService = SimpleLinkService;
            /***/
          },
          /* 5 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.DefaultTextLayerFactory = exports.TextLayerBuilder = void 0;

            var _ui_utils = __w_pdfjs_require__(3);

            var _pdfjsLib = __w_pdfjs_require__(2);

            var EXPAND_DIVS_TIMEOUT = 300;

            var TextLayerBuilder = /*#__PURE__*/function () {
              function TextLayerBuilder(_ref43) {
                var textLayerDiv = _ref43.textLayerDiv,
                    eventBus = _ref43.eventBus,
                    pageIndex = _ref43.pageIndex,
                    viewport = _ref43.viewport,
                    _ref43$findController = _ref43.findController,
                    findController = _ref43$findController === void 0 ? null : _ref43$findController,
                    _ref43$enhanceTextSel = _ref43.enhanceTextSelection,
                    enhanceTextSelection = _ref43$enhanceTextSel === void 0 ? false : _ref43$enhanceTextSel;

                _classCallCheck(this, TextLayerBuilder);

                this.textLayerDiv = textLayerDiv;
                this.eventBus = eventBus || (0, _ui_utils.getGlobalEventBus)();
                this.textContent = null;
                this.textContentItemsStr = [];
                this.textContentStream = null;
                this.renderingDone = false;
                this.pageIdx = pageIndex;
                this.pageNumber = this.pageIdx + 1;
                this.matches = [];
                this.viewport = viewport;
                this.textDivs = [];
                this.findController = findController;
                this.textLayerRenderTask = null;
                this.enhanceTextSelection = enhanceTextSelection;
                this._onUpdateTextLayerMatches = null;

                this._bindMouse();
              }

              _createClass(TextLayerBuilder, [{
                key: "_finishRendering",
                value: function _finishRendering() {
                  this.renderingDone = true;

                  if (!this.enhanceTextSelection) {
                    var endOfContent = document.createElement("div");
                    endOfContent.className = "endOfContent";
                    this.textLayerDiv.appendChild(endOfContent);
                  }

                  this.eventBus.dispatch("textlayerrendered", {
                    source: this,
                    pageNumber: this.pageNumber,
                    numTextDivs: this.textDivs.length
                  });
                }
              }, {
                key: "render",
                value: function render() {
                  var _this59 = this;

                  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

                  if (!(this.textContent || this.textContentStream) || this.renderingDone) {
                    return;
                  }

                  this.cancel();
                  this.textDivs = [];
                  var textLayerFrag = document.createDocumentFragment();
                  this.textLayerRenderTask = (0, _pdfjsLib.renderTextLayer)({
                    textContent: this.textContent,
                    textContentStream: this.textContentStream,
                    container: textLayerFrag,
                    viewport: this.viewport,
                    textDivs: this.textDivs,
                    textContentItemsStr: this.textContentItemsStr,
                    timeout: timeout,
                    enhanceTextSelection: this.enhanceTextSelection
                  });
                  this.textLayerRenderTask.promise.then(function () {
                    _this59.textLayerDiv.appendChild(textLayerFrag);

                    _this59._finishRendering();

                    _this59._updateMatches();
                  }, function (reason) {});

                  if (!this._onUpdateTextLayerMatches) {
                    this._onUpdateTextLayerMatches = function (evt) {
                      if (evt.pageIndex === _this59.pageIdx || evt.pageIndex === -1) {
                        _this59._updateMatches();
                      }
                    };

                    this.eventBus._on("updatetextlayermatches", this._onUpdateTextLayerMatches);
                  }
                }
              }, {
                key: "cancel",
                value: function cancel() {
                  if (this.textLayerRenderTask) {
                    this.textLayerRenderTask.cancel();
                    this.textLayerRenderTask = null;
                  }

                  if (this._onUpdateTextLayerMatches) {
                    this.eventBus._off("updatetextlayermatches", this._onUpdateTextLayerMatches);

                    this._onUpdateTextLayerMatches = null;
                  }
                }
              }, {
                key: "setTextContentStream",
                value: function setTextContentStream(readableStream) {
                  this.cancel();
                  this.textContentStream = readableStream;
                }
              }, {
                key: "setTextContent",
                value: function setTextContent(textContent) {
                  this.cancel();
                  this.textContent = textContent;
                }
              }, {
                key: "_convertMatches",
                value: function _convertMatches(matches, matchesLength) {
                  if (!matches) {
                    return [];
                  }

                  var findController = this.findController,
                      textContentItemsStr = this.textContentItemsStr;
                  var i = 0,
                      iIndex = 0;
                  var end = textContentItemsStr.length - 1;
                  var queryLen = findController.state.query.length;
                  var result = [];

                  for (var m = 0, mm = matches.length; m < mm; m++) {
                    var matchIdx = matches[m];

                    while (i !== end && matchIdx >= iIndex + textContentItemsStr[i].length) {
                      iIndex += textContentItemsStr[i].length;
                      i++;
                    }

                    if (i === textContentItemsStr.length) {
                      console.error("Could not find a matching mapping");
                    }

                    var match = {
                      begin: {
                        divIdx: i,
                        offset: matchIdx - iIndex
                      }
                    };

                    if (matchesLength) {
                      matchIdx += matchesLength[m];
                    } else {
                      matchIdx += queryLen;
                    }

                    while (i !== end && matchIdx > iIndex + textContentItemsStr[i].length) {
                      iIndex += textContentItemsStr[i].length;
                      i++;
                    }

                    match.end = {
                      divIdx: i,
                      offset: matchIdx - iIndex
                    };
                    result.push(match);
                  }

                  return result;
                }
              }, {
                key: "_renderMatches",
                value: function _renderMatches(matches) {
                  if (matches.length === 0) {
                    return;
                  }

                  var findController = this.findController,
                      pageIdx = this.pageIdx,
                      textContentItemsStr = this.textContentItemsStr,
                      textDivs = this.textDivs;
                  var isSelectedPage = pageIdx === findController.selected.pageIdx;
                  var selectedMatchIdx = findController.selected.matchIdx;
                  var highlightAll = findController.state.highlightAll;
                  var prevEnd = null;
                  var infinity = {
                    divIdx: -1,
                    offset: undefined
                  };

                  function beginText(begin, className) {
                    var divIdx = begin.divIdx;
                    textDivs[divIdx].textContent = "";
                    appendTextToDiv(divIdx, 0, begin.offset, className);
                  }

                  function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
                    var div = textDivs[divIdx];
                    var content = textContentItemsStr[divIdx].substring(fromOffset, toOffset);
                    var node = document.createTextNode(content);

                    if (className) {
                      var span = document.createElement("span");
                      span.className = className;
                      span.appendChild(node);
                      div.appendChild(span);
                      return;
                    }

                    div.appendChild(node);
                  }

                  var i0 = selectedMatchIdx,
                      i1 = i0 + 1;

                  if (highlightAll) {
                    i0 = 0;
                    i1 = matches.length;
                  } else if (!isSelectedPage) {
                    return;
                  }

                  for (var i = i0; i < i1; i++) {
                    var match = matches[i];
                    var begin = match.begin;
                    var end = match.end;
                    var isSelected = isSelectedPage && i === selectedMatchIdx;
                    var highlightSuffix = isSelected ? " selected" : "";

                    if (isSelected) {
                      findController.scrollMatchIntoView({
                        element: textDivs[begin.divIdx],
                        pageIndex: pageIdx,
                        matchIndex: selectedMatchIdx
                      });
                    }

                    if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
                      if (prevEnd !== null) {
                        appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
                      }

                      beginText(begin);
                    } else {
                      appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
                    }

                    if (begin.divIdx === end.divIdx) {
                      appendTextToDiv(begin.divIdx, begin.offset, end.offset, "highlight" + highlightSuffix);
                    } else {
                      appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, "highlight begin" + highlightSuffix);

                      for (var n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
                        textDivs[n0].className = "highlight middle" + highlightSuffix;
                      }

                      beginText(end, "highlight end" + highlightSuffix);
                    }

                    prevEnd = end;
                  }

                  if (prevEnd) {
                    appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
                  }
                }
              }, {
                key: "_updateMatches",
                value: function _updateMatches() {
                  if (!this.renderingDone) {
                    return;
                  }

                  var findController = this.findController,
                      matches = this.matches,
                      pageIdx = this.pageIdx,
                      textContentItemsStr = this.textContentItemsStr,
                      textDivs = this.textDivs;
                  var clearedUntilDivIdx = -1;

                  for (var i = 0, ii = matches.length; i < ii; i++) {
                    var match = matches[i];
                    var begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);

                    for (var n = begin, end = match.end.divIdx; n <= end; n++) {
                      var div = textDivs[n];
                      div.textContent = textContentItemsStr[n];
                      div.className = "";
                    }

                    clearedUntilDivIdx = match.end.divIdx + 1;
                  }

                  if (!findController || !findController.highlightMatches) {
                    return;
                  }

                  var pageMatches = findController.pageMatches[pageIdx] || null;
                  var pageMatchesLength = findController.pageMatchesLength[pageIdx] || null;
                  this.matches = this._convertMatches(pageMatches, pageMatchesLength);

                  this._renderMatches(this.matches);
                }
              }, {
                key: "_bindMouse",
                value: function _bindMouse() {
                  var _this60 = this;

                  var div = this.textLayerDiv;
                  var expandDivsTimer = null;
                  div.addEventListener("mousedown", function (evt) {
                    if (_this60.enhanceTextSelection && _this60.textLayerRenderTask) {
                      _this60.textLayerRenderTask.expandTextDivs(true);

                      if (expandDivsTimer) {
                        clearTimeout(expandDivsTimer);
                        expandDivsTimer = null;
                      }

                      return;
                    }

                    var end = div.querySelector(".endOfContent");

                    if (!end) {
                      return;
                    }

                    var adjustTop = evt.target !== div;
                    adjustTop = adjustTop && window.getComputedStyle(end).getPropertyValue("-moz-user-select") !== "none";

                    if (adjustTop) {
                      var divBounds = div.getBoundingClientRect();
                      var r = Math.max(0, (evt.pageY - divBounds.top) / divBounds.height);
                      end.style.top = (r * 100).toFixed(2) + "%";
                    }

                    end.classList.add("active");
                  });
                  div.addEventListener("mouseup", function () {
                    if (_this60.enhanceTextSelection && _this60.textLayerRenderTask) {
                      expandDivsTimer = setTimeout(function () {
                        if (_this60.textLayerRenderTask) {
                          _this60.textLayerRenderTask.expandTextDivs(false);
                        }

                        expandDivsTimer = null;
                      }, EXPAND_DIVS_TIMEOUT);
                      return;
                    }

                    var end = div.querySelector(".endOfContent");

                    if (!end) {
                      return;
                    }

                    end.style.top = "";
                    end.classList.remove("active");
                  });
                }
              }]);

              return TextLayerBuilder;
            }();

            exports.TextLayerBuilder = TextLayerBuilder;

            var DefaultTextLayerFactory = /*#__PURE__*/function () {
              function DefaultTextLayerFactory() {
                _classCallCheck(this, DefaultTextLayerFactory);
              }

              _createClass(DefaultTextLayerFactory, [{
                key: "createTextLayerBuilder",
                value: function createTextLayerBuilder(textLayerDiv, pageIndex, viewport) {
                  var enhanceTextSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                  var eventBus = arguments.length > 4 ? arguments[4] : undefined;
                  return new TextLayerBuilder({
                    textLayerDiv: textLayerDiv,
                    pageIndex: pageIndex,
                    viewport: viewport,
                    enhanceTextSelection: enhanceTextSelection,
                    eventBus: eventBus
                  });
                }
              }]);

              return DefaultTextLayerFactory;
            }();

            exports.DefaultTextLayerFactory = DefaultTextLayerFactory;
            /***/
          },
          /* 6 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.DownloadManager = void 0;

            var _pdfjsLib = __w_pdfjs_require__(2);

            ;
            var DISABLE_CREATE_OBJECT_URL = _pdfjsLib.apiCompatibilityParams.disableCreateObjectURL || false;

            function _download2(blobUrl, filename) {
              var a = document.createElement("a");

              if (!a.click) {
                throw new Error('DownloadManager: "a.click()" is not supported.');
              }

              a.href = blobUrl;
              a.target = "_parent";

              if ("download" in a) {
                a.download = filename;
              }

              (document.body || document.documentElement).appendChild(a);
              a.click();
              a.remove();
            }

            var DownloadManager = /*#__PURE__*/function () {
              function DownloadManager(_ref44) {
                var _ref44$disableCreateO = _ref44.disableCreateObjectURL,
                    disableCreateObjectURL = _ref44$disableCreateO === void 0 ? DISABLE_CREATE_OBJECT_URL : _ref44$disableCreateO;

                _classCallCheck(this, DownloadManager);

                this.disableCreateObjectURL = disableCreateObjectURL;
              }

              _createClass(DownloadManager, [{
                key: "downloadUrl",
                value: function downloadUrl(url, filename) {
                  if (!(0, _pdfjsLib.createValidAbsoluteUrl)(url, "http://example.com")) {
                    return;
                  }

                  _download2(url + "#pdfjs.action=download", filename);
                }
              }, {
                key: "downloadData",
                value: function downloadData(data, filename, contentType) {
                  if (navigator.msSaveBlob) {
                    navigator.msSaveBlob(new Blob([data], {
                      type: contentType
                    }), filename);
                    return;
                  }

                  var blobUrl = (0, _pdfjsLib.createObjectURL)(data, contentType, this.disableCreateObjectURL);

                  _download2(blobUrl, filename);
                }
              }, {
                key: "download",
                value: function download(blob, url, filename) {
                  if (navigator.msSaveBlob) {
                    if (!navigator.msSaveBlob(blob, filename)) {
                      this.downloadUrl(url, filename);
                    }

                    return;
                  }

                  if (this.disableCreateObjectURL) {
                    this.downloadUrl(url, filename);
                    return;
                  }

                  var blobUrl = URL.createObjectURL(blob);

                  _download2(blobUrl, filename);
                }
              }]);

              return DownloadManager;
            }();

            exports.DownloadManager = DownloadManager;
            /***/
          },
          /* 7 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.GenericL10n = void 0;

            __w_pdfjs_require__(8);

            var webL10n = document.webL10n;

            var GenericL10n = /*#__PURE__*/function () {
              function GenericL10n(lang) {
                _classCallCheck(this, GenericL10n);

                this._lang = lang;
                this._ready = new Promise(function (resolve, reject) {
                  webL10n.setLanguage(lang, function () {
                    resolve(webL10n);
                  });
                });
              }

              _createClass(GenericL10n, [{
                key: "getLanguage",
                value: function () {
                  var _getLanguage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                    var l10n;
                    return regeneratorRuntime.wrap(function _callee19$(_context19) {
                      while (1) {
                        switch (_context19.prev = _context19.next) {
                          case 0:
                            _context19.next = 2;
                            return this._ready;

                          case 2:
                            l10n = _context19.sent;
                            return _context19.abrupt("return", l10n.getLanguage());

                          case 4:
                          case "end":
                            return _context19.stop();
                        }
                      }
                    }, _callee19, this);
                  }));

                  function getLanguage() {
                    return _getLanguage.apply(this, arguments);
                  }

                  return getLanguage;
                }()
              }, {
                key: "getDirection",
                value: function () {
                  var _getDirection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
                    var l10n;
                    return regeneratorRuntime.wrap(function _callee20$(_context20) {
                      while (1) {
                        switch (_context20.prev = _context20.next) {
                          case 0:
                            _context20.next = 2;
                            return this._ready;

                          case 2:
                            l10n = _context20.sent;
                            return _context20.abrupt("return", l10n.getDirection());

                          case 4:
                          case "end":
                            return _context20.stop();
                        }
                      }
                    }, _callee20, this);
                  }));

                  function getDirection() {
                    return _getDirection.apply(this, arguments);
                  }

                  return getDirection;
                }()
              }, {
                key: "get",
                value: function () {
                  var _get2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(property, args, fallback) {
                    var l10n;
                    return regeneratorRuntime.wrap(function _callee21$(_context21) {
                      while (1) {
                        switch (_context21.prev = _context21.next) {
                          case 0:
                            _context21.next = 2;
                            return this._ready;

                          case 2:
                            l10n = _context21.sent;
                            return _context21.abrupt("return", l10n.get(property, args, fallback));

                          case 4:
                          case "end":
                            return _context21.stop();
                        }
                      }
                    }, _callee21, this);
                  }));

                  function get(_x6, _x7, _x8) {
                    return _get2.apply(this, arguments);
                  }

                  return get;
                }()
              }, {
                key: "translate",
                value: function () {
                  var _translate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(element) {
                    var l10n;
                    return regeneratorRuntime.wrap(function _callee22$(_context22) {
                      while (1) {
                        switch (_context22.prev = _context22.next) {
                          case 0:
                            _context22.next = 2;
                            return this._ready;

                          case 2:
                            l10n = _context22.sent;
                            return _context22.abrupt("return", l10n.translate(element));

                          case 4:
                          case "end":
                            return _context22.stop();
                        }
                      }
                    }, _callee22, this);
                  }));

                  function translate(_x9) {
                    return _translate.apply(this, arguments);
                  }

                  return translate;
                }()
              }]);

              return GenericL10n;
            }();

            exports.GenericL10n = GenericL10n;
            /***/
          },
          /* 8 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            document.webL10n = function (window, document, undefined) {
              var gL10nData = {};
              var gTextData = '';
              var gTextProp = 'textContent';
              var gLanguage = '';
              var gMacros = {};
              var gReadyState = 'loading';
              var gAsyncResourceLoading = true;

              function getL10nResourceLinks() {
                return document.querySelectorAll('link[type="application/l10n"]');
              }

              function getL10nDictionary() {
                var script = document.querySelector('script[type="application/l10n"]');
                return script ? JSON.parse(script.innerHTML) : null;
              }

              function getTranslatableChildren(element) {
                return element ? element.querySelectorAll('*[data-l10n-id]') : [];
              }

              function getL10nAttributes(element) {
                if (!element) return {};
                var l10nId = element.getAttribute('data-l10n-id');
                var l10nArgs = element.getAttribute('data-l10n-args');
                var args = {};

                if (l10nArgs) {
                  try {
                    args = JSON.parse(l10nArgs);
                  } catch (e) {
                    console.warn('could not parse arguments for #' + l10nId);
                  }
                }

                return {
                  id: l10nId,
                  args: args
                };
              }

              function xhrLoadText(url, onSuccess, onFailure) {
                onSuccess = onSuccess || function _onSuccess(data) {};

                onFailure = onFailure || function _onFailure() {};

                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, gAsyncResourceLoading);

                if (xhr.overrideMimeType) {
                  xhr.overrideMimeType('text/plain; charset=utf-8');
                }

                xhr.onreadystatechange = function () {
                  if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status === 0) {
                      onSuccess(xhr.responseText);
                    } else {
                      onFailure();
                    }
                  }
                };

                xhr.onerror = onFailure;
                xhr.ontimeout = onFailure;

                try {
                  xhr.send(null);
                } catch (e) {
                  onFailure();
                }
              }

              function parseResource(href, lang, successCallback, failureCallback) {
                var baseURL = href.replace(/[^\/]*$/, '') || './';

                function evalString(text) {
                  if (text.lastIndexOf('\\') < 0) return text;
                  return text.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\b/g, '\b').replace(/\\f/g, '\f').replace(/\\{/g, '{').replace(/\\}/g, '}').replace(/\\"/g, '"').replace(/\\'/g, "'");
                }

                function parseProperties(text, parsedPropertiesCallback) {
                  var dictionary = {};
                  var reBlank = /^\s*|\s*$/;
                  var reComment = /^\s*#|^\s*$/;
                  var reSection = /^\s*\[(.*)\]\s*$/;
                  var reImport = /^\s*@import\s+url\((.*)\)\s*$/i;
                  var reSplit = /^([^=\s]*)\s*=\s*(.+)$/;

                  function parseRawLines(rawText, extendedSyntax, parsedRawLinesCallback) {
                    var entries = rawText.replace(reBlank, '').split(/[\r\n]+/);
                    var currentLang = '*';
                    var genericLang = lang.split('-', 1)[0];
                    var skipLang = false;
                    var match = '';

                    function nextEntry() {
                      while (true) {
                        if (!entries.length) {
                          parsedRawLinesCallback();
                          return;
                        }

                        var line = entries.shift();
                        if (reComment.test(line)) continue;

                        if (extendedSyntax) {
                          match = reSection.exec(line);

                          if (match) {
                            currentLang = match[1].toLowerCase();
                            skipLang = currentLang !== '*' && currentLang !== lang && currentLang !== genericLang;
                            continue;
                          } else if (skipLang) {
                            continue;
                          }

                          match = reImport.exec(line);

                          if (match) {
                            loadImport(baseURL + match[1], nextEntry);
                            return;
                          }
                        }

                        var tmp = line.match(reSplit);

                        if (tmp && tmp.length == 3) {
                          dictionary[tmp[1]] = evalString(tmp[2]);
                        }
                      }
                    }

                    nextEntry();
                  }

                  function loadImport(url, callback) {
                    xhrLoadText(url, function (content) {
                      parseRawLines(content, false, callback);
                    }, function () {
                      console.warn(url + ' not found.');
                      callback();
                    });
                  }

                  parseRawLines(text, true, function () {
                    parsedPropertiesCallback(dictionary);
                  });
                }

                xhrLoadText(href, function (response) {
                  gTextData += response;
                  parseProperties(response, function (data) {
                    for (var key in data) {
                      var id,
                          prop,
                          index = key.lastIndexOf('.');

                      if (index > 0) {
                        id = key.substring(0, index);
                        prop = key.substring(index + 1);
                      } else {
                        id = key;
                        prop = gTextProp;
                      }

                      if (!gL10nData[id]) {
                        gL10nData[id] = {};
                      }

                      gL10nData[id][prop] = data[key];
                    }

                    if (successCallback) {
                      successCallback();
                    }
                  });
                }, failureCallback);
              }

              function loadLocale(lang, callback) {
                if (lang) {
                  lang = lang.toLowerCase();
                }

                callback = callback || function _callback() {};

                clear();
                gLanguage = lang;
                var langLinks = getL10nResourceLinks();
                var langCount = langLinks.length;

                if (langCount === 0) {
                  var dict = getL10nDictionary();

                  if (dict && dict.locales && dict.default_locale) {
                    console.log('using the embedded JSON directory, early way out');
                    gL10nData = dict.locales[lang];

                    if (!gL10nData) {
                      var defaultLocale = dict.default_locale.toLowerCase();

                      for (var anyCaseLang in dict.locales) {
                        anyCaseLang = anyCaseLang.toLowerCase();

                        if (anyCaseLang === lang) {
                          gL10nData = dict.locales[lang];
                          break;
                        } else if (anyCaseLang === defaultLocale) {
                          gL10nData = dict.locales[defaultLocale];
                        }
                      }
                    }

                    callback();
                  } else {
                    console.log('no resource to load, early way out');
                  }

                  gReadyState = 'complete';
                  return;
                }

                var onResourceLoaded = null;
                var gResourceCount = 0;

                onResourceLoaded = function onResourceLoaded() {
                  gResourceCount++;

                  if (gResourceCount >= langCount) {
                    callback();
                    gReadyState = 'complete';
                  }
                };

                function L10nResourceLink(link) {
                  var href = link.href;

                  this.load = function (lang, callback) {
                    parseResource(href, lang, callback, function () {
                      console.warn(href + ' not found.');
                      console.warn('"' + lang + '" resource not found');
                      gLanguage = '';
                      callback();
                    });
                  };
                }

                for (var i = 0; i < langCount; i++) {
                  var resource = new L10nResourceLink(langLinks[i]);
                  resource.load(lang, onResourceLoaded);
                }
              }

              function clear() {
                gL10nData = {};
                gTextData = '';
                gLanguage = '';
              }

              function getPluralRules(lang) {
                var locales2rules = {
                  'af': 3,
                  'ak': 4,
                  'am': 4,
                  'ar': 1,
                  'asa': 3,
                  'az': 0,
                  'be': 11,
                  'bem': 3,
                  'bez': 3,
                  'bg': 3,
                  'bh': 4,
                  'bm': 0,
                  'bn': 3,
                  'bo': 0,
                  'br': 20,
                  'brx': 3,
                  'bs': 11,
                  'ca': 3,
                  'cgg': 3,
                  'chr': 3,
                  'cs': 12,
                  'cy': 17,
                  'da': 3,
                  'de': 3,
                  'dv': 3,
                  'dz': 0,
                  'ee': 3,
                  'el': 3,
                  'en': 3,
                  'eo': 3,
                  'es': 3,
                  'et': 3,
                  'eu': 3,
                  'fa': 0,
                  'ff': 5,
                  'fi': 3,
                  'fil': 4,
                  'fo': 3,
                  'fr': 5,
                  'fur': 3,
                  'fy': 3,
                  'ga': 8,
                  'gd': 24,
                  'gl': 3,
                  'gsw': 3,
                  'gu': 3,
                  'guw': 4,
                  'gv': 23,
                  'ha': 3,
                  'haw': 3,
                  'he': 2,
                  'hi': 4,
                  'hr': 11,
                  'hu': 0,
                  'id': 0,
                  'ig': 0,
                  'ii': 0,
                  'is': 3,
                  'it': 3,
                  'iu': 7,
                  'ja': 0,
                  'jmc': 3,
                  'jv': 0,
                  'ka': 0,
                  'kab': 5,
                  'kaj': 3,
                  'kcg': 3,
                  'kde': 0,
                  'kea': 0,
                  'kk': 3,
                  'kl': 3,
                  'km': 0,
                  'kn': 0,
                  'ko': 0,
                  'ksb': 3,
                  'ksh': 21,
                  'ku': 3,
                  'kw': 7,
                  'lag': 18,
                  'lb': 3,
                  'lg': 3,
                  'ln': 4,
                  'lo': 0,
                  'lt': 10,
                  'lv': 6,
                  'mas': 3,
                  'mg': 4,
                  'mk': 16,
                  'ml': 3,
                  'mn': 3,
                  'mo': 9,
                  'mr': 3,
                  'ms': 0,
                  'mt': 15,
                  'my': 0,
                  'nah': 3,
                  'naq': 7,
                  'nb': 3,
                  'nd': 3,
                  'ne': 3,
                  'nl': 3,
                  'nn': 3,
                  'no': 3,
                  'nr': 3,
                  'nso': 4,
                  'ny': 3,
                  'nyn': 3,
                  'om': 3,
                  'or': 3,
                  'pa': 3,
                  'pap': 3,
                  'pl': 13,
                  'ps': 3,
                  'pt': 3,
                  'rm': 3,
                  'ro': 9,
                  'rof': 3,
                  'ru': 11,
                  'rwk': 3,
                  'sah': 0,
                  'saq': 3,
                  'se': 7,
                  'seh': 3,
                  'ses': 0,
                  'sg': 0,
                  'sh': 11,
                  'shi': 19,
                  'sk': 12,
                  'sl': 14,
                  'sma': 7,
                  'smi': 7,
                  'smj': 7,
                  'smn': 7,
                  'sms': 7,
                  'sn': 3,
                  'so': 3,
                  'sq': 3,
                  'sr': 11,
                  'ss': 3,
                  'ssy': 3,
                  'st': 3,
                  'sv': 3,
                  'sw': 3,
                  'syr': 3,
                  'ta': 3,
                  'te': 3,
                  'teo': 3,
                  'th': 0,
                  'ti': 4,
                  'tig': 3,
                  'tk': 3,
                  'tl': 4,
                  'tn': 3,
                  'to': 0,
                  'tr': 0,
                  'ts': 3,
                  'tzm': 22,
                  'uk': 11,
                  'ur': 3,
                  've': 3,
                  'vi': 0,
                  'vun': 3,
                  'wa': 4,
                  'wae': 3,
                  'wo': 0,
                  'xh': 3,
                  'xog': 3,
                  'yo': 0,
                  'zh': 0,
                  'zu': 3
                };

                function isIn(n, list) {
                  return list.indexOf(n) !== -1;
                }

                function isBetween(n, start, end) {
                  return start <= n && n <= end;
                }

                var pluralRules = {
                  '0': function _(n) {
                    return 'other';
                  },
                  '1': function _(n) {
                    if (isBetween(n % 100, 3, 10)) return 'few';
                    if (n === 0) return 'zero';
                    if (isBetween(n % 100, 11, 99)) return 'many';
                    if (n == 2) return 'two';
                    if (n == 1) return 'one';
                    return 'other';
                  },
                  '2': function _(n) {
                    if (n !== 0 && n % 10 === 0) return 'many';
                    if (n == 2) return 'two';
                    if (n == 1) return 'one';
                    return 'other';
                  },
                  '3': function _(n) {
                    if (n == 1) return 'one';
                    return 'other';
                  },
                  '4': function _(n) {
                    if (isBetween(n, 0, 1)) return 'one';
                    return 'other';
                  },
                  '5': function _(n) {
                    if (isBetween(n, 0, 2) && n != 2) return 'one';
                    return 'other';
                  },
                  '6': function _(n) {
                    if (n === 0) return 'zero';
                    if (n % 10 == 1 && n % 100 != 11) return 'one';
                    return 'other';
                  },
                  '7': function _(n) {
                    if (n == 2) return 'two';
                    if (n == 1) return 'one';
                    return 'other';
                  },
                  '8': function _(n) {
                    if (isBetween(n, 3, 6)) return 'few';
                    if (isBetween(n, 7, 10)) return 'many';
                    if (n == 2) return 'two';
                    if (n == 1) return 'one';
                    return 'other';
                  },
                  '9': function _(n) {
                    if (n === 0 || n != 1 && isBetween(n % 100, 1, 19)) return 'few';
                    if (n == 1) return 'one';
                    return 'other';
                  },
                  '10': function _(n) {
                    if (isBetween(n % 10, 2, 9) && !isBetween(n % 100, 11, 19)) return 'few';
                    if (n % 10 == 1 && !isBetween(n % 100, 11, 19)) return 'one';
                    return 'other';
                  },
                  '11': function _(n) {
                    if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) return 'few';
                    if (n % 10 === 0 || isBetween(n % 10, 5, 9) || isBetween(n % 100, 11, 14)) return 'many';
                    if (n % 10 == 1 && n % 100 != 11) return 'one';
                    return 'other';
                  },
                  '12': function _(n) {
                    if (isBetween(n, 2, 4)) return 'few';
                    if (n == 1) return 'one';
                    return 'other';
                  },
                  '13': function _(n) {
                    if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) return 'few';
                    if (n != 1 && isBetween(n % 10, 0, 1) || isBetween(n % 10, 5, 9) || isBetween(n % 100, 12, 14)) return 'many';
                    if (n == 1) return 'one';
                    return 'other';
                  },
                  '14': function _(n) {
                    if (isBetween(n % 100, 3, 4)) return 'few';
                    if (n % 100 == 2) return 'two';
                    if (n % 100 == 1) return 'one';
                    return 'other';
                  },
                  '15': function _(n) {
                    if (n === 0 || isBetween(n % 100, 2, 10)) return 'few';
                    if (isBetween(n % 100, 11, 19)) return 'many';
                    if (n == 1) return 'one';
                    return 'other';
                  },
                  '16': function _(n) {
                    if (n % 10 == 1 && n != 11) return 'one';
                    return 'other';
                  },
                  '17': function _(n) {
                    if (n == 3) return 'few';
                    if (n === 0) return 'zero';
                    if (n == 6) return 'many';
                    if (n == 2) return 'two';
                    if (n == 1) return 'one';
                    return 'other';
                  },
                  '18': function _(n) {
                    if (n === 0) return 'zero';
                    if (isBetween(n, 0, 2) && n !== 0 && n != 2) return 'one';
                    return 'other';
                  },
                  '19': function _(n) {
                    if (isBetween(n, 2, 10)) return 'few';
                    if (isBetween(n, 0, 1)) return 'one';
                    return 'other';
                  },
                  '20': function _(n) {
                    if ((isBetween(n % 10, 3, 4) || n % 10 == 9) && !(isBetween(n % 100, 10, 19) || isBetween(n % 100, 70, 79) || isBetween(n % 100, 90, 99))) return 'few';
                    if (n % 1000000 === 0 && n !== 0) return 'many';
                    if (n % 10 == 2 && !isIn(n % 100, [12, 72, 92])) return 'two';
                    if (n % 10 == 1 && !isIn(n % 100, [11, 71, 91])) return 'one';
                    return 'other';
                  },
                  '21': function _(n) {
                    if (n === 0) return 'zero';
                    if (n == 1) return 'one';
                    return 'other';
                  },
                  '22': function _(n) {
                    if (isBetween(n, 0, 1) || isBetween(n, 11, 99)) return 'one';
                    return 'other';
                  },
                  '23': function _(n) {
                    if (isBetween(n % 10, 1, 2) || n % 20 === 0) return 'one';
                    return 'other';
                  },
                  '24': function _(n) {
                    if (isBetween(n, 3, 10) || isBetween(n, 13, 19)) return 'few';
                    if (isIn(n, [2, 12])) return 'two';
                    if (isIn(n, [1, 11])) return 'one';
                    return 'other';
                  }
                };
                var index = locales2rules[lang.replace(/-.*$/, '')];

                if (!(index in pluralRules)) {
                  console.warn('plural form unknown for [' + lang + ']');
                  return function () {
                    return 'other';
                  };
                }

                return pluralRules[index];
              }

              gMacros.plural = function (str, param, key, prop) {
                var n = parseFloat(param);
                if (isNaN(n)) return str;
                if (prop != gTextProp) return str;

                if (!gMacros._pluralRules) {
                  gMacros._pluralRules = getPluralRules(gLanguage);
                }

                var index = '[' + gMacros._pluralRules(n) + ']';

                if (n === 0 && key + '[zero]' in gL10nData) {
                  str = gL10nData[key + '[zero]'][prop];
                } else if (n == 1 && key + '[one]' in gL10nData) {
                  str = gL10nData[key + '[one]'][prop];
                } else if (n == 2 && key + '[two]' in gL10nData) {
                  str = gL10nData[key + '[two]'][prop];
                } else if (key + index in gL10nData) {
                  str = gL10nData[key + index][prop];
                } else if (key + '[other]' in gL10nData) {
                  str = gL10nData[key + '[other]'][prop];
                }

                return str;
              };

              function getL10nData(key, args, fallback) {
                var data = gL10nData[key];

                if (!data) {
                  console.warn('#' + key + ' is undefined.');

                  if (!fallback) {
                    return null;
                  }

                  data = fallback;
                }

                var rv = {};

                for (var prop in data) {
                  var str = data[prop];
                  str = substIndexes(str, args, key, prop);
                  str = substArguments(str, args, key);
                  rv[prop] = str;
                }

                return rv;
              }

              function substIndexes(str, args, key, prop) {
                var reIndex = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/;
                var reMatch = reIndex.exec(str);
                if (!reMatch || !reMatch.length) return str;
                var macroName = reMatch[1];
                var paramName = reMatch[2];
                var param;

                if (args && paramName in args) {
                  param = args[paramName];
                } else if (paramName in gL10nData) {
                  param = gL10nData[paramName];
                }

                if (macroName in gMacros) {
                  var macro = gMacros[macroName];
                  str = macro(str, param, key, prop);
                }

                return str;
              }

              function substArguments(str, args, key) {
                var reArgs = /\{\{\s*(.+?)\s*\}\}/g;
                return str.replace(reArgs, function (matched_text, arg) {
                  if (args && arg in args) {
                    return args[arg];
                  }

                  if (arg in gL10nData) {
                    return gL10nData[arg];
                  }

                  console.log('argument {{' + arg + '}} for #' + key + ' is undefined.');
                  return matched_text;
                });
              }

              function translateElement(element) {
                var l10n = getL10nAttributes(element);
                if (!l10n.id) return;
                var data = getL10nData(l10n.id, l10n.args);

                if (!data) {
                  console.warn('#' + l10n.id + ' is undefined.');
                  return;
                }

                if (data[gTextProp]) {
                  if (getChildElementCount(element) === 0) {
                    element[gTextProp] = data[gTextProp];
                  } else {
                    var children = element.childNodes;
                    var found = false;

                    for (var i = 0, l = children.length; i < l; i++) {
                      if (children[i].nodeType === 3 && /\S/.test(children[i].nodeValue)) {
                        if (found) {
                          children[i].nodeValue = '';
                        } else {
                          children[i].nodeValue = data[gTextProp];
                          found = true;
                        }
                      }
                    }

                    if (!found) {
                      var textNode = document.createTextNode(data[gTextProp]);
                      element.insertBefore(textNode, element.firstChild);
                    }
                  }

                  delete data[gTextProp];
                }

                for (var k in data) {
                  element[k] = data[k];
                }
              }

              function getChildElementCount(element) {
                if (element.children) {
                  return element.children.length;
                }

                if (typeof element.childElementCount !== 'undefined') {
                  return element.childElementCount;
                }

                var count = 0;

                for (var i = 0; i < element.childNodes.length; i++) {
                  count += element.nodeType === 1 ? 1 : 0;
                }

                return count;
              }

              function translateFragment(element) {
                element = element || document.documentElement;
                var children = getTranslatableChildren(element);
                var elementCount = children.length;

                for (var i = 0; i < elementCount; i++) {
                  translateElement(children[i]);
                }

                translateElement(element);
              }

              return {
                get: function get(key, args, fallbackString) {
                  var index = key.lastIndexOf('.');
                  var prop = gTextProp;

                  if (index > 0) {
                    prop = key.substring(index + 1);
                    key = key.substring(0, index);
                  }

                  var fallback;

                  if (fallbackString) {
                    fallback = {};
                    fallback[prop] = fallbackString;
                  }

                  var data = getL10nData(key, args, fallback);

                  if (data && prop in data) {
                    return data[prop];
                  }

                  return '{{' + key + '}}';
                },
                getData: function getData() {
                  return gL10nData;
                },
                getText: function getText() {
                  return gTextData;
                },
                getLanguage: function getLanguage() {
                  return gLanguage;
                },
                setLanguage: function setLanguage(lang, callback) {
                  loadLocale(lang, function () {
                    if (callback) callback();
                  });
                },
                getDirection: function getDirection() {
                  var rtlList = ['ar', 'he', 'fa', 'ps', 'ur'];
                  var shortCode = gLanguage.split('-', 1)[0];
                  return rtlList.indexOf(shortCode) >= 0 ? 'rtl' : 'ltr';
                },
                translate: translateFragment,
                getReadyState: function getReadyState() {
                  return gReadyState;
                },
                ready: function ready(callback) {
                  if (!callback) {
                    return;
                  } else if (gReadyState == 'complete' || gReadyState == 'interactive') {
                    window.setTimeout(function () {
                      callback();
                    });
                  } else if (document.addEventListener) {
                    document.addEventListener('localized', function once() {
                      document.removeEventListener('localized', once);
                      callback();
                    });
                  }
                }
              };
            }(window, document);
            /***/

          },
          /* 9 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PDFFindController = exports.FindState = void 0;

            var _ui_utils = __w_pdfjs_require__(3);

            var _pdfjsLib = __w_pdfjs_require__(2);

            var _pdf_find_utils = __w_pdfjs_require__(10);

            var FindState = {
              FOUND: 0,
              NOT_FOUND: 1,
              WRAPPED: 2,
              PENDING: 3
            };
            exports.FindState = FindState;
            var FIND_TIMEOUT = 250;
            var MATCH_SCROLL_OFFSET_TOP = -50;
            var MATCH_SCROLL_OFFSET_LEFT = -400;
            var CHARACTERS_TO_NORMALIZE = {
              "\u2018": "'",
              "\u2019": "'",
              "\u201A": "'",
              "\u201B": "'",
              "\u201C": '"',
              "\u201D": '"',
              "\u201E": '"',
              "\u201F": '"',
              "\xBC": "1/4",
              "\xBD": "1/2",
              "\xBE": "3/4"
            };
            var normalizationRegex = null;

            function normalize(text) {
              if (!normalizationRegex) {
                var replace = Object.keys(CHARACTERS_TO_NORMALIZE).join("");
                normalizationRegex = new RegExp("[".concat(replace, "]"), "g");
              }

              return text.replace(normalizationRegex, function (ch) {
                return CHARACTERS_TO_NORMALIZE[ch];
              });
            }

            var PDFFindController = /*#__PURE__*/function () {
              function PDFFindController(_ref45) {
                var linkService = _ref45.linkService,
                    eventBus = _ref45.eventBus;

                _classCallCheck(this, PDFFindController);

                this._linkService = linkService;
                this._eventBus = eventBus || (0, _ui_utils.getGlobalEventBus)();

                this._reset();

                eventBus._on("findbarclose", this._onFindBarClose.bind(this));
              }

              _createClass(PDFFindController, [{
                key: "setDocument",
                value: function setDocument(pdfDocument) {
                  if (this._pdfDocument) {
                    this._reset();
                  }

                  if (!pdfDocument) {
                    return;
                  }

                  this._pdfDocument = pdfDocument;

                  this._firstPageCapability.resolve();
                }
              }, {
                key: "executeCommand",
                value: function executeCommand(cmd, state) {
                  var _this61 = this;

                  if (!state) {
                    return;
                  }

                  var pdfDocument = this._pdfDocument;

                  if (this._state === null || this._shouldDirtyMatch(cmd, state)) {
                    this._dirtyMatch = true;
                  }

                  this._state = state;

                  if (cmd !== "findhighlightallchange") {
                    this._updateUIState(FindState.PENDING);
                  }

                  this._firstPageCapability.promise.then(function () {
                    if (!_this61._pdfDocument || pdfDocument && _this61._pdfDocument !== pdfDocument) {
                      return;
                    }

                    _this61._extractText();

                    var findbarClosed = !_this61._highlightMatches;
                    var pendingTimeout = !!_this61._findTimeout;

                    if (_this61._findTimeout) {
                      clearTimeout(_this61._findTimeout);
                      _this61._findTimeout = null;
                    }

                    if (cmd === "find") {
                      _this61._findTimeout = setTimeout(function () {
                        _this61._nextMatch();

                        _this61._findTimeout = null;
                      }, FIND_TIMEOUT);
                    } else if (_this61._dirtyMatch) {
                      _this61._nextMatch();
                    } else if (cmd === "findagain") {
                      _this61._nextMatch();

                      if (findbarClosed && _this61._state.highlightAll) {
                        _this61._updateAllPages();
                      }
                    } else if (cmd === "findhighlightallchange") {
                      if (pendingTimeout) {
                        _this61._nextMatch();
                      } else {
                        _this61._highlightMatches = true;
                      }

                      _this61._updateAllPages();
                    } else {
                      _this61._nextMatch();
                    }
                  });
                }
              }, {
                key: "scrollMatchIntoView",
                value: function scrollMatchIntoView(_ref46) {
                  var _ref46$element = _ref46.element,
                      element = _ref46$element === void 0 ? null : _ref46$element,
                      _ref46$pageIndex = _ref46.pageIndex,
                      pageIndex = _ref46$pageIndex === void 0 ? -1 : _ref46$pageIndex,
                      _ref46$matchIndex = _ref46.matchIndex,
                      matchIndex = _ref46$matchIndex === void 0 ? -1 : _ref46$matchIndex;

                  if (!this._scrollMatches || !element) {
                    return;
                  } else if (matchIndex === -1 || matchIndex !== this._selected.matchIdx) {
                    return;
                  } else if (pageIndex === -1 || pageIndex !== this._selected.pageIdx) {
                    return;
                  }

                  this._scrollMatches = false;
                  var spot = {
                    top: MATCH_SCROLL_OFFSET_TOP,
                    left: MATCH_SCROLL_OFFSET_LEFT
                  };
                  (0, _ui_utils.scrollIntoView)(element, spot, true);
                }
              }, {
                key: "_reset",
                value: function _reset() {
                  this._highlightMatches = false;
                  this._scrollMatches = false;
                  this._pdfDocument = null;
                  this._pageMatches = [];
                  this._pageMatchesLength = [];
                  this._state = null;
                  this._selected = {
                    pageIdx: -1,
                    matchIdx: -1
                  };
                  this._offset = {
                    pageIdx: null,
                    matchIdx: null,
                    wrapped: false
                  };
                  this._extractTextPromises = [];
                  this._pageContents = [];
                  this._matchesCountTotal = 0;
                  this._pagesToSearch = null;
                  this._pendingFindMatches = Object.create(null);
                  this._resumePageIdx = null;
                  this._dirtyMatch = false;
                  clearTimeout(this._findTimeout);
                  this._findTimeout = null;
                  this._firstPageCapability = (0, _pdfjsLib.createPromiseCapability)();
                }
              }, {
                key: "_shouldDirtyMatch",
                value: function _shouldDirtyMatch(cmd, state) {
                  if (state.query !== this._state.query) {
                    return true;
                  }

                  switch (cmd) {
                    case "findagain":
                      var pageNumber = this._selected.pageIdx + 1;
                      var linkService = this._linkService;

                      if (pageNumber >= 1 && pageNumber <= linkService.pagesCount && pageNumber !== linkService.page && !linkService.isPageVisible(pageNumber)) {
                        return true;
                      }

                      return false;

                    case "findhighlightallchange":
                      return false;
                  }

                  return true;
                }
              }, {
                key: "_prepareMatches",
                value: function _prepareMatches(matchesWithLength, matches, matchesLength) {
                  function isSubTerm(currentIndex) {
                    var currentElem = matchesWithLength[currentIndex];
                    var nextElem = matchesWithLength[currentIndex + 1];

                    if (currentIndex < matchesWithLength.length - 1 && currentElem.match === nextElem.match) {
                      currentElem.skipped = true;
                      return true;
                    }

                    for (var i = currentIndex - 1; i >= 0; i--) {
                      var prevElem = matchesWithLength[i];

                      if (prevElem.skipped) {
                        continue;
                      }

                      if (prevElem.match + prevElem.matchLength < currentElem.match) {
                        break;
                      }

                      if (prevElem.match + prevElem.matchLength >= currentElem.match + currentElem.matchLength) {
                        currentElem.skipped = true;
                        return true;
                      }
                    }

                    return false;
                  }

                  matchesWithLength.sort(function (a, b) {
                    return a.match === b.match ? a.matchLength - b.matchLength : a.match - b.match;
                  });

                  for (var i = 0, len = matchesWithLength.length; i < len; i++) {
                    if (isSubTerm(i)) {
                      continue;
                    }

                    matches.push(matchesWithLength[i].match);
                    matchesLength.push(matchesWithLength[i].matchLength);
                  }
                }
              }, {
                key: "_isEntireWord",
                value: function _isEntireWord(content, startIdx, length) {
                  if (startIdx > 0) {
                    var first = content.charCodeAt(startIdx);
                    var limit = content.charCodeAt(startIdx - 1);

                    if ((0, _pdf_find_utils.getCharacterType)(first) === (0, _pdf_find_utils.getCharacterType)(limit)) {
                      return false;
                    }
                  }

                  var endIdx = startIdx + length - 1;

                  if (endIdx < content.length - 1) {
                    var last = content.charCodeAt(endIdx);

                    var _limit = content.charCodeAt(endIdx + 1);

                    if ((0, _pdf_find_utils.getCharacterType)(last) === (0, _pdf_find_utils.getCharacterType)(_limit)) {
                      return false;
                    }
                  }

                  return true;
                }
              }, {
                key: "_calculatePhraseMatch",
                value: function _calculatePhraseMatch(query, pageIndex, pageContent, entireWord) {
                  var matches = [];
                  var queryLen = query.length;
                  var matchIdx = -queryLen;

                  while (true) {
                    matchIdx = pageContent.indexOf(query, matchIdx + queryLen);

                    if (matchIdx === -1) {
                      break;
                    }

                    if (entireWord && !this._isEntireWord(pageContent, matchIdx, queryLen)) {
                      continue;
                    }

                    matches.push(matchIdx);
                  }

                  this._pageMatches[pageIndex] = matches;
                }
              }, {
                key: "_calculateWordMatch",
                value: function _calculateWordMatch(query, pageIndex, pageContent, entireWord) {
                  var matchesWithLength = [];
                  var queryArray = query.match(/\S+/g);

                  for (var i = 0, len = queryArray.length; i < len; i++) {
                    var subquery = queryArray[i];
                    var subqueryLen = subquery.length;
                    var matchIdx = -subqueryLen;

                    while (true) {
                      matchIdx = pageContent.indexOf(subquery, matchIdx + subqueryLen);

                      if (matchIdx === -1) {
                        break;
                      }

                      if (entireWord && !this._isEntireWord(pageContent, matchIdx, subqueryLen)) {
                        continue;
                      }

                      matchesWithLength.push({
                        match: matchIdx,
                        matchLength: subqueryLen,
                        skipped: false
                      });
                    }
                  }

                  this._pageMatchesLength[pageIndex] = [];
                  this._pageMatches[pageIndex] = [];

                  this._prepareMatches(matchesWithLength, this._pageMatches[pageIndex], this._pageMatchesLength[pageIndex]);
                }
              }, {
                key: "_calculateMatch",
                value: function _calculateMatch(pageIndex) {
                  var pageContent = this._pageContents[pageIndex];
                  var query = this._query;
                  var _this$_state = this._state,
                      caseSensitive = _this$_state.caseSensitive,
                      entireWord = _this$_state.entireWord,
                      phraseSearch = _this$_state.phraseSearch;

                  if (query.length === 0) {
                    return;
                  }

                  if (!caseSensitive) {
                    pageContent = pageContent.toLowerCase();
                    query = query.toLowerCase();
                  }

                  if (phraseSearch) {
                    this._calculatePhraseMatch(query, pageIndex, pageContent, entireWord);
                  } else {
                    this._calculateWordMatch(query, pageIndex, pageContent, entireWord);
                  }

                  if (this._state.highlightAll) {
                    this._updatePage(pageIndex);
                  }

                  if (this._resumePageIdx === pageIndex) {
                    this._resumePageIdx = null;

                    this._nextPageMatch();
                  }

                  var pageMatchesCount = this._pageMatches[pageIndex].length;

                  if (pageMatchesCount > 0) {
                    this._matchesCountTotal += pageMatchesCount;

                    this._updateUIResultsCount();
                  }
                }
              }, {
                key: "_extractText",
                value: function _extractText() {
                  var _this62 = this;

                  if (this._extractTextPromises.length > 0) {
                    return;
                  }

                  var promise = Promise.resolve();

                  var _loop2 = function _loop2(i, ii) {
                    var extractTextCapability = (0, _pdfjsLib.createPromiseCapability)();
                    _this62._extractTextPromises[i] = extractTextCapability.promise;
                    promise = promise.then(function () {
                      return _this62._pdfDocument.getPage(i + 1).then(function (pdfPage) {
                        return pdfPage.getTextContent({
                          normalizeWhitespace: true
                        });
                      }).then(function (textContent) {
                        var textItems = textContent.items;
                        var strBuf = [];

                        for (var j = 0, jj = textItems.length; j < jj; j++) {
                          strBuf.push(textItems[j].str);
                        }

                        _this62._pageContents[i] = normalize(strBuf.join(""));
                        extractTextCapability.resolve(i);
                      }, function (reason) {
                        console.error("Unable to get text content for page ".concat(i + 1), reason);
                        _this62._pageContents[i] = "";
                        extractTextCapability.resolve(i);
                      });
                    });
                  };

                  for (var i = 0, ii = this._linkService.pagesCount; i < ii; i++) {
                    _loop2(i, ii);
                  }
                }
              }, {
                key: "_updatePage",
                value: function _updatePage(index) {
                  if (this._scrollMatches && this._selected.pageIdx === index) {
                    this._linkService.page = index + 1;
                  }

                  this._eventBus.dispatch("updatetextlayermatches", {
                    source: this,
                    pageIndex: index
                  });
                }
              }, {
                key: "_updateAllPages",
                value: function _updateAllPages() {
                  this._eventBus.dispatch("updatetextlayermatches", {
                    source: this,
                    pageIndex: -1
                  });
                }
              }, {
                key: "_nextMatch",
                value: function _nextMatch() {
                  var _this63 = this;

                  var previous = this._state.findPrevious;
                  var currentPageIndex = this._linkService.page - 1;
                  var numPages = this._linkService.pagesCount;
                  this._highlightMatches = true;

                  if (this._dirtyMatch) {
                    this._dirtyMatch = false;
                    this._selected.pageIdx = this._selected.matchIdx = -1;
                    this._offset.pageIdx = currentPageIndex;
                    this._offset.matchIdx = null;
                    this._offset.wrapped = false;
                    this._resumePageIdx = null;
                    this._pageMatches.length = 0;
                    this._pageMatchesLength.length = 0;
                    this._matchesCountTotal = 0;

                    this._updateAllPages();

                    for (var i = 0; i < numPages; i++) {
                      if (this._pendingFindMatches[i] === true) {
                        continue;
                      }

                      this._pendingFindMatches[i] = true;

                      this._extractTextPromises[i].then(function (pageIdx) {
                        delete _this63._pendingFindMatches[pageIdx];

                        _this63._calculateMatch(pageIdx);
                      });
                    }
                  }

                  if (this._query === "") {
                    this._updateUIState(FindState.FOUND);

                    return;
                  }

                  if (this._resumePageIdx) {
                    return;
                  }

                  var offset = this._offset;
                  this._pagesToSearch = numPages;

                  if (offset.matchIdx !== null) {
                    var numPageMatches = this._pageMatches[offset.pageIdx].length;

                    if (!previous && offset.matchIdx + 1 < numPageMatches || previous && offset.matchIdx > 0) {
                      offset.matchIdx = previous ? offset.matchIdx - 1 : offset.matchIdx + 1;

                      this._updateMatch(true);

                      return;
                    }

                    this._advanceOffsetPage(previous);
                  }

                  this._nextPageMatch();
                }
              }, {
                key: "_matchesReady",
                value: function _matchesReady(matches) {
                  var offset = this._offset;
                  var numMatches = matches.length;
                  var previous = this._state.findPrevious;

                  if (numMatches) {
                    offset.matchIdx = previous ? numMatches - 1 : 0;

                    this._updateMatch(true);

                    return true;
                  }

                  this._advanceOffsetPage(previous);

                  if (offset.wrapped) {
                    offset.matchIdx = null;

                    if (this._pagesToSearch < 0) {
                      this._updateMatch(false);

                      return true;
                    }
                  }

                  return false;
                }
              }, {
                key: "_nextPageMatch",
                value: function _nextPageMatch() {
                  if (this._resumePageIdx !== null) {
                    console.error("There can only be one pending page.");
                  }

                  var matches = null;

                  do {
                    var pageIdx = this._offset.pageIdx;
                    matches = this._pageMatches[pageIdx];

                    if (!matches) {
                      this._resumePageIdx = pageIdx;
                      break;
                    }
                  } while (!this._matchesReady(matches));
                }
              }, {
                key: "_advanceOffsetPage",
                value: function _advanceOffsetPage(previous) {
                  var offset = this._offset;
                  var numPages = this._linkService.pagesCount;
                  offset.pageIdx = previous ? offset.pageIdx - 1 : offset.pageIdx + 1;
                  offset.matchIdx = null;
                  this._pagesToSearch--;

                  if (offset.pageIdx >= numPages || offset.pageIdx < 0) {
                    offset.pageIdx = previous ? numPages - 1 : 0;
                    offset.wrapped = true;
                  }
                }
              }, {
                key: "_updateMatch",
                value: function _updateMatch() {
                  var found = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                  var state = FindState.NOT_FOUND;
                  var wrapped = this._offset.wrapped;
                  this._offset.wrapped = false;

                  if (found) {
                    var previousPage = this._selected.pageIdx;
                    this._selected.pageIdx = this._offset.pageIdx;
                    this._selected.matchIdx = this._offset.matchIdx;
                    state = wrapped ? FindState.WRAPPED : FindState.FOUND;

                    if (previousPage !== -1 && previousPage !== this._selected.pageIdx) {
                      this._updatePage(previousPage);
                    }
                  }

                  this._updateUIState(state, this._state.findPrevious);

                  if (this._selected.pageIdx !== -1) {
                    this._scrollMatches = true;

                    this._updatePage(this._selected.pageIdx);
                  }
                }
              }, {
                key: "_onFindBarClose",
                value: function _onFindBarClose(evt) {
                  var _this64 = this;

                  var pdfDocument = this._pdfDocument;

                  this._firstPageCapability.promise.then(function () {
                    if (!_this64._pdfDocument || pdfDocument && _this64._pdfDocument !== pdfDocument) {
                      return;
                    }

                    if (_this64._findTimeout) {
                      clearTimeout(_this64._findTimeout);
                      _this64._findTimeout = null;
                    }

                    if (_this64._resumePageIdx) {
                      _this64._resumePageIdx = null;
                      _this64._dirtyMatch = true;
                    }

                    _this64._updateUIState(FindState.FOUND);

                    _this64._highlightMatches = false;

                    _this64._updateAllPages();
                  });
                }
              }, {
                key: "_requestMatchesCount",
                value: function _requestMatchesCount() {
                  var _this$_selected = this._selected,
                      pageIdx = _this$_selected.pageIdx,
                      matchIdx = _this$_selected.matchIdx;
                  var current = 0,
                      total = this._matchesCountTotal;

                  if (matchIdx !== -1) {
                    for (var i = 0; i < pageIdx; i++) {
                      current += this._pageMatches[i] && this._pageMatches[i].length || 0;
                    }

                    current += matchIdx + 1;
                  }

                  if (current < 1 || current > total) {
                    current = total = 0;
                  }

                  return {
                    current: current,
                    total: total
                  };
                }
              }, {
                key: "_updateUIResultsCount",
                value: function _updateUIResultsCount() {
                  this._eventBus.dispatch("updatefindmatchescount", {
                    source: this,
                    matchesCount: this._requestMatchesCount()
                  });
                }
              }, {
                key: "_updateUIState",
                value: function _updateUIState(state, previous) {
                  this._eventBus.dispatch("updatefindcontrolstate", {
                    source: this,
                    state: state,
                    previous: previous,
                    matchesCount: this._requestMatchesCount()
                  });
                }
              }, {
                key: "highlightMatches",
                get: function get() {
                  return this._highlightMatches;
                }
              }, {
                key: "pageMatches",
                get: function get() {
                  return this._pageMatches;
                }
              }, {
                key: "pageMatchesLength",
                get: function get() {
                  return this._pageMatchesLength;
                }
              }, {
                key: "selected",
                get: function get() {
                  return this._selected;
                }
              }, {
                key: "state",
                get: function get() {
                  return this._state;
                }
              }, {
                key: "_query",
                get: function get() {
                  if (this._state.query !== this._rawQuery) {
                    this._rawQuery = this._state.query;
                    this._normalizedQuery = normalize(this._state.query);
                  }

                  return this._normalizedQuery;
                }
              }]);

              return PDFFindController;
            }();

            exports.PDFFindController = PDFFindController;
            /***/
          },
          /* 10 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.getCharacterType = getCharacterType;
            exports.CharacterType = void 0;
            var CharacterType = {
              SPACE: 0,
              ALPHA_LETTER: 1,
              PUNCT: 2,
              HAN_LETTER: 3,
              KATAKANA_LETTER: 4,
              HIRAGANA_LETTER: 5,
              HALFWIDTH_KATAKANA_LETTER: 6,
              THAI_LETTER: 7
            };
            exports.CharacterType = CharacterType;

            function isAlphabeticalScript(charCode) {
              return charCode < 0x2e80;
            }

            function isAscii(charCode) {
              return (charCode & 0xff80) === 0;
            }

            function isAsciiAlpha(charCode) {
              return charCode >= 0x61 && charCode <= 0x7a || charCode >= 0x41 && charCode <= 0x5a;
            }

            function isAsciiDigit(charCode) {
              return charCode >= 0x30 && charCode <= 0x39;
            }

            function isAsciiSpace(charCode) {
              return charCode === 0x20 || charCode === 0x09 || charCode === 0x0d || charCode === 0x0a;
            }

            function isHan(charCode) {
              return charCode >= 0x3400 && charCode <= 0x9fff || charCode >= 0xf900 && charCode <= 0xfaff;
            }

            function isKatakana(charCode) {
              return charCode >= 0x30a0 && charCode <= 0x30ff;
            }

            function isHiragana(charCode) {
              return charCode >= 0x3040 && charCode <= 0x309f;
            }

            function isHalfwidthKatakana(charCode) {
              return charCode >= 0xff60 && charCode <= 0xff9f;
            }

            function isThai(charCode) {
              return (charCode & 0xff80) === 0x0e00;
            }

            function getCharacterType(charCode) {
              if (isAlphabeticalScript(charCode)) {
                if (isAscii(charCode)) {
                  if (isAsciiSpace(charCode)) {
                    return CharacterType.SPACE;
                  } else if (isAsciiAlpha(charCode) || isAsciiDigit(charCode) || charCode === 0x5f) {
                    return CharacterType.ALPHA_LETTER;
                  }

                  return CharacterType.PUNCT;
                } else if (isThai(charCode)) {
                  return CharacterType.THAI_LETTER;
                } else if (charCode === 0xa0) {
                  return CharacterType.SPACE;
                }

                return CharacterType.ALPHA_LETTER;
              }

              if (isHan(charCode)) {
                return CharacterType.HAN_LETTER;
              } else if (isKatakana(charCode)) {
                return CharacterType.KATAKANA_LETTER;
              } else if (isHiragana(charCode)) {
                return CharacterType.HIRAGANA_LETTER;
              } else if (isHalfwidthKatakana(charCode)) {
                return CharacterType.HALFWIDTH_KATAKANA_LETTER;
              }

              return CharacterType.ALPHA_LETTER;
            }
            /***/

          },
          /* 11 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.isDestHashesEqual = isDestHashesEqual;
            exports.isDestArraysEqual = isDestArraysEqual;
            exports.PDFHistory = void 0;

            var _ui_utils = __w_pdfjs_require__(3);

            var HASH_CHANGE_TIMEOUT = 1000;
            var POSITION_UPDATED_THRESHOLD = 50;
            var UPDATE_VIEWAREA_TIMEOUT = 1000;

            function getCurrentHash() {
              return document.location.hash;
            }

            var PDFHistory = /*#__PURE__*/function () {
              function PDFHistory(_ref47) {
                var _this65 = this;

                var linkService = _ref47.linkService,
                    eventBus = _ref47.eventBus;

                _classCallCheck(this, PDFHistory);

                this.linkService = linkService;
                this.eventBus = eventBus || (0, _ui_utils.getGlobalEventBus)();
                this._initialized = false;
                this._fingerprint = "";
                this.reset();
                this._boundEvents = null;
                this._isViewerInPresentationMode = false;

                this.eventBus._on("presentationmodechanged", function (evt) {
                  _this65._isViewerInPresentationMode = evt.active || evt.switchInProgress;
                });

                this.eventBus._on("pagesinit", function () {
                  _this65._isPagesLoaded = false;

                  var onPagesLoaded = function onPagesLoaded(evt) {
                    _this65.eventBus._off("pagesloaded", onPagesLoaded);

                    _this65._isPagesLoaded = !!evt.pagesCount;
                  };

                  _this65.eventBus._on("pagesloaded", onPagesLoaded);
                });
              }

              _createClass(PDFHistory, [{
                key: "initialize",
                value: function initialize(_ref48) {
                  var fingerprint = _ref48.fingerprint,
                      _ref48$resetHistory = _ref48.resetHistory,
                      resetHistory = _ref48$resetHistory === void 0 ? false : _ref48$resetHistory,
                      _ref48$updateUrl = _ref48.updateUrl,
                      updateUrl = _ref48$updateUrl === void 0 ? false : _ref48$updateUrl;

                  if (!fingerprint || typeof fingerprint !== "string") {
                    console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.');
                    return;
                  }

                  if (this._initialized) {
                    this.reset();
                  }

                  var reInitialized = this._fingerprint !== "" && this._fingerprint !== fingerprint;
                  this._fingerprint = fingerprint;
                  this._updateUrl = updateUrl === true;
                  this._initialized = true;

                  this._bindEvents();

                  var state = window.history.state;
                  this._popStateInProgress = false;
                  this._blockHashChange = 0;
                  this._currentHash = getCurrentHash();
                  this._numPositionUpdates = 0;
                  this._uid = this._maxUid = 0;
                  this._destination = null;
                  this._position = null;

                  if (!this._isValidState(state, true) || resetHistory) {
                    var _this$_parseCurrentHa = this._parseCurrentHash(),
                        hash = _this$_parseCurrentHa.hash,
                        page = _this$_parseCurrentHa.page,
                        rotation = _this$_parseCurrentHa.rotation;

                    if (!hash || reInitialized || resetHistory) {
                      this._pushOrReplaceState(null, true);

                      return;
                    }

                    this._pushOrReplaceState({
                      hash: hash,
                      page: page,
                      rotation: rotation
                    }, true);

                    return;
                  }

                  var destination = state.destination;

                  this._updateInternalState(destination, state.uid, true);

                  if (this._uid > this._maxUid) {
                    this._maxUid = this._uid;
                  }

                  if (destination.rotation !== undefined) {
                    this._initialRotation = destination.rotation;
                  }

                  if (destination.dest) {
                    this._initialBookmark = JSON.stringify(destination.dest);
                    this._destination.page = null;
                  } else if (destination.hash) {
                    this._initialBookmark = destination.hash;
                  } else if (destination.page) {
                    this._initialBookmark = "page=".concat(destination.page);
                  }
                }
              }, {
                key: "reset",
                value: function reset() {
                  if (this._initialized) {
                    this._pageHide();

                    this._initialized = false;

                    this._unbindEvents();
                  }

                  if (this._updateViewareaTimeout) {
                    clearTimeout(this._updateViewareaTimeout);
                    this._updateViewareaTimeout = null;
                  }

                  this._initialBookmark = null;
                  this._initialRotation = null;
                }
              }, {
                key: "push",
                value: function push(_ref49) {
                  var _this66 = this;

                  var _ref49$namedDest = _ref49.namedDest,
                      namedDest = _ref49$namedDest === void 0 ? null : _ref49$namedDest,
                      explicitDest = _ref49.explicitDest,
                      pageNumber = _ref49.pageNumber;

                  if (!this._initialized) {
                    return;
                  }

                  if (namedDest && typeof namedDest !== "string") {
                    console.error("PDFHistory.push: " + "\"".concat(namedDest, "\" is not a valid namedDest parameter."));
                    return;
                  } else if (!Array.isArray(explicitDest)) {
                    console.error("PDFHistory.push: " + "\"".concat(explicitDest, "\" is not a valid explicitDest parameter."));
                    return;
                  } else if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.linkService.pagesCount)) {
                    if (pageNumber !== null || this._destination) {
                      console.error("PDFHistory.push: " + "\"".concat(pageNumber, "\" is not a valid pageNumber parameter."));
                      return;
                    }
                  }

                  var hash = namedDest || JSON.stringify(explicitDest);

                  if (!hash) {
                    return;
                  }

                  var forceReplace = false;

                  if (this._destination && (isDestHashesEqual(this._destination.hash, hash) || isDestArraysEqual(this._destination.dest, explicitDest))) {
                    if (this._destination.page) {
                      return;
                    }

                    forceReplace = true;
                  }

                  if (this._popStateInProgress && !forceReplace) {
                    return;
                  }

                  this._pushOrReplaceState({
                    dest: explicitDest,
                    hash: hash,
                    page: pageNumber,
                    rotation: this.linkService.rotation
                  }, forceReplace);

                  if (!this._popStateInProgress) {
                    this._popStateInProgress = true;
                    Promise.resolve().then(function () {
                      _this66._popStateInProgress = false;
                    });
                  }
                }
              }, {
                key: "pushCurrentPosition",
                value: function pushCurrentPosition() {
                  if (!this._initialized || this._popStateInProgress) {
                    return;
                  }

                  this._tryPushCurrentPosition();
                }
              }, {
                key: "back",
                value: function back() {
                  if (!this._initialized || this._popStateInProgress) {
                    return;
                  }

                  var state = window.history.state;

                  if (this._isValidState(state) && state.uid > 0) {
                    window.history.back();
                  }
                }
              }, {
                key: "forward",
                value: function forward() {
                  if (!this._initialized || this._popStateInProgress) {
                    return;
                  }

                  var state = window.history.state;

                  if (this._isValidState(state) && state.uid < this._maxUid) {
                    window.history.forward();
                  }
                }
              }, {
                key: "_pushOrReplaceState",
                value: function _pushOrReplaceState(destination) {
                  var forceReplace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                  var shouldReplace = forceReplace || !this._destination;
                  var newState = {
                    fingerprint: this._fingerprint,
                    uid: shouldReplace ? this._uid : this._uid + 1,
                    destination: destination
                  };

                  this._updateInternalState(destination, newState.uid);

                  var newUrl;

                  if (this._updateUrl && destination && destination.hash) {
                    var baseUrl = document.location.href.split("#")[0];

                    if (!baseUrl.startsWith("file://")) {
                      newUrl = "".concat(baseUrl, "#").concat(destination.hash);
                    }
                  }

                  if (shouldReplace) {
                    window.history.replaceState(newState, "", newUrl);
                  } else {
                    this._maxUid = this._uid;
                    window.history.pushState(newState, "", newUrl);
                  }
                }
              }, {
                key: "_tryPushCurrentPosition",
                value: function _tryPushCurrentPosition() {
                  var temporary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                  if (!this._position) {
                    return;
                  }

                  var position = this._position;

                  if (temporary) {
                    position = Object.assign(Object.create(null), this._position);
                    position.temporary = true;
                  }

                  if (!this._destination) {
                    this._pushOrReplaceState(position);

                    return;
                  }

                  if (this._destination.temporary) {
                    this._pushOrReplaceState(position, true);

                    return;
                  }

                  if (this._destination.hash === position.hash) {
                    return;
                  }

                  if (!this._destination.page && (POSITION_UPDATED_THRESHOLD <= 0 || this._numPositionUpdates <= POSITION_UPDATED_THRESHOLD)) {
                    return;
                  }

                  var forceReplace = false;

                  if (this._destination.page >= position.first && this._destination.page <= position.page) {
                    if (this._destination.dest || !this._destination.first) {
                      return;
                    }

                    forceReplace = true;
                  }

                  this._pushOrReplaceState(position, forceReplace);
                }
              }, {
                key: "_isValidState",
                value: function _isValidState(state) {
                  var checkReload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                  if (!state) {
                    return false;
                  }

                  if (state.fingerprint !== this._fingerprint) {
                    if (checkReload) {
                      if (typeof state.fingerprint !== "string" || state.fingerprint.length !== this._fingerprint.length) {
                        return false;
                      }

                      var _performance$getEntri = performance.getEntriesByType("navigation"),
                          _performance$getEntri2 = _slicedToArray(_performance$getEntri, 1),
                          perfEntry = _performance$getEntri2[0];

                      if (!perfEntry || perfEntry.type !== "reload") {
                        return false;
                      }
                    } else {
                      return false;
                    }
                  }

                  if (!Number.isInteger(state.uid) || state.uid < 0) {
                    return false;
                  }

                  if (state.destination === null || typeof state.destination !== "object") {
                    return false;
                  }

                  return true;
                }
              }, {
                key: "_updateInternalState",
                value: function _updateInternalState(destination, uid) {
                  var removeTemporary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                  if (this._updateViewareaTimeout) {
                    clearTimeout(this._updateViewareaTimeout);
                    this._updateViewareaTimeout = null;
                  }

                  if (removeTemporary && destination && destination.temporary) {
                    delete destination.temporary;
                  }

                  this._destination = destination;
                  this._uid = uid;
                  this._numPositionUpdates = 0;
                }
              }, {
                key: "_parseCurrentHash",
                value: function _parseCurrentHash() {
                  var hash = unescape(getCurrentHash()).substring(1);
                  var page = (0, _ui_utils.parseQueryString)(hash).page | 0;

                  if (!(Number.isInteger(page) && page > 0 && page <= this.linkService.pagesCount)) {
                    page = null;
                  }

                  return {
                    hash: hash,
                    page: page,
                    rotation: this.linkService.rotation
                  };
                }
              }, {
                key: "_updateViewarea",
                value: function _updateViewarea(_ref50) {
                  var _this67 = this;

                  var location = _ref50.location;

                  if (this._updateViewareaTimeout) {
                    clearTimeout(this._updateViewareaTimeout);
                    this._updateViewareaTimeout = null;
                  }

                  this._position = {
                    hash: this._isViewerInPresentationMode ? "page=".concat(location.pageNumber) : location.pdfOpenParams.substring(1),
                    page: this.linkService.page,
                    first: location.pageNumber,
                    rotation: location.rotation
                  };

                  if (this._popStateInProgress) {
                    return;
                  }

                  if (POSITION_UPDATED_THRESHOLD > 0 && this._isPagesLoaded && this._destination && !this._destination.page) {
                    this._numPositionUpdates++;
                  }

                  if (UPDATE_VIEWAREA_TIMEOUT > 0) {
                    this._updateViewareaTimeout = setTimeout(function () {
                      if (!_this67._popStateInProgress) {
                        _this67._tryPushCurrentPosition(true);
                      }

                      _this67._updateViewareaTimeout = null;
                    }, UPDATE_VIEWAREA_TIMEOUT);
                  }
                }
              }, {
                key: "_popState",
                value: function _popState(_ref51) {
                  var _this68 = this;

                  var state = _ref51.state;
                  var newHash = getCurrentHash(),
                      hashChanged = this._currentHash !== newHash;
                  this._currentHash = newHash;

                  if (!state) {
                    this._uid++;

                    var _this$_parseCurrentHa2 = this._parseCurrentHash(),
                        hash = _this$_parseCurrentHa2.hash,
                        page = _this$_parseCurrentHa2.page,
                        rotation = _this$_parseCurrentHa2.rotation;

                    this._pushOrReplaceState({
                      hash: hash,
                      page: page,
                      rotation: rotation
                    }, true);

                    return;
                  }

                  if (!this._isValidState(state)) {
                    return;
                  }

                  this._popStateInProgress = true;

                  if (hashChanged) {
                    this._blockHashChange++;
                    (0, _ui_utils.waitOnEventOrTimeout)({
                      target: window,
                      name: "hashchange",
                      delay: HASH_CHANGE_TIMEOUT
                    }).then(function () {
                      _this68._blockHashChange--;
                    });
                  }

                  var destination = state.destination;

                  this._updateInternalState(destination, state.uid, true);

                  if (this._uid > this._maxUid) {
                    this._maxUid = this._uid;
                  }

                  if ((0, _ui_utils.isValidRotation)(destination.rotation)) {
                    this.linkService.rotation = destination.rotation;
                  }

                  if (destination.dest) {
                    this.linkService.navigateTo(destination.dest);
                  } else if (destination.hash) {
                    this.linkService.setHash(destination.hash);
                  } else if (destination.page) {
                    this.linkService.page = destination.page;
                  }

                  Promise.resolve().then(function () {
                    _this68._popStateInProgress = false;
                  });
                }
              }, {
                key: "_pageHide",
                value: function _pageHide() {
                  if (!this._destination || this._destination.temporary) {
                    this._tryPushCurrentPosition();
                  }
                }
              }, {
                key: "_bindEvents",
                value: function _bindEvents() {
                  if (this._boundEvents) {
                    return;
                  }

                  this._boundEvents = {
                    updateViewarea: this._updateViewarea.bind(this),
                    popState: this._popState.bind(this),
                    pageHide: this._pageHide.bind(this)
                  };

                  this.eventBus._on("updateviewarea", this._boundEvents.updateViewarea);

                  window.addEventListener("popstate", this._boundEvents.popState);
                  window.addEventListener("pagehide", this._boundEvents.pageHide);
                }
              }, {
                key: "_unbindEvents",
                value: function _unbindEvents() {
                  if (!this._boundEvents) {
                    return;
                  }

                  this.eventBus._off("updateviewarea", this._boundEvents.updateViewarea);

                  window.removeEventListener("popstate", this._boundEvents.popState);
                  window.removeEventListener("pagehide", this._boundEvents.pageHide);
                  this._boundEvents = null;
                }
              }, {
                key: "popStateInProgress",
                get: function get() {
                  return this._initialized && (this._popStateInProgress || this._blockHashChange > 0);
                }
              }, {
                key: "initialBookmark",
                get: function get() {
                  return this._initialized ? this._initialBookmark : null;
                }
              }, {
                key: "initialRotation",
                get: function get() {
                  return this._initialized ? this._initialRotation : null;
                }
              }]);

              return PDFHistory;
            }();

            exports.PDFHistory = PDFHistory;

            function isDestHashesEqual(destHash, pushHash) {
              if (typeof destHash !== "string" || typeof pushHash !== "string") {
                return false;
              }

              if (destHash === pushHash) {
                return true;
              }

              var _ref52 = (0, _ui_utils.parseQueryString)(destHash),
                  nameddest = _ref52.nameddest;

              if (nameddest === pushHash) {
                return true;
              }

              return false;
            }

            function isDestArraysEqual(firstDest, secondDest) {
              function isEntryEqual(first, second) {
                if (typeof first !== typeof second) {
                  return false;
                }

                if (Array.isArray(first) || Array.isArray(second)) {
                  return false;
                }

                if (first !== null && typeof first === "object" && second !== null) {
                  if (Object.keys(first).length !== Object.keys(second).length) {
                    return false;
                  }

                  for (var key in first) {
                    if (!isEntryEqual(first[key], second[key])) {
                      return false;
                    }
                  }

                  return true;
                }

                return first === second || Number.isNaN(first) && Number.isNaN(second);
              }

              if (!(Array.isArray(firstDest) && Array.isArray(secondDest))) {
                return false;
              }

              if (firstDest.length !== secondDest.length) {
                return false;
              }

              for (var i = 0, ii = firstDest.length; i < ii; i++) {
                if (!isEntryEqual(firstDest[i], secondDest[i])) {
                  return false;
                }
              }

              return true;
            }
            /***/

          },
          /* 12 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PDFPageView = void 0;

            var _ui_utils = __w_pdfjs_require__(3);

            var _pdfjsLib = __w_pdfjs_require__(2);

            var _pdf_rendering_queue = __w_pdfjs_require__(13);

            var _viewer_compatibility = __w_pdfjs_require__(14);

            var MAX_CANVAS_PIXELS = _viewer_compatibility.viewerCompatibilityParams.maxCanvasPixels || 16777216;

            var PDFPageView = /*#__PURE__*/function () {
              function PDFPageView(options) {
                _classCallCheck(this, PDFPageView);

                var container = options.container;
                var defaultViewport = options.defaultViewport;
                this.id = options.id;
                this.renderingId = "page" + this.id;
                this.pdfPage = null;
                this.pageLabel = null;
                this.rotation = 0;
                this.scale = options.scale || _ui_utils.DEFAULT_SCALE;
                this.viewport = defaultViewport;
                this.pdfPageRotate = defaultViewport.rotation;
                this.hasRestrictedScaling = false;
                this.textLayerMode = Number.isInteger(options.textLayerMode) ? options.textLayerMode : _ui_utils.TextLayerMode.ENABLE;
                this.imageResourcesPath = options.imageResourcesPath || "";
                this.renderInteractiveForms = options.renderInteractiveForms || false;
                this.useOnlyCssZoom = options.useOnlyCssZoom || false;
                this.maxCanvasPixels = options.maxCanvasPixels || MAX_CANVAS_PIXELS;
                this.eventBus = options.eventBus || (0, _ui_utils.getGlobalEventBus)();
                this.renderingQueue = options.renderingQueue;
                this.textLayerFactory = options.textLayerFactory;
                this.annotationLayerFactory = options.annotationLayerFactory;
                this.renderer = options.renderer || _ui_utils.RendererType.CANVAS;
                this.enableWebGL = options.enableWebGL || false;
                this.l10n = options.l10n || _ui_utils.NullL10n;
                this.paintTask = null;
                this.paintedViewportMap = new WeakMap();
                this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
                this.resume = null;
                this.error = null;
                this.annotationLayer = null;
                this.textLayer = null;
                this.zoomLayer = null;
                var div = document.createElement("div");
                div.className = "page";
                div.style.width = Math.floor(this.viewport.width) + "px";
                div.style.height = Math.floor(this.viewport.height) + "px";
                div.setAttribute("data-page-number", this.id);
                this.div = div;
                container.appendChild(div);
              }

              _createClass(PDFPageView, [{
                key: "setPdfPage",
                value: function setPdfPage(pdfPage) {
                  this.pdfPage = pdfPage;
                  this.pdfPageRotate = pdfPage.rotate;
                  var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
                  this.viewport = pdfPage.getViewport({
                    scale: this.scale * _ui_utils.CSS_UNITS,
                    rotation: totalRotation
                  });
                  this.stats = pdfPage.stats;
                  this.reset();
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  this.reset();

                  if (this.pdfPage) {
                    this.pdfPage.cleanup();
                  }
                }
              }, {
                key: "_resetZoomLayer",
                value: function _resetZoomLayer() {
                  var removeFromDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                  if (!this.zoomLayer) {
                    return;
                  }

                  var zoomLayerCanvas = this.zoomLayer.firstChild;
                  this.paintedViewportMap["delete"](zoomLayerCanvas);
                  zoomLayerCanvas.width = 0;
                  zoomLayerCanvas.height = 0;

                  if (removeFromDOM) {
                    this.zoomLayer.remove();
                  }

                  this.zoomLayer = null;
                }
              }, {
                key: "reset",
                value: function reset() {
                  var keepZoomLayer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                  var keepAnnotations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                  this.cancelRendering(keepAnnotations);
                  this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
                  var div = this.div;
                  div.style.width = Math.floor(this.viewport.width) + "px";
                  div.style.height = Math.floor(this.viewport.height) + "px";
                  var childNodes = div.childNodes;
                  var currentZoomLayerNode = keepZoomLayer && this.zoomLayer || null;
                  var currentAnnotationNode = keepAnnotations && this.annotationLayer && this.annotationLayer.div || null;

                  for (var i = childNodes.length - 1; i >= 0; i--) {
                    var node = childNodes[i];

                    if (currentZoomLayerNode === node || currentAnnotationNode === node) {
                      continue;
                    }

                    div.removeChild(node);
                  }

                  div.removeAttribute("data-loaded");

                  if (currentAnnotationNode) {
                    this.annotationLayer.hide();
                  } else if (this.annotationLayer) {
                    this.annotationLayer.cancel();
                    this.annotationLayer = null;
                  }

                  if (!currentZoomLayerNode) {
                    if (this.canvas) {
                      this.paintedViewportMap["delete"](this.canvas);
                      this.canvas.width = 0;
                      this.canvas.height = 0;
                      delete this.canvas;
                    }

                    this._resetZoomLayer();
                  }

                  if (this.svg) {
                    this.paintedViewportMap["delete"](this.svg);
                    delete this.svg;
                  }

                  this.loadingIconDiv = document.createElement("div");
                  this.loadingIconDiv.className = "loadingIcon";
                  div.appendChild(this.loadingIconDiv);
                }
              }, {
                key: "update",
                value: function update(scale, rotation) {
                  this.scale = scale || this.scale;

                  if (typeof rotation !== "undefined") {
                    this.rotation = rotation;
                  }

                  var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
                  this.viewport = this.viewport.clone({
                    scale: this.scale * _ui_utils.CSS_UNITS,
                    rotation: totalRotation
                  });

                  if (this.svg) {
                    this.cssTransform(this.svg, true);
                    this.eventBus.dispatch("pagerendered", {
                      source: this,
                      pageNumber: this.id,
                      cssTransform: true,
                      timestamp: performance.now()
                    });
                    return;
                  }

                  var isScalingRestricted = false;

                  if (this.canvas && this.maxCanvasPixels > 0) {
                    var outputScale = this.outputScale;

                    if ((Math.floor(this.viewport.width) * outputScale.sx | 0) * (Math.floor(this.viewport.height) * outputScale.sy | 0) > this.maxCanvasPixels) {
                      isScalingRestricted = true;
                    }
                  }

                  if (this.canvas) {
                    if (this.useOnlyCssZoom || this.hasRestrictedScaling && isScalingRestricted) {
                      this.cssTransform(this.canvas, true);
                      this.eventBus.dispatch("pagerendered", {
                        source: this,
                        pageNumber: this.id,
                        cssTransform: true,
                        timestamp: performance.now()
                      });
                      return;
                    }

                    if (!this.zoomLayer && !this.canvas.hasAttribute("hidden")) {
                      this.zoomLayer = this.canvas.parentNode;
                      this.zoomLayer.style.position = "absolute";
                    }
                  }

                  if (this.zoomLayer) {
                    this.cssTransform(this.zoomLayer.firstChild);
                  }

                  this.reset(true, true);
                }
              }, {
                key: "cancelRendering",
                value: function cancelRendering() {
                  var keepAnnotations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                  if (this.paintTask) {
                    this.paintTask.cancel();
                    this.paintTask = null;
                  }

                  this.resume = null;

                  if (this.textLayer) {
                    this.textLayer.cancel();
                    this.textLayer = null;
                  }

                  if (!keepAnnotations && this.annotationLayer) {
                    this.annotationLayer.cancel();
                    this.annotationLayer = null;
                  }
                }
              }, {
                key: "cssTransform",
                value: function cssTransform(target) {
                  var redrawAnnotations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                  var width = this.viewport.width;
                  var height = this.viewport.height;
                  var div = this.div;
                  target.style.width = target.parentNode.style.width = div.style.width = Math.floor(width) + "px";
                  target.style.height = target.parentNode.style.height = div.style.height = Math.floor(height) + "px";
                  var relativeRotation = this.viewport.rotation - this.paintedViewportMap.get(target).rotation;
                  var absRotation = Math.abs(relativeRotation);
                  var scaleX = 1,
                      scaleY = 1;

                  if (absRotation === 90 || absRotation === 270) {
                    scaleX = height / width;
                    scaleY = width / height;
                  }

                  var cssTransform = "rotate(" + relativeRotation + "deg) " + "scale(" + scaleX + "," + scaleY + ")";
                  target.style.transform = cssTransform;

                  if (this.textLayer) {
                    var textLayerViewport = this.textLayer.viewport;
                    var textRelativeRotation = this.viewport.rotation - textLayerViewport.rotation;
                    var textAbsRotation = Math.abs(textRelativeRotation);
                    var scale = width / textLayerViewport.width;

                    if (textAbsRotation === 90 || textAbsRotation === 270) {
                      scale = width / textLayerViewport.height;
                    }

                    var textLayerDiv = this.textLayer.textLayerDiv;
                    var transX, transY;

                    switch (textAbsRotation) {
                      case 0:
                        transX = transY = 0;
                        break;

                      case 90:
                        transX = 0;
                        transY = "-" + textLayerDiv.style.height;
                        break;

                      case 180:
                        transX = "-" + textLayerDiv.style.width;
                        transY = "-" + textLayerDiv.style.height;
                        break;

                      case 270:
                        transX = "-" + textLayerDiv.style.width;
                        transY = 0;
                        break;

                      default:
                        console.error("Bad rotation value.");
                        break;
                    }

                    textLayerDiv.style.transform = "rotate(" + textAbsRotation + "deg) " + "scale(" + scale + ", " + scale + ") " + "translate(" + transX + ", " + transY + ")";
                    textLayerDiv.style.transformOrigin = "0% 0%";
                  }

                  if (redrawAnnotations && this.annotationLayer) {
                    this.annotationLayer.render(this.viewport, "display");
                  }
                }
              }, {
                key: "getPagePoint",
                value: function getPagePoint(x, y) {
                  return this.viewport.convertToPdfPoint(x, y);
                }
              }, {
                key: "draw",
                value: function draw() {
                  var _this69 = this;

                  if (this.renderingState !== _pdf_rendering_queue.RenderingStates.INITIAL) {
                    console.error("Must be in new state before drawing");
                    this.reset();
                  }

                  var div = this.div,
                      pdfPage = this.pdfPage;

                  if (!pdfPage) {
                    this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;

                    if (this.loadingIconDiv) {
                      div.removeChild(this.loadingIconDiv);
                      delete this.loadingIconDiv;
                    }

                    return Promise.reject(new Error("pdfPage is not loaded"));
                  }

                  this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;
                  var canvasWrapper = document.createElement("div");
                  canvasWrapper.style.width = div.style.width;
                  canvasWrapper.style.height = div.style.height;
                  canvasWrapper.classList.add("canvasWrapper");

                  if (this.annotationLayer && this.annotationLayer.div) {
                    div.insertBefore(canvasWrapper, this.annotationLayer.div);
                  } else {
                    div.appendChild(canvasWrapper);
                  }

                  var textLayer = null;

                  if (this.textLayerMode !== _ui_utils.TextLayerMode.DISABLE && this.textLayerFactory) {
                    var textLayerDiv = document.createElement("div");
                    textLayerDiv.className = "textLayer";
                    textLayerDiv.style.width = canvasWrapper.style.width;
                    textLayerDiv.style.height = canvasWrapper.style.height;

                    if (this.annotationLayer && this.annotationLayer.div) {
                      div.insertBefore(textLayerDiv, this.annotationLayer.div);
                    } else {
                      div.appendChild(textLayerDiv);
                    }

                    textLayer = this.textLayerFactory.createTextLayerBuilder(textLayerDiv, this.id - 1, this.viewport, this.textLayerMode === _ui_utils.TextLayerMode.ENABLE_ENHANCE, this.eventBus);
                  }

                  this.textLayer = textLayer;
                  var renderContinueCallback = null;

                  if (this.renderingQueue) {
                    renderContinueCallback = function renderContinueCallback(cont) {
                      if (!_this69.renderingQueue.isHighestPriority(_this69)) {
                        _this69.renderingState = _pdf_rendering_queue.RenderingStates.PAUSED;

                        _this69.resume = function () {
                          _this69.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;
                          cont();
                        };

                        return;
                      }

                      cont();
                    };
                  }

                  var finishPaintTask = /*#__PURE__*/function () {
                    var _ref53 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(error) {
                      return regeneratorRuntime.wrap(function _callee23$(_context23) {
                        while (1) {
                          switch (_context23.prev = _context23.next) {
                            case 0:
                              if (paintTask === _this69.paintTask) {
                                _this69.paintTask = null;
                              }

                              if (!(error instanceof _pdfjsLib.RenderingCancelledException)) {
                                _context23.next = 4;
                                break;
                              }

                              _this69.error = null;
                              return _context23.abrupt("return");

                            case 4:
                              _this69.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;

                              if (_this69.loadingIconDiv) {
                                div.removeChild(_this69.loadingIconDiv);
                                delete _this69.loadingIconDiv;
                              }

                              _this69._resetZoomLayer(true);

                              _this69.error = error;
                              _this69.stats = pdfPage.stats;

                              _this69.eventBus.dispatch("pagerendered", {
                                source: _this69,
                                pageNumber: _this69.id,
                                cssTransform: false,
                                timestamp: performance.now()
                              });

                              if (!error) {
                                _context23.next = 12;
                                break;
                              }

                              throw error;

                            case 12:
                            case "end":
                              return _context23.stop();
                          }
                        }
                      }, _callee23);
                    }));

                    return function finishPaintTask(_x10) {
                      return _ref53.apply(this, arguments);
                    };
                  }();

                  var paintTask = this.renderer === _ui_utils.RendererType.SVG ? this.paintOnSvg(canvasWrapper) : this.paintOnCanvas(canvasWrapper);
                  paintTask.onRenderContinue = renderContinueCallback;
                  this.paintTask = paintTask;
                  var resultPromise = paintTask.promise.then(function () {
                    return finishPaintTask(null).then(function () {
                      if (textLayer) {
                        var readableStream = pdfPage.streamTextContent({
                          normalizeWhitespace: true
                        });
                        textLayer.setTextContentStream(readableStream);
                        textLayer.render();
                      }
                    });
                  }, function (reason) {
                    return finishPaintTask(reason);
                  });

                  if (this.annotationLayerFactory) {
                    if (!this.annotationLayer) {
                      this.annotationLayer = this.annotationLayerFactory.createAnnotationLayerBuilder(div, pdfPage, this.imageResourcesPath, this.renderInteractiveForms, this.l10n);
                    }

                    this.annotationLayer.render(this.viewport, "display");
                  }

                  div.setAttribute("data-loaded", true);
                  this.eventBus.dispatch("pagerender", {
                    source: this,
                    pageNumber: this.id
                  });
                  return resultPromise;
                }
              }, {
                key: "paintOnCanvas",
                value: function paintOnCanvas(canvasWrapper) {
                  var renderCapability = (0, _pdfjsLib.createPromiseCapability)();
                  var result = {
                    promise: renderCapability.promise,
                    onRenderContinue: function onRenderContinue(cont) {
                      cont();
                    },
                    cancel: function cancel() {
                      renderTask.cancel();
                    }
                  };
                  var viewport = this.viewport;
                  var canvas = document.createElement("canvas");
                  this.l10n.get("page_canvas", {
                    page: this.id
                  }, "Page {{page}}").then(function (msg) {
                    canvas.setAttribute("aria-label", msg);
                  });
                  canvas.setAttribute("hidden", "hidden");
                  var isCanvasHidden = true;

                  var showCanvas = function showCanvas() {
                    if (isCanvasHidden) {
                      canvas.removeAttribute("hidden");
                      isCanvasHidden = false;
                    }
                  };

                  canvasWrapper.appendChild(canvas);
                  this.canvas = canvas;
                  canvas.mozOpaque = true;
                  var ctx = canvas.getContext("2d", {
                    alpha: false
                  });
                  var outputScale = (0, _ui_utils.getOutputScale)(ctx);
                  this.outputScale = outputScale;

                  if (this.useOnlyCssZoom) {
                    var actualSizeViewport = viewport.clone({
                      scale: _ui_utils.CSS_UNITS
                    });
                    outputScale.sx *= actualSizeViewport.width / viewport.width;
                    outputScale.sy *= actualSizeViewport.height / viewport.height;
                    outputScale.scaled = true;
                  }

                  if (this.maxCanvasPixels > 0) {
                    var pixelsInViewport = viewport.width * viewport.height;
                    var maxScale = Math.sqrt(this.maxCanvasPixels / pixelsInViewport);

                    if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
                      outputScale.sx = maxScale;
                      outputScale.sy = maxScale;
                      outputScale.scaled = true;
                      this.hasRestrictedScaling = true;
                    } else {
                      this.hasRestrictedScaling = false;
                    }
                  }

                  var sfx = (0, _ui_utils.approximateFraction)(outputScale.sx);
                  var sfy = (0, _ui_utils.approximateFraction)(outputScale.sy);
                  canvas.width = (0, _ui_utils.roundToDivide)(viewport.width * outputScale.sx, sfx[0]);
                  canvas.height = (0, _ui_utils.roundToDivide)(viewport.height * outputScale.sy, sfy[0]);
                  canvas.style.width = (0, _ui_utils.roundToDivide)(viewport.width, sfx[1]) + "px";
                  canvas.style.height = (0, _ui_utils.roundToDivide)(viewport.height, sfy[1]) + "px";
                  this.paintedViewportMap.set(canvas, viewport);
                  var transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
                  var renderContext = {
                    canvasContext: ctx,
                    transform: transform,
                    viewport: this.viewport,
                    enableWebGL: this.enableWebGL,
                    renderInteractiveForms: this.renderInteractiveForms
                  };
                  var renderTask = this.pdfPage.render(renderContext);

                  renderTask.onContinue = function (cont) {
                    showCanvas();

                    if (result.onRenderContinue) {
                      result.onRenderContinue(cont);
                    } else {
                      cont();
                    }
                  };

                  renderTask.promise.then(function () {
                    showCanvas();
                    renderCapability.resolve(undefined);
                  }, function (error) {
                    showCanvas();
                    renderCapability.reject(error);
                  });
                  return result;
                }
              }, {
                key: "paintOnSvg",
                value: function paintOnSvg(wrapper) {
                  var _this70 = this;

                  var cancelled = false;

                  var ensureNotCancelled = function ensureNotCancelled() {
                    if (cancelled) {
                      throw new _pdfjsLib.RenderingCancelledException("Rendering cancelled, page ".concat(_this70.id), "svg");
                    }
                  };

                  var pdfPage = this.pdfPage;
                  var actualSizeViewport = this.viewport.clone({
                    scale: _ui_utils.CSS_UNITS
                  });
                  var promise = pdfPage.getOperatorList().then(function (opList) {
                    ensureNotCancelled();
                    var svgGfx = new _pdfjsLib.SVGGraphics(pdfPage.commonObjs, pdfPage.objs);
                    return svgGfx.getSVG(opList, actualSizeViewport).then(function (svg) {
                      ensureNotCancelled();
                      _this70.svg = svg;

                      _this70.paintedViewportMap.set(svg, actualSizeViewport);

                      svg.style.width = wrapper.style.width;
                      svg.style.height = wrapper.style.height;
                      _this70.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;
                      wrapper.appendChild(svg);
                    });
                  });
                  return {
                    promise: promise,
                    onRenderContinue: function onRenderContinue(cont) {
                      cont();
                    },
                    cancel: function cancel() {
                      cancelled = true;
                    }
                  };
                }
              }, {
                key: "setPageLabel",
                value: function setPageLabel(label) {
                  this.pageLabel = typeof label === "string" ? label : null;

                  if (this.pageLabel !== null) {
                    this.div.setAttribute("data-page-label", this.pageLabel);
                  } else {
                    this.div.removeAttribute("data-page-label");
                  }
                }
              }, {
                key: "width",
                get: function get() {
                  return this.viewport.width;
                }
              }, {
                key: "height",
                get: function get() {
                  return this.viewport.height;
                }
              }]);

              return PDFPageView;
            }();

            exports.PDFPageView = PDFPageView;
            /***/
          },
          /* 13 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PDFRenderingQueue = exports.RenderingStates = void 0;
            var CLEANUP_TIMEOUT = 30000;
            var RenderingStates = {
              INITIAL: 0,
              RUNNING: 1,
              PAUSED: 2,
              FINISHED: 3
            };
            exports.RenderingStates = RenderingStates;

            var PDFRenderingQueue = /*#__PURE__*/function () {
              function PDFRenderingQueue() {
                _classCallCheck(this, PDFRenderingQueue);

                this.pdfViewer = null;
                this.pdfThumbnailViewer = null;
                this.onIdle = null;
                this.highestPriorityPage = null;
                this.idleTimeout = null;
                this.printing = false;
                this.isThumbnailViewEnabled = false;
              }

              _createClass(PDFRenderingQueue, [{
                key: "setViewer",
                value: function setViewer(pdfViewer) {
                  this.pdfViewer = pdfViewer;
                }
              }, {
                key: "setThumbnailViewer",
                value: function setThumbnailViewer(pdfThumbnailViewer) {
                  this.pdfThumbnailViewer = pdfThumbnailViewer;
                }
              }, {
                key: "isHighestPriority",
                value: function isHighestPriority(view) {
                  return this.highestPriorityPage === view.renderingId;
                }
              }, {
                key: "renderHighestPriority",
                value: function renderHighestPriority(currentlyVisiblePages) {
                  if (this.idleTimeout) {
                    clearTimeout(this.idleTimeout);
                    this.idleTimeout = null;
                  }

                  if (this.pdfViewer.forceRendering(currentlyVisiblePages)) {
                    return;
                  }

                  if (this.pdfThumbnailViewer && this.isThumbnailViewEnabled) {
                    if (this.pdfThumbnailViewer.forceRendering()) {
                      return;
                    }
                  }

                  if (this.printing) {
                    return;
                  }

                  if (this.onIdle) {
                    this.idleTimeout = setTimeout(this.onIdle.bind(this), CLEANUP_TIMEOUT);
                  }
                }
              }, {
                key: "getHighestPriority",
                value: function getHighestPriority(visible, views, scrolledDown) {
                  var visibleViews = visible.views;
                  var numVisible = visibleViews.length;

                  if (numVisible === 0) {
                    return null;
                  }

                  for (var i = 0; i < numVisible; ++i) {
                    var view = visibleViews[i].view;

                    if (!this.isViewFinished(view)) {
                      return view;
                    }
                  }

                  if (scrolledDown) {
                    var nextPageIndex = visible.last.id;

                    if (views[nextPageIndex] && !this.isViewFinished(views[nextPageIndex])) {
                      return views[nextPageIndex];
                    }
                  } else {
                    var previousPageIndex = visible.first.id - 2;

                    if (views[previousPageIndex] && !this.isViewFinished(views[previousPageIndex])) {
                      return views[previousPageIndex];
                    }
                  }

                  return null;
                }
              }, {
                key: "isViewFinished",
                value: function isViewFinished(view) {
                  return view.renderingState === RenderingStates.FINISHED;
                }
              }, {
                key: "renderView",
                value: function renderView(view) {
                  var _this71 = this;

                  switch (view.renderingState) {
                    case RenderingStates.FINISHED:
                      return false;

                    case RenderingStates.PAUSED:
                      this.highestPriorityPage = view.renderingId;
                      view.resume();
                      break;

                    case RenderingStates.RUNNING:
                      this.highestPriorityPage = view.renderingId;
                      break;

                    case RenderingStates.INITIAL:
                      this.highestPriorityPage = view.renderingId;
                      view.draw()["finally"](function () {
                        _this71.renderHighestPriority();
                      })["catch"](function (reason) {
                        console.error("renderView: \"".concat(reason, "\""));
                      });
                      break;
                  }

                  return true;
                }
              }]);

              return PDFRenderingQueue;
            }();

            exports.PDFRenderingQueue = PDFRenderingQueue;
            /***/
          },
          /* 14 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            var compatibilityParams = Object.create(null);
            {
              var userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";
              var platform = typeof navigator !== "undefined" && navigator.platform || "";
              var maxTouchPoints = typeof navigator !== "undefined" && navigator.maxTouchPoints || 1;
              var isAndroid = /Android/.test(userAgent);
              var isIOS = /\b(iPad|iPhone|iPod)(?=;)/.test(userAgent) || platform === "MacIntel" && maxTouchPoints > 1;

              (function checkCanvasSizeLimitation() {
                if (isIOS || isAndroid) {
                  compatibilityParams.maxCanvasPixels = 5242880;
                }
              })();
            }
            exports.viewerCompatibilityParams = Object.freeze(compatibilityParams);
            /***/
          },
          /* 15 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PDFSinglePageViewer = void 0;

            var _base_viewer = __w_pdfjs_require__(16);

            var _pdfjsLib = __w_pdfjs_require__(2);

            var PDFSinglePageViewer = /*#__PURE__*/function (_base_viewer$BaseView) {
              _inherits(PDFSinglePageViewer, _base_viewer$BaseView);

              var _super38 = _createSuper(PDFSinglePageViewer);

              function PDFSinglePageViewer(options) {
                var _this72;

                _classCallCheck(this, PDFSinglePageViewer);

                _this72 = _super38.call(this, options);

                _this72.eventBus._on("pagesinit", function (evt) {
                  _this72._ensurePageViewVisible();
                });

                return _this72;
              }

              _createClass(PDFSinglePageViewer, [{
                key: "_resetView",
                value: function _resetView() {
                  _get(_getPrototypeOf(PDFSinglePageViewer.prototype), "_resetView", this).call(this);

                  this._previousPageNumber = 1;
                  this._shadowViewer = document.createDocumentFragment();
                  this._updateScrollDown = null;
                }
              }, {
                key: "_ensurePageViewVisible",
                value: function _ensurePageViewVisible() {
                  var pageView = this._pages[this._currentPageNumber - 1];
                  var previousPageView = this._pages[this._previousPageNumber - 1];
                  var viewerNodes = this.viewer.childNodes;

                  switch (viewerNodes.length) {
                    case 0:
                      this.viewer.appendChild(pageView.div);
                      break;

                    case 1:
                      if (viewerNodes[0] !== previousPageView.div) {
                        throw new Error("_ensurePageViewVisible: Unexpected previously visible page.");
                      }

                      if (pageView === previousPageView) {
                        break;
                      }

                      this._shadowViewer.appendChild(previousPageView.div);

                      this.viewer.appendChild(pageView.div);
                      this.container.scrollTop = 0;
                      break;

                    default:
                      throw new Error("_ensurePageViewVisible: Only one page should be visible at a time.");
                  }

                  this._previousPageNumber = this._currentPageNumber;
                }
              }, {
                key: "_scrollUpdate",
                value: function _scrollUpdate() {
                  if (this._updateScrollDown) {
                    this._updateScrollDown();
                  }

                  _get(_getPrototypeOf(PDFSinglePageViewer.prototype), "_scrollUpdate", this).call(this);
                }
              }, {
                key: "_scrollIntoView",
                value: function _scrollIntoView(_ref54) {
                  var _this73 = this;

                  var pageDiv = _ref54.pageDiv,
                      _ref54$pageSpot = _ref54.pageSpot,
                      pageSpot = _ref54$pageSpot === void 0 ? null : _ref54$pageSpot,
                      _ref54$pageNumber = _ref54.pageNumber,
                      pageNumber = _ref54$pageNumber === void 0 ? null : _ref54$pageNumber;

                  if (pageNumber) {
                    this._setCurrentPageNumber(pageNumber);
                  }

                  var scrolledDown = this._currentPageNumber >= this._previousPageNumber;

                  this._ensurePageViewVisible();

                  this.update();

                  _get(_getPrototypeOf(PDFSinglePageViewer.prototype), "_scrollIntoView", this).call(this, {
                    pageDiv: pageDiv,
                    pageSpot: pageSpot,
                    pageNumber: pageNumber
                  });

                  this._updateScrollDown = function () {
                    _this73.scroll.down = scrolledDown;
                    _this73._updateScrollDown = null;
                  };
                }
              }, {
                key: "_getVisiblePages",
                value: function _getVisiblePages() {
                  return this._getCurrentVisiblePage();
                }
              }, {
                key: "_updateHelper",
                value: function _updateHelper(visiblePages) {}
              }, {
                key: "_updateScrollMode",
                value: function _updateScrollMode() {}
              }, {
                key: "_updateSpreadMode",
                value: function _updateSpreadMode() {}
              }, {
                key: "_setDocumentViewerElement",
                get: function get() {
                  return (0, _pdfjsLib.shadow)(this, "_setDocumentViewerElement", this._shadowViewer);
                }
              }, {
                key: "_isScrollModeHorizontal",
                get: function get() {
                  return (0, _pdfjsLib.shadow)(this, "_isScrollModeHorizontal", false);
                }
              }]);

              return PDFSinglePageViewer;
            }(_base_viewer.BaseViewer);

            exports.PDFSinglePageViewer = PDFSinglePageViewer;
            /***/
          },
          /* 16 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.BaseViewer = void 0;

            var _ui_utils = __w_pdfjs_require__(3);

            var _pdf_rendering_queue = __w_pdfjs_require__(13);

            var _annotation_layer_builder = __w_pdfjs_require__(1);

            var _pdfjsLib = __w_pdfjs_require__(2);

            var _pdf_page_view = __w_pdfjs_require__(12);

            var _pdf_link_service = __w_pdfjs_require__(4);

            var _text_layer_builder = __w_pdfjs_require__(5);

            var DEFAULT_CACHE_SIZE = 10;

            function PDFPageViewBuffer(size) {
              var data = [];

              this.push = function (view) {
                var i = data.indexOf(view);

                if (i >= 0) {
                  data.splice(i, 1);
                }

                data.push(view);

                if (data.length > size) {
                  data.shift().destroy();
                }
              };

              this.resize = function (newSize, pagesToKeep) {
                size = newSize;

                if (pagesToKeep) {
                  var pageIdsToKeep = new Set();

                  for (var i = 0, iMax = pagesToKeep.length; i < iMax; ++i) {
                    pageIdsToKeep.add(pagesToKeep[i].id);
                  }

                  (0, _ui_utils.moveToEndOfArray)(data, function (page) {
                    return pageIdsToKeep.has(page.id);
                  });
                }

                while (data.length > size) {
                  data.shift().destroy();
                }
              };
            }

            function isSameScale(oldScale, newScale) {
              if (newScale === oldScale) {
                return true;
              }

              if (Math.abs(newScale - oldScale) < 1e-15) {
                return true;
              }

              return false;
            }

            var BaseViewer = /*#__PURE__*/function () {
              function BaseViewer(options) {
                var _this74 = this;

                _classCallCheck(this, BaseViewer);

                if (this.constructor === BaseViewer) {
                  throw new Error("Cannot initialize BaseViewer.");
                }

                this._name = this.constructor.name;
                this.container = options.container;
                this.viewer = options.viewer || options.container.firstElementChild;
                this.eventBus = options.eventBus || (0, _ui_utils.getGlobalEventBus)();
                this.linkService = options.linkService || new _pdf_link_service.SimpleLinkService();
                this.downloadManager = options.downloadManager || null;
                this.findController = options.findController || null;
                this.removePageBorders = options.removePageBorders || false;
                this.textLayerMode = Number.isInteger(options.textLayerMode) ? options.textLayerMode : _ui_utils.TextLayerMode.ENABLE;
                this.imageResourcesPath = options.imageResourcesPath || "";
                this.renderInteractiveForms = options.renderInteractiveForms || false;
                this.enablePrintAutoRotate = options.enablePrintAutoRotate || false;
                this.renderer = options.renderer || _ui_utils.RendererType.CANVAS;
                this.enableWebGL = options.enableWebGL || false;
                this.useOnlyCssZoom = options.useOnlyCssZoom || false;
                this.maxCanvasPixels = options.maxCanvasPixels;
                this.l10n = options.l10n || _ui_utils.NullL10n;
                this.defaultRenderingQueue = !options.renderingQueue;

                if (this.defaultRenderingQueue) {
                  this.renderingQueue = new _pdf_rendering_queue.PDFRenderingQueue();
                  this.renderingQueue.setViewer(this);
                } else {
                  this.renderingQueue = options.renderingQueue;
                }

                this.scroll = (0, _ui_utils.watchScroll)(this.container, this._scrollUpdate.bind(this));
                this.presentationModeState = _ui_utils.PresentationModeState.UNKNOWN;
                this._onBeforeDraw = this._onAfterDraw = null;

                this._resetView();

                if (this.removePageBorders) {
                  this.viewer.classList.add("removePageBorders");
                }

                Promise.resolve().then(function () {
                  _this74.eventBus.dispatch("baseviewerinit", {
                    source: _this74
                  });
                });
              }

              _createClass(BaseViewer, [{
                key: "getPageView",
                value: function getPageView(index) {
                  return this._pages[index];
                }
              }, {
                key: "_setCurrentPageNumber",
                value: function _setCurrentPageNumber(val) {
                  var resetCurrentPageView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                  if (this._currentPageNumber === val) {
                    if (resetCurrentPageView) {
                      this._resetCurrentPageView();
                    }

                    return true;
                  }

                  if (!(0 < val && val <= this.pagesCount)) {
                    return false;
                  }

                  this._currentPageNumber = val;
                  this.eventBus.dispatch("pagechanging", {
                    source: this,
                    pageNumber: val,
                    pageLabel: this._pageLabels && this._pageLabels[val - 1]
                  });

                  if (resetCurrentPageView) {
                    this._resetCurrentPageView();
                  }

                  return true;
                }
              }, {
                key: "setDocument",
                value: function setDocument(pdfDocument) {
                  var _this75 = this;

                  if (this.pdfDocument) {
                    this._cancelRendering();

                    this._resetView();

                    if (this.findController) {
                      this.findController.setDocument(null);
                    }
                  }

                  this.pdfDocument = pdfDocument;

                  if (!pdfDocument) {
                    return;
                  }

                  var pagesCount = pdfDocument.numPages;
                  var firstPagePromise = pdfDocument.getPage(1);

                  this._pagesCapability.promise.then(function () {
                    _this75.eventBus.dispatch("pagesloaded", {
                      source: _this75,
                      pagesCount: pagesCount
                    });
                  });

                  this._onBeforeDraw = function (evt) {
                    var pageView = _this75._pages[evt.pageNumber - 1];

                    if (!pageView) {
                      return;
                    }

                    _this75._buffer.push(pageView);
                  };

                  this.eventBus._on("pagerender", this._onBeforeDraw);

                  this._onAfterDraw = function (evt) {
                    if (evt.cssTransform || _this75._onePageRenderedCapability.settled) {
                      return;
                    }

                    _this75._onePageRenderedCapability.resolve();

                    _this75.eventBus._off("pagerendered", _this75._onAfterDraw);

                    _this75._onAfterDraw = null;
                  };

                  this.eventBus._on("pagerendered", this._onAfterDraw);

                  firstPagePromise.then(function (firstPdfPage) {
                    _this75._firstPageCapability.resolve(firstPdfPage);

                    var scale = _this75.currentScale;
                    var viewport = firstPdfPage.getViewport({
                      scale: scale * _ui_utils.CSS_UNITS
                    });
                    var textLayerFactory = _this75.textLayerMode !== _ui_utils.TextLayerMode.DISABLE ? _this75 : null;

                    for (var pageNum = 1; pageNum <= pagesCount; ++pageNum) {
                      var pageView = new _pdf_page_view.PDFPageView({
                        container: _this75._setDocumentViewerElement,
                        eventBus: _this75.eventBus,
                        id: pageNum,
                        scale: scale,
                        defaultViewport: viewport.clone(),
                        renderingQueue: _this75.renderingQueue,
                        textLayerFactory: textLayerFactory,
                        textLayerMode: _this75.textLayerMode,
                        annotationLayerFactory: _this75,
                        imageResourcesPath: _this75.imageResourcesPath,
                        renderInteractiveForms: _this75.renderInteractiveForms,
                        renderer: _this75.renderer,
                        enableWebGL: _this75.enableWebGL,
                        useOnlyCssZoom: _this75.useOnlyCssZoom,
                        maxCanvasPixels: _this75.maxCanvasPixels,
                        l10n: _this75.l10n
                      });

                      _this75._pages.push(pageView);
                    }

                    var firstPageView = _this75._pages[0];

                    if (firstPageView) {
                      firstPageView.setPdfPage(firstPdfPage);

                      _this75.linkService.cachePageRef(1, firstPdfPage.ref);
                    }

                    if (_this75._spreadMode !== _ui_utils.SpreadMode.NONE) {
                      _this75._updateSpreadMode();
                    }

                    _this75._onePageRenderedCapability.promise.then(function () {
                      if (_this75.findController) {
                        _this75.findController.setDocument(pdfDocument);
                      }

                      if (pdfDocument.loadingParams["disableAutoFetch"] || pagesCount > 7500) {
                        _this75._pagesCapability.resolve();

                        return;
                      }

                      var getPagesLeft = pagesCount - 1;

                      if (getPagesLeft <= 0) {
                        _this75._pagesCapability.resolve();

                        return;
                      }

                      var _loop3 = function _loop3(_pageNum) {
                        pdfDocument.getPage(_pageNum).then(function (pdfPage) {
                          var pageView = _this75._pages[_pageNum - 1];

                          if (!pageView.pdfPage) {
                            pageView.setPdfPage(pdfPage);
                          }

                          _this75.linkService.cachePageRef(_pageNum, pdfPage.ref);

                          if (--getPagesLeft === 0) {
                            _this75._pagesCapability.resolve();
                          }
                        }, function (reason) {
                          console.error("Unable to get page ".concat(_pageNum, " to initialize viewer"), reason);

                          if (--getPagesLeft === 0) {
                            _this75._pagesCapability.resolve();
                          }
                        });
                      };

                      for (var _pageNum = 2; _pageNum <= pagesCount; ++_pageNum) {
                        _loop3(_pageNum);
                      }
                    });

                    _this75.eventBus.dispatch("pagesinit", {
                      source: _this75
                    });

                    if (_this75.defaultRenderingQueue) {
                      _this75.update();
                    }
                  })["catch"](function (reason) {
                    console.error("Unable to initialize viewer", reason);
                  });
                }
              }, {
                key: "setPageLabels",
                value: function setPageLabels(labels) {
                  if (!this.pdfDocument) {
                    return;
                  }

                  if (!labels) {
                    this._pageLabels = null;
                  } else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
                    this._pageLabels = null;
                    console.error("".concat(this._name, ".setPageLabels: Invalid page labels."));
                  } else {
                    this._pageLabels = labels;
                  }

                  for (var i = 0, ii = this._pages.length; i < ii; i++) {
                    var pageView = this._pages[i];
                    var label = this._pageLabels && this._pageLabels[i];
                    pageView.setPageLabel(label);
                  }
                }
              }, {
                key: "_resetView",
                value: function _resetView() {
                  this._pages = [];
                  this._currentPageNumber = 1;
                  this._currentScale = _ui_utils.UNKNOWN_SCALE;
                  this._currentScaleValue = null;
                  this._pageLabels = null;
                  this._buffer = new PDFPageViewBuffer(DEFAULT_CACHE_SIZE);
                  this._location = null;
                  this._pagesRotation = 0;
                  this._pagesRequests = new WeakMap();
                  this._firstPageCapability = (0, _pdfjsLib.createPromiseCapability)();
                  this._onePageRenderedCapability = (0, _pdfjsLib.createPromiseCapability)();
                  this._pagesCapability = (0, _pdfjsLib.createPromiseCapability)();
                  this._scrollMode = _ui_utils.ScrollMode.VERTICAL;
                  this._spreadMode = _ui_utils.SpreadMode.NONE;

                  if (this._onBeforeDraw) {
                    this.eventBus._off("pagerender", this._onBeforeDraw);

                    this._onBeforeDraw = null;
                  }

                  if (this._onAfterDraw) {
                    this.eventBus._off("pagerendered", this._onAfterDraw);

                    this._onAfterDraw = null;
                  }

                  this.viewer.textContent = "";

                  this._updateScrollMode();
                }
              }, {
                key: "_scrollUpdate",
                value: function _scrollUpdate() {
                  if (this.pagesCount === 0) {
                    return;
                  }

                  this.update();
                }
              }, {
                key: "_scrollIntoView",
                value: function _scrollIntoView(_ref55) {
                  var pageDiv = _ref55.pageDiv,
                      _ref55$pageSpot = _ref55.pageSpot,
                      pageSpot = _ref55$pageSpot === void 0 ? null : _ref55$pageSpot,
                      _ref55$pageNumber = _ref55.pageNumber,
                      pageNumber = _ref55$pageNumber === void 0 ? null : _ref55$pageNumber;
                  (0, _ui_utils.scrollIntoView)(pageDiv, pageSpot);
                }
              }, {
                key: "_setScaleUpdatePages",
                value: function _setScaleUpdatePages(newScale, newValue) {
                  var noScroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                  var preset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                  this._currentScaleValue = newValue.toString();

                  if (isSameScale(this._currentScale, newScale)) {
                    if (preset) {
                      this.eventBus.dispatch("scalechanging", {
                        source: this,
                        scale: newScale,
                        presetValue: newValue
                      });
                    }

                    return;
                  }

                  for (var i = 0, ii = this._pages.length; i < ii; i++) {
                    this._pages[i].update(newScale);
                  }

                  this._currentScale = newScale;

                  if (!noScroll) {
                    var page = this._currentPageNumber,
                        dest;

                    if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
                      page = this._location.pageNumber;
                      dest = [null, {
                        name: "XYZ"
                      }, this._location.left, this._location.top, null];
                    }

                    this.scrollPageIntoView({
                      pageNumber: page,
                      destArray: dest,
                      allowNegativeOffset: true
                    });
                  }

                  this.eventBus.dispatch("scalechanging", {
                    source: this,
                    scale: newScale,
                    presetValue: preset ? newValue : undefined
                  });

                  if (this.defaultRenderingQueue) {
                    this.update();
                  }
                }
              }, {
                key: "_setScale",
                value: function _setScale(value) {
                  var noScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                  var scale = parseFloat(value);

                  if (scale > 0) {
                    this._setScaleUpdatePages(scale, value, noScroll, false);
                  } else {
                    var currentPage = this._pages[this._currentPageNumber - 1];

                    if (!currentPage) {
                      return;
                    }

                    var noPadding = this.isInPresentationMode || this.removePageBorders;
                    var hPadding = noPadding ? 0 : _ui_utils.SCROLLBAR_PADDING;
                    var vPadding = noPadding ? 0 : _ui_utils.VERTICAL_PADDING;

                    if (!noPadding && this._isScrollModeHorizontal) {
                      var _ref56 = [vPadding, hPadding];
                      hPadding = _ref56[0];
                      vPadding = _ref56[1];
                    }

                    var pageWidthScale = (this.container.clientWidth - hPadding) / currentPage.width * currentPage.scale;
                    var pageHeightScale = (this.container.clientHeight - vPadding) / currentPage.height * currentPage.scale;

                    switch (value) {
                      case "page-actual":
                        scale = 1;
                        break;

                      case "page-width":
                        scale = pageWidthScale;
                        break;

                      case "page-height":
                        scale = pageHeightScale;
                        break;

                      case "page-fit":
                        scale = Math.min(pageWidthScale, pageHeightScale);
                        break;

                      case "auto":
                        var horizontalScale = (0, _ui_utils.isPortraitOrientation)(currentPage) ? pageWidthScale : Math.min(pageHeightScale, pageWidthScale);
                        scale = Math.min(_ui_utils.MAX_AUTO_SCALE, horizontalScale);
                        break;

                      default:
                        console.error("".concat(this._name, "._setScale: \"").concat(value, "\" is an unknown zoom value."));
                        return;
                    }

                    this._setScaleUpdatePages(scale, value, noScroll, true);
                  }
                }
              }, {
                key: "_resetCurrentPageView",
                value: function _resetCurrentPageView() {
                  if (this.isInPresentationMode) {
                    this._setScale(this._currentScaleValue, true);
                  }

                  var pageView = this._pages[this._currentPageNumber - 1];

                  this._scrollIntoView({
                    pageDiv: pageView.div
                  });
                }
              }, {
                key: "scrollPageIntoView",
                value: function scrollPageIntoView(_ref57) {
                  var pageNumber = _ref57.pageNumber,
                      _ref57$destArray = _ref57.destArray,
                      destArray = _ref57$destArray === void 0 ? null : _ref57$destArray,
                      _ref57$allowNegativeO = _ref57.allowNegativeOffset,
                      allowNegativeOffset = _ref57$allowNegativeO === void 0 ? false : _ref57$allowNegativeO,
                      _ref57$ignoreDestinat = _ref57.ignoreDestinationZoom,
                      ignoreDestinationZoom = _ref57$ignoreDestinat === void 0 ? false : _ref57$ignoreDestinat;

                  if (!this.pdfDocument) {
                    return;
                  }

                  var pageView = Number.isInteger(pageNumber) && this._pages[pageNumber - 1];

                  if (!pageView) {
                    console.error("".concat(this._name, ".scrollPageIntoView: ") + "\"".concat(pageNumber, "\" is not a valid pageNumber parameter."));
                    return;
                  }

                  if (this.isInPresentationMode || !destArray) {
                    this._setCurrentPageNumber(pageNumber, true);

                    return;
                  }

                  var x = 0,
                      y = 0;
                  var width = 0,
                      height = 0,
                      widthScale,
                      heightScale;
                  var changeOrientation = pageView.rotation % 180 !== 0;
                  var pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scale / _ui_utils.CSS_UNITS;
                  var pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scale / _ui_utils.CSS_UNITS;
                  var scale = 0;

                  switch (destArray[1].name) {
                    case "XYZ":
                      x = destArray[2];
                      y = destArray[3];
                      scale = destArray[4];
                      x = x !== null ? x : 0;
                      y = y !== null ? y : pageHeight;
                      break;

                    case "Fit":
                    case "FitB":
                      scale = "page-fit";
                      break;

                    case "FitH":
                    case "FitBH":
                      y = destArray[2];
                      scale = "page-width";

                      if (y === null && this._location) {
                        x = this._location.left;
                        y = this._location.top;
                      }

                      break;

                    case "FitV":
                    case "FitBV":
                      x = destArray[2];
                      width = pageWidth;
                      height = pageHeight;
                      scale = "page-height";
                      break;

                    case "FitR":
                      x = destArray[2];
                      y = destArray[3];
                      width = destArray[4] - x;
                      height = destArray[5] - y;
                      var hPadding = this.removePageBorders ? 0 : _ui_utils.SCROLLBAR_PADDING;
                      var vPadding = this.removePageBorders ? 0 : _ui_utils.VERTICAL_PADDING;
                      widthScale = (this.container.clientWidth - hPadding) / width / _ui_utils.CSS_UNITS;
                      heightScale = (this.container.clientHeight - vPadding) / height / _ui_utils.CSS_UNITS;
                      scale = Math.min(Math.abs(widthScale), Math.abs(heightScale));
                      break;

                    default:
                      console.error("".concat(this._name, ".scrollPageIntoView: ") + "\"".concat(destArray[1].name, "\" is not a valid destination type."));
                      return;
                  }

                  if (!ignoreDestinationZoom) {
                    if (scale && scale !== this._currentScale) {
                      this.currentScaleValue = scale;
                    } else if (this._currentScale === _ui_utils.UNKNOWN_SCALE) {
                      this.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
                    }
                  }

                  if (scale === "page-fit" && !destArray[4]) {
                    this._scrollIntoView({
                      pageDiv: pageView.div,
                      pageNumber: pageNumber
                    });

                    return;
                  }

                  var boundingRect = [pageView.viewport.convertToViewportPoint(x, y), pageView.viewport.convertToViewportPoint(x + width, y + height)];
                  var left = Math.min(boundingRect[0][0], boundingRect[1][0]);
                  var top = Math.min(boundingRect[0][1], boundingRect[1][1]);

                  if (!allowNegativeOffset) {
                    left = Math.max(left, 0);
                    top = Math.max(top, 0);
                  }

                  this._scrollIntoView({
                    pageDiv: pageView.div,
                    pageSpot: {
                      left: left,
                      top: top
                    },
                    pageNumber: pageNumber
                  });
                }
              }, {
                key: "_updateLocation",
                value: function _updateLocation(firstPage) {
                  var currentScale = this._currentScale;
                  var currentScaleValue = this._currentScaleValue;
                  var normalizedScaleValue = parseFloat(currentScaleValue) === currentScale ? Math.round(currentScale * 10000) / 100 : currentScaleValue;
                  var pageNumber = firstPage.id;
                  var pdfOpenParams = "#page=" + pageNumber;
                  pdfOpenParams += "&zoom=" + normalizedScaleValue;
                  var currentPageView = this._pages[pageNumber - 1];
                  var container = this.container;
                  var topLeft = currentPageView.getPagePoint(container.scrollLeft - firstPage.x, container.scrollTop - firstPage.y);
                  var intLeft = Math.round(topLeft[0]);
                  var intTop = Math.round(topLeft[1]);
                  pdfOpenParams += "," + intLeft + "," + intTop;
                  this._location = {
                    pageNumber: pageNumber,
                    scale: normalizedScaleValue,
                    top: intTop,
                    left: intLeft,
                    rotation: this._pagesRotation,
                    pdfOpenParams: pdfOpenParams
                  };
                }
              }, {
                key: "_updateHelper",
                value: function _updateHelper(visiblePages) {
                  throw new Error("Not implemented: _updateHelper");
                }
              }, {
                key: "update",
                value: function update() {
                  var visible = this._getVisiblePages();

                  var visiblePages = visible.views,
                      numVisiblePages = visiblePages.length;

                  if (numVisiblePages === 0) {
                    return;
                  }

                  var newCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * numVisiblePages + 1);

                  this._buffer.resize(newCacheSize, visiblePages);

                  this.renderingQueue.renderHighestPriority(visible);

                  this._updateHelper(visiblePages);

                  this._updateLocation(visible.first);

                  this.eventBus.dispatch("updateviewarea", {
                    source: this,
                    location: this._location
                  });
                }
              }, {
                key: "containsElement",
                value: function containsElement(element) {
                  return this.container.contains(element);
                }
              }, {
                key: "focus",
                value: function focus() {
                  this.container.focus();
                }
              }, {
                key: "_getCurrentVisiblePage",
                value: function _getCurrentVisiblePage() {
                  if (!this.pagesCount) {
                    return {
                      views: []
                    };
                  }

                  var pageView = this._pages[this._currentPageNumber - 1];
                  var element = pageView.div;
                  var view = {
                    id: pageView.id,
                    x: element.offsetLeft + element.clientLeft,
                    y: element.offsetTop + element.clientTop,
                    view: pageView
                  };
                  return {
                    first: view,
                    last: view,
                    views: [view]
                  };
                }
              }, {
                key: "_getVisiblePages",
                value: function _getVisiblePages() {
                  return (0, _ui_utils.getVisibleElements)(this.container, this._pages, true, this._isScrollModeHorizontal);
                }
              }, {
                key: "isPageVisible",
                value: function isPageVisible(pageNumber) {
                  if (!this.pdfDocument) {
                    return false;
                  }

                  if (pageNumber < 1 || pageNumber > this.pagesCount) {
                    console.error("".concat(this._name, ".isPageVisible: \"").concat(pageNumber, "\" is out of bounds."));
                    return false;
                  }

                  return this._getVisiblePages().views.some(function (view) {
                    return view.id === pageNumber;
                  });
                }
              }, {
                key: "cleanup",
                value: function cleanup() {
                  for (var i = 0, ii = this._pages.length; i < ii; i++) {
                    if (this._pages[i] && this._pages[i].renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
                      this._pages[i].reset();
                    }
                  }
                }
              }, {
                key: "_cancelRendering",
                value: function _cancelRendering() {
                  for (var i = 0, ii = this._pages.length; i < ii; i++) {
                    if (this._pages[i]) {
                      this._pages[i].cancelRendering();
                    }
                  }
                }
              }, {
                key: "_ensurePdfPageLoaded",
                value: function _ensurePdfPageLoaded(pageView) {
                  var _this76 = this;

                  if (pageView.pdfPage) {
                    return Promise.resolve(pageView.pdfPage);
                  }

                  if (this._pagesRequests.has(pageView)) {
                    return this._pagesRequests.get(pageView);
                  }

                  var promise = this.pdfDocument.getPage(pageView.id).then(function (pdfPage) {
                    if (!pageView.pdfPage) {
                      pageView.setPdfPage(pdfPage);
                    }

                    _this76._pagesRequests["delete"](pageView);

                    return pdfPage;
                  })["catch"](function (reason) {
                    console.error("Unable to get page for page view", reason);

                    _this76._pagesRequests["delete"](pageView);
                  });

                  this._pagesRequests.set(pageView, promise);

                  return promise;
                }
              }, {
                key: "forceRendering",
                value: function forceRendering(currentlyVisiblePages) {
                  var _this77 = this;

                  var visiblePages = currentlyVisiblePages || this._getVisiblePages();

                  var scrollAhead = this._isScrollModeHorizontal ? this.scroll.right : this.scroll.down;
                  var pageView = this.renderingQueue.getHighestPriority(visiblePages, this._pages, scrollAhead);

                  if (pageView) {
                    this._ensurePdfPageLoaded(pageView).then(function () {
                      _this77.renderingQueue.renderView(pageView);
                    });

                    return true;
                  }

                  return false;
                }
              }, {
                key: "createTextLayerBuilder",
                value: function createTextLayerBuilder(textLayerDiv, pageIndex, viewport) {
                  var enhanceTextSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                  var eventBus = arguments.length > 4 ? arguments[4] : undefined;
                  return new _text_layer_builder.TextLayerBuilder({
                    textLayerDiv: textLayerDiv,
                    eventBus: eventBus,
                    pageIndex: pageIndex,
                    viewport: viewport,
                    findController: this.isInPresentationMode ? null : this.findController,
                    enhanceTextSelection: this.isInPresentationMode ? false : enhanceTextSelection
                  });
                }
              }, {
                key: "createAnnotationLayerBuilder",
                value: function createAnnotationLayerBuilder(pageDiv, pdfPage) {
                  var imageResourcesPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                  var renderInteractiveForms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                  var l10n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _ui_utils.NullL10n;
                  return new _annotation_layer_builder.AnnotationLayerBuilder({
                    pageDiv: pageDiv,
                    pdfPage: pdfPage,
                    imageResourcesPath: imageResourcesPath,
                    renderInteractiveForms: renderInteractiveForms,
                    linkService: this.linkService,
                    downloadManager: this.downloadManager,
                    l10n: l10n
                  });
                }
              }, {
                key: "getPagesOverview",
                value: function getPagesOverview() {
                  var pagesOverview = this._pages.map(function (pageView) {
                    var viewport = pageView.pdfPage.getViewport({
                      scale: 1
                    });
                    return {
                      width: viewport.width,
                      height: viewport.height,
                      rotation: viewport.rotation
                    };
                  });

                  if (!this.enablePrintAutoRotate) {
                    return pagesOverview;
                  }

                  var isFirstPagePortrait = (0, _ui_utils.isPortraitOrientation)(pagesOverview[0]);
                  return pagesOverview.map(function (size) {
                    if (isFirstPagePortrait === (0, _ui_utils.isPortraitOrientation)(size)) {
                      return size;
                    }

                    return {
                      width: size.height,
                      height: size.width,
                      rotation: (size.rotation + 90) % 360
                    };
                  });
                }
              }, {
                key: "_updateScrollMode",
                value: function _updateScrollMode() {
                  var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                  var scrollMode = this._scrollMode,
                      viewer = this.viewer;
                  viewer.classList.toggle("scrollHorizontal", scrollMode === _ui_utils.ScrollMode.HORIZONTAL);
                  viewer.classList.toggle("scrollWrapped", scrollMode === _ui_utils.ScrollMode.WRAPPED);

                  if (!this.pdfDocument || !pageNumber) {
                    return;
                  }

                  if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
                    this._setScale(this._currentScaleValue, true);
                  }

                  this._setCurrentPageNumber(pageNumber, true);

                  this.update();
                }
              }, {
                key: "_updateSpreadMode",
                value: function _updateSpreadMode() {
                  var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (!this.pdfDocument) {
                    return;
                  }

                  var viewer = this.viewer,
                      pages = this._pages;
                  viewer.textContent = "";

                  if (this._spreadMode === _ui_utils.SpreadMode.NONE) {
                    for (var i = 0, iMax = pages.length; i < iMax; ++i) {
                      viewer.appendChild(pages[i].div);
                    }
                  } else {
                    var parity = this._spreadMode - 1;
                    var spread = null;

                    for (var _i11 = 0, _iMax = pages.length; _i11 < _iMax; ++_i11) {
                      if (spread === null) {
                        spread = document.createElement("div");
                        spread.className = "spread";
                        viewer.appendChild(spread);
                      } else if (_i11 % 2 === parity) {
                        spread = spread.cloneNode(false);
                        viewer.appendChild(spread);
                      }

                      spread.appendChild(pages[_i11].div);
                    }
                  }

                  if (!pageNumber) {
                    return;
                  }

                  this._setCurrentPageNumber(pageNumber, true);

                  this.update();
                }
              }, {
                key: "pagesCount",
                get: function get() {
                  return this._pages.length;
                }
              }, {
                key: "pageViewsReady",
                get: function get() {
                  if (!this._pagesCapability.settled) {
                    return false;
                  }

                  return this._pages.every(function (pageView) {
                    return pageView && pageView.pdfPage;
                  });
                }
              }, {
                key: "currentPageNumber",
                get: function get() {
                  return this._currentPageNumber;
                },
                set: function set(val) {
                  if (!Number.isInteger(val)) {
                    throw new Error("Invalid page number.");
                  }

                  if (!this.pdfDocument) {
                    return;
                  }

                  if (!this._setCurrentPageNumber(val, true)) {
                    console.error("".concat(this._name, ".currentPageNumber: \"").concat(val, "\" is not a valid page."));
                  }
                }
              }, {
                key: "currentPageLabel",
                get: function get() {
                  return this._pageLabels && this._pageLabels[this._currentPageNumber - 1];
                },
                set: function set(val) {
                  if (!this.pdfDocument) {
                    return;
                  }

                  var page = val | 0;

                  if (this._pageLabels) {
                    var i = this._pageLabels.indexOf(val);

                    if (i >= 0) {
                      page = i + 1;
                    }
                  }

                  if (!this._setCurrentPageNumber(page, true)) {
                    console.error("".concat(this._name, ".currentPageLabel: \"").concat(val, "\" is not a valid page."));
                  }
                }
              }, {
                key: "currentScale",
                get: function get() {
                  return this._currentScale !== _ui_utils.UNKNOWN_SCALE ? this._currentScale : _ui_utils.DEFAULT_SCALE;
                },
                set: function set(val) {
                  if (isNaN(val)) {
                    throw new Error("Invalid numeric scale.");
                  }

                  if (!this.pdfDocument) {
                    return;
                  }

                  this._setScale(val, false);
                }
              }, {
                key: "currentScaleValue",
                get: function get() {
                  return this._currentScaleValue;
                },
                set: function set(val) {
                  if (!this.pdfDocument) {
                    return;
                  }

                  this._setScale(val, false);
                }
              }, {
                key: "pagesRotation",
                get: function get() {
                  return this._pagesRotation;
                },
                set: function set(rotation) {
                  if (!(0, _ui_utils.isValidRotation)(rotation)) {
                    throw new Error("Invalid pages rotation angle.");
                  }

                  if (!this.pdfDocument) {
                    return;
                  }

                  if (this._pagesRotation === rotation) {
                    return;
                  }

                  this._pagesRotation = rotation;
                  var pageNumber = this._currentPageNumber;

                  for (var i = 0, ii = this._pages.length; i < ii; i++) {
                    var pageView = this._pages[i];
                    pageView.update(pageView.scale, rotation);
                  }

                  if (this._currentScaleValue) {
                    this._setScale(this._currentScaleValue, true);
                  }

                  this.eventBus.dispatch("rotationchanging", {
                    source: this,
                    pagesRotation: rotation,
                    pageNumber: pageNumber
                  });

                  if (this.defaultRenderingQueue) {
                    this.update();
                  }
                }
              }, {
                key: "firstPagePromise",
                get: function get() {
                  return this.pdfDocument ? this._firstPageCapability.promise : null;
                }
              }, {
                key: "onePageRendered",
                get: function get() {
                  return this.pdfDocument ? this._onePageRenderedCapability.promise : null;
                }
              }, {
                key: "pagesPromise",
                get: function get() {
                  return this.pdfDocument ? this._pagesCapability.promise : null;
                }
              }, {
                key: "_setDocumentViewerElement",
                get: function get() {
                  throw new Error("Not implemented: _setDocumentViewerElement");
                }
              }, {
                key: "_isScrollModeHorizontal",
                get: function get() {
                  return this.isInPresentationMode ? false : this._scrollMode === _ui_utils.ScrollMode.HORIZONTAL;
                }
              }, {
                key: "isInPresentationMode",
                get: function get() {
                  return this.presentationModeState === _ui_utils.PresentationModeState.FULLSCREEN;
                }
              }, {
                key: "isChangingPresentationMode",
                get: function get() {
                  return this.presentationModeState === _ui_utils.PresentationModeState.CHANGING;
                }
              }, {
                key: "isHorizontalScrollbarEnabled",
                get: function get() {
                  return this.isInPresentationMode ? false : this.container.scrollWidth > this.container.clientWidth;
                }
              }, {
                key: "isVerticalScrollbarEnabled",
                get: function get() {
                  return this.isInPresentationMode ? false : this.container.scrollHeight > this.container.clientHeight;
                }
              }, {
                key: "hasEqualPageSizes",
                get: function get() {
                  var firstPageView = this._pages[0];

                  for (var i = 1, ii = this._pages.length; i < ii; ++i) {
                    var pageView = this._pages[i];

                    if (pageView.width !== firstPageView.width || pageView.height !== firstPageView.height) {
                      return false;
                    }
                  }

                  return true;
                }
              }, {
                key: "scrollMode",
                get: function get() {
                  return this._scrollMode;
                },
                set: function set(mode) {
                  if (this._scrollMode === mode) {
                    return;
                  }

                  if (!(0, _ui_utils.isValidScrollMode)(mode)) {
                    throw new Error("Invalid scroll mode: ".concat(mode));
                  }

                  this._scrollMode = mode;
                  this.eventBus.dispatch("scrollmodechanged", {
                    source: this,
                    mode: mode
                  });

                  this._updateScrollMode(this._currentPageNumber);
                }
              }, {
                key: "spreadMode",
                get: function get() {
                  return this._spreadMode;
                },
                set: function set(mode) {
                  if (this._spreadMode === mode) {
                    return;
                  }

                  if (!(0, _ui_utils.isValidSpreadMode)(mode)) {
                    throw new Error("Invalid spread mode: ".concat(mode));
                  }

                  this._spreadMode = mode;
                  this.eventBus.dispatch("spreadmodechanged", {
                    source: this,
                    mode: mode
                  });

                  this._updateSpreadMode(this._currentPageNumber);
                }
              }]);

              return BaseViewer;
            }();

            exports.BaseViewer = BaseViewer;
            /***/
          },
          /* 17 */

          /***/
          function (module, exports, __w_pdfjs_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PDFViewer = void 0;

            var _base_viewer = __w_pdfjs_require__(16);

            var _pdfjsLib = __w_pdfjs_require__(2);

            var PDFViewer = /*#__PURE__*/function (_base_viewer$BaseView2) {
              _inherits(PDFViewer, _base_viewer$BaseView2);

              var _super39 = _createSuper(PDFViewer);

              function PDFViewer() {
                _classCallCheck(this, PDFViewer);

                return _super39.apply(this, arguments);
              }

              _createClass(PDFViewer, [{
                key: "_scrollIntoView",
                value: function _scrollIntoView(_ref58) {
                  var pageDiv = _ref58.pageDiv,
                      _ref58$pageSpot = _ref58.pageSpot,
                      pageSpot = _ref58$pageSpot === void 0 ? null : _ref58$pageSpot,
                      _ref58$pageNumber = _ref58.pageNumber,
                      pageNumber = _ref58$pageNumber === void 0 ? null : _ref58$pageNumber;

                  if (!pageSpot && !this.isInPresentationMode) {
                    var left = pageDiv.offsetLeft + pageDiv.clientLeft;
                    var right = left + pageDiv.clientWidth;
                    var _this$container = this.container,
                        scrollLeft = _this$container.scrollLeft,
                        clientWidth = _this$container.clientWidth;

                    if (this._isScrollModeHorizontal || left < scrollLeft || right > scrollLeft + clientWidth) {
                      pageSpot = {
                        left: 0,
                        top: 0
                      };
                    }
                  }

                  _get(_getPrototypeOf(PDFViewer.prototype), "_scrollIntoView", this).call(this, {
                    pageDiv: pageDiv,
                    pageSpot: pageSpot,
                    pageNumber: pageNumber
                  });
                }
              }, {
                key: "_getVisiblePages",
                value: function _getVisiblePages() {
                  if (this.isInPresentationMode) {
                    return this._getCurrentVisiblePage();
                  }

                  return _get(_getPrototypeOf(PDFViewer.prototype), "_getVisiblePages", this).call(this);
                }
              }, {
                key: "_updateHelper",
                value: function _updateHelper(visiblePages) {
                  if (this.isInPresentationMode) {
                    return;
                  }

                  var currentId = this._currentPageNumber;
                  var stillFullyVisible = false;

                  var _iterator23 = _createForOfIteratorHelper(visiblePages),
                      _step23;

                  try {
                    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                      var page = _step23.value;

                      if (page.percent < 100) {
                        break;
                      }

                      if (page.id === currentId) {
                        stillFullyVisible = true;
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator23.e(err);
                  } finally {
                    _iterator23.f();
                  }

                  if (!stillFullyVisible) {
                    currentId = visiblePages[0].id;
                  }

                  this._setCurrentPageNumber(currentId);
                }
              }, {
                key: "_setDocumentViewerElement",
                get: function get() {
                  return (0, _pdfjsLib.shadow)(this, "_setDocumentViewerElement", this.viewer);
                }
              }]);

              return PDFViewer;
            }(_base_viewer.BaseViewer);

            exports.PDFViewer = PDFViewer;
            /***/
          }
          /******/
          ])
        );
      }); //# sourceMappingURL=pdf_viewer.js.map

      /***/

    },

    /***/
    "mplv":
    /*!***************************************************!*\
      !*** ./src/app/pages/docs/docs-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: DocsRoutingModule */

    /***/
    function mplv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocsRoutingModule", function () {
        return DocsRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _docs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./docs.component */
      "Bsbq");

      var routes = [{
        path: '',
        component: _docs_component__WEBPACK_IMPORTED_MODULE_2__["DocsComponent"]
      }];

      var DocsRoutingModule = function DocsRoutingModule() {
        _classCallCheck(this, DocsRoutingModule);
      };

      DocsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DocsRoutingModule
      });
      DocsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function DocsRoutingModule_Factory(t) {
          return new (t || DocsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DocsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DocsRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "mrSG":
    /*!*****************************************!*\
      !*** ./node_modules/tslib/tslib.es6.js ***!
      \*****************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function mrSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function __exportStar(m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-docs-docs-module-es5.js.map