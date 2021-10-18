import { Route, Switch, Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Product = (props) => {
  const removeItem = async (id) => {
    try {
      await fetch("https://615ad1f14a360f0017a812b2.mockapi.io/animals/" + id, {
        method: "DELETE",
      });
      props.onDelete(id);
    } catch (errors) {}
  };
  return (
    <div>
      <Switch>
        <Route>
          <div className="row">
            {props.products.map((item, index) => {
              //style={{ width: "320px" }}
              return (
                <div key="index" className="col-4">
                  <img src={item.img} className="card-img-top" alt="..." />

                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      <Link to={`/product/${item.id}`}>{item.name}</Link>
                      <p>{item.category}</p>
                    </h5>
                    <p className="card-text" padding="2px">
                      <button
                        className="btn btn-primary m-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Delete
                      </button>

                      <Link
                        className="btn btn-primary"
                        to={`/product/${item.id}/edit`}
                      >
                        Edit
                      </Link>

                      <small>{item.price}</small>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Product;
