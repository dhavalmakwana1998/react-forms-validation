import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import classNames from "classnames";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "test", // unique name for your Field Array
      keyName: 0, //default to "id", you can change the key name
    }
  );

  console.log(errors);
  const onSubmit = (data) => {
    alert("success..please check console");
    console.log(data);
  };
  return (
    <div>
      <div className="container my-4">
        <h1 className="text-center">React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={classNames("form-control", {
                    "is-invalid": errors.name,
                  })}
                  {...register("name", {
                    required: "This field is required",
                    minLength: {
                      value: 3,
                      message: "minimum 3 character required",
                    },
                    maxLength: {
                      value: 10,
                      message: "input size exceed minimum 10 character",
                    },
                    pattern: {
                      value: /[A-Za-z]/,
                      message: "input only alphabet",
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-danger">{errors.name.message}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className={classNames("form-control", {
                    "is-invalid": errors.phone,
                  })}
                  {...register("phone", {
                    required: "This field is required",
                    minLength: {
                      value: 10,
                      message: "minimum 10 character required",
                    },
                    maxLength: {
                      value: 10,
                      message: "input size exceed minimum 10 character",
                    },
                    valueAsNumber: {
                      message: "invalid number format",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="text-danger">{errors.phone.message}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  className={classNames("form-control", {
                    "is-invalid": errors.email,
                  })}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="name">Select State</label>
                <select
                  name="state"
                  id="state"
                  className={classNames("form-control", {
                    "is-invalid": errors.state,
                  })}
                  {...register("state", {
                    required: "This field is required",
                  })}
                >
                  <option value="">Not selected</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Rajeshthan">Rajeshthan</option>
                </select>
                {errors.state && (
                  <span className="text-danger">{errors.state.message}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="name">Address Line 1</label>
                <input
                  type="text"
                  name="address.one"
                  id="addressLine1"
                  className={classNames("form-control", {
                    "is-invalid": errors.address?.one,
                  })}
                  {...register("address.one", {
                    required: "This field is required",
                  })}
                />
                {errors.address?.one && (
                  <span className="text-danger">
                    {errors.address?.one.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="name">Address Line 2</label>
                <input
                  type="text"
                  name="addres.two"
                  className={classNames("form-control", {
                    "is-invalid": errors.address?.two,
                  })}
                  id="addressLine2"
                  {...register("address.two", {
                    required: "This field is required",
                  })}
                />
                {errors.address?.two && (
                  <span className="text-danger">
                    {errors.address.two.message}
                  </span>
                )}
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  className={classNames("form-control", {
                    "is-invalid": errors.password,
                  })}
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="cnPassword">Confirm Password</label>
                <input
                  type="cnPassword"
                  name="cnPassword"
                  id="cnPassword"
                  {...register("cnPassword", {
                    required: "This field is required",
                    validate: (value) =>
                      value === watch("password", "") ||
                      "The passwords do not match",
                  })}
                  className={classNames("form-control", {
                    "is-invalid": errors.cnPassword,
                  })}
                />
                {errors.cnPassword && (
                  <span className="text-danger">
                    {errors.cnPassword.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-12 mb-3">
              <label>Field Array</label>
              {fields.map((field, index) => (
                <div>
                  <input
                    className={classNames("form-control", {
                      "is-invalid": errors?.test[index],
                    })}
                    key={index} // important to include key with field's id
                    {...register(`test.${index}.value`, {
                      required: "This field is required",
                    })}
                    defaultValue={field.value} // make sure to include defaultValue
                  />
                  {errors?.test[index] && (
                    <span className="text-danger">
                      {errors?.test[index].message}
                    </span>
                  )}
                </div>
              ))}

              <br></br>
              <button
                className="btn btn-success"
                type="button"
                onClick={() =>
                  append({
                    name: "testField",
                  })
                }
              >
                Append
              </button>
            </div>

            <div className="col-6">
              <h6>Gender</h6>
              <div className="input-group">
                <div className="form-check">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="Male"
                    {...register("gender", {
                      required: "This field is required",
                    })}
                  />
                  <label className="ml-2 form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="Female"
                    {...register("gender", {
                      required: "This field is required",
                    })}
                  />
                  <label className="ml-2 form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
              {errors.gender && (
                <span className="text-danger">{errors.gender.message}</span>
              )}
            </div>
            <div className="col-6"></div>
            <div className="col-6 d-flex align-items-center">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="form-check-input"
                  id="checkbox"
                  {...register("checkbox", {
                    required: "This field is required",
                  })}
                />
                <label className="form-check-label" htmlFor="checkbox">
                  Check me out
                </label>
                {errors.checkbox && (
                  <div className="text-danger">{errors.checkbox.message}</div>
                )}
              </div>
            </div>
            <button type="submit" className="my-4 btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReactHookForm;
