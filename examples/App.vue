<script lang="ts" setup>
// import { WtEarth, WtEarthBeam, WtEarthBorder, WtEarthLine } from '@earth/main'
const lineData = [
    {
        fromName: '北京市',
        toName: '成都市',
        coords: [
            [116.412318, 39.914271],
            [104.069008, 30.692721]
        ]
    }
]
const beamScatterData = [
    { name: '郑州市', value: [113.634038, 34.763468, 159] },
    { name: '长沙', value: [112.75758, 27.886388, 100] },
    { name: '上海', value: [121.441104, 31.183921, 70] }
]
</script>
<template>
    <wt-earth
        class="earth-wrap"
        :radius="70"
        :stats="true"
        starry-sky
        aperture
        cloud-cover
        grid-helper
        axes-helper
    >
        <wt-earth-border type="china" />
        <wt-earth-border type="world" color="#3ba3d1" />
        <wt-earth-border type="china-border" color="yellow" :width="3" />
        <!-- 轨迹线 -->
        <wt-earth-line :data="lineData" color="#ffffff" :width="3" />
        <!-- 发光柱 -->
        <wt-earth-beam :data="beamScatterData" color="red" />
    </wt-earth>
</template>
<style lang="scss" scoped>
.earth-wrap {
    height: 100vh;
}
</style>