import React, {useMemo, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';
import { useGetContactsQuery, useGetGroupsQuery } from 'src/store/contacts/contactsSlice';

export const ContactListPage = () => {
  const { data: contacts } = useGetContactsQuery();
  const { data: groups } = useGetGroupsQuery();
  const [filterValues, setFilterValues] = useState<Partial<FilterFormValues>>({});

  const filteredContacts = useMemo(() => {
    if (!contacts) return [];

    return contacts.filter(contact => {
      if (filterValues.name) {
        const fvName = filterValues.name.toLowerCase();
        if (contact.name.toLowerCase().indexOf(fvName) === -1) return false;
      }

      if (filterValues.groupId && groups) {
        const groupContacts = groups.find(group => group.id === filterValues.groupId);
        if (groupContacts && !groupContacts.contactIds.includes(contact.id)) return false;
      }

      return true;
    });
  }, [contacts, groups, filterValues]);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    setFilterValues(fv);
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={groups && groups} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filteredContacts && filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
