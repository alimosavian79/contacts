import {
  RECEIVE_CONTACTS,
  RECEIVE_CHOOSEN_CHAR,
  SET_ACTIVE_CARD,
} from "@/store/constants";

const mutations = {
  [RECEIVE_CONTACTS](state, contacts) {
    state.contacts = contacts;
    state.loading = false;
  },
  [RECEIVE_CHOOSEN_CHAR](state, char) {
    state.choosenChar = char;
  },
  [SET_ACTIVE_CARD](state, email) {
    state.activeCardEmail = email;
  },
};

export default mutations;
