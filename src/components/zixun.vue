<template>
  <div id="content">
    <div>
      <input type="checkbox"
             class="input-checkbox"
             :checked="fruits.length===fruitIds.length && fruitIds.length"
             @click="checkedAll" />
      <label>全选</label>
      <div v-for="fruite in fruits"
           :key="fruite.id"
           class="fruiteList">
        <input type="checkbox"
               :checked="fruitIds.indexOf(fruite.id)>=0"
               name="checkboxinput"
               class="input-checkbox"
               @click="checkedOne(fruite.id)">
        <label>{{fruite.value}}</label>
      </div>
      <button @click="deleteSome">Delete</button>
    </div>
    <img src="../../static/images/gif.gif" alt="" class="loading" v-show="show">

    <!--{{$store.state.count}}-->
    <!--<button @click="$store.commit('increment')">+</button>-->
    <!--<button @click="$store.commit('decrement')">-</button>-->
    <!--<button @click="add">+</button>-->
    <!--<button @click="min">-</button>-->
    <!--<img src="../../static/images/gif.gif" alt="" class="loading" v-show="show">-->
    <!--<yd-list theme="4">-->
    <!--<yd-list-item v-for="item, key in list" :key="key" @click.native="tagTo(item.news_id)" class="everyList">-->
    <!--<img slot="img" :src="item.news_conver" style="width: 2rem;height: 2rem;">-->
    <!--<span slot="title" class="title">{{item.news_title}}</span>-->
    <!--<yd-list-other slot="other" class="time">-->
    <!--<div>-->
    <!--<span class="demo-list-price">{{item.editor_create}}</span>-->
    <!--&lt;!&ndash;<span class="demo-list-del-price">¥{{item.news_provenance}}</span>&ndash;&gt;-->
    <!--</div>-->
    <!--<div>{{item.news_provenance}}</div>-->
    <!--</yd-list-other>-->
    <!--</yd-list-item>-->
    <!--</yd-list>-->
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">

      <yd-list theme="4" slot="list">
        <yd-list-item v-for="item, key in list" :key="key" @click.native="tagTo(item.news_id)" class="everyList">
          <img slot="img" :src="item.news_conver" style="width: 2rem;height: 2rem;">
          <span slot="title">{{item.news_title}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="list-price">{{item.editor_create}}</span>
              <span class="list-del-price">{{item.news_provenance}}</span>
            </div>
            <div>content</div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>

      <!-- 数据全部加载完毕显示 -->
      <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

      <!-- 加载中提示，不指定，将显示默认加载中图标 -->
      <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

    </yd-infinitescroll>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "zixun",
    data() {
      return {
        fruits: [{
          id: '1',
          value: '苹果'
        }, {
          id: '2',
          value: '荔枝'
        }, {
          id: '3',
          value: '香蕉'
        }, {
          id: '4',
          value: '火龙果'
        }],
        fruitIds: ['1', '3', '4'],
        // 初始化全选按钮, 默认不选
        isCheckedAll: false,
        list: [],
        show: true,
        page: 1,
        pageSize: 10,
        // list: [
        //   {
        //     img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
        //     title: "标题111标题标题标题标题",
        //     price: 156.23,
        //     w_price: 89.36
        //   },
        //   {
        //     img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
        //     title: "标题222标题标题标题标题",
        //     price: 256.23,
        //     w_price: 89.36
        //   },
        //   {
        //     img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
        //     title: "标题333标题标题标题标题",
        //     price: 356.23,
        //     w_price: 89.36
        //   },
        //   {
        //     img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
        //     title: "标题444标题标题标题标题",
        //     price: 456.23,
        //     w_price: 89.36
        //   },
        //   {
        //     img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
        //     title: "标题555标题标题标题标题",
        //     price: 556.23,
        //     w_price: 89.36
        //   },
        //   {
        //     img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
        //     title: "标题666标题标题标题标题",
        //     price: 656.23,
        //     w_price: 89.36
        //   }
        // ]
      }
    },
    computed: {
      //这里的三点叫做 : 扩展运算符
      ...mapState(["baseUrl"]),
      // ...mapState({
      //   baseUrl:state=>state.baseUrl
      // }),
    },
    created() {
      // console.log(localStorage.getItem('name'))
      localStorage.setItem('aa', '1323243')
      var that = this;
      // console.log(that.baseUrl)
      that.$axios.get(that.baseUrl + '/api/news/getNews', {
        params: {
          page: that.page,
          pagesize: that.pageSize
        }
      }).then(function (res) {
        if (res.data.status.code == 0) {
          that.show = false
          that.list = res.data.datalist.slice(0, 10)
        }
        // console.log(that.arrList)
      }).catch(function (res) {
        console.log(res);
      });
    },
    methods: {
      checkedOne (fruitId) {
        let idIndex = this.fruitIds.indexOf(fruitId)
        if (idIndex >= 0) {//如果已经包含就去除
          this.fruitIds.splice(idIndex, 1)
        } else {//如果没有包含就添加
          this.fruitIds.push(fruitId)
        }
      },
      checkedAll (e) {
        this.isCheckedAll = e.target.checked;
        if (this.isCheckedAll) {//全选时
          this.fruitIds = []
          this.fruits.forEach(item => {
            this.fruitIds.push(item.id)
          })
        } else {
          this.fruitIds = []
        }
      },
      deleteSome () {
        this.fruits = this.fruits.filter(item => this.fruitIds.indexOf(item.id) === -1)
        this.fruitIds = []
      },

      loadList() {
        console.log(this.page)
        var that = this;
        that.$axios.get(this.baseUrl + '/api/news/getNews', {
          params: {
            page: that.page,
            pagesize: that.pageSize
          }
        }).then(function (response) {
          console.log(response.data.page.hasmore)
          if (response.data.status.code == 0) {
            // this.show = false
            const _list = response.data.datalist.slice(10);
            console.log(_list.length)
            that.list = [...that.list, ..._list];

            if (_list.length < that.pageSize) {
              /* 所有数据加载完毕 */
              that.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
              return;
            }

            /* 单次请求数据完毕 */
            that.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');

            that.page++;
          }

        });
      },
      tagTo: function (id) {
        // console.log(id)
        this.$router.push({
          path: '/zxDetail',
          query: {
            id: id
          }
        })
      },
      add: function () {
        this.$store.commit('increment');
      },
      min: function () {
        this.$store.commit('decrement');
      },
    }
  }
</script>

<style scoped>
  #content {
    padding-bottom: 1.08rem;
  }

  #content .everyList {
    position: relative;
  }

  #content .time {
    /*position: absolute;*/
    /*bottom: 0rem;*/
  }

  .loading {
    position: absolute;
    top: 45%;
    z-index: 999;
  }
</style>
