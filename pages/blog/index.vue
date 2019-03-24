<template >
  <div>
    <h1>
      {{mes}}
    </h1>
    <nuxt-link to="/blog/blog01">
      <Button type="primary">第一条博客</Button>
    </nuxt-link>
    
  </div>
</template>

<script>

import { Button } from 'element-ui'

export default {
  layout: 'blog',
  components:{
    Button
  },
  data: () => ({
    mes: '技术的小作坊'
  }),
  render:(h) => {
    console.log(1)
    return h('div', 'my prporse')
  },
}
</script>

