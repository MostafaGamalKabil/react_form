import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import { Helmet  } from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { use } from 'react';

const About = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/")
    }

    if (user) {
      if (!user.emailVerified) {
        navigate("/")
  
      }
    }
  })


  if (loading) {
    <div>
      <Header/>
      <main>
          <h1>loading..........</h1>
        </main>

        <Footer/>
    </div>
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
        <MainContent pageName="About Page"  />   
        <Footer />
      </>
      );
    }
   
  }

 
}

export default About;
