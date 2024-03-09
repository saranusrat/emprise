import React from 'react'
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overviews from './Overviews';
import Inclisions from './Inclisions';
import Review from './Review';
import Faq from './Faq';
import Itinerary from './Itinerary';


const TourTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);
  return (
   <div className='w-[798px] '>
<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
<TabList className={`pt-10 w-[785px] font-poppins font font-normal text-[18px] text-secondaryclr `}>
        <Tab>Overview</Tab>
        <Tab>Itinerary</Tab>
        <Tab>Inclusions</Tab>
        <Tab>Reviews</Tab>
        <Tab>FAQ</Tab>
        <Tab>Essential Info</Tab>
      </TabList>
<TabPanel>
    <Overviews/>
</TabPanel>
<TabPanel>
  <Itinerary/>
</TabPanel>
<TabPanel>
  <Inclisions/>
</TabPanel>
<TabPanel>
   <Review/>
</TabPanel>
<TabPanel>
<Faq/>
</TabPanel>
</Tabs>
   </div>
  )
}

export default TourTabs