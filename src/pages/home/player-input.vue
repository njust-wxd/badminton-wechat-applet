<template>
  <view>
    <view class="view_players">
      <text class="text_note">请输入参赛人员姓名</text>
      <view class="player_item" v-for="player in  playersNum" :key="player">
        <view class="player_info">
          <text class="player_label">选手{{player}}：</text>
          <input class="player_name" placeholder="请输入选手姓名" placeholder-class="placehold_note"/>
        </view>
        <view class="separate_label"></view>
      </view>
      <text class="player_submit">确定</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      playersNum: []
    };
  },
  onLoad: function(option) {
    for (var i = 1; i <= option.num; i++) {
      this.playersNum.push(i);
    }

    uni.setNavigationBarTitle({
      title: option.title
    });
  },
  methods: {
    onClick() {
      // uni.navigateTo({
      //   url: './choose',
      // });
    }
  }
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
  height: 61upx;
  font-size: 36upx;
  font-family: PingFangSC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 50upx;
}

.player_item {
  display: flex;
  flex-direction: column;
  margin-top: 33upx;
}

.player_info {
  width: 100%;
  height: 40upx;
  display: flex;
  flex-direction: row;
}

.player_label {
  width: auto;
  height: 48upx;
  font-size: 34upx;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 48upx;
}

.player_name {
  height: 48upx;
  font-size: 34upx;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 48upx;
  margin-left: 20upx;
}

.placehold_note {
  width: 237upx;
  height: 48upx;
  font-size: 34upx;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
  line-height: 48upx;
  margin-left: 20upx;
}

.separate_label {
  width: 670upx;
  height: 1upx;
  margin-top: 15upx;
  background: #e7e7e7;
}

.player_submit {
  margin-top: 76upx;
  width: 670upx;
  height: 96upx;
  font-size: 36upx;
  font-family: PingFangSC;
  font-weight: 400;
  text-align: center;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  line-height: 96upx;
  background: rgba(75, 188, 149, 1);
  border-radius: 43upx;
}
</style>
