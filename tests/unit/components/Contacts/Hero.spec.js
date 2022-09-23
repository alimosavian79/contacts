import { shallowMount } from "@vue/test-utils";
import Hero from "@/components/Contacts/Hero";

describe("Hero", () => {
  const dispatch = jest.fn();
  const createStore = ($store = {}) => ({
    state: {
      choosenChar: "a",
    },
    getters: {
      RETRIEVE_CONTACTS_BY_CHAR: () => [
        { id: { value: 1 } },
        { id: { value: 2 } },
        { id: { value: 3 } },
      ],
    },
    dispatch,
    ...$store,
  });

  const createConfig = $store => ({
    global: {
      mocks: {
        $store,
      },
    },
  });

  it("fetches contacts", () => {
    const store = {
      dispatch,
    };
    shallowMount(Hero, createConfig(createStore(store)));
    expect(dispatch).toHaveBeenCalledWith("FETCH_CONTACTS");
  });

  it("displays Contact List", () => {
    const wrapper = shallowMount(Hero, createConfig(createStore()));
    expect(wrapper.text()).toMatch("Contact List");
  });

  it("shows amount of tab components", () => {
    const store = {
      getters: {
        RETRIEVE_CONTACTS_BY_CHAR: () => [
          { id: { value: 1 } },
          { id: { value: 2 } },
          { id: { value: 3 } },
        ],
      },
    };
    const wrapper = shallowMount(Hero, createConfig(createStore(store)));
    const tabComponents = wrapper.findAllComponents({ name: "Contact" });
    expect(tabComponents.length).toBe(3);
  });
});
