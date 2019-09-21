<template>
  <view class="match_base">
    <view class="view_tab">
      <view class="view_tab_matching">
        <text
          class="text_tab_focus"
          @click="display_matching"
          :class="[isActive ? 'text_tab_focus' : 'text_tab_unfocus']"
        >待进行比赛</text>
        <view class="tab_sep_focus" :class="[isActive ? 'tab_sep_focus' : 'tab_sep_unfocus']"></view>
      </view>
      <view class="view_tab_matched">
        <text
          class="text_tab_focus"
          @click="display_matched"
          :class="[isActive ? 'text_tab_unfocus' : 'text_tab_focus']"
        >已完成比赛</text>
        <view class="tab_sep_focus" :class="[isActive ? 'tab_sep_unfocus' : 'tab_sep_focus']"></view>
      </view>
    </view>
    <view class="view_game_item" v-for="(game, index) in games" :key="index">
      <!-- <text>第{{game.index}}场</text> -->
      <view class="players_container">
        <text class="text_player player_a">{{game.player_a1}}、{{game.player_a2}}</text>
        <text class="vs">VS</text>
        <text class="text_player player_b">{{game.player_b1}}、{{game.player_b2}}</text>
      </view>
      <view class="record_score">
        <text>记录比分</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      games: []
    };
  },
  methods: {
    onLoad: function(option) {
      uni.setNavigationBarTitle({
        title: "比赛进行中"
      });
      this.games = JSON.parse(decodeURIComponent(option.games));
    },
    display_matching: function() {
      this.isActive = !this.isActive;
    },
    display_matched: function() {
      this.isActive = !this.isActive;
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

.view_tab_matching {
  display: flex;
  flex-direction: column;
}

.view_tab_matched {
  display: flex;
  flex-direction: column;
  margin-left: 91upx;
}

.text_tab_focus {
  height: 50upx;
  font-size: 36upx;
  font-family: PingFangSC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 50upx;
}

.text_tab_unfocus {
  height: 48upx;
  font-size: 34upx;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 48upx;
}

.tab_sep_focus {
  width: 67upx;
  height: 1upx;
  margin-top: 11upx;
  margin: 0 auto;
  background: rgba(75, 188, 149, 1);
  display: block;
}

.tab_sep_unfocus {
  width: 67upx;
  height: 1upx;
  margin-top: 11upx;
  margin: 0 auto;
  background: rgba(75, 188, 149, 1);
  display: none;
}

.view_game_item {
  display: flex;
  flex-direction: column;
  margin-top: 40upx;
  height: 280upx;
  background: rgba(75, 188, 149, 1);
  box-shadow: 0upx 2upx 12upx 0upx rgba(0, 0, 0, 0.2);
  border-radius: 10upx;
}

.players_container {
  display: flex;
  flex-direction: row;
  height: 220upx;
  margin-top: 40upx;
  margin-bottom: 20upx;
  margin-left: 20upx;
  margin-right: 20upx;
  justify-content: center;
  background: white;
  box-shadow: 0upx 0upx 3upx 0upx rgba(255, 255, 255, 0.5);
  border: 2upx solid rgba(255, 255, 255, 0.1);
  border-radius: 10upx;
}

.text_player {
  height: 48upx;
  margin-top: 80upx;
  margin-bottom: 92upx;
  font-size: 34upx;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 48upx;
}

.player_a {
  margin-right: 32upx;
}

.player_b {
  margin-left: 32upx;
}

.vs {
  height: 48upx;
  margin-top: 80upx;
  margin-bottom: 92upx;
  font-size: 34upx;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(75, 188, 149, 1);
  line-height: 48upx;
}

.record_score {
  height: 101upx;
  background: linear-gradient(
    180deg,
    rgba(245, 245, 245, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  justify-content: center;
}

.text_recode_score {
  height: 45upx;
  margin-top: 150upx;
  font-size: 32upx;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(56, 152, 119, 1);
  line-height: 45upx;
}
</style>
