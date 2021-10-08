import { everyNth } from '../../helpers';

export const allNumbers = [...Array(37).keys()];
export const cylinders = [27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33];
export const orphelins = [1, 20, 14, 31, 9, 6, 34, 17];
export const voisons = [22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25];
export const jeu0s = [12, 35, 3, 26, 0, 32, 15];
export const wheelNumbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];
export const columnLine1 = [...everyNth(allNumbers, 2)];
export const columnLine2 = [...everyNth(allNumbers, 1)];
export const columnLine3 = [...everyNth(allNumbers, 3)];