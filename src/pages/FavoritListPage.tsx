import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import {useSelector} from 'react-redux';
import {RootState} from 'src/store/store';

export const FavoritListPage = () => {

  const favorites = useSelector((state: RootState) => state.favorites.favorites)

  return (
    <Row xxl={4} className="g-4">
      {favorites.map((favorite) => (
        <Col key={favorite.id}>
          {
            'address' in favorite ? 
            (<ContactCard contact={favorite} withLink />) :
            (<GroupContactsCard groupContacts={favorite} withLink />)
          }
        </Col>
      ))}
    </Row>
  );
}
