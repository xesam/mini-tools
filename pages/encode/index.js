import {_Page as Page} from '../../miniapp/miniapp';

const handlers = {
    [encodeURIComponent.name]: {
        handle(data) {
            return encodeURIComponent(data);
        }
    },
    [decodeURIComponent.name]: {
        handle(data) {
            return decodeURIComponent(data);
        }
    },
    [encodeURI.name]: {
        handle(data) {
            return encodeURI(data);
        }
    },
    [decodeURI.name]: {
        handle(data) {
            return encodeURIComponent(data);
        }
    },
};

Page({
    data: {
        functions: Object.keys(handlers),
        currentFunc: encodeURIComponent.name,
        input: '',
        output: '',
    },
    onLoad(query) {

    },
    toOutput(value) {
        const func = handlers[this.data.currentFunc];
        return func.handle(value);
    },
    onInputChanged(e) {
        const value = e.detail.value;
        const output = this.toOutput(value);
        this.setData({
            input: value,
            output
        });
    },
    onOutputChanged(e) {
        const value = e.detail.value;
        this.setData({
            output: value
        });
    },
    onTapCopy(e) {
        const {source} = e.target.dataset;
        wx.setClipboardData({
            data: this.data[source]
        });
    },
    onTapClear(e) {
        const {source} = e.target.dataset;
        if (source === 'input') {
            this.setData({
                input: '',
                output: ''
            });
        } else {
            this.setData({
                output: ''
            });
        }
    },
    onTapExchange(e) {
        const newInput = this.data.output;
        const newOutput = this.toOutput(newInput);
        this.setData({
            input: newInput,
            output: newOutput
        });
    },
    onTapChangeFunc() {
        const _this = this;
        wx.showActionSheet({
            itemList: this.data.functions,
            success(res) {
                _this.setData({
                    currentFunc: _this.data.functions[res.tapIndex]
                });
                const value = _this.data.input;
                const output = _this.toOutput(value);
                _this.setData({
                    input: value,
                    output
                });
            },
            fail(res) {
                console.log(res.errMsg)
            }
        });
    }
});
