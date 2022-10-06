import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Sale from '~/pages/Sale';
import Gallery from '~/pages/Gallery';
import About from '~/pages/About';
import Cart from '~/pages/Cart';
import Catalog from '~/pages/Catalog';

import Accessories from '~/pages/Accessories';
import Clothing from '~/pages/Clothing';
import Deck from '~/pages/Deck';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/sale', component: Sale },
    { path: '/gallery', component: Gallery },
    { path: '/about', component: About },
    { path: '/cart', component: Cart },
    { path: '/catalog', component: Catalog },

    { path: '/products/accessories', component: Accessories },
    { path: '/products/clothing', component: Clothing },
    { path: '/products/deck', component: Deck },
];

const productsRoutes = [];

const privateRoutes = [];

export { publicRoutes, privateRoutes, productsRoutes };
