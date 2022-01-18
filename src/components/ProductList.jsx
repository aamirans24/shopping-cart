import React from "react";
import reactDom from "react-dom";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { useState } from "react";

const ProductList = () => {
  let [state, setstate] = useState({
    products: [
      {
        sNo: "001",
        image:
          "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1bca7fb9-5f5c-42e3-930a-8a430d8a9e60.png?v=1625046257",
        name: "Apple Watch",
        price: 2500,
        qty: 1,
      },
      {
        sNo: "002",
        image:
          "https://cdn.vox-cdn.com/thumbor/yKW_dga4Adx-mhxIlpANQm9CC-M=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22129845/Two.png",
        name: "MI Watch",
        price: 2000,
        qty: 1,
      },
      {
        sNo: "003",
        image:
          "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        name: "Samsung Watch",
        price: 2300,
        qty: 1,
      },
      {
        sNo: "004",
        image:
          "https://image.shutterstock.com/image-photo/varna-bulgaria-october-15-2015-260nw-337214816.jpg",
        name: "Real Me Watch",
        price: 2000,
        qty: 1,
      },
      {
        sNo: "005",
        image:
          "https://cdn.vox-cdn.com/thumbor/yKW_dga4Adx-mhxIlpANQm9CC-M=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22129845/Two.png",
        name: "Oppo Watch",
        price: 1900,
        qty: 1,
      },
    ],
  });

  let { products } = state;

  let decQty = (productId) => {
    let items = products.map((product) => {
      if (product.sNo === productId) {
        return {
          ...product,
          qty: product.qty - 1 > 0 ? product.qty - 1 : 1,
        };
      }
      return product;
    });
    setstate({
      products: [...items],
    });
  };

  let incQty = (productId) => {
    let items = products.map((product) => {
      if (product.sNo === productId) {
        return {
          ...product,
          qty: product.qty + 1,
        };
      }
      return product;
    });
    setstate({
      products: [...items],
    });
  };

  let grandTotal = () => {
    let total = 0;
    for (let product of products) {
      total += product.qty * product.price;
    }
    return total;
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md shadow-lg bg-light">
            <h1 className="text-danger">Shopping Cart</h1>
            <p className="h6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              asperiores dicta cupiditate ex veritatis porro corporis, et
              dolorem. Molestias facere voluptatibus itaque similique error
              dolores necessitatibus dicta ducimus! Reiciendis quam ex dolorem
              eveniet consequuntur nihil?
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md shadow-lg">
            <table className="table table-striped table-hover">
              <thead className="bg-dark text-white">
                <tr>
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr>
                      <td>{product.sNo}</td>
                      <td>
                        <img
                          src={product.image}
                          alt="watch"
                          height={40}
                          width={40}
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>&#8377; {product.price.toFixed(2)}</td>
                      <td>
                        <FaMinusSquare
                          onClick={() => {
                            decQty(product.sNo);
                          }}
                        />{" "}
                        {product.qty}{" "}
                        <FaPlusSquare
                          onClick={() => {
                            incQty(product.sNo);
                          }}
                        />
                      </td>
                      <td>
                        &#8377; {(product.price * product.qty).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
                <tr className="fw-bold">
                  <td colSpan={4}></td>
                  <td>Grand Total :</td>
                  <td>&#8377; {grandTotal().toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
