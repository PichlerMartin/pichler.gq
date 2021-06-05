<template>
  <div class="lebenslauf">
    <LebenslaufComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import LebenslaufComponent from '@/components/LebenslaufComponent.vue'

export default {
  name: 'LebenslaufComponent',
  components: {
    LebenslaufComponent
  }
}
</script>
