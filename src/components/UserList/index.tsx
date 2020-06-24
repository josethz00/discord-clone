import React from 'react';
import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow : React.FC<UserProps> = ({ nickname, isBot })=>{

    return(
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    );

}

const UserList  : React.FC = ()=>{

    return(
        <Container>
            <Role>
                Disponível - 3
            </Role>
            <UserRow nickname="j03" />
            <UserRow nickname="Guilherme Rodz" />
            <UserRow nickname="UI Robot" />
            
            <Role>
                Offline - 18
            </Role>
            <UserRow nickname="Diego Fernandes" isBot />
            <UserRow nickname="Godofredo Alves Robson Filho" isBot />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" isBot />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" isBot />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
        </Container>
    )
}

export default UserList;