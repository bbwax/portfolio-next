import Layout from '../components/Layout'
import ColumnSection from '@/components/ColumnSection'
import SEO from '../components/SEO'
import { qualifications } from '@/data/qualifications'
import TitleContainer from '@/components/TitleContainer'

export default function About() {
  return (
    <Layout>
      <SEO title='About' description='Learn more about me.' />
      <div className='bg-gradient-to-b from-white to-dark-green'>
        <div>
          <TitleContainer pageTitle="About Me" />
        </div>
        <div>
          <ColumnSection qualifications={qualifications} />
        </div>
      </div>
    </Layout>
  )
}