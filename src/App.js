import React from 'react';
import {
  ChakraProvider,
  Container,
  Box,
  Text,
  Link,
  VStack,
  Flex,
  Icon,
  Spacer,
  Stack,
  Code,
  Grid,
  Heading,
  Button,
  theme,
  StackDivider,
  AlertTitle,
  useDisclosure,
  Input,
  Drawer,DrawerBody,DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {
  EditIcon,
  ViewIcon,
  HamburgerIcon,
  ArrowUpIcon,
  ChatIcon,
  SettingsIcon,
  StarIcon,
} from '@chakra-ui/icons';


// Step Group Component 
const StepGroup = (props) => (
  <Box backgroundColor="whiteAlpha.700" w="50%" maxWidth="500px;" shadow="md" mt="5" p="3"  borderRadius='lg'>
      <Text fontSize="lg" fontWeight="bold" align="center">{props.title}</Text>
      <Text mt="2" mb="2" align="center">{props.description}</Text>
      <VStack direction="row">
        {props.children}
      </VStack>
  </Box>
)


// Step Action Icons
const iconMap = {
  read: <EditIcon />,
  watch: <ViewIcon />,
  todo: <HamburgerIcon />,
  submit: <ArrowUpIcon />,
  discuss: <ChatIcon />,
};

// Step Component
const Step = ({ action, title }) => {
  return (
    <Box w="100%">
      <Link href="#" isExternal>
        <Box display="Flex" alignItems="center" backgroundColor="white" p="2" shadow="base">
          {iconMap[action]}
          <Text ml="2" fontSize="md">
            {title}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

// Toolbar component
const Toolbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const designPanelRef = React.useRef()
  //adding a comment
  return (
    
    <Box position="fixed" top="5" right="5" bg="gray.800" p="2" zIndex="1">
      

      <Box color="white" align="center" p="3" borderBottom="white" _hover={{ bg: "gray.500", cursor: "pointer", transition: "all 0.2s" }}>
        <Link ref={designPanelRef} onClick={onOpen}>
        <EditIcon boxSize={8}/>
        <Text fontSize="sm">Design</Text>
        </Link>
      </Box>

      <Box color="white" align="center" p="3" _hover={{ bg: "gray.500", cursor: "pointer", transition: "all 0.3s" }}>
        <Link>
        <ChatIcon boxSize={8}/>
        <Text fontSize="sm">Community</Text>
        </Link>
      </Box>
   
      <Drawer isOpen={isOpen} placement='right' size="sm"
        onClose={onClose}
        finalFocusRef={designPanelRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Tabs>
              <TabList>
                <Tab>
                 <StarIcon />
                  Style
                </Tab>
                <Tab>
                  <StarIcon />
                  Settings
                </Tab>
                <Tab>
                  <StarIcon />
                  Publish
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {/* Theme content goes here */}
                </TabPanel>
                <TabPanel>
                  {/* Settings content goes here */}
                </TabPanel>
                <TabPanel>
                  {/* Publish content goes here */}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </Box>

  )
}

// Path
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container bgImage="linear-gradient(to right, #1d1e3e, #2c5364)" height="100%" minHeight="100vh" minWidth="100vw">
          <Flex direction="column" align="center">
            
            <Heading as="h1" size="xl" color={"white"} mt="10" mb="5">My Learning Path</Heading>
            <StepGroup title="Lesson 1" description="Let's learn together!">
              <Step action="read" title="Read this" />
              <Step action="watch" title="Watch this" />
              <Step action="todo" title="Do this" />
            </StepGroup>

            <StepGroup title="Lesson 2" description="Let's learn some more.">
              <Step action="read" title="Read this" />
              <Step action="watch" title="Watch this" />
              <Step action="todo" title="Do this" />
            </StepGroup>

            <StepGroup title="Lesson 3" description="Let's learn even more.">
              <Step action="read" title="Read this" />
              <Step action="watch" title="Watch this" />
              <Step action="todo" title="Do this" />
            </StepGroup>

          </Flex>
          <Toolbar />
      </Container>
    </ChakraProvider>
  );
}

export default App;
