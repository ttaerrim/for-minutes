import React from "react";
import { Text, Box } from "gestalt";
import "gestalt/dist/gestalt.css";
import "./Footer.css";

const Footer = () => (
  <html>
    <head>
      <title>Footer</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
      ></link>
      <link rel="stylesheet" href="assets/css/style.css"></link>
    </head>

    <body>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#!">Web design</a>
                  </li>
                  <li>
                    <a href="#!">Development</a>
                  </li>
                  <li>
                    <a href="#!">Hosting</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#!">Company</a>
                  </li>
                  <li>
                    <a href="#!">Team</a>
                  </li>
                  <li>
                    <a href="#!">Careers</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 item text">
                <h3>For Minutes</h3>
                <p>"For Minutes" is summary minutes service.</p>
              </div>
              <div class="col item social">
                <a href="#!">
                  <i class="icon ion-social-facebook"></i>
                </a>
                <a href="#!">
                  <i class="icon ion-social-twitter"></i>
                </a>
                <a href="#!">
                  <i class="icon ion-social-snapchat"></i>
                </a>
                <a href="#!">
                  <i class="icon ion-social-instagram"></i>
                </a>
              </div>
            </div>
            <p class="copyright">For-Minutes © 2021</p>
          </div>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </body>
  </html>
);
export default Footer;