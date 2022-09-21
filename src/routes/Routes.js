import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Cart from '~/pages/Cart';
import Catalog from '~/pages/Catalog';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/cart', component: Cart },
    { path: '/catalog', component: Catalog },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
