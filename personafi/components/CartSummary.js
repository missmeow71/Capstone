// import StripeCheckout from 'react-stripe-checkout'
import {Button, Segment, Divider} from 'semantic-ui-react'

// const stripeKey = 'pk_test_UBWSVyq6rmqp2x0bEwVQiicn'

export default ({
    display_price: {with_tax: {currency, amount, formatted}}}) => (
        <React.Fragment>
            <Divider />

            <Segment clearing size='large'>
            <strong>Sub Total:</strong> {formatted}
            {/* <StripeCheckout */}
            {/* name="Personafi Marketplace"
            amount={amount}
            currency={currency}
            // stripeKey={stripeKey}
            shippingAddress={false}
            billingAddress={true}
            zipCode={true}
            token={handleCheckout}
            reconfigureOnUpdate={false}
            triggerEvent="onClick"
            > */}
            <Button color='orange' floated='right'>
            Check Out
            </Button>
            {/* </StripeCheckout> */}
            </Segment>
        </React.Fragment>
    )