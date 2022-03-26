import {shallowMount} from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import {pokemons} from '../mocks/pokemons.mock'

describe('PokemonOptions components', ()=>{
    let wrapper 
    beforeEach(()=>{
        wrapper = shallowMount(PokemonOptions, {
            props:{
                pokemons
            }
        })
    })
    test('Debe hacer match con el snapchot', ()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })
    
    test('Debe de mostrar las 4 opciones correctamente', ()=>{
        const liTags = wrapper.findAll('li')
        expect( liTags.length).toBe(4)
        expect(liTags[0].text()).toBe('bulbasaur')
        expect(liTags[1].text()).toBe('ivysaur')
        expect(liTags[2].text()).toBe('venusaur')
        expect(liTags[3].text()).toBe('charmander')
    })

    test('debe de emitir "selection" cons sus respectivos parametros al hacer click',()=>{
        const [li1, li2, li3, li4] = wrapper.findAll('li')
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')
       

        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([1])
        expect(wrapper.emitted('selection')[1]).toEqual([2])
        expect(wrapper.emitted('selection')[2]).toEqual([3])
        expect(wrapper.emitted('selection')[3]).toEqual([4])
    })
})

