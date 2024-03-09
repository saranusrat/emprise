import React from 'react'
import Flex from '../Flex'
import ItineraryIcon from '../Icons/ItineraryIcon'
import Image from '../Image'
import badge1 from '../../assets/badge1.png'
import badge2 from '../../assets/badge2.png'
import badge3 from '../../assets/badge3.png'
import badge4 from '../../assets/badge4.png'
import badge5 from '../../assets/badge5.png'
import badge6 from '../../assets/badge6.png'
import itinerary01 from '../../assets/itinerary01.png'
import itinerary02 from '../../assets/itinerary02.png'
import itinerary03 from '../../assets/itinerary03.png'
import itinerary04 from '../../assets/itinerary04.png'
import Heading from '../Heading'
import { Link } from 'react-router-dom'

const Itinerary = () => {
  return (
    <div className='w-[791px] pt-16'>
        <Flex className="justify-between">
            <div><ItineraryIcon/></div>
            <div> 
            <div className='w-[651px]'>
  <details className=' shadow border-t-2  rounded-xl group'>
    <summary className='  py-4 list-none flex items-center cursor-pointer border-b-2 bg-reviewbg rounded-xl'>
      <Image src={badge1} className="ml-3"/>
  <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Day 1" as="h3"/>
        <div className=' border-8  border-transparent  border-l-gray-600 group-open:rotate-90 transition-transform origin-left'></div>
    </summary>
    <div className='py-9 px-3'>
        <div className='border-b-2 pb-3'>
        <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Lake Nakuru National Park" as="h3"/>   
        </div>
        <div className=' pt-7 pb-12'>
            <p className=' font-poppins  text-base text-primaryclr pb-16'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Image src={itinerary01}/>
        </div>
        <div className=' border-b-2 pb-2 '>
          <ul>
            <Flex className="gap-20">
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Accommodation</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Special Info</Link></li>
            </Flex>
          </ul>
        </div>
        <div className='py-7'>
            <p className=' font-poppins  text-base text-primaryclr pb-7'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Shared Room</p>
                <p className=' font-poppins text-base text-primaryclr'>Included in package</p>
            </Flex>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Double Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£45 per person extra</p>
            </Flex>
            <Flex className="gap-10">
                <p className=' font-poppins text-base text-secondaryclr'>Single Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£80 per person extra</p>
            </Flex>
        </div>
        <div>
            <Flex className="justify-between">
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Shared</p>
                    <Image src={itinerary02}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Double</p>
                    <Image src={itinerary03}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Single</p>
                    <Image src={itinerary04}/>
                </div>
            </Flex>
        </div>
    </div>
  </details>
</div>


            <div className='w-[651px]'>
  <details className=' shadow border-t-2  rounded-xl group'>
    <summary className='  py-4 list-none flex items-center cursor-pointer border-b-2 bg-reviewbg rounded-xl'>
      <Image src={badge2} className="ml-3"/>
  <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Day 2" as="h3"/>
        <div className=' border-8  border-transparent  border-l-gray-600 group-open:rotate-90 transition-transform origin-left'></div>
    </summary>
    <div className='py-9 px-3'>
        <div className='border-b-2 pb-3'>
        <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Lake Nakuru National Park" as="h3"/>   
        </div>
        <div className=' pt-7 pb-12'>
            <p className=' font-poppins  text-base text-primaryclr pb-16'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Image src={itinerary01}/>
        </div>
        <div className=' border-b-2 pb-2 '>
          <ul>
            <Flex className="gap-20">
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Accommodation</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Special Info</Link></li>
            </Flex>
          </ul>
        </div>
        <div className='py-7'>
            <p className=' font-poppins  text-base text-primaryclr pb-7'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Shared Room</p>
                <p className=' font-poppins text-base text-primaryclr'>Included in package</p>
            </Flex>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Double Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£45 per person extra</p>
            </Flex>
            <Flex className="gap-10">
                <p className=' font-poppins text-base text-secondaryclr'>Single Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£80 per person extra</p>
            </Flex>
        </div>
        <div>
            <Flex className="justify-between">
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Shared</p>
                    <Image src={itinerary02}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Double</p>
                    <Image src={itinerary03}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Single</p>
                    <Image src={itinerary04}/>
                </div>
            </Flex>
        </div>
    </div>
  </details>
</div>


            <div className='w-[651px]'>
  <details className=' shadow border-t-2  rounded-xl group'>
    <summary className='  py-4 list-none flex items-center cursor-pointer border-b-2 bg-reviewbg rounded-xl'>
      <Image src={badge3} className="ml-3"/>
  <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Day 3" as="h3"/>
        <div className=' border-8  border-transparent  border-l-gray-600 group-open:rotate-90 transition-transform origin-left'></div>
    </summary>
    <div className='py-9 px-3'>
        <div className='border-b-2 pb-3'>
        <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Lake Nakuru National Park" as="h3"/>   
        </div>
        <div className=' pt-7 pb-12'>
            <p className=' font-poppins  text-base text-primaryclr pb-16'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Image src={itinerary01}/>
        </div>
        <div className=' border-b-2 pb-2 '>
          <ul>
            <Flex className="gap-20">
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Accommodation</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Special Info</Link></li>
            </Flex>
          </ul>
        </div>
        <div className='py-7'>
            <p className=' font-poppins  text-base text-primaryclr pb-7'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Shared Room</p>
                <p className=' font-poppins text-base text-primaryclr'>Included in package</p>
            </Flex>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Double Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£45 per person extra</p>
            </Flex>
            <Flex className="gap-10">
                <p className=' font-poppins text-base text-secondaryclr'>Single Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£80 per person extra</p>
            </Flex>
        </div>
        <div>
            <Flex className="justify-between">
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Shared</p>
                    <Image src={itinerary02}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Double</p>
                    <Image src={itinerary03}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Single</p>
                    <Image src={itinerary04}/>
                </div>
            </Flex>
        </div>
    </div>
  </details>
</div>


            <div className='w-[651px]'>
  <details className=' shadow border-t-2  rounded-xl group'>
    <summary className='  py-4 list-none flex items-center cursor-pointer border-b-2 bg-reviewbg rounded-xl'>
      <Image src={badge4} className="ml-3"/>
  <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Day 4" as="h3"/>
        <div className=' border-8  border-transparent  border-l-gray-600 group-open:rotate-90 transition-transform origin-left'></div>
    </summary>
    <div className='py-9 px-3'>
        <div className='border-b-2 pb-3'>
        <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Lake Nakuru National Park" as="h3"/>   
        </div>
        <div className=' pt-7 pb-12'>
            <p className=' font-poppins  text-base text-primaryclr pb-16'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Image src={itinerary01}/>
        </div>
        <div className=' border-b-2 pb-2 '>
          <ul>
            <Flex className="gap-20">
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Accommodation</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Special Info</Link></li>
            </Flex>
          </ul>
        </div>
        <div className='py-7'>
            <p className=' font-poppins  text-base text-primaryclr pb-7'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Shared Room</p>
                <p className=' font-poppins text-base text-primaryclr'>Included in package</p>
            </Flex>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Double Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£45 per person extra</p>
            </Flex>
            <Flex className="gap-10">
                <p className=' font-poppins text-base text-secondaryclr'>Single Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£80 per person extra</p>
            </Flex>
        </div>
        <div>
            <Flex className="justify-between">
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Shared</p>
                    <Image src={itinerary02}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Double</p>
                    <Image src={itinerary03}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Single</p>
                    <Image src={itinerary04}/>
                </div>
            </Flex>
        </div>
    </div>
  </details>
</div>


            <div className='w-[651px]'>
  <details className=' shadow border-t-2  rounded-xl group'>
    <summary className='  py-4 list-none flex items-center cursor-pointer border-b-2 bg-reviewbg rounded-xl'>
      <Image src={badge5} className="ml-3"/>
  <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Day 5" as="h3"/>
        <div className=' border-8  border-transparent  border-l-gray-600 group-open:rotate-90 transition-transform origin-left'></div>
    </summary>
    <div className='py-9 px-3'>
        <div className='border-b-2 pb-3'>
        <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Lake Nakuru National Park" as="h3"/>   
        </div>
        <div className=' pt-7 pb-12'>
            <p className=' font-poppins  text-base text-primaryclr pb-16'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Image src={itinerary01}/>
        </div>
        <div className=' border-b-2 pb-2 '>
          <ul>
            <Flex className="gap-20">
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Accommodation</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Special Info</Link></li>
            </Flex>
          </ul>
        </div>
        <div className='py-7'>
            <p className=' font-poppins  text-base text-primaryclr pb-7'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Shared Room</p>
                <p className=' font-poppins text-base text-primaryclr'>Included in package</p>
            </Flex>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Double Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£45 per person extra</p>
            </Flex>
            <Flex className="gap-10">
                <p className=' font-poppins text-base text-secondaryclr'>Single Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£80 per person extra</p>
            </Flex>
        </div>
        <div>
            <Flex className="justify-between">
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Shared</p>
                    <Image src={itinerary02}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Double</p>
                    <Image src={itinerary03}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Single</p>
                    <Image src={itinerary04}/>
                </div>
            </Flex>
        </div>
    </div>
  </details>
</div>


            <div className='w-[651px]'>
  <details className=' shadow border-t-2  rounded-xl group'>
    <summary className='  py-4 list-none flex items-center cursor-pointer border-b-2 bg-reviewbg rounded-xl'>
      <Image src={badge6} className="ml-3"/>
  <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Day 6" as="h3"/>
        <div className=' border-8  border-transparent  border-l-gray-600 group-open:rotate-90 transition-transform origin-left'></div>
    </summary>
    <div className='py-9 px-3'>
        <div className='border-b-2 pb-3'>
        <Heading className=" ml-3 flex-1  font-semibold text-base text-primaryclr"  text="Lake Nakuru National Park" as="h3"/>   
        </div>
        <div className=' pt-7 pb-12'>
            <p className=' font-poppins  text-base text-primaryclr pb-16'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Image src={itinerary01}/>
        </div>
        <div className=' border-b-2 pb-2 '>
          <ul>
            <Flex className="gap-20">
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Accommodation</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Meals</Link></li>
                <li><Link className=' font-poppins font-medium text-base text-primaryclr hover:text-secondaryclr'>Special Info</Link></li>
            </Flex>
          </ul>
        </div>
        <div className='py-7'>
            <p className=' font-poppins  text-base text-primaryclr pb-7'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</p>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Shared Room</p>
                <p className=' font-poppins text-base text-primaryclr'>Included in package</p>
            </Flex>
            <Flex className="gap-10 pb-5">
                <p className=' font-poppins text-base text-secondaryclr'>Double Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£45 per person extra</p>
            </Flex>
            <Flex className="gap-10">
                <p className=' font-poppins text-base text-secondaryclr'>Single Room</p>
                <p className=' font-poppins text-base text-primaryclr'>£80 per person extra</p>
            </Flex>
        </div>
        <div>
            <Flex className="justify-between">
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Shared</p>
                    <Image src={itinerary02}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Double</p>
                    <Image src={itinerary03}/>
                </div>
                <div>
                    <p className=' font-poppins text-base text-secondaryclr hover:text-thirdclr pb-3'> Single</p>
                    <Image src={itinerary04}/>
                </div>
            </Flex>
        </div>
    </div>
  </details>
</div>
<div className='w-[651px] border-b-2 pt-4 pb-2'>
  <Link> <p className=' font-poppins font-normal text-base text-secondaryclr'>Show 12 more itinerary days</p></Link>
</div>
            </div>
        </Flex>
    </div>
  )
}

export default Itinerary