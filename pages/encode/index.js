import {_Page as Page} from '../../miniapp/miniapp';

Page({
    data: {
        functions: [
            encodeURIComponent.name,
            decodeURIComponent.name,
            encodeURI.name,
            decodeURI.name,
            'base64 encode',
            'base64 decode'
        ],
        currentFunc: encodeURIComponent.name,
        input: '',
        output: '',
    },
    onLoad(query) {

    },
    getFunction(name) {
        if (name === encodeURIComponent.name) {
            return encodeURIComponent;
        } else if (name === decodeURIComponent.name) {
            return decodeURIComponent;
        } else if (name === encodeURI.name) {
            return encodeURI;
        } else if (name === decodeURI.name) {
            return decodeURI;
        }
    },
    toOutput(value) {
        const func = this.getFunction(this.data.currentFunc);
        return func(value);
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
    }
});
