import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        dialogVisible: false,
        selectedSort: "",
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ],

    }),

    getters:{
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) =>
              post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            );
          },
          searchedAndSortedPosts(state, getters) {
            return getters.sortedPosts.filter((post) =>
              post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
          },
    },
    mutations:{
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },

    },
    actions:{
        async fetchPosts({state, commit}) {
            try {
              const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                  _page: state.page,
                  _limit: state.limit,
                },
              });
              commit('setTotalPages'.Math.ceil(response.headers["x-total-count"] / this.limit));
              commit('setPosts', response.data) 
            } catch (e) {
              alert("Ошибка");
            }
          },
    },
    namespaced: true

} 