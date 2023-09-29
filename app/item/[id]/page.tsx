import View from "./components/View";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: params?.id,
    }),
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/components/getById`,
    requestOptions
  );
  const component = await res.json();

  return (
    <>
      <View component={component} />;
    </>
  );
}
