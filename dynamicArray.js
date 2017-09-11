function processData(input) {
    // Enter your code here
    let lastAns = 0,
        seqList = [],
        seq = null
    
    let inputArr = input.split('\n')
    // console.log(inputArr)
    
    let metaData = inputArr.shift();
    let N = metaData[0];
    let seqListLength = metaData[1];
    // console.log('metaData', metaData)
    
    for(let i = 0; i<N; i++) seqList.push([]);
    inputArr = inputArr.map( q => q.split(' '));
    // console.log(inputArr)
    
    seqNumber = inputArr[0,0]
    for(let index=0; index < inputArr.length; index++) {
        // console.log(index, inputArr[index])
        let x = inputArr[index][1];
        let y = inputArr[index][2];
        switch(inputArr[index][0]) {
            case '1':
                seq = (x^lastAns)%N;
                seqList[seq].push(y);
                break;
                
            case '2':
                seq = (x^lastAns)%N;
                lastAns = seqList[seq][y % seqList[seq].length];
                console.log(lastAns);
                break;
            default: 
                console.log('not catching!!!')
        }
    }

} 