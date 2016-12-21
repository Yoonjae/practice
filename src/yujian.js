/**
 * Created by yujian on 2016/12/19.
 */
require('jquery');
require('../sass/homepage.scss');

(function () {
    require('../lib/bootstrap/assets/javascripts/bootstrap');


    var data = {'data':[{'format':'jpg','height':2256,'igroupId':88,'imageCount':1,'imageId':114,'isWeb':'true','name':'2','size':1138118,
        'thumbnail':'http://www.zhimengzhe.com/d/file/p/2016-11-03/99be6172b982e1f0a7dc0b953fc44a98.jpg','title':'fwef-001',
        'type':'group','width':3168},{'format':'jpg','height':2256,'igroupId':88,'imageCount':1,'imageId':114,'isWeb':'true','name':'2','size':1138118,
        'thumbnail':'http://www.zhimengzhe.com/d/file/p/2016-11-03/99be6172b982e1f0a7dc0b953fc44a98.jpg','title':'fwef-001',
        'type':'group','width':3168},{'format':'jpg','height':2256,'igroupId':88,'imageCount':1,'imageId':114,'isWeb':'true','name':'2','size':1138118,
        'thumbnail':'http://www.zhimengzhe.com/d/file/p/2016-11-03/99be6172b982e1f0a7dc0b953fc44a98.jpg','title':'fwef-001',
        'type':'group','width':3168}]};

    var Base = require('./base/base'),
        Urls = require('./base/urls')
        ,$body = $('body');

    var yujian = function () {
        this._init();
    };

    yujian.prototype._init = function () {
        this.templatebgimage = require('../template/bgimage.html');

        this.getbgimage();
    };

    yujian.prototype.getbgimage = function () {
        var self = this;
        var postData = {
            start : 0,
            length:10,
            flag:1
        };

        $('#bgimage').html(self.templatebgimage({list:data.data}));

        // Base.get(Urls.imageList.getJsonByType,postData,function (res) {
        //     console.log(res);
        // });

        $('.imgsource').on('click',function () {
           Base.confirm('删除','确认删除',function ($model) {
               $model.modal('hide');
           }) ;
        });
    };

    new yujian();
})();