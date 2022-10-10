import classNames from 'classnames/bind';

import styles from './Products.module.scss';
import Navbar from '~/components/Navbar';
import Helmet from '~/components/Helmet';
// import Selection, { SelectionBody, SectionTitle } from '~/components/Section';
// import productData from '~/assets/fakedata/products';
// import images from '~/assets/images';
// import Grid from '~/components/Grid';

const cx = classNames.bind(styles);

function Products() {
    return (
        <Helmet title="Product">
            <div className={cx('wrapper')}>
                <Navbar />

                <div>{/* <img src={productData.getAllProducts} alt="asasl;djka" /> */}</div>
                {/* {console.log('productDataa', productData.getAllProducts())} */}
                <h2>Products Page</h2>
                <h2>Products Page1</h2>
                <h2>Products Page2</h2>
                <h2>Products Page5</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page1111</h2>
                <h2>Products Page34534</h2>
                <h2>Products Page345</h2>
                <h2>Products Page555</h2>
            </div>
        </Helmet>
    );
}

// const Products = (props) => {
//     // const product = productData;
//     const relatedProducts = productData.getProducts(4);

//     return (
//         <Helmet title="Products">
//             <Navbar />
//             <Selection>
//                 <SectionTitle>Tất cả sản phẩm</SectionTitle>
//                 <SelectionBody>
//                     <Grid col={4} mdCol={2} smCol={1} gap={20}>
//                         {relatedProducts.map((index, item) => (
//                             // <ProductCard
//                             //     key={index}
//                             //     img01={item.image01}
//                             //     img02={item.image02}
//                             //     name={item.title}
//                             //     price={Number(item.price)}
//                             //     slug={item.slug}
//                             // />
//                             <></>
//                         ))}
//                     </Grid>
//                 </SelectionBody>
//             </Selection>
//         </Helmet>
//     );
// };

export default Products;
