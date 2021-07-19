import React from "react";
//import { Link } from "react-router-dom";
import { Heading, Text,Link,Table,Box} from "gestalt";
import "gestalt/dist/gestalt.css";
import './Navigation.css';



const Navigation = () => {
  return (
    <Text align="center" color="gray">
      <Heading size="samll" color="gray">
     
      <div className="navigation"> 
      
      
      {/* <Link href="/" hoverStyle= 'none' tapStyle= 'compress'> Home </Link>
      <Link href="/minutes" hoverStyle= 'none' tapStyle= 'compress'> MinutesList </Link>
      <Link href="/post" hoverStyle= 'none' tapStyle= 'compress'> Post </Link> */}
      
      <Table.Row>
      <Table.Cell>
        <Link href="/"  hoverStyle= "none" tapStyle= 'compress'> Home </Link>
      </Table.Cell>
      <Table.Cell>
        <Link href="/minutes" hoverStyle= "none" tapStyle= 'compress'> MinutesList </Link>
      </Table.Cell>
      <Table.Cell>
        <Link href="/post" hoverStyle= "none" tapStyle= 'compress'> Post </Link>
      </Table.Cell>
     
    </Table.Row>
      </div>
 
      </Heading>
      </Text>
    // <html>
      
    // <body>
    //     <div>
    //         <div class="header-dark">
    //             <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
    //                 <div class="container"><a class="navbar-brand" href="/"></a><img src={logo} width='8%'/><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
    //                     <div class="collapse navbar-collapse"
    //                         id="navcol-1">
    //                         <ul class="nav navbar-nav">
    //                             <li class="nav-item" role="presentation"><a class="nav-link" href="/">Home</a></li>
    //                             <li class="nav-item" role="presentation"><a class="nav-link" href="/minutes">MinutesList</a></li>
    //                             <li class="nav-item" role="presentation"><a class="nav-link" href="/post">Post</a></li>
    //                         </ul>
    //                         </div>
    //                         </div>
    //             </nav>
    //             </div>
    //             </div>
    //             </body>
    // </html>
    
  );
};

export default Navigation;