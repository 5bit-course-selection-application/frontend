import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

interface ICardProps {
  title: string;
  info: string;
  spec: string;
}

const CourseCard = ({title, info, spec} : ICardProps) => {

  return(
    <Card variant="outlined" sx={{ width: '250px', height: 'fit-content' }}>
      <CardContent sx={{ height: '280px' }}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <br />
        <Typography variant="body2">
          {info}
        </Typography>
        <br />
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {spec.split(/[ ,]+/).map((tag, index) => {
            <Chip key={index} />
          })}
        </Typography> */}
        <div>
          {spec.split(/[ ,]+/).map((tag, index) => {
            return <Chip key={index} label={tag} variant='outlined' sx={{ mr: '5px' }}/>
          })}
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Узнать больше</Button>
      </CardActions>
    </Card>
  )
}

export default CourseCard;