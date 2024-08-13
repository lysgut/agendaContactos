import React from 'react'
import './App.css'
import { useState } from 'react'


function App() {
  const [nombre, setNombre] = useState('')
  const [contactos, setContactos] = useState([])
  const [num, setNum] = useState(0)

const updateNombre = (input) => {
  setNombre(input.target.value)
  console.log(nombre)
}

const updateNum = (input) => {
  setNum(input.target.value)
  console.log(num);

}

const agendar = () => {
  setContactos([...contactos, {nombre: nombre, num: num}])
  console.log('agendados');
  console.log(contactos)

}


  return (
    <>
      <h1>Agendar contactos</h1>
      <div className="containerInput">
        <input onChange={updateNombre} type="text" />
        <input onChange={updateNum} type="number" />
      </div>
      <button onClick={agendar}> + </button>
      <div className="contactList">
        <h2>Lista de Contactos</h2>
        <ul>
          {contactos.map((contacto, index) => (
            <li key={index}>
              <span>{contacto.nombre}: {contacto.num}</span>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App
