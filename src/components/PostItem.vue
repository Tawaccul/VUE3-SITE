<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post_btn">
      <my-button @click="$router.push(`/posts/${post.id}`)" style="margin-right: 15px"
        >Открыть</my-button
      >
      <my-button @click="$emit('remove', post)"> Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.post {
  padding: 15px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid rebeccapurple;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post_btn {
  display: flex;
}
</style>
