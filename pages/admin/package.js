import React, { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import process.env.BASE_URL from "../../helper/process.env.BASE_URL"

const ManagePackage = (props) => {
  const [packages, setPackages] = useState({
    name: "",
    description: "",
    price: "",
    status: "",
  });
  const [deletePackage, setDeletePackage] = useState(props.data);
  const [editId, setEditId] = useState("");

  const [image, setImage] = useState("");


  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPackages({
      ...packages,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const img = await imageUpload();
    const prodData = {
      name: packages.name,
      description: packages.description,
      image: img,
      price: packages.price,
      status: packages.status,
    };
    if (editId) {
      const res = await fetch(`${process.env.BASE_URL}/api/package/${editId}`, {
        method: "PUT",
        body: JSON.stringify(prodData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      setDeletePackage(result.data);
      setEditId("");
      setPackages({
        name: "",
        description: "",
        price: "",
        status: "",
      });
      setImage("");
      return;
    }

    const res = await fetch(`${process.env.BASE_URL}/api/package`, {
      method: "POST",
      body: JSON.stringify(prodData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setDeletePackage(result.data);
    setPackages({
      name: "",
      description: "",
      price: "",
      status: "",
    });
    setImage("");
  };

  const imageUpload = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "mlmSystem");
    formData.append("cloud_name", "nick30");

    const res = await fetch(`${process.env.COIN_CLOUD_URL}/image/upload/`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.url;
  };

  const getEditData = (data) => {
    setPackages({
      name: data.name,
      description: data.description,
      price: data.price,
      status: data.status,
    });
    setEditId(data._id);
  };

  const deleteHandler = async (id) => {
    const res = await fetch(`${process.env.BASE_URL}/api/package/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setDeletePackage(result.data);
  };

  const activeFilter = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/package/filter`, {
      method: "POST",
      body: JSON.stringify("Active"),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setDeletePackage(result.statusFilter);
  };

  const inactiveFilter = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/package/filter`, {
      method: "POST",
      body: JSON.stringify("Inactive"),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setDeletePackage(result.statusFilter);
  };

  const resetFilter = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/package`);
    const result = await res.json();
    setDeletePackage(result);
  };

  const switchHandler = async (data, e) => {
    const prodData = {
      ...deletePackage,
      status: e.target.checked ? "Active" : "Inactive",
    };
    const res = await fetch(`${process.env.BASE_URL}/api/package/${data._id}`, {
      method: "PUT",
      body: JSON.stringify(prodData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setDeletePackage(result.data);
  };



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
                        <li className="breadcrumb-item active">
                          Manage packages
                        </li>
                      </ol>
                    </div>
                    <h4 className="page-title">
                      Add Package
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
                <th>Package Image</th>
                <th>Package Name</th>
                <th>Descritption</th>
                <th>Price</th>
                <th>created On</th>
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
              {deletePackage.map((data, index) => (
                <tr className="text-center" key={data._id}>
                  <td>{index + 1}</td>
                  <td className="table-user">
                    <img
                      src={data.image}
                      alt="table-user"
                      className="me-2 rounded-circle"
                    />
                  </td>
                  <td>{data.name}</td>
                  <td className="d-flex algn-items-center justify-content-center">
                    <div className="description">{data.description}</div>
                  </td>
                  <td>$ {data.price}</td>

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
                    {!editId ? "Add Package" : "Edit Package"}
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
                        Package Name:
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        placeholder="Package Name"
                        onChange={changeHandler}
                        value={packages.name}
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        description:
                      </label>
                      <input
                        name="description"
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        placeholder="Package description"
                        onChange={changeHandler}
                        value={packages.description}
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Package Price($):
                      </label>
                      <input
                        name="price"
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        placeholder="Package Price"
                        onChange={changeHandler}
                        value={packages.price}
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Package Status:
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
                            checked={packages.status == "Active"}
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
                            checked={packages.status == "Inactive"}
                          />
                          Inactive
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Package image:
                      </label>
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                        id="recipient-name"
                        placeholder="Package Name"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          setEditId("");
                          setPackages({
                            name: "",
                            description: "",
                            price: "",
                            status: "",
                          });
                          setImage("");
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
                          Edit Package
                        </button>
                      )}
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
  const res = await fetch(`${process.env.BASE_URL}/api/package`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default ManagePackage;
