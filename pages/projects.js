import Layout from '../components/Layout'
import Card from '../components/Card'
import SEO from '../components/SEO'

export default function Projects() {
  return (
    <Layout>
      <SEO title='Projects' description='View my projects.' />
      <Card heading='My Projects'>
        {/* Add more content here */}
      </Card>
    </Layout>
  )
}