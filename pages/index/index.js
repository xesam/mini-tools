import {_Page as Page} from '../../miniapp/miniapp';
import router from "../router";

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
                        introduce: '提取二维码、条形码的文本内容'
                    },
                    {
                        text: '查看坐标',
                        icon: '/assets/loc.svg',
                        name: 'location,index',
                        introduce: '查看我当前的坐标、查询位置坐标'
                    },
                    {
                        text: '地图选点',
                        icon: '/assets/map.svg',
                        name: 'location,map',
                        introduce: '在地图上查看坐标'
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
                    }
                ]
            },
            {
                title: '程序员',
                items: [
                    {
                        text: '常用进制表示',
                        icon: '/assets/number.svg',
                        name: 'hex',
                        introduce: '常用数的不同进制表示'
                    }
                ]
            }
        ]
    },
    onLoad(query) {
    },
    onTap(e) {
        const {name} = e.currentTarget.dataset;
        router.navigateTo({
            name: name.split(',')
        });
    }
});
