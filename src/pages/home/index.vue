<template>
  <view>
    <image  class="welcomePng" src="../../static/welcome.png" @click="onClick"></image>
  </view>
</template>

<script>
export default {
  methods: {
    onClick() {
      uni.navigateTo({
        url: './choose',
      });
    },
  },
};
</script>

<style lang="less" scoped>

  .welcomePng {
    width:100%;
    height:100vh;
  }
</style>
