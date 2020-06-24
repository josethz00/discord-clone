import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
  Status
} from './styles';

export interface Props{
    status?: string; 
}

const UserInfo: React.FC<Props> = ({status}) => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <Status className={status ? 'online' : ''} />
        <UserData>
          <strong>j03</strong>
          <span>#2681</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;