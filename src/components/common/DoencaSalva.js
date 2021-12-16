import React from 'react';
import './DoencaSalva.scss';

export default function DoencaSalva({data, nome}){
  return(
    <div className='salvo'>
      <p className='data'>{data}</p>
      <h1 className='doenca'>{nome}</h1>
    </div>
  )
}