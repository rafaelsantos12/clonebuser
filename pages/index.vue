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
        <div class="flex head-card place-content-around mt-6">
          <AtomsTitle tag="h5" fontSize="14px" fontWeight="600"
            >{{ city.name }} test
          </AtomsTitle>
          <AtomsTitle tag="h5" fontSize="14px" fontWeight="600">
            {{ city.name }} teste
          </AtomsTitle>
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
      city: [
        {
          name: "Belo Horizonte",
          price: "R$ 109,90",
        },
      ],
    };
  },
};
</script>
