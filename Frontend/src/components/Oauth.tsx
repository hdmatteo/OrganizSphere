import { GoogleAuthProvider } from "@firebase/auth";
import { signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/user/userSlice";

export default function Oauth() {
  const dispatch = useDispatch();
  const handleGoogleAuth = async (event) => {
    event.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const baseUrl = "http://localhost:2105";

      const res = await fetch(baseUrl+"/googleauth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" ,
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(loginSuccess(data));
      
    } catch (error) {
      console.log("could not login with google", error);
      
    }
  };
  return (
    <button
      className="btn bg-base-200 mt-2 font-bold"
      onClick={handleGoogleAuth}>
      Continue with Google
      <a
        title="Google LLC, Public domain, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Google_%22G%22_logo.svg">
        <img
          width="16"
          alt='Google "G" logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/16px-Google_%22G%22_logo.svg.png"
        />
      </a>
    </button>
  );
}
