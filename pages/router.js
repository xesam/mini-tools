const Router = require('@mini-dev/router');
import locationRouter from "./location/router";

locationRouter.basePath('/pages/location');
const router = new Router({name: 'main', basePath: '/pages'})
    .use('location', locationRouter);

export default router;