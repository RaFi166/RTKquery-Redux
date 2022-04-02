import React from "react";
import { useGetPostApiQuery } from "./Redux/PostApi";

const App = () => {
  const postInfo = useGetPostApiQuery();
  const data = postInfo.data;
  return (
    <div>
      {data.map((data) => (
        <div>
          <h3>{data.id}</h3>
          <p>{data.title}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
