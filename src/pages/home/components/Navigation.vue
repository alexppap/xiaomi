<template>
  <div>
  <div class="container border-bottom">
    <div class="img-wrapper">
      <img src="./imgs/logo.png">
    </div>
    <div class="breadc">
      <ul>
        <li
          v-for="(item, index) of breadcList"
          :key="index"
        >
          <a href="#" @mouseover="handleTitleMouseOver(index)" @mouseout="handleTitleMouseOver(index)">{{item.desc}}</a>
        </li>
        <li><a href="#">服务器</a></li>
        <li><a href="#">社区</a></li>
      </ul>
    </div>
    <div class="search-input">
  <el-input placeholder="请输入内容">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
  </div>
  <div class="hide-area"
  v-show="showData"
  v-for="(page, index) of pages"
  :key="index"
  :ref="'area' + index"
  >
    <el-row :gutter="5">
      <el-col
        :span="4"
        class="border-right"
        v-for="item of page"
        :key="item.id"
      >
        <div class="phone-area">
          <img class="img" :src="item.imgUrl">
          <div class="product">{{item.title}}</div>
          <div class="price">{{item.price}}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeNavigation',
  data () {
    return {
      showData: false,
      'breadcList': [{
        'id': '0001',
        'desc': '小米手机'
      }, {
        'id': '0002',
        'desc': 'Redmi 红米'
      }, {
        'id': '0003',
        'desc': '电视'
      }, {
        'id': '0004',
        'desc': '笔记本'
      }, {
        'id': '0005',
        'desc': '家电'
      }, {
        'id': '0006',
        'desc': '路由器'
      }, {
        'id': '0007',
        'desc': '智能硬件'
      }],
      'recommendList': [{
        'id': '0001',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10 Pro',
        'price': '4999元起'
      },
      {'id': '0002',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0003',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/be92bc4baa572bf467fc9e881fd4be2a.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米CC9 Pro',
        'price': '2599元起'
      },
      {'id': '0004',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41c566d825a3ae3b5751a78d4c7cffdb.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米9 Pro 5G',
        'price': '3599元起'
      },
      {'id': '0005',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=200&h=138',
        'title': '小米CC9',
        'price': '1499元起'
      },
      {'id': '0006',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=200&h=138',
        'title': '小米CC9e',
        'price': '1099元起'
      },
      {'id': '0007',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': 'Redmi K30',
        'price': '1599元起'
      },
      {'id': '0008',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': 'Redmi K30 5G',
        'price': '1999元起'
      },
      {'id': '0009',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/398311b2e6f47ac324ba0421a0ac1b80.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': 'Redmi 8A',
        'price': '599元起'
      },
      {'id': '0010',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacd6a3d8440b7a038e9778702bd6db6.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': 'Redmi Note 8',
        'price': '899元起'
      },
      {'id': '0011',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ee0af37bbd2f5a83c799e87dd791037.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': 'Redmi Note 8 Pro',
        'price': '1199元起'
      },
      {'id': '0012',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a9734e0314fec470ff6912a8a92da5e6.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': 'Redmi 8',
        'price': '699元起'
      },
      {'id': '0013',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': 'Redmi 红米电视 70英寸 R70A',
        'price': '3299元'
      },
      {'id': '0014',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg?thumb=1&w=200&h=138',
        'title': '小米壁画电视 65英寸',
        'price': '6999元'
      },
      {'id': '0015',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a40904b6a053b73b631a152334388d0e.jpg?thumb=1&w=200&h=138',
        'title': '小米全面屏电视E55A',
        'price': '1749元'
      },
      {'id': '0016',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png?thumb=1&w=200&h=138',
        'title': '小米电视4A 32英寸',
        'price': '749元'
      },
      {'id': '0017',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bf72a3e9a6e799cb71ecfa7d80465351.jpg?thumb=1&w=200&h=138',
        'title': '小米电视4A 55英寸',
        'price': '1699元'
      },
      {'id': '0018',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bd922870295a97a0972eaba5af92129e.jpg?thumb=1&w=200&h=138',
        'title': '小米电视4A 65英寸',
        'price': '2699元'
      },
      {'id': '0019',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d712f71b3c4a3b562601c2b956a660ad.png?thumb=1&w=200&h=138',
        'title': '小米笔记本Pro 15',
        'price': '5499元起'
      },
      {'id': '0020',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a25f895ad6019c3fae32fd1f48a2c7c.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': 'RedmiBook 14',
        'price': '3999元起'
      },
      {'id': '0021',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33c6a31aaee90164ce963801bec48e64.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '游戏本2019款',
        'price': '6999元起'
      },
      {'id': '0022',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bb159dbe860ee434b52d8eed9e9fd424.png?thumb=1&w=200&h=138',
        'title': '小米笔记本 15.6"',
        'price': '3799元起'
      },
      {'id': '0023',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/95c4329ce2c454e2a5fa1e0931528a46.png?thumb=1&w=200&h=138',
        'title': '小米笔记本Air 12.5"',
        'price': '3299元起'
      },
      {'id': '0024',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6abc701fb3cf48f2c7a3fd5ef053529a.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': 'RedmiBook 13',
        'price': '4199元起'
      },
      {'id': '0025',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03dc85cd792904ddc8027b2d781beed8.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '米家互联网空调C1（一级能效）',
        'price': '2399元'
      },
      {'id': '0026',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c5d772b7c2a159c3ed7d4e31bd293f18.jpg?thumb=1&w=200&h=138',
        'title': 'Redmi全自动波轮洗衣机1A',
        'price': '799元'
      },
      {'id': '0027',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png?thumb=1&w=200&h=138',
        'title': '米家互联网洗烘一体机10kg',
        'price': '1999元'
      },
      {'id': '0028',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/486a2a7359b6bda95b3dbd4e45b9c50a.jpg?thumb=1&w=200&h=138',
        'title': '小米净水器',
        'price': '1299元'
      },
      {'id': '0029',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4ae019eebf10a55f8df2fee8d19b4e1f.jpg?thumb=1&w=200&h=138',
        'title': '米家扫地机器人',
        'price': '1399元'
      },
      {'id': '0030',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e06b219c5bced9256467b17738a943c6.png?thumb=1&w=200&h=138',
        'title': '米家互联网空调（一级能效）',
        'price': '1999元'
      },
      {'id': '0031',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/359d3c63cc159949d8fe147a11b4bc40.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米AIoT路由器AX3600',
        'price': '599元'
      },
      {'id': '0032',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa1e0a4860cf40d34e1192d86691c82c.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': 'Redmi路由器AC2100',
        'price': '169元'
      },
      {'id': '0033',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dd23c09b7eb6471968537fdce629194.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米路由器AC2100',
        'price': '229元'
      },
      {'id': '0034',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ec5be5f93ac0118aeec27b8df4337fc9.jpg?thumb=1&w=200&h=138',
        'title': '小米路由器 Mesh',
        'price': '999元'
      },
      {'id': '0035',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg?thumb=1&w=200&h=138',
        'title': '小米路由器4A 千兆版',
        'price': '129元'
      },
      {'id': '0036',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28efac56ef4c4942077dac7e30e8c624.jpg?thumb=1&w=200&h=138',
        'title': '小米路由器 4C',
        'price': '59元'
      },
      {'id': '0037',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2a500be4264c692899b25d86c16403f7.jpg?thumb=1&w=200&h=138',
        'title': '小米米家智能摄像机云台版',
        'price': '179元'
      },
      {'id': '0038',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e3fb0886fdb13e5ae784b9713b9a0038.jpg?thumb=1&w=200&h=138',
        'title': '小米小爱老师',
        'price': '449元起'
      },
      {'id': '0039',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5630aa997c82409ee33b2814c7eb2244.jpg?thumb=1&w=200&h=138',
        'title': '小米米家智能门锁',
        'price': '1299元起'
      },
      {'id': '0040',
        'imgUrl': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6e585a4bf5c0f744ca60f19ecd6fadf.jpg?thumb=1&w=200&h=138',
        'title': '小米小爱触屏音箱',
        'price': '199元'
      },
      {'id': '0041',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17c0c91317ec0def3ecc072fa9480192.png?thumb=1&w=200&h=138&f=webp&q=90',
        'title': 'Redmi小爱音箱 Play',
        'price': '79元'
      },
      {'id': '0042',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff1254137246a22ad9eba80bd1c454c5.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米watch',
        'price': '999元起'
      }]
    }
  },
  methods: {
    handleTitleMouseOver (index) {
      let area = this.$refs['area' + index][0]
      if (area.style.display === 'none') {
        area.style.display = 'block'
      } else {
        area.style.display = 'none'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.recommendList.forEach((item, index) => {
        const page = Math.floor(index / 6)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    border-color: #ccc
.container
  display: flex
  height: 1.25rem
  line-height: 1.25rem
  text-align: center
  padding: 0 3.25rem 0 1.8rem
  .img-wrapper
    float: left
    padding-right: 1.2rem
  .breadc
    flex: 1
  .search-input
    float: right
li
  display: inline
  font-size: 18px
  padding-right: 20px
  float: left
.hide-area
  padding: 0 1.25rem 0 1.25rem
  height: 3rem
.phone-area
  padding-top: .6rem
  height: 3rem
  text-align: center
.img
  margin-bottom: .3rem
.product
  height: .2rem
  line-height: .2rem
  font-size: .16rem
.price
  margin-top: .2rem
  height: .2rem
  line-height: .2rem
  font-size: .16rem
  color: #ff6700
a:link
  color: #000
a:visited
  color: #000
a:hover
  color: #ff6700
</style>
