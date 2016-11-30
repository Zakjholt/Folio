import React, {Component} from 'react';

import JourneymanPhoto from '../images/Journeyman.png'
import SportsballPhoto from '../images/Sportsball.png'
import PupPalPhoto from '../images/PupPal.png'
import GivrPhoto from '../images/Givr.png'

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            selectedItem: 1,
            portfolio: [
                {
                    name: 'Givr',
                    description: 'Givr is designed to help users find ways to contribute to their local communities. The app is simply a tool to query OrgHunter\'s API to find non-profits in and around a provided zip-code. Users are then provided with external links to learn more about each non-profit.',
                    photo: GivrPhoto,
                    hostedUrl: 'https://zakjholt.github.io/givr/',
                    codeUrl: 'https://github.com/Zakjholt/givr',
                    tech: [
                        'HTML', 'CSS', 'jQuery', 'AJAX'
                    ],
                    id: 1
                }, {
                    name: 'PupPal',
                    description: 'PupPal is an app built with new dog owners in mind. Users can track their pet\'s progress with daily trick counters, and log mealtimes for future reference. Users can then opt to receive a Twilio SMS reminder to let their dog out 20 minutes after logging a mealtime. Users are also given a reference section for estimated vaccination and grooming schedules.',
                    photo: PupPalPhoto,
                    hostedUrl: 'https://mighty-tundra-10914.herokuapp.com/',
                    codeUrl: 'https://github.com/Zakjholt/pup_pal',
                    tech: [
                        'HTML',
                        'CSS',
                        'jQuery',
                        'ExpressJS',
                        'MongoDB and Mongoose',
                        'Node.js',
                        'AJAX'
                    ],
                    id: 2
                }, {
                    name: 'Sportsball',
                    description: 'Sportsball is an app to help the not-so-sports-savvy person enjoy new sports. Users begin by choosing one of four sports (Football, Hockey, Basketball, and Baseball). They are then shown all games scheduled for the current date with current scores. Upon choosing a game to follow users can see the score, along with a newbie\'s guide to the sport.',
                    photo: SportsballPhoto,
                    hostedUrl: 'http://sports-ball.herokuapp.com/',
                    codeUrl: 'https://github.com/Zakjholt/Sports-Ball',
                    tech: [
                        'HTML', 'CSS', 'React and Redux', 'AJAX', 'Webpack with Babel'
                    ],
                    id: 3
                }, {
                    name: 'Journeyman',
                    description: 'Journeyman is a companion app for plotting road trips. Users can login, plot, save and load routes, get gas usage estimates, and see Foursquare top nightlife results in each city. Users can favorite these venues for future referencing.',
                    photo: JourneymanPhoto,
                    hostedUrl: 'https://journeyman-app.herokuapp.com/',
                    codeUrl: 'https://github.com/Zakjholt/Journeyman',
                    tech: [
                        'HTML',
                        'CSS',
                        'React and Redux',
                        'ExpressJS',
                        'MongoDB and Mongoose',
                        'Node.js',
                        'AJAX',
                        'Webpack with Babel'
                    ],
                    id: 4
                }
            ]
        }
    }
    moveBack() {
        if (this.state.selectedItem !== 0) {
            this.setState({
                selectedItem: this.state.selectedItem - 1
            })
        } else {
            this.setState({selectedItem: 3})
        }
    }
    moveForward() {
        if (this.state.selectedItem !== 3) {
            this.setState({
                selectedItem: this.state.selectedItem + 1
            })
        } else {
            this.setState({selectedItem: 0})
        }
    }
    render() {
        let selected = this.state.portfolio[this.state.selectedItem]
        return (
            <div className="Portfolio">
                <div className="Section-Container">
                    <h4>Portfolio</h4>
                    <div className='Portfolio-Control' onClick={() => {
                        this.moveBack();
                    }}>
                        <span className=' fa fa-arrow-circle-left' aria-hidden='true'></span>
                    </div>
                    <div className="Portfolio-Item-Container">
                        <a target='_blank' href={selected.hostedUrl}><img className='Portfolio-Image' id={selected.id} src={selected.photo} alt={selected.name}/></a>

                        <div className="Portfolio-Item-Info">
                            <h5>{selected.name}</h5>
                            <p>{selected.description}</p>
                            <p>
                                <a className='Portfolio-Link' target='_blank' href={selected.hostedUrl}>App</a>
                                <a className='Portfolio-Link' target='_blank' href={selected.codeUrl}>Code</a>
                            </p>
                        </div>
                    </div>
                    <div className='Portfolio-Control' onClick={() => {
                        this.moveForward();
                    }}>
                        <span className=' fa fa-arrow-circle-right' aria-hidden='true'></span>
                    </div>
                    <div className="Portfolio-Item-Container"></div>
                </div>

            </div>
        );
    }
}

export default Portfolio;
