import { Article } from "containers/article";
import { Resources } from "containers/resources";
import { User } from "containers/user";
import { routers } from "./routers";

export const menu = [
  {
    title: "文章管理",
    component: Article,
    path: routers.ARTICLE,
  },
  {
    title: "用户管理",
    component: User,
    path: routers.USER,
  },
  {
    title: "资源管理",
    component: Resources,
    path: routers.RESOURCES,
  },
];
