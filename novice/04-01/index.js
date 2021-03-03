import express from "express";
import router from "./router";
import handlebars from "handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import hbs from "express-handlebars";

const app = express();
app.use(router);


app.engine(
  "hbs",
  hbs({
    defaultLayout: "main",
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);

app.set("view engine", "hbs");

app.listen(process.env.POST || 5000, () => {
  console.log("running on port 5000");
});

export default app;