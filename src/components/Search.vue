<template>
  <div class="container">
    <input
      type="text"
      class="form-control"
      v-model="title"
      placeholder="Search for Movies, Series & more"
      @keydown.enter="apply"
    />
    <div class="selects">
      <select
        class="form-select"
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
      >
        <option value="" v-if="filter.name === 'year'">All Years</option>
        <option v-for="item in filter.items" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button class="btn btn-primary" @click="apply">Aplly</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      type: "movie",
      number: 10,
      year: "",
      filters: [
        {
          name: "type",
          items: ["movie", "series", "episode"],
        },
        {
          name: "number",
          items: [10, 20, 30],
        },
        {
          name: "year",
          items: (() => {
            const years = [];
            const thisYear = new Date().getFullYear();
            for (let i = thisYear; i >= 1985; i--) {
              years.push(i);
            }
            return years;
          })(),
        },
      ],
    };
  },
  methods: {
    async apply() {
      this.$store.dispatch("movie/searchMovies", {
        title: this.title,
        type: this.type,
        number: this.number,
        year: this.year,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }
}
</style>
