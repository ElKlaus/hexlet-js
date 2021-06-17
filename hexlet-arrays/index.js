
// BEGIN (write your solution here)
const getItersectionOfSortedArrays = (arrFirst, arrSecond) => {
    const res = [];
    
    for (const item of arrFirst) {
      if (arrSecond.includes(item)) {
        res.push(item);
      }
    }
    
    return res;
  };
  
  export default getItersectionOfSortedArrays;
  // END



/* eslint-disable no-param-reassign */
// BEGIN (write your solution here)
const bubleSort = (items) => {
    if (items.length === 0) return [];
  
    let count = items.length - 1;
    let toggle;
  
    do {
      toggle = false;
  
      for (let i = 0; i < count; i += 1) {
        if (items[i] > items[i + 1]) {
          const temp = items[i];
          items[i] = items[i + 1];
          items[i + 1] = temp;
          toggle = true;
        }
      }
  
      count -= 1;
    } while (toggle);
  
    return items;
  };
  
  export default bubleSort;
  // END


// const getSameCount = (arrOne, arrTwo) => {
//     const temp = arrOne.push(...arrTwo);
  
    
//     // if (arrOne === [] && arrTwo === []) return 0;
  
  
    
    
//     // const result = _.uniq(flatten(temp));
//     console.log(temp);
//     // return result.length;
// };





// getSameCount([1, 2, 3, 5, 5, 5, 6], [2, 8, 10]);


    // const flatten = (coll) => {
    //     const result = [];
    //     for (const item of coll) {
    //     // Array.isArray — функция-предикат стандартной библиотеки,
    //     // которая проверяет, является ли значение массивом.
    //         if (Array.isArray(item)) {
    //             // Если значение массив, то проходим по всем его элементам
    //             // Здесь появился вложенный цикл
    //             for (const subItem of item) {
    //             // и добавляем их в результирующий массив
    //             result.push(subItem);
    //             }
    //         } else {
    //             // Если значение не массив, то сразу добавляем его в результирующий массив
    //             result.push(item);
    //         }
    //     }
    
    //     return result;
    // };


    // const flatten = (items) => {
    //     const flattenResult = [];
        
    //     for (let item = 0; item < items.length; item += 1) {
    //       if (Array.isArray(item)) {
    //         for (const subItem of item) {
    //           flattenResult.push(subItem)
    //         }
    //       } else result.push(item)
    //     }
    
    //     return flattenResult;
    //   }
  
// const parts = ['JavaScript1', 'PHP', 'Python'];
// const output = parts.join(', ');



// const buildHTMLList = (coll) => {
//     const parts = [];
//     for (const item of coll) {
//       parts.push(`<li>${item}</li>`);
//     }
  
//     // Метод join объединяет элементы массива в строку
//     // В качестве разделителя между значениями
//     // используется то, что передано первым параметром
//     const innerValue = parts.join('');
//     const result = `<ul>${innerValue}</ul>`;
//     return result;
//   };

// const buildList = buildHTMLList(parts);

// console.log(buildList);