<template>
    <div v-if="posts.length > 0 ">
       <h3>Список пользователей</h3>
       <TransitionGroup name="post-list">
        <post-item  
       :post="post"
       v-for="post in posts"
       :key="post.id"
       @remove="$emit('remove', post)"
        /> 
       </TransitionGroup>
      
  
   </div>
    
    <div v-else style="color:blueviolet">
        <h1> Список пользователей пуст!</h1>
    </div>
</template>


<script>
import PostItem from '@/components/PostItem.vue'
import { TransitionGroup } from 'vue';
export default {
    components:{ PostItem, TransitionGroup },

    props:{
        posts:{
            type: Array,
            required: true
        }
    }
}
</script>

<style> 
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>