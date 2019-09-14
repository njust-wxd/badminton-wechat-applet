<template>
  <view>
    <view class="view_players">
      <text>请输入参赛人员姓名</text>
    </view>
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
  .view_players {
		display: flex;
		flex-direction: column;
		margin-left: 40upx;
		margin-right: 40upx;
		margin-top: 60upx;
	}

  .text_note {
    width:100%;
    height:100vh;
    
  }
</style>
