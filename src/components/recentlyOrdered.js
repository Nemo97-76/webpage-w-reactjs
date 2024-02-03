import React from "react"
import "bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../css/style-sheet.css"
import item1 from "../images/5770ece9b920e3a6f1f627e074afabec.jpg"
import item2 from "../images/d8cfe881105a732fcfeaeb67bd0961f0.jpg"
import item3 from "../images/16b6d6cefdf580ab0781d6568e7100ba.jpg"
import ModalImage from "react-modal-image"
const RecentlyOrdered = () => {
    return (
        <>
            <h2 className="heading"> recentely ordered</h2>
            <div className="container-fluid">
                <div className="row justify-content-evenly py-5" style={{ width: "80%", margin: "auto" }} >

                    <div className="card" style={{ width: "18rem" }}>
                        <ModalImage small={item1} medium={item1} hideDownload={true} hideZoom={true} className="card-img-top pt-5" />
                        <div className="card-body">
                            <h5 className="card-title">decoration</h5>
                            <p className="card-text">time left: <em>2 days</em></p>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem" }}>
                        <ModalImage small={item2} medium={item2} hideDownload={true} hideZoom={true} className="card-img-top pt-5" />
                        <div className="card-body">
                            <h5 className="card-title">decoration</h5>
                            <p className="card-text">time left: <em>2 days</em></p>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem" }}>
                        <ModalImage small={item3} medium={item3} hideDownload={true} hideZoom={true} className="card-img-top pt-5" />
                        <div className="card-body">
                            <h5 className="card-title">decoration</h5>
                            <p className="card-text">time left: <em>2 days</em></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RecentlyOrdered