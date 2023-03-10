import React from 'react';
import {
  ChakraProvider,
  Container,
  Box,
  Text,
  Link,
  VStack,
  Flex,
  Heading,
  Button,
  theme,
  useDisclosure,
  Icon,
  Drawer,DrawerBody,DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  Tabs, TabList, TabPanels, Tab, TabPanel, textDecoration,
} from '@chakra-ui/react';

import { 
  TextReadingIcon,
  VideoIcon,
  CheckDashIcon,
  InboxInIcon,
  ChatBubblesIcon,
  Edit2Icon,
  ChatBubblesFillIcon,
} from '@pathwright/pathicons';


// Step Group Component 
const StepGroup = (props) => (
  <Box backgroundColor="whiteAlpha.700" w="50%" maxWidth="500px;" shadow="md" mt="5" p="3"  borderRadius='lg'>
      <Heading as="h2" size="lg" align="center">{props.title}</Heading>
      <Text mt="2" mb="2" align="center">{props.description}</Text>
      <VStack direction="row">
        {props.children}
      </VStack>
  </Box>
)


// Step Action Icons
const iconMap = {
  read: TextReadingIcon,
  watch: VideoIcon,
  todo: CheckDashIcon,
  submit: InboxInIcon,
  discuss: ChatBubblesIcon,
  design: Edit2Icon,
  community: ChatBubblesFillIcon,
};

// Step Component
const Step = ({ action, title }) => {
  return (
    <Box w="100%">
      <Link href="#" isExternal>
        <Box display="Flex" alignItems="center" backgroundColor="white" p="2" shadow="base">
          <Icon as={iconMap[action]} />
          <Text ml="2" fontSize="md">
            {title}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

// Tool Option Component
const ToolOption = (props) => {
  
  return (
    <Link ref={props.designPanelRef} onClick={props.onOpen}>
      <Box color="white" align="center" p="2" borderBottom="white" _hover={{ bg: "gray.500", cursor: "pointer", transition: "all 0.2s" }}>
        <Icon as={iconMap[props.icon]} boxSize="5" />
        <Text fontSize="2xs">{props.label}</Text>
     </Box>
    </Link>
  )

}

// Toolbar component
const Toolbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const designPanelRef = React.useRef()
  
  return (
    
    <Box position="fixed" top="5" right="5" bg="gray.800" p="0" zIndex="1" maxWidth={80}>
      
      <ToolOption designPanelRef={designPanelRef} onOpen={onOpen} icon="design" label="Design" />
      <ToolOption icon="community" label="Community" />

   
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
                 
                  Style
                </Tab>
                <Tab>
                 
                  Settings
                </Tab>
                <Tab>
                 
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
              <Step action="discuss" title="Let's chat" />
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
