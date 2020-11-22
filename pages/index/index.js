Page({
    data: {
        modules: [
            {
                title: '常用',
                items: [
                    {
                        text: '扫一扫',
                        icon: '',
                        path: ''
                    }
                ]
            },
            {
                title: '常用',
                items: [
                    {
                        text: '扫一扫',
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
