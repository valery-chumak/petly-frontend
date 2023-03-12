import PropTypes from 'prop-types';

import OurFriensItem from '../OurFriendItem/OurfriensItem';
import { FriendsList } from './OurFriendList.styled';

export const FriendList = ({ friends }) => {
  const elements = friends.map(
    ({ _id, name, logo, url, addressUrl, adress, email, phone, worktime }) => (
      <OurFriensItem
        key={_id}
        name={name}
        logo={logo}
        url={url}
        addressUrl={addressUrl}
        adress={adress}
        email={email}
        phone={phone}
        worktime={worktime}
      />
    )
  );
  return <FriendsList>{elements}</FriendsList>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
      addressUrl: PropTypes.string,
      logo: PropTypes.string.isRequired,
      worktime: PropTypes.array.isRequired,
      adress: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
