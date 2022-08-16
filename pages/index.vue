<template>
  <div>
    <OrganismsHeader />
    <OrganismsSearchTrip />
    <OrganismsPromotions />
    <MoleculesCard
      topTitle="Ônibus para"
      cityTitle="Brasília"
      colorTitle="#fff"
      fontSize="24px"
    >
      <template v-slot:content>
        <div
          v-for="city in citys"
          :key="city.name"
          class="flex justify-between body-card mt-6"
        >
          <span class="font-semibold text-sm">{{ city.name }}</span>
          <span class="text-sm">{{ city.price }}</span>
        </div>
      </template>
    </MoleculesCard>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      citys: [
        {
          name: "Belo Horizonte",
          price: "R$ 109,90",
        },
        {
          name: "São Paulo",
          price: "R$ 109,90",
        },
        {
          name: "Uberlânida",
          price: "R$ 109,90",
        },
        {
          name: "Ribeirão Preto",
          price: "R$ 109,90",
        },
        {
          name: "Campinas",
          price: "R$ 109,90",
        },
      ],
    };
  },
};
</script>
