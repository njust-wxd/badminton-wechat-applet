<template>
  <view class="container">
    <view class="table">
      <view class="tr tr_head">
        <text class="th col_name">姓名</text>
        <text class="th">胜(场)</text>
        <text class="th">负(场)</text>
        <text class="th">净胜分</text>
        <text class="th">名次</text>
      </view>
      <view v-for="(player, index) in rank_players" :key="index">
        <view class="tr">
          <view class="champion_view" v-if="player.rank === 1">
            <image class="champion_bg" src="../../static/champion_bg.png" />
            <image class="champion_crown" src="../../static/crown.png"/>
          </view>
  
          <text class="td col_name td_name" 
            :class="{ champion_color : player.rank === 1 }">{{ player.name }}</text>
          <text class="td td_win_times" 
             :class="{ champion_color : player.rank === 1 }">{{ player.win_times }}</text>
          <text class="td td_lose_times" 
             :class="{ champion_color : player.rank === 1 }">{{ player.lose_times }}</text>
          <text class="td td_net_score" 
             :class="{ champion_color : player.rank === 1 }">{{ player.net_score }}</text>
          <text class="td td_rank" :class="{ rank_style_123 : player.rank < 4 }">{{ player.rank }}</text>
        </view>
        <view class="seprator"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      rank_players: []
    };
  },
  methods: {
    onLoad(option) {
      uni.setNavigationBarTitle({
        title: "比赛结果"
      });
      this.rank_players = JSON.parse(decodeURIComponent(option.rank_players));
      console.log(this.rank_players);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  margin-top: 32upx;
}

.table {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.tr {
  width: 100%;
  height: 96upx;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.tr_head {
  background: rgba(245, 245, 245, 1);
}

.th {
  width: 20%;
  font-size: 28upx;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40upx;
  text-align: center;
}

.td {
  width: 20%;
  text-align: center;
}

.col_name {
  margin-left: 32upx;
  text-align: left;
}

.td_name {
  font-size: 28upx;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 40upx;
}

.td_win_times {
  font-size: 28upx;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40upx;
}

.td_lose_times {
  font-size: 28upx;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40upx;
}

.td_net_score {
  font-size: 28upx;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40upx;
}

.td_rank {
  font-size: 32upx;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 45upx;
}

.seprator {
  margin-left: 32upx;
  margin-right: 32upx;
  height: 2upx;
  background: #e7e7e7;
}

.champion_view {
  width:748upx;
  height:96upx;
  position: absolute;
  z-index: -1;
}

.champion_bg {
  width:748upx;
  height:96upx;
  position: absolute;
  z-index: -1;
}

.champion_crown {
  width:40upx;
  height:29upx;
  left: 53upx;
  top: 4upx;
  position: absolute;
  z-index: 1;
}

.champion_color {
  color:rgba(151,102,0,1);
}

.rank_style_123 {
  font-family:PingFangSC-Semibold,PingFangSC;
  font-weight:600;
  color:rgba(188,155,0,1);
}
</style>