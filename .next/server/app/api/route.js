"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/route";
exports.ids = ["app/api/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=%2Fhome%2Fsokul%2Fstrona%2Fmy-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsokul%2Fstrona%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=%2Fhome%2Fsokul%2Fstrona%2Fmy-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsokul%2Fstrona%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_sokul_strona_my_app_app_api_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/route.ts */ \"(rsc)/./app/api/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/route\",\n        pathname: \"/api\",\n        filename: \"route\",\n        bundlePath: \"app/api/route\"\n    },\n    resolvedPagePath: \"/home/sokul/strona/my-app/app/api/route.ts\",\n    nextConfigOutput,\n    userland: _home_sokul_strona_my_app_app_api_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc29rdWwlMkZzdHJvbmElMkZteS1hcHAlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZzb2t1bCUyRnN0cm9uYSUyRm15LWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDTjtBQUN2RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8/ODc5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9zb2t1bC9zdHJvbmEvbXktYXBwL2FwcC9hcGkvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGlcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvc29rdWwvc3Ryb25hL215LWFwcC9hcHAvYXBpL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=%2Fhome%2Fsokul%2Fstrona%2Fmy-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsokul%2Fstrona%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/route.ts":
/*!**************************!*\
  !*** ./app/api/route.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/mongodb */ \"(rsc)/./app/lib/mongodb.ts\");\n// pages/api/invitation.ts\n\n\nasync function GET(req, res) {\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"osoby_osiemnastka\");\n        const invitation = await db.collection(\"zaproszeni\").find({}).toArray();\n        //console.log(invitation);\n        const invitationsCount = await db.collection(\"zaproszeni\").countDocuments();\n        const info = await db.collection(\"info\").findOne({});\n        const all = Object.assign({}, invitation, info, {\n            count: invitationsCount\n        });\n        console.log(all);\n        console.log(\"===================================\");\n        console.log(JSON.stringify(all));\n        if (!invitation || !info) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invitation not found\"\n            }, {\n                status: 404\n            });\n        }\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(all), {\n            status: 200,\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n    } catch (e) {\n        console.error(e);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"inter\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req, res) {\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"osoby_osiemnastka\");\n        const newInvitation = req.body;\n        if (!newInvitation.imie_nazwisko || !newInvitation.location || !newInvitation.date || !newInvitation.time) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing fields\"\n            }, {\n                status: 400\n            });\n        }\n        const result = await db.collection(\"zaproszeni\").insertOne(newInvitation);\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Invitation created\"\n        }, {\n            status: 201\n        });\n    } catch (e) {\n        console.error(e);\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(req, res) {\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"osoby_osiemnastka\");\n        const result = await db.collection(\"zaproszeni\").deleteOne({});\n        if (result.deletedCount === 0) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No invitation found to delete\"\n            }, {\n                status: 404\n            });\n            return;\n        }\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Invitation deleted\"\n        }, {\n            status: 200\n        });\n    } catch (e) {\n        console.error(e);\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDRjtRQUVBLE9BQU8sSUFBSXpCLHFEQUFZQSxDQUFDdUIsSUFBSSxDQUFDO1lBQUVjLFNBQVM7UUFBcUIsR0FBRztZQUFFWixRQUFRO1FBQUk7SUFDaEYsRUFBRSxPQUFPRSxHQUFHO1FBQ1ZSLFFBQVFLLEtBQUssQ0FBQ0c7UUFDZCxPQUFPLElBQUkzQixxREFBWUEsQ0FBQ3VCLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2pGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9hcHAvYXBpL3JvdXRlLnRzPzE0NGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL2ludml0YXRpb24udHNcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vbGliL21vbmdvZGInO1xuXG5pbnRlcmZhY2UgSW52aXRhdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICB0aW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ29zb2J5X29zaWVtbmFzdGthJyk7XG4gICAgY29uc3QgaW52aXRhdGlvbiA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3phcHJvc3plbmknKS5maW5kKHt9KS50b0FycmF5KCk7XG4gICAgLy9jb25zb2xlLmxvZyhpbnZpdGF0aW9uKTtcbiAgICBjb25zdCBpbnZpdGF0aW9uc0NvdW50ID0gYXdhaXQgZGIuY29sbGVjdGlvbignemFwcm9zemVuaScpLmNvdW50RG9jdW1lbnRzKCk7XG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2luZm8nKS5maW5kT25lKHt9KTtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuYXNzaWduKHt9LCBpbnZpdGF0aW9uLCBpbmZvLCB7IGNvdW50OiBpbnZpdGF0aW9uc0NvdW50IH0pO1xuXG4gICAgY29uc29sZS5sb2coYWxsKTtcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShhbGwpKTtcbiAgICBpZiAoIWludml0YXRpb24gfHwgIWluZm8pIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlLmpzb24oIHtlcnJvcjogJ0ludml0YXRpb24gbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeShhbGwpLCB7IHN0YXR1czogMjAwLCBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfX0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJpbnRlclwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCdvc29ieV9vc2llbW5hc3RrYScpO1xuICAgIGNvbnN0IG5ld0ludml0YXRpb246IEludml0YXRpb24gPSByZXEuYm9keTtcblxuICAgIGlmICghbmV3SW52aXRhdGlvbi5pbWllX25hendpc2tvIHx8ICFuZXdJbnZpdGF0aW9uLmxvY2F0aW9uIHx8ICFuZXdJbnZpdGF0aW9uLmRhdGUgfHwgIW5ld0ludml0YXRpb24udGltZSkge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWlzc2luZyBmaWVsZHMnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbignemFwcm9zemVuaScpLmluc2VydE9uZShuZXdJbnZpdGF0aW9uKTtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0ludml0YXRpb24gY3JlYXRlZCcgfSwgeyBzdGF0dXM6IDIwMSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCdvc29ieV9vc2llbW5hc3RrYScpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbignemFwcm9zemVuaScpLmRlbGV0ZU9uZSh7fSk7XG5cbiAgICBpZiAocmVzdWx0LmRlbGV0ZWRDb3VudCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTm8gaW52aXRhdGlvbiBmb3VuZCB0byBkZWxldGUnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdJbnZpdGF0aW9uIGRlbGV0ZWQnIH0sIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNsaWVudFByb21pc2UiLCJHRVQiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJkYiIsImludml0YXRpb24iLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJpbnZpdGF0aW9uc0NvdW50IiwiY291bnREb2N1bWVudHMiLCJpbmZvIiwiZmluZE9uZSIsImFsbCIsIk9iamVjdCIsImFzc2lnbiIsImNvdW50IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJoZWFkZXJzIiwiZSIsIlBPU1QiLCJuZXdJbnZpdGF0aW9uIiwiYm9keSIsImltaWVfbmF6d2lza28iLCJsb2NhdGlvbiIsImRhdGUiLCJ0aW1lIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwibWVzc2FnZSIsIkRFTEVURSIsImRlbGV0ZU9uZSIsImRlbGV0ZWRDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/mongodb.ts":
/*!****************************!*\
  !*** ./app/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// lib/mongodb.ts\n\nconst uri = process.env.MONGODB_URI || \"mongodb+srv://sokul:Sokul9045@cluster0.fkbmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\"; // Dodaj URI swojej bazy MongoDB do pliku .env\nconst options = {};\nlet client;\nlet clientPromise;\nif (!uri) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable to preserve the client across module reloads\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a separate module,\n// we can share the same instance of MongoClient across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUJBQWlCO0FBQ3FCO0FBRXRDLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJLDBHQUEwRyw4Q0FBOEM7QUFDL0wsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNOLEtBQUs7SUFDUixNQUFNLElBQUlPLE1BQU07QUFDbEI7QUFFQSxJQUFJTixJQUF5QixFQUFlO0lBQzFDLDBGQUEwRjtJQUMxRixJQUFJLENBQUNPLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSixTQUFTLElBQUlOLGdEQUFXQSxDQUFDQyxLQUFLSTtRQUM5QkksT0FBT0MsbUJBQW1CLEdBQUdKLE9BQU9LLE9BQU87SUFDN0M7SUFDQUosZ0JBQWdCRSxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUlOO0FBRUQsa0ZBQWtGO0FBQ2xGLGtFQUFrRTtBQUNsRSxpRUFBZUgsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2FwcC9saWIvbW9uZ29kYi50cz84MmU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9tb25nb2RiLnRzXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCAnbW9uZ29kYitzcnY6Ly9zb2t1bDpTb2t1bDkwNDVAY2x1c3RlcjAuZmtibWkubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwJzsgLy8gRG9kYWogVVJJIHN3b2plaiBiYXp5IE1vbmdvREIgZG8gcGxpa3UgLmVudlxuY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+O1xuXG5pZiAoIXVyaSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHRvIHByZXNlcnZlIHRoZSBjbGllbnQgYWNyb3NzIG1vZHVsZSByZWxvYWRzXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZVxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhIHNlcGFyYXRlIG1vZHVsZSxcbi8vIHdlIGNhbiBzaGFyZSB0aGUgc2FtZSBpbnN0YW5jZSBvZiBNb25nb0NsaWVudCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcblxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=%2Fhome%2Fsokul%2Fstrona%2Fmy-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsokul%2Fstrona%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();