import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonPage component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("Debe de llamar el mixPokeminArray al montar", () => {
    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      "mixPokemonArray"
    );
    const wrapper = shallowMount(PokemonPage);
    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  test("debe de hacer match con el snapchot cuando cargan los pokemons", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showAnswer: false,
          message: "",
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de mostrar los componentes de pokemonPicture y pokemonOption", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showAnswer: false,
          message: "",
        };
      },
    });
    const pokemonPicture = wrapper.find("pokemon-picture-stub");
    const pokemonOption = wrapper.find("pokemon-options-stub");

    expect(pokemonPicture.exists()).toBeTruthy();
    expect(pokemonOption.exists()).toBeTruthy();

    expect(pokemonPicture.attributes("pokemonid")).toBe("1");

    expect(pokemonOption.attributes("pokemons")).toBeTruthy();
  });

  test("Pruebas con check answer", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showAnswer: false,
          message: "",
        };
      },
    });

    await wrapper.vm.checkAnswer(1);

    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.vm.showAnswer).toBeTruthy();
    expect(wrapper.find("h2").text()).toBe(`Correcto, ${pokemons[0].name}`);

    await wrapper.vm.checkAnswer(2);

    expect(wrapper.vm.message).toBe(`Oops, era ${pokemons[0].name}`);
  });
});
