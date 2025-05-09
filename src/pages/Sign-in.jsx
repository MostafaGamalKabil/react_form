import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// sign-in importing
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./signin.css";

const Signin = () => {
  let navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showForm, setshowForm] = useState("");
  const [hasError, sethasError] = useState(false);
  const [resetPass, setresetPass] = useState(false);
  const [firebaseError, setfirebaseError] = useState(false);
  const [showSendEmail, setshowSendEmail] = useState(false);

  // this function start when click on signin btn
  const signinBTN = (eo) => {
    eo.preventDefault(); // يمنع الافتراضي بتاع الصفحه انه يتعملها ريفريش
    signInWithEmailAndPassword(auth, email, password) // بياخد الاميل و الباسورد عشان يدور عليهم في الداتا بيز
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        switch (errorCode) {
          case "auth/invalid-email":
            setfirebaseError("Invalid Email");

            break;
          case "auth/invalid-credential":
            setfirebaseError("User Not Found");

            break;
          case "auth/invalid-password-hash":
            setfirebaseError("Invalid Password");

            break;
          case "auth/too-many-requests":
            setfirebaseError("Too many requstes , please try again later");

            break;

          default:
            setfirebaseError("Please Check your email & password");
            break;
        }

        sethasError(errorMessage);
      });
  };

  // this function start when click on reset password btn
  // and this function take email and send email to reset password
  const resetPasswordBTN = (eo) => {
    eo.preventDefault();

    sendPasswordResetEmail(auth, resetPass)
      .then(() => {
        setshowSendEmail(true); // لما التغير يبقى ترو يظهر
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <Helmet>
        <title>Sign in Page</title>
        <meta name="description" content="Sign in" />
      </Helmet>
      <Header />
      <main>
        <form className={`forgot-password ${showForm}`}>
          <div
            onClick={() => {
              setshowForm("");
            }}
            className="close"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <input
            onChange={(eo) => {
              setresetPass(eo.target.value);
            }}
            type="email"
            placeholder="E-mail"
          />
          <button
            onClick={(eo) => {
              resetPasswordBTN(eo);
            }}
          >
            Reset Password
          </button>

          {showSendEmail && (
            <p className="check-email">
              Please check your email to reset your password
            </p>
            // هنا انا بقوله المتغير دا يا اما هو ترو يا اما هو فولس
          )}
        </form>

        <form>
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
              signinBTN(eo);
            }}
          >
            Sign in
          </button>
          <p className="account">
            Dont't have an account <Link to="/signup">Sign up</Link>
          </p>

          <p
            onClick={() => {
              setshowForm("show-forgot-password");
            }}
            className="forgot-pass"
          >
            forgot password ?
          </p>

          {hasError && <p className="ErrorMessage">{firebaseError}</p>}
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Signin;
