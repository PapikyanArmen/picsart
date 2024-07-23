import React from "react";
import Comments from "@/app/components/Comments/Comments";
import Notes from "@/app/components/Notes/Notes";
import cn from "classnames";

import styles from "./Home.module.scss";
const Home = () => {
  return (
    <main className={cn("container")}>
      <div className={cn(styles.wrapper)}>
        <div className={cn(styles.comments)}>
          <Comments />
        </div>
        <div className={cn(styles.notes)}>
          <Notes />
        </div>
      </div>
    </main>
  );
};
export default Home;
