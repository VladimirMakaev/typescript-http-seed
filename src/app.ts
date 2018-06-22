import * as express from "express";

export function createApp() {
  return express()
        .get("/", (req, res) => res.send("Ok"));
}
