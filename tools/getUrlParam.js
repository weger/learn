/**
 * @name 获取url参数
 *
 * @author HI:lovexctk  <zhangwei11@baidu.com>
 * @version 2014-2-26
 */



var Namespace = Namespace || {};

Namespace.config = (function(){
    var _baseUrl = "";
    var _config = {
        siteUrl : _baseUrl,
        aUrl: _baseUrl + "",
        bUrl: _baseUrl + ""
    }

    return _config;
})();

Namespace.main = {};

void function(exports, $) {
    /**
     * @description 获取url参数1
     *
     */
    function getUrlParamOne(name) {
        var reg = new RegExp("[?&]" + name + "=([^?&]*)[&]?", "i");
        var match = location.search.match(reg);
        return match == null ? "" : match[1];
    }

    /**
     * @description 获取url参数2
     *
     */
    var getUrlParamTwo = function() {
        var args = null;
        return function(name) {
            if (args === null) {
                if (location.search == "") return "";
                var queryArray = location.search.substring(1).split("&");
                var i;
                args = {};
                for (i = 0; i < queryArray.length; i++) {
                    var match = queryArray[i].match(/([^=]+)=([^=]+)/);
                    if (match !== null) {
                        args[match[1]] = match[2];
                    }
                }
            }
            return args[name] == undefined ? "" : args[name];
        };
    }();

    exports.getUrlParamOne = getUrlParamOne;
    exports.getUrlParamTwo = getUrlParamTwo;
}(Namespace.main, $);
