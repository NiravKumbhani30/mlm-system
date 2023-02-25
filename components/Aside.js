import Link from "next/link";
import React from "react";

const Aside = () => {
  return (
    <div>
      <div className="leftside-menu">
        <Link href="/admin" className="logo logo-light">
          <span className="logo-lg">
            <img src="../images/logo.png" alt="logo" />
          </span>
          <span className="logo-sm">
            <img src="../images/logo-sm.png" alt="small logo" />
          </span>
        </Link>

        <Link href="/admin" className="logo logo-dark">
          <span className="logo-lg">
            <img src="../images/logo-dark.png" alt="dark logo" />
          </span>
          <span className="logo-sm">
            <img src="../images/logo-dark-sm.png" alt="small logo" />
          </span>
        </Link>

        <div
          className="button-sm-hover"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Show Full Sidebar"
        >
          <i className="ri-checkbox-blank-circle-line align-middle"></i>
        </div>

        <div className="button-close-fullsidebar">
          <i className="ri-close-fill align-middle"></i>
        </div>

        <div className="h-100" id="leftside-menu-container" data-simplebar>
          <div className="leftbar-user">
            <a href="pages- .html">
              <img
                src="../images/users/avatar-1.jpg"
                alt="user-image"
                height="42"
                className="rounded-circle shadow-sm"
              />
              <span className="leftbar-user-name mt-2">Dominic Keller</span>
            </a>
          </div>

          <ul className="side-nav">
            <li className="side-nav-title">Navigation</li>

            <li className="side-nav-item">
              <Link href="/admin" className="side-nav-link">
                <i className="uil-home-alt"></i>
                <span> Dashboards </span>
              </Link>
            </li>
            <li className="side-nav-title">Components</li>

            <li className="side-nav-item">
              <Link href="/admin/profile" className="side-nav-link">
                <i className="uil-user-circle"></i>
                <span> Manage Profile </span>
              </Link>
            </li>

            <li className="side-nav-item">
              <Link href="/admin/coin" className="side-nav-link">
                <i className="uil-bitcoin"></i>
                <span> Manage Coin </span>
              </Link>
            </li>

            <li className="side-nav-item">
              <Link href="/admin/user" className="side-nav-link">
                <i className="uil-users-alt"></i>
                <span> Manage Users </span>
              </Link>
            </li>

            <li className="side-nav-item">
              <Link href="/admin/package" className="side-nav-link">
                <i className="uil-package"></i>
                <span> Manage Package </span>
              </Link>
            </li>

            <li className="side-nav-item">
              <Link href="/admin/packagehistory" className="side-nav-link">
                <i className="uil-history"></i>
                <span>User Package History</span>
              </Link>
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
