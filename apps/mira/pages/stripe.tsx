import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import StripeCheckoutForm from '../components/StripeCheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

export default function Stripe() {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}',
  // };

  // return (
  //   <Elements stripe={stripePromise}>
  //     <CheckoutForm />
  //   </Elements>
  // );

  return <StripeCheckoutForm />;
}
