<template>
  <view class="match_base">
    <view class="uni-padding-wrap uni-common-mt">
      <uni-segmented-control
        :current="current"
        :values="items"
        :style-type="styleType"
        :active-color="activeColor"
        @clickItem="onClickItem"
      />
    </view>

    <view class="content">
      <view v-show="current === 0">
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
      </view>
      <view v-show="current === 1">选项卡2的内容</view>
    </view>

    <uni-popup class="pop_up" ref="popup" type="top" custom="true">
      <view class="pop_content">
        <image class="popup_bg" src="../../static/score_popup.png" />
        <view class="score_input_container">
          <text class="game_index_common popup_game_index">第{{current_play_game.index}}场</text>
          <text class="vs_in_popup">VS</text>
          <view class="players_common">
            <text
              class="text_player player_a"
            >{{current_play_game.player_a1}}、{{current_play_game.player_a2}}</text>
            <text
              class="text_player player_b"
            >{{current_play_game.player_b1}}、{{current_play_game.player_b2}}</text>
          </view>
          <view class="score_input_view">
            <view class="score_input_view_half">
              <input
                class="uni-input score_input_common"
                v-model="current_play_game.score_a"
                maxlength="2"
                type="number"
              />
            </view>
            <view class="score_colon"></view>
            <view class="score_input_view_half">
              <input
                class="uni-input score_input_common"
                v-model="current_play_game.score_b"
                maxlength="2"
                type="number"
              />
            </view>
          </view>
        </view>
        <button
          class="score_btn_normal"
          :class="{ score_btn_enable : isScoreInput() }"
          :disabled="isScoreInput() ? false : true"
        >
          <image
            class="score_img"
            :src="isScoreInput() ? btn_img_score_confirm_enable : btn_img_score_confirm_disable"
          />
          <text
            class="score_btn_text_normal"
            :class="{score_btn_text_enable : isScoreInput()}"
          >确定</text>
        </button>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue";
import uniPopup from "@/components/uni-popup/uni-popup.vue";

export default {
  data() {
    return {
      items: ["待进行比赛", "已完成比赛"],
      current: 0,
      activeColor: "rgba(75, 188, 149, 1)",
      styleType: "text",
      btn_img_score_confirm_disable: "../../static/score_icon_disable.png",
      btn_img_score_confirm_enable: "../../static/score_icon_enable.png",
      not_play_games: [],
      played_games: [],
      current_play_game: {}
    };
  },
  components: {
    uniSegmentedControl,
    uniPopup
  },
  methods: {
    onLoad(option) {
      uni.setNavigationBarTitle({
        title: "比赛进行中"
      });
      this.not_play_games = JSON.parse(decodeURIComponent(option.games));
    },
    onClickItem(index) {
      if (this.current !== index) {
        this.current = index;
      }
    },
    startRecordScore(game) {
      console.log(game);
      this.current_play_game = game;
      this.$refs.popup.open();
    },
    isScoreInput() {
      return (this.current_play_game.score_a !== '' && this.current_play_game.score_b !== '');
    },
  }
};
</script>

<style lang="less" scoped>
.match_base {
  display: flex;
  flex-direction: column;
  margin-top: 43upx;
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
  overflow: hidden;
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

.score_input_view {
  height: 76upx;
  display: flex;
  flex-direction: row;
  margin-top: 74upx;
}

.score_input_view_half {
  width: 72upx;
}

.score_colon {
  width: 126upx;
}

.score_input_common {
  width: 56upx;
  margin-top: 12upx;
  margin-bottom: 12upx;
  margin-left: 12upx;
  border-radius: 4upx 4upx 0upx 0upx;
  font-size:40upx;
  font-family:PingFangSC-Semibold,PingFangSC;
  font-weight:600;
  color:rgb(120, 223, 187);
  line-height:67upx;
}

.score_btn_normal {
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

.score_btn_enable {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}

.score_img {
  width: 34upx;
  height: 34upx;
  margin-right: 18upx;
}

.score_btn_text_normal {
  font-size: 36upx;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(187, 187, 187, 1);
  line-height: 50upx;
}

.score_btn_text_enable {
  color: rgba(56, 152, 119, 1);
}
</style>
