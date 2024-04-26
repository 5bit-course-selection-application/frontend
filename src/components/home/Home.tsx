import Sidebar from '../sidebar/Sidebar';
import './style.css'

const Home = () => {
  return(
    <div className='container'>
      <Sidebar name="Artjom" surname="Safonov" highlight={0}/>
      <div className='home'>
        <div className='info'>
          <h1># SkillSync </h1>
          <h2>## Какой-то текст </h2>
        </div>
      </div>
    </div>
  )
}

export default Home;