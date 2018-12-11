import {
  simplify,
  toArray,
  arrayGrounp
} from '../type/ArrayMethods'

test('simplify', () => {
  expect(simplify([1, 1, 2, 3, 4, 4, 5, 3, 2, 3, 3, 2, 3])).toEqual([1, 2, 3, 4, 5]);
});


test('toArray', () => {
  expect(toArray([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});


test('arrayGrounp', () => {
  expect(arrayGrounp([{
      id: 1,
      year: 2018
    },
    {
      id: 2,
      year: 2017
    },
    {
      id: 3,
      year: 2016
    },
    {
      id: 4,
      year: 2017
    },
    {
      id: 5,
      year: 2018
    },
    {
      id: 6,
      year: 2017
    },
  ], 'year')).toEqual({
    "2016": [{
      "id": 3,
      "year": 2016
    }],
    "2017": [{
       "id": 2,
       "year": 2017
      },
      {
       "id": 4,
       "year": 2017
      },
      {
       "id": 6,
       "year": 2017
      }
    ],
    "2018": [{
       "id": 1,
       "year": 2018
      },
      {
       "id": 5,
       "year": 2018
      }
    ]
  });
});
