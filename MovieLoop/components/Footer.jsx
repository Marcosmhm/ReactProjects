import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <>
      <footer>
        <span>&#169; 2023 Marcos Henrique de Moraes</span>
        <span>Designed by <a href="https://github.com/jasonujmaalvis" target="_blank">Jason Ujma-Alvis</a> and built by me</span>
        <span>Data provided by <a href="https://www.themoviedb.org" target="_blank">TMDB</a></span>
        <span className='personal-links'>
          <a href="https://www.linkedin.com/in/marcoshenriquem/" target="_blank"><BsLinkedin /></a>
          <a href="https://github.com/Marcosmhm" target="_blank"><BsGithub /></a>
          </span>
      </footer>
    </>
  )
}