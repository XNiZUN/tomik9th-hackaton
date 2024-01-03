"use client";
import { Box, Center } from "@chakra-ui/react";
import Header from "../components/menu/Divs/header";
import Guide from "../components/menu/Divs/guide";
import React from "react";
export default function Home() {
  const [num, setNum] = React.useState(1);
  console.log(num);
  const Slider: any = [
    {
      src: "/slider/Slider1.jpeg",
      text: "Museum",
    },
    {
      src: "/slider/Slider2.jpeg",
      text: "Trip",
    },
    {
      src: "/slider/Slider3.webp",
      text: "Cashmere",
    },
    {
      src: "/slider/Slider4.png",
      text: "Monastery",
    },
  ];
  return (
    <div>
      <Header></Header>

      <Box w="400px" padding={"60px 1rem 0 1rem"}>
        <Box pos={"sticky"} top="55px">
          <Box>
            <Box overflowX={"scroll"} w="100%" m="12px 0">
              <Box display="flex" w="calc(363px * 8)">
                {Slider.map((el: any, key: any) => {
                  return (
                    <Box
                      key={key}
                      bgColor={"#fff"}
                      color={"#000"}
                      borderRadius={"10px"}
                      mr="10px"
                      p="6px"
                      fontWeight={"700"}
                      onClick={() => setNum(key + 1)}
                    >
                      <Box>{Slider[key].text}</Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
        <Guide index={num} />
      </Box>
    </div>
  );
}
