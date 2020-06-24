import React from 'react';
import ServerButton from '../ServerButton/';
import AddServerButton from '../AddServerButton/';
import { Container, Separator } from './styles';
const ServerList : React.FC = ()=>{
    return(
        <Container>
            <ServerButton isHome />
            <Separator />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton mentions={7} />
            <ServerButton mentions={93} />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={3} />
            <ServerButton mentions={3} />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <AddServerButton classification="Add" />
            <AddServerButton />
        </Container>
    );
};

export default ServerList;