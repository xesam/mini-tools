import {_Page as Page} from '../../miniapp/miniapp';

Page({
    data: {
        hex: ''
    },
    onLoad(query) {
    },
    onHexChanged(e) {
        const hex = e.detail.value;
        this.setData({
            hex: hex
        });
    }
});
