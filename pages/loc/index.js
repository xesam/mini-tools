import {_Page as Page} from '../../miniapp/miniapp';

Page({
    data: {
        date: null,
        myWgsLocation: null,
        myGcjLocation: null,
        searchLocation: null
    },
    onLoad(query) {
        this.refresh();
    },
    refresh() {
        const _this = this;
        wx.getLocation({
            type: 'wgs84',
            success(res) {
                const wgs = {
                    latitude: res.latitude,
                    longitude: res.longitude
                };
                wx.getLocation({
                    type: 'gcj02',
                    success(res) {
                        _this.setData({
                            date: new Date().toLocaleString(),
                            myWgsLocation: wgs,
                            myGcjLocation: {
                                latitude: res.latitude,
                                longitude: res.longitude
                            }
                        });
                    }
                });
            }
        });
    },
    onTapRefresh() {
        this.refresh();
    },
    onTapChoose(e) {
        const _this = this;
        wx.chooseLocation({
            success(res) {
                console.log(res);
                _this.setData({
                        searchLocation: {
                            address: res.address,
                            latitude: res.latitude,
                            longitude: res.longitude
                        }
                    }
                )
            }
        })
    }
});
