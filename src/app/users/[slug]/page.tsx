import React, { Suspense } from "react";
import { getUser, getUsers } from "@/api";
import { IUser } from "@/app/types";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const User = dynamic(() => import("@/app/containers/user/User"));

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const user = await getUser(slug);
  return {
    title: user && user.name,
    openGraph: {
      images: user && user.image,
      title: user && user.name,
      description: user && `Description for ${user.name}`,
    },
  };
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const user = await getUser(slug); // Await the promise here to get the resolved data
  if (!user) {
    return <h1>Not found</h1>; // Render the NotFound component if user is not found
  }
  return (
    <Suspense>
      <User data={user} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  const { users } = await getUsers({}); // Await the promise here to get the resolved data
  return users.map((user: IUser) => ({
    slug: user.id,
  }));
}
