import * as React from 'react'
import pokemonDataJson from 'data/pokemon.data'
import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import Search from 'assets/search.svg'
import Card from '../components/Card'
import Single from 'assets/single'
import Multiple from 'assets/multiple'
import clsx from 'clsx'

interface PokemonBaseStats {
  HP: number
  Attack: number
  Defense: number
  'Sp. Attack': number
  'Sp. Defense': number
  Speed: number
}

interface PokemonImage {
  sprite: string
  thumbnail: string
}

export interface Pokemon {
  id: number
  name: string
  type: string[]
  base: PokemonBaseStats
  image: PokemonImage
}

function App() {
  const [pokemonData, setPokemonData] = React.useState<Pokemon[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [sortOption, setSortOption] = React.useState<string>('default')
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [gridView, setGridView] = React.useState<'single' | 'multiple'>(
    'multiple'
  )

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1200))
        setPokemonData(pokemonDataJson)

        setLoading(false)
      } catch (error) {
        console.error('Error loading Pokémon data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const sortedPokemon = React.useMemo<Pokemon[]>(() => {
    let result = [...pokemonData]

    if (searchTerm) {
      result = result.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    }

    switch (sortOption) {
      case 'as':
        return result.sort((a: any, b: any) => a.id - b.id)
      case 'ds':
        return result.sort((a: any, b: any) => b.id - a.id)
      default:
        return result
    }
  }, [pokemonData, sortOption, searchTerm])

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="relative overflow-hidden bg-[#252A3E] max-w-screen-sm h-h-screen min-h-screen mx-auto  sm:text-left text-white">
      <div className="my-0 border-b px-6 flex justify-between border-gray-500">
        <Avatar size="large" src={logo} />
        <div className="self-center">
          {/* Search Components */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Pokémon..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-gray-700 text-white pl-2 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
            />

            {/* <Avatar size="small" src={Search} /> */}
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-6 w-full px-4 pt-4">
        <div className="flex justify-between ">
          <form className="w-3/6">
            <select
              id="countries"
              onChange={handleSortChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Sort By</option>
              <option value="as">Ascending</option>
              <option value="ds">Discending</option>=
            </select>
          </form>
          <div className="w-2/6">
            <div className="inline-flex rounded-md shadow-xs">
              {/* SIngle Card */}
              <button
                onClick={() => setGridView('single')}
                className={clsx(
                  'px-4 py-2 text-sm font-medium border border-gray-200 rounded-s-lg',
                  'focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white',
                  gridView === 'single'
                    ? 'bg-[#0C1231] text-white'
                    : 'bg-[#3D4466] text-gray-300 hover:bg-[#0C1231] hover:text-white'
                )}
              >
                <Single />
              </button>

              {/* Multiple Card */}

              <button
                onClick={() => setGridView('multiple')}
                className={clsx(
                  'px-4 py-2 text-sm font-medium border border-gray-200 rounded-e-lg',
                  'focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white',
                  gridView === 'multiple'
                    ? 'bg-[#0C1231] text-white'
                    : 'bg-[#3D4466] text-gray-300 hover:bg-[#0C1231] hover:text-white'
                )}
              >
                <Multiple />
              </button>
            </div>
          </div>
        </div>
        {loading ? (
          <p>Loading Pokedex...</p>
        ) : (
          <>
            {sortedPokemon?.length === 0 ? (
              <p className="text-center py-8">
                No Pokémon found matching "{searchTerm}"
              </p>
            ) : (
              <div
                className={clsx(
                  'grid gap-5',
                  gridView === 'single' ? 'grid-cols-1' : 'grid-cols-2'
                )}
              >
                {sortedPokemon?.map((pokemon: Pokemon) => (
                  <Card pokemon={pokemon} key={pokemon.id} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App
