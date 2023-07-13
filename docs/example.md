# Example

## complete body

The full demo contains all components and effects of `Earth`.


```html
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
     <!-- map stroke -->
     <th-earth-border type="china" />
     <th-earth-border type="world" color="#3ba3d1" />
     <th-earth-border type="china-border" color="yellow" :width="3" />
     <!-- Trajectory line -->
     <th-earth-line :data="lineData" color="#ffffff" :width="3"/>
     <!-- Luminous column -->
     <th-earth-beam :data="beamScatter" color="red" />
   </th-earth>
</template>
<script setup lang="ts">
const lineData = [
   {
     fromName: 'Beijing',
     toName: 'Chengdu',
     coords: [
       [116.412318, 39.914271],
       [104.069008, 30.692721]
     ]
   }
]
const beamScatter = [
   {
     name: 'Zhengzhou City',
     value: [113.634038, 34.763468, 159]
   },
   {
     name: 'Changsha',
     value: [112.75758, 27.886388, 100]
   },
   {
     name: 'Shanghai',
     value: [121.441104, 31.183921, 70]
   }
]
</script>
```


## background color

Use the `background` property to specify the background color.

 

```html
<template>
   <th-earth :stats="true" background="#ffffff" />
</template>
```



## Earth texture

Use the `texture` attribute to map the image address of the earth sphere, which can be an online address or a local address.

 

```html
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


## Star background

`THREE.BufferGeometry` `THREE.PointsMaterial` `THREE.Points`

Use `starry-sky` to open the starry background, the starry background is composed of several points, you can use the `number` attribute to define the number, and `size`, `transparency`, `animation` and `starry-sky-texture` automatically Define the texture of the background of the starry sky, the texture is included by default.

 

```html
<template>
   <th-earth :stats="true" starry-sky />
</template>
```


## Glow effect

The glow effect is enabled through the `bloom` attribute, which makes the scene more three-dimensional and vivid, and the color rendering is more vivid. Generally, it works well when used with transparent maps or wireframe modes.

 

```html
<template>
    <th-earth
       :stats="true"
       :texture="false"
       :subdivision="50"
       :color="'#2D2D2D'"
       :bloom="true"
       :background="'#000000'"
       wireframe
       starrySky>
       <th-earth-border type="world" color="#0ca168" :width="2" />
       <th-earth-border type="china" color="#0ca168" :width="2" :opacity="0.7" />
       <th-earth-border type="china-border" color="yellow" :width="3" />
     </th-earth>
</template>
```


## Earth Halo

`THREE.SpriteMaterial` `THREE.Sprite`

Use the `aperture` attribute to turn on the halo display. The halo is the effect of light emitted from the periphery of the earth sphere. You can adjust `intensity`, `color` and `custom texture` `aperture-texture`. Textures are included by default.
 

```html
<template>
   <th-earth :stats="true" aperture />
</template>
```



## Atmospheric clouds

`THREE.SphereGeometry` `THREE.MeshStandardMaterial` `THREE.Mesh`

Use the `cloud-cover` attribute to enable cloud display. The cloud layer is always on the top of the earth sphere. You can customize the rendering method of the cloud layer by using its `color`, `texture`, `transparency`, and `animation`. `starry-sky-texture` to customize the texture of the cloud layer. Textures are included by default.

 

```html
<template>
   <th-earth :stats="true" starry-sky aperture cloud-cover />
</template>
```


## Scene Assist

`THREE.GridHelper` `THREE.AxesHelper`

By using `grid-helper`, the `axes-helper` property enables the `grid helper` and `coordinate helper` functions respectively. It is convenient for better scene description.

 

```html
<template>
   <th-earth
     :stats="true"
     grid-helper
     axes-helper
   />
</template>
```

## border Earth stroke

The earth stroke is completed by using the `th-earth-border` component, which supports `china`, `world`, `china-borer` three stroke types, which can be configured with color, thickness, transparency, etc.



```vue
<template>
    <th-earth
       :stats="true"
       :texture="false"
       :subdivision="50"
       :color="'#2D2D2D'"
       :background="'#000000'"
       wireframe
       starrySky
     >
       <th-earth-border type="world" color="#0FDF8F" :width="2" />
       <th-earth-border type="china" color="#0FDF8F" :width="2" :opacity="0.7" />
       <th-earth-border type="china-border" color="yellow" :width="3" />
     </th-earth>
</template>
```


## line trajectory line

The `th-earth-line` component loads the trajectory module, passes in the latitude and longitude information, and draws the trajectory from the start point and the end point.



```vue
<template>
   <th-earth
     :stats="true"
     :radius="100"
     :texture="false"
     :subdivision="50"
     :color="'#2D2D2D'"
     :background="'#000000'"
     wireframe
     starrySky
   >
     <!-- map stroke -->
     <th-earth-border type="china" />
     <th-earth-border type="world" color="#3ba3d1" />
     <th-earth-border type="china-border" color="yellow" :width="3" />
     <!-- Trajectory line -->
     <th-earth-line :data="lineData" color="red" />
   </th-earth>
</template>
<script setup lang="ts">
const lineData = [
   {
     fromName: 'Beijing',
     toName: 'Chengdu',
     coords: [
       [116.412318, 39.914271],
       [104.069008, 30.692721]
     ]
   }
]
</script>
```



## beam luminous column

The `th-earth-beam` component renders the luminous beam data set, and the latitude and longitude information data is passed in to render according to the specified position.



```vue
<template>
   <th-earth
     :stats="true"
     :radius="100"
     :texture="false"
     :subdivision="50"
     :color="'#2D2D2D'"
     :background="'#000000'"
     wireframe
     starrySky
   >
     <!-- map stroke -->
     <th-earth-border type="china" />
     <th-earth-border type="world" color="#3ba3d1" />
     <th-earth-border type="china-border" color="yellow" :width="3" />
     <!-- Luminous column -->
     <th-earth-beam :data="beamScatter" color="#ff5722" />
   </th-earth>
</template>
<script setup lang="ts">
const beamScatter = [
   {
     name: 'Zhengzhou City',
     value: [113.634038, 34.763468, 159]
   },
   {
     name: 'Changsha',
     value: [112.75758, 27.886388, 100]
   },
   {
     name: 'Shanghai',
     value: [121.441104, 31.183921, 70]
   }
]
</script>
```
