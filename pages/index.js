import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomePage from '../components/HomePage'
import ScrollFade from '../components/ScrollFade'

export default function Home() {
  return (
    <Layout>
      <SEO title='Home' description='Welcome to my portfolio!' />
      <div>
        <HomePage />
      </div>
      <div>
      <ScrollFade/>
      </div>
      
    </Layout>
  )
}