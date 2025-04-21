import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// sign-in importing
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';
import { useState } from "react";
import { useNavigate } from "react-router";
const Signin = () => {
  let navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState(false);

  return (
    <>
      <Helmet>
        <title>Sign Up Page</title>
        <meta name="description" content="Sign Up" />
      </Helmet>
      <Header />
     <main>

      <form>

<input onChange={(eo) => {
  setemail(eo.target.value)
}} type="email" placeholder="Email: "  required/>

<input onChange={(eo) => {
  setpassword(eo.target.value)
}}  type="password" placeholder="Password: "  required/>
<button onClick={(eo) => {
eo.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
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
        setfirebaseError("Invalid Email")
        
        break;
      case "auth/invalid-credential":
        setfirebaseError("User Not Found")
        
        break;
      case "auth/invalid-password-hash":
        setfirebaseError("Invalid Password")
        
        break;
      case "auth/too-many-requests":
        setfirebaseError("Too many requstes , please try again later")
        
        break;
    
      default:
        setfirebaseError("Please Check your email & password")
        break;
    }


    
    sethasError(errorMessage)
  });
}}>Sign in
</button>
<p className="account">
  Dont't have an account <Link to="/signup">Sign up</Link>
</p>

{hasError && <p className="ErrorMessage">{firebaseError}</p>}
      </form>

     </main>
      
      <Footer />
    </>
  );
};

export default Signin;
