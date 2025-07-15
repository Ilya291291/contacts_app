import { makeAutoObservable } from "mobx";
import { api } from "../api/api";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupsStore = makeAutoObservable({
    groups: [] as GroupContactsDto[],
    group: {} as GroupContactsDto,
    *getGroups() {
        const result: GroupContactsDto[] = yield api.getGroupsResponse()
            if (result) {
                groupsStore.groups = result
            }
    },
    *getGroup(id: string | undefined) {
        const result: GroupContactsDto = yield api.getGroup(id)
        if (result) {
            groupsStore.group = result
        }
    }
})