import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up Page</title>
        <meta name="description" content="Sign Up" />
      </Helmet>
      <Header />
     <main>

      <form>

<input type="email" placeholder="Email: "  required/>
<input type="password" placeholder="Password: "  required/>
<button>Sign in</button>
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
