import { Box, Center } from "@chakra-ui/react";
import Header from "../components/menu/Divs/header";
import Image from "next/image";
import Guide from "../components/menu/Divs/guide";
import museum from "../data/museum";
import { useEffect, useState } from "react";
import gandan from "../data/gandan";
import trip from "../data/trip";
import cashmere from "../data/cashmere";

export default function Info() {
  const [number, setNumber] = useState(0);
  const [source, setSource] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("window :>> ", window);
      const queryString = window?.location?.search;
      const params = new URLSearchParams(queryString);
      const index = params.get("index");
      let num = parseInt(index);
      setNumber(num);
      console.log(index);
      console.log("params ", params);
    }

    let myLink = window.document.getElementById("myLink");
    // Add a click event listener to the link
    myLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the link

      // Redirect to another website
      window.location.href =
        "https://www.google.com/maps/place/Innovation+HUB/@47.9225972,106.9272373,17z/data=!3m1!4b1!4m6!3m5!1s0x5d96937df429a8b7:0xcda9434355d4cc78!8m2!3d47.9225972!4d106.9298122!16s%2Fg%2F11g0hllp5m?entry=ttu"; // Replace 'https://www.example.com' with the desired URL
    });
    switch (number) {
      default:
      case 1:
        setSource(museum());
        break;
      case 2:
        setSource(cashmere());
        break;
      case 3:
        setSource(trip());
        break;
      case 4:
        setSource(gandan());
        break;
    }
  }, []);

  return (
    <div>
      <Header></Header>
      <Box p="1rem">
        <Box overflow={"scroll"} w="100%">
          <Box w="calc(3 * 400px )" display={"flex"}>
            <Box
              borderRadius={"10px"}
              overflow={"hidden"}
              zIndex={0}
              mt="50px"
              mr="10px"
            >
              <Image src={gandan()[0].image1} alt="" height={300} width={368} />
            </Box>
            <Box
              borderRadius={"10px"}
              overflow={"hidden"}
              zIndex={0}
              mt="50px"
              mr="10px"
            >
              <Image src={gandan()[0].image2} alt="" height={300} width={368} />
            </Box>
            <Box
              borderRadius={"10px"}
              overflow={"hidden"}
              zIndex={0}
              mt="50px"
              mr="10px"
            >
              <Image src={gandan()[0].image3} alt="" height={300} width={368} />
            </Box>
          </Box>
        </Box>

        <Box fontWeight={900} fontSize={30} h="2.7rem" overflow={"hidden"}>
          <Box>GandanTegchilen</Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box opacity={0.6} fontSize={"14px"}>
            {" "}
            Museum
          </Box>

          <Center>
            <Box>
              <Image src={"/age.png"} alt="" height={20} width={20} />
            </Box>
            <Box ml="5px">0-99</Box>
          </Center>
        </Box>
        <Box
          fontSize={"20px"}
          fontWeight={900}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box fontWeight={900} fontSize={30} h="2.7rem" overflow={"hidden"}>
            <Box>
              {source.map((el: any, key: any) => {
                return <Box key={key}>{source[1].price}</Box>;
              })}
            </Box>
          </Box>
          <Center>
            <Image src={"/star_icon.svg"} alt="" height={20} width={20} />
            <Box>4.7</Box>
          </Center>
        </Box>

        <Box w="100%" display="flex" justifyContent={"space-between"} mt="1rem">
          <Center
            border={"1px solid #ffffff40"}
            borderRadius={"15px"}
            w="14rem"
            h="3rem"
            bgColor={"#fff"}
            fontWeight={700}
            color={"black"}
            id="myLink"
          >
            View on Google map
          </Center>

          <Center w="3rem" h="3rem">
            <Image src="/share_icon.svg" alt="" height={25} width={25} />
          </Center>
        </Box>
        <Box
          border={"1px solid #ffffff60"}
          borderRadius={"10px"}
          p="10px"
          mt="1rem"
        >
          Cүмийн барилгын цогцолборыг Төрийн Чойжин Лувсанхайдавын шашин номын
          үйлд зориулан 1904-1908 оны хооронд Их хүрээний нэрт уран барилгач
          Омбо тэргүүтэй 300 гаруй эрдэм билигт урчууд бүтээн байгуулжээ
        </Box>
        <Center
          w="100%"
          h="3rem"
          display="flex"
          alignItems={"center"}
          fontSize={"24px"}
          fontWeight={700}
          mt="1rem"
        >
          Related
        </Center>
        <Box
          h="6px"
          bgGradient={"linear(to-r,#fff , #ffffff00)"}
          borderRadius={"3px"}
          mb="1rem"
        ></Box>
      </Box>
      <Box p="1rem">
        <Guide index={number} />
      </Box>
    </div>
  );
}
