import Layout from '../components/Layout'
import { getProductById } from '../lib/moltin'

const productPage = props => (
    <Layout title="product">
        <p>{JSON.stringify(props, '\t, 2')}</p>
    </Layout>
)

productPage.getInitialProps = async ({query: {id}}) => {
    const data = await getProductById(id)

    return {
        data
    }
}

export default productPage 