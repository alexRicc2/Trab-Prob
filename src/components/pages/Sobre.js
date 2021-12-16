import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import './Sobre.scss';

export default function Sobre() {
  return (
    <>
      <Navbar />
      <section className='secaoSobre'>
        <h1 className='page'>Sobre</h1>
        <p className='title'>Os seus dados blabla informaçoes, a melhor ferramenta blabla</p>
        <p className='text'>lorem lorem lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mauris sapien. Vivamus suscipit volutpat mauris molestie tristique. Donec pellentesque nisi eu turpis maximus, non mattis enim luctus. Mauris dictum pellentesque molestie. Donec tempus mauris est, in pharetra nunc posuere vel. Donec vel felis gravida, ullamcorper justo id, interdum neque. </p>

        <p className='text'>lorem lorem lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mauris sapien. Vivamus suscipit volutpat mauris molestie tristique. Donec pellentesque nisi eu turpis maximus, non mattis enim luctus. Mauris dictum pellentesque molestie. Donec tempus mauris est, in pharetra nunc posuere vel. Donec vel felis gravida, ullamcorper justo id, interdum neque. </p>

        <p className='text'>lorem lorem lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mauris sapien. Vivamus suscipit volutpat mauris molestie tristique. Donec pellentesque nisi eu turpis maximus, non mattis enim luctus. Mauris dictum pellentesque molestie. Donec tempus mauris est, in pharetra nunc posuere vel. Donec vel felis gravida, ullamcorper justo id, interdum neque. </p>

      </section>
      <Footer/>
    </>
  )
}