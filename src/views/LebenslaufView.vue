<template>
  <div class="lebenslaufview">
    <LebenslaufComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import LebenslaufComponent from '@/components/LebenslaufComponent.vue'

export default {
  //  TODO: Fix font (Oxygen), fix styling
  name: 'Lebenslaufview',
  components: {
    LebenslaufComponent
  }
}
</script>
