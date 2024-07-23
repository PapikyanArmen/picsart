"use client";
import React, { useEffect } from "react";
import TextInput from "@/app/components/Input/TextInput";
import Pagination from "@/app/components/Pagination/Pagination";
import UserList from "@/app/components/UserList/UserList";
import useUserFilter from "@/app/hooks/useUserFilter";
import { setLoading } from "@/app/store/loadingSlice";
import { ITextInput, IUser, SortOrder } from "@/app/types";
import { useDispatch } from "react-redux";
import cn from "classnames";
import { useRouter, useSearchParams } from "next/navigation";

import styles from "./Users.module.scss";

interface IUsersList {
  data: {
    users: IUser[];
    total: number;
  };
}

export interface Props extends IUsersList {
  currentPage?: number;
  limit?: number;
  sort?: string;
  order?: string;
  first_name_like?: string;
}

const Users = ({
  data,
  currentPage,
  limit,
  sort,
  order,
  first_name_like,
}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { filter, setFilter, isFirstRender } = useUserFilter(first_name_like);
  const dispatch = useDispatch();

  useEffect(() => {
    //for better loading view
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  }, [data, dispatch]);

  const handlePageChange = (selectedItem: { selected: number }) => {
    const params = new URLSearchParams(searchParams);
    const { selected } = selectedItem;
    params.set("_page", `${selected + 1}`);
    params.set("_limit", `${limit}`);
    dispatch(setLoading(true)); // Set loading to true when query changes
    router.push(`/users?${params.toString()}`);
  };

  const handleInputChange: ITextInput["onChange"] = (event) => {
    const inputValue: string = event.target.value;
    isFirstRender.current = true;
    setFilter(inputValue);
  };
  return (
    <main className={cn("container")}>
      <TextInput value={filter} onChange={handleInputChange} />
      <UserList
        data={data.users}
        order={(order as SortOrder) || "default"}
        sort={sort || ""}
      />
      <Pagination
        className={cn(styles.pagination)}
        initialPage={currentPage || 1}
        total={data.total}
        limit={limit || 10}
        handlePageClick={(selectedItem: { selected: number }) =>
          handlePageChange(selectedItem)
        }
      />
    </main>
  );
};

export default Users;
