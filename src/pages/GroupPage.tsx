import React, { useEffect } from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {Empty} from 'src/components/Empty';
import {ContactCard} from 'src/components/ContactCard';
// import { useGetGroupQuery, useGetContactsQuery } from 'src/store/contacts/contactsSlice'
import { groupsStore } from 'src/store/groups/groups';
import { contactsStore } from 'src/store/contacts/contacts';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

export const GroupPage = observer(() => {
  
  const {groupId} = useParams<{ groupId: string }>();

  useEffect(() => {
    groupsStore.getGroup(groupId)
  }, [groupId])

  useEffect(() => {
    contactsStore.getСontacts()
  })

  const groupContacts = groupsStore.group
  const contacts = toJS(contactsStore.contacts)

  // const { data: contacts } = useGetContactsQuery();
  // const { data: groupContacts } = useGetGroupQuery(groupId);

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts && contacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
     ) : <Empty />}
    </Row>
  );
})
