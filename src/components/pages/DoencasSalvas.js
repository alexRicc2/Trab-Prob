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
  const covid = {
    nome: "Covid-19",
    mortalidade: "1.2",
    taxa: "1.2",
    tempoAgevetor: "8",
    tempoTornaVetor: "2"
  }
 
  console.log(doencas)
  return(
    <>
    <Navbar/>
    <section className='secaoDoencas'>
      <DoencaSalva 
        data="20/01/2001" 
        nome="Covid-19" 
        doenca={covid}
        className="secaoDoencas__card"
        click={true}
      />
      {doencas.map( (doenca,id) => 
      (<DoencaSalva click={true}
          key={id} 
          nome={doenca.nome} 
          data={ ajustaData(doenca.data)}
          doenca={doenca}
          className="secaoDoencas__card"
        />))}
    </section>
    <Footer className="secao-doencas-footer"/>
    </>
  )
}