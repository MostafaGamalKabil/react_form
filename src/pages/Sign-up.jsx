import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up Page</title>
        <meta name="description" content="Sign Up" />
      </Helmet>
      <Header />
     <main>

      <form>
<p className="new-account">Create new account <span>🧡</span></p>
<input type="email" placeholder="Email: "  required/>
<input type="password" placeholder="Password: "  required/>
<button>Sign in</button>
<p className="account">
  Already have an account <Link to="/signin">Sign in</Link>
</p>
      </form>

     </main>
      
      <Footer />
    </>
  );
};

export default Signup;
