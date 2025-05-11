import Header from "../comp/header";
import Footer from "../comp/Footer";
import Loading from "../comp/loading";
import ErorrPage404 from "../pages/ErorrPage404";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";


const About = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }

    if (user) {
      if (!user.emailVerified) {
        navigate("/");
      }
    }
  });

  if (loading) {
    <Loading />;
  }
  if (error) {
    <ErorrPage404 />;
  }

  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>About Page</title>
            <meta name="description" content="About Page" />
          </Helmet>
          <Header />
          <MainContent pageName="About Page" />
          <Footer />
        </>
      );
    }
  }
};

export default About;
