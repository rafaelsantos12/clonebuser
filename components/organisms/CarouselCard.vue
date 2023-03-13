<template>
  <div class="max-w-screen-xl m-auto mt-14">
    <div class="flex justify-between mx-24">
      <AtomsTitle tag="h2" fontSize="34px" fontWeight="800">
        Destinos mais procurados
      </AtomsTitle>
      <AtomsInternalLink
        href="/"
        color="#f11075"
        fontSize="16px"
        fontWeight="700"
        hoverColor="#f11075"
      >
        Ver todos os destinos mais procurados
      </AtomsInternalLink>
    </div>
    <div class="mx-28 grid grid-cols-3 gap-7">
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
      <MoleculesCard
        topTitle="Ônibus para"
        cityTitle="Salvador"
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
      <MoleculesCard
        topTitle="Ônibus para"
        cityTitle="São Paulo"
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
  </div>
</template>

<script>
export default {
  name: "CarouselCard",
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

<style scoped></style>
