define("ox/common/1.0.0/main",["./util","./nav"],function(a){a("./util"),a("./nav")}),define("ox/common/1.0.0/util",[],function(){Date.prototype.format=function(a){var b={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var c in b)new RegExp("("+c+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?b[c]:("00"+b[c]).substr((""+b[c]).length)));return a}}),define("ox/common/1.0.0/nav",[],function(){$(document).ready(function(){var a=$("#nav>a"),b=a.eq(0);a.each(function(a,c){return 0!==a?location.href.indexOf(c.getAttribute("href"))>0?(c.className="current",b.removeClass("current"),!1):void 0:void 0})})});
