import Helmet from '~/components/Helmet';
import Selection from '~/components/Section';
import { SectionBody, SectionFooter } from '~/components/Section/Section';

import Grid from '~/components/Grid';
import productData from '~/assets/fakedata/products';
import ProductCard from '~/components/ProductCard';

function Sale() {
    const relatedProducts = productData.getProducts(18);

    return (
        <Helmet title="SALES">
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
}

export default Sale;
