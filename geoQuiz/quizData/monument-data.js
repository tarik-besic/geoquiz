import {shuffleData} from '../src/utils/utilFuncs';
let data = [
  {
    imgUrl: require('../assets/images/monuments/burj.png'),
    correctOptionId: 0,
    options: [
      {
        optionId: 0,
        name: 'Burj Khalifa',
      },
      {
        optionId: 1,
        name: 'Big Ben',
      },
      {
        optionId: 2,
        name: 'Machu Pichu',
      },
      {
        optionId: 3,
        name: 'White House',
      },
    ],
  },
  {
    imgUrl: require('../assets/images/monuments/tajMahal.png'),
    correctOptionId: 3,
    options: [
      {
        optionId: 0,
        name: 'Big Ben',
      },
      {
        optionId: 1,
        name: 'Burj Khalifa',
      },
      {
        optionId: 2,
        name: 'White House',
      },
      {
        optionId: 3,
        name: 'Taj Mahal',
      },
    ],
  },
  {
    imgUrl: require('../assets/images/monuments/white_house.jpg'),
    correctOptionId: 2,
    options: [
      {
        optionId: 0,
        name: 'Colosseum',
      },
      {
        optionId: 1,
        name: 'Pentagon',
      },
      {
        optionId: 2,
        name: 'White House',
      },
      {
        optionId: 3,
        name: 'Tower of London',
      },
    ],
  },
  {
    imgUrl: require('../assets/images/monuments/bigBen.png'),
    correctOptionId: 1,
    options: [
      {
        optionId: 0,
        name: 'Peace Tower',
      },
      {
        optionId: 1,
        name: 'Big Ben',
      },
      {
        optionId: 2,
        name: 'Zimmer Tower',
      },
      {
        optionId: 3,
        name: 'Rajabai Clock Tower',
      },
    ],
  },
  {
    imgUrl: require('../assets/images/monuments/notre.png'),
    correctOptionId: 3,
    options: [
      {
        optionId: 0,
        name: 'Sydney Opera House',
      },
      {
        optionId: 1,
        name: 'Rajabai Clock Tower',
      },
      {
        optionId: 2,
        name: 'Sphinx',
      },
      {
        optionId: 3,
        name: 'Notre Dame',
      },
    ],
  },
];

const shuffleMonuments=()=>{
  data=shuffleData(data)
}

export {data, shuffleMonuments};