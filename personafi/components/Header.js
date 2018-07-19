import Link from 'next/link'
import {Menu, Container, Image} from 'semantic-ui-react'

export default () => (
    <Menu inverted fixed="top" size="huge">
    <Container text>
    <Link href="/" prefetch passHref>
    <Menu.Item as ='a' header>
    <Image
        size="mini"
        src="/static/amazon-artificial-intelligence.svg"
        style={{ marginRight: '1.5em'}}
    />
    Personafi Marketplace
    </Menu.Item>
    </Link>
    </Container>
    </Menu>
)