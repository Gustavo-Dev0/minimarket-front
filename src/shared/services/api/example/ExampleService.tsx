import { Api } from "../axios-config";

type TExample = {
  data: any[];
  //totalCount: number;
}

const getAll = async (): Promise<TExample | Error> => {
  try {
    const urlRelativa = `https://rickandmortyapi.com/api/character`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
      };
    }

    return new Error('Error');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'error.');
  }
};


export const ExampleService = {
  getAll,
};