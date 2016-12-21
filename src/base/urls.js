module.exports = (function(){
    var localServer = 'http://192.168.10.86:8889/pic/';

    var testServer = 'http://192.168.9.210:8080/api/';

    var linshierver = 'http://115.236.46.199:8080/pic/';

    var server = linshierver;
    return {
        classification:{
            camera: server +'image/camera'                            //查询镜头描述
            , watermark: server +'image/watermark'                    //查询水印位置
            , query: server +'class/query'                            //图片分类下拉框
        },
        imageList:{
            getJsonByType:server + 'igroup/pagelist'                           //根据类型显示列表 待编辑/待审核/已审核
            , getJsonByStatus:server + 'image/status/pagelist'                 //根据状态显示列表 未通过/待修改
        },
        upload: {
            imgUpload: server + 'igroup/upload'
            , thumbnailUpload:server + 'igroup/edit/upload'                    //组图缩略图上传
            , thumbnailSingleUpload:server + 'image/edit/upload'               //单图缩略图上传
            , getiGroupId:server + 'igroup/add'                                //组图上传前，获取igroupId
        },
        imageDelete:{
            imgSingleDelete:server + 'image/delete'                            //单图删除
            , imgGroupDelete:server + 'igroup/image/delete'                    //组图图片删除
            , imgGroupDeleteForEdit:server + 'igroup/delete'                          //待编辑组图删除
        },
        imageVerify:{
            imageCheck:server + 'image/check/pagelist'                         //单图审核列表和查询接口
            , igroupCheck:server + 'igroup/check/pagelist'                     //组图审核列表和查询接口
            , imageDetail:server + 'image/detail/'                             //图片详情
            , imageCameraDetail:server + 'image/camera/detail/'                //图片相机详情
            , igroupDetail:server + 'igroup/detail/'                           //组图图片列表
            , photoDownload:server + 'photographer/image/down'                 //原图下载
            , setWebShow:server + 'image/webshow'                              //设置是否web展示
            , imgBack: server + 'image/back'                                   //图片退回
            , imgCheck: server + 'image/check'                                 //图片退回
            , imgBackReason:server + 'image/querybackreson/'                   //图片退回理由
            , imgNext: server + 'image/next'                                   //根据当前Id给出图片下一个/上一个Id
            , imgInfoUpdate: server + 'image/extra/update'                     //图片信息更新
            , imgToCheck: server + 'image/tocheck'                             //图片提交审核
            , igroupToCheck: server + 'igroup/tocheck'                         //组图提交审核
        },
        titleManage:{
            titleList:server + 'title/pagelist'                                //分页查询标题
            , titleAdd:server + 'title/add'                                    //新增标题
            , titleEdit:server + 'title/update'                                //编辑标题
            , titleDelete:server + 'title/delete'                              //删除标题
            , titleSearch:server + 'title/query'                               //搜索标题
            , titleDetail:server + 'title/detail'                              //查询标题详情
        },
        userManger:{
            userList:server + 'photographer/pagelist'                          //分页查询用户
            , userAdd:server + 'photographer/add'                              //新增普通用户
            , userEdit:server + 'photographer/update'                          //修改普通用户
            , userDelete:server + 'photographer/delete'                        //删除普通用户
            , userDetail:server + 'photographer/detail'                        //查询摄影师详情
            , userForbid:server + 'photographer/forbidden'                     //用户禁用
            , userAge:server + 'photographer/age'                              //获取用户年龄
            , userSex:server + 'photographer/sex'                              //获取用户性别
            , userLevel:server + 'photographer/level'                          //获取摄影师级别
            , userImgList:server + 'photographer/image/list'                   //查询摄影师作品
            , userImgDownload:server + 'photographer/image/down'               //下载摄影师作品
        },
        genes:{
            checkResult:server + 'image/repeat/'                               //基因比对结果
            , resultManage:server + 'image/compare'                            //基因比对结果处理
        }
    };
})();














