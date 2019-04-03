export const searchByButtons = {
  title: 'SEARCH BY',
  buttons: [
    {
      title: 'Title',
      value: 'title',
      name: 'search',
      checked: true,
    },
    {
      title: 'Genres',
      value: 'genres',
      name: 'search',
      checked: false,
    },
  ],
};

export const sortByButtons = {
  title: 'SORT BY',
  buttons: [
    {
      title: 'release date',
      value: 'release_date',
      name: 'filter',
      checked: true,
    },
    {
      title: 'rating',
      value: 'vote_average',
      name: 'filter',
      checked: false,
    },
  ],
};
