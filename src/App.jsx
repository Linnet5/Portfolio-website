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
  ScaleFade,
} from '@chakra-ui/react'

import { useState } from 'react'
import cv from './cv.pdf';
import './App.css';
import projectsData from './projectsData.json';

function App() {
  return (
    <>
    <Flex className = "bg">
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
              <Link href= "mailto:linus.karlsson.96@hotmail.com" m ={10}>Contact</Link>
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
          spacing = {5} 
          alignItems="flex-start"
        >
          <Text fontSize = '5xl' fontWeight="600" className = "reveal-text">Hello There!</Text>
          <Text fontSize = 'xl'>I am Linus Karlsson, a software developer.</Text> 
          <Text>Welcome to my page! I love to work with creative solutions and to fully immerse myself in an exciting project. I am an ambitious and independent worker, but work at my absolut best ability in a motivated team. I know how to communicate and I have a positive attitude. Right now I am doing my master studies in engineering for media technology at Linköping University.</Text>
        </VStack>
        <VStack id = "profilePicture"
          w="25%" 
          h="full" 
          p={10} 
          alignItems="flex-start"
        >
          <Box paddingTop={0}/>
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
        {projectsData.projects.map(PostComponent)}
      </Wrap>
    </Box>
  );
}

function PostComponent(props) {
  const { isOpen, onToggle } = useDisclosure()

  return(
  <WrapItem onLoad={onToggle}>
    <ScaleFade in={isOpen} offsetY='20px'>
          <PortfolioPost 
            imageSrc = {props.Image}
            name = {props.Name}
            description = {props.Description}
            type={props.Type}
            link={props.Link}/>                
    </ScaleFade>
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
        h = {'575px'}
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
