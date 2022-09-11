import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Spacer,
  Button
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';

const Episode = ({ episode, playlists }) => {
  return (
    <Flex
      style={{ maxWidth: '700px', width: '100%' }}
      border="1px"
      rounded="lg"
    >
      <Box style={{ width: '125px' }}>
        <Image boxSize="125px" src={episode.podcast.image} m={2} />
        <AddIcon />
      </Box>
      <Flex ml={4} direction="column" style={{ width: '100%' }}>
        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading size="sm">{episode.title}</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} m={4}>
                <div
                  dangerouslySetInnerHTML={{ __html: episode.summary }}
                ></div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <Flex direction="column">
          <Text fontSize="lg" mr={4} isTruncated>
            {episode.podcast?.title}
          </Text>
          <Spacer />
          <Text mr={4} as="i">
            {`${episode.pubDate.month}/${episode.pubDate.day}/${episode.pubDate.year}`}
          </Text>
        </Flex>
        <div
          style={{
            marginRight: '4px',
            marginBottom: '4px',
            marginTop: 'auto'
          }}
        >
          <audio style={{ width: '100%' }} controls>
            <source src={episode.audio} type="audio/mpeg"></source>
          </audio>
        </div>
      </Flex>
    </Flex>
  );
};

export default Episode;
