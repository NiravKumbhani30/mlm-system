import React, { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import process.env.BASE_URL from "../../helper/process.env.BASE_URL";

const ManageUser = ({ props }) => {
  const [users, setUsers] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    ref_code: "",
    status: "",
  });
  const [deleteUser, setDeleteUser] = useState(props.data);
  const [coinList, setCoinList] = useState(props.coinData);
  const [editId, setEditId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [coinPrice, setCoinPrice] = useState("");
  const [userData, setUserData] = useState("");
  const [quantity, setQuantity] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const prodData = {
      first_name: users.first_name,
      last_name: users.last_name,
      email: users.email,
      password: users.password,
      ref_code: users.ref_code,
      status: users.status,
    };
    if (editId) {
      const res = await fetch(`${process.env.BASE_URL}/api/user/${editId}`, {
        method: "PUT",
        body: JSON.stringify(prodData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      setDeleteUser(result.data);
      setEditId("");
      setUsers({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        ref_code: "",
        status: "",
      });
      return;
    }

    const res = await fetch(`${process.env.BASE_URL}/api/user`, {
      method: "POST",
      body: JSON.stringify(prodData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setDeleteUser(result.data);
    setUsers({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      ref_code: "",
      status: "",
    });
  };

  const getEditData = (data) => {
    setUsers({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      ref_code: data.ref_code,
      status: data.status,
    });
    setEditId(data._id);
  };

  const deleteHandler = async (id) => {
    const res = await fetch(`${process.env.BASE_URL}/api/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setDeleteUser(result.data);
  };

  const activeFilter = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/user/filter`, {
      method: "POST",
      body: JSON.stringify("Active"),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setDeleteUser(result.statusFilter);
  };

  const inactiveFilter = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/user/filter`, {
      method: "POST",
      body: JSON.stringify("Inactive"),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setDeleteUser(result.statusFilter);
  };

  const resetFilter = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/user`);
    const result = await res.json();
    setDeleteUser(result);
    setStartDate("");
    setEndDate("");
  };

  const switchHandler = async (data, e) => {
    const prodData = {
      ...deleteUser,
      status: e.target.checked ? "Active" : "Inactive",
    };
    const res = await fetch(`${process.env.BASE_URL}/api/user/${data._id}`, {
      method: "PUT",
      body: JSON.stringify(prodData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setDeleteUser(result.data);
  };

  const getUserId = async (data) => {
    setUserData(data);
  };

  const addBalance = async (e) => {
    e.preventDefault();
    const userId = userData._id;
    const addUserBalance = {
      coinId: coinPrice._id,
      userId: userData._id,
      quantity,
    };
    const res = await fetch(`${process.env.BASE_URL}/api/user/${userId}`, {
      method: "POST",
      body: JSON.stringify(addUserBalance),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const selectCoin = async (id) => {
    const coinId = id.target.value;
    const res = await fetch(`${process.env.BASE_URL}/api/coin/${coinId}`);
    const coinData = await res.json();
    setCoinPrice(coinData);
  };

  useEffect(() => {
    if (startDate && endDate) {
      setTimeout(async () => {
        const res = await fetch(`${process.env.BASE_URL}/api/user/datefilter`, {
          method: "POST",
          body: JSON.stringify({ startDate, endDate }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await res.json();
        setDeleteUser(result.datefilter);
      }, 500);
    }
  }, [startDate, endDate]);

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
                        <li className="breadcrumb-item active">Manage users</li>
                      </ol>
                    </div>
                    <h4 className="page-title">
                      Add User
                      <button
                        type="button"
                        className="add-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo"
                      >
                        <i className="uil-plus"> </i>
                      </button>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table className="table table-striped table-centered mb-0">
            <thead>
              <tr className="text-center">
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Referral Code</th>
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
                <th>
                  <div className="dropdown">
                    <button
                      className="btn  dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Status
                    </button>
                    <ul className="dropdown-menu filter">
                      <li>
                        <a onClick={activeFilter} className="dropdown-item">
                          Active
                          <span className="active"></span>
                        </a>
                      </li>
                      <li>
                        <a onClick={inactiveFilter} className="dropdown-item">
                          Inactive
                          <span className="inactive"></span>
                        </a>
                      </li>
                      <li>
                        <a onClick={resetFilter} className="dropdown-item">
                          Reset
                          <i className="uil uil-redo ms-5 ps-3"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {deleteUser.map((data, index) => (
                <tr className="text-center" key={data._id}>
                  <td>{index + 1}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td>{data.ref_code}</td>
                  <td>{data.createdAt}</td>
                  <td>
                    <div>
                      <input
                        type="checkbox"
                        id={`switch${index + 1}`}
                        data-switch="success"
                        onChange={(e) => switchHandler(data, e)}
                        checked={data.status == "Active"}
                      />
                      <label
                        htmlFor={`switch${index + 1}`}
                        data-on-label="Yes"
                        data-off-label="No"
                      ></label>
                    </div>
                  </td>
                  <td className="table-action">
                    <button
                      onClick={(id) => getUserId(data)}
                      type="button"
                      className="action-icon btn"
                      data-bs-toggle="modal"
                      data-bs-target="#addBalance"
                    >
                      <i className="bi bi-plus-square-fill"></i>
                    </button>
                    <button
                      onClick={(id) => getEditData(data)}
                      type="button"
                      className="action-icon btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      <i className="mdi mdi-pencil"></i>
                    </button>
                    <button
                      type="button"
                      className="action-icon btn"
                      onClick={(id) => deleteHandler(data._id)}
                    >
                      <i className="mdi mdi-delete"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* //* users add/edit form */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add User
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form className="row col-12" onSubmit={submitHandler}>
                    <div className="mb-3 col-6">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        First Name:
                      </label>
                      <input
                        name="first_name"
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        placeholder="First Name"
                        onChange={changeHandler}
                        value={users.first_name}
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Last Name:
                      </label>
                      <input
                        name="last_name"
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        placeholder="Last Name"
                        onChange={changeHandler}
                        value={users.last_name}
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Email:
                      </label>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        placeholder="example@domain.com"
                        onChange={changeHandler}
                        value={users.email}
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Password:
                      </label>
                      <input
                        name="password"
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        placeholder="* * * * * * * *"
                        onChange={changeHandler}
                        value={users.password}
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Referral Code:
                      </label>
                      <input
                        name="ref_code"
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        placeholder="A1B2C3D4"
                        onChange={changeHandler}
                        value={users.ref_code}
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        User Status:
                      </label>
                      <br />
                      <div className="d-flex justify-content-evenly">
                        <div>
                          <input
                            type="radio"
                            name="status"
                            value="Active"
                            className="me-1"
                            onChange={changeHandler}
                            checked={users.status == "Active"}
                          />
                          Active
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="status"
                            value="Inactive"
                            className="me-1"
                            onChange={changeHandler}
                            checked={users.status == "Inactive"}
                          />
                          Inactive
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          setEditId("");
                          setUsers({
                            first_name: "",
                            last_name: "",
                            email: "",
                            password: "",
                            ref_code: "",
                            status: "",
                          });
                        }}
                      >
                        Close
                      </button>
                      {!editId ? (
                        <button
                          type="submit"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Create
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          onClick={submitHandler}
                        >
                          Edit user
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* //* Add Balance to user wallet */}
          <div
            className="modal fade"
            id="addBalance"
            tabIndex="-1"
            aria-labelledby="addBalanceLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add Balance to User
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={addBalance}>
                    <div className="col-12 row">
                      <div className="col-6">
                        <select
                          name="buyCoin"
                          className="form-select"
                          onChange={(e) => {
                            selectCoin(e);
                          }}
                          defaultValue="Select Coin"
                        >
                          <option value="Select Coin" disabled>
                            Select Coin
                          </option>
                          {coinList.map((coin) => (
                            <option value={coin._id} key={coin._id}>
                              {coin.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Coin quantity"
                          onChange={(e) => {
                            setQuantity(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-end gap-2 mt-3">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Save changes
                      </button>
                    </div>
                  </form>
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

export async function getServerSideProps() {
  const coinRes = await fetch(`${process.env.BASE_URL}/api/coin/filter`);
  const coinData = await coinRes.json();

  const res = await fetch(`${process.env.BASE_URL}/api/user`);
  const data = await res.json();
  return {
    props: {
      props: { data, coinData },
    },
  };
}

export default ManageUser;
