import React, { useEffect } from 'react';
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
// import { useGetGroupsQuery } from 'src/store/contactsSlice/contactsSlice';
import { groupsStore } from 'src/store/groups/groups';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

export const GroupListPage = observer(() => {

  useEffect(() => {
    groupsStore.getGroups();
  }, []);

  // const { data: groups } = useGetGroupsQuery();

  const groups = toJS(groupsStore.groups)
  console.log(groups)

  return (
    <Row xxl={4}>
      {groups && groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
})
