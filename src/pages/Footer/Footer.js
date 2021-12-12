import React from "react";
import "./style.css"

const styles = {
    img: {
        height: "64px"
    }
}

function Footer () {
    return (
        <div className="zs-foot d-flex flex-row col-12 align-content-end" id="contact">
            <div className="d-flex flex-row justify-content-between col-lg-4 col-sm-12 mx-auto align-items-center">
                <a href="mailto:Lemelisk27@gmail.com" className="p-1 rounded">
                    <img src="images/outline_email_white_24dp.png" alt="Email" style={styles.img}></img>
                </a>
                <a href="https://github.com/Lemelisk27/" target="_blank" rel='noreferrer noopener' className="p-1 rounded">
                    <img src="images/GitHub-Mark-Light-64px.png" alt="GitHub"></img>
                </a>
                <a href="https://www.linkedin.com/in/Lemelisk27/" target="_blank" rel='noreferrer noopener' className="p-1 rounded">
                    <img src="images/LI-In-Bug.png" alt="LinkedIn" style={styles.img}></img>
                </a>
            </div>
        </div>
    )
}

export default Footer