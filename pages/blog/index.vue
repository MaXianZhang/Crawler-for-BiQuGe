<template >
  <div>
    <Nav></Nav>
    <h1>
      {{mes}}
    </h1>
  </div>
</template>

<script>

import Nav from '~/templates/nav'

export default {
  components:{
    Nav,
  },
  data: () => ({
    mes: 'blog'
  }),
  render:(h) => {
    console.log(1)
    return h('div', 'my prporse')
  },
}
</script>

