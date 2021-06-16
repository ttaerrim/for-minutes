import React from "react";
import "gestalt/dist/gestalt.css";
import './Footer.css';

const Footer = () => (
  <html>

<body>
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#!">Web design</a></li>
                            <li><a href="#!">Development</a></li>
                            <li><a href="#!">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#!">Company</a></li>
                            <li><a href="#!">Team</a></li>
                            <li><a href="#!">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>For Minutes</h3>
                        <p>"For Minutes" is summary minutes service.</p>
                    </div>
                    
                </div>
                <p class="copyright">For-Minutes © 2021</p>
            </div>
        </footer>
    </div>
   


</body>

</html>
  
);
export default Footer;