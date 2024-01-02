import { Metadata } from "next";

import Form from "./components/form";

export const metadata: Metadata = {
  title: "Tailverse Login Page",
  description: "Login to save your components and get access to your dashboard.",
};


export default function AuthenticationPage() {

  return (
    <div className="lg:p-8">
      <Form/>
    </div>
  );
}
