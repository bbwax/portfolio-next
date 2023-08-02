import Layout from '../components/Layout'
import Card from '../components/Card'
import SEO from '../components/SEO'

export default function About() {
  return (
    <Layout>
      <SEO title='About' description='Learn more about me.' />
      <Card heading='About Me'>
        {/* Add more content here */}
      </Card>
    </Layout>
  )
}