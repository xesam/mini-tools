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
                        name: 'scan'
                    },
                    {
                        text: '坐标',
                        icon: '',
                        name: 'location'
                    },
                    {
                        text: '编码&反编码',
                        icon: '',
                        name: 'encode'
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
        console.log(e.target.dataset);
        const {name} = e.target.dataset;
        app.$router.push({
            name
        });
    }
});
