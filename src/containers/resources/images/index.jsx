import React from "react";
import Upload from "rc-upload";
import { Button } from "@material-ui/core";
import { upload } from "utils/xFetch";
import MyTable from "components/Table";

export const Images = () => {
  const columns = [
    {
      dataIndex: "imageName",
      title: "Name",
      render: (n) => n || "xxx",
    },
    {
      dataIndex: "url",
      title: "url",
    },
    {
      dataIndex: "hash",
      title: "hash",
    },
    {
      dataIndex: "source",
      title: "source",
    },
  ];
  return (
    <div>
      <Upload
        customRequest={async ({file}) => {
          // console.log(file);
          const result = await upload(file);
          console.log(result);
        }}
      >
        <Button>Upload</Button>
      </Upload>
      {/* <MyTable></MyTable> */}
    </div>
  );
};
