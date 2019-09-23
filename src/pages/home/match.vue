<template>
  <view class="match_base">
    <view class="view_tab">
      <view class="view_tab_matching">
        <text
          class="text_tab_focus"
          @click="display_matching"
          :class="[isActive ? 'text_tab_focus' : 'text_tab_unfocus']"
        >待进行比赛</text>
        <view
          class="tab_sep_common tab_sep_focus"
          :class="[isActive ? 'tab_sep_focus' : 'tab_sep_unfocus']"
        ></view>
      </view>
      <view class="view_tab_matched">
        <text
          class="text_tab_focus"
          @click="display_matched"
          :class="[isActive ? 'text_tab_unfocus' : 'text_tab_focus']"
        >已完成比赛</text>
        <view
          class="tab_sep_common tab_sep_focus"
          :class="[isActive ? 'tab_sep_unfocus' : 'tab_sep_focus']"
        ></view>
      </view>
    </view>
    <view class="game_container" v-for="(game, index) in not_play_games" :key="index">
      <image class="bg_container" src="../../static/game_container.png" />
      <view class="info_container">
        <text class="game_index_common list_game_index">第{{game.index}}场</text>
        <text class="vs_in_list">VS</text>
        <view class="players_common">
          <text class="text_player player_a">{{game.player_a1}}、{{game.player_a2}}</text>
          <text class="text_player player_b">{{game.player_b1}}、{{game.player_b2}}</text>
        </view>
        <view class="record_score_container" @click="startRecordScore(game)">
          <image class="record_score_icon" src="../../static/record_score_icon.png" />
          <text class="record_score">记录比分</text>
        </view>
      </view>
    </view>

    <uni-popup class="pop_up" ref="popup" type="top" custom="true">
      <view class="pop_content">
        <image class="popup_bg" src="../../static/score_popup.png" />
        <view class="score_input_container">
          <text class="game_index_common popup_game_index">第{{current_play_game.index}}场</text>
          <text class="vs_in_popup">VS</text>
          <view class="players_common">
            <text class="text_player player_a">{{current_play_game.player_a1}}、{{current_play_game.player_a2}}</text>
            <text class="text_player player_b">{{current_play_game.player_b1}}、{{current_play_game.player_b2}}</text>
          </view>
        </view>
        <view class="score_btn">
          <image class="score_img" :src="btn_src" />
          <text>确定</text>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import uniPopup from "@/pages/home/components/uni-popup.vue";

export default {
  data() {
    return {
      btn_src: "../../static/score_icon_normal.png",
      isActive: true,
      not_play_games: [],
      played_games: [],
      current_play_game: {}
    };
  },
  components: {
    uniPopup
  },
  methods: {
    onLoad: function(option) {
      uni.setNavigationBarTitle({
        title: "比赛进行中"
      });
      this.not_play_games = JSON.parse(decodeURIComponent(option.games));
    },
    display_matching: function() {
      this.isActive = !this.isActive;
    },
    display_matched: function() {
      this.isActive = !this.isActive;
    },

    startRecordScore: function(game) {
      console.log(game);
      this.current_play_game = game;
      this.$refs.popup.open();
    }
  }
};
</script>

<style lang="less" scoped>
.match_base {
  display: flex;
  flex-direction: column;
  margin-top: 43upx;
}

.view_tab {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
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

.tab_sep_common {
  width: 67upx;
  height: 8upx;
  border-radius: 8upx;
  margin-top: 15upx;
  margin: 0 auto;
}

.tab_sep_focus {
  background-color: rgba(75, 188, 149, 1);
  // display: block;
}

.tab_sep_unfocus {
  background-color: transparent;
  // display: none;
}

.game_container {
  position: relative;
  margin-top: 40upx;
}

.bg_container {
  width: 686upx;
  height: 280upx;
  position: absolute;
  z-index: -1;
  margin-right: 32upx;
  margin-left: 32upx;
}

.info_container {
  display: flex;
  flex-direction: column;
  width: 686upx;
  height: 280upx;
  margin-right: 32upx;
  margin-left: 32upx;
  align-items: center;
}

.game_index_common {
  font-size: 28upx;
  font-family: HYk1gj;
  color: rgba(255, 255, 255, 1);
  line-height: 28upx;
}

.list_game_index {
  margin-top: 24upx;
}

.players_common {
  display: flex;
  flex-direction: row;
  width: 646upx;
  margin-top: -48upx;
  justify-content: center;
}

.text_player {
  width: 50%;
  font-size: 34upx;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  line-height: 48upx;
}

.player_a {
  text-align: right;
  margin-right: 40upx;
}

.player_b {
  text-align: left;
  margin-left: 40upx;
}

.vs_in_list {
  margin-top: 68upx;
  font-size: 34upx;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(75, 188, 149, 1);
  line-height: 48upx;
}

.record_score_container {
  width: 710upx;
  height: 96upx;
  display: flex;
  margin-top: 12upx;
  flex-direction: row;
  margin-left: 20upx;
  margin-right: 20upx;
  align-items: center;
  // position: absolute;
  // z-index: 100;
  justify-content: center;
}

.record_score_icon {
  width: 36upx;
  height: 36upx;
  margin-right: 12upx;
}

.record_score {
  text-align: center;
  font-size: 32upx;
  color: rgba(56, 152, 119, 1);
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
}

.pop_content {
  width: 686upx;
  margin-top: 207upx;
  margin-right: 32upx;
  margin-left: 32upx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup_bg {
  width: 686upx;
  height: 348upx;
  position: absolute;
  z-index: -1;
}

.score_input_container {
  display: flex;
  flex-direction: column;
  width: 686upx;
  height: 348upx;
  align-items: center;
}

.popup_game_index {
  margin-top: 32upx;
}

.vs_in_popup {
  margin-top: 67upx;
  font-size: 34upx;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(75, 188, 149, 1);
  line-height: 48upx;
}

.score_btn {
  height: 96upx;
  width: 686upx;
  margin-top: 40upx;
  border-radius: 48upx;
  background: rgba(231, 231, 231, 1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.score_img {
  width: 34upx;
  height: 34upx;
  margin-right: 18upx;
}
</style>
