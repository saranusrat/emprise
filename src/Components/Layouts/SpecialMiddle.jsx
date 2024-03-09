import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import TourHeading from './TourHeading'
import TourTabs from './TourTabs'
import BookingForm from './BookingForm'
import Expert from './Expert'

const SpecialMiddle = () => {
  return (
   <Section>
    <Container>
     <Flex className="justify-between pt-11">
        <div>
            <TourHeading/>
            <TourTabs/>
        </div>
        <div>
          <BookingForm/>
          <Expert/>
        </div>
     </Flex>
    </Container>
   </Section>
  )
}

export default SpecialMiddle