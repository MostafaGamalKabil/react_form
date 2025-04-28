import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";

const Css = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  })


  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta name="description" content="csssssssssssssssssssss" />
      </Helmet>

      <Header />

      <MainContent pageName="CSS Page" />

      <Footer />
    </>
  );
};

export default Css;
