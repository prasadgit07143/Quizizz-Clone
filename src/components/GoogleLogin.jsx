import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import googleLogo from "../assets/media/google-logo.png";
import { useCallback } from "react";

const GoogleLogin = () => {
  const handleLogin = useCallback(() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result.user) {
          const { accessToken, displayName } = result.user;
          Cookies.set("accessToken", accessToken, {
            secure: true,
            sameSite: "strict",
          });
          Cookies.set("nameOfUser", displayName, {
            secure: true,
            sameSite: "strict",
          });
          window.location.href = "/main";
        } else {
          throw new Error("Login failed");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Login failed. Please try again.");
      });
  }, []);

  return (
    <div onClick={handleLogin} className="login-method-container | flex">
      <img src={googleLogo} alt="Google Logo" />
      <div className="flex signin-inner-div">
        <span>Continue with Google</span>
        <FontAwesomeIcon className="arrow-right" icon={faArrowRight} />
      </div>
    </div>
  );
};

export default GoogleLogin;
