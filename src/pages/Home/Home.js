import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import Helmet from '~/components/Helmet';
import Section from '~/components/Section';
import { SectionBody, SectionFooter, SectionTitle } from '~/components/Section/Section';
import Grid from '~/components/Grid';
import HeroSlider from '~/components/HeroSlider';
import ProductCard from '~/components/ProductCard';
import productData from '~/assets/fakedata/products';
import heroSliderData from '~/assets/fakedata/hero-slider';

const Home = () => {
    return (
        <Helmet title="Home page">
            <HeroSlider data={heroSliderData} control={true} auto={true} timeOut={4000} />
            <Section>
                <SectionTitle>NEWEST ARRIVALS</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(8).map((item, index) => (
                            <ProductCard
                                key={index}
                                id={item.id}
                                img={item.image}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                                categorySlug={item.categorySlug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
                <SectionFooter>
                    <Link to={'/products'}>
                        XEM THÊM SẢN PHẨM <FontAwesomeIcon icon={faArrowRightLong} />
                    </Link>
                </SectionFooter>
            </Section>
            {/* end new arrival section */}
        </Helmet>
    );
};

export default Home;
