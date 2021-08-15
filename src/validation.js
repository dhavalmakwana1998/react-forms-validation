const validation = async (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 2) {
    errors.name = "Name shoud be atleast 3 character";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "Email is invalid";
  }
  if (!values.state.trim()) {
    errors.state = "State is required";
  }
  if (!values.address.trim()) {
    errors.address = "Address is required";
  }
  if (!values.password.trim()) {
    errors.password = "Pasword is required";
  } else if (values.password.length < 6) {
    errors.password = "Pasword must be greather than 6 character";
  }
  if (!values.cnPassword.trim()) {
    errors.cnPassword = "Confirm Pasword is required";
  } else if (values.cnPassword !== values.password) {
    errors.cnPassword = "Pasword not matched";
  }
  if (!values.gender) {
    errors.gender = "Gender is required";
  }
  if (!values.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (isNaN(values.phone)) {
    errors.phone = "Phone number invalid";
  } else if (values.phone.length !== 10) {
    errors.phone = "Phone number must be 10 numbers";
  }

  return errors;
};

export default validation;
