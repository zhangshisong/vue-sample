<template lang="pug">
  div
    br
    el-row
      |{{ msg }}
    br
    el-row
      el-button(type='warning', size='small', @click='back("Home")')
        |返回首页
      el-button(type='primary', size='small', @click='back(redirect)')
        |返回上一页

</template>
<script>
export default {
  name: 'NotFound',
  data () {
    return {
      msg: '页面不存在！',
      redirect: this.$route.query.redirect
    }
  }
}
</script>
