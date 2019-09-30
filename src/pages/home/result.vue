<template>
  <view class="view_base">
    <t-table class="table_wrap">
      <t-tr class="head_common" align="center">
        <t-th>姓名</t-th>
        <t-th>胜(场)</t-th>
        <t-th>负(场)</t-th>
        <t-th>净胜分</t-th>
        <t-th>名次</t-th>
      </t-tr>
      <t-tr class="item_common" v-for="(player, index) in rank_players" :key="index">
        <t-td class="item_name">{{ player.name }}</t-td>
        <t-td>{{ player.win_times }}</t-td>
        <t-td>{{ player.lose_times }}</t-td>
        <t-td>{{ player.net_score }}</t-td>
        <t-td>{{ player.rank }}</t-td>
      </t-tr>
    </t-table>
  </view>
</template>

<script>
import tTable from "@/components/t-table/t-table.vue";
import tTh from "@/components/t-table/t-th.vue";
import tTr from "@/components/t-table/t-tr.vue";
import tTd from "@/components/t-table/t-td.vue";

export default {
  components: {
    tTable,
    tTh,
    tTr,
    tTd
  },
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
.view_base {
  width: 100%;
  margin-top: 32upx;
}

.table_wrap {
  width: 100%;
  border: 0;
}

.head_common {
  height: 96upx;
  background: rgba(245, 245, 245, 1);
  font-size: 28upx;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40upx;
}

.item_common {
  height: 96upx;
  background: rgba(255, 255, 255, 1);
  font-size: 28upx;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40upx;
}
</style>