import { Box, Button, Flex, Input, Spacer, Stack,Text,Image,SimpleGrid, Alert, AlertIcon, SlideFade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const forHead={ base: '10px',sm:"10px", md: '15px', lg: '20px' }
const forNormel={ base: '8px',sm:"8px", md: '10px', lg: '15px' }
const footerList={base: '8px',sm:"8px", md: '10px', lg: '15px'}
const socialMediaLogo={base: '20px',sm:"20px", md: '25px', lg: '30px'}



export default function Footer(){

const [state,setState]=useState(false)
const [alertMassege,setAlertMassege]=useState("")
const handleAlert=(x)=>{
    
 x==1?setAlertMassege("Calling......"):x==2?setAlertMassege("Opening Help Center Page..."):setAlertMassege("Opening Feedback form...")
    
    setState(!state)

    
}


return <Box padding={'30px'} borderTop={'1px solid gray'}    >
    

<SimpleGrid w={'80%'} fontSize={footerList}  m="auto" borderBottom={'1px solid gray'} columns={4}  spacing={10}   >
  <Box  ><Text fontWeight={'bold'} >Women </Text>
  <Text>Tops</Text>
  <Text>Dresses & Jumpsuits</Text>
  <Text>Sportswear</Text>
  <Text>Bottoms</Text>
  <Text>Winterwear</Text>
  <Text>Ethnicwear</Text>
  <Text>Lingerie</Text>
  <Text>Sleepwear</Text>
  <Text>Accessories</Text>
  <Text>Shoes</Text>
 </Box>
  <Box ><Text fontWeight={'bold'} >Men</Text>
 
  <Text>Tops</Text>
  <Text>Bottoms</Text>
  <Text>Sportswear</Text>
  <Text>Winterwear</Text>
  <Text>Accessories</Text>
  <Text>Shoes</Text>
  
  </Box>
  <Box  ><Text fontWeight={'bold'} >Boys </Text>
  <Text>Tops</Text>
  <Text>Bottoms</Text>
  <Text>Indian Wear</Text>
  <Text>Winterwear</Text>
  <Text>Essentials</Text>
  <Text>Accessories</Text>
  <Text>Shoes</Text></Box>
  
  <Box  ><Text fontWeight={'bold'} >Girls</Text>
  <Text>Tops</Text>
  <Text>Bottoms</Text>
  <Text>Indian Wear</Text>
  <Text>Winterwear</Text>
  <Text>Essentials</Text>
  <Text>Accessories</Text>
  <Text>Shoes</Text>
  </Box>
 
  <Box ><Text fontWeight={'bold'} >Explore</Text>
  <Text>Offers</Text>
  <Text>Magazine</Text>
  </Box>
  <Box ><Text fontWeight={'bold'} >About</Text>
  <Text>About us</Text>
  <Text>Write to us</Text>
  <Text>Careers</Text>
  <Text>Take a Tour</Text>
  <Text>Blog</Text>
  <Text>Store Locator</Text>
  <Text>Landmark Cares</Text>
  
  </Box>
  <Box  ><Text fontWeight={'bold'} >Help</Text>
  <Text>Contact us</Text>
  <Text>Shipping</Text>
  <Text>Returns Process</Text>
  <Text>Returns Policy</Text>
  <Text>Help Centre</Text>
  
  </Box>
</SimpleGrid>

<br />


{/* /////////////////////////// */}
<SlideFade in={state} offsetY='20px'>
      
<Alert status={"success"}>
<AlertIcon />
{alertMassege}
</Alert>

</SlideFade>


<SimpleGrid 

borderBottom={"1px solid gray"}
p='20px'
 columns={[1,1,2,2,4]} justifyContent='center' w="80%" m={'auto'}  gap={'30px'}  >
  
<Box onClick={()=>handleAlert(1)} gap={'.5rem'} display={'flex'}  alignItems="center" justifyContent={'center'}     >
    <Box fontSize={socialMediaLogo}  >

<i style={
    {
        color:"black",border:"1px solid black",padding:'15px',borderRadius:'50%'
    }} className="fa-solid fa-phone"></i> 
    </Box>
     <Box>
        <Text>Talk to us</Text>
        <Text>00000-000-00</Text>
    </Box>
    
</Box>
    


<Box onClick={()=>handleAlert(2)} gap={'.5rem'} display={'flex'}   alignItems="center" justifyContent={'center'}  

// border={'1px solid red'}  
 >
    
<Box fontSize={socialMediaLogo}
   style={
       {
           border:"1px solid black",padding:'15px',borderRadius:'50%'
        }}
        className="material-symbols-outlined">
help_center
</Box>  
       

<Box>
        <Text>Helpcentre</Text>
        <Text> help.center.com</Text>
    </Box>
    
</Box>
    



<Box onClick={()=>handleAlert(3)} gap={'.5rem'} display={'flex'}  alignItems="center" justifyContent={'center'}     >
  

<Box fontSize={socialMediaLogo} style={
    {
        color:"black",border:"1px solid black",fontSize:'30px',padding:'15px',borderRadius:'50%'
    }} className="material-symbols-outlined">
mail
  
        </Box>
<Box>
        <Text>Write to us</Text>
        <Text>www.xyz.com</Text>
    </Box>
    
</Box>
      

{/* <Spacer/> */}
<Box  display={'flex'} fontSize={socialMediaLogo} alignItems={'center'} justifyContent="center"   >


<Box><i className="fa-brands fa-facebook-f"></i></Box>


<Spacer/>


<Box>
 
 
 <i className="fa-brands fa-twitter"></i></Box> 


<Spacer/>

<Box><i className="fa-brands fa-instagram"></i></Box>

    
    
</Box>


</SimpleGrid>



   
</Box>


}