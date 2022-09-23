import getters from "@/store/getters";

describe("getters", () => {
  describe("ALPHABETICAL_CONTACTS", () => {
    it("retrieves data by letter", () => {
      const state = {
        contacts: [
          { name: { last: "Mosavian" }, data: "test" },
          { name: { last: "sadegi" }, data: "test2" },
        ],
      };
      const result = getters.ALPHABETICAL_CONTACTS(state);
      expect(result).toEqual([
        { data: [{ data: "test", name: { last: "Mosavian" } }], title: "m" },
        { data: [{ data: "test2", name: { last: "sadegi" } }], title: "s" },
      ]);
    });
  });
  describe("RETRIEVE_CONTACTS_BY_CHAR", () => {
    it("retrieves contacts by char character", () => {
      const mockGetters = {
        ALPHABETICAL_CONTACTS: [
          { data: [{ data: "test", name: { last: "Mosavian" } }], title: "m" },
          { data: [{ data: "test2", name: { last: "sadegi" } }], title: "s" },
        ],
      };
      const result = getters.RETRIEVE_CONTACTS_BY_CHAR({}, mockGetters)("m");
      expect(result).toEqual([{ data: "test", name: { last: "Mosavian" } }]);
    });
    it("retrieves nothing when there's no contracts", () => {
      const mockGetters = {
        ALPHABETICAL_CONTACTS: [],
      };
      const result = getters.RETRIEVE_CONTACTS_BY_CHAR({}, mockGetters)("m");
      expect(result).toEqual([]);
    });
  });
  describe("RETRIEVE_ACTIVE_CARD_EMAIL", () => {
    it("retrieves the email of the card that has been clicked on", () => {
      const state = {
        activeCardEmail: "alimosaviandev@gmail.com",
      };
      const result = getters.RETRIEVE_ACTIVE_CARD_EMAIL(state);
      expect(result).toEqual("alimosaviandev@gmail.com");
    });
  });
});
