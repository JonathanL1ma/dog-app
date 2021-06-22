import React from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Center, Heading, Spinner, Image, Wrap, WrapItem } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getSubBreed, SubBreedQueryParams } from '../services/breeds';
import { useParams } from 'react-router-dom';

const SubBreed = () => {
  const { breedName, subBreedName } = useParams<SubBreedQueryParams>();
  const { isLoading, error, data } = useQuery(['breed', { breedName, subBreedName }], getSubBreed);

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
        <Heading as='h2' size='xl'>Breed: { subBreedName } { breedName }</Heading>
      </Center>
      <Center>
        <Box w='80%'>
          <Wrap justify='space-between' spacing='24px'>
            { data.message.map((subBreedImage: string) => (
              <WrapItem>
                <Image w='400px' h='400px' objectFit='cover' alt={subBreedName} src={`${subBreedImage}`} />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Center>
    </>
  )
}

export default SubBreed;
