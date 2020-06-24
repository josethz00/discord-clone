import React from 'react';
import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';


const ServerName : React.FC = ()=>{
    return(
        <Container>
            <Category>
                <span>Canais de Texto</span>
                <AddCategoryIcon />
            </Category>
            <ChannelButton selected channelName="chat-livre" />
            <ChannelButton channelName="trabalhos" />
            <ChannelButton channelName="games" />
            <ChannelButton channelName="pictures" />
            <ChannelButton channelName="ajuda" />
        </Container>
    )
}

export default ServerName;