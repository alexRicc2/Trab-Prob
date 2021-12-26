import React, {useContext} from 'react';
import './DoencaSalva.scss';
import { DoencaContext } from './Doenca';

export default function DoencaSalva({data, nome, doenca}){
 
  const { doencaSalva } = useContext(DoencaContext);

  return(
    <button className='salvo' onClick={() => doencaSalva(doenca)}>
      <p className='data'>{data}</p>
      <h1 className='doenca'>{nome}</h1>
    </button>
  )
}