import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import { useParams } from 'react-router'
import pokemonData from 'data/pokemon.data'

export default function PokemonDetail() {
  const { id } = useParams<{ id: string }>()
  const pokemon = pokemonData.find((p) => p.id === Number(id))

  return (
    <div className="relative overflow-hidden bg-[#252A3E] max-w-screen-sm h-h-screen min-h-screen mx-auto  sm:text-left text-white">
      <div className="my-0 border-b px-6 flex justify-between border-gray-500">
        <Avatar size="large" src={logo} />
      </div>
      <div className="mx-auto flex flex-col gap-6 w-full px-4 pt-4">
        <p>#{pokemon?.id}</p>
        <div className="h-fit w-full rounded p-6">
          <img
            className="w-3/6 h-1/2 object-cover mx-auto"
            src={pokemon?.image?.thumbnail}
            alt="Pokemon"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-4xl">{pokemon?.name}</p>
          <div className="w-1/6  ">
            <img
              className="w-full h-h-full object-cover mx-auto"
              src={pokemon?.image?.sprite}
              alt="Pokemon"
            />
          </div>
        </div>

        <div className="flex flex-col w-full h-40 bg-[#05091B] p-6 ">
          <h4>Health</h4>
          <p>{pokemon?.base?.HP}</p>
          <hr />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p>Attack</p>
              <h4>{pokemon?.base.Attack}</h4>
            </div>

            <div className="flex flex-col">
              <p>Deffend</p>
              <h4>{pokemon?.base.Defense}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
