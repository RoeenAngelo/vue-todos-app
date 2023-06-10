<script setup>

</script>


<template>
      <button>
        <!-- This will be the default/fallback content for this component. 'Create' can be changed where the component is rendered. -->
        <slot>Create</slot>
      </button>    
</template>


<style lang="scss" scoped>
   button {
            padding: 8px 16px;
            border: none;
            cursor: pointer;
        }
</style>