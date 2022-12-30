<template>
    
     <button class="btn"> <slot>Добавить пост</slot> </button>        
    
</template>


<script>
export default {
    name:'my-button'
}
</script>

<style scoped>
.btn{
 padding: 10px;
 background-color: aliceblue;
 color: rebeccapurple;
 border: 1px solid rebeccapurple;
 border-radius: 10px;

}

</style>