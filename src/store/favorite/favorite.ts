import { makeAutoObservable } from "mobx";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const favoriteStore = makeAutoObservable({
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]') as (GroupContactsDto | ContactDto)[],
    addToFavorites (newItem: ContactDto | GroupContactsDto) {
        const existingItem = favoriteStore.favorites.find(item => item.id === newItem.id)
        if(!existingItem) {
            favoriteStore.favorites = [...favoriteStore.favorites, newItem];
            if (favoriteStore.favorites.length > 0) {
                localStorage.setItem('favorites', JSON.stringify(favoriteStore.favorites));
            }
        }else {
        return
        }
    },
    removeFromFavorites (id: number | string) {
        favoriteStore.favorites = favoriteStore.favorites.filter(contact => contact.id !== id);
      if (favoriteStore.favorites.length === 0) {
        localStorage.removeItem('favorites');
      } else {
        localStorage.setItem('favorites', JSON.stringify(favoriteStore.favorites));
      }
    }
})