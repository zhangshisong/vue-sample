<template lang="pug">
  div
    el-row
      img(v-for='(item, index) in imgs', :key='index', :src='item', width='64', height='64')
    input(ref='upimage', type='file', @change='upfile', accept='image/jpeg,image/gif,image/png')
</template>
<script>
export default {
  name: 'Upload',
  data () {
    return {
      msg: 'dddd',
      imgs: [],
      files: []
    }
  },
  methods: {
    upfile () {
      const _this = this
      const file = _this.$refs.upimage.files[0]
      _this.files.push(file)
      console.log(file, _this.files)
      // 上传图片预览
      // let imgUrl = ''
      // const reader = new FileReader()
      // reader.readAsDataURL(file)
      // reader.onloadend = function () {
      //   imgUrl = reader.result
      //   _this.imgs.push(imgUrl)
      // }
      // const formData = new window.FormData()
      // formData.append('file', file)
      // const config = {
      //   url: '/api/file/upload',
      //   data: formData,
      //   method: 'post',
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // }
      // _this.$api(config).then(res => {
      //   console.log('Res', res)
      // })
    }
  }
}
</script>
