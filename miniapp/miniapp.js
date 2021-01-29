const hook = require('miniapp-hook');
const MyComponent = require('./_Component');

const _App = hook._App;
const _Page = hook._Page;
const _Component = hook._Component.create(MyComponent);

_Page.use({
    onShareAppMessage(options) {

    }
});

export {
    _App,
    _Page,
    _Component
}