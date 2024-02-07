import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Oauth from "../components/Oauth";

export default function Signup() {
  const [userName, setUserName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const baseUrl = "http://localhost:2105";

  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(baseUrl + "/signup", { username: userName, email, password })
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        setError(false);
      navigate("/log-in");
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left pl-2">
          <h1 className="text-5xl font-bold text-black dark:text-white">
            Sign up!
          </h1>
          <p className="py-6 font-bold es text-black dark:text-white">
            Boost your Productivity
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                onChange={(e) => setEmail(e.target.value)}
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
                className="input input-bordered"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="btn btn-primary font-bold">
                {loading ? (
                  <span className="loading loading-spinner text-neutral"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
              <Oauth></Oauth>
            </div>
            <p className="text-red-400 ">
              {error && "Something went wrong !!"}
            </p>
            <p>Already have an account ?</p>
            <a
              className="font-bold text-blue-500 after:content-['_↗'] ..."
              href="/log-in">
              Log in Here
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
