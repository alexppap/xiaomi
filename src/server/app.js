const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const render = require('koa-art-template')
const path = require('path')
const DB = require('./mongodb/db.js')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const app = new Koa()

// 配置 koa-art-template模板引擎
render(app, {
  root: path.join(__dirname, 'views'), // 视图的位置
  extname: '.html', // 后缀名
  debug: process.env.NODE_ENV !== 'production' // 是否开启调试模式

})

app.use(bodyParser())
app.use(cors())

router.get('/', async (ctx) => {
  const res = await DB.find('user', {})
  await ctx.render('index', {
    list: res
  })
})
router.post('/user', koaBody(), async (ctx) => {
  ctx.body = '123'
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)
