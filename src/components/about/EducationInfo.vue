<template>
  <ul>
    <li v-for="education in educationContent" :key="education.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        education.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ education.degree }}
        <span class="place open-sans-font">{{ education.institute }}</span>
      </h5>
      <p class="open-sans-font">{{ education.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      educationContent: [
        {
          id: 1,
          year: "PENDING",
          degree: "PENDING",
          institute: "PENDING",
          details: `  PENDING`,
        },
        {
          id: 2,
          year: "PENDING",
          degree: "PENDING",
          institute: "PENDING",
          details: `PENDING`,
        },
        {
          id: 3,
          year: "PENDING",
          degree: "PENDING ",
          institute: "PENDING",
          details: `PENDING`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
