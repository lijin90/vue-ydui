<template>
  <div id="checkbox">
    <table>
      <thead>
      <tr>
        <th><input type="checkbox" id="quan" @click="checkAll($event)"></th>
        <th>商品名字</th>
        <th>数量</th>
        <th>单价</th>
        <th>小计</th>
        <th>
          <button class="remove" @click="quanAdd">增加</button>
        </th>
      </tr>
      </thead>
      <tbody>
      <template v-for="(item,index) in allList">
        <tr>
          <td><input type="checkbox" class="checkItem" v-model="checkData" :value="item.id"></td>
          <td>{{item.name}}</td>
          <td>
            <button @click="reduce(index)">-</button>
            {{item.num}}
            <button @click="add(index)">+</button>
          </td>
          <td>{{item.price}}</td>
          <td>{{item.price*item.num}}</td>
          <td>
            <button class="remove" @click="remove(index)">删除</button>
          </td>
        </tr>
      </template>
      </tbody>
    </table>
    <div style="text-align: right">
      <span>共计{{total}}元</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "checkbox",
    data() {
      return {
        checked: false,
        // total:100,
        allList: [
          {id: 0, name: '华硕', num: 1, price: 555,checked:false},
          {id: 1, name: '小米', num: 1, price: 999,checked:false},
          {id: 2, name: '华为', num: 1, price: 655,checked:false},
          {id: 3, name: '三星', num: 3, price: 6,checked:false},
          {id: 4, name: 'TCL', num: 1, price: 54,checked:false},
          {id: 5, name: '京东', num: 1, price: 66,checked:false},
          {id: 6, name: 'OPPO', num: 1, price: 555,checked:false},

        ],
        checkData:[],
      }
    },
    computed: {
      total: function () {
        let totalprice = 0;
        this.allList.forEach(a => {
          totalprice += a.num * a.price;
        })
        return totalprice;
      }
    },

    methods: {
      quanAdd:function(){
        this.allList.push( {id:7, name: 'jinli', num: 1, price: 333})
      },
      // 点击增加
      add: function (index) {
        console.log(index)
        this.allList[index].num++
      },
      // 点击--
      reduce: function (index) {
        console.log(index)
        this.allList[index].num--;
        if (this.allList[index].num == 0) {
          this.allList.splice(index, 1)
        }
      },
      remove: function (index) {
        var that=this;
        console.log(index)
        console.log(that.checkData)
        console.log(that.checkData.indexOf(index))
        if (that.checkData.indexOf(index)!=-1) {
          that.allList.splice(index,1);
          // console.log(index);
        }else{
          alert('请选中其中一项！')
        }
      },
      checkAll: function (e) {
        // console.log(event.currentTarget.checked)
        var checkObj = document.querySelectorAll('.checkItem'); // 获取所有checkbox项
        console.log(checkObj.length)
        if (e.target.checked) { // 判定全选checkbox的勾选状态
          for (var i = 0; i < checkObj.length; i++) {
            if (!checkObj[i].checked) { // 将未勾选的checkbox选项push到绑定数组中
              this.checkData.push(checkObj[i].value);
            }
          }
        } else { // 如果是去掉全选则清空checkbox选项绑定数组
          this.checkData = [];
        }
        console.log(this.checkData)
      }
    },
    watch: { // 监视双向绑定的数据数组
      checkData: {
        handler(){ // 数据数组有变化将触发此函数
          // console.log(this.allList.length);
          if(this.checkData.length == this.allList.length){
            document.querySelector('#quan').checked = true;
          }else {
            document.querySelector('#quan').checked = false;
          }
        },
        deep: true // 深度监视
      }
    },
  }
</script>

<style scoped>
  #checkbox table {
    width: 100%;
  }

  #checkbox thead tr {
    border-bottom: 1px solid #666;
  }

  #checkbox tr th {
    padding: 5px 0px;
  }

  .remove {
    padding: 5px 5px;
  }
</style>
