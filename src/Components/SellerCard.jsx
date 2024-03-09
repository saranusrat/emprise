import Flex from "./Flex";
import Heading from "./Heading";
import Badge02 from "./Badge02";
import Image from "./Image";
import Button from "./Button";
import { Link } from "react-router-dom";
import SellerIcon from "./Icons/SellerIcon";


const SellerCard = ({txtHD,sellerImg}) => {
  return (
    <div className=" w-[512px]">
     <div className="relative group">
     <Image src={ sellerImg} className="w-full"/>
    <div className="hidden group-hover:block">
    <div className=' absolute  top-7 left-[80%]'>
            <Badge02/>
        </div>
   <p className=" absolute bottom-[100px] left-5 font-poppins  font-normal text-[18px] text-white">10 Days | 09 Night</p>
     <Flex className="items-center  gap-40  absolute top-64 text-white ml-4">
        <Heading as="h4" text="$895.50" className="border-b-2 text-[32px] leading-[48px] tracking-[-0.48px] font-semibold"/> 
     <Flex className="  right-4  gap-4">
      <Link><SellerIcon/></Link>
        <Button text="Explore" className="   px-6  hover:text-white text-[18px]  font-normal" />
     </Flex>
     </Flex>
    </div>
     </div>
     <div className=" text-center">
      <Heading className=" py-9 font-medium text-2xl text-primaryclr" text={txtHD} as="h3"/>
      <p className="  font-poppins font-normal text-base text-secondaryclr">Check Out Daily Deals and Promotion on Hotels. 
Easy & Fast Booking</p>
     </div>
    </div>
  );
};

export default SellerCard;