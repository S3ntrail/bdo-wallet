import { Register_Button } from "components/button/button";
import { signin, signIn } from "next-auth/client";

import Input from "components/form/input/input";
import Label from "components/form/label/label";

import { useFormik } from "formik";

const Register = () => {

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "Required";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      }

      return errors;
    },
    onSubmit: async (values) => {
      const { username, password, email } = values;

      const reqOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      };

      const res = await fetch("/api/register", reqOptions)
      
      if (res.ok) {
        signin()
      } else {
        console.log('UWU NO SUCKY WUCKY FOR YOU');
      }
    },
  });

  return (
    <div className="h-screen bg-gray-750 flex justify-center">
      <div className="flex flex-wrap items-center m-32 mt-10 mb-48 p-20 bg-gray-850 rounded-xl">
        <div>
          <div className="mb-8">
            <h3>Register</h3>
          </div>

          <div className="mb-8">
            <hr></hr>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col mb-8">
              <Label for="username" title="username" />
              <Input
                id="username"
                type="text"
                placeholder="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
              />
              {formik.errors.username ? (
                <div className="text-left text-red-500">
                  {formik.errors.username}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col mb-8">
              <Label for="password" title="password" />
              <Input
                id="password"
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password ? (
                <div className="text-left text-red-500">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col mb-8">
              <Label for="email" title="email" />
              <Input
                id="email"
                type="email"
                placeholder="email address"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email ? (
                <div className="text-left text-red-500">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="mt-16">
              <hr></hr>
            </div>

            <div className="mt-8">
              <Register_Button title="Register" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
