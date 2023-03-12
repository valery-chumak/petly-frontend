import {
  CardFriend,
  FriendName,
  FriendContent,
  FriendContentList,
  FriendLogo,
  FriendContentItemTime,
  FriendContentItemWorkTime,
  FriendLogoImg,
  AdressLink,
  ListDropmenu,
  FriendContentItemTimeEmpty,
} from '../OurFriendItem/OurFriensItem.styled';

const fish = '----------------------------';

function OurFriensItem({
  _id,
  name,
  logo,
  url,
  addressUrl,
  adress,
  email,
  phone,
  worktime,
}) {
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const d = new Date();
  const n = d.getDay();
  const today = days[n - 1];

  const TelTo = () => {
    const telNumber = phone.replace(/[^0-9+]/g, '');
    const str = `tel:  ${telNumber}`;
    return <AdressLink href={str}>{phone}</AdressLink>;
  };
  const EmailTo = () => {
    const emailStr = `mailto: ${email}`;

    return <AdressLink href={emailStr}>{email}</AdressLink>;
  };

  let timeList = [];
  worktime.toString() === ''
    ? timeList.push('', '', '', '', '', '', '')
    : (timeList = [...worktime]);

  const listDropmenu = timeList.map((time, i) => (
    <ListDropmenu key={i} isToday={days[i] === today}>
      <p>{days[i]}</p>
      {time === '' ? <p>Зачинено</p> : <p>{time}</p>}
    </ListDropmenu>
  ));

  return (
    <li key={_id}>
      <CardFriend>
        <FriendName href={url} target="_blank">
          {name}
        </FriendName>
        <FriendContent>
          <FriendLogo>
            <FriendLogoImg src={logo} alt="Логотип" />
          </FriendLogo>
          <FriendContentList>
            <li>
              {worktime.toString() === '' ? (
                <FriendContentItemTimeEmpty>
                  Time: <br />
                  {fish}
                </FriendContentItemTimeEmpty>
              ) : (
                <FriendContentItemTime>
                  Time:
                  <br />
                  {timeList[n - 1]}
                  <FriendContentItemWorkTime>
                    <ul>{listDropmenu}</ul>
                  </FriendContentItemWorkTime>
                </FriendContentItemTime>
              )}
            </li>
            <li>
              <p>
                Address:
                <br />
                {adress ? (
                  <AdressLink href={addressUrl} target="_blank">
                    {adress}
                  </AdressLink>
                ) : (
                  fish
                )}
              </p>
            </li>
            <li>
              <p>
                Email:
                <br /> {email ? <EmailTo /> : fish}
              </p>
            </li>
            <li>
              <p>
                Phone:
                <br /> {phone ? <TelTo /> : fish}
              </p>
            </li>
          </FriendContentList>
        </FriendContent>
      </CardFriend>
    </li>
  );
}

export default OurFriensItem;
