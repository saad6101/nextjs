"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import { createRef, useRef } from "react";
import {useState, } from 'react';
import { LinkMenu } from "./LinkMenu";
import { LogInButton } from "./LogInButton";
import { LogoInNav } from "./LogoInNav";
import { BootstrapJsEnter } from "./BootstrapJsEnter";
function handleClick()
{
}
function NavBar()
{

  BootstrapJsEnter();
    return(
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top bottom-0 start-0">
<div className="container-fluid ">
 <LogoInNav/>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <LinkMenu/>
            <LogInButton/>
            </div>
            </div>

</nav>
</>
    )
}
export default NavBar;

