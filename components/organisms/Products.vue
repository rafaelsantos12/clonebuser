<template>
  <div class="max-w-screen-xl m-auto mt-14 mb-8">
    <div class="mx-24">
      <AtomsTitle tag="h2" fontSize="34px" fontWeight="800">
        Conheça nossos outros produtos
      </AtomsTitle>
    </div>
    <div class="mx-28 grid grid-cols-4 gap-5">
      <MoleculesCardProducts>
        <template v-slot:content>
          <div class="body-card mt-6">
            <AtomsTitle tag="h2" fontSize="22px" fontWeight="700" color="#fff">
              Garanta seu Pacote de viagem
            </AtomsTitle>
            <span class="text-sm text-white font-semibold text-xs">
              Aproveite nossos pacotes promocionais com ônibus + hotel com café
              da manhã!!!
            </span>
            <AtomsButtonCustom
              class="mt-6"
              color="#fff"
              bgColor="#FFC107"
              borderColor="#FFC107"
              >WhatsApp</AtomsButtonCustom
            >
          </div>
        </template>
      </MoleculesCardProducts>
      <MoleculesCardProducts>
        <template v-slot:content>
          <div class="body-card mt-6">
            <AtomsTitle tag="h2" fontSize="22px" fontWeight="700" color="#fff">
              Garanta seu Pacote de viagem
            </AtomsTitle>
            <span class="text-sm text-white font-semibold text-xs">
              Aproveite nossos pacotes promocionais com ônibus + hotel com café
              da manhã!
            </span>
            <AtomsButtonCustom
              class="mt-6"
              color="#fff"
              bgColor="#FFC107"
              borderColor="#FFC107"
              >Comprar</AtomsButtonCustom
            >
          </div>
        </template>
      </MoleculesCardProducts>
      <MoleculesCardProducts>
        <template v-slot:content>
          <div class="body-card mt-6">
            <AtomsTitle tag="h2" fontSize="22px" fontWeight="700" color="#fff">
              Garanta seu Pacote de viagem
            </AtomsTitle>
            <span class="text-sm text-white font-semibold text-xs">
              Aproveite nossos pacotes promocionais com ônibus + hotel com café
              da manhã!
            </span>
            <AtomsButtonCustom
              class="mt-6"
              color="#fff"
              bgColor="#FFC107"
              borderColor="#FFC107"
              >Comprar</AtomsButtonCustom
            >
          </div>
        </template>
      </MoleculesCardProducts>
      <MoleculesCardProducts>
        <template v-slot:content>
          <div class="body-card mt-6">
            <AtomsTitle tag="h2" fontSize="22px" fontWeight="700" color="#fff">
              Garanta seu Pacote de viagem
            </AtomsTitle>
            <span class="text-sm text-white font-semibold text-xs">
              Aproveite nossos pacotes promocionais com ônibus + hotel com café
              da manhã!
            </span>
            <AtomsButtonCustom
              class="mt-6"
              color="#fff"
              bgColor="#FFC107"
              borderColor="#FFC107"
              >Comprar</AtomsButtonCustom
            >
          </div>
        </template>
      </MoleculesCardProducts>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  mounted() {
    console.log("Pzdddsd")
};
</script>

<style scoped></style>
