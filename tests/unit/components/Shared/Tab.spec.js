import { mount } from "@vue/test-utils";
import Tab from "@/components/Shared/Tab";

describe("Tab", () => {
  const createConfig = (props = {}, $store = {}) => ({
    global: {
      mocks: {
        $store,
      },
    },
    props: {
      title: "a",
      contacts: [1, 2, 3, 4],
      choosenTab: "a",
      ...props,
    },
  });

  describe("when user clicks on tab", () => {
    describe("when there is contacts", () => {
      it("opens the tab", async () => {
        const props = {
          title: "b",
          contacts: [1, 2, 3, 4],
        };
        const commit = jest.fn();
        const store = { commit };
        const wrapper = mount(Tab, createConfig(props, store));
        const tabWrapper = wrapper.find("[data-test='b']");
        await tabWrapper.trigger("click");

        expect(commit).toBeCalledWith("RECEIVE_CHOOSEN_CHAR", "b");
      });
    });
    describe("when there is no contacts", () => {
      it("does nothing", async () => {
        const props = {
          title: "b",
          contacts: [],
        };
        const commit = jest.fn();
        const store = { commit };
        const wrapper = mount(Tab, createConfig(props, store));
        const tabWrapper = wrapper.find("[data-test='b']");
        await tabWrapper.trigger("click");

        expect(commit).toBeCalledTimes(0);
      });
    });
  });

  it("shows the amount of contacts in the tab", () => {
    const props = {
      contacts: [1, 2, 3, 4],
    };

    const wrapper = mount(Tab, createConfig(props));
    expect(wrapper.text()).toMatch("4");
  });

  it("shows the title", () => {
    const props = {
      title: "test title",
    };

    const wrapper = mount(Tab, createConfig(props));
    expect(wrapper.text()).toMatch("test title");
  });

  it("highlights the tab if it's selected", () => {
    const props = {
      title: "z",
      choosenTab: "z",
    };

    const wrapper = mount(Tab, createConfig(props));
    const tabWrapper = wrapper.find("[data-test='z']");

    expect(tabWrapper.classes()).toContain("shadow-gray");
  });
  it("adds disabled style to the tab if it doesn't have any contacts", () => {
    const props = {
      title: "z",
      contacts: [],
    };

    const wrapper = mount(Tab, createConfig(props));
    const tabWrapper = wrapper.find("[data-test='z']");

    expect(tabWrapper.classes()).toContain("cursor-not-allowed");
  });
});
