import Header from "../comp/header";
import Footer from "../comp/Footer";
import Loading from "../comp/loading";
import ErorrPage404 from "../pages/ErorrPage404";

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
        navigate("/");
      }
    }
  });

  // this function start when click on btn of form
  const singupBTN = (eo) => {
    eo.preventDefault(); // يمنع ان الصفحه تتعمل ريفرش
    createUserWithEmailAndPassword(auth, email, password) // اول ما اضغط على الزرار هينشئ مستخدم في قاعدة البيانات
      .then((userCredential) => {
        // Signed in
    

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
     
      });
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErorrPage404 />;
  }

  if (user) {
    if (!user.emailVerified) {
      return (
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
            <button onClick={(eo) => {
              singupBTN(eo)
              }}>Sign up</button>
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
