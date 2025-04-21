import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
  sortOrder: 'asc' | 'dsc'
}

const initialState: PokemonState = {
  sortOrder: 'asc'
}

const pokemonSlice = createSlice({
  name: 'Pokemon',
  initialState,
  reducers: {
    setSortOrder: (state, action: PayloadAction<'asc' | 'dsc'>) => {
      state.sortOrder = action.payload
    }
  }
})

export const { setSortOrder } = pokemonSlice.actions
export default pokemonSlice.reducer
