import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import HeadWebsite from "@/components/global/head";

const Layout = ({ children }) => {
  return (
    <>
      <HeadWebsite />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
