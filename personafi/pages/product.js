import Layout from '../components/Layout'
import { getProductById } from '../lib/moltin'

const productPage = props => (
    <Layout title="product">
        <pre>{JSON.stringify(props, '\t, 2')}</pre>
    </Layout>
)

productPage.getInitialProps = async ({ query: {id} }) => {
    const { data, included: { main_images } } = await getProductById(id)

    const imageId = data.relationships.main_image
      ? data.relationships.main_image.data.id
      : false

    return {
        products: {
            ...data,
            image: imageId ? main_images.find(img => img.id === imageId).link.href 
            : '/static/amazon-artificial-intelligence.svg'
        
     }
  }
}
export default productPage 