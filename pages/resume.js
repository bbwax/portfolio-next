import Layout from '../components/Layout'
import Card from '../components/Card'
import SEO from '../components/SEO'

export default function Resume() {
  return (
    <Layout>
      <SEO title='Resume' description='View my resume.' />
      <Card heading='My Resume'>
        {/* Add more content here */}
      </Card>
    </Layout>
  )
}