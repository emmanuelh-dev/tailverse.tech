"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Label } from "@/components/ui/label";
import useLogin from "@/hooks/useLogin";
import { useRouter } from 'next/navigation'
import { useReCaptcha } from "next-recaptcha-v3";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { logIn } = useLogin();
  const router = useRouter();
  const { executeRecaptcha } = useReCaptcha();


  const handleFormSubmit = async (values: { email: string; password: string }) => {
    const token = await executeRecaptcha("onSubmit");
    if (token){

    await logIn(values)
    router.push('/');

    }
  };
  const handleCheckbox = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleFormSubmit}
      validate={(values) => {
        const errors: any = {};

        if (!values.email) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = "Invalid email";
        }

        if (!values.password) {
          errors.password = "Password is required";
        }

        return errors;
      }}
    >
      <Form>
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
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="password"
            className="block mb-2 font-bold dark:text-white text-sm"
          >
            Password:
          </Label>
          <Field
            id="password"
            name="password"
            type={!showPassword ? "password" : "text"}
            placeholder="Password"
            className="flex h-10 w-full rounded-md border border-neutral-200 border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-600"
          />
        </div>
        <div className="flex my-3">
          <input
            id="showPassword"
            type="checkbox"
            className="h-5 w-5 text-white rounded-3xl checked:bg-black border-black dark:bg-black dark:border-white dark:checked:bg-white"
            onChange={handleCheckbox}
          />
          <Label
            className="ml-2 text-black dark:text-white text-sm font-thin"
            htmlFor="showPassword"
          >
            Show password
          </Label>
        </div>
        <div>
          <button
            type="submit"
            className="items-center justify-center w-full px-6 py-2.5 text-center hover:dark:border-neutral-100 dark:text-black hover:dark:text-white dark:bg-white text-white duration-200 p-3 mb-3 bg-black border-2 border-black rounded-3xl inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          >
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LogIn;
