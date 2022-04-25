const Isbn13 = (n: string) => {
	let result: string = 'Invalid'
	
	if(n.length===13){

		let vNum = n.split('').reduce((a,d,i)=>i%2===0?a+=Number(d):a+=Number(d)*3,0);
		if(vNum%10===0){
			result = 'Valid';
		}
	} else if(n.length===10){
		let vNum = n.split('').reduce((a, d, i)=>d.match(/x/i)?a+=10*(10-i):a+=Number(d)*(10-i),0);
		if(vNum%11===0){
			result = ('978'+n).slice(0, -1);
			let sum = result.split('').reduce((a,d,i)=>i%2===0?a+=Number(d):a+=Number(d)*3,0);
			let lastDigit = 10-sum%10;
			result += lastDigit;
		}
	}
	return result;
}

console.log("isbn13 result:", Isbn13("0316066524"));

export default Isbn13;
