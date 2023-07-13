<p align="center">
  <a >
    <img src="https://img.shields.io/badge/npm-0.0.7-blue">
  </a>
  <a >
    <img src=https://img.shields.io/badge/downloads-10k-blue">
  </a>
  <a >
    <img src=https://img.shields.io/badge/vue-3.x-blue">
  </a>
  <br>
</p>

<h1 align="center">ThreeJs 3D Earth</h1>

<p align="center">Vue3 3D Earth</p>

- 💪 Support vue3
- 🔥 Support a variety of 3D earth scenes, sci-fi, realistic, etc.

This is a library for implementing 3D earth based on ThreeJs, suitable for Vue3, which contains earth textures, muddy light, animation, background, halo, starry sky, clouds, light source, geojson, map border, beam of light, scatter, flight line etc.

## Installing

```shell
# npm
npm install three-earth
# yarn
yarn add three-earth
# pnpm
pnpm add three-earth
```

## Quick Start

```html
<script lang="ts" setup>
import { TeEarth } from 'three-earth'
</script>
<template>
  <te-earth style="height: 300px;" />
</template>
```

## Documentation

- [Earth Documentation](/docs/earth.md)
- [Earth Border Documentation](/docs/earth-border.md)
- [Earth Line Documentation](/docs/earth-line.md)
- [Earth Beam Documentation](/docs/earth-beam.md)

**Examples**
- [Examples Documentation](/docs/example.md)

## import on demand
If you only want to import the components you `need`, you can use the on-demand import method.

```javascript
// main.ts
import App from './App.vue'
import { createApp } from 'vue'
import { ThEarth, ThEarthBorder, ThEarthLine, ThEarthBeam } from 'three-earth'

...
```

<p style="text-align:center;">
  <a><img src="/public/example01.png" width="24%" /></a>
  <a><img src="/public/example02.png" width="24%" /></a>
  <a><img src="/public/example03.png" width="24%" /></a>
  <a><img src="/public/example04.png" width="24%" /></a>
  <a><img src="/public/example05.png" width="24%" /></a>
</p>
