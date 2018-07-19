<template>
    <div class="manage tc">
        <button v-on:click="add">新增</button>
        <div class="input-area" v-show="showAdd">
          <input type="text" placeholder="请输入人员姓名" v-model="nameValue">
          <button v-on:click="addName">确定</button>
        </div>
        <table>
            <tr>
              <th>姓名</th>
              <th>操作</th>
            </tr>
             <tr v-for="(item,index) in peoples">
              <td width='50%'>{{item.name}}</td>
              <td v-bind:id="index"><span v-on:click="edit">编辑</span><span v-on:click="del">删除</span></td>
            </tr>
        </table>
         <div class="wrap" v-show="showEdit">
              <div class="content">
                 <input type="text" placeholder="请输入新姓名" v-model="newName">
                 <button v-on:click="cancel">取消</button>
                 <button v-on:click="editName">确定</button>
              </div>
        </div>
        <footer-nav v-bind:class="{'ismanage':isNowPage}"></footer-nav>
    </div>

</template>
<style>
.manage table{width:100%;margin-top:10px;border:1px solid #Ccc;border-collapse: collapse;}
.manage table tr td,.manage table tr th{border:1px solid #ccc;}
.manage table span{font-size:14px;padding:5px;}
.manage button{ background-color: #1AAD19; color:white; width:40px;height:30px;margin-bottom:10px;}
.manage button:first-child{width:200px;height:30px;display:inline-block;}
.manage input{height:30px;}

.ismanage ul li:nth-child(2) a{
   color:#1AAD19;
}
.ismanage ul li:nth-child(2){
 border:1px solid #ccc;
}
</style>
<script>

 import FooterNav from '../../components/footer.vue'
  export default{
    components: {
       FooterNav
    },
    data(){
      return {
        isNowPage:true,
        showAdd:false,
        showEdit:false,
        peoples:[{'name':'Jack'},{'name':'Joe'}],
        nameValue:'',
        newName:'',
        editid:0,
      }
    },
    methods:{
        add(){
           this.showAdd = true
        },
        addName(){
          var v=this.nameValue;
          if(v.trim()=="")
          {
            alert("请输入新增人员的姓名")
          }
          else
          {
              var data = {};
              data.name = v;
              this.peoples.push(data);
              this.showAdd = false;
              this.nameValue='';
          }

        },
        del(e){
              var id = e.target.offsetParent.id;
              this.peoples.splice(id,1);
        },
        edit(e){
              var id = e.target.offsetParent.id;
              this.showEdit = true;
              this.editid = id;
              this.newName = this.peoples[id].name;
        },
        cancel(){
          this.showEdit = true;
        },
        editName(){
           var v = this.newName;
          if(v.trim()=="")
          {
            alert("请输入新增人员的姓名")
          }
          else
          {
              var data = {};
              data.name = v;
              this.peoples[this.editid].name = this.newName;
              this.showEdit = false;
          }
        }
    }
  }
</script>
