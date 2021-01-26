import {_Page as Page} from '../../miniapp/miniapp';

Page({
    data: {
        loading: false,
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
        _this.setData({
            loading: true
        });
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
                        const datetime = new Date();
                        _this.setData({
                            loading: false,
                            date: `${datetime.getFullYear()}-${datetime.getMonth() + 1}-${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`,
                            myWgsLocation: wgs,
                            myGcjLocation: {
                                latitude: res.latitude,
                                longitude: res.longitude
                            }
                        });
                    },
                    fail() {
                        _this.setData({
                            loading: false
                        });
                    }
                });
            },
            fail() {
                _this.setData({
                    loading: false
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
    },
    location2String(location) {
        return `${location.longitude},${location.latitude}`;
    },
    onTapCopy(e) {
        const target = e.currentTarget.dataset.target;
        console.log(target);
        let copyData = null;
        if (target === 'my-wgs') {
            copyData = this.location2String(this.data.myWgsLocation);
        } else if (target === 'my-gcj') {
            copyData = this.location2String(this.data.myGcjLocation);
        } else if (target === 'search-address') {
            copyData = this.data.searchLocation.address;
        } else if (target === 'search-location') {
            copyData = this.location2String(this.data.searchLocation);
        }
        wx.setClipboardData({
            data: copyData
        });
    }
});
