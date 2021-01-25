import {_Page as Page} from '../../miniapp/miniapp';

Page({
    data: {
        content: '',
        targetLocation: {}
    },
    _map: null,
    onLoad(query) {
        this._map = wx.createMapContext('map');
    },
    onRegionChanged(e) {
        const {type} = e;
        const _this = this;
        if (type === 'end') {
            this._map.getCenterLocation({
                success(res) {
                    _this.setData({
                        targetLocation: {
                            longitude: res.longitude,
                            latitude: res.latitude
                        }
                    });
                }
            });
        }
    },
    onTapCopy(e) {
        wx.setClipboardData({
            data: this.data.content
        });
    },
    onTapSync(e) {
        const _this = this;
        wx.getLocation({
            type: 'gcj02',
            success(res) {
                _this._map.moveToLocation({
                    res
                });
            }
        });
    }
});
