import mutations from "@/store/mutations";

describe("mutations", () => {
  describe("RECEIVE_CONTACTS", () => {
    it("receives the contacts and saves it", () => {
      const state = { contacts: [] };
      mutations.RECEIVE_CONTACTS(state, ["test"]);
      expect(state).toEqual({ contacts: ["test"], loading: false });
    });
  });
  describe("RECEIVE_CHOOSEN_CHAR", () => {
    it("receives the tab that user has chose", () => {
      const state = { choosenChar: "a" };
      mutations.RECEIVE_CHOOSEN_CHAR(state, "b");
      expect(state).toEqual({ choosenChar: "b" });
    });
  });
  describe("SET_ACTIVE_CARD", () => {
    it("opens the card that user has choose", () => {
      const state = { activeCardEmail: null };
      mutations.SET_ACTIVE_CARD(state, "test");
      expect(state).toEqual({ activeCardEmail: "test" });
    });
  });
});
