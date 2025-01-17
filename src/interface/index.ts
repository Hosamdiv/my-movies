export interface IMovie {
  id?: number;
  poster_path?: string;
  title: string;
  release_date: string;
  vote_average: number;
  character?: string;
}
export interface ITv {
  id?: number;
  poster_path?: string;
  name: string;
  first_air_date: string;
  vote_average: number;
  character?: string;
}
export interface IActors {
  id?: number;
  name: string;
  backdrop_path: string;
}

export interface ICastData {
  id: number;
  profile_path?: string;
  poster_path?: string;
  name: string;
}
