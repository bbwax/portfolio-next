import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HomePage from '../components/HomePage';
import TextInfo from '../components/TextInfo';
import ColumnSection from '../components/ColumnSection';
import { qualifications } from '../data/qualifications';
import GradientBackground from '@/components/GradientBackground';
import ProjectHighlight from '@/components/ProjectHighlight';
import { projectData } from '@/data/projectData';

export default function Home() {
  return (
    <Layout>
      <SEO title='Home' description='Welcome to my portfolio!' />
      <div>
        <HomePage />
      </div>
      <GradientBackground>
        <TextInfo />
      </GradientBackground>
      <div className='bg-gradient-to-b from-white to-dark-green'>
        <div className="text-center bg-white text-4xl text-dark-green ">
          Areas of Expertise:
        </div>
        <div >
          <ColumnSection qualifications={qualifications} />
        </div>
        <div className="text-center text-4xl text-light-cream py-6">
          Featured Project:
        </div>
        <div>
          <ProjectHighlight projects={projectData} />
        </div>
      </div>
    </Layout>
  )
}