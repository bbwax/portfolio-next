import Layout from '../components/Layout'
import Card from '../components/Card'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <Layout>
            <SEO title='Contact' description='Contact Me.' />
            <div>
                <ContactForm />
            </div>
        </Layout>
    )
}