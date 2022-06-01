import {
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Flex,
  Text,
  Container,
  Image,
  Box,
  Heading,
  Stack,
  useColorModeValue,
  Center,
  Link,
  Collapse,
  Divider,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import { useState } from 'react'
import cv from './cv.pdf';
import './App.css';

const seabed = new Map();
seabed.set('Image', "/images/seabed.jpg");
seabed.set('Name', "Procedural Seabed");
seabed.set('Description', "A procedurally generated underwater environment made for the course Procedural Methods for Images at Linköping University. The project let me improve my shader knowledge and learn how to create interesting shaders using Unity Shader Graph. It also let me understand how to work with procedurally generated meshes and procedurally placed game objects, both at start- and runtime.");
seabed.set('Type', "Unity, Unity Shader Graph, C#.");
seabed.set('Link', "https://github.com/Linnet5/Underwater");

const cloth = new Map();
cloth.set('Image', "/images/cloth.jpg");
cloth.set('Name', "Cloth Physics Simulation");
cloth.set('Description', "Simulation of a piece of cloth that was visualized in a 3D environment using OpenGL. The cloth uses interactive properties to change how the cloth behaves, and the simulation is based on the mass spring model. The project was developed in the course ''Modelling Project'' at Linköping University.");
cloth.set('Type', "C++, OpenGL, MATLAB");
cloth.set('Link', "https://github.com/davidstyrbjorn/TNM085-cloth-simulation");

const raytrace = new Map();
raytrace.set('Image', "/images/raytrace.jpg");
raytrace.set('Name', "Monte Carlo Raytracer");
raytrace.set('Description', "This software is able to render images of 3D scenes in which light reflects between surfaces. It can handle spherical objects, as well as objects built out of triangular polygons. The software can also handle different surface materials that reflect the light differently. Monte Carlo ray tracing techniques are used to handle global illumination calculations.");
raytrace.set('Type', "C++, GLM");
raytrace.set('Link', "https://github.com/Linnet5/Global-Illumination-Tracer");

const clicker = new Map();
clicker.set('Image', "/images/clicker.jpg");
clicker.set('Name', "Lobbyist Clicker 3D");
clicker.set('Description', "Lobbyist Clicker is a clicker game centered around gathering currency in the form of lobbyists. Lobbyists can be generated by clicking a production building or by spending lobbyists to buy passive generation.");
clicker.set('Type', "Unity, Blender, C#");
clicker.set('Link', "https://robotgandhi.itch.io/lobbyist-clicker-3d");

const wire = new Map();
wire.set('Image', "/images/wire.jpg");
wire.set('Name', "Down to the Wire");
wire.set('Description', "Down to the Wire was an entry for the gamejam LudumDare 50. The game is a puzzle game where you race against the clock to disarm an explosive, gaining some more time for each stage solved. The game received very positive feedback and landed on overall 70th place, and with its highest rating in the ''Fun'' category, where it placed 59th.");
wire.set('Type', "Unity, C#, Figma Cubase, FL-Studio");
wire.set('Link', "https://ldjam.com/events/ludum-dare/50/down-to-the-wire");

const trainer = new Map();
trainer.set('Image', "/images/trainer.jpg");
trainer.set('Name', "VT - Bachelor Project");
trainer.set('Description', "We created a mobile game called Virtual Trainer which was developed for Android devices. The game used motion controls through the use of the built in gyro and accelerometer sensors that exist in modern phones. The project was under development for six months and during the development we used the agile development process Scrum.");
trainer.set('Type', "Unity, C#, Aseprite");
trainer.set('Link', "https://github.com/Linnet5/Kandidatprojekt");

const projectsArr = [seabed, cloth, raytrace, clicker, wire, trainer];

function App() {
  return (
    <>
    <Flex id = "background">
      <Container maxW="container.xl" p={0} color = "whitesmoke">
        <Introduction/>
      </Container>
    </Flex>
    <Flex bg="whitesmoke">
      <Container maxW="container.xl" p={0} color = "gray">
        <Projects/>
      </Container>
    </Flex>
    <Box paddingTop ={10} bg="whitesmoke">
      <Flex bg="#1d2024">
        <Container maxW="container.xl" color = "whitesmoke">
          <Box paddingLeft={[0, 10]} paddingRight={[0, 10]}>
            <Center>
              <Link href="https://www.linkedin.com/in/linus-karlsson-503b881b7/" m ={10}>LinkedIn</Link>
              <Link href="https://github.com/Linnet5" m ={10}>GitHub</Link>
            </Center>
          </Box>
        </Container>
      </Flex>
    </Box>
    </>
  )
}

function Introduction() {
  return(
    <Box paddingLeft={[0, 10]} paddingRight={[0, 10]} paddingBottom={10}>
      <Flex>
        <VStack id = "desc"
          w = "75%" 
          h="full" 
          p={10} 
          spacing = {10} 
          alignItems="flex-start"
        >
          <Text fontSize = '5xl'>Hello There!</Text>
          <Text fontSize = 'xl'>I am Linus Karlsson, a software developer.</Text>
          <Text>Welcome to my page! I love to work with creative solutions and to fully immerse myself in an exciting project. I am an ambitious and independent worker, but work at my absolut best ability in a motivated team. I know how to communicate and I have a positive attitude. Right now I am doing my master studies in engineering for media technology at Linköping University.</Text>
        </VStack>
        <VStack id = "profilePicture"
          w="25%" 
          h="full" 
          p={10} 
          spacing = {10} 
          alignItems="flex-start"
        >
          <Box paddingTop={14}/>
          <Image borderRadius = 'full' src="/images/portrait.jpg" alt='Dan Abramov' />
        </VStack>
      </Flex>
      <Center>
        <CVModalSwe/>
        <CVModalEng/>
      </Center>
      <Center>
        <Link 
          href="\src\cv.pdf"
          color="gray.400"
          fontSize="xs"
          paddingTop={1}
          px = {2}
        > (Direct Link)</Link>
        <Link 
          href="\src\cv.pdf"
          color="gray.400"
          fontSize="xs"
          paddingTop={1}
        > (Direct Link)</Link>
      </Center>
    </Box>
  );
}

function Projects() {
  return(
    <Box paddingLeft={[0,10]} paddingRight={[0,10]}>
      <Center>
      <Flex p={[2, 10]}>
        <Text fontSize = '4xl'>Projects</Text>
      </Flex>
      </Center>
      <Wrap paddingLeft={[0, 10]} paddingRight={[0, 10]} paddingBottom = {10} justify= "center"> 
        {projectsArr.map(PostComponent)}
      </Wrap>
    </Box>
  );
}

function PostComponent(props) {
  return(
  <WrapItem>
          <PortfolioPost 
            imageSrc = {props.get("Image")}
            name = {props.get("Name")}
            description = {props.get("Description")}
            type={props.get("Type")}
            link={props.get("Link")}/>
  </WrapItem>);
}

function CVModalSwe() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return(
    <>
    <Button onClick={onOpen} className = "button" bg="transparent" _hover={{ bg: '#2381e6' }} mx = {2}>View CV (Swe)</Button>
    <Modal isOpen={isOpen} onClose={onClose} size = '3xl'>
      <ModalOverlay />
      <ModalContent h = "288mm" w ="100%">
        <ModalBody >
          <iframe src={`${cv}#view=fitW`} title="cv" height="100%" width="100%" />
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  );
}

function CVModalEng() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return(
    <>
    <Button onClick={onOpen} className = "button" bg="transparent" _hover={{ bg: '#2381e6' }}>View CV (Eng)</Button>
    <Modal isOpen={isOpen} onClose={onClose} size = '3xl'>
      <ModalOverlay />
      <ModalContent h = "288mm" w ="100%">
        <ModalBody >
          <iframe src={`${cv}#view=fitW`} title="cv" height="100%" width="100%" />
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  );
}


function PortfolioPost(props) {
  const onCardClick = function() {
    window.open(props.link);
  }
  return (
    <Center p={1}>
      <Box 
        id = "card"
        onClick = {onCardClick}
        _hover = {{transition: "0.2s", cursor: "pointer"}}
        h = {'670px'}
        maxW={'360px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'160px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image className = "projectImage"
            src={props.imageSrc}
            fit="cover"
          />
        </Box>
        <Stack>
          <Heading className = "projectName"
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            paddingTop = {10}
            _groupHover = {{textDecoration: "underline"}}>
            {props.name}
          </Heading>
            <Text color={'gray.500'}>
              {props.description}
            </Text>
            <Text color={'gray.700'} fontWeight="bold">
              {props.type}
            </Text>
        </Stack>
      </Box>
    </Center>
  );
}

export default App
