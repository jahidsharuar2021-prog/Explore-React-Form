import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import "./familyTree.css"


  export const MonyContext=createContext(0);
export const AssetContext=createContext('');

const FamilyTree = () => {

    const [money, setMoney]=useState(0);
    const asset='diamond';
    const newAsset='gold';
    
    return (
      <div className="family-tree">
        <h2>Family Tree</h2>
        <h4>Total Family Money:{money}</h4>
        <MonyContext value={[money,setMoney]}>
          <AssetContext.Provider value={newAsset}>
            <Grandpa asset={asset}></Grandpa>
          </AssetContext.Provider>
        </MonyContext>
      </div>
    );
};

export default FamilyTree;




// 1.create a context using createContext with a default value
// make sure you export the context to be used in other fill