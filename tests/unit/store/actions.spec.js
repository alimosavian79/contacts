import actions from "@/store/actions";
import getContacts from "@/api/getContacts";
jest.mock("@/api/getContacts");

describe("actions", () => {
  describe("FETCH_CONTACTS", () => {
    beforeEach(() => {
      getContacts.mockResolvedValue([{ id: 1 }]);
    });
    it("makes request to fetch contacts", async () => {
      const context = { commit: jest.fn() };
      await actions.FETCH_CONTACTS(context);
      expect(getContacts).toHaveBeenCalled();
    });
    it("sends message to save received contacts in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_CONTACTS(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_CONTACTS", [{ id: 1 }]);
    });
  });
});
