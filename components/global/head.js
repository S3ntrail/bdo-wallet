import Head from 'next/head'

const HeadWebsite = () => {
  return(
    <div>
      <Head>
        <title>BDO & You</title>

        <meta 
          name="description" 
          content="BDO & You is an online tool made for life skillers of the MMORPG game Black Desert Online"
        >
        </meta>

        <meta 
          property="og:title" 
          content="Calculate your potential profit and make use of other potential upcoming features"
        >
        </meta>

        <meta 
          property="og:description" 
          content="BDO & You is an online tool made for life skillers of the MMORPG game Black Desert Online"
        >
        </meta>

        {/* <meta property="og:url" content="https://bdonyou.com/"></meta> */}
        <meta 
          property="og:type" 
          content="website"
        >
        </meta>
      </Head>
    </div>
  )
  
}

export default HeadWebsite