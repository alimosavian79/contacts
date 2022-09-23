import {
  ALPHABETICAL_CONTACTS,
  RETRIEVE_ACTIVE_CARD_EMAIL,
  RETRIEVE_CONTACTS_BY_CHAR,
} from "@/store/constants";
import getSectionsByLetter from "@/utils/sectionByLetter.js";

const getters = {
  [ALPHABETICAL_CONTACTS](state) {
    return getSectionsByLetter(state.contacts);
  },
  [RETRIEVE_CONTACTS_BY_CHAR]: (_, getters) => char => {
    for (const item of getters.ALPHABETICAL_CONTACTS) {
      if (item.title === char) {
        return item.data;
      }
    }
    return [];
  },
  [RETRIEVE_ACTIVE_CARD_EMAIL]: state => {
    return state.activeCardEmail;
  },
};
export default getters;
