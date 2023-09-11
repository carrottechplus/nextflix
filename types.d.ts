export interface Movie {
	adult: boolean;
	media_type: string;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	overview: string;
	popularity: number;
	poster_path: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	title?: string;
	original_title?: string;
	release_date?: string;
	name?: string; //tv
	origin_country?: string[]; //tv
	origin_name?: string; //tv
	first_air_date?: string; //tv
}
