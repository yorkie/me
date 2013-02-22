 
/* 图片分组 */

function group(photos, fn) {

	var result = {}
	var max = photos.length
	var temp, time;

	for (var i=0; i<max; i++) {

		temp = photos[i]
		time = getDateStringByFormat(temp.time, 'yyyy-MM-dd')

		if (!result[time] || Object.prototype.toString.call(result[time]) !=  '[object Array]') {
			result[time] = [temp]
			continue
		}
		result[time].push(temp)
	}

	fn.call(null, result)

}

/**
 * 时间按格式转换
 */

function getDateStringByFormat(date, format) {

	if (Object.prototype.toString.call(date) !== '[object Date]') {
		date = new Date(date)
	}

	var methodsMap = {
		'yyyy': date.getFullYear,
		'MM': function() { return date.getMonth() + 1 },
		'dd': date.getDate,
		'hh': date.getHours,
		'mm': date.getMinutes,
		'ss': date.getSeconds
	}
	var reg = /(y{4})|(M{2})|(d{2})|(h{2})|(m{2})|(s{2})/g
	var result = format.replace(reg, function(src) {
		return methodsMap[src]()
	})
	return result;

}