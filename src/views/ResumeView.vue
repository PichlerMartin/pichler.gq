<template>
  <div class="Resume">
    <ResumeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import ResumeComponent from '@/components/ResumeComponent.vue'

export default {
  name: 'ResumeComponent',
  components: {
    ResumeComponent
  }
}
</script>
