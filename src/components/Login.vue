<template>
  <div>
      <LoginCom />
  </div>
</template>

<script>
import LoginCom from "@/components/coms/LoginCom"
import { Button, Select, Checkbox } from 'element-ui'
export default {
  name: '',
  components: {
      Button,
      Select,
      LoginCom
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
