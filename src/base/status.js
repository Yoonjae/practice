module.exports = {
    action_status: {
        show_info:{
            action_show_text: '查看'
        },
        send_back_season:{
            action_show_text: '退回理由'
        }
    },
    special_status: {
        wait_verify: {
            special_show_text: '待审核',
            action: 'show_info'
        },
        normal: {
            special_show_text: '正常展示',
            action: 'show_info'
        },
        wait_edit: {
            special_show_text: '待修改',
            action: 'send_back_season'
        },
        pulled: {
            special_show_text: '已下架',
            action: 'show_info'
        },
        disabled: {
            special_show_text: '不能发布',
            action: 'send_back_season'
        }
    }
};