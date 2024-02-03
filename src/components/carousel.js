import React from "react"
import item1 from "../images/1.png"
import item2 from "../images/embroidery-942255_960_720.jpg"
import item3 from "../images/basic-embroidery-stitches-1.jpg"
import "../css/style-sheet.css"
const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active" >
                    <img src={item1} className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption ">
                        <h5>Fabric Desgins</h5>
                        <a href="#" className="btn-primary bttn">See More</a>
                    </div>
                </div>

                <div className="carousel-item ">
                    <img src={item2} className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption ">
                        <h5>Special Gifts</h5>
                        <a href="#" className="btn-primary bttn">See More</a>
                    </div>
                </div>

                <div className="carousel-item ">
                    <img src={item3} className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption  ">
                        <h5>Order your Own Decoration NOW</h5>
                        <a href="#" className="btn-primary bttn">See More</a>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
export default Carousel