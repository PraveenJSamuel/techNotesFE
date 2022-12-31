import { Link } from 'react-router-dom'

import React from 'react'

const Public = () => {
  const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Tech Repair Shop!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in beautiful Downtown Greenville, Tech Repair Shop is equipped to hanlde all of your tech repair needs!</p>
                <address className="public__addr">
                    Tech Repair Shop<br />
                    123 Sesame Street<br />
                    Greenville, SC 29601<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Praveen Samuel</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}

export default Public