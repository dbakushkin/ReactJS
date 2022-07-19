webpackHotUpdate("main",{

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColors = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nvar EColors;\r\n(function (EColors) {\r\n    EColors[\"black\"] = \"#333333\";\r\n    EColors[\"orange\"] = \"#CC6633\";\r\n    EColors[\"green\"] = \"#A4CC33\";\r\n    EColors[\"white\"] = \"white\";\r\n    EColors[\"greyF4\"] = \"greyF4\";\r\n    EColors[\"greyF3\"] = \"greyF3\";\r\n    EColors[\"greyD9\"] = \"greyD9\";\r\n    EColors[\"greyC4\"] = \"greyC4\";\r\n    EColors[\"grey99\"] = \"grey99\";\r\n    EColors[\"grey66\"] = \"grey66\";\r\n})(EColors = exports.EColors || (exports.EColors = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? \"span\" : _d, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize, _e = props.color, color = _e === void 0 ? EColors.black : _e;\r\n    var classes = (0, classnames_1.default)(text_css_1.default[\"s\".concat(size)], (_a = {}, _a[text_css_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_css_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c), text_css_1.default[color]);\r\n    return react_1.default.createElement(As, { className: classes }, children);\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ })

})