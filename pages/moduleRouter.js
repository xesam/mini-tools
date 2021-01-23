const Router = require('miniapp-router');

const router = new Router('/pages/', [
    'scan',
    'location',
    'encode',
    'number',
    'unit',
]);

export default router;