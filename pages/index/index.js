Page({
    data: {},
    onLoad(query) {

    },
    onTapQr(e) {
        wx.navigateTo({
            url: '/pages/scan/index'
        });
    }
});
