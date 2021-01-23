import {_Component as Component} from '../../miniapp/miniapp';
import behaviors from "./behaviors";

Component({
    behaviors: [behaviors.parent],
    relations: {
        "child": {
            type: 'child',
            target: behaviors.child,
            linked(child) {
                console.log('linked child');
                child.setData({
                    activeKey: this.data.key
                });
            }
        }
    },
    properties: {
        key: {
            type: String,
            value: ''
        }
    },
    data: {},
    methods: {
        setActive(data) {
            const children = this.getRelationNodes('child');
            for (const child of children) {
                child.setData({
                    activeKey: data.key
                });
            }
        }
    }
});
