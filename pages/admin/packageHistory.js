import React, { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import baseURL from "../../hel/"

const packageHistory = (props) => {
  const [packageHistory, setPackageHistory] = useState(props.data);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const resetFilter = async () => {
    const res = await fetch(`${baseURL}/api/packagehistory`);
    const result = await res.json();
    setPackageHistory(result.data);
    setStartDate("");
    setEndDate("");
  };

  useEffect(() => {
    if (startDate && endDate) {
      setTimeout(async () => {
        const res = await fetch(
          `${baseURL}/api/packagehistory/datefilter`,
          {
            method: "POST",
            body: JSON.stringify({ startDate, endDate }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await res.json();
        setPackageHistory(result.datefilter);
      }, 500);
    }
  }, [startDate, endDate]);

  return (
    <div>
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
                        <li className="breadcrumb-item active">
                          Manage User Package History
                        </li>
                      </ol>
                    </div>
                    <h4 className="page-title">Manage User Package History</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <table className="table table-striped table-centered mb-0">
            <thead>
              <tr className="text-center">
                <th>No.</th>
                <th>User Name</th>
                <th>Package Name</th>
                <th>Coin Name</th>
                <th>Coin Price</th>
                <th>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Created on
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item text-center" href="#">
                          <label>From</label>
                          <input
                            type="date"
                            name="startDate"
                            className="form-control"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                          />
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-center" href="#">
                          <label>To</label>
                          <input
                            type="date"
                            name="endDate"
                            className="form-control"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                          />
                        </a>
                      </li>
                      <li>
                        <a onClick={resetFilter} className="dropdown-item">
                          Reset
                          <i className="uil uil-redo ms-5 ps-5"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {packageHistory.map((data, index) => (
                <tr className="text-center" key={index}>
                  <td>{index + 1}</td>
                  <td>{data.userInfo[0].first_name}</td>
                  <td>{data.packageInfo[0].name}</td>
                  <td>{data.coinInfo[0].name}</td>
                  <td>${data.coinInfo[0].usdPrice}</td>
                  <td>{data.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${baseURL}/api/packagehistory`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}

export default packageHistory;
