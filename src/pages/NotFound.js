import './NotFound.css'
import photokapot from '../assets/2.png'
import koleso1 from '../assets/3.png'


export default function NotFound() {
  return (
    <div className='NotFound'>
        <h1 class="neonText">
          404
        </h1>
        <h2 class="notfound">Page Not Found</h2> 
      <div className='car'>
        <img class="kapot" src={photokapot} alt="kapot" />
        <img src={koleso1} class="koleso" alt='kolesoleft' />
        <img src={koleso1} class="koleso koleso-left" alt='colesoright' />
      </div>

    </div>
  )
}