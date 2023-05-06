const postfix = ["", "k", "m"];

export default function fmtNum(num: number)  {
	let numStr = num.toString(10);

	if (numStr.length < 4) {
		return numStr;
	}
	let prefix: 0 | 1 | 2 = 0;
	let dec: string = "";

	while (numStr.length > 3) {
		dec = numStr.at(3) as string;
		numStr = numStr.slice(0, numStr.length - 3);
		prefix += 1;
	}
	return `${numStr}.${dec}${postfix[prefix]}`;
};