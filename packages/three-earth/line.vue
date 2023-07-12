<script setup lang="ts">
withDefaults(defineProps<{
  data: any[]
  color: string
  width: number
  opacity: number
  startScatterColor: string
  startScatterSize: number
  startScatterOpacity: number
  endScatterColor: string
  endScatterSize: number
  endScatterOpacity: number

}>(), {
    data: () => [],
    color: '#ffffff',
    width: 1,
    opacity: 1,
    startScatterColor: '#fff111',
    startScatterSize: 8,
    startScatterOpacity: 1,
    endScatterColor: '#fff111',
    endScatterSize: 10,
    endScatterOpacity: 1
})
</script>