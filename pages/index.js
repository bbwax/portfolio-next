import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HomePage from '../components/HomePage';
import TextInfo from '../components/TextInfo';
import ColumnSection from '../components/ColumnSection';
import { qualifications } from '../data/qualifications';
import GradientBackground from '@/components/GradientBackground';

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
      <div className="text-center bg-white text-4xl text-dark-green ">
        Areas of Expertise:
      </div>
      <div className='bg-gradient-to-b from-white to-dark-green'>
        <ColumnSection qualifications={qualifications} />
      </div>
    </Layout>
  )
}