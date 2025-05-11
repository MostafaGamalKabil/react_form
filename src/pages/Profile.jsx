import Header from "../comp/header";
import Footer from "../comp/Footer";
import Loading from "../comp/loading";
import ErorrPage404 from "../pages/ErorrPage404";

import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Moment from "react-moment";
import { deleteUser } from "firebase/auth";
const Profile = () => {
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

  // this function start when click of Delete Account Btn
  const deleteAccounBTN = (params) => {
    deleteUser(user) //بيحذف المستخدم من قاعدة البيانات
      .then(() => {})
      .catch((error) => {
        // An error ocurred
        // ...
      });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
     <ErorrPage404/>
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
            <button
              onClick={() => {
                deleteAccounBTN();
              }}
              className="delete"
            >
              Delete account
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }
};

export default Profile;
