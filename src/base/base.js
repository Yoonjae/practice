

(function(){

    var menuList = require('./menu.js')
        , statusObj = require('./status.js');

    var Base = function(){
        this._init();
    };

    // 初始化
    Base.prototype._init = function(){
        this._defaultParams();
        this.defaultDraw();
        this.allHeight();
    };

    // 变量
    Base.prototype._defaultParams = function(){
        this.template_header = require('../../template/header.html');
        this.template_aside = require('../../template/aside.html');
        this.template_footer = require('../../template/footer.html');

        this.$body = $('body');
        this.$wrap = $('#grt_wrap');
        this.$allHeightDoms = $('#grt_wrap, #grt_contain, #grt_content');
    };


    // 渲染 页头 左侧菜单 页尾
    Base.prototype.defaultDraw = function(){
        var menu = {}
            , parsms = this.getParamsFromUrl();
        menu.list = menuList;
        menu.key = parsms.key;
        menu.sub_key = parsms.subKey;
        console.log(menu);
        $('#grt_aside').html(this.template_aside({menu: menu}));

        $('#grt_header').html(this.template_header(parsms));

        $('#grt_footer').html(this.template_footer());
    };

    // loading
    Base.prototype.pointLoading = function($dom, status, className){
        switch (status){
            case 'start':
                $dom.removeClass(className).addClass('icon-loading-point').html('<span class="point1">·</span><span class="point2">·</span><span class="point3">·</span>');
                break;
            case 'finish':
                $dom.removeClass('icon-loading-point').addClass(className).html('');
                break
        }
    };

    // 获取 Url 参数
    Base.prototype.getParamsFromUrl = function(){
        var sParam = location.href.split('?')[1];
        if(sParam){
            var aParams = sParam.split('&')
                , oParams = {};
            for(var i= 0,iLen=aParams.length; i<iLen; i++){
                var param = aParams[i].split('=');
                if(param[0] && param[1]){
                    oParams[param[0]] = decodeURIComponent(param[1]);
                }
            }
            return oParams;
        }else{
            return false;
        }
    };

    // 获取 input / textarea 光标位置
    Base.prototype.getCursorPosition = function(ctrl) {//获取光标位置函数
        var caretPos = 0;    // IE Support
        if (document.selection) {
            ctrl.focus ();
            var Sel = document.selection.createRange ();
            Sel.moveStart ('character', -ctrl.value.length);
            caretPos = Sel.text.length;
        } else if (ctrl.selectionStart || ctrl.selectionStart == '0') {    // Firefox support
            caretPos = ctrl.selectionStart;
        }
        return (caretPos);
    };

    // 设置 input / textarea 光标位置
    Base.prototype.setCursorPosition = function (ctrl, pos){//设置光标位置函数
        if(ctrl.setSelectionRange){
            ctrl.focus();
            ctrl.setSelectionRange(pos,pos);
        } else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    // Object / Array 等深度克隆
    Base.prototype.cloneObj = function(obj){
        var copy;

        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.cloneObj(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.cloneObj(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    };

    // objB 是否包含 objA
    Base.prototype.isEqualObject = function(objA, objB){

        if ( typeof objA !== 'object' || typeof objB !== 'object' ) {
            return false
        }
        for (var key in objA) {
            if (typeof objB[key] === 'undefined') {
                return false
            }
            var valA = objA[key]
                , valB = objB[key];
            if (typeof valA === 'object' && typeof valB === 'object') {
                if (!this.isEqualObject(valA, valB)) {
                    return false
                }
            } else {
                if (valA !== valB) {
                    return false
                }
            }
        }

        for(var x in objB){
            if(typeof objA[x] === 'undefined'){
                return false;
            }
        }
        return true;
    };

    Base.prototype.errorCallback = function(xhr){
        if(xhr.status === 444) {
            this.confirm('Login time out. Please re-login.', function(){
                window.location.href = reclaimGlobal.context + "/login";
            });
        } else {
            //this.alert('Server Internal Error!');
        }
    };

    // 容器是否需要撑满全屏
    Base.prototype.allHeight = function(){
        this.$allHeightDoms.removeClass('all-height');
        if(this.$body.height() >= this.$wrap.height()){
            this.$allHeightDoms.addClass('all-height');
        }
    };

    // 多选框操作
    Base.prototype.checkboxAction = function(allCheckboxSelector, itemCheckboxSelector, callback){

        var self = this;
        // 全选
        this.$body.on('change', allCheckboxSelector, function(e){
            var $checkboxs = self.$body.find(itemCheckboxSelector);

            for(var i= 0,iLen=$checkboxs.length; i<iLen; i++){
                $checkboxs[i].checked = this.checked;
            }
            typeof callback === 'function' && (callback(this.checked));
        });

        // 单选
        this.$body.on('change', itemCheckboxSelector, function(e){
            var $allCheckbox = self.$body.find(allCheckboxSelector)
                , $checkboxs = self.$body.find(itemCheckboxSelector)
                , $checkedboxs = self.$body.find(itemCheckboxSelector + ':checked');

            $allCheckbox[0].checked = $checkboxs.length === $checkedboxs.length;

           typeof callback === 'function' && (callback(!!$checkedboxs.length));
        });
    };

    Base.prototype.confirm = function(title, content, callback){
        if(!this.templateConfirm){
            this.templateConfirm = require('../../template/confirm.html');
        }
        if(!this.$body.find('#modal_confirm')[0]){
            this.$body.append(this.templateConfirm({title: title, content: content}));
        }else{
            this.$body.find('#modal_confirm').replaceWith(this.templateConfirm({title: title, content: content}));
        }
        $('#modal_confirm').modal('show');

        this.$body.off('click.modal_confirm_btn').on('click', '#modal_confirm_btn', function(){
            typeof callback === 'function' && callback($('#modal_confirm'));
        });
    };

    Base.prototype.alert = function(title, msg){
        if(!this.templateAlert){
            this.templageAlert = require('../../template/alert.html');
        }
        if(!this.$body.find('#modal_alert')[0]){
            this.$body.append(this.templageAlert({title: title, msg: msg}));
        }else{
            this.$body.find('#modal_alert').replaceWith(this.templageAlert({title: title, msg: msg}));
        }
        console.log(1111)
        $('#modal_alert').modal('show');
    };

    Base.prototype.getStatus = function(arry, typeKeyArry){
        for(var i= 0,iLen=arry.length; i<iLen; i++ ){
            for(var j= 0,jLen=typeKeyArry.length; j<jLen; j++){
                var status = statusObj[typeKeyArry[j][0] + '_status'][arry[i][typeKeyArry[j][1]]];
                for(var x in status){
                    arry[i][x] = status[x];
                }
            }
        }
        return arry;
    };

    Base.prototype.get = function(url, data, callback, errorCallback){
        $.ajax({
            url: url,
            type: 'get',
            data: data,
            success: function(result){
                alert(result);
                typeof callback === 'function' && callback(result);
            },
            error: function(xhr){
                typeof errorCallback === 'function' && errorCallback(xhr);
            }
        });
    };

    Base.prototype.post = function(url, data, callback, errorCallback){
        $.ajax({
            url: url,
            type: 'post',
            data: data,
            success: function(result){
                typeof callback === 'function' && callback(result);
            },
            error: function(xhr){
                typeof errorCallback === 'function' && errorCallback(xhr);
            }
        });
    };

    module.exports = new Base();
})();