import { v4 as uuid } from 'uuid';
import img1 from '../img/img1.PNG';
import vid1 from '../videos/vid1.mp4';

const allCoursesList = [
  {
    authors: ['Marcin 1'],
    id: uuid(),
    img: img1,
    vid: vid1,
    price: 19.99,
    title: 'Course 1',
  },
  {
    authors: ['Marcin 2'],
    id: uuid(),
    img: img1,
    vid: vid1,
    price: 29.99,
    title: 'Course 2',
  },
  {
    authors: ['Marcin 3'],
    id: uuid(),
    img: img1,
    vid: vid1,
    price: 39.99,
    title: 'Course 3',
  },
  {
    authors: ['Marcin 4'],
    id: uuid(),
    img: img1,
    vid: vid1,
    price: 49.99,
    title: 'Course 4',
  },
  {
    authors: ['Marcin 5'],
    id: uuid(),
    img: img1,
    vid: vid1,
    price: 59.99,
    title: 'Course 5',
  },
];
export default allCoursesList;
