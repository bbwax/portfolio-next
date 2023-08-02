import Layout from '../components/Layout'
import Card from '../components/Card'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <Layout>
      <SEO title='Home' description='Welcome to my portfolio!' />
      <Card heading='Welcome to my Portfolio!'>
        {/* Add more content here */}
      </Card>
    </Layout>
  )
}