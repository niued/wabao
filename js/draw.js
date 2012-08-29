//
function drawmap(el,map){
	var current = null;
	var R = Raphael(el, 560,470);
	
	//地图块颜色
	var attr = {
		"fill": "#825223",
		"stroke": "#ffde9d",
		"stroke-width": 1,
		"stroke-linejoin": "round"
	};
	//文本颜色
	var textattr = {
		"font": "12px Arial", 
		"fill": "#fff",
		"text-anchor": "start",
		"cursor":"pointer"
	}
	//绘制地图
	var d = map.m;
	for(var i =0;i<d.length;i++){
		var p = R.path(d[i].path);
		p.attr(attr).scale(map.sx,map.sy);
		p.translate((p.translate().matrix.e-map.rx)*(-1/map.sx),(p.translate().matrix.f-map.ry)*(-1/map.sy));
		if(d[i].hasPrize == true){
			p.attr({"fill":"#f48029"});
		}
		d[i].p = p;
	}
	//绘制文本
	for(var i =0;i<d.length;i++){
		d[i].t = R.text(d[i].x,d[i].y,d[i].name).attr(textattr).toFront();
	}
	
	//绑定事件
	for(var i=0;i<d.length;i++){
		(function(i){
			if(d[i].hasPrize == true){
				$(d[i].p[0]).css('cursor','pointer');
				//绑定区块事件
				$(d[i].p[0]).hover(
					function(){
						current && d[current].p.animate({fill: "#f48029"}, 500); 
						d[i].p.animate({fill: "#73af1e"}, 500);
						current = i;
					},
					function(){
						current!=null && d[current].p.animate({fill:"#f48029"}, 500); 
					}
				).bind("click",function(){
					$(this).showWBtip({"left":d[i].x-275+110,"top":d[i].y-125+20});
				})
				
				//绑定文本事件
				$(d[i].t[0]).hover(
					function(){
						current && d[current].p.animate({fill: "#f48029"}, 500); 
						d[i].p.animate({fill: "#73af1e"}, 500);
						current = i;
					},
					function(){
						current && d[current].p.animate({fill:"#f48029"}, 500); 
					}
				).bind("click",function(){
					$(this).showWBtip({"left":d[i].x-275+110,"top":d[i].y-125+20});
				})
			}
		
		})(i)
	}
}
