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
    onTapSync(e) {
        wx.getLocation({
            success(res) {
                console.log(res);
            }
        });
    }
});
