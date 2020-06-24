import React from 'react';
import { AddButton, AddServer, ExploreServer } from './styles';

export interface Props{
    selected?: boolean;
    isHome?: boolean;
    classification?: string;
}

const AddServerButton : React.FC<Props> = ({
    selected,
    isHome,
    classification
})=>{
    return(
        <AddButton
            isHome={isHome}
            className={selected ? 'active' : ''}
        >
            {
                classification === 'Add' ? <AddServer /> : <ExploreServer />
            }
        </AddButton>
    );  
};

export default AddServerButton;