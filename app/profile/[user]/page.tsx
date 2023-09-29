import Grid from "@/components/Grid";
import { Component } from "lucide-react";
import UserHeader from "./UserHeader";

export default async function Page({
  params,
  searchParams,
}: {
  params: { user: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      author: params?.user,
      username: params?.user
    }),
  };

  async function getComponentsUser() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/components/getByAuthor`,
      requestOptions
    );
    const data =  await res.json();
    return data
  }
  async function getUserInfo() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/getUserByUsername`,
      requestOptions
    );
    return await res.json();
  }
  const user = await getUserInfo();
  const components = await getComponentsUser();
  console.log(user)
  return (
    <div>
      <UserHeader user={user}/>
      <Grid components={components} />
    </div>
  );
}
