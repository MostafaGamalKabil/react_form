import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Moment from "react-moment";
import { use } from "react";
const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/signin");
    }

    if (user) {
      if (!user.emailVerified) {
        navigate("/")
  
      }
    }
  });

  if (loading) {
    return (
      <div>
        <Header />
        <main>
          <h1>loading..........</h1>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (user) {
    return (
      <>
        <Helmet>
          <title>Profile Page</title>
          <meta name="description" content="Profile" />

          <style type="text/css">{`
            
            main div {
    display:flex;
  flex-direction: column;
  align-items: flex-start;
 width:fit-content
  margin:auto;

            }

 


           
  
  
  
  
      `}</style>
        </Helmet>
        <Header />

        <main>
         <div>
           <h6> {user.displayName} </h6>
           <h6>{user.email} </h6>
           <h6>
             Last Sign in :{" "}
             <Moment fromNow date={user.metadata.lastSignInTime} />{" "}
           </h6>
           <h6>
             CreatedAt : <Moment fromNow date={user.metadata.creationTime} />{" "}
           </h6>
           <button className="delete">Delete account</button>
         </div>
        </main>
        <Footer />
      </>
    );
  }
};

export default Profile;
