# Earth Documentation

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

