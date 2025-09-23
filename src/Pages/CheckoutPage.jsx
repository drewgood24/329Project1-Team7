import React from 'react'
import { Box, Button, HStack, Heading, Icon, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'


import {TbBed} from 'react-icons/tb'
import {BsCheck} from 'react-icons/bs'
import {IoIosMan} from 'react-icons/io'
import {AiOutlineWifi} from 'react-icons/ai'

const CheckoutPage = () => {
  return (

      <Box bg={'gray.50'} width={'100%'} minH={'100vh'} >

        <Box width={'85%'} margin={'auto'} py={6} >
          <Heading fontSize={'28px'} fontWeight={'semibold'} textAlign={'left'} mb={2}>Review and Book</Heading>

          <Box bg={'white'} mt={2} p={4} borderWidth={'1px'} borderColor={'gray.200'} rounded={'lg'} boxShadow={'sm'} >
            <HStack>
              <Box>
                <Image src='https://i.postimg.cc/mZmMdvzw/Screenshot-2023-04-01-130744.png' alt='image' />
              </Box>
              <Box>
                <Text textAlign={'left'} fontWeight={'bold'} >
                  Fully refundable before Sat, 8 Apr, 18:00 (property local time)
                </Text>
                <Text>
                You can change or cancel this stay if plans change. Because flexibility matters.
                </Text>
              </Box>
            </HStack>
          </Box>

          <SimpleGrid mt={4} gridTemplateColumns={'63% 35%'} gap={'2%'} >
            <Box bg={'white'} p={6} borderWidth={'1px'} borderColor={'gray.200'} rounded={'lg'} boxShadow={'sm'} >
              <Heading textAlign={'left'} fontSize={'20px'} fontWeight={'semibold'} mb={2} >Who’s Checking</Heading>
              <Heading textAlign={'left'} mt={3} fontWeight={'semibold'} >Room 1 : 2 Adult 2 twin bed non smoking</Heading>
              <Box>
                <Box textAlign={'left'} my={3}>
                  <Text fontWeight={'medium'} mb={2} color={'gray.700'}>
                    First Name : 
                  </Text>
                  <Input 
                    type='text' 
                    placeholder='Enter your first name' 
                    size='md'
                    bg={'gray.50'}
                    borderRadius={'md'}
                    borderColor={'gray.300'}
                    focusBorderColor={'teal.400'}
                    _hover={{ borderColor: 'gray.400' }}
                    _focus={{ bg: 'white', boxShadow: '0 0 0 1px teal.400' }}
                  />
                </Box>
                <Box textAlign={'left'} my={3}>
                  <Text fontWeight={'medium'} mb={2} color={'gray.700'}>
                    Surname : 
                  </Text>
                  <Input 
                    type='text' 
                    placeholder='Enter your surname' 
                    size='md'
                    bg={'gray.50'}
                    borderRadius={'md'}
                    borderColor={'gray.300'}
                    focusBorderColor={'teal.400'}
                    _hover={{ borderColor: 'gray.400' }}
                    _focus={{ bg: 'white', boxShadow: '0 0 0 1px teal.400' }}
                  />
                </Box>
                <Box textAlign={'left'} my={3}>
                  <Text fontWeight={'medium'} mb={2} color={'gray.700'}>
                    Mobile Number : 
                  </Text>
                  <Input 
                    type='tel' 
                    placeholder='Enter your mobile number' 
                    size='md'
                    bg={'gray.50'}
                    borderRadius={'md'}
                    borderColor={'gray.300'}
                    focusBorderColor={'teal.400'}
                    _hover={{ borderColor: 'gray.400' }}
                    _focus={{ bg: 'white', boxShadow: '0 0 0 1px teal.400' }}
                  />
                </Box>
              </Box>


              <Box textAlign={'left'} display={'flex'} alignItems={'center'} >
                <Input type='checkbox'/><Heading ml={2} >Receive text alerts about this trip (free of charge).</Heading>
              </Box>

            </Box>

            <Box bg={'white'} textAlign={'left'} p={4} borderWidth={'1px'} borderColor={'gray.200'} rounded={'lg'} boxShadow={'sm'} >
              <Image mb={1} width={'100%'} src='https://images.trvl-media.com/lodging/4000000/3450000/3447500/3447485/4c0514cb_l.jpg' />
              <Heading fontSize={'13px'} >8.8/10 Excellent (820 reviews)</Heading>
              <Heading fontSize={'13px'}>Guests rated this property 9/10 for cleanliness</Heading>
              <Heading fontSize={'13px'}>1 Room: Room, 2 Twin Beds, Non Smoking, City View</Heading>
            
              <SimpleGrid gridTemplateColumns={'repeat(2,1fr)'} mt={3} mb={5} >
                <Box><Icon as={TbBed} fontSize={'18px'} />  2 Twins Bed</Box>
                <Box><Icon as={IoIosMan} fontSize={'18px'} />   Sleeps 3</Box>
                <Box><Icon as={AiOutlineWifi} fontSize={'18px'} />  Free WiFi</Box>
                <Box><Icon as={BsCheck} fontSize={'18px'} />  Free parking</Box>
              </SimpleGrid>
            </Box>
          </SimpleGrid>

          <SimpleGrid mt={4} gridTemplateColumns={'63% 35%'} gap={'2%'} >
            <Box bg={'white'} p={6} borderWidth={'1px'} borderColor={'gray.200'} rounded={'lg'} boxShadow={'sm'}  >
              <Heading textAlign={'left'} fontSize={'20px'} fontWeight={'semibold'}  >Payment Method</Heading>
              <Heading textAlign={'left'} mt={3} fontWeight={'semibold'} >₹0.00 due now. Payment information is only needed to hold your reservation.</Heading>
              
              <Box display={'flex'} gap={'12px'} alignItems={'center'} my={4}>
                <Image height={'36px'} width={'56px'} src='https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg' alt='American Express' objectFit={'contain'} />
                <Image height={'36px'} width={'56px'} src='https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg' alt='Mastercard' objectFit={'contain'} />
                <Image height={'36px'} width={'56px'} src='https://a.travel-assets.com/egds/marks/payment__visa.svg' alt='Visa' objectFit={'contain'} />
                <Image height={'36px'} width={'56px'} src='https://a.travel-assets.com/dms-svg/payments/cards-cc_visa_electron.svg' alt='Visa Electron' objectFit={'contain'} />
              </Box>
              <Box>
                <Box textAlign={'left'} my={3}>
                  <Text fontWeight={'medium'} mb={2} color={'gray.700'}>
                    Name on Card : 
                  </Text>
                  <Input 
                    type='text' 
                    placeholder='Full name as on card' 
                    size='md'
                    bg={'gray.50'}
                    borderRadius={'md'}
                    borderColor={'gray.300'}
                    focusBorderColor={'teal.400'}
                    _hover={{ borderColor: 'gray.400' }}
                    _focus={{ bg: 'white', boxShadow: '0 0 0 1px teal.400' }}
                  />
                </Box>
                <Box textAlign={'left'} my={3}>
                  <Text fontWeight={'medium'} mb={2} color={'gray.700'}>
                    Card Number : 
                  </Text>
                  <Input 
                    type='text' 
                    placeholder='0000 0000 0000 0000' 
                    size='md'
                    bg={'gray.50'}
                    borderRadius={'md'}
                    borderColor={'gray.300'}
                    focusBorderColor={'teal.400'}
                    _hover={{ borderColor: 'gray.400' }}
                    _focus={{ bg: 'white', boxShadow: '0 0 0 1px teal.400' }}
                  />
                </Box>
                <Box textAlign={'left'} my={3}>
                  <Text fontWeight={'medium'} mb={2} color={'gray.700'}>
                    Security Code : 
                  </Text>
                  <Input 
                    type='text' 
                    placeholder='CVC' 
                    size='md'
                    bg={'gray.50'}
                    borderRadius={'md'}
                    borderColor={'gray.300'}
                    focusBorderColor={'teal.400'}
                    _hover={{ borderColor: 'gray.400' }}
                    _focus={{ bg: 'white', boxShadow: '0 0 0 1px teal.400' }}
                    maxLength={4}
                    width={'150px'}
                  />
                </Box>
              </Box>

            </Box>

            <Box bg={'white'} textAlign={'left'} p={6} borderWidth={'1px'} borderColor={'gray.200'} rounded={'lg'} boxShadow={'sm'} position={{ base: 'static', md: 'sticky' }} top={{ md: 6 }} >
              {/* <Image mb={1} width={'100%'} src='https://images.trvl-media.com/lodging/4000000/3450000/3447500/3447485/4c0514cb_l.jpg' />
              <Heading fontSize={'13px'} >8.8/10 Excellent (820 reviews)</Heading>
              <Heading fontSize={'13px'}>Guests rated this property 9/10 for cleanliness</Heading>
              <Heading fontSize={'13px'}>1 Room: Room, 2 Twin Beds, Non Smoking, City View</Heading> */}
              
              {/* Price breakdown with dividers and tabular numerals for alignment */}
              <Box sx={{ fontVariantNumeric: 'tabular-nums' }}>
                <Box justifyContent={'space-between'} display={'flex'} mb={2}>
                  <Box color={'gray.600'}>1 room x 1 night</Box>
                  <Box fontWeight={'medium'}>$9,500.00</Box>
                </Box>
                <Box height={'1px'} bg={'gray.100'} mb={2} />
                <Box justifyContent={'space-between'} display={'flex'} mb={2}>
                  <Box color={'gray.600'}>Taxes</Box>
                  <Box fontWeight={'medium'}>$1,710.00</Box>
                </Box>
                <Box height={'1px'} bg={'gray.100'} mb={2} />
                <Box justifyContent={'space-between'} display={'flex'} fontWeight={'bold'}>
                  <Box>Total</Box>
                  <Box>$11,210.00</Box>
                </Box>
              </Box>

              <Box justifyContent={'space-between'} display={'flex'} color='green.600' >
                <Box>Pay Now</Box>
                <Box>$0.00</Box>
              </Box>

              <Box justifyContent={'space-between'} display={'flex'} >
                <Box>Pay at property</Box>
                <Box>$11,210.00</Box>
              </Box>
              <Button
                mt={14}
                width={'100%'}
                height='66px'
                bg={'teal.500'}
                color={'white'}
                rounded={'lg'}
                leftIcon={<BsCheck />}
                boxShadow={'md'}
                _hover={{ bg: 'teal.600', boxShadow: 'lg', transform: 'translateY(-1px)' }}
                _active={{ bg: 'teal.700', transform: 'translateY(0)' }}
              >
                Complete Booking
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
  )
}

export default CheckoutPage
