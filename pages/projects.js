import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TitleContainer from '@/components/TitleContainer'
import ProjectsSection from '@/components/ProjectSection'
import { projectData } from '@/data/projectData'

export default function Projects() {
  return (
    <Layout>
      <SEO title='Projects' description='View my projects.' />
      <div className=''>
        <TitleContainer pageTitle="Projects" />
        <ProjectsSection projects={projectData} />
      </div>

    </Layout>
  )
}