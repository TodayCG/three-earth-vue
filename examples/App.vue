<script lang="ts" setup>
import { TeEarth, TeEarthBeam, TeEarthBorder, TeEarthLine } from 'three-earth/packages'
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
    <te-earth
        class="earth-wrap"
        :radius="70"
        :stats="true"
        starry-sky
        aperture
        cloud-cover
        grid-helper
        axes-helper
    >
        <te-earth-border type="china" />
        <te-earth-border type="world" color="#3ba3d1" />
        <te-earth-border type="china-border" color="yellow" :width="3" />
        <!-- 轨迹线 -->
        <te-earth-line :data="lineData" color="#ffffff" :width="3" />
        <!-- 发光柱 -->
        <te-earth-beam :data="beamScatterData" color="red" />
    </te-earth>
</template>
<style lang="scss" scoped>
.earth-wrap {
    height: 100vh;
}
</style>