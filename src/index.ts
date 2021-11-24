import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import express from "express";
import { UserController } from "./interface/user";

const app = express();
useExpressServer(app, {
  routePrefix: "/api",
  controllers: [UserController],
});
app.listen(3000); // run your express server
