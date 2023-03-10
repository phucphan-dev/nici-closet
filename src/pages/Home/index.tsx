import React from 'react';

import {
  bannerDummy, categoriesDummy, featuredProducts, topSellerDummy
} from 'assets/dummy/homepage';
import Typography from 'components/atoms/Typography';
import DiscountCode from 'components/molecules/DiscountCode';
import Section from 'components/organisms/Section';
import WidgetSection from 'components/organisms/WidgetSection';
import FeaturedProduct from 'components/templates/FeaturedProduct';
import HomeBanner from 'components/templates/HomeBanner';
import HomeCategory from 'components/templates/HomeCategory';
import TopSeller from 'components/templates/TopSeller';

const Home: React.FC = () => (
  <>
    <Section noSpace><HomeBanner banners={bannerDummy} /></Section>
    <Section><TopSeller {...topSellerDummy} /></Section>
    <Section>
      <WidgetSection>
        <Typography.Text modifiers={['20x24', 'ferrariRed', 'center']}>
          Super discount for your
          {' '}
          <Typography.Text type="span" modifiers={['700']}>first purchase.</Typography.Text>
          {' '}
          <DiscountCode>FREE15FIRST</DiscountCode>
          {' '}
          <Typography.Text type="span" modifiers={['300', '16x18']}>Use discount code in checkout!</Typography.Text>
        </Typography.Text>
      </WidgetSection>
    </Section>
    <Section><HomeCategory categories={categoriesDummy} /></Section>
    <Section><FeaturedProduct products={featuredProducts} /></Section>
  </>
);

export default Home;
