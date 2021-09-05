import { Container, Tab, Tabs } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useTitle } from "react-use";
import { Images } from "./images";

export const MountOnce = ({ visible, children, ...props }) => {
  const [shouldMountChildren, setMount] = useState(visible);
  useEffect(() => {
    if (visible) {
      setMount(visible);
    }
  }, [visible]);
  return shouldMountChildren ? (
    <div hidden={!visible} {...props}>
      {children}
    </div>
  ) : null;
};

export const Resources = () => {
  useTitle("资源管理");
  const [value, onChange] = useState(0);
  console.log(value);
  return (
    <Container>
      <Tabs value={value} onChange={(ev, v) => onChange(v)}>
        <Tab label="图片" id="images" />
        <Tab label="声音" id="sounds" />
      </Tabs>
      <MountOnce visible={value === 0}>
        <Images />
      </MountOnce>
      <MountOnce visible={value === 1}>sounds</MountOnce>
    </Container>
  );
};
