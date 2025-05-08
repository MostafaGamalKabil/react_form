import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";

const Signup = () => {
  let navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userName, setuserName] = useState("");
  const [user, loading, error] = useAuthState(auth);

  // Loading
  // Not Sign-in
  // Sign-in without email veryfied
  // Sign-in and email veryfied


  useEffect(() => {
    if (user) {
      if (user.emailVerified) {
        navigate("/")
      }
    }
  })

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


 if (user) {
  if (!user.emailVerified) {
    return(
     <div>
     <Header />
     <main>
       <p>We send you an email to verify your Account</p>
       <button className="delete">Send again</button>
     </main>
     <Footer />
   </div>
    );
   }
 
 }


  if (!user) {
    return (
      <>
        <Helmet>
          <title>Sign Up Page</title>
          <meta name="description" content="Sign Up" />
        </Helmet>
        <Header />
        <main>
          <form>
            <p className="new-account">
              Create new account <span>🧡</span>
            </p>

            <input
              onChange={(eo) => {
                setuserName(eo.target.value);
              }}
              type="text"
              placeholder="UserName : "
              required
            />

            <input
              onChange={(eo) => {
                setemail(eo.target.value);
              }}
              type="email"
              placeholder="Email: "
              required
            />

            <input
              onChange={(eo) => {
                setpassword(eo.target.value);
              }}
              type="password"
              placeholder="Password: "
              required
            />
            <button
              onClick={(eo) => {
                eo.preventDefault();
                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;

                    sendEmailVerification(auth.currentUser).then(() => {
                      // Email verification sent!
                      // ...
                    });

                    updateProfile(auth.currentUser, {
                      displayName: userName,
                    })
                      .then(() => {
                        navigate("/");
                      })
                      .catch((error) => {
                        console.log(error.code);
                        // ...
                      });

                    // ...
                    navigate("/");
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                  });
              }}
            >
              Sign up
            </button>
            <p className="account">
              Already have an account <Link to="/signin">Sign in</Link>
            </p>
          </form>
        </main>

        <Footer />
      </>
    );
  }
};

export default Signup;
