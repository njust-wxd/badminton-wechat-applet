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
          <image class="unplayed_game_bg" src="../../static/unplayed_game_bg.png" />
          <view class="unplayed_game_info_container">
            <text class="game_index_common unplayed_game_index">第{{game.index}}场</text>
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
      <view v-show="current === 1">
        <view class="game_container" v-for="(played_game) in played_games" :key="played_game.index">
          <image class="played_game_bg" src="../../static/played_game_bg.png" />
          <image
            class="win_icon"
            :class="{ win_icon_left : played_game.net_score_ab > 0, win_icon_right : played_game.net_score_ba > 0 }"
            :src="played_game.score_a === played_game.score_b ? '' : '../../static/win.png'"
          />
          <view class="modify_score_container" @click="modifyScore(played_game)">
            <image class="modify_score_icon" src="../../static/modify_score_icon.png" />
            <text class="modify_score_text">修改比分</text>
          </view>
          <view class="played_game_info_container">
            <text class="game_index_common played_game_index">第{{played_game.index}}场</text>
            <text class="vs_in_popup">VS</text>
            <view class="players_common">
              <text
                class="text_player player_a"
                :class="{ text_player_win : played_game.net_score_ab > 0 }"
              >{{played_game.player_a1}}、{{played_game.player_a2}}</text>
              <text
                class="text_player player_b"
                :class="{ text_player_win : played_game.net_score_ba > 0 }"
              >{{played_game.player_b1}}、{{played_game.player_b2}}</text>
            </view>
            <view class="game_score_view">
              <view class="game_score_view_half">
                <text class="score_input_common">{{ played_game.score_a }}</text>
              </view>
              <view class="score_colon"></view>
              <view class="game_score_view_half">
                <text class="score_input_common">{{ played_game.score_b }}</text>
              </view>
            </view>
          </view>
        </view>

        <view
          class="view_result_container"
          :class="{ view_result_container_display : not_play_games.length == 0 && played_games.length != 0}"
        >
          <text class="view_result_note" @click="view_result">比赛结束，查看结果</text>
          <image class="view_result_icon" src="../../static/view_result_icon.png" />
        </view>
      </view>

      <uni-popup class="pop_up" ref="popup" type="top" custom="true">
        <view class="pop_content">
          <image class="played_game_bg" src="../../static/played_game_bg.png" />
          <view class="played_game_info_container">
            <text class="game_index_common played_game_index">第{{current_play_game.index}}场</text>
            <text class="vs_in_popup">VS</text>
            <view class="players_common">
              <text
                class="text_player player_a"
              >{{current_play_game.player_a1}}、{{current_play_game.player_a2}}</text>
              <text
                class="text_player player_b"
              >{{current_play_game.player_b1}}、{{current_play_game.player_b2}}</text>
            </view>
            <view class="game_score_view">
              <view class="game_score_view_half">
                <input
                  class="uni-input score_input_common"
                  v-model="current_play_game.score_a"
                  maxlength="2"
                  type="number"
                />
              </view>
              <view class="score_colon"></view>
              <view class="game_score_view_half">
                <input
                  class="uni-input score_input_common"
                  v-model="current_play_game.score_b"
                  maxlength="2"
                  type="number"
                />
              </view>
            </view>
          </view>
          <view
            class="score_btn_normal"
            :class="{ score_btn_enable : isScoreInput() }"
            @click="recordScore(current_play_game)"
          >
            <image
              class="score_img"
              :src="isScoreInput() ? btn_img_score_confirm_enable : btn_img_score_confirm_disable"
            />
            <text class="score_btn_text_normal" :class="{score_btn_text_enable : isScoreInput()}">确定</text>
          </view>
        </view>
      </uni-popup>
    </view>
  </view>
</template>

<script>
import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue";
import uniPopup from "@/components/uni-popup/uni-popup.vue";
import ALGORITHM from '../../algorithm/match';

export default {
  data() {
    return {
      items: ["待进行比赛", "已完成比赛"],
      current: 0,
      activeColor: "rgba(75, 188, 149, 1)",
      styleType: "text",
      btn_img_score_confirm_disable: "../../static/score_icon_disable.png",
      btn_img_score_confirm_enable: "../../static/score_icon_enable.png",
      players_names: [],
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
      this.players_names = JSON.parse(decodeURIComponent(option.players));
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
      return (
        this.current_play_game.score_a !== "" &&
        this.current_play_game.score_b !== ""
      );
    },
    recordScore(game) {
      if (this.isScoreInput()) {
        game.net_score_ab = Number(game.score_a) - Number(game.score_b);
        game.net_score_ba = Number(game.score_b) - Number(game.score_a);
        if (this.current === 0) {
          //记录比分
          this.played_games.push(game);
          this.played_games.sort(function(a, b) {
            return a.id - b.id;
          });
          this.not_play_games.splice(this.not_play_games.indexOf(game), 1);
          this.current = 1;
        }
        this.$refs.popup.close();
      } else {
        console.log("not input both score");
      }
    },
    modifyScore(played_game) {
      console.log(played_game);
      this.current_play_game = played_game;
      this.$refs.popup.open();
    },
    view_result() {
      let rank_players = ALGORITHM.rank(this.players_names, this.played_games);
      console.log(rank_players);
      uni.navigateTo({
        url: './result?rank_players=' + 
        encodeURIComponent(JSON.stringify(rank_players))
      });
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

.content {
  position: relative;
  margin-top: 40upx;
}

.game_container {
  position: relative;
  margin-left: 32upx;
  margin-right: 32upx;
  margin-bottom: 40upx;
}

.unplayed_game_bg {
  width: 686upx;
  height: 280upx;
  position: absolute;
  z-index: -1;
}

.unplayed_game_info_container {
  display: flex;
  flex-direction: column;
  width: 686upx;
  height: 280upx;
  align-items: center;
}

.game_index_common {
  font-size: 28upx;
  font-family: HYk1gj;
  color: rgba(255, 255, 255, 1);
  line-height: 28upx;
}

.unplayed_game_index {
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
  color: rgba(51, 51, 51, 1);
  overflow: hidden;
}

.text_player_win {
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
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

.played_game_bg {
  width: 686upx;
  height: 348upx;
  position: absolute;
  z-index: -1;
}

.win_icon {
  width: 80upx;
  height: 48upx;
  top: 40upx;
  position: absolute;
  z-index: 1;
}

.win_icon_left {
  left: 93upx;
}

.win_icon_right {
  right: 93upx;
}

.modify_score_container {
  display: flex;
  flex-direction: row;
  // width: 133upx;
  // height: 33upx;
  top: 263upx;
  right: 15upx;
  position: absolute;
  z-index: 1;
  align-items: center;
  justify-content: center;
}

.modify_score_icon {
  width: 28upx;
  height: 28upx;
}

.modify_score_text {
  font-size: 24upx;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 33upx;
}

.view_result_container {
  width: 100%;
  height: 128upx;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0upx -4upx 4upx 0upx rgba(0, 0, 0, 0.04);
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.view_result_container_display {
  display: flex;
}

.view_result_note {
  font-size: 36upx;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(56, 152, 119, 1);
  line-height: 50upx;
}

.view_result_icon {
  width: 36upx;
  height: 36upx;
  margin-left: 16upx;
}

.played_game_info_container {
  display: flex;
  flex-direction: column;
  width: 686upx;
  height: 348upx;
  align-items: center;
}

.played_game_index {
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

.game_score_view {
  height: 76upx;
  display: flex;
  flex-direction: row;
  margin-top: 74upx;
}

.game_score_view_half {
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
  font-size: 40upx;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgb(120, 223, 187);
  line-height: 67upx;
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
