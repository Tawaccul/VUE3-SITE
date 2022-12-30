<template>
  <div class="navbar">
    <div @click="$router.push('/')">VUE APP</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Пользователи</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px"
        >О сайте</my-button
      >
      <my-button @click="$router.push('/store')">store</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  height: 50px;
  background-color: azure;
  box-shadow: 2px 2px 4px rebeccapurple;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
