import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import "./Login.scss";

const Login = () => {
  return (
    <section className="section is-relative py-20">
      <div className="container">
        <div className="box has-mw-md mx-auto p-6 px-10-desktop py-12-desktop has-background-white has-text-centered">
          <form>
            <h3 className="is-family-monospace mt-4 mb-12 title is-3">
              Snapshare
            </h3>
            <div className="field">
              <div className="control">
                <input
                  className="input py-5"
                  type="email"
                  placeholder="e.g hello@snapshare.dev"
                />
              </div>
            </div>
            <div className="field ">
              <div className="control">
                <input
                  className="input py-5"
                  type="password"
                  placeholder="******"
                />
              </div>
            </div>
            <button className="button is-medium is-primary is-fullwidth mb-4">
              Log in
            </button>
            <small>
              <a className="has-text-dark" href="#">
                Forgot password?
              </a>
            </small>
            <div
              className="pt-6 mt-8"
              style={{ borderTop: "1px solid #dadfe9" }}
            >
              <div className="buttons ">
                <button
                  className="button is-responsive is-danger is-medium is-fullwidth"
                  href="#"
                >
                  <span className="icon">
                    <FaGoogle />
                  </span>
                  <span>Sign in with Google</span>
                </button>
                <button className="button is-responsive is-dark is-medium is-fullwidth">
                  <span className="icon">
                    <FaFacebookF />
                  </span>
                  <span>Sign in with Facebook</span>
                </button>
                <button className="button is-responsive is-info is-medium is-fullwidth">
                  <span className="icon is-small">
                    <FaTwitter />
                  </span>
                  <span>Sign in with Twitter</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
