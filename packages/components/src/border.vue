<script setup lang="ts">
withDefaults(defineProps<{
  propsGeojson?: 'world' | 'china-border' | 'china' | any
  color: string
  width: number
  opacity: number
  wakeline: boolean
  wakelineNumber: number
}>(), {
    propsGeojson: 'world',
    color: '#ffffff',
    width: 1,
    opacity: 1,
    wakeline: false,
    wakelineNumber: 3
})
</script>