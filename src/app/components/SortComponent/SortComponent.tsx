import React, { useState } from "react";
import SortIcon from "@/app/components/SortComponent/SortIcon";
import { setLoading } from "@/app/store/loadingSlice";
import { SortOrder } from "@/app/types";
import { useDispatch } from "react-redux";
import cn from "classnames";
import { useRouter, useSearchParams } from "next/navigation";

import styles from "./Sort.module.scss";
const OrderComponent = (sort: {
  sortName: string;
  defSort: string;
  defOrder: SortOrder;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { sortName, defOrder } = sort;
  const [order, setOrder] = useState<SortOrder>(defOrder || "default");
  const dispatch = useDispatch();
  const toggleOrder = () => {
    dispatch(setLoading(true));
    const params = new URLSearchParams(searchParams);
    params.delete("_page");
    params.delete("_limit");
    switch (order) {
      case "default":
        setOrder("asc");
        params.set("_order", "asc");
        params.set("_sort", sortName);
        break;
      case "asc":
        setOrder("desc");
        params.set("_order", "desc");
        params.set("_sort", sortName);
        break;
      case "desc":
        setOrder("default");
        params.delete("_order");
        params.delete("_sort");
        break;
      default:
        setOrder("default");
    }
    router.push(`/users?${params.toString()}`);
  };

  return (
    <div onClick={toggleOrder} className={cn(styles.wrapper)}>
      {order === "default" && <SortIcon order={"default"} />}
      {order === "asc" && <SortIcon order={"asc"} />}
      {order === "desc" && <SortIcon order={"desc"} />}
    </div>
  );
};

export default OrderComponent;
