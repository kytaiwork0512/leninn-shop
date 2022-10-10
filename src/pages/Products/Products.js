// import { useEffect } from 'react';
// import classNames from 'classnames/bind';

// import styles from './Products.module.scss';
import Navbar from '~/components/Navbar';
import Helmet from '~/components/Helmet';
import Selection from '~/components/Section';
import { SectionTitle, SectionBody } from '~/components/Section/Section';
import productData from '~/assets/fakedata/products';
// import images from '~/assets/images';
import Grid from '~/components/Grid';
import ProductCard from '~/components/ProductCard';

// const cx = classNames.bind(styles);

const Products = (props) => {
    // const product = productData.getProductBySlug(props.match.params.slug);
    const relatedProducts = productData.getProducts(16);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [product]);

    return (
        <Helmet title="Products">
            <Navbar />
            <Selection>
                <SectionTitle>ALL PRODUCTS</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {relatedProducts.map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Selection>
        </Helmet>
    );
};

export default Products;
