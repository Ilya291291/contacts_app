import React, { useEffect } from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';
// import { useGetContactQuery } from 'src/store/contactsSlice/contactsSlice';
import { contactsStore } from 'src/store/contacts/contacts';
import { observer } from 'mobx-react-lite';

export const ContactPage = observer(() => {
 
  const {contactId} = useParams<{ contactId: string }>();

  useEffect(() => {
    contactsStore.getContact(contactId)
  }, [contactId]);

  const contact = contactsStore.contact

  // const {data: contact} = useGetContactQuery(contactId);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
})
