import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Navbar';

let homeInformationList = [{pic: null,des: "Create a collection of distributed solar powered computing nodes with a human machine interface to allow persistent operations regardless of the conditions at each node. The system should be fault tolerant on a dedicated wired network, with each node capable of energy storage.", type: 2},
  {pic: "./images/react.png",des: "Test ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph", type: 2},
  {pic: "./images/react.png",des: "Test ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph", type: 1},
  {pic: null, des: "Work", type: 0},
  {pic: "./images/react.png",des: "Test ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph", type: 1},
  {pic: null}]

const projectInformation =["Over the past 20 years, large data centers in Northern Virginia have significantly increased power demands, requiring utilities like Dominion Energy to build expensive high voltage power lines using large amounts of copper.  A model was built with five nodes, each consisting of a Raspberry Pi and power supply circuit, representing global data centers. Each node’s power needs are met by a solar panel, converter, and capacitor. Software-wise, a state machine manages communication, job execution, and progress monitoring through a terminal program.",
  "My contribution to the project involved coding the state machine used by the program.  The nodes connect via TCP, and a job class interface allows for easy management of tasks, such as running the Monte Carlo algorithm for calculating pi. The software is written in C++ and compiled with g++ on Raspberry Pi OS, using the WiringPI library.  Code is open source.",
  "Over the last 2 years I have been contributing to the multiple HIL (Hardware In Loop) automotive test benches at Stellantis.  "
]

export default function Home(){
  const [homeInformation, updateHomeInformation] = useState(homeInformationList);

    return(
      <>
        <Header/>
        <Container component="main" maxWidth="lg">
          <Typography variant="h3" align="center" width="100%" sx={{paddingBottom: 2}}>Projects</Typography>
          <Typography variant="h5" align="center" width="100%" sx={{paddingBottom: 2}}>Automtive Electrical Test Bench Design</Typography>
          <Typography align="left" sx={{paddingBottom: 2}}>{projectInformation[2]}</Typography>
          <Typography variant="h5" align="center" width="100%" sx={{paddingBottom: 2}}>Senior Design Project: Power Adaptive Dynamic Compute Nodes</Typography>
          <Typography align="left" sx={{paddingBottom: 2}}>{projectInformation[0]} <Link to="./files/4806 Poster-1.pdf" target="_blank" rel='noopener noreferrer'>Poster</Link></Typography>
          <Box component="img" sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',maxHeight: "400px", alignSelf: "center", maxWidth: "100%"}} alt="test" src={"./images/seniorDesign.png"}/>
          <Typography align="left" sx={{paddingBottom: 2}}>{projectInformation[1]} <Link to="https://github.com/android330/dynamic_compute_nodes">Code Link</Link></Typography>
        </Container>
      </>
    )
}