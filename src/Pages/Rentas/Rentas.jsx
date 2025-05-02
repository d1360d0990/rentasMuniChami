import React from "react";
import { Header } from "../../Layout/Header/Header";
import AlertRent from "../../Components/AlertRent/AlertRent";
import Secretarias from "../../Components/Secretarias/Secretarias";
import "./Rentas.css";

export const Rentas = () => {
  return (
    <>
      <Header />
      <div className="Container">
        <AlertRent />
        <Secretarias />
      </div>
      <div>
        TRAMITES
        <div>guia de tramites</div>
      </div>
    </>
  );
};
