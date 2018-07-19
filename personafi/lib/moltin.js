import { gateway as MoltinGateway } from '@moltin/sdk'

const Moltin = MoltinGateway({
    client_id: 'TkrDPNqfC1j7AJFFUHnMZbN9RzPygkff3beqMhxQsl'
})

export const getProducts = () => Moltin.Products.With('main_image').All()
