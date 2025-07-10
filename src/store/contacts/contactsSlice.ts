import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {ContactDto} from 'src/types/dto/ContactDto';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        getContacts: builder.query<ContactDto[], void>({
            query: () => 'contacts',
        }),
        getGroups: builder.query<GroupContactsDto[], void>({
            query: () => 'groups',
        }),
        getContact: builder.query<ContactDto | undefined, ContactDto['id'] | undefined>({
            query: (id) => {
                return `contacts/${id}`
            }
        }),
        getGroup: builder.query<GroupContactsDto, GroupContactsDto['id'] | undefined>({
            query: (id) => {
                return `groups/${id}`
            }
        }),
     })
})

export const { 
    useGetContactsQuery,
    useGetGroupsQuery,
    useGetContactQuery,
    useGetGroupQuery,
 } = contactsApi;