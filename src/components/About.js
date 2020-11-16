import React from 'react'
import logo from '../logo.png';
import '../App.css';

export default function About() {
    return (
        <div style={{
                backgroundColor: "floralwhite",
                height: "70vh",
                textAlign: "center",
            }}>
            
            <h1>Mollusk | Covid-19 Live Stats Tracker</h1>
            <hr/>
            <a href="https://github.com/IamPrime" target="_blank">
                <img src={logo} height="96" border="0" alt="CheetahWS"/>
            </a>

            <hr/>
            <div style={{
                backgroundColor: "darkslateblue",
                padding: "30px",
                margin: "20px",
                borderRadius: "30rem",
                color: "gold",
            }}>
                <h4>Website Built by</h4>
                <div style={{fontSize: "20px"}}>
                    I_am_Prime | Software Engineering Student | Maranatha
                </div>
                <br/>

                <h4>Connections</h4>
                <div style={{fontSize: "20px" }}>
                    <p>
                    <a href="https://ko-fi.com/iamprime" target="_blank">Buy me a cup of Coffee</a>
                    </p>
                    <p>
                    <a href="https://facebook.com/cheetahserve" target="_blank">facebook</a>
                    </p>
                    <p>
                    <a href="https://www.instagram.com/the_incrediblec" target="_blank">instagram</a>
                    </p>
                </div>
            </div>

        </div>
    )
}
