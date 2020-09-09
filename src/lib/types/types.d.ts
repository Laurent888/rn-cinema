export interface TheaterProps {
  name: string;
  city: string;
}

interface ScreeningProp {
  theatre: string;
  times: string[];
}

export interface MovieProps {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: any[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Production: string;
  screenings: ScreeningProp[];
  feature: string;
}
