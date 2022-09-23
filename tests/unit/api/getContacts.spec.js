import axios from "axios";
jest.mock("axios");

import getContacts from "@/api/getContacts";

describe("getContacts", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        results: [
          {
            id: 1,
            title: "hi",
          },
        ],
      },
    });
  });
  it("fetches contacts for users to view", async () => {
    await getContacts();
    expect(axios.get).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=500"
    );
  });

  it("extract contacts from response", async () => {
    const data = await getContacts();
    expect(data).toEqual([
      {
        id: 1,
        title: "hi",
      },
    ]);
  });
});
