import {_Page as Page} from '../../miniapp/miniapp';

Page({
    data: {
        result: '',
        scanType: '',
        charSet: '',
        path: '',
        rawData: ''
    },
    onLoad(query) {
        this._doScan();
    },
    _doScan() {
        wx.scanCode({
            // scanType: ['barCode', 'qrCode', 'datamatrix', 'pdf417'], //真机表现有问题？？？？
            success: res => {
                console.log(res);
                this.setData({
                    ...res,
                    path: res.path
                });
            }
        });
    },
    onTapCopy(e) {
        wx.setClipboardData({
            data: this.data.result
        });
    },
    onTapQr(e) {
        this._doScan();
    }
});