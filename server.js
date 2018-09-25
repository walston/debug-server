const Koa = require('koa');
const app = new Koa();

const PORT = process.env.PORT || 9000;

app.use(ctx => {
  console.debug(ctx.request);
  ctx.response.body = 'Debug Server Response';
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
