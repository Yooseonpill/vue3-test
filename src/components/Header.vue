<template>
  <header>
    <div class="nav">
      <div class="nav-item" v-for="nav in navigations" :key="nav.name">
        <RouterLink :to="nav.href" class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: "Search",
          href: "/",
        },
        {
          name: "Movie",
          href: "/movie",
        },
        {
          name: "About",
          href: "/about",
        },
      ],
    };
  },
};
</script>

<style></style>
