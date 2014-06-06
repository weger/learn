;(function (widgetFactory) {
 
    if (typeof define === "function" && define.amd) {
        // AMD模式
        define("jquery.ui.widget", ["jquery"], function () {
 
            widgetFactory(window.jQuery);
 
        });
    } else {
        // 全局模式
        widgetFactory(window.jQuery);
    }
}(function ($, undefined) {
 
    // jQuery Widget Factory 代码
 
}));