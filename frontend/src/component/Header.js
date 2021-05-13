import React from "react";
import { Box, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";
import './Header.css';


const Header = () => (
  <html lang="ko">
    <head>
   
      <title>Data web</title>
      
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen"></link>
      
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      
    </head>
    <body>
    <header class="header">
    <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container"><a href="#" class="navbar-brand text-uppercase font-weight-bold">Logo. ForMinutes</a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
            
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a href="#" class="nav-link text-uppercase font-weight-bold">Home <span class="sr-only">(current)</span></a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">How To Use</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Post</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
    <div class="container">
    <div class="pt-5 text-white">
        <header class="py-5 mt-5">
            <h1 class="display-4">For Minutes</h1>
            <div class="row d_flex">
            <div class="col-md-3">
            <p class="lead mb-0">service </p>
            <p class="lead mb-0">introduction
                <a href="https://bootstrapious.com" class="text-white"></a>
            </p>
            </div>
            <div class="col-md-7">
            <p>
            <img src="https://c8.alamy.com/comp/J268YD/isometric-notebook-laptop-design-icon-illustration-J268YD.jpg" width="30%" height="30%"></img>
            </p>
            </div>
            </div>
            <br></br>
            <div class="button-4">
            <div class="eff-4"></div>
            <a href="#"> Get Started </a>
        </div>
        <br></br>
        </header>
        
    </div>
</div>
    </body>
</html>
);

export default Header;
