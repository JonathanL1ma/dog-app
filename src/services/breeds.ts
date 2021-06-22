import { QueryFunctionContext } from 'react-query';
import { AxiosClient } from '../util/axios.util';

export interface BreedQueryParams {
  breedName: string
}

export interface SubBreedQueryParams {
  breedName: string,
  subBreedName: string
}

type BreedQueryKey = [string, BreedQueryParams];
type SubBreedQueryKey = [string, SubBreedQueryParams];

export const getBreeds = async () => {
  const { data } = await AxiosClient.get('/breeds/list/all');
  return data;
}

export const getBreed = async ({ queryKey }: QueryFunctionContext<BreedQueryKey>) => {
  const [, { breedName }] = queryKey;
  const { data } = await AxiosClient.get(`/breed/${breedName}/images/random/3`)
  return data;
}

export const getSubBreed = async ({ queryKey }: QueryFunctionContext<SubBreedQueryKey>) => {
  const [, { breedName, subBreedName }] = queryKey;
  const { data } = await AxiosClient.get(`/breed/${breedName}/${subBreedName}/images/random/3`)
  return data;
}
