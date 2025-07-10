import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';
import { useGetContactQuery } from 'src/store/contacts/contactsSlice';


export const ContactPage = () => {
 
  const {contactId} = useParams<{ contactId: string }>();

  const {data: contact} = useGetContactQuery(contactId);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
