import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ButtonMunicipio from '../ButtonMunicipio/ButtonMunicipio';
import ButtonSecre from '../ButtonSecre/ButtonSecre';
import { useNavigate } from 'react-router-dom';
import { ButtonInicio } from '../ButtonInicio/ButtonInicio';



export default function ButtonsGroup() {

  const navigate = useNavigate();
  const rentas = () => {
    navigate('/rentas');
  }

    return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
         <ButtonGroup variant="text" aria-label="Basic button group">
        <ButtonInicio/>
        <ButtonMunicipio/>
        <Button>CONSEJO</Button>
        <ButtonSecre/>
        <Button onClick={rentas}>GUIA DE TRAMITES</Button>
        <Button>NOVEDADES</Button>
        <Button>AGENDA</Button>
        <Button>TURISMO</Button>
      </ButtonGroup>
    </Box>
  );
}
