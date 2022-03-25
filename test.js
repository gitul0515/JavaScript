const LOTTO_SIZE = 6;
const LOTTO_RANGE = 45;
const clientLottoNumbersGenerator = () => {
  const clientLottoNumbers = Array(LOTTO_SIZE);
  const lottoNumbersRangeArray = Array.from(Array(LOTTO_RANGE), (_, i) => (i += 1));

    const randomNumber = () => lottoNumbersRangeArray.splice(Math.floor(Math.random() * LOTTO_RANGE) + 1, 1);
    
    for (let i = 0; i < LOTTO_SIZE; i++) {
        clientLottoNumbers[i] = randomNumber();
    }
    return clientLottoNumbers;
};

const lottoNumbersRangeArray = Array.from(Array(LOTTO_RANGE), (_, i) => (i += 1));
lottoNumbersRangeArray.splice(0, 1);
lottoNumbersRangeArray.splice(0, 1);
lottoNumbersRangeArray.splice(0, 1);
lottoNumbersRangeArray.splice(0, 1);
lottoNumbersRangeArray.splice(0, 1);
console.log(lottoNumbersRangeArray);
