import React from 'react';
//import './App.css';
//import '../styles/Navbar.css';
import '../styles/global.css';

class Page extends React.Component{

render(){

return(
    <div style={{width: "70%"}, {textAlign: "center"}}>
        <div style={{width: "66%"}, {margin: "auto"}, {display: "block"} }>
            <h1>{this.props.title}</h1>
            <h2 style={{color: "rgb(150, 150, 150)"}}><i>{this.props.subtitle}</i></h2>
        </div>
    </div>
)
}

}

export default Page