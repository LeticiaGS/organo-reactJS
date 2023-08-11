import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = evento => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digiter seu nome"
          valor={nome}
          aoAlterado={nome => setNome(nome)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digiter seu cargo"
          valor={cargo}
          aoAlterado={cargo => setCargo(cargo)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digiter seu endereço da imagem"
          valor={imagem}
          aoAlterado={imagem => setImagem(imagem)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        ></ListaSuspensa>
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Formulario
