const hook = require('@mini-dev/hook');
const MiniComponent = require('./_Component');

const _App = hook._App;
const _Page = hook._Page;
const _Component = hook._Component.create(MiniComponent);

_Page.use({
    onShareAppMessage(options) {
    }
});

export {
    _App,
    _Page,
    _Component
}