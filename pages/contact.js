import Layout from '../components/Layout'
import Card from '../components/Card'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <Layout>
            <SEO title='Contact' description='Contact Me.' />
            <Card heading='Contact Me'>
                {/* Add more content here */}
            </Card>
            <div>
                <ContactForm />
            </div>
        </Layout>
    )
}