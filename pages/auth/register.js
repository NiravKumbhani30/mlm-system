import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ShortUniqueId from "short-unique-id";
import baseURL from "../../helper/baseurl";

const Register = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    ref_from: "", //input
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
    const uid = new ShortUniqueId({ length: 6 });
    const userData = {
      ...user,
      ref_code: uid(),
      status: "Active",
    };
    console.log("userdata =", userData);
    const res = await fetch(`${baseURL}/api/registation`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/auth/login");
    // const data = await res.json();
    // console.log(data);
  };

  const bg_light =
    "https://coderthemes.com/hyper/modern/assets/images/bg-pattern-light.svg";
  return (
    <div>
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
                      <h4 className="text-dark-50 text-center mt-0 fw-bold">
                        Free Sign Up
                      </h4>
                      <p className="text-muted mb-4">
                        Don't have an account? Create your account, it takes
                        less than a minute
                      </p>
                    </div>

                    <form onSubmit={submitHandler}>
                      <div className="mb-3">
                        <label className="form-label">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input
                          name="first_name"
                          className="form-control"
                          type="text"
                          placeholder="Enter your name"
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <input
                          name="last_name"
                          className="form-control"
                          type="text"
                          placeholder="Enter your name"
                          onChange={changeHandler}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          Email address <span className="text-danger">*</span>
                        </label>
                        <input
                          name="email"
                          className="form-control"
                          type="email"
                          placeholder="Enter your email"
                          onChange={changeHandler}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter your password"
                          onChange={changeHandler}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Referral code</label>
                        <input
                          name="ref_from"
                          type="text"
                          className="form-control"
                          placeholder="Enter your Referral Code"
                          onChange={changeHandler}
                        />
                      </div>

                      <div className="mb-3">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">
                            I accept
                            <a href="#" className="text-muted">
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>

                      <div className="mb-3 text-center">
                        <button className="btn btn-primary" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <p className="text-muted">
                      Already have account?
                      <Link href="/auth/login" className="text-muted ms-1">
                        <b>LogIn</b>
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
      </section>
    </div>
  );
};

export default Register;
