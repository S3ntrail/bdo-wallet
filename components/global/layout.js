import { useState, useEffect } from "react";
import Router from 'next/router'

import Image from 'next/image'
import hqdefault from 'public/hqdefault.jpg'

const Layout = props => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const updateLoadingStatus = () => setIsLoading(!isLoading);

    Router.events.on("routeChangeStart", updateLoadingStatus);
    Router.events.on("routeChangeComplete", updateLoadingStatus);

    return () => {
      Router.events.off("routeChangeStart", updateLoadingStatus);
      Router.events.off("routeChangeComplete", updateLoadingStatus);
    };
  }, [isLoading]);

  return (
    <div>
      { isLoading ? <Image src={hqdefault}></Image> : props.children }
    </div>
  );
}

export default Layout;