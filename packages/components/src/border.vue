<script setup lang="ts">
withDefaults(defineProps<{
  type?: string
  color: string
  width: number
  opacity: number
  wakeline: boolean
  wakelineNumber: number
}>(), {
    type: 'world',
    color: '#ffffff',
    width: 1,
    opacity: 1,
    wakeline: false,
    wakelineNumber: 3
})
</script>