<template>
  <ul class="about-list list-unstyled open-sans-font">
    <li v-for="personalInfo in personalInfoContent" :key="personalInfo.id">
      <span class="title">{{ personalInfo.meta }}: </span>
      <span
        class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        {{ personalInfo.metaInfo }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      personalInfoContent: [
        { id: 1, meta: "first name", metaInfo: "Mahmoud" },
        { id: 2, meta: "last name", metaInfo: "Al-Saidi" },
        { id: 3, meta: "Age", metaInfo: "18 Years" },
        { id: 4, meta: "Nationality", metaInfo: "Palestinian" },
        { id: 5, meta: "Freelance", metaInfo: "Available" },
        { id: 6, meta: "Located", metaInfo: "Romania" },
        { id: 7, meta: "phone", metaInfo: "+447465080381" },
        { id: 8, meta: "Email", metaInfo: "mahmodissam@gmail.com" },
        { id: 9, meta: "Skype", metaInfo: " mahmoud.issam" },
        { id: 10, meta: "langages", metaInfo: "Arabic, English, Romanian" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
