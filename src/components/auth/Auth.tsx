import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.css'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser, SkillContextType } from '../../@types/types';
import { SkillContext } from '../context/SkillContext';

const Auth = () => {

  const [login, setLogin] = useState<string>();
  const [pass, setPass] = useState<string>();

  const navigate = useNavigate();

  const context = useContext<SkillContextType>(SkillContext);

  const handleAuth = () => {
    try {
      fetch('http://62.113.104.103:9000/api/users/login', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          login: `${login}`,
          password: `${pass}`
        })
      })
      .then(
        res => {
          if( res.status == 200 ) {
            res.json()
            .then(
              user => {
                  fetch(`http://62.113.104.103:9000/api/users/${login}`)
                  .then(
                    resj => resj.json()
                  )
                  .then(
                    data => { 
                      let user : IUser = {
                        age: data.age,
                        exp: data.exp,
                        first_name: data.first_name,
                        last_name: data.last_name,
                        role: data.role,
                        stack: data.stack,
                        id: data._id
                      };
                      return user
                    }
                  )
                  .then(
                    user => {
                      console.log(user)
                      context.setUser(user)
                    }
                  )
                }
            )
          }
        }
      )
    }
    finally {
      navigate('/')
      
    }
  }

  return(
    <div className='auth'>
      <div className='info'>
        <div className='header'>
          <h1>Авторизация</h1>
        </div>
        <div className='inputs'>
          <TextField id="outlined-basic" label="Логин" variant="outlined" onChange={(e) => setLogin(e.target.value)}/>
          <br />
          <TextField id="outlined-basic" label="Пароль" variant="outlined" type="password" onChange={(e) => setPass(e.target.value)}/>
        </div>
        <Button sx={{ bgcolor: 'green', textTransform: 'none', color: "#fff", mt: 2 }} size='large' onClick={() => handleAuth()}>
          Войти
        </Button>
      </div>
    </div>
  )
}

export default Auth;