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

  async function getComponentsByType() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/components/getByType`,
      requestOptions
    );
    const data =  await res.json();
    return data
  }

  // Llama a la función asincrónica para obtener los componentes
  const components = await getComponentsByType();
  return (
    <div>
      <Grid components={components} />
    </div>
  );
}
