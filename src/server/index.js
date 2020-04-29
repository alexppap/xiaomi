const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

app.use(async (ctx) => {
  ctx.body = '你好 koa'
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)
