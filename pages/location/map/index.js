import {_Page as Page} from '../../../miniapp/miniapp';

Page({
    data: {
        targetLocation: null
    },
    _map: null,
    onLoad(query) {
        this._map = wx.createMapContext('map');
    },
    toMyLocation() {
        const _this = this;
        wx.getLocation({
            type: 'gcj02',
            success(res) {
                _this._map.moveToLocation({
                    res
                });
            }
        });
    },
    onMapUpdated(e) {
        this.toMyLocation();
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
    onLocationChanged(e) {
        const locationS = e.detail.value;
        const location = locationS.split(/,|\s+/).map(ele => {
            return parseFloat(ele);
        });
        this.setData({
            targetLocation: {
                longitude: location[0],
                latitude: location[1]
            }
        });
    },
    onTapMove(e) {
        console.log(this.data.targetLocation);
        this._map.moveToLocation({
            ...this.data.targetLocation
        });
    },
    onTapCopy(e) {
        const content = `${this.data.targetLocation.longitude + ',' + this.data.targetLocation.latitude}`
        wx.setClipboardData({
            data: content
        });
    },
    onTapSync(e) {
        this.toMyLocation();
    }
});
