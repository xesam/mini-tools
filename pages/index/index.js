import {_Page as Page} from '../../miniapp/miniapp';

Page({
    data: {
        tabs: [
            {
                text: 1
            },
            {
                text: 2
            }
        ],
        modules: [
            {
                title: '常用',
                items: [
                    {
                        text: '扫一扫',
                        icon: '',
                        path: ''
                    },
                    {
                        text: '坐标',
                        icon: '',
                        path: ''
                    }
                ]
            },
            {
                title: '数字单位',
                items: [
                    {
                        text: '大写数字',
                        icon: '',
                        path: ''
                    },
                    {
                        text: '单位换算',
                        icon: '',
                        path: ''
                    }
                ]
            }
        ]
    },
    onLoad(query) {

    },
    onTapQr(e) {
        wx.navigateTo({
            url: '/pages/scan/index'
        });
    }
});
