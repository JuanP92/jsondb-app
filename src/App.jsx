import React from "react";
import { Table } from "antd";
import "./App.css";
import { useQuery } from "react-query";
import { ApiGet, ApiPost } from "./api/backendApi";

function App() {
  const [page, setPage] = React.useState(1);

  const query = useQuery({
    queryKey: ["posts", page],
    queryFn: () =>
      ApiGet("posts", {
        // _page: page,
      }),
    refetchOnWindowFocus: false,
    retry: 0,
  });

  console.log("query", query.data);

  return (
    <div>
      <h1>JSON db server</h1>
      <Table
        columns={[
          {
            title: "Título",
            dataIndex: "title",
            key: "title",
          },
          {
            title: "Descripción",
            dataIndex: "body",
            key: "body",
          },
        ]}
        dataSource={query.data || []}
        // dataSource={[]}
        rowKey={"id"}
      />
    </div>
  );
}

export default App;
