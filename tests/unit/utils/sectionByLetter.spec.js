import getSectionsByLetter from "@/utils/sectionByLetter";

describe("sectionByLetter", () => {
  it("divides contacts by the first letter of their lastname", () => {
    const contacts = [
      { name: { last: "Mosavian" }, data: "test" },
      { name: { last: "sadegi" }, data: "test2" },
    ];
    const result = getSectionsByLetter(contacts);

    expect(result).toEqual([
      { data: [{ data: "test", name: { last: "Mosavian" } }], title: "m" },
      { data: [{ data: "test2", name: { last: "sadegi" } }], title: "s" },
    ]);
  });
  it("returns an empty division when there's no contacts", () => {
    const contacts = [];
    const result = getSectionsByLetter(contacts);

    expect(result).toEqual([]);
  });
});
