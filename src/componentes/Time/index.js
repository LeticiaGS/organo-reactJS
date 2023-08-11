import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ corPrimaria, corSecundaria, nome, colaboradores }) => {
  const cssSection = { backgroundColor: corSecundaria }
  const cssNomeSection = { borderColor: corPrimaria }

  return colaboradores.length > 0 ? (
    <section className="time" style={cssSection}>
      <h3 style={cssNomeSection}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map(colaborador => (
          <Colaborador
            key={colaborador.nome}
            corDeFundo={corPrimaria}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  )
}

export default Time

// tudo que eu usar na tag do meu componente, seja uma prop ou um evento, eu acesso ele internamente no componente via props.
