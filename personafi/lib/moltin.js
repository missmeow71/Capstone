import { gateway as MoltinGateway } from '@moltin/sdk'

const Moltin = MoltinGateway({
    client_id: 'TkrDPNqfC1j7AJFFUHnMZbN9RzPygkff3beqMhxQsl'
})

export const getProducts = () => Moltin.Products.With('main_image').All()

export const getProductById = id => Moltin.Products.With('main_image').Get(id)

export const addToCart = (productId, quantity) => Moltin.Cart().AddProduct(productId, quantity)

export const getCartItems = id => Moltin.Cart(id).Items()

export const removeFromCart = (itemId, cartId) => Moltin.Cart(cartId).RemoveItem(itemId)

