(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dependencies-dependencies-module"], {
    /***/
    "HX46":
    /*!**************************************************************!*\
      !*** ./src/app/pages/dependencies/dependencies.component.ts ***!
      \**************************************************************/

    /*! exports provided: DependenciesComponent */

    /***/
    function HX46(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DependenciesComponent", function () {
        return DependenciesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");

      function DependenciesComponent_mat_expansion_panel_1_mat_panel_description_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.description, " ");
        }
      }

      function DependenciesComponent_mat_expansion_panel_1_mat_list_5_mat_list_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DependenciesComponent_mat_expansion_panel_1_mat_list_5_mat_list_item_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var deps_r9 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r10.downloadFromAsset(deps_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var deps_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", deps_r9.split("/")[deps_r9.split("/").length - 1], " ");
        }
      }

      function DependenciesComponent_mat_expansion_panel_1_mat_list_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DependenciesComponent_mat_expansion_panel_1_mat_list_5_mat_list_item_1_Template, 4, 1, "mat-list-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4.dependencies);
        }
      }

      function DependenciesComponent_mat_expansion_panel_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DependenciesComponent_mat_expansion_panel_1_mat_panel_description_4_Template, 2, 1, "mat-panel-description", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DependenciesComponent_mat_expansion_panel_1_mat_list_5_Template, 2, 1, "mat-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4 == null ? null : item_r4.dependencies == null ? null : item_r4.dependencies.length);
        }
      }

      var DependenciesComponent = /*#__PURE__*/function () {
        function DependenciesComponent() {
          _classCallCheck(this, DependenciesComponent);

          this.items = [{
            title: 'Lab 07',
            dependencies: ['assets/dependencies/lab_07/cancer.pdf', 'assets/dependencies/lab_07/mytree.dot', 'assets/dependencies/lab_07/ram_price.csv', 'assets/dependencies/lab_07/tmp', 'assets/dependencies/lab_07/tmp.png', 'assets/dependencies/lab_07/tree.dot']
          }];
        }

        _createClass(DependenciesComponent, [{
          key: "downloadFromAsset",
          value: function downloadFromAsset(depsPath) {
            if (!depsPath) {
              return;
            }

            var filename = depsPath.split('/')[depsPath.split('/').length - 1];
            var link = document.createElement("a");
            link.download = filename;
            link.href = depsPath;
            link.click();
          }
        }]);

        return DependenciesComponent;
      }();

      DependenciesComponent.ɵfac = function DependenciesComponent_Factory(t) {
        return new (t || DependenciesComponent)();
      };

      DependenciesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DependenciesComponent,
        selectors: [["app-dependencies"]],
        decls: 2,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-button", "", 1, "truncate", 3, "click"]],
        template: function DependenciesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DependenciesComponent_mat_expansion_panel_1_Template, 6, 3, "mat-expansion-panel", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelDescription"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"]],
        styles: ["app-dependencies[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n}\napp-dependencies[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 80%;\n}\napp-dependencies[_nghost-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]:first-child {\n  margin-top: 50px;\n}\napp-dependencies[_nghost-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 50px;\n}\n.truncate[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVwZW5kZW5jaWVzL2RlcGVuZGVuY2llcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7QUFBRjtBQUVFO0VBQ0UsVUFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtBQURKO0FBR0U7RUFDRSxtQkFBQTtBQURKO0FBS0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlcGVuZGVuY2llcy9kZXBlbmRlbmNpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdChhcHAtZGVwZW5kZW5jaWVzKSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgJiA+ICoge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICBtYXQtZXhwYW5zaW9uLXBhbmVsOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIG1hdC1leHBhbnNpb24tcGFuZWw6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxufVxuXG4udHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DependenciesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dependencies',
            templateUrl: './dependencies.component.html',
            styleUrls: ['./dependencies.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "W6SC":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/dependencies/dependencies-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DependenciesRoutingModule */

    /***/
    function W6SC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DependenciesRoutingModule", function () {
        return DependenciesRoutingModule;
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


      var _dependencies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dependencies.component */
      "HX46");

      var routes = [{
        path: '',
        component: _dependencies_component__WEBPACK_IMPORTED_MODULE_2__["DependenciesComponent"]
      }];

      var DependenciesRoutingModule = function DependenciesRoutingModule() {
        _classCallCheck(this, DependenciesRoutingModule);
      };

      DependenciesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DependenciesRoutingModule
      });
      DependenciesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function DependenciesRoutingModule_Factory(t) {
          return new (t || DependenciesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DependenciesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DependenciesRoutingModule, [{
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
    "k8GC":
    /*!***********************************************************!*\
      !*** ./src/app/pages/dependencies/dependencies.module.ts ***!
      \***********************************************************/

    /*! exports provided: DependenciesModule */

    /***/
    function k8GC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DependenciesModule", function () {
        return DependenciesModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dependencies-routing.module */
      "W6SC");
      /* harmony import */


      var src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/shared/shared.module */
      "MfXf");
      /* harmony import */


      var _dependencies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dependencies.component */
      "HX46");

      var DependenciesModule = function DependenciesModule() {
        _classCallCheck(this, DependenciesModule);
      };

      DependenciesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DependenciesModule
      });
      DependenciesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function DependenciesModule_Factory(t) {
          return new (t || DependenciesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependenciesRoutingModule"], src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DependenciesModule, {
          declarations: [_dependencies_component__WEBPACK_IMPORTED_MODULE_4__["DependenciesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependenciesRoutingModule"], src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DependenciesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_dependencies_component__WEBPACK_IMPORTED_MODULE_4__["DependenciesComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dependencies_routing_module__WEBPACK_IMPORTED_MODULE_2__["DependenciesRoutingModule"], src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-dependencies-dependencies-module-es5.js.map