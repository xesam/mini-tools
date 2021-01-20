function _App() {
    return App(...arguments);
}

function _Page() {
    return Page(...arguments);
}

function _Component() {
    return Component(...arguments);
}

export {
    _App,
    _Page,
    _Component
}