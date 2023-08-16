import Layout from '../components/Layout'
import ColumnSection from '@/components/ColumnSection'
import SEO from '../components/SEO'
import { qualifications } from '@/data/qualifications'
import TitleContainer from '@/components/TitleContainer'
import AboutMeText from '@/components/AboutMeText'
import SkillBarChart from '@/components/SkillBarChart'
import { softwareSkills } from '@/data/softwareSkills'
import { realEstateSkills } from '@/data/realEstateSkills'
import { civilEngineerSkills } from '@/data/civilEngineerSkills'

export default function About() {
  return (
    <Layout>
      <SEO title='About' description='Learn more about me.' />
      <div className='bg-gradient-to-b from-light-cream to-dark-green' >
        <div>
          <TitleContainer pageTitle="About Me" />
        </div>
        <div>
          <AboutMeText />
        </div>
        <div className='flex justify-center items-center'>
          <SkillBarChart data={softwareSkills} title={"Software Skills"} />
        </div>
        <div className='flex justify-center items-center'>
          <SkillBarChart data={realEstateSkills} title={"Real Estate Skills"} />
        </div>
        <div className='flex justify-center items-center'>
          <SkillBarChart data={civilEngineerSkills} title={"Civil Engineer Skills"} />
        </div>
        <div>
          <ColumnSection qualifications={qualifications} />
        </div>
      </div>
    </Layout>
  )
}