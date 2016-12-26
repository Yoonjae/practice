/**
 * Created by yujian on 2016/12/19.
 */
require('jquery');
require('../sass/homepage.scss');

(function () {
    require('../lib/bootstrap/assets/javascripts/bootstrap');

    var Base = require('./base/base'),
        Urls = require('./base/urls')
        ,$body = $('body');

    var topData = {'out':['糯米','新闻','hao123','地图','视频','贴吧','登录','设置']};
    var yujian = function () {
        this._init();
    };

    yujian.prototype._init = function () {
        this.templatebgimage = require('../template/bgimage.html');

        $(document).ready(function () {
            $('.searchinput').focus();
        });

        $('.moreinfo').mouseenter(function () {
            $('.hideright').show();
        });
        $('.hideright').mouseleave(function () {
            $('.hideright').hide();
        });


        $('.searchinput').focus(function(){
            $('.bigsearch').css('border-color','#4791ff');
        });
        $('.searchinput').blur(function () {
            $('.bigsearch').css('border-color','lightgray');
        });
        this.getbgimage();
    };

    yujian.prototype.getbgimage = function () {
        var self = this;

    };

    new yujian();
})();