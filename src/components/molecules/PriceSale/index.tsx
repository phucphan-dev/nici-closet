import React from 'react';

import Typography from 'components/atoms/Typography';

interface PriceSaleProps {
  promo?: number;
  price: number;
  unit: string;
}

const PriceSale: React.FC<PriceSaleProps> = ({ promo, price, unit }) => (
  <div className="m-priceSale">
    <div className="m-priceSale_original">
      <Typography.Text modifiers={promo ? ['14x16', 'ashGrey', 'lineThrough'] : ['16x18', '700']}>
        {price.toFixed(2)}
        {unit}
      </Typography.Text>
    </div>
    {promo && (
      <div className="m-priceSale_sale">
        <Typography.Text modifiers={['16x18', '700']}>
          {(price * (100 - promo) / 100).toFixed(2)}
          {unit}
        </Typography.Text>
      </div>
    )}
  </div>
);

PriceSale.defaultProps = {
  promo: undefined,
};

export default PriceSale;
