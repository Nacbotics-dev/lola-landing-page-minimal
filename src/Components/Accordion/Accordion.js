import React,{useState} from 'react';
import AccordionLayout from './AccordionLayout/AccordionLayout';


function Accordion(props) {
    const [activeIndex,setActiveIndex] = useState(0);
    return (
        <div className='flex flex-col  mx-auto my-[88px] max-w-[450px] sm:max-w-[966px] h-[266.99px] w-full'>
            <AccordionLayout 
            title={'Who keeps the cooperative money?'}
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}>
               We do not have anything to do with your cooperative money, we 
               only help with better cooperative management.
            </AccordionLayout>

            <AccordionLayout 
            title={'What do I need to complete signup?'}
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}>
                We do not have anything to do with your cooperative money, we 
               only help with better cooperative management.
            </AccordionLayout>

            <AccordionLayout 
            title={'What do I need to complete signup?'}
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}>
                We do not have anything to do with your cooperative money, we 
               only help with better cooperative management.
            </AccordionLayout>
            
        </div>
    );
}

export default Accordion;