import { useDispatch } from 'react-redux';
import { deletePet } from '../../redux/auth/authOperations';
import deleteIcon from '../../img/delete-icon.svg';

import {
  PetItem,
  PetImage,
  ListInfo,
  ListInfoItem,
  DeleteIcon,
  DeleteImage,
} from './PetsItem.styled';

export default function PetsItem({
  id,
  avatar,
  name,
  birthdate,
  breed,
  comments,
}) {
  const dispatch = useDispatch();

  const newDate = new Date(birthdate).toLocaleString().split(',')[0];
  return (
    <>
      <PetItem>
        <PetImage src={avatar.url} alt={name} />
        <ListInfo>
          <ListInfoItem>Name: {name}</ListInfoItem>
          <ListInfoItem>Date of birth: {newDate}</ListInfoItem>
          <ListInfoItem>Breed: {breed}</ListInfoItem>
          <ListInfoItem>Comments: {comments}</ListInfoItem>
        </ListInfo>
        <DeleteIcon onClick={() => dispatch(deletePet(id))}>
          <DeleteImage src={deleteIcon} alt="Delete Icon" />
        </DeleteIcon>
      </PetItem>
    </>
  );
}
