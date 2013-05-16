var _delew = {
	// parse a color CSS declaration
	// supported formats:	
	// #rrggbb
	// #rgb
	// rgb(r, g, b)
	// rgba(r, g, b, a)
	// rgb(r%, g%, b%)
	// rgba(r%, g%, b%, a)
	//
	// return an array [r, g, b(, a)]
	parseColor : function(c){
		var t,r,v,b,res,a = false;
		if( c=='transparent' ) r=v=b=a=0;
		else if( c.substr(0,1)=='#' ){
			c = c.substr(1).toLowerCase();
			if(c.length==3) c = c.charAt(0)+c.charAt(0)+c.charAt(1)+c.charAt(1)+c.charAt(2)+c.charAt(2);
			r = parseInt(c.substr(0,2),16);
			v = parseInt(c.substr(2,2),16);
			b = parseInt(c.substr(4,2),16);
		}
		else if( t = /rgb(?:a)?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(0*\.?\d+)\s*)?\)/.exec(c)){
			r = parseInt(t[1],10);
			v = parseInt(t[2],10);
			b = parseInt(t[3],10);
			a = !isNaN(t[4]) ? parseFloat(t[4],10) : a;
		}
		else if( t = /rgb(?:a)?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(0*\.?\d+)\s*)?\)/.exec(c)){
			r = parseInt(t[1]*2.55,10);
			v = parseInt(t[2]*2.55,10);
			b = parseInt(t[3]*2.55,10);
			a = !isNaN(t[4]) ? parseFloat(t[4],10) : a;
		}
		res = r!=undefined && [r,v,b] || c;
		if( a!==false && _delew.support.rgba() ) res.push(a);
		return res;		
	},
	
	formatRgbColor : function(r, g, b, a){
		var v = r+','+g+','+b;
		return a && _delew.support.rgba() ? 'rgba('+v+','+a+')' : 'rgb('+v+')';
	},
	
	support : {
		rgba : function(){
			return this.rgba_support || (function(){
				var e = document.createElement("P"), r = false;
				try{
					e.style.color = "rgba(1,1,1,0.5)";
					r = /^rgba/.test(e.style.color);
				}
				catch(e){}
				return (this.rgba_support = r);
			}).call(this);
		}
	}
};
