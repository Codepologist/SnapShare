import { GoogleLogin } from "@react-oauth/google";
// import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { RiCameraLensFill } from "react-icons/ri";
import "./Login.scss";
// import { Link } from "react-router-dom";

const Login = () => {
  const user = false;

  return (
    <section className="section is-relative py-20">
      <div className="container">
        <div className="box has-mw-md mx-auto p-6 px-10-desktop py-12-desktop has-background-white has-text-centered">
          <form>
            <h3 className="is-family-monospace mt-4 mb-12 title">
            <span className="icon-text">
              <span className="icon">
                <RiCameraLensFill />
              </span>
              <span>Snapshare</span>
              </span>
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
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-primary mb-4 has-text-weight-semibold">
                  <span className="icon">
                    <RiCameraLensFill />
                  </span>
                  <span>Log in</span>
                </button>
              </p>
              <p className="control">
                <a className="button is-ghost no-focus-outline has-text-dark">
                  <span style={{ fontSize: "12px" }}> Forgot password?</span>
                </a>
              </p>
            </div>

            <div
              className="pt-4 mt-4"
              style={{ borderTop: "1px solid #dadfe9" }}
            >
              <div className="mb-5">
                <small>
                  <p className="has-text-dark">Or login with</p>
                </small>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="is-flex is-justify-content-center">
                    {user ? (
                      <div>Logged In</div>
                    ) : (
                      <GoogleLogin
                        onSuccess={(CredentialResponse) => {
                          console.log(CredentialResponse);
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />
                    )}
                  </div>
                  {/*   <div className="field is-grouped is-flex is-justify-content-center">
                    <p className="control">
                      <Link
                        className="button is-responsive is-danger is-small"
                        to="/"
                      >
                        <span className="icon">
                          <FaGoogle />
                        </span>
                        <span className="has-text-weight-semibold">Google</span>
                      </Link>
                    </p>
                    <p className="control">
                      <button className="button is-responsive is-dark is-small">
                        <span className="icon">
                          <FaFacebookF />
                        </span>
                        <span className="has-text-weight-semibold">
                          Facebook
                        </span>
                      </button>
                    </p>
                    <p className="control">
                      <button className="button is-responsive is-info is-small">
                        <span className="icon is-small">
                          <FaTwitter />
                        </span>
                        <span className="has-text-weight-semibold">
                          Twitter
                        </span>
                      </button>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
