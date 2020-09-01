import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('acct_1HMNaZAlSy38KLly');

function Donations() {   
    return (
        <div className="flex row justify-content-center">
            <button role="link">Donate Here!</button>
        </div>
    );
}


export default Donations;
