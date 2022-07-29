<template>
  <nav
    class="max-w-screen-xl shadow-sm p-5 flex flex-wrap justify-between items-center mx-auto nav-menu"
  >
    <AtomsInternalLink href="/">
      <AtomsImageCustom src="images/logo.svg" width="174px" />
    </AtomsInternalLink>
    <ul class="flex flex-row space-x-8">
      <li v-for="option in optionsMenu" :key="option.id">
        <AtomsInternalLink
          href="/"
          color="#f11075"
          fontSize="16px"
          fontWeight="700"
          hoverColor="#f11075"
        >
          {{ option.title }}
        </AtomsInternalLink>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      optionsMenu: [
        {
          id: 1,
          title: "Buscar",
        },
        {
          id: 2,
          title: "Carteira",
        },
        {
          id: 3,
          title: "Viagens",
        },
        {
          id: 4,
          title: "Promoções",
        },
        {
          id: 5,
          title: "Ajuda",
        },
        {
          id: 6,
          title: "Entrar",
        },
      ],
    };
  },
};
</script>
<style scope>
.nav-menu {
  padding-left: 4rem;
  padding-right: 4rem;
}

li:first-child {
  border-bottom: 2px solid #f11075;
  padding-bottom: 6px;
}

li:hover {
  border-bottom: 2px solid #f11075;
}
</style>
