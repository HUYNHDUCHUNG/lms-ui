export type Course = {
    id: number;
    slug: string;
    title: string;
    description: string;
    start_at: string; // Consider using Date type for further processing
    end_at: string;   // Consider using Date type for further processing
    image: string;
    video: string | null; // Can be a string URL or null
    link: string; // Consider if this should be optional
    lessons: number[]; // Assuming these are IDs of lessons
    price: number;
    discount_percent: number;
    duration: number; // Duration in months or weeks
    community: {
      id: number;
      slug: string;
      name: string;
      icon: string;
    };
    ave_rating: number; // Average rating out of 5
    hashtag: string[]; // Array of hashtags
    language: string;
    order_before: boolean; // Indicates if there's an order deadline
  };

  export type Category = {
    id: number;
    name: string;
    description?: string;
    image?: string;
    num_course: number;
    course: Course[];
  }

  