import React from 'react'
import '../AltFront.css'

const FrontPage = () => {
  return (
    <div>
       <div id="start" class="start jumbo">
        <div class="start-content">
            <h1>Peik Feiring</h1>
        </div>
        </div>

    <div id="about" className="about jumbo">
        <div className="about-header">
            <h2>ABOUT</h2>
        </div>
        <div className="about-content">
            <div className="content">
                <h2>bot</h2>
                <p>Quote bot is a telegram bot that saves and sends quotes</p>
                <p><a href="https://github.com/kurppa/telegram-quotebot">source</a></p>

            </div>
        </div>
    </div>

    <div className="footer">
        <div className="footer-content">
            
        </div>
    </div>

    </div>
  )

}

export default FrontPage