module.exports = [{
    title: '图片发布',
    key: 'image_issue',
    subList: [{
        title: '图片上传',
        sub_key: 'image_upload',
        url: './imgUpload.html?key=image_issue&subKey=image_upload'
    }, {
        title: '待编辑的图片',
        sub_key: 'image_for_edit',
        url: './imgForEdit.html?key=image_issue&subKey=image_for_edit'
    }, {
        title: '待审核的图片',
        sub_key: 'image_for_verify',
        url: './imgForVerify.html?key=image_issue&subKey=image_for_verify'
    }, {
        title: '未通过的图片',
        sub_key: 'image_send_back',
        url: './imgSendBack.html?key=image_issue&subKey=image_send_back'
    }, {
        title: '待修改的图片',
        sub_key: 'image_for_reedit',
        url: './imgForReedit.html?key=image_issue&subKey=image_for_reedit'
    }, {
        title: '已审核发布的图片',
        sub_key: 'image_verified',
        url: './imgVerified.html?key=image_issue&subKey=image_verified'
    }]
},
//    {
//    title: '内容管理',
//    key: 'content_manage',
//    subList: [{
//        title: '标题库',
//        sub_key: 'title_manage',
//        url: './titleManage.html?key=content_manage&subKey=title_manage'
//    }, {
//        title: '分类管理',
//        sub_key: 'classification_manage',
//        url: './classificationManage.html?key=content_manage&subKey=classification_manage'
//    }]
//},
    {
    title: '图片审核',
    key: 'image_verify',
    subList: [{
        title: '初级审核',
        sub_key: 'image_primary_verify',
        url: './imgVerify.html?key=image_verify&subKey=image_primary_verify'
    }, {
        title: '终级审核',
        sub_key: 'image_definitive_verify',
        url: './imgVerify.html?key=image_verify&subKey=image_definitive_verify'
    }]
}
//    {
//    title: '图片查找',
//    key: 'image_search',
//    subList: [{
//        title: '图片查找',
//        sub_key: 'image_search_list',
//        url: './imgSearch.html?key=image_search&subKey=image_search_list'
//    }]
//}, {
//    title: '用户管理',
//    key: 'user_manage',
//    subList: [{
//        title: '应用用户',
//        sub_key: 'web',
//        url: './userManage_web.html?key=user_manage&subKey=web'
//    }, {
//        title: '后台应用',
//        sub_key: 'background',
//        url: './userManage_background.html?key=user_manage&subKey=background'
//    }]
//}, {
//    title: '权限管理',
//    key: 'permissions_manage',
//    url: './permissionsManage.html?key=permissions_manage'
//}, {
//    title: '网站管理',
//    key: 'website_manage',
//    url: './websiteManage.html?key=website_manage'
//},{
//    title: '母库管理',
//    key: 'original_manage',
//    url: './originalManage.html?key=original_manage',
//    subList: [{
//        title: '查找图片',
//        sub_key: 'original_search',
//        url: './originalSearch.html?key=original_manage&subKey=original_search'
//    }]
//}, {
//    title: '操作日志',
//    key: 'operation_log',
//    url: './operationLog.html?key=operation_log'
//}, {
//    title: '审核管理',
//    key: 'verify_manage',
//    subList: [{
//        title: '专题审核',
//        sub_key: 'special_verify',
//        url: './verifySpecial.html?key=verify_manage&subKey=special_verify'
//    }, {
//        title: '账户审核',
//        sub_key: 'user_verify',
//        url: './verifyUser.html?key=verify_manage&subKey=user_verify'
//    }
   // ]
//}
];