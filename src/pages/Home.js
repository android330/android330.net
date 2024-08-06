import { Box, Container } from '@mui/material';
import HomeInfoBlock from '../components/HomeInfoBlock';
import { useState } from 'react';

let homeInformationList = [{pic: "./images/react.png",des: "Test ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph"},
  {pic: "./images/react.png",des: "Test ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph"},
  {pic: "./images/react.png",des: "Test ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest ParagraphTest Paragraph"}]

export default function Home(){
  const [homeInformation, updateHomeInformation] = useState(homeInformationList);

    return(
      <Container component="main" maxWidth="md" sx={{ p: 2, border: '1px dashed grey' }}>
        {homeInformation.map((infoChunk) =>
          <HomeInfoBlock descriptionInfo={infoChunk}/>
        )}
        
      </Container>
    )
}