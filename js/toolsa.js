// 定义函数，将元素查找方式封装起来
// getElementById()				#id
// getElementsByTagName()		tagName
// getElementsByClassName()		.className
// 参数：
//		select : 查找元素的选择器，可以为 id、类、元素选择器
//		context : 查询上下文对象
function $(selector, context) {
	// console.log(context); // 未传递context参数，默认值为undefined
	context = context || document;

	if (selector.indexOf("#") === 0) // id 查询
		return document.getElementById(selector.slice(1));
	if (selector.indexOf(".") === 0) // 根据类名查询
		// return context.getElementsByClassName(selector.slice(1));
		return getElementsByClass(selector.slice(1), context);
	return context.getElementsByTagName(selector);
	// if (selector.slice(0,1) === "#")
	// if (selector.charAt(0) === "#")
	// if (selector[0] === "#")
	// if (selector.startsWidth("#"))
}

// 解决 getElementsByClassName() 方法兼容问题
// 参数：
//		className : 类名
//		context : 查询上下文对象
function getElementsByClass(className, context) {
	context = context || document;
	if (context.getElementsByClassName)  // 支持使用 getElementsByClassName() 方法 
		return context.getElementsByClassName(className);

	/* 不支持使用 getElementsByClassName() */
	// 保存查找到的元素的数组结构
	var result = [];
	// 在查找上下文中查询出所有元素
	var tags = context.getElementsByTagName("*");
	// 遍历每一个元素，判断是否存在查询的类名
	for (var i = 0, len = tags.length; i < len; i++) {
		// 获取当前遍历到元素的所有类名
		var classNames = tags[i].className.split(" ");
		var index = inArray(className, classNames);
		if (index !== -1) // 当前遍历到的元素标签是要查找的标签
			result.push(tags[i]);
	}
	// 返回查找结果的数组
	return result;
}

// 查找 value 在 array 数组中的索引
// 参数：
// 		value: 元素
//		array: 数组
// 返回值：
//		查找到的索引，-1表示未查找到
function inArray(value, array) {
	if (Array.prototype.indexOf) // 支持使用数组的 indexOf() 方法
		return array.indexOf(value);
	/* 不支持数组 indexOf() 方法 */
	for (var i = 0, len = array.length; i < len; i++) {
		if (array[i] === value) // 找到
			return i;
	}

	return -1; // 未找到
}

// 封装用于获取/设置CSS属性的函数
function css(element, attr, value) {
	// 获取
	if (typeof attr === "string" && !value)
		return window.getComputedStyle 
				? getComputedStyle(element)[attr]
				: element.currentStyle[attr];
	// 设置CSS样式
	if (typeof attr === "string" && value)
		element.style[attr] = value; // 使用内联样式设置CSS
	else if (typeof attr === "object") {
		for (var prop in attr) {
			element.style[prop] = attr[prop];
		}
	}
}


// 事件监听解决IE中的兼容问题
//addEventListener  
	function on(element,type,callback){
		if(event.addEventListener){
			if(type,indexOf("on")===0){
				type=type.slice(2);
				event.addEventListener(type,callback);
			}			
		}else{
			if(type,indexOf("on")!==0){
				type="on"+type;
				event.attachEvent(type,callback)
			}
			
		}
	}


//获取指定元素在文档中的坐标

    function offset (element,rood){
    	var _top=0;
    	var _left=0;
    	//获取元素在文档中的定位坐标
    	var current=typeof rood==="object"
    				?element.offsetParent
    				:element;
    	while(current!==null){
    		_top=current.offsetTop;
    		_left=current.offsetLeft;
    		current=current.offsetParent;  		
    	}
    	if(typeof rood!=="object"){//获取元素在文档中的定位坐标  

    		return{ left:_left,
    				top:_top
    			}
    	}else{//为指定的element设置定位坐标
    		css(element,{
    			top:rood.top-_top+"px",
    			left:rood.left-_left+"px"
    		})
    	}
    }	


// 获取/设置 cookie
// 
// 参数：
//		key: cookie名称
//		value: 可选参数，cookie值
//		options: 可选参数，其它可配置信息，如：
//			{expires:7, path:"/", domain:"xxx.baidu.com", secure:true}
// 返回值：
//		对于获取操作，返回 key 名称所对应的 cookie 值，如果未查找到，则返回null
//		对于设置 cookie暂无返回值
   

   function cookie(key,value,options){
   	if(typeof value!=="undefined"){
   		options=options||{};
   		//最基本的名值对结构
   		var cookie=encodeURIComponent(key)+"="+encodeURIComponent(value);
   		//判断是否有设置失效时间
   		if(typeof options.expires==="number"){
   			var date=new Date();
   			date.setDate(date.getDate()+options.expires);
   			cookie+=";expires="+date.toUTCString();
   		}
   		//判断是否有设置路径
   		if(options.path)
   			cookie+=";path="+options.path;
   		//域名
   		if (options.domain)
   			cookie+=";domain="+options.domain;
   		//安全链接
   		if (options.secure)
   			cookie+=";secure="+options.domain;
   		//保存cookie
   		document.cookie=cookie; 
   		}else{//read
   			
	   		var cookies=document.cookie.split("; ");
	   		for(var i=0;i<cookies.length;i++){
	   			var cookie=cookies[i].split("=");	
	   			var name=decodeURIComponent(cookie.shift());
	   			  if(name===key){//查找cookie信息
	   				/*console.log(cookie)*/
	   				return decodeURIComponent(cookie.join("="));
	   			}
	   		}
	   		//未查找到，则返回null
	   		return null;
   		}
   }


   //删除cookie
   function removecookie(key,options){
   	options=options||{};
   	options.expires=-1;
   	cookie(key,"",options);
   }



   