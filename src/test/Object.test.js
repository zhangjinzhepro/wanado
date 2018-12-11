 import {
   objectMerge,
   objectGrounp
 } from '../type/ObjectMethods'

 test('objectMerge', () => {
   expect(objectMerge({
     a: 1,
     b: 2
   }, {
     c: 3,
     d: 4
   })).toEqual({
     a: 1,
     b: 2,
     c: 3,
     d: 4
   });
 });

 test('objectGrounp', () => {
   expect(objectGrounp([{
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
