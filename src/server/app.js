const Koa = require('koa')
const router = require('koa-router')()
// const bodyParser = require('koa-bodyparser')
const render = require('koa-art-template')
const path = require('path')
const DB = require('./mongodb/db.js')
const cors = require('koa2-cors')
const koaBody = require('koa-body')
const app = new Koa()

// app.use(bodyParser())

// 配置 koa-art-template模板引擎
render(app, {
  root: path.join(__dirname, 'views'), // 视图的位置
  extname: '.html', // 后缀名
  debug: process.env.NODE_ENV !== 'production' // 是否开启调试模式

})

router.get('/', async (ctx) => {
  const res = await DB.find('user', {})
  await ctx.render('index', {
    list: res
  })
})

router.post('/login', koaBody(), async (ctx) => {
  ctx.body = '注册成功' // 防止返回404
  // console.log(ctx.request.body)
  let userstatus = JSON.stringify(ctx.request.body)
  let user = JSON.parse(userstatus)
  let res = await DB.find('user', {'name': user.name})
  if (res.length === 0) {
    DB.insert('user', user)
  }
  // console.log(user)
  // console.log(userstatus)
})

router.post('/login2', koaBody(), async (ctx) => {
  const userInfo = ctx.request.body
  let res = await DB.find('user', userInfo)
  // console.log(res)
  ctx.body = res
})

app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/test') {
      return '*' // 允许来自所有域名请求
    }
    return 'http://localhost:8080'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)
