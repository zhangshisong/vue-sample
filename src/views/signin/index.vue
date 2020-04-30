<template lang="pug">
  div(style="width: 250px;margin: 0 auto;")
    br
    el-form.demo-ruleForm(:model='ruleForm', :rules='rules', ref='ruleForm', v-if='!token')
      br
      el-form-item(prop='username')
        el-input(v-model='ruleForm.username', autocomplete='off', prefix-icon='el-icon-user')
      el-form-item(prop='password')
        el-input(type='password', v-model='ruleForm.password', autocomplete='off', prefix-icon='el-icon-lock')
      el-form-item
        el-button(type='primary', @click="submitForm('ruleForm')") 登录
    el-button(type='primary', @click="logout()", v-if='token')
      |退出登录
</template>
<script>
export default {
  name: 'Signin',
  data () {
    return {
      token: this.$store.state.token,
      ruleForm: {
        username: null,
        password: null
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    login () {
      const param = {
        password: this.ruleForm.password,
        username: this.ruleForm.username
      }
      this.$api.post('/api/login', param).then(res => {
        if (res.resp_code === 0) {
          const token = res.datas.businessKey

          // 登录成功提示
          this.$message.success('登录成功')

          // 存入缓存
          localStorage.setItem('token', token)
          this.$store.commit('token', token)
          // 跳转页面
          this.$router.push({
            name: 'Home'
          })
        } else {
          this.$message.error('用户名或密码错误！')
        }
        console.log(res)
      })
    },
    logout () {
      this.$store.commit('logout')
    }
  }
}
</script>
