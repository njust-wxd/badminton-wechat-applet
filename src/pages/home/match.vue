<template>
  <view class="match_base">
    <view class="view_tab">
      <view class="view_part_tab">
        <text class="text_focus_tab">待进行比赛</text>
        <view class="tab_seperator"></view>
      </view>
      <view class="view_part_tab">
        <text class="text_unfocus_tab">已完成比赛</text>
        <view class="tab_seperator"></view>
      </view>
    </view>
    <view class="view_games" v-for="(game, index) in games" :key="index">
      <view class="view_game_item">
        <text>{{game.index}}</text>
        <text>{{game.player_a1}}</text>
        <text>{{game.player_a2}}</text>
        <text> VS </text>
        <text>{{game.player_b1}}</text>
        <text>{{game.player_b2}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      games: []
    };
  },
  methods: {
    onLoad: function(option) {
      uni.setNavigationBarTitle({
        title: "比赛进行中"
      });
      this.games = JSON.parse(decodeURIComponent(option.games));
    }
  }
};
</script>

<style lang="less" scoped>
.match_base {
  display: flex;
  flex-direction: column;
  margin-left: 32upx;
  margin-right: 32upx;
  margin-top: 43upx;
}

.view_tab {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 62upx;
}

.view_part_tab {
  display: flex;
  flex-direction: column;
}

.text_focus_tab {
  height: 50upx;
  font-size: 36upx;
  font-family: PingFangSC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 50upx;
}

.text_unfocus_tab {
  height: 48upx;
  font-size: 34upx;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 48upx;
}

.tab_seperator {
  width: 67upx;
  height: 1upx;
  margin-top: 11upx;
  background: rgba(75, 188, 149, 1);
}

.view_games {
  display: flex;
  flex-direction: column;
  margin-top: 40upx;
}

.view_game_item {
  height: 280upx;
  background: rgba(75, 188, 149, 1);
  box-shadow: 0upx 2upx 12upx 0upx rgba(0, 0, 0, 0.2);
  border-radius: 10upx;
}
</style>
