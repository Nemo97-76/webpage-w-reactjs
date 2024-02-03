import React from "react"
import "../css/style-sheet.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { styled } from "@mui/material/styles";
import Fade from '@mui/material/Fade';
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip TransitionComponent={Fade} {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

const Create = () => {
    return (
        <>
            <div className="create">
                <h2>Create your own Desgin</h2>
                <div className="create-content">
                    <p>try to create your shirt then order it</p>
                    <BootstrapTooltip title="tab here">
                        <button type="button" className="btn btn-light d-block mx-auto-sm" title="tap here">Create shirt</button>
                    </BootstrapTooltip>
                    <code>you can choose from desgins & gather it into new degin </code>
                </div>
            </div>

            <div className="create">
                <h2>Create your own Desgin</h2>
                <div className="create-content">
                    <p>try to create your shose then order it</p>
                    <BootstrapTooltip title="tab here">
                        <button type="button" className="btn btn-light d-block mx-auto-sm">Create shose</button>
                    </BootstrapTooltip>
                    <code>you can choose from desgins & gather it into new degin </code>
                </div>
            </div>

            <div className="create">
                <h2>Create your own Desgin</h2>
                <div className="create-content">
                    <p>try to create your decoration then order it</p>
                    <BootstrapTooltip title="tab here">
                        <button type="button" className="btn btn-light d-block mx-auto-sm" data-bs-toggle="tooltip" title="tap here">Create decoration</button>
                    </BootstrapTooltip>
                    <code>you can choose from desgins & gather it into new degin </code>
                </div>
            </div>

            <div class="blank"></div>

        </>
    )
}
export default Create