//import react from "react"
import "../css/style-sheet.css"
const SocialMedia = () => {
    return (
        <>
            <h2 className="heading">follow us on social media</h2>
            <div className="container-fluid">
                <div className="row justify-content-evenly  py-5" style={{ backgroundColor: "#bc519b", marginTop: "-10px" }}>
                    <div className="EenDD text-light card " style={{ width: "18rem", backgroundColor: "#6f0d50", textAlign: "center" }}>
                        <div className="card-body">
                            <h5 className="card-title">facebook page</h5>
                            <div className="card-icon icon1"></div>
                            <a href="#" className="card-text text-light" style={{ textDecoration: "none" }}>
                                <p>Go to page</p>
                            </a>
                        </div>
                    </div>

                    <div className="EenDD text-light card " style={{ width: "18rem", backgroundColor: "#6f0d50", textAlign: "center" }}>
                        <div className="card-body">
                            <h5 className="card-title">Instagram page</h5>
                            <div className="card-icon icon2"></div>
                            <a href="#" className="card-text text-light" style={{ textDecoration: "none" }}>
                                <p>Go to page</p>
                            </a>
                        </div>
                    </div>

                    <div className="EenDD text-light card " style={{ width: "18rem", backgroundColor: "#6f0d50", textAlign: "center" }}>
                        <div className="card-body">
                            <h5 className="card-title">order on whatsapp</h5>
                            <div className="card-icon icon3"></div>
                            <a href="#" className="card-text text-light" style={{ textDecoration: "none" }}>
                                <p>Go to page</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SocialMedia