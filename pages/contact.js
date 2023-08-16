import Layout from '../components/Layout'
import TitleContainer from '@/components/TitleContainer'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <Layout>
            <SEO title='Contact' description='Contact Me.' />
            <div className='bg-gradient-to-b from-light-cream to-dark-green'>
                <div>
                <TitleContainer pageTitle="Contact Me" />
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </Layout>
    )
}