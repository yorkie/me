define(function (require, exports, module) {

    var H1_reg = /#\s{1}(.+)/gi;
    var H2_reg = /##\s{1}(.+)/gi;
    var H3_reg = /###\s{1}(.+)/gi;
    var P_reg = /.+\r?/gi;

    exports.getByName = function (name, next) {
        var html;
        var text = $.get("/javascripts/posts/" + name + ".txt");

        text.done(function (responseText) {

            var retstr$$ = '';
            responseText.replace(P_reg, function (lineStr) {
                var retStr;
                if (H3_reg.test(lineStr)) {
                    retStr = lineStr.replace(H3_reg, function () {
                        return '<h3>' + arguments[1] + '</h3>';
                    });
                }
                else if (H2_reg.test(lineStr)) {
                    retStr = lineStr.replace(H2_reg, function () {
                        return '<h2>' + arguments[1] + '</h2>';
                    });
                }
                else if (H1_reg.test(lineStr)) {
                    retStr = lineStr.replace(H1_reg, function () {
                        return '<h1>' + arguments[1] + '</h1>';
                    });
                }
                else {
                    retStr = '<p>' + lineStr + '</p>';
                }
                retstr$$ += retStr;
            });

            next.call(this, retstr$$);
        });

        return;
    }

})