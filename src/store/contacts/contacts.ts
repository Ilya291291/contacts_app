import { makeAutoObservable } from "mobx";
import { api } from "../api/api";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsStore = makeAutoObservable({
    contacts: [] as ContactDto[],
    contact: {} as ContactDto,
    *getСontacts() {
        const result: ContactDto[] = yield api.getContactsResponse()
        if (result) {
            contactsStore.contacts = result
        }
    },
    *getContact(id: string|undefined) {
        const result: ContactDto = yield api.getContact(id)
        if (result) {
            contactsStore.contact = result
        }
      }
})
