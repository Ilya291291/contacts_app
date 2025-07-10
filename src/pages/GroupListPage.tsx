import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import { useGetGroupsQuery } from 'src/store/contacts/contactsSlice';


export const GroupListPage = () => {

  const { data: groups } = useGetGroupsQuery();

  return (
    <Row xxl={4}>
      {groups && groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
}
