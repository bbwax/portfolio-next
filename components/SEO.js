import Head from "next/head";

const SEO = ({ title = "Braxton Waxdeck, My Portfolio", description = "Welcome to my portfolio!" }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* Add more SEO related tags as needed */}
  </Head>
);

export default SEO;