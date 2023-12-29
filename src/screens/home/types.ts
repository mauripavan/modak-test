export interface IArtWorkProps {
  id: number;
  title: string;
  artist_title: string;
  date_start: number;
  date_end: number;
  image_id: string;
  description: string | null;
  date_display: string | null;
  dimensions: string | null;
  medium_display: string | null;
  place_of_origin: string | null;
  credit_line: string | null;
}
