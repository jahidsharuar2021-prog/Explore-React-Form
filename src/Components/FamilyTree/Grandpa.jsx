import React from 'react';
import Uncle from './Uncle';
import Dad from './Dad';
import Aunt from './Aunt';
import "./FamilyTree.css"

const Grandpa = ({ asset }) => {
  return (
    <div>
      <h3>Grand pa</h3>
      <section className="flex">
        <Dad asset={asset}></Dad>
        <Uncle></Uncle>
        <Aunt asset={asset}></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;