var uid = parent.uid;
var util = parent.util;
var listenEvt = parent.listenEvt;

var defAgent = new Object();
var testAgent = new Object();
var noAgent = new Object();
var lazyDemoStatus;

function init() {
	PostPHP("./api_demo.php", "code=123");
	listenEvent = new listenEvent();	//監聽事件
	listenEvent.addHyperLink();

	testAgent.name = 'sssX';
	testAgent.paswd = 'a1234';
	testAgent.id = '164';
	testAgent.skey = '0LRW7RzNc0KoKpB4';

	defAgent.name = 'testapi';
	defAgent.paswd = 'e3e3';
	defAgent.id = '273';
	defAgent.skey = 'v3dXrAIpqViBKjn0';

	noAgent.name = '';
	noAgent.paswd = '';
	noAgent.id = '';
	noAgent.skey = '';


	
	if(window.location.href.indexOf("cvssp2017")!=-1){
		agent = testAgent;
	}else if(window.location.href.indexOf("ctliiti566.cvssp2017")!=-1){
		agent = testAgent;	
	}else if(window.location.href.indexOf("205.201.14.45")!=-1){
		agent = noAgent;	// 客服要求將UAT預設值拿掉
	}else{
		agent = defAgent;
	}
	
	
	
	document.getElementById("username").value = agent.name;
	document.getElementById("password").value = agent.paswd;
	document.getElementById("sKey").value =  agent.skey;
	document.getElementById("aid").value =  agent.id;

	var btn = util.getSpan(document, "login_btn");
	btn.onclick();
}


function PostPHP(url, parame) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		// console.log("postPHP >"+url+" readyState:"+xmlhttp.readyState+"  status:"+xmlhttp.status)
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var phpData = strToObj(xmlhttp.responseText);
			// alert(phpData);
			console.log(phpData);
			getData(phpData);
		} else {
			
		}
	};
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(parame);
}
function strToObj(str) {
	//console.log(str);
	if (str.match("window.open")) {
		var scr = "<";
		scr += "script";
		scr += ">";
		str = str.replace(scr, "");
		str = str.replace(scr, "");
		//eval(str);
		//return;
	}

	try {
		//console.log("++++++++");
		return (new Function("return " + str + ";"))();
	} catch (e) {
		//console.log("-----------");
		return str;
	}
}

function login(){
	console.log("Send_login");
	var name = document.getElementById("username").value;
	var passwoerd = document.getElementById("password").value;
	var skey = document.getElementById("sKey").value;
	var aid = document.getElementById("aid").value;
	var param = "AGName="+name+"&AGPassword="+passwoerd+"&AGID="+aid+"&secretKey="+skey+"&act=AGLogin";
	PostPHP("./api_rec/api_demo.php", param);
}

function createMember(){
	console.log("Send_CreatM");
	var name = document.getElementById("usernameM").value;
	var passwoerd = document.getElementById("passwordM").value;
	var currency = document.getElementById("currency").value;
	var tokenM = document.getElementById("tokenM").value;
	var agidM = document.getElementById("agidM").value;
	var key = document.getElementById("keyM").value;
	var param = "AGName="+name+"&AGPassword="+passwoerd+"&currency="+currency+"&token="+tokenM+"&AGID="+agidM+"&secretKey="+key+"&act=CreateMember";
	PostPHP("./api_rec/api_demo.php", param);
}

function sendCash(way){
	console.log("sendCash");
	var name = document.getElementById("usernameC").value;
	var memid = document.getElementById("memidC").value;
	var amount = document.getElementById("amountC").value;
	var payno = document.getElementById("paynoC").value;
	var token = document.getElementById("tokenC").value;
	var agid = document.getElementById("agidC").value;
	var aCode = document.getElementById("aCodeC").value;
	var key = document.getElementById("keyC").value;
	if(way=='D'){
		var param = "memname="+name+"&memid="+memid+"&amount="+amount+"&token="+token+"&aCode="+aCode+"&payno="+payno+"&AGID="+agid+"&secretKey="+key+"&act=Deposit";
	}else if(way=='W'){
		var param = "memname="+name+"&memid="+memid+"&amount="+amount+"&token="+token+"&aCode="+aCode+"&payno="+payno+"&AGID="+agid+"&secretKey="+key+"&act=Withdraw";
	}
	PostPHP("./api_rec/api_demo.php", param);
}

function launchGame(){
	console.log("launchGame");
	var name = document.getElementById("usernameL").value;
	var memid = document.getElementById("memidL").value;
	var password = document.getElementById("passwordL").value;
	var langx = document.getElementById("langxL").value;
	var machine = document.getElementById("machineL").value;
	var group = document.getElementById("groupL").value;
	var token = document.getElementById("tokenL").value;
	
	var agid = document.getElementById("agidL").value;
	var aCode = document.getElementById("aCodeL").value;
	var key = document.getElementById("keyL").value;
	var param = "memname="+name+"&memid="+memid
	+"&group="+group
	+"&Mempassword="+password+"&token="+token
	+"&aCode="+aCode
	+"&machine="+machine
	+"&langx="+langx+"&AGID="+agid+"&secretKey="+key+"&act=LaunchGame";
	PostPHP("./api_rec/api_demo.php", param);
}

function WagerU(){
	console.log("WagerU");
	var name = document.getElementById("usernameWU").value;
	var memid = document.getElementById("memidWU").value;
	var password = document.getElementById("passwordWU").value;
	var settle = document.getElementById("settleWU").value;
	var langx = document.getElementById("langxWU").value;
	var machine = document.getElementById("machineWU").value;
	var token = document.getElementById("tokenWU").value;
	var agid = document.getElementById("agidWU").value;
	var aCode = document.getElementById("aCodeWU").value;
	var key = document.getElementById("keyU").value;
	var param = "memname="+name+"&memid="+memid+"&Mempassword="+password+"&token="+token+"&aCode="+aCode+"&machine="+machine+"&langx="+langx+"&settle="+settle+"&AGID="+agid+"&secretKey="+key+"&act=WagerUrl";
	PostPHP("./api_rec/api_demo.php", param);
}

function chkMemBlance(){
	console.log("chkMemBlance");
	var name = document.getElementById("usernameCK").value;
	var memid = document.getElementById("memidCK").value;
	var token = document.getElementById("tokenCK").value;
	var agid = document.getElementById("agidCK").value;
	var key = document.getElementById("keyCK").value;
	var param = "memname="+name+"&memid="+memid+"&token="+token+"&AGID="+agid+"&secretKey="+key+"&act=chkMemberBalance";
	PostPHP("./api_rec/api_demo.php", param);
}



function showMember(){
	console.log("showMember");
	var name = document.getElementById("usernameSM").value;
	var memid = document.getElementById("memidSM").value;
	var token = document.getElementById("tokenSM").value;
	var agid = document.getElementById("agidSM").value;
	var aCode = document.getElementById("aCodeSM").value;
	var key = document.getElementById("keySM").value;
	var param = "memname="+name+"&memid="+memid+"&token="+token+"&AGID="+agid+"&aCode="+aCode+"&secretKey="+key+"&act=ShowMember";
	PostPHP("./api_rec/api_demo.php", param);
}

function showAllMember(){
	console.log("showAllMember");
	var page = document.getElementById("pageSAM").value;
	var token = document.getElementById("tokenSAM").value;
	var agid = document.getElementById("agidSAM").value;
	var key = document.getElementById("keySAM").value;
	var onlineStatus = document.getElementById("onlineSatausSAM").value;
	var param = "page="+page+"&token="+token+"&AGID="+agid+"&secretKey="+key+"&onlinestatus="+onlineStatus+"&act=ShowAllMembers";
	PostPHP("./api_rec/api_demo.php", param);
}

function memWager(){
	console.log("memWager");
	var name = document.getElementById("usernameMW").value;
	var memid = document.getElementById("memidMW").value;
	var token = document.getElementById("tokenMW").value;
	var dateS = document.getElementById("dateStartMW").value;
	var dateE = document.getElementById("dateEndMW").value;
	var page = document.getElementById("pageMW").value;
	var settle = document.getElementById("settleMW").value;
	var token = document.getElementById("tokenMW").value;
	var agid = document.getElementById("agidMW").value;
	var key = document.getElementById("keyMW").value;
	dateS +=":00";
	dateE +=":00";
	var param = "memname="+name+"&memid="+memid+"&token="+token+"&secretKey="+key+"&AGID="+agid;
	param +="&page="+page;
	param +="&dateE="+dateE+"&settle="+settle;
	param +="&dateS="+dateS+"&act=MemWager";
	PostPHP("./api_rec/api_demo.php", param);
}

function allWager(){
	console.log("allWager");
	var name = document.getElementById("usernameAW").value;
	var token = document.getElementById("tokenAW").value;
	var dateS = document.getElementById("dateStartAW").value;
	var dateE = document.getElementById("dateEndAW").value;
	var page = document.getElementById("pageAW").value;
	var settle = document.getElementById("settleAW").value;
	var token = document.getElementById("tokenAW").value;
	var agid = document.getElementById("agidAW").value;
	var key = document.getElementById("keyAW").value;
	dateS +=":00";
	dateE +=":00";
	var param = "agname="+name+"&agid="+agid+"&token="+token+"&AGID="+agid+"&secretKey="+key;
	param +="&page="+page;
	param +="&dateE="+dateE+"&settle="+settle;
	param +="&dateS="+dateS+"&act=ALLWager";
	PostPHP("./api_rec/api_demo.php", param);
}

function chkTransInfo(){
	console.log("chkTransInfo");
	var name = document.getElementById("usernameCTI").value;
	var memid = document.getElementById("memidCTI").value;
	var token = document.getElementById("tokenCTI").value;
	
	var tidtype = document.getElementById("transtypeCTI").value;
	var transid = document.getElementById("transidCTI").value;

	var token = document.getElementById("tokenCTI").value;
	var agid = document.getElementById("agidCTI").value;
	var key = document.getElementById("keyCTI").value;
	
	var param = "memname="+name+"&memid="+memid+"&transtype="+tidtype+"&transid="+transid+"&token="+token+"&AGID="+agid+"&secretKey="+key;
	param +="&act=ChkTransInfo";
	PostPHP("./api_rec/api_demo.php", param);
}

function getTransInfo(){
	console.log("getTransInfo");
	var name = document.getElementById("usernameGTI").value;
	var memid = document.getElementById("memidGTI").value;
	var token = document.getElementById("tokenGTI").value;
	
	var token = document.getElementById("tokenGTI").value;
	var agid = document.getElementById("agidGTI").value;
	var key = document.getElementById("keyGTI").value;
	
	// var param = "memname="+name+"&memid="+memid+"&transtype="+tidtype+"&transid="+transid+"&token="+token+"&AGID="+agid;
	var param = "memname="+name+"&memid="+memid+"&token="+token+"&AGID="+agid+"&secretKey="+key;
	param +="&act=GetTransInfo";
	PostPHP("./api_rec/api_demo.php", param);
}

function chkWager(){
	console.log("chkWager");
	var wid = document.getElementById("wagerCHKW").value;
	var name = document.getElementById("usernameCHKW").value;
	var token = document.getElementById("tokenCHKW").value;
	
	var page = document.getElementById("pageCHKW").value;
	var settle = document.getElementById("settleCHKW").value;
	var token = document.getElementById("tokenCHKW").value;
	var agid = document.getElementById("agidCHKW").value;
	var key = document.getElementById("keyCHKW").value;
	
	
	
	var param = "agname="+name+"&agid="+agid+"&token="+token+"&AGID="+agid+"&secretKey="+key;
	param +="&page="+page;
	param +="&settle="+settle;
	param +="&wid="+wid;
	param +="&act=CheckWager";
	PostPHP("./api_rec/api_demo.php", param);
}
function getWagerID(){
	console.log("getWagerID");
	var wid = document.getElementById("wagerGWI").value;
	var name = document.getElementById("usernameGWI").value;
	var token = document.getElementById("tokenGWI").value;
	
	var page = document.getElementById("pageGWI").value;
	var settle = document.getElementById("settleGWI").value;
	var token = document.getElementById("tokenGWI").value;
	var agid = document.getElementById("agidGWI").value;
	var key = document.getElementById("keyGWI").value;
	
	
	var param = "AGName="+name+"&agid="+agid+"&token="+token+"&AGID="+agid+"&secretKey="+key;
	param +="&page="+page;
	param +="&settle="+settle;
	param +="&wid="+wid;
	param +="&act=GetWagerID";
	PostPHP("./api_rec/api_demo.php", param);
}
function getMemWagerIDM(){
	console.log("getWagerIDM");
	var wid = document.getElementById("wagerGMWIM").value;
	var id = document.getElementById("useridGMWIM").value;
	
	var name = document.getElementById("usernameGMWIM").value;
	var token = document.getElementById("tokenGMWIM").value;
	
	var page = document.getElementById("pageGMWIM").value;
	var settle = document.getElementById("settleGMWIM").value;
	var token = document.getElementById("tokenGMWIM").value;
	var agid = document.getElementById("agidGMWIM").value;
	var key = document.getElementById("keyGMWIM").value;
	
	
	var param = "memname="+name+"&memid="+id+"&token="+token+"&AGID="+agid+"&secretKey="+key;
	param +="&page="+page;
	param +="&settle="+settle;
	param +="&wid="+wid;
	param +="&act=GetWagerIDM";
	PostPHP("./api_rec/api_demo.php", param);
}
function gameDemo(){
	console.log("gameDemo");
	var langx = document.getElementById("langxGD").value;
	var machine = document.getElementById("machineGD").value;
	var token = document.getElementById("tokenGD").value;
	
	var agid = document.getElementById("agidGD").value;
	var aCode = document.getElementById("aCodeGD").value;
	var key = document.getElementById("keyGD").value;
	var ip = document.getElementById("remoteipGD").value;
	
	var param = 
	"ip="+ip
	+"&token="+token
	+"&aCode="+aCode
	+"&machine="+machine
	+"&langx="+langx+"&AGID="+agid+"&secretKey="+key+"&act=LaunchDemo";
	PostPHP("./api_rec/api_demo.php", param);
}

function lazyDemo(){
	// listenEvent = new listenEvent();	//監聽事件
	// listenEvent.addHyperLink();

	testAgent.name = 'sssX';
	testAgent.paswd = 'a1234';
	testAgent.id = '164';
	testAgent.skey = '0LRW7RzNc0KoKpB4';

	defAgent.name = 'testapi';
	defAgent.paswd = 'e3e3';
	defAgent.id = '273';
	defAgent.skey = 'v3dXrAIpqViBKjn0';

	noAgent.name = '';
	noAgent.paswd = '';
	noAgent.id = '';
	noAgent.skey = '';


	
	if(window.location.href.indexOf("cvssp2017")!=-1){
		agent = testAgent;
	}else if(window.location.href.indexOf("ctliiti566.cvssp2017")!=-1){
		agent = testAgent;	
	}else if(window.location.href.indexOf("205.201.14.45")!=-1){
		agent = noAgent;	// 客服要求將UAT預設值拿掉
	}else{
		agent = defAgent;
	}
	
	
	
	// document.getElementById("username").value = agent.name;
	// document.getElementById("password").value = agent.paswd;
	// document.getElementById("sKey").value =  agent.skey;
	// document.getElementById("aid").value =  agent.id;

	console.log("lazy_demo");
	lazyDemoStatus = "Y";
	lazyLogin();
}
function lazyLogin(){
	console.log("lazyLogin");
	//document.getElementById("showdata").innerHTML="登入中....稍等";
	var name = agent.name;
	var passwoerd = agent.paswd;
	var skey = agent.skey;
	var aid =  agent.id;
	var param = "AGName="+name+"&AGPassword="+passwoerd+"&AGID="+aid+"&secretKey="+skey+"&act=AGLogin";
	PostPHP("func/api_rec/api_demo.php", param);
}
function lazyGameDemo(){
	console.log("lazyGameDemo");
	var langx = document.getElementById("langxLGD").value;
	var machine = document.getElementById("machineLGD").value;
	var token = document.getElementById("tokenLGD").value;	
	var agid = document.getElementById("agidLGD").value;
	var key = document.getElementById("keyLGD").value;
	ip="";
	aCode="";
	var param = 
	"ip="+ip
	+"&token="+token
	+"&aCode="+aCode
	+"&machine="+machine
	+"&langx="+langx+"&AGID="+agid+"&secretKey="+key+"&act=LaunchDemo";

	lazyDemoStatus="N";
	document.getElementById("showdata").innerHTML="登入中....稍等";
	PostPHP("/func/api_rec/api_demo.php", param);
}

function setGrp(){
	console.log("SettMemGrp");
	var name = document.getElementById("usernameSG").value;
	var memid = document.getElementById("memidSG").value;
	var grp = document.getElementById("grpSG").value;
	
	var token = document.getElementById("tokenSG").value;
	var agid = document.getElementById("agidSG").value;
	var key = document.getElementById("keySG").value;
	var param = "memname="+name+"&memid="+memid+"&grp="+grp+"&token="+token+"&AGID="+agid+"&secretKey="+key+"&act=SetMemGrp";
	PostPHP("./api_rec/api_demo.php", param);
}

function MemTrans(){
	console.log("MemTrans");
	
	var memid  = document.getElementById("useridMT").value;
	var memname = document.getElementById("usernameMT").value;
	var dateS = document.getElementById("dateStartMT").value;
	var dateE = document.getElementById("dateEndMT").value;
	var page = document.getElementById("pageMT").value;
	var token = document.getElementById("tokenMT").value;
	var agid = document.getElementById("agidMT").value;
	var key = document.getElementById("keyMT").value;
	dateS +=":00";
	dateE +=":00";
	var param = 
	"memid="+memid
	+"&memname="+memname
	+"&dateE="+dateE
	+"&dateS="+dateS
	+"&page="+page
	+"&token="+token
	+"&AGID="+agid
	+"&secretKey="+key
	+"&act=MemTrans";
	PostPHP("./api_rec/api_demo.php", param);
}

function ALLTrans(){
	console.log("ALLTrans");
	var agid  = document.getElementById("agidAT").value;
	var agname = document.getElementById("usernameAT").value;
	var dateS = document.getElementById("dateStartAT").value;
	var dateE = document.getElementById("dateEndAT").value;
	var page = document.getElementById("pageAT").value;
	var token = document.getElementById("tokenAT").value;
	var agid = document.getElementById("agidAT").value;
	var key = document.getElementById("keyAT").value;
	var aCodeAT = document.getElementById("aCodeAT").value;
	dateS +=":00";
	dateE +=":00";
	var param = 
	"agname="+agname
	+"&dateE="+dateE
	+"&dateS="+dateS
	+"&page="+page
	+"&token="+token
	+"&aCode="+aCodeAT
	+"&AGID="+agid
	+"&secretKey="+key
	+"&act=ALLTrans";
	PostPHP("./api_rec/api_demo.php", param);
}


function kickoutmem(){
	console.log("kickoutmem");
	var name = document.getElementById("usernameKOM").value;
	var memid = document.getElementById("memidKOM").value;
	var token = document.getElementById("tokenKOM").value;
	var agid = document.getElementById("agidKOM").value;
	var aCode = document.getElementById("aCodeKOM").value;
	var key = document.getElementById("keyKOM").value;
	var param = "memname="+name+"&memid="+memid+"&token="+token+"&AGID="+agid+"&aCode="+aCode+"&secretKey="+key+"&act=KickOutMem";
	PostPHP("./api_rec/api_demo.php", param);
}

function kickoutallmem(){
	console.log("kickoutallmem");
	var token = document.getElementById("tokenKOAM").value;
	var agid = document.getElementById("agidKOAM").value;
	var key = document.getElementById("keyKOAM").value;
	var param = "token="+token+"&AGID="+agid+"&secretKey="+key+"&act=KickOutAllMem";
	PostPHP("./api_rec/api_demo.php", param);
}

function changePswd(){
	console.log("changePswd");
	var name = document.getElementById("usernameCP").value;
	var memid = document.getElementById("memidCP").value;
	var oldpswdCP = document.getElementById("oldpswdCP").value;
	var newpswdCP = document.getElementById("newpswdCP").value;
	var token = document.getElementById("tokenCP").value;
	var agid = document.getElementById("agidCP").value;
	var key = document.getElementById("keyCP").value;
	var param = "memname="+name+"&memid="+memid+"&oldpswd="+oldpswdCP+"&newpswd="+newpswdCP+"&token="+token+"&AGID="+agid+"&secretKey="+key+"&act=ChangeMemPswd";
	PostPHP("./api_rec/api_demo.php", param);
}

function checkreport(){
	console.log("checkreport");
	var name = document.getElementById("usernameCKT").value;
	var token = document.getElementById("tokenCKT").value;
	var dateS = document.getElementById("dateStartCKT").value;
	var dateE = document.getElementById("dateEndCKT").value;
	var page = document.getElementById("pageCKT").value;
	var settle = document.getElementById("settleCKT").value;
	var token = document.getElementById("tokenCKT").value;
	var agid = document.getElementById("agidCKT").value;
	var key = document.getElementById("keyCKT").value;
	dateS +=":00";
	dateE +=":00";
	var param = "agname="+name+"&agid="+agid+"&token="+token+"&AGID="+agid+"&secretKey="+key;
	param +="&page="+page;
	param +="&dateE="+dateE+"&settle="+settle;
	param +="&dateS="+dateS+"&act=CheckReport";
	PostPHP("./api_rec/api_demo.php", param);

}

function getDecode(){
	console.log("getDecode");
	var text = document.getElementById("decode_msg").value;
	var key = document.getElementById("d_key").value;
	text = encodeURIComponent(text);
	var param = "text="+text+"&secretKey="+key;
	param +="&act=GetDecode";
	PostPHP("./api_rec/api_demo.php", param);
}

function getEncode(){
	console.log("GetEncode");
	var text = document.getElementById("encode_msg").value;
	var key = document.getElementById("e_key").value;
	text = encodeURIComponent(text);
	var param = "text="+text+"&secretKey="+key
	param +="&act=GetEncode";
	PostPHP("./api_rec/api_demo.php", param);
}

function getData(obj){
	if(typeof(obj)=="object"){
		document.getElementById("showdata").innerHTML=JSON.stringify(obj);	
		if(obj.method=="AGLogin"){
			var token = document.getElementsByName("token");
			var current_key = document.getElementById("sKey");
			var key = document.getElementsByName("keys");
			var agid = document.getElementsByName("agid");
			for(var i=0;i<token.length;i++){
				token[i].value=obj.token;
				agid[i].value=obj.aid;
				key[i].value=current_key.value;
			}
			if(lazyDemoStatus=="Y"){
				lazyGameDemo();
			}
			return;
		}
		if(obj.method=="LaunchDemo"){
			window.open(obj.launchdemourl,"_blank");
		}

	}else{
		document.getElementById("showdata").innerHTML=obj;
	}
}



//監聽事件
function listenEvent() {
    var self = this;

    //建立監聽事件(靜態)
    self.addHyperLink = function () {
		var btn = util.getSpan(document, "allbtn");
		for(var i =0;i<btn.children.length;i++){
			listenEvt.addOnClick(btn.children[i].id, btn.children[i], this, null);
		}
        

    }

    //建立監聽事件(動態)
    self.addListenEvent = function () {
        
    }

    //監聽事件回應
    self.listenCenter = function (eventName, listenData) {
			var obj = listenData;
      if(eventName.indexOf("_btn")!=-1){				
				var table = document.getElementsByName("div_table");
				var target_id = obj.div.id.split("_");
				var target = util.getSpan(document,target_id[0]+"_table");
				// console.log(target_id);
				for(var i=0;i<table.length;i++){
					table[i].style.display="none";
				}
				target.style.display="";
				return;
			}

    }
}