import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HomePage from '../components/HomePage';
import ScrollFade from '../components/ScrollFade';
import ColumnSection from '../components/ColumnSection';
import { qualifications } from '../data/qualifications';

export default function Home() {
  return (
    <Layout>
      <SEO title='Home' description='Welcome to my portfolio!' />
      <div>
        <HomePage />
      </div>
      <div>
        <ScrollFade />
      </div>
      <div>
        <ColumnSection qualifications={qualifications} />
      </div>
    </Layout>
  )
}