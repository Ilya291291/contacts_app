import React, {memo} from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';
import{ContactDto} from 'src/types/dto/ContactDto';
import {RootState} from 'src/store/store';
import {addToFavorites, removeFromFavorites} from 'src/store/favorit/favoriteSlice'
import {useDispatch, useSelector} from 'react-redux';

interface GroupContactsCardProps {
  groupContacts: GroupContactsDto,
  withLink?: boolean
}

export const GroupContactsCard = memo<GroupContactsCardProps>(({
    groupContacts,
    groupContacts: {
      id,
      name,
      description,
      photo,
      contactIds
    }, withLink
  }) => {
        const dispatch = useDispatch();
        const isFavorite:(ContactDto | GroupContactsDto | undefined) = useSelector((state: RootState) => 
        state.favorites.favorites.find(fav => fav.id === id)
      );
    
      const toggleFavorite = () => {
        if (isFavorite) {
          dispatch(removeFromFavorites(id));
        } else {
          dispatch(addToFavorites(groupContacts));
        }
      };
    return (
      <Card key={id}>
        <Card.Header>
          {withLink ? <Link to={`/groups/${id}`}>{name}</Link> : name}
        </Card.Header>
        <Card.Body>{description}</Card.Body>
        <Card.Img variant="top" src={photo} />
        <Card.Footer>Contacts: {contactIds && contactIds.length}</Card.Footer>
        <Button 
          onClick={toggleFavorite}
          style={ isFavorite ? { backgroundColor: 'red' } : { backgroundColor: 'green' }}
        >
            {isFavorite ? '★ Убрать из избранного' : '☆ Добавить в избранное'}
        </Button>
      </Card>
    );
  }
)
