<template>
  <li
    :data-test="title"
    class="-mb-px last:mr-0 py-1 flex-auto text-center cursor-pointer rounded-t-xl border-brand-gray-2 border block text-brand-black-1 bg-brand-gray-1 relative select-none"
    :class="{
      'border-b-0 shadow-gray': choosenTab === title,
      'cursor-not-allowed': contacts.length === 0,
    }"
    @click="handleTab"
  >
    <a
      class="text-3xl font-semibold py-1"
      :class="{
        'text-brand-gray-3': contacts.length === 0,
      }"
    >
      <span class="mr-1">{{ title }}</span>
      <span class="text-xs absolute bottom-1 right-1">{{
        contacts.length
      }}</span>
    </a>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
import { RECEIVE_CHOOSEN_CHAR } from "@/store/constants";

export default {
  name: "Tab",
  props: {
    title: {
      required: true,
      type: String,
    },
    choosenTab: {
      required: true,
      type: String,
    },
    contacts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapMutations([RECEIVE_CHOOSEN_CHAR]),
    handleTab() {
      if (this.contacts.length) this.RECEIVE_CHOOSEN_CHAR(this.title);
    },
  },
};
</script>

<style scoped>
@media (min-width: 320px) and (max-width: 1700px) {
  li {
    width: 64px;
    min-width: 64px;
  }
}
</style>
