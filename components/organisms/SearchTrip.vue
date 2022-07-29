<template>
  <div class="flex justify-center">
    <div
      class="flex py-6 w-full bg-white max-w-6xl justify-between px-8 absolute rounded-md seach-trip content-center items-end"
    >
      <MoleculesFormIconButtonInput
        type="text"
        iconName="map-pin"
        iconButtonName="arrow-right-arrow-left"
        label="Saindo de"
        placeholder="Digite uma cidade"
      />
      <MoleculesFormIconInput
        type="text"
        iconName="location-dot"
        label="Indo para"
        placeholder="Digite uma cidade"
      />
      <MoleculesFormDateInput label="Data de ida" />
      <MoleculesFormDateInput label="Data de volta" />
      <AtomsButtonCustom
        width="75px"
        height="45px"
        bgColor="#f11075"
        borderColor="#ad1457"
        borderRadius="5px"
        hoverBgColor="#f26995"
        class="mt-6"
      >
        <AtomsIcon
          iconName="magnifying-glass"
          color="#fff"
          hoverColor="#fff"
          size="16px"
        />
      </AtomsButtonCustom>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchTrip",
};
</script>

<style scope>
.seach-trip {
  margin-top: -60px;
  box-shadow: 0 -1px 2px rgb(0 0 0 / 10%), 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid #e5e5e5;
}
</style>
