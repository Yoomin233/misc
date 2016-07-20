function isPrime(value) {
	// 如果没有则创建
	if(!isPrime.answers) isPrime.answers = {};
	// 如果有值则返回(记忆)
	if(isPrime.answers[value]){
		return isPrime.answers[value];
	}
	// 如果传入的值为1则设定prime=false; 否则为true
	var prime = value != 1; 
	// 计算
	for(var i = 2; i < value; i++){
		if(value % i == 0){
			prime = false; 
			break; 
		}
	}
	// 赋值完成后返回赋的值
	return isPrime.answers[value] = prime; 
}