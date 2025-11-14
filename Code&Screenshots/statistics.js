
const numbersEl = document.getElementById('list');
const outputEl = document.getElementById('result');
const meanEl = document.getElementById('mean');
const varEl = document.getElementById('variance');
const sdEl = document.getElementById('sd');
const errp=document.getElementById('error');

const numRegex = /^[+-]?(?:\d+|\d*\.\d+)$/;

function parseInput(str) {
    const tokens = str.trim().split(/\s+/).filter(t => t.length > 0);
    if (tokens.length === 0) { errp.innerHTML='Please enter at least one number.' };

    const nums = [];
    for (const t of tokens) {
      if (!numRegex.test(t)) {
        errp.innerHTML=`Invalid token "${t}". Only numeric values allowed (e.g. -3, 2.5).`;
      }
      nums.push(Number(t));
    }
    return { nums };
  }

    function mean(arr) {
    if (arr.length === 0) return NaN;
    return arr.reduce((s, v) => s + v, 0) / arr.length;
  }

  function variancePopulation(arr, mu) {
    if (arr.length === 0) return NaN;
    const m = mu !== undefined ? mu : mean(arr);
    const sumSq = arr.reduce((s, v) => s + Math.pow(v - m, 2), 0);
    return sumSq / arr.length;
  }

  function stddevPopulation(arr, mu) {
    return Math.sqrt(variancePopulation(arr, mu));
  }


  meanEl.addEventListener('click', () => {
    const input = numbersEl.value;
    const parsed = parseInput(input);
    const arr = parsed.nums;
    const m = mean(arr);
    outputEl.innerHTML=`Mean : ${m}`;
  });

  varEl.addEventListener('click', () => {
    const input = numbersEl.value;
    const parsed = parseInput(input);
    const arr = parsed.nums;
    const m = variancePopulation(arr);
    outputEl.innerHTML=`Variance : ${m}`;
  });

   sdEl.addEventListener('click', () => {
    const input = numbersEl.value;
    const parsed = parseInput(input);
    const arr = parsed.nums;
    const m = stddevPopulation(arr);
    outputEl.innerHTML=`Standard Deviation : ${m}`;
  });
