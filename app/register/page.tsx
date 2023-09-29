import { Metadata } from "next";

import Form from "./components/form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};


export default function AuthenticationPage() {

  return (
    <div className="lg:p-8">
      <Form/>
    </div>
  );
}
