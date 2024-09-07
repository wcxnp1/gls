<template>
  <div>
    <div class="mb-10">
      <label>搜索城市：<input v-model="keyword" placeholder="请输入城市名" /></label>
    </div>

    <baidu-map ak="ocjtpCpd3HusX9VUmkfc49P9jxRV5Vch" :scroll-wheel-zoom="true" @rightclick="clickBmap">
      <bm-view class="map"></bm-view>

      <div class="more_panel">
        <span :class="{ down: isShowPanel }" @click="showPanel">
          <span>{{ isShowPanel ? "隐藏" : "显示" }}</span>搜索列表<i class="el-icon-d-arrow-right"></i>
        </span>
      </div>

      <bm-local-search :keyword="keyword" :panel="isShowPanel" :auto-viewport="true"
        @searchcomplete="searchcomplete"></bm-local-search>

      <bm-marker :position="markerPo" :dragging="true" :title="storeName" :zIndex="999999999" @click="infoWindowOpen"
        :icon="{ url: markerIcon, size: { width: 34, height: 34 } }" @dragend="dragend">
        <bm-info-window :show="isShowInfo" @close="infoWindowClose" @open="infoWindowOpen">{{ address
          }}</bm-info-window>
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmView from "vue-baidu-map/components/map/MapView";
import BmLocalSearch from "vue-baidu-map/components/search/LocalSearch";
import BmMarker from "vue-baidu-map/components/overlays/Marker";
import BmInfoWindow from "vue-baidu-map/components/overlays/InfoWindow";

export default {
  components: {
    BaiduMap,
    BmView,
    BmLocalSearch,
    BmMarker,
    BmInfoWindow
  },
  data() {
    return {
      storeName: "",
      center: { lng: 117.2, lat: 31.7 },
      zoom: 3,
      location: "安徽",
      keyword: "安徽",
      markerPo: { lng: 117.2, lat: 31.7 },
      isShowPanel: true,
      isShowInfo: false,
      markerIcon: 'https://example.com/path/to/your/icon.png', // 替换为有效的图标URL  
      address: ""
    };
  },
  methods: {
    clickBmap(val) {
      this.markerPo = val.point;
    },
    showPanel() {
      this.isShowPanel = !this.isShowPanel;
    },
    infoWindowClose() {
      this.isShowInfo = false;
    },
    infoWindowOpen() {
      this.isShowInfo = true;
    },
    dragend(val) {
      /* global BMap:readonly */
      this.markerPo = val.point;
      const geocoder = new BMap.Geocoder();
      geocoder.getLocation(val.point, (rs) => {
        this.address = rs.address;
      });
    },
    searchcomplete(results) {
      console.log(results);
      this.isShowPanel = true;
    }
  }
};  
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 500px;
}

.more_panel {
  text-align: center;
  font-size: 12px;
  color: #2878ff;
  padding-top: 10px;

  span {
    cursor: pointer;

    i {
      transform: rotate(90deg);
    }
  }

  span.down {
    i {
      transform: rotate(-90deg);
    }
  }
}
</style>