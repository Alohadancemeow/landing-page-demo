import React from 'react'
import './CallToAction.css'
import { FiCode } from 'react-icons/fi'

function CallToAction() {
    return (
        <div className="cta-bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-text">
                    <FiCode className="FICode" />
                    <h2>We're react dev team</h2>
                    <p>Non fugiat occaecat non aliquip anim sit aliqua duis nostrud aute. Cupidatat deserunt tempor do sit consequat et incididunt qui. Exercitation amet anim aute reprehenderit laborum dolor ipsum adipisicing culpa in id.</p>
                    <a href="#" className="cta-btn">get to know us</a>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
