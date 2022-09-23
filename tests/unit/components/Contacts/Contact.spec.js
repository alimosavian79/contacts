import { mount } from "@vue/test-utils";
import { RETRIEVE_ACTIVE_CARD_EMAIL, SET_ACTIVE_CARD } from "@/store/constants";
import Contact from "@/components/Contacts/Contact";

describe("Contact", () => {
  const createStore = ($store = {}) => ({
    getters: {
      [RETRIEVE_ACTIVE_CARD_EMAIL]: null,
    },
    ...$store,
  });

  const createConfig = (props = {}, $store) => ({
    global: {
      mocks: {
        $store,
      },
    },
    props: {
      contact: {
        name: {
          first: "Ali",
          last: "Mosavian",
        },
        login: { username: "alimosavian79" },
        picture: { large: "test.jpg" },
        ...props,
      },
    },
  });

  describe("when clicked on card", () => {
    describe("if card is closed", () => {
      it("updates current open card with user email", async () => {
        const commit = jest.fn();
        const $store = {
          getters: {
            [RETRIEVE_ACTIVE_CARD_EMAIL]: null,
          },
          commit,
        };
        const props = {
          email: "alimosaviandev@gmail.com",
        };
        const wrapper = mount(Contact, createConfig(props, $store));
        let cardWrapper = wrapper.find("[data-test='card-wrapper']");
        expect(cardWrapper.classes()).not.toContain("show");
        const cardTitle = wrapper.find("[data-test='card-title']");
        await cardTitle.trigger("click");

        expect(commit).toHaveBeenCalledWith(
          SET_ACTIVE_CARD,
          "alimosaviandev@gmail.com"
        );
      });
    });
    describe("if card is open", () => {
      it("updates current open card and closes it", async () => {
        const commit = jest.fn();
        const $store = {
          getters: {
            [RETRIEVE_ACTIVE_CARD_EMAIL]: "alimosaviandev@gmail.com",
          },
          commit,
        };
        const props = {
          email: "alimosaviandev@gmail.com",
        };
        const wrapper = mount(Contact, createConfig(props, $store));
        let cardWrapper = wrapper.find("[data-test='card-wrapper']");
        expect(cardWrapper.classes()).toContain("show");
        const cardTitle = wrapper.find("[data-test='card-title']");
        await cardTitle.trigger("click");

        expect(commit).toHaveBeenCalledWith(SET_ACTIVE_CARD, null);
      });
    });
  });

  describe("when card is open and user clicks on cross sign", () => {
    it("updates current open card and closes it", async () => {
      const commit = jest.fn();
      const $store = {
        getters: {
          [RETRIEVE_ACTIVE_CARD_EMAIL]: "alimosaviandev@gmail.com",
        },
        commit,
      };
      const props = {
        email: "alimosaviandev@gmail.com",
      };
      const wrapper = mount(Contact, createConfig(props, $store));
      let cardWrapper = wrapper.find("[data-test='card-wrapper']");
      expect(cardWrapper.classes()).toContain("show");
      const cardTitle = wrapper.find("[data-test='cross-sign']");
      await cardTitle.trigger("click");

      expect(commit).toHaveBeenCalledWith(SET_ACTIVE_CARD, null);
    });
  });

  it("shows user's name correctly", () => {
    const props = {
      name: {
        first: "Ali",
        last: "Mosavian",
      },
    };
    const wrapper = mount(Contact, createConfig(props, createStore()));
    expect(wrapper.text()).toMatch("Ali, MOSAVIAN");
  });

  it("shows username correctly", () => {
    const props = {
      login: { username: "alimosavian79" },
    };
    const wrapper = mount(Contact, createConfig(props, createStore()));
    expect(wrapper.text()).toMatch("alimosavian79");
  });

  it("shows email correctly", () => {
    const props = {
      email: "alimosaviandev@gmail.com",
    };
    const wrapper = mount(Contact, createConfig(props, createStore()));
    expect(wrapper.text()).toMatch("alimosaviandev@gmail.com");
  });

  it("render image with correct url", () => {
    const props = {
      picture: { large: "test.jpg" },
    };
    const wrapper = mount(Contact, createConfig(props, createStore()));
    const imageElement = wrapper.find("[data-test='image-element']");
    expect(imageElement.attributes("src")).toBe("test.jpg");
  });

  it("render image with correct alt", () => {
    const props = {
      login: { username: "alimosavian79" },
    };
    const wrapper = mount(Contact, createConfig(props, createStore()));
    const imageElement = wrapper.find("[data-test='image-element']");
    expect(imageElement.attributes("alt")).toBe("alimosavian79");
  });
});
