import './style.css';
import { Box, Button, TextField } from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';

import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import PersonIcon from '@mui/icons-material/Person';

interface ISidebarProps {
  highlight: number;
  name: string;
  surname: string;
}

const Sidebar = ({highlight, name, surname} : ISidebarProps) => {
  const navigate = useNavigate()

  function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return(
    <div className='sidebar'>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mt: '15px', color: '#fff'}}>
        <Avatar {...stringAvatar(name + " " + surname)}/>
        <a style={{ marginLeft: '10px' }}>{name}</a>
        <a style={{ marginLeft: '5px' }}>{surname}</a>
      </Box>

      {/* <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Поиск..." variant="standard" />
      </Box> */}

      <Button 
        variant={ highlight === 0 ? "contained" : "text"} 
        sx={{ marginTop: '50%' }} 
        onClick={() => navigate('/')}
      >
        <HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        Главная
      </Button>
      <Button 
        variant={ highlight === 1 ? "contained" : "text"}
        onClick={() => navigate('/user')}
      >
        <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        Личный кабинет
      </Button>
      <Button 
        variant={ highlight === 2 ? "contained" : "text"}
        onClick={() => navigate('/catalogue')}
      >
        <LayersIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        Каталог
      </Button>
      <Button 
        variant={ highlight === 3 ? "contained" : "text"}
        onClick={() => navigate('/analysis')}
      >
        <WorkHistoryIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        Анализ вакансий
      </Button>

      <div className='footer'>
        <Button variant="outlined"> 
          <LogoutIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          Выйти 
        </Button>
      </div>

    </div>
  )
}

export default Sidebar;