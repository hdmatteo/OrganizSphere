import Lottie from "lottie-react";
import anmiationData from "../../public/Animationpassword- 1707152047464 (2).json";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const  navigate = useNavigate()

  const baseUrl = "http://localhost:2105";
  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(baseUrl + "/login", { email, password })
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        setError(false);
      navigate("/organizer")
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  lg:flex-row">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button onClick={handleSubmit} 
                disabled={loading} className="btn btn-primary ">{loading ? (
                  <span className="loading loading-spinner text-neutral"></span>
                ) : (
                  "Log In"
                )}</button>
            </div>
            <a
              className="font-bold text-blue-500 after:content-['_↗'] ..."
              href="/sign-up">
              Sign Up Here
            </a>
            <p className="text-red-400 ">
              {error && "Something went wrong !!"}
            </p>
          </form>
        </div>
        <div className="text-center  lg:text-left">
          <h1 className="text-5xl font-bold text-black dark:text-white pl-4">Welcome Back! </h1>
        </div>
        <div className="scale-75">
          <Lottie animationData={anmiationData} />
        </div>
      </div>
    </div>
  );
}
