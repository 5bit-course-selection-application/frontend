import Sidebar from '../sidebar/Sidebar';
import CourseCard from '../ui/CourseCard';
import Button from '@mui/material/Button';
import './style.css'

const Analysis = () =>
{
  return(
    <div className='container'>
    <Sidebar name="Artjom" surname="Safonov" highlight={3}/>
    <div className='analysis'>
      <div className='info'>
        <div className='vac'>
          <a>Бокс с вакансией</a>
        </div>
        <div className='gallery'>
          <CourseCard title="Фуллстак за 5 дней" info="Вау!" spec="Fullstack"/>
          <CourseCard title="React всего за {dayCount} дней" info="Реакт и реакт и рекат..." spec="React Frontend Web"/>
          <CourseCard title="Только для умных" info="Based and red pilled" spec="C C++ D Rust"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Analysis;