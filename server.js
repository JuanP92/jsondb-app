import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

// router.render = (req, res) => {
//   console.log("render", res.locals);
//   res.jsonp({
//     success: true,
//     data: res.locals.data,
//   });
// };

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
// server.use((req, res, next) => {
//   console.log(req.body);
//   switch (req.body.tipo) {
//     case "obtener":
//       req.method = "GET";
//     case "crear":
//       req.method = "POST";
//       break;
//     case "actualizar":
//       req.method = "PUT";
//       break;
//     case "borrar":
//       req.method = "DELETE";
//       break;
//     default:
//       res.status(402);
//       break;
//   }
//   // Continue to JSON Server router
//   next();
// });

// Use default router
server.use(router);
server.listen(3030, () => {
  console.log("JSON Server is running");
});
