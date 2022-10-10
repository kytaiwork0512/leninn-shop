// import { useEffect } from 'react';
// import classNames from 'classnames/bind';

// import styles from './Products.module.scss';
import Helmet from '~/components/Helmet';
import Selection from '~/components/Section';
import { SectionBody, SectionFooter } from '~/components/Section/Section';
// import images from '~/assets/images';
import Grid from '~/components/Grid';
import ProductCard from '~/components/ProductCard';
import productData from '~/assets/fakedata/products';

// const cx = classNames.bind(styles);

const Products = (props) => {
    // const product = productData.getProductBySlug(props.match.params.slug);
    const relatedProducts = productData.getProducts(55);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [product]);

    return (
        <Helmet title="Products">
            <Selection>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {relatedProducts.map((item, index) => (
                            <ProductCard
                                key={index}
                                img={item.image}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
                <SectionFooter>Bạn đã xem hết!</SectionFooter>
            </Selection>
        </Helmet>
    );
};

export default Products;
