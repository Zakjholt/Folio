const Koa = require("koa");
const koaBody = require("koa-body");
const router = require("koa-router")();
const logger = require("koa-logger");
const static = require("koa-static");
const { getClient } = require("./db/client");

getClient()
  .then(async client => {
    const app = new Koa();

    // Routes
    router.get("/questions", async ctx => {
      const questions = await ctx.db
        .collection("questions")
        .find({})
        .toArray();

      ctx.response.status = 200;
      ctx.response.body = { questions };
    });

    // Middlewares
    app.use(koaBody());
    app.use(router.routes());
    app.use(logger());
    app.use(static("public"));

    // Plop the db into koa context
    client = await getClient();
    const db = client.db("zakholt_portfolio");
    app.context.db = db;

    app.listen(process.env.PORT, () => {
      console.log("listening on port: ", process.env.PORT);
    });
  })
  .catch(err => {
    console.log(err.message);
    console.log("closing process");
    process.exit(1);
  });
