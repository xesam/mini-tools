Page({
    data: {},
    onLoad(query) {

    },
    onTapQr(e) {
        wx.scanCode({
            success(res) {
                console.log(res)
            }
        })
    }
});
