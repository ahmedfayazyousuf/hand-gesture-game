import React from "react";
import '../1_Assets/main.css';

const Home = () => { 

    

    return (
        <div style={{width: '100vw', height: '100%'}}>


            <h1>Recognize hand gestures using the MediaPipe HandGestureRecognizer task</h1>

            <section id="demos" class="invisible">
                <h2>Demo: Recognize gestures</h2>
                <p><em>Click on an image below</em> to identify the gestures in the image.</p>

                <div class="detectOnClick">
                    <img src="https://assets.codepen.io/9177687/idea-gcbe74dc69_1920.jpg" crossorigin="anonymous" title="Click to get recognize!" />
                    <p class="classification removed"/>
                </div>

                <div class="detectOnClick">
                    <img src="https://assets.codepen.io/9177687/thumbs-up-ga409ddbd6_1.png" crossorigin="anonymous" title="Click to get recognize!" />
                    <p class="classification removed"/>
                </div>

                <h2>Demo: Webcam continuous hand gesture detection</h2>
                <p>Use your hand to make gestures in front of the camera to get gesture classification. <br></br>Click <b>enable webcam</b> below and grant access to the webcam if prompted.</p>

                <div id="liveView" class="videoView">
                    <button id="webcamButton" class="mdc-button mdc-button--raised">
                        <span class="mdc-button__ripple"></span>
                        <span class="mdc-button__label">ENABLE WEBCAM</span>
                    </button>
                    <div style={{position: 'relative'}}>
                        <video id="webcam" autoplay playsinline></video>
                        <canvas class="output_canvas" id="output_canvas" width="1280" height="720" style={{position: 'absolute', left: '0px', top: '0px'}}></canvas>
                        <p id='gesture_output' class="output"/>
                    </div>
                </div>
            </section>

            
        </div>
    )
}

export default Home