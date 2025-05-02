import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const ButtonInicio = () => {
    const navigate = useNavigate();
    const Inicio = () =>{

        navigate ('/');

    }
  return (
    <>
    <Button onClick={Inicio}>Inicio</Button>
    </>
  )
}
