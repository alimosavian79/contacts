import getContacts from "@/api/getContacts";
import { FETCH_CONTACTS, RECEIVE_CONTACTS } from "@/store/constants.js";

const actions = {
  [FETCH_CONTACTS]: async context => {
    const contacts = await getContacts();
    context.commit(RECEIVE_CONTACTS, contacts);
  },
};

export default actions;
