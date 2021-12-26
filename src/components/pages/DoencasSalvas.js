import React, { useState} from 'react';
import DoencaSalva from '../common/DoencaSalva';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

import './DoencasSalvas.scss';
export default function DoencasSalvas(){

  const [doencas, ] = useState(JSON.parse(localStorage.getItem('doencas')) || [])
  

  const ajustaData = (data) => {
    const auxData = new Date(data);
    return auxData.toLocaleDateString("pt-BR")
  }
 
  console.log(doencas)
  return(
    <>
    <Navbar/>
    <section className='secaoDoencas'>
      <DoencaSalva data="20/01/2001" nome="faminiase"/>
      {doencas.map( (doenca,id) => 
      (<DoencaSalva 
          key={id} 
          nome={doenca.nome} 
          data={ ajustaData(doenca.data)}
          doenca={doenca}
        />))}
    </section>
    <Footer/>
    </>
  )
}