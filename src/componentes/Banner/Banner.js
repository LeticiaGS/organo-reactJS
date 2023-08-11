import './Banner.css'

export const Banner = () => {
  //JSX é como o react lê isso, e converte e insere este elemento no DOM.
  return (
    <header className='banner'>
    <img src="/imagens/banner.png" alt="O banner principal da página do Organo"></img>
    </header>
  )
}
