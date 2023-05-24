import "./slider.css";
import { Component } from "react";


class SliderClass extends Component {
    slideIndex = 0;
    intervalTime ;
    
    showNextImage=()=>{
        this.slideIndex++;
        const slides = document.querySelectorAll(".slide");
        if (this.slideIndex >= slides.length) {
            this.slideIndex = 0;
        }
        slides.forEach((slide, index) => {
            if (index === this.slideIndex) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    }
    showPrevImage=()=> {
        this.slideIndex--;
        const slides = document.querySelectorAll(".slide");
        if (this.slideIndex < 0) {
            this.slideIndex = slides.length - 1;
        }
        slides.forEach((slide, index) => {
            if (index === this.slideIndex) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    }
    slider=()=> {
        this.intervalTime = setInterval(() => {
            this.showNextImage();
        }, 1000);
    }

    stop=()=> {
        clearInterval(this.intervalTime);
    }

    render() {
        return (
            <div>
                <div class="card col-12">
                    <div class="card-body my-2 py-3">
                        <div class="imageslider">
                            <div class="slide active">
                                <img src= {'1.jpg'} alt="" />
                            </div>
                            <div class="slide">
                                <img src={'2.jpg'} alt="" />
                            </div>
                            <div class="slide">
                                <img src={'3.jpg'} alt="" />
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mt-4 optins">
                            <input type="button" class="btn btn-info mx-2" value="Prev" onClick={this.showPrevImage} />
                            <input type="button" class="btn btn-info mx-2" value="Next" onClick={this.showNextImage} />
                            <input type="button" class="btn btn-info mx-2" value="Slide" onClick={this.slider} />
                            <input type="button" class="btn btn-info mx-2" value="Stop" onClick={this.stop()}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SliderClass;