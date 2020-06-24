import styled from 'styled-components';
import { Props } from '.';
import { Add, Explore } from 'styled-icons/material';

export const AddButton = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    margin-bottom: 8px;
    background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
    cursor: pointer;
    position: relative;
    border-radius: 50%;


    transition: border-radius .2s, background-color .2s;

    &.active, &:hover{
        border-radius: 16px;
        background-color: ${props=> props.isHome ? 'var(--rocketseat)': 'var(--online)'}
    }
`;

export const AddServer = styled(Add)`
    width: 34px;
    color: #3cB370;
    cursor: pointer;
    height: 34px;
    transition: color .2s;
    &:hover{
        color: var(--white);
    }
`;

export const ExploreServer = styled(Explore)`
    width: 30px;
    color: #3cB370;
    cursor: pointer;
    height: 30px;
    transition: color .2s;
    &:hover{
        color: var(--white);
    }
`;