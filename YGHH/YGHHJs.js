	// addZero未10加零函数
	function addZero(num) {
		return num < 10 ? "0" + num : num;
	}

	// 打印封装
	function YGHH(val) {
		console.log(val);
	}

	// 范围限定
	function calcPosition(left, top, maxleft, maxtop) {
		if (left > maxleft) left = maxleft;
		if (top > maxtop) top = maxtop;
		if (left < 0) left = 0;
		if (top < 0) top = 0;
		return {
			left,
			top
		}
	}

	// 实现复制功能
	function copyText(textEle, inputEle) {
		inputEle.val(textEle.text()); // 修改文本框的内容
		inputEle.select(); // 选中文本
		document.execCommand("copy"); // 执行浏览器复制命令
		alert("复制成功");
	}

	// 计算时间，date为传入的秒数
	function calMTime(date) {
		var leftd = Math.floor(date / (24 * 60 * 60) % 24);
		leftd = addZero(leftd);

		lefth = Math.floor(date / (60 * 60) % 24); //计算小时数
		lefth = addZero(lefth);

		leftm = Math.floor(date / (60) % 60); //计算分钟数
		leftm = addZero(leftm);

		lefts = Math.floor(date % 60); //计算秒数
		lefts = addZero(lefts);

		return leftd + "天" + lefth + ":" + leftm + ":" + lefts;
	}

	// 倒计时，date(秒数)，timeDom(现实倒计时的元素)
	function countDown(date, timeDom) {

		var interval = setInterval(function() {

			$(timeDom).text(calMTime(date));

			date == 0 ? clearInterval(interval) : date--;

		}, 1000)
	}

	// 计算字符串中出现最多的字符
	function strMaxNumStr(str) {
		let ojson = {};
		for (let i = 0; i < str.length; i++) {
			if (!ojson[str.charAt(i)]) {
				ojson[str.charAt(i)] = 1;
			} else {
				ojson[str.charAt(i)]++;
			}
		}

		let oMax = 0;
		let oStr = "";
		for (let i in ojson) {
			console.log(ojson[i])
			if (ojson[i] > oMax) {
				oMax = ojson[i];
				oStr = i;
			}
		}
		return `${str}出现最多的是${oStr}字母;出现了${oMax}次。`;
	}

	// strCharLen 判断字符串含多少个某字符
	function strCharLen(string, code) {
		let len = 0;
		for (let i = 0; i < string.length; i++)
			if (string.charAt(i) === code) len++;
		return len;
	}

	// 数组去重es6写法
	function delDuples(arr) {
		return Array.from(new Set(arr));
	}

	// 数组去重
	function delDupl(arr) {
		for (let i = 0; i < arr.length; i++) {
			for (var j = i + 1; j < arr.length; j++) {
				if (arr[i] === arr[j]) {
					arr.splice(j, 1)
					j--;
				}
			}
		}
		return arr;
	}

	//parsentEle(滚动元素的包裹元素)
	//eleListsLen(滚动列表的长度)
	//eleHeight(滚动列表的高度)
	//startNum(从哪一个开始滚动)(可选，默认从第一个开始)
	//scrollTime(滚动时间)(可选，默认2秒滚动一下)
	function localScroll(parsentEle, eleListsLen, eleHeight, startNum, scrollTime) {
		let starHeight = eleHeight * (-(startNum - 1)) || 0;
		scrollTime = scrollTime || 2000;
		setInterval(function() {
			starHeight <= -((eleListsLen - 1) * eleHeight) ? starHeight = 0 : starHeight -= eleHeight;
			$(parsentEle).css("margin-top", starHeight + 'px');
		}, scrollTime)
	}

	// 字符串截取(处理的字符串，要截取的长度)
	function limitWord(str, length) {
		if (str.length < length)
			return str;
		else
			return str.substr(0, length) + "...";
	}
	
	
	//笛卡尔积
	function doExchange(arr) {
		var len = arr.length;
		// 当数组大于等于2个的时候
		if(len >= 2) {
			// 第一个数组的长度
			var len1 = arr[0].length;
			// 第二个数组的长度
			var len2 = arr[1].length;
			// 2个数组产生的组合数
			var lenBoth = len1 * len2;
			//  申明一个新数组,做数据暂存
			var items = new Array(lenBoth);
			// 申明新数组的索引
			var index = 0;
			// 2层嵌套循环,将组合放到新数组中
			for(var i = 0; i < len1; i++) {
				for(var j = 0; j < len2; j++) {
					items[index] = arr[0][i] + ";" + arr[1][j];
					index++;
				}
			}
			// 将新组合的数组并到原数组中
			var newArr = new Array(len - 1);
			for(var i = 2; i < arr.length; i++) {
				newArr[i - 1] = arr[i];
			}
			newArr[0] = items;
			// 执行回调
			return doExchange(newArr);
		} else {
			return arr[0];
		}
	}
	
