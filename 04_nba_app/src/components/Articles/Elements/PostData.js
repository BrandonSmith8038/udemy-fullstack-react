import React from "react";
import Styles from "../articles.css";

const PostData = props => {
  console.log("PostData");
  return (
    <div className={Styles.articlePostData}>
      <div>
        Date:
        <span>{props.data.date}</span>
      </div>
      <div>
        Author:
        <span>{props.data.author}</span>
      </div>
    </div>
  );
};

export default PostData;
