import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { colors } from "@mui/material";

export default function AlertRent() {
  return (
    <>
          <div
        style={{
          backgroundColor: "rgb(202, 231, 206)",
          padding: "20px",
          marginBottom: "50px",
          position: "relative",
        }}
      >
        <p style={{ color: "rgb(5, 92, 56)" }}>
          Imprime tu deuda de Rentas desde la comodidad de tu hogar
        </p>

        <p style={{ color: "rgb(42, 54, 14)" }}>
          Desde aquí podes consultar el estado de tus obligaciones municipales y
          llevar un control de tus pagos realizados o pendientes, de las tasas
          municipales y cuotas de planes vigentes
        </p>
      </div>

        


    </>
  );
}
