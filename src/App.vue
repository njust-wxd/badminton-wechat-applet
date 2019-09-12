<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  mpType: 'app',
  onLaunch() {
    console.log('小程序启动');
  },
  onShow() {
    console.log('onShow');
  },
  onHide() {
    console.log('onHide');
  },
});
</script>

<style lang="less">
    /*每个页面公共css */


</style>
