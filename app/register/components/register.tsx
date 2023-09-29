"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUser, registerUser } from "@/utils/authUtils";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import useLogin from "@/hooks/useLogin";
import { useRouter } from "next/navigation";
import { useReCaptcha } from "next-recaptcha-v3";
const INITIAL_VALUES = {
  username: "",
  email: "",
  password: "",
};
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logIn } = useLogin();
  const router = useRouter();
  const { executeRecaptcha } = useReCaptcha();

  async function onSubmit(values: {
    username: string;
    email: string;
    password: string;
  }) {
    const token = await executeRecaptcha("onSubmit");
    if (token) {
      await registerUser(values);
      await logIn({ email: values.email, password: values.password });
      router.push("/");
    } else {
    }
  }

  const handleCheckbox = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validate={(values) => {
        const errors: any = {};
        if (!values.username) {
          errors.username = "Username must not be empty";
        }
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = "Email inválido";
        }

        if (!values.password) {
          errors.password = "Email is required";
        }

        return errors;
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-4">
            <Label
              htmlFor="username"
              className="block mb-2 font-bold dark:text-white text-sm w-full"
            >
              Name:
            </Label>
            <Field
              id="username"
              name="username"
              type="text"
              placeholder="Nickname"
              className="flex h-10 w-full rounded-md border border-neutral-200 border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="email"
              className="block mb-2 font-bold dark:text-white text-sm w-full"
            >
              Mail:
            </Label>
            <Field
              id="email"
              name="email"
              type="text"
              placeholder="Mail Address"
              className="flex h-10 w-full rounded-md border border-neutral-200 border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="password"
              className="block mb-2 font-bold dark:text-white text-sm w-full"
            >
              Password:
            </Label>
            <div className="">
              <Field
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="flex h-10 w-full rounded-md border border-neutral-200 border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
              <div className="flex mt-3">
                <input
                  id="showPassword"
                  type="checkbox"
                  className="h-5 w-5 text-white rounded-3xl checked:bg-black border-black dark:bg-black dark:border-white dark:checked:bg-white"
                  onChange={handleCheckbox}
                />
                <Label
                  className="ml-2 text-black dark:text-white"
                  htmlFor="showPassword"
                >
                  Show password
                </Label>
              </div>
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              className={`block w-full ${buttonVariants({
                variant: "default",
              })}`}
              data-callback={onSubmit}
            >
              Register
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
