import { Box, Image, Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function FlightCard({ data }) {
  const { id, airline, from, to, departure, arrival, price, totalTime } = data;
  const toast = useToast();

  const handleClick = () => {
    axios.post(`http://localhost:8000/flightcart`, data);
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err))

    // Modern glassmorphism toast notification with premium styling
    toast({
      render: () => (
        <Box
          // Glassmorphism background: translucent white with blur effect
          bg="rgba(255, 255, 255, 0.92)"
          color="#1A202C"
          px={6}
          py={4}
          borderRadius="16px"
          // Layered shadows for depth and premium feel
          boxShadow="0 20px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)"
          backdropFilter="blur(24px)"
          border="1px solid rgba(255, 255, 255, 0.6)"
          // Refined typography with tight letter spacing
          fontSize="15px"
          fontWeight="500"
          letterSpacing="-0.01em"
          display="flex"
          alignItems="center"
          gap={3}
          maxW="340px"
          // Smooth animation setup
          transform="translateY(0)"
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          {/* Success indicator: teal gradient circle with checkmark */}
          <Box
            w="20px"
            h="20px"
            borderRadius="full"
            bg="linear-gradient(135deg, #38B2AC, #319795)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="10px"
            color="white"
            fontWeight="bold"
            flexShrink={0}
          >
            ✓
          </Box>
          
          {/* Two-line message with typography hierarchy */}
          <Box lineHeight="1.4">
            {/* Primary message: bold, darker text */}
            <Box fontWeight="600" fontSize="14px" color="#2D3748">
              Flight added successfully
            </Box>
            {/* Secondary message: lighter, muted text */}
            <Box fontSize="13px" color="#718096" mt="1px">
              Ready for checkout
            </Box>
          </Box>
        </Box>
      ),
      duration: 4000,
      isClosable: false,
      position: "top", // Appears at top center of screen
    });
  };

  

  const Booknow = {
    marginTop: "3%",
    // width:"164px",
    padding: "15px",
    height: "43px",
    background: "teal",
    color: " #FFFFFF",
    bordeRadius: "0.5rem",
    position: "relative",
    marginBottom: "1rem",
  };

  return (
    <Box
      display={"flex"}
      gap="20px"
      key={id}
      height="100px"
      width={"80%"}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      padding="10px"
      margin="auto"
      justifyContent="space-around"
      alignItems={"center"}
      borderRadius="10px"
      marginBottom={"20px"}
      textAlign="center"
    >
      <Box gap={"30px"}>
        <Image
          src="https://play-lh.googleusercontent.com/OhZSLjRDLvFLqtDp9bIgcvAweZIg5V5uIMI_7kOaS-9nPR043DUfoibkn1BgwG7Ai1U=w240-h480-rw"
          width={"35px"}
          height="30px"
        />
        <h1>{airline}</h1>
      </Box>
      <Flex display={"flex"} flexDirection="column">
        <h3 style={{ fontSize: "10px", fontWeight: "bold" }}>Departure</h3>
        <h3>{departure}</h3>
        <b>{from} </b>
      </Flex>
      <Flex display={"flex"} flexDirection="column">
        <h3 style={{ fontSize: "10px", fontWeight: "bold" }}>Arrival</h3>
        <h3>{arrival}</h3>
        <b style={{ fontSize: "14px" }}>{to} </b>
      </Flex>
      <Flex display={"flex"} flexDirection="column">
        <h3>Duation</h3>
        <b>{totalTime}</b>
      </Flex>
      <Flex display={"flex"} flexDirection="column">
        <h3>Price</h3>
        <b>{price}</b>
      </Flex>
      <Link to={"/checkout"}>
        <Button style={Booknow} onClick={handleClick}>
          Book Now
        </Button>
      </Link>
    </Box>
  );
}
