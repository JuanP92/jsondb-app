import { Table } from "antd";
import "./App.css";
import { useQuery } from "react-query";
import { ApiGet } from "./api/backendApi";

function App() {
  const query = useQuery({
    queryKey: ["post"],
    queryFn: () => ApiGet("echo", {}),
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
        dataSource={[]}
        rowKey={"id"}
      />
    </div>
  );
}

export default App;
