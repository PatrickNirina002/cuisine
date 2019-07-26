import React, { Component } from 'react';

class Bienvenue extends Component {
    render() {
        return (
            <div>
                <p>Bienvenue sur la site cuisine  ,</p><span>{localStorage.getItem('anarana')}</span>
               <span>  vous êtes l'admin de cette page afin de partager votre atelier</span>
            </div>
        );
    }
}

export default Bienvenue;