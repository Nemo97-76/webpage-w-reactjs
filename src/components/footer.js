import React from "react"
import "../css/style-sheet.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#6f0d50", height: "fit-content" }}>
            <div className="container-fluid">
                <div className="row text-center ">
                    <div className="col-md-4 text-light pt-4">
                        <h5 className="border-top border-bottom py-3">Embroidery Studio</h5>
                        <p> Main branche Tel: <em>000-000-000</em></p>
                        <p>Address:________</p>
                    </div>

                    <div className="col-md-4 text-light pt-4">
                        <h5 className="border-top border-bottom py-3">our branches</h5>
                        <p>Cairo:Nasr city</p>
                        <p>Alexandria:Smouha, Green Plaza</p>
                    </div>

                    <div className="col-md-4 text-light pt-4 ">
                        <h5 className="border-top  border-bottom py-3">Cateories</h5>
                        <p className="lh-1">Decoration</p>
                        <p className="lh-1">special Gifts</p>
                        <p className="lh-1">shoes</p>
                        <p className="lh-1">shirts</p>
                        <p className="lh-1">Names</p>
                    </div>
                    <hr style={{ height: "2px", backgroundColor: "white" }} />
                    <p className="text-center text-white">Copyright © 2023. All rights are saved</p>
                    <hr style={{ height: "2px", backgroundColor: "white" }} />
                </div>
            </div>
        </footer>
    )
}
export default Footer