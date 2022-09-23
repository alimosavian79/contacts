import state from "@/store/state";

describe("state", () => {
  it("stores active card email", () => {
    const startingState = state();
    expect(startingState.activeCardEmail).toBe(null);
  });
  it("stores loading state", () => {
    const startingState = state();
    expect(startingState.loading).toBe(true);
  });

  it("stores contacts", () => {
    const startingState = state();
    expect(startingState.contacts).toEqual([]);
  });

  it("stores choosen char from tabs", () => {
    const startingState = state();
    expect(startingState.choosenChar).toEqual("a");
  });
});
