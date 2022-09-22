import React from 'react';
import HomeBanner from '../Sections/HomeBanner';
import OurServices from '../Sections/OurServices';
import Community from '../Sections/Community';
import Activities from '../Sections/Activities';
import FaqAccordion from '../Sections/FaqAccordion';
import MissionStatement from '../Sections/MobileSections/MissionStatement';
import NewsLetter from '../Sections/MobileSections/NewsLetter';


function Index(props) {
    return (
        <div className="App">
            <div className='bg-white'>
                <HomeBanner/>

                {/* This is for mobile devices only */}
                <MissionStatement/>
                {/* Ends here */}
                <OurServices/>
                <Community/>
                <Activities/>
                <FaqAccordion/>

                <NewsLetter/>
            </div>
      </div>
    );
}

export default Index;