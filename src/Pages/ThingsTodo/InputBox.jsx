import React,{useState} from 'react'
import { AiTwotoneEnvironment } from "react-icons/ai";
import {Image,Box,FormLabel,Button,Select,Flex,Icon} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export const InputBox =()=>{
  const [placeName,setPlaceName] = useState("");

  return (
    <>
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="center"
        p={4}
        gap={6}
      >
        <Box
          width={{ base: '48%', md: '300px' }}
          height={{ base: '60px', md: '86px' }}
          flexShrink={0}
        >
          <Image
            src="https://images.pexels.com/photos/33996106/pexels-photo-33996106.jpeg"
            alt="people looking at map"
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius="8px"
            boxShadow="sm"
          />
        </Box>

        <Flex
          alignItems="center"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="6px"
          height="48px"
          px={3}
          gap={3}
        >
          <Box color="gray.600"><AiTwotoneEnvironment size={20} /></Box>
          <FormLabel mb={0} fontSize="sm" color="gray.700">Select Place:</FormLabel>
          <Select
            placeholder="select-city"
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
            width={{ base: '120px', md: '180px' }}
            size="sm"
            icon={<Icon viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"/></Icon>}
            sx={{
              appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              '::-ms-expand': { display: 'none' },
            }}
          >
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="rajasthan">Rajasthan</option>
          </Select>
        </Flex>

        <Button
          border="1px solid"
          borderRadius="6px"
          minW="84px"
          height="48px"
          bg="#304FFE"
          color="white"
        >
          <Link to={{ pathname: '/ThingsToDo', search: `?place=${placeName}` }}>Search</Link>
        </Button>
      </Flex>
    </>
  );
}
