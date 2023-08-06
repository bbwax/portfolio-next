import Layout from '../components/Layout'
import ColumnSection from '@/components/ColumnSection'
import SEO from '../components/SEO'
import { qualifications } from '@/data/qualifications'
import Card from '@/components/Card'

export default function About() {
  return (
    <Layout>
      <SEO title='About' description='Learn more about me.' />
      <div>
        <ColumnSection qualifications={qualifications}/>
      </div>
    </Layout>
  )
}