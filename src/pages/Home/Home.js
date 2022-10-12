import productData from '~/assets/fakedata/products';
import Grid from '~/components/Grid';
import Helmet from '~/components/Helmet';
import HeroSlider from '~/components/HeroSlider';
import heroSliderData from '~/assets/fakedata/hero-slider';
import ProductCard from '~/components/ProductCard';
import Section from '~/components/Section';
import { SectionBody, SectionTitle } from '~/components/Section/Section';

const Home = () => {
    return (
        <Helmet title="Home page">
            <HeroSlider data={heroSliderData} control={true} auto={false} timeOut={5000} />
            <Section>
                <SectionTitle>NEWEST ARRIVALS</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(8).map((item, index) => (
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
            </Section>
            {/* end new arrival section */}
        </Helmet>
    );
};

export default Home;
