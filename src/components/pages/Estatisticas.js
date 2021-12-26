import React, {useContext} from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { DoencaContext } from '../common/Doenca';

export default function Estatisticas(){
  
  const { formState } = useContext(DoencaContext);

  return(
    <>
    <Navbar/>
    {JSON.stringify(formState)}
    <Footer/>
    </>
  )
}