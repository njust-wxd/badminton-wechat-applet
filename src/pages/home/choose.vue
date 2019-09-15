<template>
  <view class="view_base" >
    <view class="view_select">
      <text class="text_note">请选择您的比赛方式：</text>
      <view class="view_select_1row">
        <text class="btn_base" @click="onClick(4, '四人转')">四人转</text>
        <text class="btn_base btn_right" @click="onClick(5, '>五人转')">五人转</text>
      </view>
      <view class="view_select_2row">
        <text class="btn_base" @click="onClick(8, '八人转')">八人转</text>
        <text class="btn_base btn_right" @click="onClick(9,'九人转')">九人转</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    onClick(num, title) {
      uni.navigateTo({
        url: './player-input?num=' + num + '&title=' + title
      });
    },
  },
};
</script>

<style lang="less" scoped>
  .view_base {
    margin-left: 38upx;
    margin-right: 38upx;
    margin-top: 214upx;
    width: auto;
    height:738upx;
    display: flex;
    flex-direction: column;

    background:rgba(75,188,149,0.1);
  }

  .view_select {
    display: flex;
    flex-direction: column;
    margin-left: 98upx;
    margin-top: 80upx;
  }

  .text_note {
    font-size:34upx;
    font-family:PingFangSC;
    font-weight:600;
    color:rgba(51,51,51,1);
    line-height:48upx;
  }

  .view_select_1row {
    display: flex;
    flex-direction: row;
    margin-top: 40upx;
  }

  .view_select_2row {
    display: flex;
    flex-direction: row;
    margin-top: 10upx;
  }

  .btn_base {
    display: flex;
    align-items: center;
    justify-content: center;
    width:240upx;
    height:240upx;
    background:rgba(75,188,149,1);
    border-radius:8upx;
    font-size:36upx;
    font-family:PingFangSC;
    font-weight:600;
    color:rgba(255,255,255,1);
  }

  .btn_right {
    margin-left: 10upx;
  }
</style>
