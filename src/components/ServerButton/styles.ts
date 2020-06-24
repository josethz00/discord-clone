import styled from 'styled-components';
import { Props } from '.';

export const Button = styled.button<Props>`
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

    >img{
        width: 24px;
        height: 24px;
    }

    &::before{
        width: 9px;
        height: 9px;
        position: absolute;
        left: -15px;
        top: calc(50% - 4.5px);
        background-color: var(--white);
        border-radius: 50%;
        content: '';
        display: ${props=> props.hasNotifications ? 'inline' : 'none'};
    }
    &::after{
        background-color: var(--notification);
        width: auto;
        padding: 0 4px;
        position: absolute;
        border-radius: 12px;
        bottom: -4px;
        right: -4px;
        border: 4px solid var(--quaternary);
        text-align: right;
        font-size: 13;
        font-weight: bold;
        color: var(--white);
        content: '${props=>props.mentions && props.mentions}';
        display: ${props=> props.mentions && props.mentions > 0 ? 'inline' : 'none'}
    }

    transition: border-radius .2s, background-color .2s;

    &.active, &:hover{
        border-radius: 16px;
        background-color: ${props=> props.isHome ? 'var(--rocketseat)': 'var(--discord)'}
    }
`;
