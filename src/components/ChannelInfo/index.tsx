import React from 'react';
import { Container, Title, HashtagIcon, Separator, Description } from './styles';


const ChannelList : React.FC = ()=>{
    return(
        <Container>
                <HashtagIcon />
                <Title>
                    Episódio 1 - Kangurucast
                </Title>
                <Separator />
                <Description>Canal para debates do podcast</Description>
        </Container>
    )
}

export default ChannelList;