<template>
  <div>
        <p>欢迎来到人员管理系统</p>
        <footer-nav v-bind:class="{'isIndex':isNowPage}"></footer-nav>
  </div>

</template>
<style>
.isIndex ul li:nth-child(1) a{
   color:#1AAD19;

}
.isIndex ul li:nth-child(1){
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
        isNowPage:true
      }
    }
  }
</script>