import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// sign-in importing
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';
import { useState } from "react";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

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
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}}>Sign in
</button>
<p className="account">
  Dont't have an account <Link to="/signup">Sign up</Link>
</p>
      </form>

     </main>
      
      <Footer />
    </>
  );
};

export default Signin;
