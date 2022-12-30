<template>
  <div>
    <h1></h1>
    <h1>Страница с постами</h1>
    <div></div>
    <my-input v-model="searchQuery" />
    <div class="add_btn">
      <my-button @click="showDialog"> Добавить пользователя </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-torm @create="createPost" />
    </my-dialog>

    <post-list :posts="searchedAndSortedPosts" @remove="removePost" />
    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{ current__page: page === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import PostTorm from "@/components/PostTorm.vue";
import MyInput from "../components/UI/MyInput.vue";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    PostList,
    PostTorm,
    MyInput,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {},
  watch: {},
};
</script>

<style>
.add_btn {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
  border-radius: 15px;
  margin: 0px 5px 0px 5px;
}

.current__page {
  border: 2px solid rebeccapurple;
}
</style>
