<template>
  <div>
    <nav>
      <nuxt-link to="/">
        <Button type="primary">首页</Button>
      </nuxt-link>
      <nuxt-link to="/blog">
        <Button type="primary">Blog</Button>
      </nuxt-link>
      <nuxt-link to="/ideaLog">
        <Button type="primary">纸屑</Button>
      </nuxt-link>
      <nuxt-link to="/about">
        <Button type="primary">关于</Button>
      </nuxt-link>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
import { Button } from 'element-ui'

export default {
  components: {
    Button
  }
}
</script>
