<template>
  <div
    class="card relative flex flex-col mb-4 border-b-2 border-dashed border-brand-gray-2 pb-4"
  >
    <span
      data-test="card-title"
      @click="toggleCard"
      class="text-brand-black-1 font-bold text-lg w-full cursor-pointer px-1"
      >{{ retrieveName }}</span
    >
    <div
      class="card-wrapper"
      data-test="card-wrapper"
      :class="{ show: RETRIEVE_ACTIVE_CARD_EMAIL === contact.email }"
    >
      <div
        class="relative bg-brand-gray-1 flex flex-wrap py-5 px-1 mt-2 border-brand-gray-4 shadow-gray2 rounded-md"
      >
        <div class="username absolute bg-brand-red-1 text-white p-2">
          USERNAME: {{ contact.login.username }}
        </div>
        <div class="lg:w-1/4 l w-full relative">
          <div
            class="2xl:w-32 2xl:h-32 xl:w-24 xl:h-24 lg:w-40 lg:h-40 md:w-40 md:h-40 w-32 h-32 md: mx-auto rounded-full overflow-hidden"
          >
            <img
              data-test="image-element"
              class="w-full h-full object-cover"
              :src="contact.picture.large"
              :alt="contact.login.username"
            />
          </div>

          <span
            data-test="cross-sign"
            @click="toggleCard"
            class="cursor-pointer font-bold absolute -top-2 left-2 text-xl text-brand-gray-2 transition-colors hover:text-brand-black-1"
            >X</span
          >
        </div>
        <div class="lg:w-3/4 w-full relative lg:text-left text-center">
          <h3 class="text-2xl text-brand-gray-3 lg:mt-0 mt-6 font-bold mb-6">
            {{ retrieveName }}
          </h3>
          <div class="flex flex-col relative">
            <div
              class="mb-1"
              v-for="detail in cardDetails(contact)"
              :key="detail.title"
            >
              <span class="text-brand-black-1 font-bold text-sm mr-3">{{
                detail.title
              }}</span>
              <span class="text-sm text-brand-black-1 font-semibold">{{
                detail.data
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_ACTIVE_CARD, RETRIEVE_ACTIVE_CARD_EMAIL } from "@/store/constants";
import { mapMutations, mapGetters } from "vuex";
import { cardDetails } from "@/utils/constants";
export default {
  name: "Contact",
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters([RETRIEVE_ACTIVE_CARD_EMAIL]),
    retrieveName() {
      return `${
        this.contact.name.first
      }, ${this.contact.name.last.toUpperCase()}`;
    },
  },
  methods: {
    ...mapMutations([SET_ACTIVE_CARD]),
    toggleCard() {
      // couldn't use id, since some datas didn't had one and email was the best next thing
      if (this.RETRIEVE_ACTIVE_CARD_EMAIL === this.contact.email) {
        this.SET_ACTIVE_CARD(null);
      } else {
        this.SET_ACTIVE_CARD(this.contact.email);
      }
    },
    cardDetails,
  },
};
</script>

<style scoped>
.card {
  width: 48%;
}
.card-wrapper {
  height: 0;
  transition: 0.4s all;
  overflow: hidden;
  padding: 0 4px;
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 25px;
  right: 0;
}
.card-wrapper.show {
  height: 290px;
}

.username {
  transform: rotate(90deg);
  right: -50px;
  top: 80px;
  min-width: 230px;
  text-align: center;
  z-index: 1;
}
@media (min-width: 0) and (max-width: 1280px) {
  .card {
    width: 100%;
  }
}
@media (min-width: 0) and (max-width: 1024px) {
  .card-wrapper.show {
    height: 460px;
  }
}
@media (min-width: 0) and (max-width: 520px) {
  .username {
    right: -95px;
    top: 95px;
  }
}
</style>
