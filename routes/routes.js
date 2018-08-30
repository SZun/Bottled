import userRoutes from './users';
import orderRoutes from './orders';
import beerRoutes from './beers';

const routes = app => {
  app.use('/api/users', userRoutes);
  app.use('/api/orders', orderRoutes);
  app.use('/api/beers', beerRoutes);
};

export default routes;
