import React from 'react'
import LogoSfondo from '../../assets/images/LogoSfondo.png'
import './Header.css'
import ButtonsGroup from '../../Components/Buttons/ButtonsHeader/ButtonGroup'

export const Header = () => {
  return (
    <> 
    <div className='headerContainer' style={{padding: '20px'}}>
      <img className='imgEscudo' src={LogoSfondo} alt="Logo" />
      
      <div style={{ backgroundColor: '#ffff' , padding: '20px', textAlign: 'center' }}>
        <ButtonsGroup/>
      
      </div>

    
    </div>
    </>
  )
}
