import React from "react";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const profile = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />

        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="#">Hyper</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active">Profile</li>
                      </ol>
                    </div>
                    <h4 className="page-title">Profile</h4>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="card bg-primary">
                    <div className="card-body profile-user-box">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <div className="avatar-lg">
                                <img
                                  src="../images/users/avatar-2.jpg"
                                  alt=""
                                  className="rounded-circle img-thumbnail"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h4 className="mt-1 mb-1 text-white">
                                  Michael Franklin
                                </h4>
                                <p className="font-13 text-white-50">
                                  Authorised Brand Seller
                                </p>

                                <ul className="mb-0 list-inline text-light">
                                  <li className="list-inline-item me-3">
                                    <h5 className="mb-1 text-white">
                                      $ 25,184
                                    </h5>
                                    <p className="mb-0 font-13 text-white-50">
                                      Total Revenue
                                    </p>
                                  </li>
                                  <li className="list-inline-item">
                                    <h5 className="mb-1 text-white">5482</h5>
                                    <p className="mb-0 font-13 text-white-50">
                                      Number of Orders
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-4">
                          <div className="text-center mt-sm-0 mt-3 text-sm-end">
                            <button type="button" className="btn btn-light">
                              <i className="mdi mdi-account-edit me-1"></i> Edit
                              Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title mt-0 mb-3">
                        Seller Information
                      </h4>
                      <p className="text-muted font-13">
                        Hye, I'm Michael Franklin residing in this beautiful
                        world. I create websites and mobile apps with great UX
                        and UI design. I have done work with big companies like
                        Nokia, Google and Yahoo. Meet me or Contact me for any
                        queries. One Extra line for filling space. Fill as many
                        you want.
                      </p>

                      <hr />

                      <div className="text-start">
                        <p className="text-muted">
                          <strong>Full Name :</strong>
                          <span className="ms-2">Michael A. Franklin</span>
                        </p>

                        <p className="text-muted">
                          <strong>Mobile :</strong>
                          <span className="ms-2">(+12) 123 1234 567</span>
                        </p>

                        <p className="text-muted">
                          <strong>Email :</strong>
                          <span className="ms-2">coderthemes@gmail.com</span>
                        </p>

                        <p className="text-muted">
                          <strong>Location :</strong>
                          <span className="ms-2">USA</span>
                        </p>

                        <p className="text-muted">
                          <strong>Languages :</strong>
                          <span className="ms-2">English, German, Spanish</span>
                        </p>
                        <p className="text-muted mb-0" id="tooltip-container">
                          <strong>Elsewhere :</strong>
                          <a
                            className="d-inline-block ms-2 text-muted"
                            data-bs-container="#tooltip-container"
                            data-bs-placement="top"
                            data-bs-toggle="tooltip"
                            href=""
                            title="Facebook"
                          >
                            <i className="mdi mdi-facebook"></i>
                          </a>
                          <a
                            className="d-inline-block ms-2 text-muted"
                            data-bs-container="#tooltip-container"
                            data-bs-placement="top"
                            data-bs-toggle="tooltip"
                            href=""
                            title="Twitter"
                          >
                            <i className="mdi mdi-twitter"></i>
                          </a>
                          <a
                            className="d-inline-block ms-2 text-muted"
                            data-bs-container="#tooltip-container"
                            data-bs-placement="top"
                            data-bs-toggle="tooltip"
                            href=""
                            title="Skype"
                          >
                            <i className="mdi mdi-skype"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card text-white bg-info overflow-hidden">
                    <div className="card-body">
                      <div className="toll-free-box text-center">
                        <h4>
                          <i className="mdi mdi-deskphone"></i> Toll Free :
                          1-234-567-8901
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title mb-3">Messages</h4>

                      <div className="inbox-widget">
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src="../images/users/avatar-3.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Tomaslau</p>
                          <p className="inbox-item-text">
                            I've finished it! See you so...
                          </p>
                          <p className="inbox-item-date">
                            <a
                              href="#"
                              className="btn btn-sm btn-link text-info font-13"
                            >
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src="../images/users/avatar-4.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Stillnotdavid</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a
                              href="#"
                              className="btn btn-sm btn-link text-info font-13"
                            >
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src="../images/users/avatar-5.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Kurafire</p>
                          <p className="inbox-item-text">Nice to meet you</p>
                          <p className="inbox-item-date">
                            <a
                              href="#"
                              className="btn btn-sm btn-link text-info font-13"
                            >
                              Reply
                            </a>
                          </p>
                        </div>

                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src="../images/users/avatar-6.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Shahedk</p>
                          <p className="inbox-item-text">
                            Hey! there I'm available...
                          </p>
                          <p className="inbox-item-date">
                            <a
                              href="#"
                              className="btn btn-sm btn-link text-info font-13"
                            >
                              Reply
                            </a>
                          </p>
                        </div>
                        <div className="inbox-item">
                          <div className="inbox-item-img">
                            <img
                              src="../images/users/avatar-1.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <p className="inbox-item-author">Adhamdannaway</p>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">
                            <a
                              href="#"
                              className="btn btn-sm btn-link text-info font-13"
                            >
                              Reply
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-8">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card tilebox-one">
                        <div className="card-body">
                          <i className="ri-shopping-basket-2-line float-end text-muted"></i>
                          <h6 className="text-muted text-uppercase mt-0">
                            Orders
                          </h6>
                          <h2 className="m-b-20">1,587</h2>
                          <span className="badge bg-primary"> +11% </span>
                          <span className="text-muted">
                            From previous period
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="card tilebox-one">
                        <div className="card-body">
                          <i className="ri-archive-line float-end text-muted"></i>
                          <h6 className="text-muted text-uppercase mt-0">
                            Revenue
                          </h6>
                          <h2 className="m-b-20">
                            $<span>46,782</span>
                          </h2>
                          <span className="badge bg-danger"> -29% </span>
                          <span className="text-muted">
                            From previous period
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="card tilebox-one">
                        <div className="card-body">
                          <i className="ri-vip-diamond-line float-end text-muted"></i>
                          <h6 className="text-muted text-uppercase mt-0">
                            Product Sold
                          </h6>
                          <h2 className="m-b-20">1,890</h2>
                          <span className="badge bg-primary"> +89% </span>
                          <span className="text-muted">Last year</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title mb-3">My Products</h4>

                      <div className="table-responsive">
                        <table className="table table-hover table-centered mb-0">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Stock</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>ASOS Ridley High Waist</td>
                              <td>$79.49</td>
                              <td>
                                <span className="badge bg-primary">82 Pcs</span>
                              </td>
                              <td>$6,518.18</td>
                            </tr>
                            <tr>
                              <td>Marco Lightweight Shirt</td>
                              <td>$128.50</td>
                              <td>
                                <span className="badge bg-primary">37 Pcs</span>
                              </td>
                              <td>$4,754.50</td>
                            </tr>
                            <tr>
                              <td>Half Sleeve Shirt</td>
                              <td>$39.99</td>
                              <td>
                                <span className="badge bg-primary">64 Pcs</span>
                              </td>
                              <td>$2,559.36</td>
                            </tr>
                            <tr>
                              <td>Lightweight Jacket</td>
                              <td>$20.00</td>
                              <td>
                                <span className="badge bg-primary">
                                  184 Pcs
                                </span>
                              </td>
                              <td>$3,680.00</td>
                            </tr>
                            <tr>
                              <td>Marco Shoes</td>
                              <td>$28.49</td>
                              <td>
                                <span className="badge bg-primary">69 Pcs</span>
                              </td>
                              <td>$1,965.81</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default profile;
