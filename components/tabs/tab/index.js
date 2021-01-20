const {_Component} = require('../../../miniapp/index');
import behaviors from "../behaviors";

_Component({
    behaviors: [behaviors.child],
    relations: {
        "parent": {
            type: 'parent',
            target: behaviors.parent,
            linked: function (target) {
                console.log('linked');
            }
        },
    },
    properties: {
        title: {
            type: String,
            value: ''
        }
    },
    data: {},
    methods: {}
});
