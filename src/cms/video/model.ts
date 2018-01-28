const uuidv4 = require('uuid/v4');
export const VideosListFake: Video[] = [
  {
    id: uuidv4(),
    url: 'L0MK7qz13bU',
    description: 'music',
    title: 'Dua Lipa - New Rules (Official Music Video)',
    status: 'Publish',
  },
  {
    id: uuidv4(),
    url: 'NfX37wjPHOM',
    description: 'Learn how to make trailer music for Hollywood trailers',
    title: 'Relaxing Music, Sleep Music, Meditation Music',
    status: 'Publish',
  },
  {
    id: uuidv4(),
    url: 'ss7EJ-PW2Uk',
    description: 'Relaxing Piano Music: Romantic Music, Beautiful Music',
    title: 'Hour Relaxing Guitar Music: Meditation Music',
    status: 'Publish',
  },
  {
    id: uuidv4(),
    url: 'NliYy7iqh-U',
    description: 'Amazing mix, I\'ve listened to this at least 100 times in the last few months.',
    title: 'Aulii Cravalho - How Far I will Go',
    status: 'Publish',
  },
  {
    id: uuidv4(),
    url: '6WbzCXSImQw',
    description: 'Learn how to make trailer music for Hollywood trailers',
    title: '5 Minute Extended Trailer (2017)',
    status: 'Publish',
  },
  {
    id: uuidv4(),
    url: '3wDrTVFVEYU',
    description: 'Relaxing Piano Music: Romantic Music, Beautiful Music',
    title: 'Avengers v Justice League: ALLIANCE - Epic Fan Film Supercut',
    status: 'Publish',
  },
  {
    id: uuidv4(),
    url: '5i09cAYfApQ',
    description: 'You can now listen to all my songs on my very own J.Fla official playlist,',
    title: 'Maroon 5 - What Lovers Do ( cover by J.Fla )',
    status: 'Publish',
  },
];

export interface VideoState {
  videos: Video[];
  loading: boolean;
  error?: string;
}

export interface Video {
  id: string;
  url: string;
  title: string;
  description?: string;
  status?: string;
}
