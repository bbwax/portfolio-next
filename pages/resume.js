import Layout from '../components/Layout'
import TitleContainer from '@/components/TitleContainer'
import SEO from '../components/SEO'
import ResumeCard from '@/components/ResumeCard'

export default function Resume() {
  return (
    <Layout>
      <SEO title='Resume' description='View my resume.' />
      <div>
        <ResumeCard/>
      </div>
    </Layout>
  )
}