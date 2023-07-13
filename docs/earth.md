# Documentation

The three-dimensional visualized earth based on ThreeJS not only includes the basic effects of `starry sky`, `halo`, `cloud layer`, `wireframe`, `lighting`, `fogging` and other effects of the earth, but also includes `luminous column` `, `Ripple Scatter` and `Track Line` and other data (Data) rendering effects.

## 基础用法

基础的三维地球用法。

默认地球只需指定标签即可显示，可使用 `texture` 来修改地球贴图效果。

:::demo 

```vue
<template>
  <th-earth :stats="true" :animation="false" />
</template>
```
:::

## 属性

| 属性  | 说明  | 类型 | 可选值 | 默认值  |
| ------- | ------ | ------- |  ------- |  ------- |
radius | 半径   | number  | - |  60 |
subdivision| 球体细分度 | number  | -  | 80 | 
color | 地球颜色 | string | -  | #ffffff | 
opacity | 地球透明度  | number | - | 1 | 
transparent | 地球是否透明  | boolean | true / false | true | 
bloom | 辉光特效 | boolean | true / false | false | 
wireframe | 是否显示线框 | boolean | true / false | false | 
texture | 地球贴图 | string/boolean | url / true / false  | .../Earth.png | 
animation | 开启动画 | boolean | true / false  | true | 
animationSpeed | 转动速度 | number | - | 0.0003 | 
background | 背景色 | string | - | #050b16 | 
fog | 开启雾化 | boolean | true / false  | false | 
fogColor | 雾化颜色 | string | -  | #020924 | 
fogNear | 近距离 | number | -  | 20 | 
fogFar |  远距离 | number | -  | 50 | 
stats | 性能监控 | boolean | true / false  | true |
statsType |  性能监控类型 | number | 0(FPS) / 1(MS) / 2(MB)  | 1 | 
aperture | 显示光晕 | boolean | true / false | false | 
apertureColor | 光晕颜色 | string | -  | #ffffff | 
apertureOpacity | 光晕透明度 | number | -  | 0.6 | 
apertureTransparent | 光晕是否透明 | boolean | true / false | true | 
apertureDepthWrite | 光晕开启深度写入 | boolean | true / false | false | 
apertureTexture | 光晕贴图 | string | -  | .../Aperture.png |
cloudCover | 显示云层 | boolean | true / false | false |  
cloudCoverColor | 云层颜色 | string | -  | #ffffff |  
cloudCoverOpacity | 云层透明度  | number | -  | 1 |
cloudCoverTransparent | 云层是否透明 | boolean | true / false | true |
cloudCoverTexture | 云层贴图 | string | -  | .../CloudCover.png |
cloudCoverAnimation | 开启云层动画 | boolean | true / false | true |
cloudCoverAnimationSpeed | 云层转动速度 | number | -  | 0.0005 |
starrySky | 显示星空 | boolean | true / false | false |
starrySkyTexture | 星空星星贴图 | string | -  | .../StarrySky.png |
starrySkyNumber | 星空星星数量 | number | -  | 10000 |
starrySkySize | 星空星星大小 | number | -  | 1 |
starrySkyOpacity | 星空透明度 | number | -  | 1 |
starrySkyAnimation | 开启星空动画 | boolean | true / false | true |
starrySkyAnimationSpeed | 星空转动速度 | number | -  | 0.0001 |
gridHelper | 显示网格辅助 | boolean | true / false | false |
gridHelperWidth | 网格辅助宽度 | number | -  | 500 |
gridHelperHeight | 网格辅助高度 | number | -  | 500 |
gridHelperColor | 网格辅助颜色 | string | -  | #ffffff |
axesHelper | 显示坐标轴辅助 | boolean | true / false | false |
axesHelperSize | 坐标辅助大小 | number | -  | 100 |
ambientLightColor | 环境光颜色 | string | -  | #ffffff |
ambientLightIntensity | 环境光强度 | number | -  | 0.2 |
directionalLightX | 平行光`x`坐标 | number | -  | 0 |
directionalLightY | 平行光`y`坐标  | number | -  | 5 |
directionalLightZ | 平行光`z`坐标  | number | -  | 10 |
directionalLightIntensity | 平行光强度 |number | -  | 2 |
directionalLightColor | 平行光颜色 | string | -  | #ffffff |


## 完整体

完整体演示包含了 `Earth` 所有组件和特效。

:::demo 

```vue
<template>
  <th-earth 
    :radius="70"
    :stats="true"
    starry-sky
    aperture
    cloud-cover
    grid-helper
    axes-helper
  >
    <!-- 地图描边 -->
    <th-earth-border type="china" />
    <th-earth-border type="world" color="#3ba3d1" />
    <th-earth-border type="china-border" color="yellow" :width="3" />
    <!-- 轨迹线 -->
    <th-earth-line :data="lineData" color="#ffffff" :width="3"/>
    <!-- 发光柱 -->
    <th-earth-beam :data="beamScatter" color="red" />
  </th-earth>
</template>
<script setup lang="ts">
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
const beamScatter = [
  {
    name: '郑州市',
    value: [113.634038, 34.763468, 159]
  },
  {
    name: '长沙',
    value: [112.75758, 27.886388, 100]
  },
  {
    name: '上海',
    value: [121.441104, 31.183921, 70]
  }
]
</script>
```
:::

## 背景颜色

使用 `background` 属性来指定背景颜色。

:::demo 

```vue
<template>
  <th-earth :stats="true" background="#ffffff" />
</template>
```
:::


## 地球贴图

使用 `texture` 属性来地球球体贴图图片地址，可以是在线地址和本地地址。

:::demo 

```vue
<template>
  <th-earth 
    :stats="true"
    starry-sky
    aperture
    aperture-color="red"
    texture="texture/Earth.png"
  />
</template>
```
:::

## 星空背景

`THREE.BufferGeometry` `THREE.PointsMaterial` `THREE.Points`

使用 `starry-sky` 开启星空背景，星空背景由若干个点组成，可使用可通过 `number` 属性定义数量，以及 `大小`、 `透明度`、`动画` 和 `starry-sky-texture` 自定义星空背景的贴图，默认包含贴图。

:::demo 

```vue
<template>
  <th-earth :stats="true" starry-sky />
</template>
```
:::

## 辉光特效

辉光特效通过`bloom`属性开启，让场景更加的立体生动，色彩渲染的更加鲜明，一般在配合透明贴图或者线框模式下使用效果良好。

:::demo 

```vue
<template>
   <th-earth 
      :stats="true"
      :texture="false"
      :subdivision="50"
      :color="'#2D2D2D'"
      :bloom="true"
      :background="'#000000'"
      wireframe
      starrySky
    >
      <th-earth-border type="world" color="#0ca168" :width="2" />
      <th-earth-border type="china" color="#0ca168" :width="2" :opacity="0.7" />
      <th-earth-border type="china-border" color="yellow" :width="3" />
    </th-earth>
</template>
```
:::

## 地球光晕

`THREE.SpriteMaterial` `THREE.Sprite`

使用 `aperture` 属性开启光晕显示，光晕是地球球体周边散发出来的光的效果，可调节 `强度` 、 `颜色` 以及 `自定义贴图`  `aperture-texture`。默认包含贴图。
:::demo 

```vue
<template>
  <th-earth :stats="true" aperture />
</template>
```
:::


## 大气云层

`THREE.SphereGeometry` `THREE.MeshStandardMaterial` `THREE.Mesh`

使用 `cloud-cover` 属性开启云层显示，云层始终在地球球体上层，可以其 `颜色` 、 `贴图` 、 `透明度` 、  `动画` 来自定义云层的渲染方式。`starry-sky-texture` 来自定义云层的贴图。默认包含贴图。

:::demo 

```vue
<template>
  <th-earth :stats="true" starry-sky aperture cloud-cover />
</template>
```
:::

## 场景辅助

`THREE.GridHelper` `THREE.AxesHelper`

通过使用 `grid-helper` ， `axes-helper` 属性分别开启 `网格辅助` 和 `坐标辅助` 功能。便于更好的进行场景描述。

:::demo 

```vue
<template>
  <th-earth 
    :stats="true"
    grid-helper
    axes-helper
  />
</template>
```
:::
