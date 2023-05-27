//index.js:
 (function(modules, entryModule) {
    var cache = {};
    function require(id) {
        if (cache[id]) return cache[id].exports;
        var module = {
            id: id,
            exports: {}
        };
        modules[id](module, module.exports, require);
        cache[id] = module;
        return module.exports;
    }
    require(entryModule);
})({
    "d2214aaa": function(module, exports, farmRequire, dynamicRequire) {
        "use strict";
        console.log("runtime/index.js");
        __farm_global_this__.__farm_module_system__.setPlugins([]);
    }
}, "d2214aaa");
(function(modules) {
    for(var key in modules){
        var __farm_global_this__ = globalThis || window || global || self;
        __farm_global_this__.__farm_module_system__.register(key, modules[key]);
    }
})({
    "363fc137": function(module, exports, farmRequire, dynamicRequire) {
        console.log("utils.js");
    },
    "b5d64806": function(module, exports, farmRequire, dynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const fs = farmRequire("e4b1dea3");
        const utils = farmRequire("363fc137");
        console.log(fs, utils);
    },
    "e4b1dea3": function(module, exports, farmRequire, dynamicRequire) {
        console.log("fs-extra");
    }
});
var __farm_global_this__ = globalThis || window || global || self;
var farmModuleSystem = __farm_global_this__.__farm_module_system__;
farmModuleSystem.bootstrap();
var entry = farmModuleSystem.require("b5d64806");