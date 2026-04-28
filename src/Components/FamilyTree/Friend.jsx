import React from 'react';
import { use } from 'react';
import { MonyContext } from './FamilyTree';

const Friend = () => {
    const [money,setmoney] =use(MonyContext);
    return (
        <div>
            <h3>Friend</h3>
            <p>Family got money:{money}Tk</p>
        </div>
    );
};

export default Friend;