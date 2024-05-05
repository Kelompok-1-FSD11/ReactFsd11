import Card from "../../components/base/Card";
import Footer from "../../components/module/footer";
import Navbar from "../../components/module/navbar";
import HomePage from "../home";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Card/>
      {children}
      <HomePage />
      <Footer />
    </>
  );
};
export default Layout;