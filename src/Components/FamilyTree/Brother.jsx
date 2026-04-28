import React, { use, useContext } from 'react';
import { MonyContext } from './FamilyTree';

const Brother = () => {
    const [money,setMoney]=useContext(MonyContext);
    return (
        <div>
            <h3>Brother</h3>
            <button onClick={()=>setMoney(money+1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Brother;