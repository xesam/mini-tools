import {_Component as Component} from '../../../miniapp/miniapp';
import behaviors from "../behaviors";

Component({
    behaviors: [behaviors.child],
    relations: {
        "parent": {
            type: 'parent',
            target: behaviors.parent,
            linked(target) {
                console.log('linked parent', this.data.title);
            }
        },
    },
    properties: {
        activeKey: {
            type: String,
            value: ''
        },
        key: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        info: {
            type: Object,
            value: {}
        }
    },
    data: {},
    methods: {
        onTap(e) {
            const parent = this.getRelationNodes('parent');
            if (parent && parent.length) {
                parent[0].setActive({
                    key: this.data.key,
                    data: this.data.info
                });
            }
        }
    }
});
