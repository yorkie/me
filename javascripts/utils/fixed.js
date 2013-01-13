define(function(require, exports, module) {

    var $ = require('$');
    // 用于保存可能修改到的样式
    var originStyles = {
        position: null,
        top: null
    };
    var ie6 = $.browser.msie && $.browser.version == 6.0;

    // Fixed
    // ---
    // 制造跟随滚动效果的模块
    // element 是需要跟随滚动的目标元素
    // marginTop 指当元素距离可视窗口顶部的距离等于这个值时，开始触发跟随 fixed 状态
    var Fixed = function(element, marginTop) {

        // 准备一些基本元素
        element = $(element);
        marginTop = marginTop || 0;
        var doc = $(document);

        // 一个元素指允许绑定一次
        if (element.data('bind-fixed')) {
            return;
        }

        // 记录元素原来的位置
        var originTop = element.offset().top;
        // 修正过高的 marginTop
        marginTop = marginTop<=originTop ? marginTop : originTop;

        // 保存原有的样式
        for (var style in originStyles) {
            if (originStyles.hasOwnProperty(style)) {
                originStyles[style] = element.css(style);
            }
        }
        
        var scrollFn = !ie6 ? function() {
            // 计算元素距离当前窗口上方的距离
            var distance = originTop - doc.scrollTop();

            // 当距离小于等于预设的值时
            // 将元素设为 fix 状态
            if (!element.data('_fixed') && distance <= marginTop) {
                element.css({
                    position: 'fixed',
                    top: marginTop
                });
                element.data('_fixed', true);
            } else if (element.data('_fixed') && distance > marginTop) {
                // 恢复原有的样式
                element.css(originStyles);
                element.data('_fixed', false);
            }
        } : function() {
            // 计算元素距离当前窗口上方的距离
            var distance = originTop - doc.scrollTop();

            // 当距离小于等于预设的值时
            // 将元素设为 fix 状态
            if (distance <= marginTop) {
                element.css({
                    position: 'absolute',
                    top: marginTop + doc.scrollTop()
                });
                element.data('_fixed', true);
            } else if (element.data('_fixed') && distance > marginTop) {
                // 恢复原有的样式
                element.css(originStyles);
                element.data('_fixed', false);
            }
        };

        // 先运行一次
        scrollFn();
        // 监听滚动事件
        // fixed 是本模块绑定的滚动事件的命名空间
        doc.on('scroll', scrollFn);
        element.data('bind-fixed', true);
    };

    module.exports = Fixed;

});