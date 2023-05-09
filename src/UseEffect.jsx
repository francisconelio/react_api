import { useEffect,useState } from 'react'
import './App.css'

function useEffectTest() {
  const [nome, setNome] = useState()

  useEffect(()=>{
    console.log('Meu useEffect rodou!')
  }, [nome])

  return (
    <>
      <h1>{nome}</h1>
      <button onClick={e=>setNome('Nélio')}>Atualizar</button>
    </>
  )
}

export default useEffectTest
