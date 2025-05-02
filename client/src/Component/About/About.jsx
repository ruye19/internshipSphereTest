import React from "react"
import Style from "./about.module.css"

function About() {
  return (
    <div className={Style.homePageContainer}>
      <div className={Style.aboutPage}>
        <h4>Welcome</h4>
        <h2 className={Style.aboutPageTitle}>Discover Your Next Internship</h2>
        <p>
          Welcome to our Internship Connect platform — your one-stop destination to explore exciting internship opportunities from top companies.
        </p>
        <p>
          Whether you're just getting started or looking to grow your skills in the real world, we've got something for you. Browse programs, apply easily, and kickstart your career journey today!
        </p>
        <p>
          No account yet? No worries. Feel free to look around and see what’s waiting for you.
        </p>
        <button className={Style.aboutPageButton}>How It Works</button>
      </div>
    </div>
  )
}

export default About
