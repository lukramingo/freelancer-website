import React from 'react';
import PortfolioModalOne from './PortfolioModalOne';
import PortfolioModalTwo from './PortfolioModalTwo';
import PortfolioModalThree from './PortfolioModalThree';
import PortfolioModalFour from './PortfolioModalFour';
import PortfolioModalFive from './PortfolioModalFive';
import PortfolioModalSix from './PortfolioModalSix';



const ModalShow = () => {
    return(
        <div>
            <PortfolioModalOne/>
            <PortfolioModalTwo/>
            <PortfolioModalThree/>
            <PortfolioModalFour/>
            <PortfolioModalFive/>
            <PortfolioModalSix/>
        </div>    
    )
};

export default ModalShow;