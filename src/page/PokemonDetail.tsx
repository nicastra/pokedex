import * as React from 'react'
import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import { Link, useParams } from 'react-router'
import pokemonData from 'data/pokemon.data'
import clsx from 'clsx'

export default function PokemonDetail() {
  const { id } = useParams<{ id: string }>()
  const pokemon = React.useMemo(() => {
    return pokemonData.find((p) => p.id === Number(id))
  }, [id])

  const typeClasses = {
    normal: 'bg-gray-300 text-gray-800',
    fire: 'bg-red-500 text-white',
    water: 'bg-blue-500 text-white',
    electric: 'bg-yellow-400 text-gray-800',
    grass: 'bg-green-500 text-white',
    poison: 'bg-purple-500 text-white',
    bug: 'bg-lime-500 text-white',
    flying: 'bg-indigo-300 text-white'
  }

  return (
    <div className="relative overflow-hidden bg-[#252A3E] max-w-screen-sm h-h-screen min-h-screen mx-auto pb-12  sm:text-left text-white">
      <div className="my-0 border-b px-6 flex justify-between border-gray-500">
        <Link to="/">
          <Avatar size="large" src={logo} />
        </Link>
      </div>
      <div className="mx-auto flex flex-col gap-6 w-full px-4 pt-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            {pokemon?.type.map((item) => (
              <div
                className={clsx(
                  'p-1 rounded font-normal',
                  typeClasses[item.toLowerCase() as keyof typeof typeClasses] ||
                    'text-black'
                )}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-3xl font-semibold text-gray-400">#{pokemon?.id}</p>
        </div>

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

        <div className="flex flex-col gap-5 w-full h-auto bg-[#05091B] p-6 ">
          <div className="flex flex-col">
            <h4 className="font-semibold text-2xl text-gray-400">Health</h4>
            <p className=" text-xl text-white">{pokemon?.base?.HP}</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h4 className="font-semibold text-2xl text-gray-400">Attack</h4>
              <h4 className=" text-xl text-white">{pokemon?.base.Attack}</h4>
            </div>

            <div className="flex flex-col">
              <h4 className="font-semibold text-2xl text-gray-400">Deffend</h4>
              <h4 className=" text-xl text-white">{pokemon?.base.Defense}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
