import React from 'react';
import { 
	Center, 
	Heading, 
	Text, 
	Icon, 
	Link, 
	Spinner, 
	Alert, 
	AlertIcon, 
	AlertTitle, 
	AlertDescription, 
	Box 
} from '@chakra-ui/react';
import BreadsTable from '../components/BreedsTable';
import { SiGithub } from "react-icons/si";
import { useQuery } from 'react-query';
import { getBreeds } from '../services/breeds';

const Home = () => {

	const { isLoading, error, data } = useQuery('getBreeds', getBreeds);

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
        <Heading as='h2' size='xl'>Chakra | Dog API</Heading>
      </Center>
      <BreadsTable breeds={ data.message }/>
      <Center h='64px'>
        <Text fontSize='md'>Created by <Link href='https://github.com/JonathanL1ma' isExternal><Icon as={SiGithub} w='18px' h='18px'/> Jonathan Lima</Link></Text>
      </Center>
    </>
  )
}

export default Home;
