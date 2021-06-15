const parts = ['JavaScript1', 'PHP', 'Python'];
const output = parts.join(', ');



const buildHTMLList = (coll) => {
    const parts = [];
    for (const item of coll) {
      parts.push(`<li>${item}</li>`);
    }
  
    // Метод join объединяет элементы массива в строку
    // В качестве разделителя между значениями
    // используется то, что передано первым параметром
    const innerValue = parts.join('');
    const result = `<ul>${innerValue}</ul>`;
    return result;
  };

const buildList = buildHTMLList(parts);

console.log(buildList);