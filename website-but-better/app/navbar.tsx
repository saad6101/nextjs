"use client"
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css";
import { createRef, useEffect, useRef } from "react";
import {useState} from 'react';
function handleClick()
{}
function handleSumit() {
  useEffect(() => {
  window.location = 'http://www.google.com/search?q=site:yourdomainname ' && document?.getElementById("searchBox")?.value;
  })
  return false;
}
function NavBar()
{
  const ref = useRef(null);
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    let homeLink = document.getElementById("hello")
  }, []);
    return(
<>
<nav className=" hello navbar navbar-expand-lg navbar-dark bg-dark sticky-top bottom-0 start-0">
  <div>
<div className="container-fluid ">

  <Link href="/" className="navbar-brand "> DPS Srinagar  </Link>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <div className="navbar-nav navbar-nav-scroll">
  <Link href="/" className= "nav-item nav-link active" aria-current="page" onClick={handleClick}> Home  </Link>
  <Link href="/Library" className="nav-item nav-link"> Library   </Link>
  <Link href="/Magazine" className="nav-item nav-link"> School Magazine  </Link>
  <Link href="/Activities" className="nav-item nav-link"> Activites </Link>
  <Link href="/Downloads" className="nav-item nav-link ">Downloads </Link>
  <form className="" onSubmit={home}>
            <input
            id="searchBox"
              type="search"
              className="form-control form-control-dark me-2 h-4 w-4"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

         <div className="text-right">
            <button type="button" className="btn btn-outline-light me-auto pr-4"  >
              Login
            </button>
            </div>
            </div>
            </div>
            </div>
            </div>

</nav>
</>
    )
}
export default NavBar;