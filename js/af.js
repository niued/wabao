var uzaiMap = uzaiMap || {};

uzaiMap.af = function(el){
	var current = null;
	var R = Raphael(el, 560,470);//大小与矢量图形文件图形对应；这是比较操蛋的地方高宽不自适应。560 470
	var attr = {
		"fill": "#825223",
		"stroke": "#ffde9d",
		"stroke-width": 0.5,
		"stroke-linejoin": "round"
	};
	var textattr = {
		"font": "12px Arial", 
		"fill": "#fff",
		"text-anchor": "start",
		"cursor":"pointer"
	}

		var af = {};		
		af.AO = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:true,
			path : R.path("M497.994,242.615l-0.643-2.060l1.030-1.159l0.900-0.515l0.902,1.031l-0.902,0.516l-0.514,0.642l0,1.159l0.773-0.386zM496.836,273.64l-0.257-1.804l0.385-2.317l0.900-2.445l0.130-1.158l0.901-2.447l0.643-1.157l1.545-1.674l0.902-1.288l0.257-1.931l-0.129-1.544l-0.771-0.902l-0.775-1.673l-0.642-1.674l0.129-0.515l0.772-1.029l-0.772-2.704l-0.516-1.802l-1.414-1.674l0.257-0.515l1.157-0.387l0.774,0.131l0.900-0.389l7.982,0.131l0.643,1.930l0.771,1.674l0.645,0.773l1.031,1.415l1.801-0.128l0.900-0.387l1.418,0.387l0.514-0.772l0.644-1.545l1.673-0.128l0.128-0.388l1.417,0l-0.258,0.902l3.219,0l0.128,1.672l0.514,1.031l-0.385,1.673l0.129,1.674l0.900,1.030l-0.129,3.091l0.645-0.131l1.158,0l1.674-0.385l1.287,0.128l0.257,0.902l-0.257,1.286l0.387,1.287l-0.387,0.903l0.257,1.028l-5.536-0.127l-0.128,8.625l1.804,2.187l1.673,1.674l-4.892,1.158l-6.566-0.385l-1.801-1.287l-10.944,0.128l-0.384,0.128l-1.674-1.159l-1.672-0.128l-1.674,0.515l1.288-0.516z").attr(attr)}
			
			af.BF = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M457.573,201.035l-1.802,-0.773l-1.287,0.129l-0.902,0.644l-1.286,-0.515l-0.387,-0.902l-1.287,-0.643l-0.128,-1.545l0.771,-1.159l-0.128,-0.900l2.189,-2.189l0.385,-1.802l0.773,-0.644l1.287,0.257l1.159,-0.514l0.257,-0.645l2.189,-1.285l0.514,-0.774l2.446,-1.158l1.545,-0.387l0.644,0.516l1.673,0l-0.129,1.287l0.258,1.287l1.545,1.673l0.128,1.417l3.091,0.515l0,1.930l-0.645,0.774l-1.287,0.257l-0.515,1.159l-1.030,0.256l-2.317,0l-1.288,-0.256l-0.770,0.514l-1.289,-0.258l-4.634,0.129l-0.129,1.545l-0.386,-2.060z").attr(attr)}
			
			af.BI = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:true,
			path : R.path("M544.208,239.14l-0.130-3.347l-0.643-1.159l1.673,0.258l0.773-1.545l1.415,0.128l0.131,1.030l0.642,0.643l0,0.903l-0.642,0.513l-1.030,1.416l-1.031,1.032l1.158-0.128z").attr(attr)}
			
			af.BJ = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M472.505,210.174l-2.188,0.258l-0.773-1.803l0.131-6.307l-0.516-0.515l-0.129-1.287l-0.900-0.902l-0.775-0.900l0.259-1.417l1.030-0.256l0.515-1.159l1.287-0.257l0.645-0.774l0.901-0.773l0.901-0.127l2.059,1.674l-0.129,0.771l0.643,1.673l-0.514,1.031l0.258,0.773l-1.288,1.672l-0.901,0.773l-0.386,1.674l0,1.802l0.130-4.376z").attr(attr)}
			
			af.BW = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M534.296,276.857l0.516,0.516l0.900,1.544l3.089,2.962l1.158,0.256l0,1.030l0.772,1.674l2.061,0.385l1.673,1.290l-3.734,1.929l-2.445,2.059l-0.901,1.804l-0.773,1.030l-1.545,0.128l-0.386,1.287l-0.258,0.901l-1.801,0.645l-2.188,-0.129l-1.288,-0.773l-1.159,-0.387l-1.287,0.644l-0.642,1.286l-1.287,0.775l-1.290,1.287l-1.929,0.256l-0.645,-0.901l0.258,-1.673l-1.544,-2.575l-0.772,-0.386l0,-7.852l2.574,-0.130l0.129,-9.654l2.060,0l4.119,-1.030l1.029,1.158l1.674,-1.028l0.901,0l1.416,-0.645l0.515,0.259l-1.030,-2.058z").attr(attr)}
			
			af.CD = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M500.183,239.912l-0.902,-1.031l-0.900,0.515l-1.030,1.159l-2.189,-2.832l2.059,-1.544l-1.029,-1.804l0.901,-0.643l1.802,-0.257l0.256,-1.287l1.416,1.287l2.319,0.129l0.900,-1.288l0.258,-1.802l-0.258,-2.059l-1.286,-1.545l1.157,-3.219l-0.642,-0.515l-2.060,0.258l-0.643,-1.415l0.127,-1.160l3.475,0.129l2.062,0.644l2.187,0.643l0.259,-1.416l1.415,-2.446l1.545,-1.544l1.803,0.514l1.800,0.130l-0.257,1.673l-0.770,1.416l-0.517,1.673l-0.386,2.448l0.257,1.414l-0.514,1.030l0,0.901l-0.385,0.901l-1.805,1.287l-1.156,1.417l-1.160,2.575l0,2.190l-0.645,0.898l-1.543,1.288l-1.544,1.804l-1.032,-0.516l-0.128,-0.772l-1.544,0l-0.901,1.030l0.772,0.258z").attr(attr)}
			
			af.CF = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M506.361,206.957l2.318,-0.129l0.384,-0.773l0.517,0.129l0.642,0.515l3.349,-1.029l1.157,-1.031l1.416,-0.901l-0.256,-0.900l0.772,-0.259l2.574,0.130l2.574,-1.287l1.932,-2.962l1.417,-1.030l1.672,-0.514l0.258,1.157l1.545,1.674l0,1.159l-0.387,1.159l0.129,0.773l1.029,0.771l2.059,1.159l1.419,1.159l0,0.901l1.800,1.287l1.159,1.287l0.643,1.544l2.059,1.031l0.389,0.901l-0.903,0.257l-1.674,0l-2.058,-0.257l-0.901,0.129l-0.514,0.643l-0.775,0.129l-1.158,-0.514l-2.961,1.287l-1.287,-0.258l-0.258,0.258l-0.900,1.544l-1.930,-0.514l-2.060,-0.258l-1.674,-1.030l-2.190,-0.900l-1.415,0.900l-1.030,1.417l-0.258,1.802l-1.800,-0.130l-1.803,-0.514l-1.545,1.544l-1.415,2.446l-0.387,-0.772l-0.129,-1.287l-1.157,-0.773l-1.031,-1.416l-0.257,-1.029l-1.288,-1.416l0.258,-0.772l-0.258,-1.160l0.258,-2.060l0.643,-0.515l-1.287,2.702z").attr(attr)}
			
			af.CG = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M548.327,217.513l-0.258,3.217l1.159,0.258l-0.901,1.031l-1.031,0.643l-1.029,1.416l-0.514,1.287l-0.131,2.189l-0.643,1.028l0,2.061l-0.901,0.643l0,1.674l-0.386,0.128l-0.257,1.546l0.643,1.159l0.130,3.347l0.514,2.445l-0.257,1.415l0.514,1.546l1.545,1.546l1.545,3.346l-1.030,-0.258l-3.733,0.386l-0.643,0.387l-0.771,1.673l0.642,1.288l-0.514,3.088l-0.387,2.705l0.772,0.514l1.932,1.031l0.642,-0.516l0.258,2.961l-2.058,0l-1.159,-1.545l-0.903,-1.158l-2.058,-0.387l-0.644,-1.416l-1.674,0.901l-2.187,-0.385l-0.903,-1.158l-1.672,-0.258l-1.289,0l-0.128,-0.772l-0.901,-0.130l-1.287,-0.128l-1.674,0.385l-1.158,0l-0.645,0.131l0.129,-3.091l-0.900,-1.030l-0.129,-1.674l0.385,-1.673l-0.514,-1.031l-0.128,-1.672l-3.219,0l0.258,-0.902l-1.417,0l-0.128,0.388l-1.673,0.128l-0.644,1.545l-0.514,0.772l-1.418,-0.387l-0.900,0.387l-1.801,0.128l-1.031,-1.415l-0.645,-0.773l-0.771,-1.674l-0.643,-1.930l-7.982,-0.131l-0.900,0.389l-0.774,-0.131l-1.157,0.387l-0.387,-0.772l0.773,-0.386l0,-1.159l0.514,-0.642l0.902,-0.516l0.772,0.258l0.901,-1.030l1.544,0l0.128,0.772l1.032,0.516l1.544,-1.804l1.543,-1.288l0.645,-0.898l0,-2.190l1.160,-2.575l1.156,-1.417l1.805,-1.287l0.385,-0.901l0,-0.901l0.514,-1.030l-0.257,-1.414l0.386,-2.448l0.517,-1.673l0.770,-1.416l0.257,-1.673l0.258,-1.802l1.030,-1.417l1.415,-0.900l2.190,0.900l1.674,1.030l2.060,0.258l1.930,0.514l0.900,-1.544l0.258,-0.258l1.287,0.258l2.961,-1.287l1.158,0.514l0.775,-0.129l0.514,-0.643l0.901,-0.129l2.058,0.257l1.674,0l0.903,-0.257l1.672,2.188l1.158,0.387l0.773,-0.515l1.287,0.257l1.416,-0.643l0.644,1.159l-2.446,-1.802z").attr(attr)}
			af.CI = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M457.573,213.521l-1.287,0l-1.802,-0.514l-1.802,0l-3.219,0.514l-1.802,0.773l-2.703,1.030l-0.516,-0.129l0.259,-2.188l0.257,-0.387l-0.129,-1.030l-1.159,-1.158l-0.772,-0.129l-0.901,-0.772l0.644,-1.158l-0.258,-1.287l0.129,-0.773l0.386,0l0.129,-1.159l-0.129,-0.644l0.258,-0.257l1.030,-0.387l-0.772,-2.187l-0.516,-1.031l0.129,-0.901l0.515,-0.257l0.387,-0.258l0.772,0.386l2.059,0l0.514,-0.772l0.516,0.129l0.772,-0.385l0.387,1.157l0.643,-0.257l1.030,-0.515l1.287,0.643l0.387,0.902l1.286,0.515l0.902,-0.644l1.287,-0.129l1.802,0.773l0.772,3.861l-1.158,2.190l-0.644,3.088l1.159,2.317l0.129,-1.030z").attr(attr)}
			
			af.CM = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M500.439,220.859l-0.256,-0.129l-1.674,0.387l-1.673,-0.387l-1.288,0.129l-4.378,0l0.387,-2.188l-1.029,-1.802l-1.158,-0.387l-0.516,-1.287l-0.772,-0.386l0,-0.643l0.772,-1.932l1.289,-2.575l0.771,-0.128l1.544,-1.545l1.029,0l1.546,1.030l1.803,-0.901l0.257,-1.029l0.644,-1.159l0.387,-1.288l1.414,-1.159l0.645,-1.931l0.513,-0.514l0.387,-1.417l0.773,-1.673l2.188,-2.189l0.129,-0.901l0.387,-0.386l-1.160,-1.158l0.128,-0.773l0.774,-0.257l1.029,1.801l0.258,1.804l-0.128,1.802l1.415,2.446l-1.415,-0.129l-0.774,0.257l-1.287,-0.257l-0.514,1.287l1.545,1.546l1.158,0.385l0.387,1.160l0.900,1.930l-0.515,0.644l-1.287,2.702l-0.643,0.515l-0.258,2.060l0.258,1.160l-0.258,0.772l1.288,1.416l0.257,1.029l1.031,1.416l1.157,0.773l0.129,1.287l0.387,0.772l-0.259,1.416l-2.187,-0.643l-2.062,-0.644l3.475,0.129z").attr(attr)}
			
			af.DJ = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M581.28,192.797l0.645,0.771l-0.129,1.159l-1.545,0.644l1.158,0.772l-0.900,1.416l-0.645,-0.514l-0.642,0.256l-1.545,-0.128l0,-0.773l-0.257,-0.771l0.901,-1.288l1.030,-1.159l1.158,0.257l-0.771,0.642z").attr(attr)}
			
			af.DZ = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M497.608,163.703l-9.269,5.150l-7.852,5.276l-3.734,1.288l-2.961,0.257l-0.128,-1.801l-1.159,-0.387l-1.672,-0.772l-0.645,-1.288l-9.139,-5.792l-9.140,-5.922l-10.040,-6.566l0,-0.514l0,-3.347l4.377,-1.931l2.703,-0.514l2.188,-0.644l1.030,-1.417l3.090,-1.029l0.128,-2.061l1.545,-0.128l1.287,-1.030l3.476,-0.515l0.515,-1.030l-0.772,-0.514l-0.902,-2.832l-0.128,-1.674l-1.030,-1.674l2.574,-1.545l2.962,-0.515l1.673,-1.029l2.574,-0.902l4.633,-0.385l4.377,-0.258l1.416,0.385l2.575,-1.028l2.833,0l1.029,0.643l1.930,-0.258l-0.642,1.416l0.514,2.575l-0.642,2.189l-1.674,1.545l0.257,2.059l2.187,1.545l0,0.643l1.674,1.159l1.159,4.763l0.903,2.446l0.126,1.158l-0.513,2.318l0.256,1.158l-0.387,1.546l0.259,1.673l-1.030,1.030l1.546,2.059l0.127,1.159l0.902,1.415l1.286,-0.385l2.060,1.158l-1.288,-1.674z").attr(attr)}
			
			af.EG = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M559.269,147.483l-0.773,1.158l-0.514,1.931l-0.771,1.417l-0.645,0.514l-0.901-0.901l-1.159-1.158l-1.93-3.862l-0.258,0.258l1.158,2.831l1.546,2.703l2.059,4.119l1.03,1.545l0.902,1.545l2.316,2.961l-0.517,0.386l0.13,1.802l3.089,2.447l0.259,0.514h-10.299h-10.557h-10.812v-9.912v-9.526l-0.901-2.189l0.772-1.673l-0.388-1.159l0.903-1.287h3.604l2.574,0.644l2.705,0.773l1.287,0.514l2.059-0.901l1.029-0.772l2.447-0.258l1.93,0.386l0.643,1.287l0.646-0.9l2.187,0.644l2.061,0.128l1.415-0.644L559.269,147.483z").attr(attr)}
			
			af.EH = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M441.482,153.92l0,-1.417l0.387,0l0,0.129l0,0.514l0,4.120l-8.883,-0.129l0.129,6.823l-2.574,0.257l-0.644,1.417l0.515,3.862l-10.557,0l-0.643,0.901l0.129,-1.159l0.129,0l6.050,-0.129l0.257,-1.029l1.159,-1.159l0.901,-3.733l3.733,-2.961l1.287,-3.347l0.773,-0.257l0.900,-2.060l2.319,-0.257l0.900,0.257l1.288,0l0.901,-0.515l-1.544,0.128z").attr(attr)}
			
			af.ER = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M579.351,193.182l-0.901,-0.901l-1.160,-1.545l-1.158,-0.902l-0.773,-0.900l-2.317,-1.030l-1.801,-0.129l-0.644,-0.514l-1.674,0.643l-1.544,-1.287l-0.900,2.059l-3.091,-0.514l-0.258,-1.160l1.160,-3.861l0.258,-1.802l0.770,-0.901l2.061,-0.386l1.288,-1.546l1.543,3.090l0.773,2.446l1.545,1.288l3.604,2.574l1.545,1.545l1.415,1.544l0.903,0.902l1.285,0.902l-0.771,0.642l1.158,0.257z").attr(attr)}
			
			af.ET = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M579.351,193.182l-1.030,1.159l-0.901,1.288l0.257,0.771l0,0.773l1.545,0.128l0.642,-0.256l0.645,0.514l-0.645,0.901l1.032,1.545l1.029,1.287l1.029,0.901l8.754,3.218l2.316,0l-7.722,8.110l-3.475,0.129l-2.318,1.932l-1.803,0l-1.029,0.644l-1.030,0.256l-1.931,-1.158l-2.445,1.287l-1.030,1.159l-1.031,-0.387l-0.900,0.258l-1.159,-0.385l-0.772,-0.130l-3.089,-2.574l-2.318,0l-0.129,-0.644l-0.772,-1.288l-1.159,-0.515l-1.158,-2.832l-1.286,-0.644l-0.388,-1.158l-1.416,-1.287l-1.673,-0.129l0.901,-1.545l1.416,-0.127l0.386,-0.774l0,-2.447l0.774,-2.831l1.286,-0.772l0.259,-1.030l1.158,-2.060l1.672,-1.415l1.158,-2.575l0.387,-2.317l3.091,0.514l0.900,-2.059l1.544,1.287l1.674,-0.643l0.644,0.514l1.801,0.129l2.317,1.030l0.773,0.900l1.158,0.902l1.160,1.545l-0.901,-0.901z").attr(attr)}
			
			af.GA = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M495.162,237.723l-2.833-2.703l-1.801-2.316l-1.544-2.704V229.1l0.642-0.902l0.644-1.932l0.516-2.06l0.903-0.128h3.987l-0.128-3.219l1.288-0.129l1.673,0.387l1.674-0.387l0.257,0.129l-0.127,1.16l0.643,1.414l2.06-0.258l0.643,0.516l-1.157,3.219l1.286,1.545l0.258,2.059l-0.258,1.803l-0.9,1.287l-2.318-0.129l-1.416-1.287l-0.256,1.287l-1.803,0.258l-0.9,0.643l1.028,1.805L495.162,237.723z").attr(attr)}
			
			
			af.GH = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M468.13,210.946l-4.249,1.674l-1.545,0.901l-2.446,0.773l-2.317,-0.773l0.129,-1.030l-1.159,-2.317l0.644,-3.088l1.158,-2.190l-0.772,-3.861l-0.386,-2.060l0.129,-1.545l4.634,-0.129l1.289,0.258l0.770,-0.514l1.288,0.256l-0.258,0.772l1.159,1.417l0,1.932l0.258,2.187l0.643,1.030l-0.514,2.318l0.128,1.416l0.773,1.673l-0.644,-0.900z").attr(attr)}
			
			af.GM = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M419.855,191.51l0.387,-1.160l2.961,-0.129l0.515,-0.643l0.901,0l1.030,0.643l0.901,0l0.900,-0.387l0.516,0.773l-1.159,0.644l-1.158,-0.128l-1.159,-0.516l-1.030,0.644l-0.514,0l-0.644,0.386l2.447,0.127z").attr(attr)}
			af.GN = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M442.512,206.313l-0.772,-0.129l-0.515,1.158l-0.772,-0.128l-0.515,-0.515l0.128,-1.029l-1.158,-1.674l-0.644,0.257l-0.643,0.130l-0.644,0.127l0,-1.030l-0.387,-0.642l0,-0.773l-0.515,-1.159l-0.772,-1.029l-2.188,0l-0.644,0.514l-0.772,0.129l-0.386,0.515l-0.387,0.772l-1.415,1.159l-1.159,-1.544l-1.030,-1.031l-0.644,-0.386l-0.772,-0.515l-0.257,-1.159l-0.386,-0.643l-0.773,-0.515l1.159,-1.287l0.901,0.128l0.644,-0.515l0.643,0l0.386,-0.386l-0.257,-0.901l0.257,-0.257l0.129,-0.901l1.287,0l1.931,0.643l0.643,0l0.130,-0.258l1.544,0.129l0.387,-0.129l0.128,1.030l0.387,0l0.772,-0.387l0.386,0.130l0.772,0.643l1.159,0.258l0.772,-0.644l0.773,-0.387l0.643,-0.385l0.515,0.129l0.644,0.643l0.386,0.644l1.030,1.158l-0.516,0.645l-0.128,0.900l0.644,-0.257l0.257,0.386l-0.128,0.773l0.772,0.772l-0.515,0.257l-0.129,0.901l0.516,1.031l0.772,2.187l-1.030,0.387l-0.258,0.257l0.129,0.644l-0.129,1.159l0.386,0z").attr(attr)}
			
			af.GQ = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M490.785,224.206l-0.515,-0.387l0.900,-2.960l4.378,0l0.128,3.219l-3.988,0l0.903,-0.128z").attr(attr)}
			
			af.GW = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M424.49,197.173l-1.416,-1.030l-1.159,-0.257l-0.643,-0.773l0,-0.386l-0.772,-0.515l-0.258,-0.644l1.545,-0.386l0.901,0.129l0.644,-0.386l5.020,0.129l-0.129,0.901l-0.257,0.257l0.257,0.901l-0.386,0.386l-0.643,0l-0.644,0.515l-0.901,-0.128l1.159,-1.287z").attr(attr)}
			
			af.KE = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M561.972,214.552l2.318,0l3.089,2.574l0.772,0.130l1.159,0.385l0.900,-0.258l1.031,0.387l1.030,-1.159l2.445,-1.287l1.931,1.158l1.030,-0.256l-2.188,2.960l-0.130,10.169l1.931,2.189l-1.931,1.030l-0.514,1.416l-1.030,0.258l-0.515,1.545l-0.902,1.158l-0.513,1.673l-1.031,1.157l-4.119,-2.445l-0.256,-2.059l-10.042,-5.793l0,-2.832l0,-0.772l1.931,-1.674l1.029,-1.931l-0.771,-1.930l-1.031,-2.704l-1.287,-1.930l1.416,-1.159l2.188,-2.447l1.159,0.515l0.772,1.288l-0.129,-0.644z").attr(attr)}
			
			af.LR = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M444.442,215.195l-0.643,0l-2.832,-1.287l-2.446,-2.060l-2.317,-1.416l-1.802,-1.673l0.644,-0.902l0.129,-0.771l1.287,-1.546l1.159,-1.157l0.643,-0.130l0.644,-0.257l1.158,1.674l-0.128,1.029l0.515,0.515l0.772,0.128l0.515,-1.158l0.772,0.129l-0.129,0.773l0.258,1.287l-0.644,1.158l0.901,0.772l0.772,0.129l1.159,1.158l0.129,1.030l-0.257,0.387l0.259,-2.188z").attr(attr)}
			af.LS = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M543.306,304.922l0.902,0.900l-0.773,1.287l-0.515,0.902l-1.417,0.385l-0.514,0.901l-1.030,0.258l-1.931,-2.059l1.416,-1.803l1.416,-1.029l1.287,-0.516l-1.159,-0.774z").attr(attr)}
			
			af.LY = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M505.204,165.376l-1.932,1.03l-1.416-1.544l-4.248-1.159l-1.288-1.674l-2.061-1.158l-1.286,0.385l-0.901-1.415l-0.127-1.159l-1.546-2.059l1.029-1.03l-0.259-1.673l0.387-1.546l-0.256-1.158l0.514-2.318l-0.127-1.158l-0.902-2.446l1.287-0.643l0.257-1.031l-0.257-1.158l1.803-1.029l0.9-0.902l1.287-0.772l0.13-2.06l3.217,0.901l1.03-0.257l2.319,0.514l3.603,1.159l1.159,2.446l2.446,0.515l3.86,1.158l2.833,1.288l1.286-0.644l1.288-1.287l-0.644-2.059l0.9-1.288l1.932-1.288l1.801-0.385l3.734,0.514l0.901,1.287h1.028l0.773,0.516l2.703,0.257l0.645,0.901l-0.902,1.287l0.387,1.159l-0.772,1.673l0.901,2.189v9.526v9.912v5.408h-2.832v1.415l-11.069-5.407l-10.814-5.149L505.204,165.376z").attr(attr)}
			
			af.MA = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M461.436,138.472l0.772,0.514l-0.515,1.030l-3.476,0.515l-1.287,1.030l-1.545,0.128l-0.128,2.061l-3.090,1.029l-1.030,1.417l-2.188,0.644l-2.703,0.514l-4.377,1.931l0,3.218l-0.387,0l0,1.417l-1.544,0.128l-0.901,0.515l-1.288,0l-0.900,-0.257l-2.319,0.257l-0.900,2.060l-0.773,0.257l-1.287,3.347l-3.733,2.961l-0.901,3.733l-1.159,1.159l-0.257,1.029l-6.050,0.129l-0.129,0l0.129,-1.158l1.030,-0.772l0.901,-1.416l-0.129,-0.902l0.901,-1.930l1.545,-1.674l0.901,-0.515l0.644,-1.546l0.128,-1.415l0.901,-1.673l1.802,-1.031l1.803,-2.703l1.287,-1.030l2.574,-0.386l2.060,-1.802l1.416,-0.644l2.189,-2.317l-0.644,-3.347l1.031,-2.317l0.384,-1.416l1.675,-1.803l2.703,-1.287l2.059,-1.029l1.802,-2.833l0.773,-1.673l2.059,0l1.545,1.158l2.575,-0.128l2.832,0.515l1.159,0.128l1.030,1.674l0.128,1.674l-0.902,-2.832z").attr(attr)}
			
			af.MG = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M598.66,260.508l0.772,1.160l0.643,1.801l0.385,3.219l0.775,1.287l-0.257,1.287l-0.518,0.773l-0.898,-1.545l-0.516,0.772l0.516,2.060l-0.258,1.158l-0.774,0.516l-0.129,2.316l-1.028,3.219l-1.417,3.604l-1.545,5.149l-1.031,3.734l-1.285,3.089l-2.188,0.644l-2.318,1.157l-1.544,-0.641l-2.189,-1.031l-0.773,-1.417l-0.129,-2.317l-0.900,-2.188l-0.258,-1.931l0.387,-1.930l1.287,-0.515l0,-0.901l1.288,-1.932l0.257,-1.802l-0.645,-1.285l-0.514,-1.676l-0.128,-2.446l0.900,-1.544l0.387,-1.673l1.287,-0.130l1.544,-0.514l0.901,-0.516l1.289,0l1.544,-1.544l2.189,-1.674l0.771,-1.415l-0.387,-1.159l1.159,0.386l1.545,-1.931l0,-1.544l0.901,-1.288l-0.902,-1.158z").attr(attr)}
			
			af.ML = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M432.471,187.646l0.902,-0.514l0.385,-1.674l0.902,0l1.930,0.772l1.416,-0.514l1.160,0.129l0.385,-0.644l10.814,0l0.514,-1.931l-0.385,-0.257l-1.288,-11.587l-1.416,-11.714l4.119,0l9.140,5.922l9.139,5.792l0.645,1.288l1.672,0.772l1.159,0.387l0.128,1.801l2.961,-0.257l0,6.179l-1.543,1.802l-0.130,1.674l-2.445,0.386l-3.735,0.258l-0.900,0.901l-1.802,0.129l-1.673,0l-0.644,-0.516l-1.545,0.387l-2.446,1.158l-0.514,0.774l-2.189,1.285l-0.257,0.645l-1.159,0.514l-1.287,-0.257l-0.773,0.644l-0.385,1.802l-2.189,2.189l0.128,0.900l-0.771,1.159l0.128,1.545l-1.030,0.515l-0.643,0.257l-0.387,-1.157l-0.772,0.385l-0.516,-0.129l-0.514,0.772l-2.059,0l-0.772,-0.386l-0.387,0.258l-0.772,-0.772l0.128,-0.773l-0.257,-0.386l-0.644,0.257l0.128,-0.900l0.516,-0.645l-1.030,-1.158l-0.386,-0.644l-0.644,-0.643l-0.515,-0.129l-0.643,0.385l-0.773,0.387l-0.772,0.644l-1.159,-0.258l-0.772,-0.643l-0.386,-0.130l-0.772,0.387l-0.387,0l-0.128,-1.030l0.128,-0.772l-0.257,-1.030l-1.030,-0.772l-0.515,-1.545l0.129,1.674z").attr(attr)}
			
			af.MR = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M432.471,187.646l-1.802,-1.930l-1.674,-1.931l-1.801,-0.772l-1.288,-0.773l-1.416,0l-1.287,0.643l-1.416,-0.257l-0.901,0.901l-0.258,-1.416l0.773,-1.416l0.386,-2.445l-0.386,-2.704l-0.258,-1.417l0.258,-1.287l-0.773,-1.287l-1.416,-1.158l0.643,-0.901l10.557,0l-0.515,-3.862l0.644,-1.417l2.574,-0.257l-0.129,-6.823l8.883,0.129l0,-4.120l10.040,6.566l-4.119,0l1.416,11.714l1.288,11.587l0.385,0.257l-0.514,1.931l-10.814,0l-0.385,0.644l-1.160,-0.129l-1.416,0.514l-1.930,-0.772l-0.902,0l-0.385,1.674l0.902,-0.514z").attr(attr)}
			
			af.MW = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M558.368,258.062l-0.773,1.932l0.773,3.605l0.901,-0.130l1.030,0.902l1.030,1.930l0.258,3.476l-1.160,0.645l-0.772,1.801l-1.802,-1.674l-0.258,-1.931l0.645,-1.158l-0.130,-1.159l-1.159,-0.644l-0.643,0.259l-1.545,-1.289l-1.416,-0.770l0.772,-2.447l0.773,-0.902l-0.516,-2.317l0.645,-2.189l0.386,-0.644l-0.644,-2.315l-1.287,-1.160l2.704,0.514l1.415,1.933l-0.773,-3.732z").attr(attr)}

			af.MZ = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M558.368,258.062l1.931,-0.256l3.347,0.771l0.644,-0.386l1.930,0l0.902,-0.900l1.672,0.128l2.961,-1.030l2.060,-1.674l0.516,1.287l-0.129,2.705l0.257,2.316l0.128,4.248l0.516,1.289l-0.772,1.930l-1.160,1.803l-1.673,1.673l-2.446,1.030l-3.090,1.416l-2.961,2.830l-1.029,0.517l-1.930,1.930l-1.160,0.643l-0.128,1.803l1.288,2.060l0.514,1.674l-0.129,1.415l0.644,-0.770l-0.129,2.573l-0.386,1.288l0.643,0.514l-0.387,1.030l-1.157,1.030l-2.187,0.901l-3.349,1.417l-1.159,1.030l0.259,1.158l0.643,0.127l-0.130,1.418l-2.058,0l-0.259,-1.158l-0.385,-1.289l-0.258,-0.901l0.514,-3.090l-0.771,-1.801l-1.287,-3.863l2.832,-3.089l0.773,-1.930l0.386,-0.258l0.257,-1.545l-0.385,-0.773l0.128,-2.061l0.513,-1.801l0,-3.475l-1.415,-0.774l-1.287,-0.254l-0.515,-0.645l-1.287,-0.645l-2.317,0.129l-0.129,-1.029l-0.258,-1.932l8.239,-2.189l1.545,1.289l0.643,-0.259l1.159,0.644l0.130,1.159l-0.645,1.158l0.258,1.931l1.802,1.674l0.772,-1.801l1.160,-0.645l-0.258,-3.476l-1.030,-1.930l-1.030,-0.902l-0.901,0.130l-0.773,-3.605l-0.773,1.932z").attr(attr)}
			
			af.NA = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M509.322,304.019l-2.059,-2.059l-1.030,-2.060l-0.644,-2.575l-0.645,-1.930l-0.900,-4.120l0,-3.216l-0.387,-1.545l-1.029,-1.032l-1.416,-2.317l-1.414,-3.218l-0.647,-1.674l-2.187,-2.575l-0.128,-2.058l1.288,-0.516l1.674,-0.515l1.672,0.128l1.674,1.159l0.384,-0.128l10.944,-0.128l1.801,1.287l6.566,0.385l4.892,-1.158l2.187,-0.644l1.803,0.258l1.030,0.513l0,0.259l-1.416,0.645l-0.901,0l-1.674,1.028l-1.029,-1.158l-4.119,1.030l-2.060,0l-0.129,9.654l-2.574,0.130l0,7.852l0,9.912l-2.446,1.416l-1.418,0.129l-1.673,-0.514l-1.288,-0.129l-0.383,-1.158l-1.033,-0.773l1.286,-1.415z").attr(attr)}
			
			af.NE = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M471.091,194.855l0,-1.930l-3.091,-0.515l-0.128,-1.417l-1.545,-1.673l-0.258,-1.287l0.129,-1.287l1.802,-0.129l0.900,-0.901l3.735,-0.258l2.445,-0.386l0.130,-1.674l1.543,-1.802l0,-6.179l3.734,-1.288l7.852,-5.276l9.269,-5.150l4.248,1.159l1.416,1.544l1.932,-1.030l0.643,4.249l1.029,0.643l0.129,0.901l1.030,0.901l-0.514,1.159l-1.030,5.406l-0.130,3.605l-3.475,2.446l-1.158,3.605l1.158,1.029l0,1.673l1.674,0.130l-0.258,1.158l-0.774,0.257l-0.128,0.773l-0.514,0.128l-1.803,-2.960l-0.644,-0.129l-2.058,1.545l-2.061,-0.772l-1.545,-0.258l-0.772,0.386l-1.545,0l-1.544,1.159l-1.416,0l-3.219,-1.417l-1.286,0.644l-1.416,0l-1.030,-1.030l-2.704,-1.029l-2.832,0.385l-0.772,0.516l-0.259,1.544l-0.770,1.159l-0.258,2.447l-2.059,-1.674l-0.901,0.127l0.901,-0.773z").attr(attr)}
			
			af.NG = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M488.082,214.166l-2.704,0.900l-1.029,-0.128l-1.031,0.644l-2.188,-0.129l-1.415,-1.674l-0.902,-1.931l-1.931,-1.802l-2.059,0.128l-2.318,0l0.130,-4.376l0,-1.802l0.386,-1.674l0.901,-0.773l1.288,-1.672l-0.258,-0.773l0.514,-1.031l-0.643,-1.673l0.129,-0.771l0.258,-2.447l0.770,-1.159l0.259,-1.544l0.772,-0.516l2.832,-0.385l2.704,1.029l1.030,1.030l1.416,0l1.286,-0.644l3.219,1.417l1.416,0l1.544,-1.159l1.545,0l0.772,-0.386l1.545,0.258l2.061,0.772l2.058,-1.545l0.644,0.129l1.803,2.960l0.514,-0.128l1.160,1.158l-0.387,0.386l-0.129,0.901l-2.188,2.189l-0.773,1.673l-0.387,1.417l-0.513,0.514l-0.645,1.931l-1.414,1.159l-0.387,1.288l-0.644,1.159l-0.257,1.029l-1.803,0.901l-1.546,-1.030l-1.029,0l-1.544,1.545l-0.771,0.128l-1.289,2.575l0.772,-1.932z").attr(attr)}
			
			af.RW = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M547.169,229.999l1.028,1.545l-0.128,1.544l-0.773,0.387l-1.415,-0.128l-0.773,1.545l-1.673,-0.258l0.257,-1.546l0.386,-0.128l0,-1.674l0.901,-0.643l0.643,0.256l-1.547,0.900z").attr(attr)}
			
			
			af.SD = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M556.308,215.711l-1.416,1.028l-1.545,0l-2.189,0.644l-1.802,-0.644l-1.029,0.774l-2.446,-1.802l-0.644,-1.159l-1.416,0.643l-1.287,-0.257l-0.773,0.515l-1.158,-0.387l-1.672,-2.188l-0.389,-0.901l-2.059,-1.031l-0.643,-1.544l-1.159,-1.287l-1.800,-1.287l0,-0.901l-1.419,-1.159l-2.059,-1.159l-1.029,-0.771l-0.129,-0.773l0.387,-1.159l0,-1.159l-1.545,-1.674l-0.258,-1.157l0,-0.645l-0.902,-0.772l-0.126,-1.544l-0.517,-1.030l-0.902,0.129l0.259,-1.031l0.643,-1.030l-0.258,-1.159l0.901,-0.772l-0.643,-0.643l0.774,-1.673l1.158,-2.060l2.316,0.257l0.258,-10.427l0,-1.415l2.832,0l0,-5.408l10.813,0l10.556,0l10.299,0l1.158,2.704l-0.643,0.386l0.385,2.832l1.030,3.218l1.029,0.644l1.418,1.029l-1.288,1.546l-2.061,0.386l-0.770,0.901l-0.258,1.802l-1.160,3.861l0.258,1.160l-0.387,2.317l-1.158,2.575l-1.672,1.415l-1.158,2.060l-0.259,1.030l-1.286,0.772l-0.774,2.831l0,2.447l-0.386,0.774l-1.416,0.127l-0.901,1.545l1.673,0.129l1.416,1.287l0.388,1.158l1.286,0.644l1.158,2.832l-2.188,2.447l1.416,-1.159z").attr(attr)}
			
			af.SL = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M434.402,208.759l-0.772,-0.257l-1.931,-1.031l-1.287,-1.544l-0.515,-0.902l-0.386,-2.059l1.415,-1.159l0.387,-0.772l0.386,-0.515l0.772,-0.129l0.644,-0.514l2.188,0l0.772,1.029l0.515,1.159l0,0.773l0.387,0.642l0,1.030l0.644,-0.127l-1.159,1.157l-1.287,1.546l-0.129,0.771l0.644,-0.902z").attr(attr)}
			
			af.SN = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M420.242,190.35l-1.159,-2.059l-1.287,-1.030l1.159,-0.515l1.287,-1.803l0.644,-1.416l0.901,-0.901l1.416,0.257l1.287,-0.643l1.416,0l1.288,0.773l1.801,0.772l1.674,1.931l1.802,1.930l0.129,1.674l0.515,1.545l1.030,0.772l0.257,1.030l-0.128,0.772l-0.387,0.129l-1.544,-0.129l-0.130,0.258l-0.643,0l-1.931,-0.643l-1.287,0l-5.020,-0.129l-0.644,0.386l-0.901,-0.129l-1.545,0.386l-0.387,-2.058l2.447,0.127l0.644,-0.386l0.514,0l1.030,-0.644l1.159,0.516l1.158,0.128l1.159,-0.644l-0.516,-0.773l-0.900,0.387l-0.901,0l-1.030,-0.643l-0.901,0l-0.515,0.643l2.961,-0.129z").attr(attr)}
			
			af.SO = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M591.708,205.411l-8.754-3.218l-1.029-0.901l-1.028-1.287l-1.032-1.545l0.645-0.901l0.9-1.416l0.902,0.515l0.516,1.03l1.286,1.158h1.288l2.575-0.643l2.959-0.387l2.318-0.771l1.286-0.259l1.029-0.515h1.545l0.902-0.128l1.158-0.387l1.416-0.257l1.288-0.9h1.028l-0.13-0.772l0.26,1.544l-0.258,1.545v1.415l-0.644,0.901l-0.772,2.961l-1.288,2.961l-1.674,3.475l-2.316,3.991l-2.189,2.962l-3.218,3.732l-2.702,2.188l-3.991,2.576l-2.575,2.059l-2.959,3.348l-0.645,1.414l-0.516,0.646l-1.931-2.188l0.13-10.17l2.188-2.959l1.029-0.645h1.803l2.318-1.932l3.475-0.129l7.722-8.11H591.708z").attr(attr)}
			
			af.SZ = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M551.674,299l-0.644,1.158l-1.545,0.386l-1.545,-1.544l-0.128,-0.902l0.771,-1.030l0.258,-0.771l0.773,-0.129l1.416,0.385l0.385,1.289l-0.259,-1.158z").attr(attr)}
			
			af.TD = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M504.302,192.281l0.258,-1.158l-1.674,-0.130l0,-1.673l-1.158,-1.029l1.158,-3.605l3.475,-2.446l0.130,-3.605l1.030,-5.406l0.514,-1.159l-1.030,-0.901l-0.129,-0.901l-1.029,-0.643l-0.643,-4.249l2.702,-1.416l10.815,5.149l11.069,5.407l-0.258,10.427l-2.316,-0.257l-1.158,2.060l-0.774,1.673l0.643,0.643l-0.901,0.772l0.258,1.159l-0.643,1.030l-0.259,1.031l0.902,-0.129l0.517,1.030l0.126,1.544l0.902,0.772l0,0.645l-1.672,0.514l-1.417,1.030l-1.932,2.962l-2.574,1.287l-2.574,-0.130l-0.772,0.259l0.256,0.900l-1.416,0.901l-1.157,1.031l-3.349,1.029l-0.642,-0.515l-0.517,-0.129l-0.384,0.773l-2.318,0.129l0.515,-0.644l-0.900,-1.930l-0.387,-1.160l-1.158,-0.385l-1.545,-1.546l0.514,-1.287l1.287,0.257l0.774,-0.257l1.415,0.129l-1.415,-2.446l0.128,-1.802l-0.258,-1.804l1.029,1.801z").attr(attr)}
			
			af.TG = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M470.317,210.432l-2.187,0.514l-0.644,-0.900l-0.773,-1.673l-0.128,-1.416l0.514,-2.318l-0.643,-1.030l-0.258,-2.187l0,-1.932l-1.159,-1.417l0.258,-0.772l2.317,0l-0.259,1.417l0.775,0.900l0.900,0.902l0.129,1.287l0.516,0.515l-0.131,6.307l-0.773,-1.803z").attr(attr)}
			
			af.TN = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M490.785,145.294l-1.159,-4.763l-1.674,-1.159l0,-0.643l-2.187,-1.545l-0.257,-2.059l1.674,-1.545l0.642,-2.189l-0.514,-2.575l0.642,-1.416l2.962,-1.029l1.801,0.257l0,1.415l2.190,-1.028l0.257,0.514l-1.417,1.416l0,1.159l0.902,0.643l-0.258,2.446l-1.801,1.287l0.515,1.416l1.415,0.129l0.644,1.287l1.030,0.387l-0.129,2.060l-1.288,0.772l-0.900,0.902l-1.803,1.029l0.257,1.158l-0.257,1.031l1.287,-0.643z").attr(attr)}
			
			af.TZ = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M551.03,229.742l5.407,-0.258l10.042,5.793l0.256,2.059l4.119,2.445l-1.289,3.092l0.131,1.543l1.802,1.031l0,0.645l-0.644,1.673l0.129,0.772l-0.129,1.287l0.901,1.673l1.160,2.704l0.900,0.514l-2.060,1.674l-2.961,1.030l-1.672,-0.128l-0.902,0.900l-1.930,0l-0.644,0.386l-3.347,-0.771l-1.931,0.256l-0.773,-3.732l-1.415,-1.933l-2.704,-0.514l-1.543,-0.901l-1.675,-0.384l-1.030,-0.387l-1.159,-0.773l-1.545,-3.346l-1.545,-1.546l-0.514,-1.546l0.257,-1.415l-0.514,-2.445l1.158,-0.128l1.031,-1.032l1.030,-1.416l0.642,-0.513l0,-0.903l-0.642,-0.643l-0.131,-1.030l0.773,-0.387l0.128,-1.544l-1.028,-1.545l0.900,-0.257l-2.961,0z").attr(attr)}
			
			
			af.UG = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M551.03,229.742h-2.961l-0.9,0.257l-1.547,0.899l-0.644-0.256v-2.061l0.644-1.027l0.131-2.189l0.514-1.287l1.029-1.416l1.031-0.643l0.9-1.031l-1.158-0.258l0.258-3.217l1.028-0.775l1.803,0.645l2.188-0.645h1.545l1.416-1.027l1.287,1.93l1.031,2.705l0.771,1.93l-1.028,1.931l-1.932,1.674v0.772v2.832L551.03,229.742z").attr(attr)}
			
			af.ZA = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M550.13,305.822l-0.516,0.387l-1.158,1.287l-0.773,1.416l-1.544,1.93l-2.96,2.832l-1.932,1.545l-2.061,1.287l-2.832,1.031l-1.287,0.128l-0.387,0.772l-1.672-0.386l-1.288,0.514l-2.961-0.514l-1.544,0.257l-1.158-0.128l-2.834,1.028l-2.316,0.517l-1.545,1.028h-1.285l-1.16-0.9l-0.9-0.128l-1.158-1.16l-0.131,0.388l-0.385-0.772v-1.546l-0.771-1.801l0.771-0.516v-2.061l-1.802-2.445l-1.288-2.316l-1.931-3.478l1.286-1.415l1.032,0.773l0.384,1.158l1.288,0.129l1.673,0.514l1.418-0.129l2.445-1.416v-9.912l0.772,0.387l1.544,2.574l-0.258,1.674l0.645,0.9l1.93-0.256l1.289-1.287l1.287-0.774l0.643-1.286l1.287-0.645l1.158,0.387l1.288,0.773l2.188,0.129l1.801-0.645l0.258-0.901l0.387-1.287l1.545-0.128l0.772-1.03l0.901-1.804l2.445-2.059l3.733-1.93h1.157l1.289,0.514l0.9-0.387l1.416,0.258l1.287,3.862l0.771,1.802l-0.514,3.09l0.258,0.9l-1.416-0.385l-0.773,0.129l-0.258,0.771l-0.771,1.029L547.94,299l1.545,1.544l1.545-0.386l0.644-1.158h2.059l-0.772,1.93l-0.258,2.318l-0.77,1.157L550.13,305.822zM543.306,304.922l-1.158-0.773l-1.287,0.516l-1.416,1.029l-1.416,1.803l1.931,2.059l1.03-0.258l0.514-0.9l1.417-0.386l0.515-0.901l0.773-1.287L543.306,304.922z").attr(attr)}
			
			af.ZM = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M553.476,251.883l1.287,1.160l0.644,2.315l-0.386,0.644l-0.645,2.189l0.516,2.317l-0.773,0.902l-0.772,2.447l1.416,0.770l-8.239,2.189l0.258,1.932l-2.060,0.385l-1.543,1.031l-0.259,1.028l-1.028,0.130l-2.319,2.188l-1.545,1.802l-0.902,0l-0.772,-0.257l-3.088,-0.256l-0.515,-0.259l0,-0.259l-1.030,-0.513l-1.803,-0.258l-2.187,0.644l-1.673,-1.674l-1.804,-2.187l0.128,-8.625l5.536,0.127l-0.257,-1.028l0.387,-0.903l-0.387,-1.287l0.257,-1.286l-0.257,-0.902l0.901,0.130l0.128,0.772l1.289,0l1.672,0.258l0.903,1.158l2.187,0.385l1.674,-0.901l0.644,1.416l2.058,0.387l0.903,1.158l1.159,1.545l2.058,0l-0.258,-2.961l-0.642,0.516l-1.932,-1.031l-0.772,-0.514l0.387,-2.705l0.514,-3.088l-0.642,-1.288l0.771,-1.673l0.643,-0.387l3.733,-0.386l1.030,0.258l1.159,0.773l1.030,0.387l1.675,0.384l-1.543,-0.901z").attr(attr)}
			
			af.ZW = { 
			name : "澳门",
			x:0,
			y:0,
			hasPrize:false,
			path : R.path("M549.228,286.898l-1.416,-0.257l-0.901,0.386l-1.289,-0.513l-1.157,0l-1.673,-1.290l-2.061,-0.385l-0.772,-1.674l0,-1.030l-1.158,-0.256l-3.089,-2.962l-0.900,-1.544l-0.516,-0.516l-1.030,-2.058l3.088,0.256l0.772,0.257l0.902,0l1.545,-1.802l2.319,-2.188l1.028,-0.130l0.259,-1.028l1.543,-1.031l2.060,-0.385l0.129,1.029l2.317,-0.129l1.287,0.645l0.515,0.645l1.287,0.254l1.415,0.774l0,3.475l-0.513,1.801l-0.128,2.061l0.385,0.773l-0.257,1.545l-0.386,0.258l-0.773,1.930l2.832,-3.089z").attr(attr)}
			
	for (var state in af) {
		//分省区域着色
		
		
		if(af[state]['hasPrize']){
			af[state]['path'].attr({"fill":"#f48029"});
		}
		if(af[state]['text']){
			af[state]['text'].toFront();
		}
		if(af[state]['img']){
			af[state]['img'].toFront();
		}
		//china[state]['path'].color = Raphael.getColor(0.9);
		(function (st,state) {
			
			$(st[0]).attr("transform","matrix(2.1,0,0,2.1,-780,-220)");
			//$(text[0]).attr("transform","matrix(1.6,0,0,1.49,50.839,50.738)");
		
			if(af[state].hasPrize){
			
				$(st[0]).css('cursor','pointer');
				$(st[0]).hover(function(e){
					//mark Province
					current && af[current]['path'].animate({fill: af[current].hasPrize?"#f48029":"#825223"}, 500); 
					st.animate({fill: "#73af1e"}, 500);
					current = state;
				},
				function(){
					current && af[current]['path'].animate({fill: af[current].hasPrize?"#f48029":"#825223"}, 500); 
				}).bind("click",function(){
					$(this).showWBtip({"left":af[state].x-275+110,"top":af[state].y-125+20});
				})				
								
			}
			
		})(af[state]['path'],state);
	}
}
