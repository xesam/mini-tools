import {_Page as Page} from '../../miniapp/miniapp';

const app = getApp();
Page({
    data: {
        modules: [
            {
                title: '常用',
                items: [
                    {
                        text: '扫一扫',
                        icon: '',
                        name: 'scan',
                        introduce: '二维码、条形码内容读取'
                    },
                    {
                        text: '坐标',
                        icon: '',
                        name: 'location',
                        introduce: '查看我的位置坐标、搜索地点的位置坐标'
                    },
                    {
                        text: '地图坐标',
                        icon: '',
                        name: 'location',
                        introduce: '通过地图查看坐标'
                    },
                    {
                        text: '编码&解码',
                        icon: '',
                        name: 'encode',
                        introduce: '文本、网址的编码与解码'
                    }
                ]
            },
            {
                title: '数字单位',
                items: [
                    {
                        text: '大写数字',
                        icon: '',
                        name: 'number'
                    },
                    {
                        text: '单位换算',
                        icon: '',
                        name: 'unit'
                    }
                ]
            }
        ]
    },
    onLoad(query) {

    },
    onTap(e) {
        const {name} = e.currentTarget.dataset;
        app.$router.push({
            name
        });
    }
});
