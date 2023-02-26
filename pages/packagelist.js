import { parseCookies } from "nookies";
import React, { useState } from "react";
import baseURL from "../helper/baseurl"


const packagelist = ({ props }) => {
  const [packageList, setPackagaeList] = useState(props.userData);
  const [coinList, setCoinList] = useState(props.coinData);
  const [packageInfo, setPackageInfo] = useState({});
  const [coinPrice, setCoinPrice] = useState("");
  const [coinAmount, setCoinAmount] = useState("");

  const filterData = props.tokenData.filter((data) => data.balance > 0);

  const buyHandler = async (id) => {
    const res = await fetch(`${baseURL}/api/package/${id}`);
    const packageData = await res.json();
    setPackageInfo(packageData);
  };
  const selectCoin = async (id) => {
    const coinId = id.target.value;
    const res = await fetch(`${baseURL}/api/coin/${coinId}`);
    const coinData = await res.json();
    setCoinPrice(coinData);

    const walletRes = await fetch(
      `${baseURL}/api/wallet/${coinId}`,
      {
        method: "POST",
        body: JSON.stringify(props.tokenData[0].userId),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    const walletData = await walletRes.json();
    setCoinAmount(walletData[0]);
  };

  const coinBuyer = async (e) => {
    e.preventDefault();
    const BuyDetails = {
      packageId: packageInfo._id,
      packagePrice: packageInfo.price,
      userId: props.tokenData[0].userId,
      ref_from: props.tokenData[0].userInfo[0].ref_from,
      coinId: coinPrice._id,
      coinPrice: coinPrice.usdPrice.toFixed(4),
      coinBalance: coinAmount.balance,
      packageAmount: (packageInfo.price / coinPrice.usdPrice).toFixed(4),
    };
    await fetch(`${baseURL}/api/wallet`, {
      method: "POST",
      body: JSON.stringify(BuyDetails),
      headers: {
        "Content-Type": "Application/json",
      },
    });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="col-12 row">
          {packageList.slice(0, 3).map((data, index) => (
            <div className="col-xl-4 col-md-6 col-sm-12" key={index}>
              <div className="col-12 coin-card">
                <div className="d-flex align-items-center">
                  <img className="coin-img" src={data.image} />
                  <span className="coin-name">{data.name}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="coin-price">$ {data.price}</h5>
                  <button
                    type="button"
                    className="btn btn-dark py-1 my-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={(e) => buyHandler(data._id)}
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-12">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>No</th>
                <th>image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Package Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {packageList.slice(3).map((data, index) => (
                <tr key={index} className="text-center">
                  <th>{index + 1}</th>
                  <td className="table-user">
                    <img src={data.image} className="me-2 rounded-circle" />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.description}</td>
                  <td>$ {data.price}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => buyHandler(data._id)}
                    >
                      Buy now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
                  Buy this package
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={coinBuyer}>
                  <table className="table">
                    <thead>
                      <tr className="text-center">
                        <th>Package Name</th>
                        <th>Package price</th>
                        <th>Coin</th>
                        <th>Total Balance</th>
                        <th>Coin Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td>{packageInfo.name}</td>
                        <td>{packageInfo.price}</td>
                        <td>
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
                            {filterData.map((coin) => (
                              <option
                                value={coin.coinInfo[0]._id}
                                key={coin._id}
                              >
                                {coin.coinInfo[0].name}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td>{Number(coinAmount.balance).toFixed(4)}</td>
                        <td>
                          {(packageInfo.price / coinPrice.usdPrice).toFixed(4)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-end gap-2">
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
                      Buy Package
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx);

  if (token) {
    const tokenRes = await fetch(`${baseURL}/api/wallet`, {
      headers: {
        Authorization: token,
      },
    });
    const tokenData = await tokenRes.json();
    const coinRes = await fetch(`${baseURL}/api/coin/filter`);
    const coinData = await coinRes.json();

    const res = await fetch(`${baseURL}/api/package/filter`);
    const data = await res.json();
    return {
      props: {
        props: { userData: data, coinData: coinData, tokenData: tokenData },
      },
    };
  }
}

export default packagelist;
