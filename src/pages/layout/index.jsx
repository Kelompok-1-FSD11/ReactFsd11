import Footer from "../../components/module/footer";
import Navbar from "../../components/module/navbar";
import HomePage from "../home";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      
      {children}
      <HomePage />
      <Footer />
    </>
  );
};
export default Layout;