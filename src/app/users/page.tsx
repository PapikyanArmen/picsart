import React from "react";
import { getUsers } from "@/api";
import Users from "@/app/containers/users/Users";
import { SearchParams } from "@/app/types";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "User List",
  description: "User List desc",
  openGraph: {
    title: "User List",
    description: "User List Desc",
  },
};
const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const page = searchParams._page ? parseInt(String(searchParams._page)) : 1;
  const limit = searchParams._limit
    ? parseInt(String(searchParams._limit))
    : 10;
  const sort = searchParams._sort ? searchParams._sort : "";
  const order = searchParams._order ? searchParams._order : "";
  const first_name_like = searchParams.first_name_like
    ? searchParams.first_name_like
    : "";
  const data = await getUsers({
    _page: page,
    _limit: limit,
    _order: order,
    _sort: sort,
    first_name_like: first_name_like,
  });
  return (
    <Users
      data={data}
      currentPage={page}
      limit={limit}
      sort={sort}
      order={order}
      first_name_like={first_name_like}
    />
  );
};

export default Page;
