<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.$api.get('/example/schedule', {
      params: {
        id: 1,
        name: 'jeckson'
      }
    }).then(res => {
      console.log('xxx', res)
    })
  }
}
</script>
