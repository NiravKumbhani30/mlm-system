import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="navbar-custom bg-light">
        <div className="topbar container-fluid">
          <div className="d-flex align-items-center gap-lg-2 gap-1">
            <div className="logo-topbar">
              <a href="index.html" className="logo-light">
                <span className="logo-lg">
                  <img src="/images/logo.png" alt="logo" />
                </span>
                <span className="logo-sm">
                  <img src="/images/logo-sm.png" alt="small logo" />
                </span>
              </a>

              <a href="index.html" className="logo-dark">
                <span className="logo-lg">
                  <img src="/images/logo-dark.png" alt="dark logo" />
                </span>
                <span className="logo-sm">
                  <img src="/images/logo-dark-sm.png" alt="small logo" />
                </span>
              </a>
            </div>

            <button
              className="navbar-toggle"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <div className="app-search dropdown d-none d-lg-block">
              <form>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control dropdown-toggle"
                    placeholder="Search..."
                    id="top-search"
                  />
                  <span className="mdi mdi-magnify search-icon"></span>
                  <button
                    className="input-group-text btn btn-primary"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>

              <div
                className="dropdown-menu dropdown-menu-animated dropdown-lg"
                id="search-dropdown"
              >
                <div className="dropdown-header noti-title">
                  <h5 className="text-overflow mb-2">
                    Found <span className="text-danger">17</span> results
                  </h5>
                </div>

                <a href="#" className="dropdown-item notify-item">
                  <i className="uil-notes font-16 me-1"></i>
                  <span>Analytics Report</span>
                </a>

                <a href="#" className="dropdown-item notify-item">
                  <i className="uil-life-ring font-16 me-1"></i>
                  <span>How can I help you?</span>
                </a>

                <a href="#" className="dropdown-item notify-item">
                  <i className="uil-cog font-16 me-1"></i>
                  <span>User profile settings</span>
                </a>

                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                </div>

                <div className="notification-list">
                  <a href="#" className="dropdown-item notify-item">
                    <div className="d-flex">
                      <img
                        className="d-flex me-2 rounded-circle"
                        src="/images/users/avatar-2.jpg"
                        alt="Generic placeholder image"
                        height="32"
                      />
                      <div className="w-100">
                        <h5 className="m-0 font-14">Erwin Brown</h5>
                        <span className="font-12 mb-0">UI Designer</span>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="dropdown-item notify-item">
                    <div className="d-flex">
                      <img
                        className="d-flex me-2 rounded-circle"
                        src="/images/users/avatar-5.jpg"
                        alt="Generic placeholder image"
                        height="32"
                      />
                      <div className="w-100">
                        <h5 className="m-0 font-14">Jacob Deo</h5>
                        <span className="font-12 mb-0">Developer</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ul className="topbar-menu d-flex align-items-center gap-3">
            <li className="dropdown d-lg-none">
              <a
                className="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ri-search-line font-22"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                <form className="p-3">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                  />
                </form>
              </div>
            </li>

            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="/images/flags/us.jpg"
                  alt="user-image"
                  className="me-0 me-sm-1"
                  height="12"
                />
                <span className="align-middle d-none d-lg-inline-block">
                  English
                </span>{" "}
                <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated">
                <a href="#" className="dropdown-item">
                  <img
                    src="/images/flags/germany.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />
                  German
                </a>

                <a href="#" className="dropdown-item">
                  <img
                    src="/images/flags/italy.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />
                  Italian
                </a>

                <a href="#" className="dropdown-item">
                  <img
                    src="/images/flags/spain.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{" "}
                  Spanish
                </a>

                <a href="#" className="dropdown-item">
                  <img
                    src="/images/flags/russia.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />
                  Russian
                </a>
              </div>
            </li>

            <li className="dropdown notification-list">
              <a
                className="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ri-notification-3-line font-22"></i>
                <span className="noti-icon-badge"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0 font-16 fw-semibold"> Notification</h6>
                    </div>
                    <div className="col-auto">
                      <a
                        href="#"
                        className="text-dark text-decoration-underline"
                      >
                        <small>Clear All</small>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="px-3"
                  style={{ maxHeight: "300px" }}
                  data-simplebar
                >
                  <h5 className="text-muted font-13 fw-normal mt-2">Today</h5>

                  <a
                    href="#"
                    className="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2"
                  >
                    <div className="card-body">
                      <span className="float-end noti-close-btn text-muted">
                        <i className="mdi mdi-close"></i>
                      </span>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="notify-icon bg-primary">
                            <i className="mdi mdi-comment-account-outline"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <h5 className="noti-item-title fw-semibold font-14">
                            Datacorp{" "}
                            <small className="fw-normal text-muted ms-1">
                              1 min ago
                            </small>
                          </h5>
                          <small className="noti-item-subtitle text-muted">
                            Caleb Flakelar commented on Admin
                          </small>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                  >
                    <div className="card-body">
                      <span className="float-end noti-close-btn text-muted">
                        <i className="mdi mdi-close"></i>
                      </span>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="notify-icon bg-info">
                            <i className="mdi mdi-account-plus"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <h5 className="noti-item-title fw-semibold font-14">
                            Admin{" "}
                            <small className="fw-normal text-muted ms-1">
                              1 hours ago
                            </small>
                          </h5>
                          <small className="noti-item-subtitle text-muted">
                            New user registered
                          </small>
                        </div>
                      </div>
                    </div>
                  </a>

                  <h5 className="text-muted font-13 fw-normal mt-0">
                    Yesterday
                  </h5>

                  <a
                    href="#"
                    className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                  >
                    <div className="card-body">
                      <span className="float-end noti-close-btn text-muted">
                        <i className="mdi mdi-close"></i>
                      </span>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="notify-icon">
                            <img
                              src="/images/users/avatar-2.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <h5 className="noti-item-title fw-semibold font-14">
                            Cristina Pride
                            <small className="fw-normal text-muted ms-1">
                              1 day ago
                            </small>
                          </h5>
                          <small className="noti-item-subtitle text-muted">
                            Hi, How are you? What about our next meeting
                          </small>
                        </div>
                      </div>
                    </div>
                  </a>

                  <h5 className="text-muted font-13 fw-normal mt-0">
                    30 Dec 2021
                  </h5>

                  <a
                    href="#"
                    className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                  >
                    <div className="card-body">
                      <span className="float-end noti-close-btn text-muted">
                        <i className="mdi mdi-close"></i>
                      </span>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="notify-icon bg-primary">
                            <i className="mdi mdi-comment-account-outline"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <h5 className="noti-item-title fw-semibold font-14">
                            Datacorp
                          </h5>
                          <small className="noti-item-subtitle text-muted">
                            Caleb Flakelar commented on Admin
                          </small>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                  >
                    <div className="card-body">
                      <span className="float-end noti-close-btn text-muted">
                        <i className="mdi mdi-close"></i>
                      </span>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="notify-icon">
                            <img
                              src="/images/users/avatar-4.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <h5 className="noti-item-title fw-semibold font-14">
                            Karen Robinson
                          </h5>
                          <small className="noti-item-subtitle text-muted">
                            Wow ! this admin looks good and awesome design
                          </small>
                        </div>
                      </div>
                    </div>
                  </a>

                  <div className="text-center">
                    <i className="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0"></i>
                  </div>
                </div>

                <a
                  href="#"
                  className="dropdown-item text-center text-primary notify-item border-top border-light py-2"
                >
                  View All
                </a>
              </div>
            </li>

            <li className="dropdown d-none d-sm-inline-block">
              <a
                className="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ri-apps-2-line font-22"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
                <div className="p-2">
                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="/images/brands/slack.png" alt="slack" />
                        <span>Slack</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="/images/brands/github.png" alt="Github" />
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="/images/brands/dribbble.png"
                          alt="dribbble"
                        />
                        <span>Dribbble</span>
                      </a>
                    </div>
                  </div>

                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="/images/brands/bitbucket.png"
                          alt="bitbucket"
                        />
                        <span>Bitbucket</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="/images/brands/dropbox.png" alt="dropbox" />
                        <span>Dropbox</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="/images/brands/g-suite.png" alt="G Suite" />
                        <span>G Suite</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle arrow-none  px-2"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <span className="account-user-avatar">
                  <img
                    src="/images/users/avatar-1.jpg"
                    alt="user-image"
                    width="32"
                    className="rounded-circle me-2"
                  />
                </span>
                <span className="d-lg-flex flex-column gap-1 d-none">
                  <h5 className="my-0">Dominic Keller</h5>
                  <h6 className="my-0 fw-normal">Founder</h6>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome !</h6>
                </div>

                <Link href="/admin/profile" className="dropdown-item">
                  <i className="mdi mdi-account-circle me-1"></i>
                  <span>My Account</span>
                </Link>

                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-account-edit me-1"></i>
                  <span>Settings</span>
                </a>

                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-lifebuoy me-1"></i>
                  <span>Support</span>
                </a>

                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-lock-outline me-1"></i>
                  <span>Lock Screen</span>
                </a>

                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-logout me-1"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Header;
