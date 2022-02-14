const Router = require('@mini-dev/router');
import mainRouter from './pages/moduleRouter';

const appRouter = new Router();
appRouter.use('main', mainRouter);
export default appRouter;