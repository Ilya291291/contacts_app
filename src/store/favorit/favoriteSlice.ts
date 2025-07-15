// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ContactDto } from 'src/types/dto/ContactDto';
// import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

// // interface Contact {
// //   id: number;
// //   name: string;
// //   phone: string;
// // }

// interface FavoritesState {
//   favorites: (GroupContactsDto | ContactDto)[];
// }

// const initialState: FavoritesState = {
//   favorites: JSON.parse(localStorage.getItem('favorites') || '[]')
// };

// export const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     addToFavorites: (state, action: PayloadAction<ContactDto | GroupContactsDto>) => {
//       const newItem = action.payload;
//       const existingItem = state.favorites.find(item => item.id === newItem.id);
//       if(!existingItem) {
//         state.favorites = [...state.favorites, newItem];
//         if (state.favorites.length > 0) {
//           localStorage.setItem('favorites', JSON.stringify(state.favorites));
//         }
//       }else {
//         return
//       }
//     },
//     removeFromFavorites: (state, action: PayloadAction<number | string>) => {
//       state.favorites = state.favorites.filter(contact => contact.id !== action.payload);
//       if (state.favorites.length === 0) {
//         localStorage.removeItem('favorites');
//       } else {
//         localStorage.setItem('favorites', JSON.stringify(state.favorites));
//       }
//     }
//   }
// });

// export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
