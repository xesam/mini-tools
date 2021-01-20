import {_Component as Component} from '../../miniapp/miniapp';
import behaviors from "./behaviors";

Component({
    behaviors: [behaviors.parent],
    relations: {
        "child": {
            type: 'child',
            target: behaviors.child,
            linked: function (target) {
                console.log('linked');
            }
        }
    },
    properties: {
        options: {
            type: Array,
            value: []
        }
    },
    data: {},
    methods: {
        onTap() {
            const children = this.getRelationNodes('child');
            console.log(children);
        }
    }
});
