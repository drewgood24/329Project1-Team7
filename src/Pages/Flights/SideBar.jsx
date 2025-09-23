import React from "react";
import {
  Flex,
  Button,
  Box,
  Image,
  Heading,
  RadioGroup,
  Stack,
  Radio,
  Checkbox,
  CheckboxGroup,
  HStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import FlightList from "./FlightList";
import { useState } from "react";

const SideBar = () => {
  const [priceValue, setPriceValue] = useState("8");
  const [classes, setClasses] = useState([]);
  const [page, setPage] = useState(1);
  const [packaging, setPackaging] = useState([]);

  const pageBtn={
    marginTop: "3%",
    // width:"164px",
    padding:"15px",
    height: "43px",
    background: "#3662D8",
    color:" #FFFFFF",
    borderRadius: "0.5rem",
    position: "relative",
    marginBottom:"1rem"
}

  return (
      <Box
        display={"flex"}
        padding="0px 40px"
        gap={"30px"}
        width="100%"
        marginBottom={"100px"}
      >
        <Box
          width={"25%"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          height={"auto"}
          padding="20px"
          textAlign={"center"}
        >
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
            Sorting & Filtering
          </h1>

          <Box>
            <Heading as="h5" size="sm" m="3">
              Price Per Trip
            </Heading>
            <RadioGroup onChange={setPriceValue} value={priceValue}>
              <Stack direction="column">
                <HStack justifyContent="space-between">
                  <Radio colorScheme="teal" value="5000">$ 4000 - $ 5000</Radio>
                  {priceValue === "5000" && <CheckIcon color="teal.500" />}
                </HStack>
                <HStack justifyContent="space-between">
                  <Radio colorScheme="teal" value="6000">$ 5000 - $ 6000</Radio>
                  {priceValue === "6000" && <CheckIcon color="teal.500" />}
                </HStack>
                <HStack justifyContent="space-between">
                  <Radio colorScheme="teal" value="7000">$ 6000 - $ 7000</Radio>
                  {priceValue === "7000" && <CheckIcon color="teal.500" />}
                </HStack>
                <HStack justifyContent="space-between">
                  <Radio colorScheme="teal" value="8000">$ 7000 - $ 8000</Radio>
                  {priceValue === "8000" && <CheckIcon color="teal.500" />}
                </HStack>
              </Stack>
            </RadioGroup>
          </Box>

          <Box>
            <Heading as="h5" size="sm" m="3">
              Filter Class
            </Heading>
            <CheckboxGroup onChange={setClasses} value={classes}>
              <Stack direction="column">
                <Checkbox colorScheme="teal" value="eco">Economy Class</Checkbox>
                <Checkbox colorScheme="teal" value="business">Business Class</Checkbox>
                <Checkbox colorScheme="teal" value="prime">Premium</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>

          <Box>
            <Heading as="h5" size="sm" m="3">
              Packaging
            </Heading>
            <CheckboxGroup onChange={setPackaging} value={packaging}>
              <Stack direction="column">
                <Checkbox colorScheme="teal" value="0-15">0 - 15 Kg</Checkbox>
                <Checkbox colorScheme="teal" value="15-30">15 - 30 Kg</Checkbox>
                <Checkbox colorScheme="teal" value="30plus">30 kg +</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
        </Box>
        <Box
          width={"80%"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          height={"auto"}
          padding="20px"
        >
          <Image
            src="https://mmt.servedbyadbutler.com/getad.img/;libID=3737167"
            width={"90%"}
            margin="auto"
            marginBottom={"20px"}
          />

          {/* Pagination Part UI Start */}
          <Stack spacing={4} direction='row' align='center'>

          {/* <Flex m="5" align="center"> */}
            <Button 
              style={pageBtn}
              onClick={() => setPage(page - 1)}
              isDisabled={page === 1}
            >
              Previous
            </Button>
            <Button style={pageBtn}>
              {page}
            </Button>
            <Button
              style={pageBtn}
              isDisabled={page === 4}
              onClick={() => setPage(page + 1)}
              >
              Next
            </Button>
          {/* </Flex> */}
              </Stack>
          {/* Pagination Part UI End */}

          <FlightList 
          page={page} 
          priceValue={Number(priceValue)}
          classes={classes}
          packaging={packaging} 
          />
        </Box>
      </Box>
  );
};

export default SideBar;
