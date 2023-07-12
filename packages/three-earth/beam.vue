<script setup lang="ts">
withDefaults(defineProps<{
  data: any[]
  color: string
  scatterSize: number
  beamSize: number
  baseHeight: number
  opacity: number
}>(), {
    data: () => [],
    color: '#ffffff',
    scatterSize: 10,
    beamSize: 0.2,
    baseHeight: 0.02,
    opacity: 1
})
</script>