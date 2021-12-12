import React from "react";
import "./style.css"

function Resume () {
    return (
        <div className="zs-resume d-flex flex-column col-12 overflow-auto">
        <div className="zs-resumebody d-flex flex-column col-lg-9 col-12 mx-auto mt-3">
            <a download="Zach-Smith-Resume.pdf" href="/images/Zach-Smith-Resume.pdf" className="mx-auto">Download as PDF</a>
            <div className="d-flex flex-column justify-content-center mx-auto col-lg-5 col-11">
                <h2 className="text-center mb-0 mt-5">Zach Smith</h2>
                <p className="text-center mb-0">Maple Valley, WA</p>
                <div className="d-flex flex-row flex-wrap justify-content-around">
                    <p className="mb-0">Phone: 425-698-5340</p>
                    <p className="mb-0">Email: Lemelisk27@gmail.com</p>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <p className="pr-1 mb-0">LinkedIn:</p>
                    <a className="mb-0 mx-1" href="http://www.linkedin.com/in/Lemelisk27">http://www.linkedin.com/in/Lemelisk27</a>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <p className="pr-1 mb-0">GitHub:</p>
                    <a className="mb-0 mx-1" href="https://github.com/Lemelisk27">https://github.com/Lemelisk27</a>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <p className="pr-1 mb-0">Portfolio:</p>
                    <a className="mb-0 mx-1" href="https://lemelisk27.herokuapp.com/">https://lemelisk27.herokuapp.com/</a>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center mx-auto col-10">
                <p><u><strong>About Me</strong></u></p>
                <p className="zs-indent">I recently obtained my Web Development Certificate from the University of Washington. My years as a long distance truck driver have given me the ability to work independently, with minimal supervision, while still completing goals and deadlines. When I worked for the IRS, it gave me the ability to work in a diverse environment with people from all walks of life.</p>
                <p><u><strong>Skills</strong></u></p>
                <div className="zs-indent mb-3">
                    <p className="mb-0"><strong>Industry Knowledge: </strong>Programming, web development, web design, time management</p>
                    <p className="mb-0"><strong>Tools and Technologies: </strong>HTML, Cascading Style Sheets (CSS), JavaScript, Bootstrap, Git, API testing, React.js, MySQL, Express.js, Handlebars.js</p>
                    <p className="mb-0"><strong>Interpersonal Skills: </strong>Problem solving, customer service, creative problem solving, critical thinking, teamwork</p>
                    <p className="mb-0"><strong>Other Skills: </strong>Independent projects, independent travel, CDL Class A, truck driving</p>
                </div>
                <p><u><strong>Experience</strong></u></p>
                <div className="zs-indent">
                    <div className="d-flex flex-row flex-wrap justify-content-between">
                        <div>
                            <p className="mb-0"><strong>Wilson Logistics</strong></p>
                            <p className="mb-0">Truck Driver</p>
                        </div>
                        <div className="d-flex flex-row flex-wrap">
                            <p><strong>10-2018 -</strong></p>
                            <p><strong className="mx-1">04-2021</strong></p>
                        </div>
                    </div>
                    <ul>
                        <li>Drove a Truck for pickup and deliveries anywhere in the lower 48 states.</li>
                        <li>Coordinated my schedule with dispatchers.</li>
                        <li>Obeyed and followed local and federal traffic laws.</li>
                        <li>Secured cargo, made sure that it was balanced, and ensured that the overall weight of the truck didn't exceed federal regulations.</li>
                        <li>Maintained a log of working hours to be in compliance with state and federal laws.</li>
                        <li>Inspected my truck daily to ensure that any mechanical problems were fixed before driving.</li>
                    </ul>
                    <div className="d-flex flex-row justify-content-between flex-wrap">
                        <div>
                            <p className="mb-0"><strong>Internal Revenue Service</strong></p>
                            <p className="mb-0">Contact Representative</p>
                        </div>
                        <div className="d-flex flex-row flex-wrap">
                            <p><strong>11-2009 -</strong></p>
                            <p><strong className="mx-1">10-2018</strong></p>
                        </div>
                    </div>
                    <ul>
                        <li>Conducted telephone interviews with a wide range of individuals who have varying degrees of understanding of tax requirements.</li>
                        <li>Provided procedural explanations to specific inquiries initiated by the individual.</li>
                        <li>Referred and or transfers callers to the appropriate area for resolution and closure of issues that are beyond the training and scope of the Contact Representative's position.</li>
                        <li>Responsible for taking notes during team meetings then typing out those notes for distribution among the team.</li>
                        <li>Gave occasional classes on various procedures and command codes during team meetings.</li>
                        <li>Assisted taxpayers with setting up installment agreements in order to settle their outstanding tax liability.</li>
                    </ul>
                </div>
                <p><u><strong>Education</strong></u></p>
                <div className="zs-indent mb-5">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="mb-0"><strong>Bellevue College</strong></p>
                        <div className="d-flex flex-row">
                            <p className="mb-0"><strong>09-2003 -</strong></p>
                            <p className="mb-0 mx-1"><strong>03-2006</strong></p>
                        </div>
                    </div>
                    <ul>
                        <li>Associate of Arts - AA, General Studies</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Resume