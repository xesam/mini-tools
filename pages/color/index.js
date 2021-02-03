import {_Page as Page} from '../../miniapp/miniapp';

const INVALID = '-1';

Page({
    data: {
        bgColor: 'white',
        fullHex: '-1'
    },
    onLoad(query) {
    },
    onTapCopy(e) {
        wx.setClipboardData({
            data: this.data.fullHex
        });
    },
    onBgChanged(e) {
        const value = e.detail.value;
        this.setData({
            bgColor: value
        });
    },
    onHexChanged(e) {
        const hex = e.detail.value;
        if (/^[\d|a-f]+$/i.test(hex)) {
            let fullHex = INVALID;
            if (hex.length === 3 || hex.length === 4) {
                fullHex = hex.split('').map(ele => {
                    return ele + ele;
                }).join('');
            } else if (hex.length === 6 || hex.length === 8) {
                fullHex = hex;
            }
            if (fullHex.length === 6) {
                fullHex += 'ff';
            }
            this.setData({
                fullHex: `#${fullHex.toUpperCase()}`
            });
        } else {
            this.setData({
                fullHex: INVALID
            });
        }
    }
});
