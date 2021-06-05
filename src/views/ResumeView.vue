<template>
  <div class="resumeview">
    <ResumeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import ResumeComponent from '@/components/ResumeComponent.vue'

export default {
  name: 'ResumeView',
  components: {
    ResumeComponent
  }
}
</script>
