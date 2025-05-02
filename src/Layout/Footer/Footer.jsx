import LogoSfondo from '../../assets/images/LogoSfondo.png'
import LogoLR from '../../assets/images/LogoLR.png'
import './Footer.css'

export const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
    <div className='Logos' >
    <img src={LogoLR} alt="Logo La Rioja" width={100} height={40} />
    <img src={LogoSfondo} alt="Logo" width={100}/>
    </div>
    <div style={{ padding: '10px', textAlign: 'righ' }}>
      <h2>Municipalidad de Chamical</h2>
      <p>Dirección: Calle Ejemplo 123, Chamical, La Rioja</p>
      <p>Teléfono: (123) 456-7890</p>
      </div>
      </div>
    </>
  )
}
