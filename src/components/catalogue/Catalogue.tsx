import Sidebar from '../sidebar/Sidebar';
import CourseCard from '../ui/CourseCard';
import Button from '@mui/material/Button';
import './style.css'

const Catalogue = () =>
{
  return(
    <div className='container'>
    <Sidebar name="Artjom" surname="Safonov" highlight={2}/>
    <div className='catalogue'>
      <div className='filters'>
        <Button variant='outlined'>По моему профилю</Button>
        <Button variant='outlined'>По популярности</Button>
        <Button variant='outlined'>По вакансии</Button>
      </div>
      <div className='gallery'>
        <CourseCard title="Фуллстак за 5 дней" info="Вау!" spec="Fullstack"/>
        <CourseCard title="React всего за {dayCount} дней" info="Реакт и реакт и рекат..." spec="React Frontend Web"/>
        <CourseCard title="Только для умных" info="Based and red pilled" spec="C C++ D Rust"/>
      </div>
    </div>
  </div>
  )
}

export default Catalogue;