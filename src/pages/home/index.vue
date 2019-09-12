<template>
  <view class="root" >
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
  .root {
    width: 100%;
    height: 100%;
    color: aqua;
    background-color: green;
  }

  .welcomePng {
    width:100%;
    height:1334upx;
  }
</style>
