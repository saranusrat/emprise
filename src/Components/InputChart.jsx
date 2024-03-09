import React from 'react'
import Lable from './Lable'
import Flex from './Flex'
import Checkbox from './Checkbox';
import TourRating from './TourRating';

const InputChart = () => {
   
  return (

    <div className='py-10 px-10 w-[424px] border-2 rounded-xl'>
<div className='mb-9'>
<Lable text="When are you traveling?"/>
<div className='mt-2' > <input type='date' className=' border w-[328px] py-2  rounded-lg  focus:outline-none font-poppins text-base text-secondaryclr'/> </div>
</div>
<div className=' mb-9'>
<Lable text="Popular Tags"/>
<Flex className="gap-4  mt-4"><Checkbox />
  <Lable text="Child Friendly"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="Taking extra precautions"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="Away from the chaos"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="Epic Challenges"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="Virtual Experiences"/></Flex>
</div>
<div className=' mb-9'>
<Lable text="Duration"/>
<Flex className="gap-4  mt-4"><Checkbox />
  <Lable text="Upto 1 Hour"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="1 to 4 Hours"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="4 Hours to 1 Day"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="1 to 3 Days"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="3 Days or More"/></Flex>
</div>
<div className=' mb-9'>
  <TourRating/>
</div>
<div className=' mb-9'>
<Lable text="Age Group"/>
<Flex className="gap-4  mt-4"><Checkbox />
  <Lable text="1 & Up"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="3 & Up"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="7 & Up"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="13 & Up"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="18 & Up"/></Flex>
</div>
<div >
<Lable text="Specials"/>
<Flex className="gap-4  mt-4"><Checkbox />
  <Lable text="Discounted deals"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="Free Cancellations"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="Private Groups"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="New on Entrada"/></Flex>
<Flex className="gap-4 mt-4"><Checkbox />
  <Lable text="Entrada Specials"/></Flex>
</div>

 </div>

  )
}

export default InputChart