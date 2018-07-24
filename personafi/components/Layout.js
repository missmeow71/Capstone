
import Head from 'next/head'
import {Container} from 'semantic-ui-react'
import Header from './Header'
export default ({children, title = ''}) => (
  <React.Fragment>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"/>
          <title>{title}</title>
    </Head>

    <Header />
     <style jsx global>{`
      body { 
        background-image:  linear-gradient(
        rgba(148, 143, 145, 0.20),
        rgba(148, 143, 145, 0.20)
        ),url('https://previews.123rf.com/images/mik38/mik381603/mik38160300221/54903955-3d-render-vaisseau-spatial-futuriste-int%C3%A9rieur-couloir.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 100vh;  
      }
    `}</style>

    <Container text style ={{paddingTop: '7em'}}>
      {children}
    </Container>
  </React.Fragment>
)