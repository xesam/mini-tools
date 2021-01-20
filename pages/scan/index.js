import {_Page as Page} from '../../miniapp/miniapp';

Page({
    data: {
        content: ''
    },
    onLoad(query) {

    },
    onTapCopy(e) {
        wx.setClipboardData({
            data: this.data.content
        });
    },
    onTapQr(e) {
        wx.scanCode({
            success: res => {
                console.log(res);
                this.setData({
                    content: res.result
                });
            }
        })
    }
});
