import Grid from "@/components/Grid";

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
    } catch (error) {
      console.error("error", error);
    }
  }
  const components = await fetchComponentsByType();
  return (
    <div>
      <Grid components={components} />
    </div>
  );
}
