import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";

import Guide_photos from "../../../data/guide_photos";
import museum from "../../../data/museum";
import cashmere from "../../../data/cashmere";
import trip from "../../../data/trip";
import gandan from "../../../data/gandan";
import { useEffect, useState } from "react";
import Info from "../../../pages/information";

export default function Guide({ index }) {
  const [sr, setSr] = useState([]);
  useEffect(() => {
    switch (index) {
      default:
      case 1:
        setSr(museum());
        break;
      case 2:
        setSr(trip());

        break;
      case 3:
        setSr(cashmere());
        break;
      case 4:
        setSr(gandan());
        break;
    }
  });

  return (
    <Box>
      <Box
        w="100%"
        display="grid"
        gridTemplateColumns={"100%"}
        overflow={"hidden"}
      >
        {sr.map((item: any, key: any) => (
          <Box
            w="368px"
            h="368px"
            bgColor={"#051C2C"}
            borderRadius={"10px"}
            padding={"1rem"}
            key={key}
            mb="1.5rem"
          >
            <Box w="100%" overflow={"scroll"}>
              <Box display={"flex"} w={"calc(260px * 3 )"}>
                <Box
                  key={key}
                  w="240px"
                  h="240px"
                  borderRadius={"5px"}
                  overflow={"hidden"}
                  mr="1rem"
                >
                  <Image src={sr[key].image1} alt="" height={240} width={240} />
                </Box>
                <Box
                  key={key}
                  w="240px"
                  h="240px"
                  borderRadius={"5px"}
                  overflow={"hidden"}
                  mr="1rem"
                >
                  <Image
                    src={sr[key].image2}
                    alt=""
                    height={240}
                    width={240}
                    objectFit="cover"
                  />
                </Box>
                <Box
                  key={key}
                  w="240px"
                  h="240px"
                  borderRadius={"5px"}
                  overflow={"hidden"}
                  mr="1rem"
                >
                  <Image src={sr[key].image3} alt="" height={240} width={240} />
                </Box>
              </Box>
            </Box>
            <Box
              onClick={() => {
                window.location.href = `/information/?index=${index}`;
              }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                fontWeight={900}
                mt="5px"
              >
                <Box display={"flex"} overflow={"hidden"}>
                  {sr[key].name}
                </Box>
                <Box display={"flex"}>
                  <Image src={"/star_icon.svg"} alt="" height={20} width={20} />
                  <Box>4.7</Box>
                </Box>
              </Box>
              <Box fontSize="12px" mt="5px" h="2rem" overflow="hidden">
                {sr[key].text}
              </Box>

              <Box display={"flex"} justifyContent={"space-between"} mt="5px">
                <Box display={"flex"}>
                  <Image
                    src={"/clock_icon.svg"}
                    alt=""
                    height={20}
                    width={20}
                  />
                  <Center fontWeight={900} ml="5px">
                    {" "}
                    2 days
                  </Center>
                </Box>
                <Box fontWeight={900} fontSize={"20px"}>
                  {sr[key].price}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
