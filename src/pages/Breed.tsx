import React from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Center, Heading, Spinner, Image, Wrap, WrapItem } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getBreed, BreedQueryParams } from '../services/breeds';
import { useParams } from 'react-router-dom';

const Breed = () => {

  const { breedName } = useParams<BreedQueryParams>();
  const { isLoading, error, data } = useQuery(['breed', { breedName }], getBreed);

	if (isLoading) {
		return <Center h='128px'>
			<Spinner />
		</Center>
	}

	if (error) {
		return <Center h='128px'>
			<Box w='50%'>
				<Alert status="error">
					<AlertIcon />
					<AlertTitle mr={2}>Unexpected Error: </AlertTitle>
					<AlertDescription>An error occurred during the request</AlertDescription>
				</Alert>
			</Box>
		</Center>
	}

  return (
    <>
      <Center h='128px'>
        <Heading as='h2' size='xl'>Breed: { breedName }</Heading>
      </Center>
      <Center>
        <Box w='80%'>
          <Wrap justify='space-between' spacing='24px'>
            { data.message.map((breedImage: string) => (
              <WrapItem>
                <Image w='400px' h='400px' objectFit='cover' alt={breedName} src={`${breedImage}`} />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Center>
    </>
  )
}

export default Breed;
