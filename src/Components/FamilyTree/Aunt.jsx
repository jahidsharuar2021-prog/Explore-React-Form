import React from 'react';
import Cousin from './Cousin';
import { use } from 'react';
import { MonyContext } from './FamilyTree';

const Aunt = ({asset}) => {
    const [money,setMoney]=use(MonyContext);

    const handleMoney=()=>{
        setMoney(money+5000);
    }
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin asset={asset} name="Tom Tom"></Cousin>
                <Cousin name="Jo Jo"></Cousin>
                <button onClick={handleMoney}>Add 500 tk</button>
            </section>
        </div>
    );
};

export default Aunt;