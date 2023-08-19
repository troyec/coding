const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let line1 = await readline()
    let n = parseInt(line1)
    let line2 = await readline()
    let effects = line2.split(' ').map(it => parseInt(it))
    let line3 = await readline()
    let m = parseInt(line3)
    let symptoms = []
    let cures = []
    for(let i=0;i<m;i+=2){
      let cure = parseInt(await readline())
      cures.push(cure)
      let symptom = parseInt(await readline())
      symptoms.push(symptom)
    }
    let q = parseInt(await readline())
    let medicals = []
    for(let i=0;i<q;i++){
        let medical = parseInt(await readline())
        medicals.push(medical)
    }
    console.log(countSymptom(n,effects,cures,symptoms,q,medicals));
    function countSymptom (n,currentSymptom,treatSymptom,sideEffect,numMedicals.takenMedicines){
      for(let i=0;i<numMedicals;i++){
        const medecineIndex = takenMedicines[i] - 1

        for(let j=0;j<n;j++){
          if(treatSymptom[medecineIndex][j] === 1){
            currentSymptom[j] = 0
          }

          if(sideEffect[medecineIndex][j] === 1){
            currentSymptom[j] = 1
          }

          let currentSymptomCount = 0;
          currentSymptom.forEach(it => {
            if(it === 1){
              currentSymptomCount++
            }
          })
          console.log(currentSymptomCount);
        }
      }
    }
}()
