import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Secretarias() {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button variant="contained" size="medium">
          Turismo y Cultura
        </Button>
        <Button variant="contained" size="medium">
          Deporte y Juventud
        </Button>
        <Button variant="contained" size="medium">
          Gobierno
        </Button>
        <Button variant="contained" size="medium">
          Hacienda e Ingresos Públicos
        </Button>
        <Button variant="contained" size="medium">
          Obras y Servicios Públicos
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
      </div>
    </Box>
  );
}
