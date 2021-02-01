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
                        icon: '/assets/scan.svg',
                        name: 'scan',
                        introduce: '二维码、条形码内容读取'
                    },
                    {
                        text: '查看坐标',
                        icon: '/assets/loc.svg',
                        name: 'loc',
                        introduce: '查看我的位置坐标、搜索地点的位置坐标'
                    },
                    {
                        text: '地图选点',
                        icon: '/assets/map.svg',
                        name: 'loc-map',
                        introduce: '通过地图查看坐标'
                    },
                    {
                        text: '编码&解码',
                        icon: '/assets/code.svg',
                        name: 'encode',
                        introduce: '文本、网址的编码与解码'
                    },
                    {
                        text: '颜色',
                        icon: '/assets/code.svg',
                        name: 'color',
                        introduce: '颜色的转换与显示'
                    }
                ]
            },
            {
                title: '数字单位',
                items: [
                    {
                        text: '大写数字',
                        icon: '/assets/number.svg',
                        name: 'number',
                        introduce: '数字大写、数字单位'
                    },
                    // {
                    //     text: '单位换算',
                    //     icon: '',
                    //     name: 'unit',
                    //     introduce: '长度、体积、重量基本单位以及转换'
                    // }
                ]
            }
        ]
    },
    onLoad(query) {
        // dispatch(query);
    },
    onTap(e) {
        const {name} = e.currentTarget.dataset;
        app.$router.push({
            name
        });
    }
});
