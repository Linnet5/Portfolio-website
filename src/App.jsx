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
  Spacer,
  Grid,
  Text,
  Fade,
  Container,
  Image,
  Box,
  Heading,
  Stack,
  StackDivider,
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
import currentProjectsData from './currentProjectsData.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <>
      <Flex className="bg">
        <Container maxW="container.xl" p={0} color="whitesmoke">
          <Introduction />
        </Container>
      </Flex>
      <Flex bg="whitesmoke">
        <Container maxW="container.xl" p={0} paddingTop={10} color="gray">
          <FeaturedProjects data={currentProjectsData} header="Featured Project" />
          <Projects data={projectsData} header="Other Projects" />
        </Container>
      </Flex>
      <Box paddingTop={10} bg="whitesmoke">
        <Flex bg="#1d2024" h={[0, 0, 0, "100%"]}>
          <Container maxW="container.xl" color="whitesmoke">
            <Box paddingLeft={[0, 0, 10]} paddingRight={[0, 0, 10]}>
              <Center>
                <Link href="https://www.linkedin.com/in/linus-karlsson-503b881b7/" m={[0, 0, 10]}>LinkedIn</Link>
                <Link href="https://github.com/Linnet5" m={[0, 0, 10]}>GitHub</Link>
                <Link href="https://itch.io/profile/linnet5" m={[0, 0, 10]}>Itch.io</Link>
                <Link href="https://open.spotify.com/artist/2hFfCBnH3r2tF6Ftj5L6dy?si=etOJAj5zTFWV7ymPd2MzvA" m={[0, 0, 10]}>My music</Link>
                <Link href="mailto:linus.karlsson.96@hotmail.com" m={[0, 0, 10]}>Contact</Link>
              </Center>
            </Box>
          </Container>
        </Flex>
      </Box>
    </>
  )
}

function Introduction() {
  return (
    <Box paddingLeft={[0, 10]} paddingRight={[0, 10]} paddingBottom={10}>
      <Flex>
        <VStack id="desc"
          w="75%"
          h="full"
          p={10}
          spacing={3}
          alignItems="flex-start"
        >
          <Text fontSize={['2xl', '5xl', '5xl']} fontWeight="600" className="reveal-text">Hello There!</Text>
          <Text fontSize='xl'>I am Linus Karlsson, an M.Sc Student in Media Technology and Engineering.</Text>
          <Text>Welcome to my page! I love to work with creative solutions and to fully immerse myself in an exciting project. I am an ambitious and independent worker, but work at my absolute best ability in an engaged team. I know how to communicate and I have a positive attitude. Right now I am doing my master studies in media technology and engineering at Linköping University.</Text>
        </VStack>
        <VStack id="profilePicture"
          w="25%"
          h="full"
          p={10}
          alignItems="flex-start"
        >
          <Box paddingTop={0} />
          <Image borderRadius='full' src="/images/portrait.jpg" alt='Linus port' />
        </VStack>
      </Flex>
      <Center>
        <CVModalSwe />
      </Center>
      <Center>
        <Link
          href="\src\cv.pdf"
          color="gray.400"
          fontSize="xs"
          paddingTop={1}
          px={2}
        > (Direct Link)</Link>
      </Center>
    </Box>
  );
}

function FeaturedProjects(props) {
  var data = props.data;
  return (
    <Box>
      <Center>
        <Text fontSize='4xl'>{props.header}</Text>
      </Center>
      {data.projects.map((props) => {
        return (
          <Center>

            <Box>
              <Carousel autoPlay={true} infiniteLoop={true} stopOnHover={true} interval={6000} emulateTouch={true}>
                <Box backgroundImage={props.Image} h={["200px", "300px", "500px", "700px"]} backgroundSize="cover" backgroundPosition="center" onClick={() => window.open(props.Link)} _hover={{ transition: "0.2s", cursor: "pointer" }} />
                <Box backgroundImage={props.Image2} h={["200px", "300px", "500px", "700px"]} backgroundSize="cover" backgroundPosition="center" onClick={() => window.open(props.Link)} _hover={{ transition: "0.2s", cursor: "pointer" }} />
                <Box backgroundImage={props.Image3} h={["200px", "300px", "500px", "700px"]} backgroundSize="cover" backgroundPosition="center" onClick={() => window.open(props.Link)} _hover={{ transition: "0.2s", cursor: "pointer" }} />

              </Carousel >
              <Box>
                <Stack padding={[5, 0]} marginTop={-6} justifyContent="space-between" alignItems="left" divider={<StackDivider borderColor='gray.300' />}>
                  <Text h="80%" textAlign="left" textColor="black" overflow="hidden">{props.Description}</Text>
                  <Text fontWeight="bold" textAlign="left" textColor="black">{props.Type}</Text>
                </Stack>
              </Box>
            </Box>
          </Center>
        )
      })}
    </Box >
  );
}

function Projects(props) {
  var data = props.data;
  return (
    <Box paddingLeft={[0, 0, 10]} paddingRight={[0, 0, 10]}>
      <Center>
        <Flex p={[2, 10]}>
          <Text fontSize='4xl'>{props.header}</Text>
        </Flex>
      </Center>
      <Wrap paddingLeft={[0, 10]} paddingRight={[0, 10]} paddingBottom={20} justify="center">
        {data.projects.map(PostComponent)}
      </Wrap>
    </Box>
  );
}

function PostComponent(props) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <WrapItem onLoad={onToggle}>
      <ScaleFade in={isOpen} offsetY='20px'>
        <PortfolioPost
          header={props.header}
          imageSrc={props.Image}
          name={props.Name}
          description={props.Description}
          type={props.Type}
          link={props.Link} />
      </ScaleFade>
    </WrapItem>);
}

function CVModalSwe() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} className="button" bg="transparent" _hover={{ bg: '#2381e6' }} mx={2}>View Resume</Button>
      <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
        <ModalOverlay />
        <ModalContent h="288mm" w="100%">
          <ModalBody >
            <iframe src={`${cv}#view=fitW`} title="cv" height="100%" width="100%" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function PortfolioPost(props) {
  const onCardClick = function () {
    window.open(props.link);
  }
  return (
    <Center p={1}>
      <Box
        id="card"
        onClick={onCardClick}
        _hover={{ transition: "0.2s", cursor: "pointer" }}
        h={'fit-content'}
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
          mb={6}>
          <Image className="projectImage"
            src={props.imageSrc}
            fit="center"
          />
        </Box>
        <Stack
          divider={<StackDivider borderColor='gray.300' />}
        >
          <Box>
            <Heading className="projectName"
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
              pt={9}
              pb={2}>
              {props.name}
            </Heading>
            <Text color={'gray.500'} h='261px'>
              {props.description}
            </Text>
          </Box>
          <Box>
            <Text color={'gray.700'} fontWeight="bold">
              {props.type}
            </Text>
          </Box>
        </Stack>
      </Box>
    </Center >
  );
}

export default App
