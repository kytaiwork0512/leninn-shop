import productData from '~/assets/fakedata/products';
import Grid from '~/components/Grid';
import Helmet from '~/components/Helmet';
import ProductCard from '~/components/ProductCard';
import Section from '~/components/Section';
import { SectionBody, SectionTitle } from '~/components/Section/Section';

const Home = () => {
    return (
        <Helmet title="Home page">
            hero silder
            {/* hero silder */}
            {/* new arrival section */}
            <Section>
                <SectionTitle>NEWEST ARRIVALS</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(8).map((item, index) => (
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
            </Section>
            {/* end new arrival section */}
        </Helmet>
    );
};

export default Home;
