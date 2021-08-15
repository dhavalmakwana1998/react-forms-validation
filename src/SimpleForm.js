import "./App.css";
import React from "react";
import classNames from "classnames";
import useForm from "./Hooks/useForm";

const SimpleForm = () => {
  const { onSubmitHandle, errors, onInputChange, users } = useForm();

  return (
    <div className="my-4">
      <h1 className="text-center my-4 ">Simple Form</h1>
      <div className="container">
        <form onSubmit={onSubmitHandle}>
          <div className="row">
            <div className="col-6">
              <div className="form-group user-box">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={users.name}
                  onChange={onInputChange}
                  autoComplete="off"
                  className={classNames("form-control", {
                    "is-invalid": errors.name,
                  })}
                />
                {errors.name && (
                  <span className="text-danger">{errors.name}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group user-box">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={users.phone}
                  onChange={onInputChange}
                  autoComplete="off"
                  className={classNames("form-control", {
                    "is-invalid": errors.phone,
                  })}
                />
                {errors.phone && (
                  <span className="text-danger">{errors.phone}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group user-box">
                <label htmlFor="email">Email address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={users.email}
                  onChange={onInputChange}
                  autoComplete="off"
                  className={classNames("form-control", {
                    "is-invalid": errors.email,
                  })}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group user-box">
                <label htmlFor="state">State</label>
                <select
                  name="state"
                  id="state"
                  value={users.state}
                  onChange={onInputChange}
                  className={classNames("form-control", {
                    "is-invalid": errors.state,
                  })}
                >
                  <option value="">Select State</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Rajeshthan">Rajeshthan</option>
                </select>
                {errors.state && (
                  <span className="text-danger">{errors.state}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group user-box">
                <label htmlFor="name">Address </label>
                <input
                  type="text"
                  name="address"
                  value={users.address}
                  onChange={onInputChange}
                  autoComplete="off"
                  className={classNames("form-control", {
                    "is-invalid": errors.address,
                  })}
                  id="addressLine2"
                />
                {errors.address && (
                  <span className="text-danger">{errors.address}</span>
                )}
              </div>
            </div>

            <div className="col-6">
              <h6 className="color-default">Gender</h6>
              <div className="input-group">
                <div className="form-check">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="Male"
                    onChange={onInputChange}
                  />
                  <label
                    className="ml-2 color-default form-check-label"
                    htmlFor="male"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="Female"
                    onChange={onInputChange}
                  />
                  <label
                    className="ml-2 color-default form-check-label"
                    htmlFor="female"
                  >
                    Female
                  </label>
                </div>
              </div>
              {errors.gender && (
                <span className="text-danger">{errors.gender}</span>
              )}
            </div>
            <div className="col-6">
              <div className="form-group user-box">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  value={users.password}
                  onChange={onInputChange}
                  autoComplete="off"
                  className={classNames("form-control", {
                    "is-invalid": errors.password,
                  })}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group user-box">
                <label htmlFor="cnPassword">Confirm Password</label>
                <input
                  type="cnPassword"
                  name="cnPassword"
                  id="cnPassword"
                  value={users.cnPassword}
                  onChange={onInputChange}
                  autoComplete="off"
                  className={classNames("form-control", {
                    "is-invalid": errors.cnPassword,
                  })}
                />
                {errors.cnPassword && (
                  <span className="text-danger">{errors.cnPassword}</span>
                )}
              </div>
            </div>
            {/* {users.fieldArr.map((item, ind) => {
              return (
                <div className="col-6" key={ind}>
                  <div className="form-group user-box">
                    <label htmlFor="value">Field Array</label>
                    <input
                      type="text"
                      name={`value${ind}`}
                      value={item.value}
                      onChange={onInputChange}
                      autoComplete="off"
                      className={classNames("form-control")}
                    />
                  </div>
                </div>
              );
            })} */}
          </div>

          {/* <button className="my-4 btn btn-warning mr-3" onClick={addFiledArr}>
            Add Filed
          </button> */}
          <button type="submit" className="my-4 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;
