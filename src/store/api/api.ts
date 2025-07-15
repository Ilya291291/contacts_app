import { ContactDto } from "src/types/dto/ContactDto"
import { GroupContactsDto } from "src/types/dto/GroupContactsDto"

class Api {
    async fetch(url: string, params: RequestInit) {
        return fetch(url, {
            ...params,
            headers: {
                'Content-Type': 'application/json',
                ...params.headers,
            }
        }).then(result => result.json())
    }
    async getContactsResponse(): Promise<ContactDto[]> {
        const response = await this.fetch('http://localhost:3001/contacts', {})
        return response
    }
    async getContact(id: string|undefined): Promise<ContactDto> {
        const response = await this.fetch(`http://localhost:3001/contacts/${id}`, {})
        return response
    }
    async getGroupsResponse(): Promise<GroupContactsDto[]> {
        const response = await this.fetch('http://localhost:3001/groups', {})
        return response
    }
    async getGroup(id: string|undefined): Promise<GroupContactsDto> {
        const response = await this.fetch(`http://localhost:3001/groups/${id}`, {})
        return response
    }
}

export const api = new Api()