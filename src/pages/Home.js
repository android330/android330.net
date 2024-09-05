import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Navbar';

const projectInformation =["Over the past 20 years, large data centers in Northern Virginia have significantly increased power demands, requiring utilities like Dominion Energy to build expensive high voltage power lines using large amounts of copper.  A model was built with five nodes, each consisting of a Raspberry Pi and power supply circuit, representing global data centers. Each node’s power needs are met by a solar panel, converter, and capacitor. Software-wise, a state machine manages communication, job execution, and progress monitoring through a terminal program.",
  "My contribution to the project involved coding the state machine used by the program.  The nodes connect via TCP, and a job class interface allows for easy management of tasks, such as running the Monte Carlo algorithm for calculating pi. The software is written in C++ and compiled with g++ on Raspberry Pi OS, using the WiringPI library.  Code is open source.",
  "Over the last 2 years I have been contributing to the multiple HIL (Hardware In Loop) automotive test benches at Stellantis.  I am in charge of solving issues and validating wiring for the Next generation Dodge muscle car and the Ram 2500 HIL test benches; but I have solved issues for all of the benches that my team has handled.  I am generally the go to for HIL bench issues my coworkers are unsure of how to solve, as over the two years that I have been working at Stellantis I have developed a very thorough understanding of my craft.",
  "Contributing to these HIL test benches has taught me a variety of different skills.  The most prominent of these is the problem solving and intuition that I developed in regards to an industry that I had no prior experience in.  Solving an issue for the test bench often required me to reference multiple documents to develop a thorough understanding as to how the feature in question works, and often poses as a challenge that I find enjoyable to solve; akin to a good puzzle.  I also developed thorough communication skills, as I often had to coordiante with multiple parties on multiple teams to remedy a solution.",
  "At Revature and Cognizant, I did full stack training using the Java Spring framework and the JS and TSX React framework to contribute to the development of full stack applications.  One of these applications was based around a hypothetical merchandice store in which the user was able to shop around for products that were dynamically taken from a backend that managed product details and stock.  I didn't know a lot about web development before these projects, so this was a good oportunity to learn about CICD pipelines and full stack applications in a trainign environment.",
  "At Virginia Tech I was given a diverse eduction in terms of technical skills.  I learned much from the hardware, software, and cybersecurity coursework and projects that I worked on throughout my time there.  One of the projects that stood out to me most was creating a basic Slisp interpreter that was able to evaluate user given expressions and create graphs.  Another project that I enjoyed was in my AI class in which I created a alpha-beta pruning algorithm to determine the best move in a game of TicTacToe, and compared its efficiency and search depth to that of a standard min maxing algorithm for the same problem."
]

export default function Home(){

    return(
      <>
        <Header/>
        <Container component="main" maxWidth="lg">
          <Typography variant="h3" align="center" width="100%" sx={{paddingBottom: 2, paddingTop: 2}}>Projects</Typography>
          <Typography variant="h5" align="center" width="100%" sx={{paddingBottom: 2}}>Stellantis: Automotive Electrical HIL Test Bench Design</Typography>
          <Typography align="left" sx={{paddingBottom: 2, textIndent: 20}}>{projectInformation[2]}</Typography>
          <Typography align="left" sx={{paddingBottom: 2, textIndent: 20}}>{projectInformation[3]}</Typography>
          <Typography variant="h5" align="center" width="100%" sx={{paddingBottom: 2}}>Revature / Cognizant: Web Development</Typography>
          <Typography align="left" sx={{paddingBottom: 2, textIndent: 20}}>{projectInformation[4]}</Typography>
          <Typography variant="h5" align="center" width="100%" sx={{paddingBottom: 2}}>Senior Design Project: Power Adaptive Dynamic Compute Nodes</Typography>
          <Typography align="left" sx={{paddingBottom: 2, textIndent: 20}}>{projectInformation[0]} <Link to="./files/4806 Poster-1.pdf" target="_blank" rel='noopener noreferrer'>Poster</Link></Typography>
          <Box component="img" sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',maxHeight: "400px", alignSelf: "center", maxWidth: "100%"}} alt="test" src={"./images/seniorDesign.png"}/>
          <Typography align="left" sx={{paddingBottom: 2, textIndent: 20}}>{projectInformation[1]} <Link to="https://github.com/android330/dynamic_compute_nodes">Code Link</Link></Typography>
          <Typography variant="h5" align="center" width="100%" sx={{paddingBottom: 2}}>Virginia Tech: Coursework</Typography>
          <Typography align="left" sx={{paddingBottom: 2, textIndent: 20}}>{projectInformation[5]}</Typography>
        </Container>
      </>
    )
}