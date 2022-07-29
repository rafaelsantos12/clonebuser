<template>
  <div class="bg-banner">
    <div class="max-w-screen-xl m-auto">
      <div class="title-header">
        <AtomsTitle
          fontSize="40px"
          color="#fff"
          fontWeight="800"
          lineHeight="1.3"
        >
          VIAGENS DE ÔNIBUS MAIS BARATAS QUE A PASSAGEM DA RODOVIÁRIA
        </AtomsTitle>
        <AtomsTitle fontSize="20px" color="#fff" fontWeight="500" class="my-6">
          Sem taxas, com segurança e preço justo
        </AtomsTitle>
        <hr class="decoration-white" />
        <div class="mt-4 flex justify-between">
          <MoleculesIconTitle
            icon="magnifying-glass"
            label="Escolha a melhor data"
            color="#fff"
          />
          <MoleculesIconTitle
            icon="credit-card"
            label="Parcele em até 12x"
            color="#fff"
          />
          <MoleculesIconTitle
            icon="user-shield"
            label="Compra 100% segura"
            color="#fff"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "../atoms/Title.vue";
export default {
  components: { Title },
  name: "Header",
};
</script>
<style scope>
.bg-banner {
  background-image: url("/images/banner-principal-desktop.png"),
    linear-gradient(135deg, #ad1457, #f11075);
  background-size: cover;
  background-position: 50%;

  top: 0;
}

.title-header {
  margin-left: 40%;
  padding: 24px 24px 90px 72px;
  margin-right: 55px;
}
</style>
