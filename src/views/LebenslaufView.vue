<template>
  <div class="lebenslaufview">
    <LebenslaufComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import LebenslaufComponent from '@/components/LebenslaufComponent.vue'

export default {
  name: 'Lebenslaufview',
  components: {
    LebenslaufComponent
  }
}
</script>
