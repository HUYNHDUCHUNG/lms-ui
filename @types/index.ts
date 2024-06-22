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

  export type Instructor ={
    id: number;
    email: string;
    avatar: string;
    name: string;
    birthday: string;
    about_me: string;
    telegram: string | null;
    discord: string | null;
    twitter: string | null;
    facebook: string | null;
  }

  export type Lesson ={
    id: number;
    slug: string;
    title: string;
    description: string;
    detail: string | null;
    start_at: string;
    end_at: string;
    image: string | null;
    video: string | null;
    video_from_link: string;
    num_mission: number;
    num_participant: number;
    qrcode: string | null;
  }

  export type CourseDetail = {
    id: number;
    start_at: string;
    end_at: string;
    instructor: Instructor[];
    rewards: string | null;
    lessons: Lesson[];
    created_at: string;
    updated_at: string;
    slug: string;
    title: string;
    status: string;
    requirements: string;
    description: string;
    image: string;
    video: string | null;
    link: string;
    price: number;
    discount_percent: number;
    duration: number;
    language: string;
    active: boolean;
    ave_rating: number;
    hashtag: string[];
    review: boolean;
    recept_question: boolean;
    facebook_link: string | null;
    zalo_link: string | null;
    verify_status: string;
    reject_comment: string | null;
    created_by: number;
    updated_by: number | null;
    community: number;
    document: string[];
  }

  