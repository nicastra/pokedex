import clsx from 'clsx'

import type { Pokemon } from 'components/App'

interface CardProps {
  pokemon: Pokemon
}

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

export default function Card({ pokemon }: CardProps) {
  return (
    <div className="w-full h-auto rounded-md bg-white flex flex-col justify-between text-black px-4 py-2 font-semibold text-xl">
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
        <p>#{pokemon.id}</p>
      </div>
      <div className="py-8">
        <img
          className="max-h-32 w-full object-contain "
          src={pokemon?.image?.thumbnail}
          alt="thumbnail pokemon"
        />
      </div>
      <div className="text-center">
        <p className="">{pokemon?.name}</p>
      </div>
    </div>
  )
}
