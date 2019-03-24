<template >
  <div>
    <h1>
      {{mes}}
    </h1>
  </div>
  
</template>

<script>

export default {
  layout: 'blog',
  components:{

  },
  data: () => ({
    mes: '风居住的地方，总有易逝的纸屑'
  }),
  render:(h) => {
    console.log(1)
    return h('div', 'my prporse')
  },
}
</script>

