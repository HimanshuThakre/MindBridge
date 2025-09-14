import type { User, Counselor, Resource, ForumPost } from "./types";

export const users: User[] = [
  { name: "Alex Doe", avatarId: "user1" },
  { name: "Samira Khan", avatarId: "user2" },
  { name: "Charlie Smith", avatarId: "user3" },
  { name: "Jordan Lee", avatarId: "user4" },
];

export const counselors: Counselor[] = [
  {
    id: "1",
    name: "Dr. Anya Sharma",
    specialty: "Anxiety & Stress Management",
    avatarId: "counselor1",
  },
  {
    id: "2",
    name: "Dr. Ben Carter",
    specialty: "Depression & Mood Disorders",
    avatarId: "counselor2",
  },
  {
    id: "3",
    name: "Dr. Chloe Davis",
    specialty: "Academic & Career Counseling",
    avatarId: "counselor3",
  },
];

export const resources: Resource[] = [
  {
    id: "1",
    title: "Understanding Anxiety: A Beginner's Guide",
    type: "Article",
    category: "Anxiety",
    content: "Anxiety is a normal human emotion, but when it becomes overwhelming, it can turn into a disorder. This guide explores the differences, symptoms, and initial steps you can take to manage anxiety. We will cover topics such as generalized anxiety disorder (GAD), panic attacks, and social anxiety. Understanding the root of your anxiety is the first step towards feeling better. We provide simple, actionable advice to help you regain control.",
    imageId: "resource1",
    duration: "5 min read",
  },
  {
    id: "2",
    title: "Navigating Academic Burnout",
    type: "Article",
    category: "Stress",
    content: "Academic burnout is a state of emotional, physical, and mental exhaustion caused by prolonged or excessive stress. It can make you feel helpless, disillusioned, and completely exhausted. This article discusses the signs of burnout, its causes in an academic setting, and practical strategies for recovery and prevention. Learn how to set realistic goals, take effective breaks, and rediscover your motivation for learning.",
    imageId: "resource2",
    duration: "7 min read",
  },
  {
    id: "3",
    title: "Guided Meditation for Deep Sleep",
    type: "Audio",
    category: "Sleep",
    content: "Struggling to fall asleep? This guided meditation is designed to calm your mind and relax your body, paving the way for a night of deep, restorative sleep. Let the soothing voice and gentle background sounds guide you into a state of tranquility. No prior meditation experience is necessary. Just find a comfortable position, close your eyes, and allow yourself to drift off.",
    imageId: "resource3",
    duration: "15 min",
  },
  {
    id: "4",
    title: "The Power of Journaling for Mental Clarity",
    type: "Video",
    category: "Self-Help",
    content: "Journaling is a powerful tool for processing thoughts and emotions. This video introduces different journaling techniques, such as gratitude journaling, stream-of-consciousness writing, and bullet journaling for mental health. Discover how a simple habit of writing can reduce stress, improve self-awareness, and help you solve problems more effectively. Grab a notebook and let's get started.",
    imageId: "resource4",
    duration: "10 min",
  },
  {
    id: "5",
    title: "Building a Supportive Social Circle",
    type: "Article",
    category: "Social",
    content: "Social connection is vital for mental well-being. This article offers tips on how to build and maintain a supportive network of friends and peers in college. We discuss how to meet new people with similar interests, deepen existing friendships, and set healthy boundaries in your relationships. A strong social circle can be your best defense against loneliness and isolation.",
    imageId: "resource6",
    duration: "6 min read",
  },
  {
    id: "6",
    title: "Mindful Breathing Exercise",
    type: "Audio",
    category: "Mindfulness",
    content: "Take a few minutes out of your busy day for this mindful breathing exercise. It's a simple yet effective way to ground yourself in the present moment, reduce stress, and clear your head. This audio guide will walk you through a 5-minute breathing technique that you can do anywhere, anytime. Whether you're feeling overwhelmed or just need a quick reset, this exercise can help.",
    imageId: "resource5",
    duration: "5 min",
  },
];

export const forumPosts: ForumPost[] = [
  {
    id: "1",
    title: "Feeling overwhelmed with exam stress. Any tips?",
    author: users[0],
    createdAt: "2 days ago",
    content: "Hey everyone, I'm in my final year and the pressure is really getting to me. I have three final exams next week and I feel like I can't keep up. I'm constantly anxious and can't seem to focus. Has anyone else felt this way? What did you do to manage the stress?",
    tags: ["exams", "stress", "anxiety"],
    replies: 12,
    views: 145,
    comments: [
      {
        id: "c1",
        author: users[1],
        createdAt: "2 days ago",
        content: "I totally get that. The Pomodoro Technique really helps me. 25 minutes of focused study, then a 5-minute break. It makes studying feel less daunting.",
      },
      {
        id: "c2",
        author: users[2],
        createdAt: "1 day ago",
        content: "Make sure you're sleeping enough! Pulling all-nighters always makes my anxiety worse. And try to get a bit of exercise, even just a short walk.",
      },
    ],
  },
  {
    id: "2",
    title: "How do you deal with loneliness after moving to a new city for college?",
    author: users[3],
    createdAt: "5 days ago",
    content: "I moved here for college two months ago and I still haven't made any real friends. I'm feeling really isolated, especially on weekends. It's hard to put myself out there. Any advice on how to meet people and cope with loneliness?",
    tags: ["loneliness", "social", "new-student"],
    replies: 8,
    views: 98,
    comments: [
       {
        id: "c3",
        author: users[0],
        createdAt: "4 days ago",
        content: "Joining clubs is the best way! Find something you're interested in, whether it's a sport, a hobby, or an academic club. You'll meet people with similar interests right away.",
      },
    ],
  },
];
