import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Cookies from "js-cookie";

const login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.BASE_URL}/api/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/");
    const data = await res.json();
    if (data.token) {
      Cookies.set("token", data.token, { expires: 7 });
    }
  };

  const bg_light =
    "https://coderthemes.com/hyper/modern/assets/images/bg-pattern-light.svg";
  return (
    <>
      <section
        style={{
          height: "100vh",
          backgroundImage: `url("${bg_light}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-4 col-lg-5">
                <div className="card">
                  <div className="card-header py-4 text-center bg-primary">
                    <a href="index.html">
                      <span>
                        <img src="/images/logo.png" alt="logo" height="22" />
                      </span>
                    </a>
                  </div>

                  <div className="card-body p-4">
                    <div className="text-center w-75 m-auto">
                      <h4 className="text-dark-50 text-center pb-0 fw-bold">
                        Sign In
                      </h4>
                      <p className="text-muted mb-4">
                        Enter your email address and password
                      </p>
                    </div>

                    <form onSubmit={submitHandler}>
                      <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                          name="email"
                          className="form-control"
                          type="email"
                          placeholder="Enter your email"
                          onChange={changeHandler}
                        />
                      </div>

                      <div className="mb-3">
                        <a
                          href="pages-recoverpw.html"
                          className="text-muted float-end"
                        >
                          <small>Forgot your password?</small>
                        </a>
                        <label className="form-label">Password</label>
                        <input
                          name="password"
                          className="form-control"
                          type="password"
                          placeholder="Enter your Password"
                          onChange={changeHandler}
                        />
                      </div>

                      <div className="mb-3 mb-3">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div className="mb-3 mb-0 text-center">
                        <button className="btn btn-primary" type="submit">
                          Log In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <p className="text-muted">
                      Don't have an account?
                      <Link href="/auth/register" className="text-muted ms-1">
                        <b>Sign Up</b>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer footer-alt">
          2018 - 2023 © Hyper - Coderthemes.com
        </footer>

        <script src="assets/js/vendor.min.js"></script>

        <script src="assets/js/app.min.js"></script>
      </section>
    </>
  );
};

export default login;
