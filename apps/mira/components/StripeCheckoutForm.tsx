import React from 'react';
import { checkout } from '../libs/stripe';
type Props = {};

function StripeCheckoutForm({}: Props) {
  return (
    <div>
      <button
        onClick={() => {
          checkout([
            {
              price: 'price_1MLHQaIw5gzPMA7qIwfCqcPA',
              quantity: 1,
            },
          ]);
        }}
      >
        Buy
      </button>
    </div>
  );
}

export default StripeCheckoutForm;
