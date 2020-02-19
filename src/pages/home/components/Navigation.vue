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
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0002',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0003',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0004',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0005',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0006',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0007',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0008',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0009',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0010',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0011',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0012',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0013',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0014',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0015',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0016',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0017',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0018',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0019',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0020',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0021',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0022',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0023',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0024',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0025',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0026',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0027',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0028',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0029',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0030',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0031',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0032',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0033',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0034',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0035',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0036',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0037',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0038',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0039',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0040',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0041',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
      },
      {'id': '0042',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90',
        'title': '小米10',
        'price': '3999元起'
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
  font-size: .2rem
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
