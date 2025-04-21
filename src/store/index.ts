import { configureStore } from '@reduxjs/toolkit'
import Pokemon from 'features/pokemon/PokemonSlice'

const store = configureStore({
  reducer: {
    pokemon: Pokemon
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
