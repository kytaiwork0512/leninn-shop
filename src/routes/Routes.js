import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Sale from '~/pages/Sale';
import Gallery from '~/pages/Gallery';
import About from '~/pages/About';
import Cart from '~/pages/Cart';
import Catalog from '~/pages/Catalog';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/sale', component: Sale },
    { path: '/gallery', component: Gallery },
    { path: '/about', component: About },
    { path: '/cart', component: Cart },
    { path: '/catalog', component: Catalog },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
