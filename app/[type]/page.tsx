import Grid from "@/components/Grid";
import { Component } from "lucide-react";

export default async function Page({
  params,
  searchParams,
}: {
  params: { type: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: params?.type,
    }),
  };

  async function fetchComponentsByType() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/components/getByType`,
      requestOptions
    );
    const data = await res.json();
    return data;
  }

  async function fetchTry() {
    const response = await fetch("https://tailverse.me/components/getByType", requestOptions);
    try {
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  }

  // Llama a las funciones asincrónicas para obtener los componentes
  const components = await fetchComponentsByType();
  console.log(components);
  console.log(fetchTry())
  return (
    <div>
      <Grid components={components} />
    </div>
  );
}
