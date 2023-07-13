# Documentation

The three-dimensional visualized earth based on ThreeJS not only includes the basic effects of `starry sky`, `halo`, `cloud layer`, `wireframe`, `lighting`, `fogging` and other effects of the earth, but also includes `luminous column` `, `Ripple Scatter` and `Track Line` and other data (Data) rendering effects.

## Basic usage

Basic 3D Earth usage.

By default, the earth can be displayed only by specifying a label, and `texture` can be used to modify the effect of the earth texture.


```html
<template>
   <th-earth :stats="true" :animation="false" />
</template>
```

## Attributes

| property                  | description                            | type           | optional values        | default            |
| ------------------------- | -------------------------------------- | -------------- | ---------------------- | ------------------ |
| radius                    | radius                                 | number         | -                      | 60                 |
| subdivision               | sphere subdivision                     | number         | -                      | 80                 |
| color                     | earth color                            | string         | -                      | #ffffff            |
| opacity                   | Earth transparency                     | number         | -                      | 1                  |
| transparent               | whether the earth is transparent       | boolean        | true / false           | true               |
| bloom                     | glow effect                            | boolean        | true / false           | false              |
| wireframe                 | whether to display wireframe           | boolean        | true / false           | false              |
| texture                   | Earth texture                          | string/boolean | url / true / false     | .../Earth.png      |
| animation                 | enable animation                       | boolean        | true / false           | true               |
| animationSpeed            | rotation speed                         | number         | -                      | 0.0003             |
| background                | background color                       | string         | -                      | #050b16            |
| fog                       | enable fogging                         | boolean        | true / false           | false              |
| fogColor                  | fog color                              | string         | -                      | #020924            |
| fogNear                   | near distance                          | number         | -                      | 20                 |
| fogFar                    | long range                             | number         | -                      | 50                 |
| stats                     | performance monitoring                 | boolean        | true / false           | true               |
| statsType                 | performance monitoring type            | number         | 0(FPS) / 1(MS) / 2(MB) | 1                  |
| aperture                  | show aperture                          | boolean        | true / false           | false              |
| apertureColor             | Aperture color                         | string         | -                      | #ffffff            |
| apertureOpacity           | Aura transparency                      | number         | -                      | 0.6                |
| apertureTransparent       | whether the halo is transparent        | boolean        | true / false           | true               |
| apertureDepthWrite        | Aperture enable depth write            | boolean        | true / false           | false              |
| apertureTexture           | Aperture texture                       | string         | -                      | .../Aperture.png   |
| cloudCover                | show cloud cover                       | boolean        | true / false           | false              |
| cloudCoverColor           | Cloud color                            | string         | -                      | #ffffff            |
| cloudCoverOpacity         | cloud coverage opacity                 | number         | -                      | 1                  |
| cloudCoverTransparent     | whether the cloud cover is transparent | boolean        | true / false           | true               |
| cloudCoverTexture         | cloud texture                          | string         | -                      | .../CloudCover.png |
| cloudCoverAnimation       | enable cloud animation                 | boolean        | true / false           | true               |
| cloudCoverAnimationSpeed  | cloud rotation speed                   | number         | -                      | 0.0005             |
| starrySky                 | show starry sky                        | boolean        | true / false           | false              |
| starrySkyTexture          | starry sky texture                     | string         | -                      | .../StarrySky.png  |
| starrySkyNumber           | number of stars in the starry sky      | number         | -                      | 10000              |
| starrySkySize             | starry sky star size                   | number         | -                      | 1                  |
| starrySkyOpacity          | starry sky opacity                     | number         | -                      | 1                  |
| starrySkyAnimation        | enable starry sky animation            | boolean        | true / false           | true               |
| starrySkyAnimationSpeed   | starry sky rotation speed              | number         | -                      | 0.0001             |
| gridHelper                | show grid helper                       | boolean        | true / false           | false              |
| gridHelperWidth           | grid helper width                      | number         | -                      | 500                |
| gridHelperHeight          | grid helper height                     | number         | -                      | 500                |
| gridHelperColor           | grid helper color                      | string         | -                      | #ffffff            |
| axesHelper                | show axes helper                       | boolean        | true / false           | false              |
| axesHelperSize            | coordinate helper size                 | number         | -                      | 100                |
| ambientLightColor         | ambient light color                    | string         | -                      | #ffffff            |
| ambientLightIntensity     | ambient light intensity                | number         | -                      | 0.2                |
| directionalLightX         | directional light `x` coordinates      | number         | -                      | 0                  |
| directionalLightY         | directional light `y` coordinate       | number         | -                      | 5                  |
| directionalLightZ         | directional light `z` coordinate       | number         | -                      | 10                 |
| directionalLightIntensity | directional light intensity            | number         | -                      | 2                  |
| directionalLightColor     | directional light color                | string         | -                      | #ffffff            |


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