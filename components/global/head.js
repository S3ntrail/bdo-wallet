import Head from "next/head";

const HeadWebsite = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>

        <meta name="description" content={props.description}></meta>

        <meta
          property="og:title"
          content={props.title}
        ></meta>

        <meta
          property="og:description"
          content={props.description}
        ></meta>

        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        ></meta>
        
        {/* <meta property="og:url" content="https://bdonyou.com/"></meta> */}
        <meta property="og:type" content="website"></meta>
      </Head>
    </div>
  );
};

export default HeadWebsite;
