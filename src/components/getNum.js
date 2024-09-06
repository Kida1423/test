const getNum = () => {
    const randomNumbers = [];
    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
    randomNumbers.sort((a, b) => a - b);

    return randomNumbers;
}

export default getNum;

