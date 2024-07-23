import { useCallback, useEffect, useRef, useState } from "react";
import useDebounce from "@/app/hooks/useDebounce";
import { setLoading } from "@/app/store/loadingSlice";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";

const useUserFilter = (initialFilter = "") => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(initialFilter);
  const debounceValue = useDebounce(filter, 300);
  const isFirstRender = useRef(true);

  const getFilter = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (isFirstRender.current) {
      debounceValue
        ? params.set("first_name_like", `${debounceValue}`)
        : params.delete("first_name_like");
      params.delete("_page");
      params.delete("_limit");
      dispatch(setLoading(true));
      router.push(`/users?${params.toString()}`);
    }
  }, [debounceValue, dispatch]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  useEffect(() => {
    getFilter();
  }, [getFilter]);

  return {
    filter,
    setFilter,
    isFirstRender,
  };
};

export default useUserFilter;
