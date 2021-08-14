import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const MateriaUiForm = () => {
  const [users, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    city: "",
    bio: "",
    password: "",
    cnPassword: "",
  });
  const classes = useStyles();

  const onInputChange = (event) => {
    const eventName = event.target.name;
    const eventValue = event.target.value;
    setUsers({ ...users, [eventName]: eventValue });
  };
  const onSubmitHandle = async (event) => {
    event.preventDefault();
    alert("success..please check console");
    console.log(users);
  };

  useEffect(() => {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isNaN", (value) => {
      if (isNaN(value)) {
        return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule("isNum", (value) => {
      if (isNaN(value)) {
        return true;
      }
      return false;
    });
    ValidatorForm.addValidationRule("numLimit", (value) => {
      if (value.length < 10 || value.length > 10) {
        return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== users.password) {
        return false;
      }
      return true;
    });

    return () => {
      ValidatorForm.removeValidationRule("isNaN");
      ValidatorForm.removeValidationRule("isNum");
      ValidatorForm.removeValidationRule("numLimit");
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, []);

  return (
    <>
      <div className="container my-4">
        <Container maxWidth="md">
          <CssBaseline />
          <div className={classes.paper}>
            <h1 className="text-center">Materi Ui Form</h1>
            <ValidatorForm onSubmit={onSubmitHandle}>
              {/* <form className={classes.form} onSubmit={onSubmitHandle}> */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    name="name"
                    variant="outlined"
                    fullWidth
                    id="name"
                    value={users.name}
                    onChange={onInputChange}
                    label="Full Name"
                    autoFocus
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={users.username}
                    onChange={onInputChange}
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={users.email}
                    onChange={onInputChange}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "This field is required",
                      "email is not valid'",
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    name="phone"
                    label="Phone number"
                    id="phone"
                    value={users.phone}
                    onChange={onInputChange}
                    validators={["required", "isNaN", "numLimit"]}
                    errorMessages={[
                      "This field is required",
                      "Please enter number",
                      "Number must be 10 character",
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    name="website"
                    label="Website"
                    id="website"
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                    value={users.website}
                    onChange={onInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    name="city"
                    label="City"
                    id="city"
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                    value={users.city}
                    onChange={onInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    name="password"
                    label="password"
                    id="password"
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                    value={users.password}
                    onChange={onInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    name="cnPassword"
                    label="Confirm Password"
                    id="cnPassword"
                    validators={["required", "isPasswordMatch"]}
                    errorMessages={[
                      "This field is required",
                      "password not match",
                    ]}
                    value={users.cnPassword}
                    onChange={onInputChange}
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextValidator
                    id="bio"
                    label="Bio"
                    multiline
                    fullWidth
                    name="bio"
                    rows={3}
                    variant="outlined"
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                    value={users.bio}
                    onChange={onInputChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add
              </Button>
            </ValidatorForm>
            {/* </form> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default MateriaUiForm;
