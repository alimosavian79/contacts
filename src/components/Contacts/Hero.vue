<template>
  <main>
    <article class="md:px-24 sm:px-6 px-0">
      <div class="flex flex-wrap">
        <h1
          class="w-full text-center text-brand-black-1 font-bold mb-3 mt-5 text-2xl"
        >
          Contact List
        </h1>
        <div class="w-full">
          <ul
            class="flex flex-nowrap overflow-y-hidden overflow-x-auto mb-0 list-none pt-3 mb flex-row"
          >
            <tab
              v-for="char in alphabet"
              :key="char"
              :title="char"
              :choosenTab="choosenChar"
              :contacts="RETRIEVE_CONTACTS_BY_CHAR(char)"
            />
          </ul>
          <div
            class="flex flex-wrap justify-between py-16 md:px-12 px-0 bg-brand-gray-1 border border-brand-gray-2 w-full mb-6 rounded-b-xl"
          >
            <h3
              v-if="loading"
              class="w-full text-2xl text-center font-bold my-6 text-brand-black-1"
            >
              loading...
            </h3>
            <h3
              v-else-if="RETRIEVE_CONTACTS_BY_CHAR(choosenChar).length === 0"
              class="w-full text-2xl text-center font-bold my-6 text-brand-black-1"
            >
              There doesn't seem to be any contacts here,
              <br />
              please choose another tab.
            </h3>
            <contact
              v-else
              v-for="contact in RETRIEVE_CONTACTS_BY_CHAR(choosenChar)"
              :key="contact.id.value"
              :contact="contact"
            />
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Tab from "@/components/Shared/Tab.vue";
import Contact from "@/components/Contacts/Contact.vue";
import {
  FETCH_CONTACTS,
  RETRIEVE_CONTACTS_BY_CHAR,
} from "@/store/constants.js";
import { alphabet } from "@/utils/constants.js";

export default {
  components: { Tab, Contact },
  name: "Hero",
  data() {
    return {
      alphabet,
    };
  },
  computed: {
    ...mapState(["choosenChar", "loading"]),
    ...mapGetters([RETRIEVE_CONTACTS_BY_CHAR]),
  },
  methods: {
    ...mapActions([FETCH_CONTACTS]),
  },
  async mounted() {
    this.FETCH_CONTACTS();
  },
};
</script>
