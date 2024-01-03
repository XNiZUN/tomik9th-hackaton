import { Box, Center } from "@chakra-ui/react";
import frontBorder from "../../data/frontBorder";
import Image from "next/image";
import { useState } from "react";
export default function Menu(open: any) {
  const [cate, setCate] = useState(false);
  const socialLink: any = [
    {
      src: "/twitter.svg",
      text: "Twitter",
    },

    {
      src: "/facebook.png",
      text: "Facebook",
    },
    {
      src: "/instagram.svg",
      text: "Instagram",
    },
  ];
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
    <Box
      pos={"fixed"}
      w="100vw"
      h="100vh"
      zIndex={9}
      opacity={open.menu === true ? 1 : 0}
      pointerEvents={open.menu === true ? "fill" : "none"}
      transitionDelay={open.menu ? "0" : "1s"}
      overflow={"hidden"}
    >
      <Box pos="absolute" w="100vw" h="100vh" display={"flex"}>
        {frontBorder().map((el: any, key: any) => {
          return (
            <Box
              key={key}
              w="calc(100vw/5)"
              h={open.menu === true ? "100vh" : "0"}
              transition={
                open.menu
                  ? "calc((" + (key + 5) + ")*50ms) ease-in"
                  : "calc((" + (key + 5) + ")*50ms) ease-out"
              }
              bgColor={"#1e2328"}
            ></Box>
          );
        })}
      </Box>
      <Box
        w="100vw"
        h="100vh"
        pos={"relative"}
        p="calc((100vw/12)*1.2) calc(100vw/12) calc(100vw/9)"
        opacity={open.menu ? 1 : 0}
        transition={".4s"}
        transitionDelay={open.menu ? ".5s" : ".0s"}
      >
        <Box letterSpacing={-1} mt="20px" h="420px">
          <Box
            fontFamily={"Monoton"}
            fontWeight={900}
            display={"flex"}
            justifyContent={"space-between"}
            mt="1rem"
            onClick={() => {
              setCate(!cate);
            }}
          >
            Category
            <Box transform={cate === false ? "rotate(180deg)" : "rotate(0deg)"}>
              <Image src="/arrow_icon.png" alt="" height={24} width={24} />
            </Box>
          </Box>
          <Box ml="2rem">
            {/* {Slider.map((el: any, key: any) => {
              return (
                <Box
                  key={key}
                  pos={cate == false ? "absolute" : "static"}
                  opacity={cate == false ? 0 : 1}
                >
                  <Box>{Slider[key].text}</Box>
                </Box>
              );
            })} */}
          </Box>
        </Box>

        <Box w="calc(100vw/4)">
          <Box>
            <Box fontSize="12px" fontWeight={600}>
              CONTACT
            </Box>
            <Box>
              {socialLink.map((el: any, key: any) => {
                return (
                  <Box key={key} display={"flex"} flexDir={"row"} m="5px 0">
                    <Center w="30px" h="30px">
                      <Image
                        height={30}
                        width={30}
                        alt=""
                        src={socialLink[key].src}
                      />
                    </Center>
                    <Center>{socialLink[key].text}</Center>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
