import React from "react";
import ReactPaginate from "react-paginate";
import cn from "classnames";

import styles from "./Pagination.module.scss";
const Pagination = (props: {
  className?: string;
  total: number;
  limit: number;
  initialPage: number;
  handlePageClick: (selectedItem: { selected: number }) => void;
}) => {
  const { className, total, limit, initialPage, handlePageClick } = props;
  const pageCount = Math.ceil(total / limit);
  return (
    <ReactPaginate
      activeClassName={styles.list_activePage}
      disabledClassName={styles.list_disabledPage}
      forcePage={initialPage - 1}
      className={cn(styles.list, className || className)}
      breakLabel="..."
      nextLabel="Next"
      onPageChange={(selectedItem) => handlePageClick(selectedItem)}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="Prev"
      renderOnZeroPageCount={null}
    />
  );
};
export default Pagination;
