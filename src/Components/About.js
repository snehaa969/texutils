import React, { useState } from 'react'

export const About = (props) => {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })
    let myStyle = {
        color: props.mode == 'dark'? 'white':'black',
        background: props.mode == 'dark'?'black':'white'
        
    }

  return (
    <div className = "container" style={myStyle}>
        <h1 className = "my-3">About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyse Your Text</strong>
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyse your text quality quickly and effectively. Be it word count
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Free to Use</strong>
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Introducing our latest innovation: an app designed with your convenience in mind, and best of all, it's entirely free to use! Whether you're organizing your schedule, tracking your fitness goals, or simply exploring new recipes, our app offers a seamless experience without any hidden costs or subscriptions. 
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Campatible</strong>
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Our app is seamlessly compatible with all major browsers, ensuring you can access it from any device, anywhere. Whether you prefer Chrome, Firefox, Safari, or any other browser, you can enjoy a smooth and consistent experience without any compatibility issues. No matter if you're on your desktop, laptop, tablet, or smartphone, our app is optimized to work flawlessly across platforms, delivering convenience at your fingertips.
                </div>
            </div>
            </div>
            </div>
            
    </div>
  )
}
