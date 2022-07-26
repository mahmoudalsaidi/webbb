<template>
  <ul>
    <li v-for="experience in experienceContent" :key="experience.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        experience.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ experience.position }}
        <span class="place open-sans-font">{{ experience.compnayName }}</span>
      </h5>
      <p class="open-sans-font">{{ experience.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      experienceContent: [
        {
          id: 1,
          year: "   2020 - 2022",
          position: " BTEC LEVEL 3 IN IT ",
          compnayName: "College",
          details: `learned general IT in college `,
        },
        {
          id: 2,
          year: "2017-present",
          position: " hardware - software troubleshooter",
          compnayName: "PC",
          details: `I learned how to troublehsoot and fix pc hardware and software issues .`,
        },
        {
          id: 3,
          year: "PENDING",
          position: "PENDING",
          compnayName: "PENDING",
          details: `PENDING`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
