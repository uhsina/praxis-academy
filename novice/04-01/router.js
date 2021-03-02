import { Router } from "express";

const route = new Router();

route.get("/users", (req, res) => {
  const data = {
    title: "Halaman Users",
    artikel: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
       eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Dapibus ultrices in iaculis nunc sed augue lacus. Quam nulla 
       porttitor massa id neque aliquam. Ultrices mi tempus imperdiet  
       nulla malesuada. Eros in cursus turpis massa tincidunt dui ut 
       ornare lectus. Egestas sed sed risus pretium`,
  };

  return res.render("users", data);
});

route.post("/users", (req, res) => {
  return res.send("Halaman Post User");
});

route.put("/users/:id", (req, res) => {
  return res.send("halaman edit users");
});

route.delete("/users/:id", (req, res) => {
  return res.send("halaman hapus users");
});

export default route;