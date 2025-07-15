import {ContactDto} from 'src/types/dto/ContactDto';
import {Button, Card, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { favoriteStore } from 'src/store/favorite/favorite';
// import {useDispatch, useSelector} from 'react-redux';
// import { addToFavorites, removeFromFavorites } from 'src/store/favorit/favoriteSlice'

interface ContactCardProps {
  contact: ContactDto,
  withLink?: boolean
}

export const ContactCard = observer<ContactCardProps>(({
    contact,
    contact: {
      photo,
      id,
      name,
      phone,
      birthday,
      address
    }, withLink
  }) => {

    // const dispatch = useDispatch();
  //   const isFavorite: (ContactDto | GroupContactsDto | undefined) = useSelector((state: RootState) => 
  //   state?.favorites.favorites.find(fav => fav.id === id)
  // );

  const isFavorite = favoriteStore.favorites.find(fav => fav.id === id)

  const toggleFavorite = () => {
    if(isFavorite) {
      favoriteStore.removeFromFavorites(id)
    } else {
      favoriteStore.addToFavorites(contact)
    }
  }
  // const toggleFavorite = () => {
  //   if (isFavorite) {
  //     dispatch(removeFromFavorites(id));
  //   } else {
  //     dispatch(addToFavorites(contact));
  //   }
  // };

    return (
      <Card key={id}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>
            {withLink ? <Link to={`${id}`}>{name}</Link> : name}
          </Card.Title>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item><Link to={`tel:${phone}`} target="_blank">{phone}</Link></ListGroup.Item>
              <ListGroup.Item>{birthday}</ListGroup.Item>
              <ListGroup.Item>{address}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Button 
            onClick={toggleFavorite}
            style={ isFavorite ? { backgroundColor: 'red' } : { backgroundColor: 'green' }}
          >
              {isFavorite ? '★ Убрать из избранного' : '☆ Добавить в избранное'}
          </Button>
        </Card.Body>
      </Card>
    );
  }
)
