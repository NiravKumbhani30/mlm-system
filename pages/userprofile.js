import { parseCookies } from "nookies";
import React, { useState } from "react";

const userprofile = ({ userData, coinData }) => {
  const [user, setUser] = useState({
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    password: userData.password,
    ref_code: userData.ref_code,
    status: userData.status,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const filterData = coinData.filter((data) => {
    return data.balance > 0;
  });

  const submitHandler = async (e) => {
    const userId = userData._id;
    e.preventDefault();
    const prodData = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      ref_code: user.ref_code,
      status: user.status,
    };

    const res = await fetch(`${process.env.BASE_URL}/api/user/${userId}`, {
      method: "PUT",
      body: JSON.stringify(prodData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setUser(result.data);
    return;
  };

  return (
    <div>
      <div className="container emp-profile bg-light">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img mb-5 mx-auto ">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt=""
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-xl-start text-sm-center text-sm-center">
            <div className="profile-head">
              <h5>{userData.first_name + " " + userData.last_name}</h5>
              <p className="proile-rating"></p>
            </div>
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Edit Name
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.first_name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Last Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.last_name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>User Referral Code</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.ref_code}</p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div className="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="profile-work">
              <p>Coins</p>

              {filterData.map((data, index) => (
                <div className="mb-3 d-flex align-items-center" key={index}>
                  <div>
                    <img
                      src={data.coinInfo[0].logo}
                      className="me-3 profile-coin-img"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between">
                      <h6>{data.coinInfo[0].name}</h6>
                      <span>{Number(data.balance).toFixed(4)}</span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="info example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-info"
                        style={{ width: data.balance / 1 }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg ">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit your profile
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={submitHandler}>
                  <div className="col-12 row">
                    <div className="col-6">
                      <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        onChange={changeHandler}
                        value={user.first_name}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        onChange={changeHandler}
                        value={user.last_name}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-end gap-3 mt-3 ">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success"
                      data-bs-dismiss="modal"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx);

  const res = await fetch(`${process.env.BASE_URL}/api/coin/balance`, {
    headers: {
      Authorization: token,
    },
  });
  const coinData = await res.json();

  if (token) {
    const res = await fetch(`${process.env.BASE_URL}/api/userprofile`, {
      headers: {
        Authorization: token,
      },
    });
    const data = await res.json();
    return {
      props: { userData: data, coinData: coinData },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
    };
  }
}

export default userprofile;
