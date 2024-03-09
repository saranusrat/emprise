import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import OverviewIcon from '../Icons/OverviewIcon'
import WalkIcon from '../Icons/WalkIcon'
import CakeIcon from '../Icons/CakeIcon'
import PresureIcon from '../Icons/PresureIcon'
import FlowerIcon from '../Icons/FlowerIcon'
import Heading from '../Heading'
import { LiaClock } from "react-icons/lia";
import { FaUserGroup } from "react-icons/fa6";
const Overviews = () => {
  return (
   <Section>
    <Container>
        <div className='w-[798px] mx-auto  pt-16'>
<Flex className="justify-between">
    <div>
        <OverviewIcon/>
    </div>
    <div className='w-[662px] border-b-2 '>
<div className='pb-10'>
    <p className=' font-poppins font-normal text-base text-primaryclr'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex.</p>
</div>
<div>
<Flex className="justify-between">
<div>
<Heading className="pb-6 font-poppins text-base text-secondaryclr" text="Duration" as="h5"/>
<Flex className="pb-6 items-center gap-2 ">
<LiaClock className=' size-7 text-thirdclr'/>
<p className=' font-poppins font-medium text-base text-primaryclr'>2 days</p>
</Flex>
<Heading className="pb-6 font-poppins text-base text-secondaryclr" text="Group Size" as="h5"/>
<Flex className="pb-6 items-center gap-2">
<FaUserGroup className=' size-6 text-thirdclr'/>
<p className=' font-poppins font-medium text-base text-primaryclr'>8</p>
</Flex>
</div>
<div>
<Heading className="pb-6 font-poppins text-base text-secondaryclr" text="Activity" as="h5"/>
<Flex className="pb-6 items-center gap-2 ">
<WalkIcon/>
<p className=' font-poppins font-medium text-base text-primaryclr'>Walking</p>
</Flex>
<Heading className="pb-6 font-poppins text-base text-secondaryclr" text="Age" as="h5"/>
<Flex className="pb-6 items-center gap-2">
<CakeIcon/>
<p className=' font-poppins font-medium text-base text-primaryclr'>7+</p>
</Flex>
</div>
<div>
<Heading className="pb-6 font-poppins text-base text-secondaryclr" text="Physical" as="h5"/>
<Flex className="pb-6 items-center gap-2 ">
<PresureIcon/>
<p className=' font-poppins font-medium text-base text-primaryclr'>Strenuous</p>
</Flex>
<Heading className="pb-6 font-poppins text-base text-secondaryclr" text="Season" as="h5"/>
<Flex className="pb-6 items-center gap-2">
<FlowerIcon/>
<p className=' font-poppins font-medium text-base text-primaryclr'>Apr-Sep</p>
</Flex>
</div>
</Flex>
</div>
    </div>
</Flex>
        </div>
    </Container>
   </Section>
  )
}

export default Overviews