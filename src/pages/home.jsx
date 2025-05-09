import Header from "../comp/header";
import Footer from "../comp/Footer";
import Loading from "../comp/loading";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { use } from "react";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  // this function start when click on send email button 
  // and this function send email again to veryfied
  const sendEmailAgain = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      //
      console.log("Email verification sent!");
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

          <Header />

          <main>
            <p>
              {" "}
              Welcome {user.displayName} <span>🧡</span>
            </p>{" "}
          </main>
          <Footer />
        </>
      );
    }

    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

          <Header />

          <main>
            <p>
              {" "}
              Welcome {user.displayName} <span>🧡</span>
            </p>{" "}
            <p>We send you an email to verify your Account 🤚</p>
            <button
              onClick={() => {
                sendEmailAgain();
              }}
              className="delete"
            >
              Send Email
            </button>
          </main>
          <Footer />
        </>
      );
    }
  }

  if (!user) {
    return (
      <>
        <Helmet>
          <title>HOME Page</title>
          <meta name="description" content="HOMEEEEEEEEEEEE" />
        </Helmet>

        <Header />

        <main>
          <p className="pls">
            please{" "}
            <Link style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue..... <span>🧡</span>
          </p>
        </main>

        <Footer />
      </>
    );
  }
};

export default Home;
