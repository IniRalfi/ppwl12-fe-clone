export interface Review {
  id: string;
  userId: string;
  userName: string;
  userLocation: string;
  userAvatar: string;
  rating: number;
  date: string;
  stayType?: string;
  comment: string;
  hostResponse?: {
    message: string;
    date: string;
  };
}

export interface RatingBreakdown {
  category: string;
  score: number;
  icon: string;
}

export interface ReviewTag {
  id: string;
  label: string;
  count: number;
}

export interface ReviewSummaryData {
  overallRating: number;
  totalReviews: number;
  isGuestFavorite: boolean;
  ratingBreakdown: RatingBreakdown[];
}
