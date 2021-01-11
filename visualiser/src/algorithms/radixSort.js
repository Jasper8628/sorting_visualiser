const bars = []
// const sampleArray2 = [0, 7, 52, 12, 1, 3, 5, 6, 2, 66, 11, 9, 43, 21, 8, 4, 5, 9, 1]
const sampleSize = 9999
const digit = sampleSize.toString().length;
for (let i = 0; i < 100; i++) {
  bars.push(Math.floor(Math.random() * sampleSize))
}

export const radixSort = async (count, arr) => {
  const arrs = [[], [], [], [], [], [], [], [], [], []];
  let newArr = [];
  arr.forEach(element => {
    const num = element.value.toString();
    const char = ('0'.repeat(digit - num.length) + num)[count]
    switch (char) {
      case '0':
        arrs[0].push(element);
        break;
      case '1':
        arrs[1].push(element);
        break;
      case '2':
        arrs[2].push(element);
        break;
      case '3':
        arrs[3].push(element);
        break;
      case '4':
        arrs[4].push(element);
        break;
      case '5':
        arrs[5].push(element);
        break;
      case '6':
        arrs[6].push(element);
        break;
      case '7':
        arrs[7].push(element);
        break;
      case '8':
        arrs[8].push(element);
        break;
      case '9':
        arrs[9].push(element);
        break;
    }
  })
  arrs.forEach(element => newArr = newArr.concat(element))
  // const pasArr = () => {
  const passArr = newArr.forEach((element, index) => {
    const barNew = document.getElementById(index);
    const barOld = document.getElementById(element.index)
    newArr[index].index = index;
    setTimeout(() => {
      barNew.style.height = `${element.value}px`;
      // barOld.style.height = `${arr[index].value}px`;
      barNew.style.backgroundColor = 'magenta'
      barOld.style.backgroundColor = 'magenta'
      setTimeout(() => {
        barNew.style.backgroundColor = 'aqua'
        barOld.style.backgroundColor = 'aqua'
      }, 50);
    }, 50 * index * (4 - count) * 0.3);
  })
  //   return new Promise(resolve => {
  //     resolve(passArr)
  //   })
  // }
  count--
  // newArr = await pasArr()
  if (count >= 0) {
    radixSort(count, newArr)
  } else { return newArr }
  // console.log('logging: ', (4 - count), 'times', pasArr)
}
// counting(digit - 1, bars)
