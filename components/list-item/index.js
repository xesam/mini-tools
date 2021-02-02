import {_Component as Component} from '../../miniapp/miniapp';

Component({
    properties: {
        icon: {
            type: String,
            value: null
        },
        title: {
            type: String,
            value: null
        },
        describe: {
            type: String,
            value: null
        },
        value: {
            type: String,
            value: null
        }
    },
    data: {},
    methods: {
        onTap(e) {
            this.triggerEvent('onTap', this.data, {});
        }
    }
});
