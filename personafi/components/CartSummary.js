import StripeCheckout from 'react-stripe-checkout'
import {Button, Segment, Divider} from 'semantic-ui-react'

export default ({
    display_price: {with_tax: {currency, amount, formatted}}}) => (
        <React.Fragment>
            <Divider />

            <Segment clearing size='large'>
            <strong>Sub Total:</strong> {formatted}
            <Button color='black' floated='right'>
            Check Out
            </Button>
            </Segment>
        </React.Fragment>
    )