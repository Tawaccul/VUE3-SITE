<template>
   <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
    name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
.input{
    border-radius: 10px;
    border: 1px solid rebeccapurple ;
    padding: 15px;
    margin-top: 10px;
    
}
</style>