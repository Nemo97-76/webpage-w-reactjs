import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import NorthIcon from '@mui/icons-material/North';
import "../css/style-sheet.css"
function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );
        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };
    return (
        <Fade className='FadBox' in={trigger}>
            <Box
                className="Box"
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', zIndex: "5", bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}
ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
export default function BackToTop(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props} >
                <NorthIcon className='ArrowUp' />
            </ScrollTop>
        </React.Fragment>
    );
}
