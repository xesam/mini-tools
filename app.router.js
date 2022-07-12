const Router = require('@mini-dev/router');
import mainRouter from './pages/router';
mainRouter.basePath('/pages/')
const appRouter = new Router();
appRouter.use('main', mainRouter);
export default appRouter;