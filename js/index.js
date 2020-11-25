function onload() {
	var barPercent = 0;
	var barTime = setInterval(function () {
		barPercent += 1;
		document.getElementById("light_ball").style.left = barPercent + "%";
		document.getElementById("light_bar").style.left = barPercent + "%";
		var now = parseInt(barPercent);
		document.getElementById("loadPercentNum").innerHTML = now;
		if (now >= 100) {
			clearInterval(barTime);
			document.getElementById("load").classList.remove('active');
			setTimeout(function () {
				document.getElementById("load").style.display = "none";
			}, 1000);
			setTimeout(function () {
				document.getElementById("hm_1").classList.add('active');
			}, 1000);
			setTimeout(function () {
				document.body.classList.remove('unScroll');
			}, 4000);
		}
	}, 20);
	scrollTo(0);
	setScollEvent();
	setBannerMouseEvent();
	activeBanner();
	setRecruitMouseEvent();
	goPlayRecruit();
	setupMenu();
}

var bannePlay = true;
var banneStart = null;
var banneRecruitStart = null;

var totalPageHeight = 0;
var divScrollEventAry = new Array();

function setupMenu() {
	// 漢堡bar點擊menu 展開/關閉
	var menu_btn = document.getElementById("menu_btn");
	var langx_btn = document.getElementById("menu_btn_langx");
	var langx_second_menu = document.getElementById("second_menu");
	menu_btn.onclick = function () {
		if (menu_btn.classList.contains("active")) {
			menu_btn.classList.remove("active");
		} else {
			menu_btn.classList.add("active");
		}
	};
	langx_btn.onclick = function () {
		if (langx_btn.classList.contains("active")) {
			langx_btn.classList.remove("active");
		} else {
			langx_btn.classList.add("active");
		}
	};
	for (var i = 0; i < langx_second_menu.children.length; i++) {
		langx_second_menu.children[i].onclick = function(e){
			if(!e.target.classList.contains("active")){
				for (var j = 0; j < langx_second_menu.children.length; j++) {
					langx_second_menu.children[j].classList.remove("active");
				}
				e.target.classList.add("active");
				// document.getElementById("lang_title").innerHTML = e.target.innerHTML;
				document.getElementById("lang_txt").innerHTML = e.target.innerHTML;
			}
		};
	}

	document.getElementById("menu_btn_hm1").onclick = function () {
		menu_btn.classList.remove("active");
		scrollTo(document.getElementById("hm_1").offsetTop);
	};
	document.getElementById("menu_btn_hm2").onclick = function () {
		menu_btn.classList.remove("active");
		scrollTo(document.getElementById("hm_2").offsetTop);
	};
	document.getElementById("menu_btn_hm3").onclick = function () {
		menu_btn.classList.remove("active");
		scrollTo(document.getElementById("hm_3").offsetTop);
	};
	document.getElementById("menu_btn_hm4").onclick = function () {
		menu_btn.classList.remove("active");
		scrollTo(document.getElementById("hm_4").offsetTop);
	};
	document.getElementById("menu_btn_move_about").onclick = function () {
		menu_btn.classList.remove("active");
		scrollTo(document.getElementById("move_about").offsetTop);
	};
	document.getElementById("menu_btn_hm6").onclick = function () {
		menu_btn.classList.remove("active");
		scrollTo(document.getElementById("hm_6").offsetTop);
	};
	document.getElementById("businese_btn").onclick = function () {
		scrollTo(document.getElementById("hm_4").offsetTop);
	};

	
}
function scrollTo(offset) {
	document.body.scrollTop = offset;
	document.documentElement.scrollTop = offset;
}
function setScollEvent() {
	for (var i = 0; i < document.body.children.length; i++) {
		var divScrollEvent = new Object();
		divScrollEvent["triggerDiv"] = document.body.children[i];
		divScrollEvent["triggerHeight"] = totalPageHeight + document.body.children[i].clientHeight / 2;
		divScrollEventAry.push(divScrollEvent);
		totalPageHeight += document.body.children[i].clientHeight;
	}
	// document.body.onscroll = function () {
	window.onscroll = function () {
		var bodyTop = 0;
		if (typeof window.pageYOffset != "undefined") {
			bodyTop = window.pageYOffset;

		} else if (typeof document.compatMode != "undefined"
			&& document.compatMode != "BackCompat") {
			bodyTop = document.documentElement.scrollTop;

		} else if (typeof document.body != "undefined") {
			bodyTop = document.body.scrollTop;
		}
		/*顯示出捲動後的高度值*/
		// console.log(bodyTop);
		var bodyHeight = document.body.clientHeight;

		for (var i = 1; i <= 6; i++) {
			var detectDiv = document.getElementById("hm_" + i);
			if (bodyTop + bodyHeight > detectDiv.offsetTop + detectDiv.clientHeight / 3 * 2) {
				// console.log("index " + i + "   " + bodyTop + "+" + detectDiv.clientHeight + " (" + detectDiv.clientHeight / 3 * 1 + ") > " + detectDiv.offsetTop);
				detectDiv.classList.add('active');
			}
		}
	};
}

function setBannerMouseEvent() {
	var move_about = document.getElementById("move_about");
	var banner_dots = document.getElementById("banner_dots");
	var bannerPrev = document.getElementById("bannerPrev");
	var bannerNext = document.getElementById("bannerNext");
	move_about.addEventListener("mouseenter", function () {
		bannePlay = false;
		if (banneStart != null) {
			clearInterval(banneStart);
			banneStart = null;
		}
	});

	move_about.addEventListener("mouseout", function () {
		bannePlay = true;
		if (bannePlay) {
			goPlayBanner();
		}
	});

	for (var i = 0; i < banner_dots.children.length; i++) {
		banner_dots.children[i].onclick = function (elem) { bannerDotClick(elem) };
	}

	bannerPrev.onclick = function () {
		var banner_dots = document.getElementById("banner_dots");
		var bannerDotLength = banner_dots.children.length;
		nowDot < 1 ? nowDot = 3 : nowDot--;
		removeAllBannerDot(banner_dots);
		if (nowDot > 0 && nowDot <= bannerDotLength - 1) {
			action_1();
		}
		else if (nowDot == 0) {
			// nowDot = 3;
			action_2();
		}
		goPlayBanner();
	};
	bannerNext.onclick = function () {
		var banner_dots = document.getElementById("banner_dots");
		var bannerDotLength = banner_dots.children.length;
		nowDot == bannerDotLength - 1 ? nowDot = 0 : nowDot++;
		removeAllBannerDot(banner_dots);
		if (nowDot > 0 && nowDot <= bannerDotLength - 1) {
			action_1();
		} else if (nowDot == 0) {
			nowDot = 4;
			action_2();
		}
		goPlayBanner();
	};
}

function activeBanner() {
	var banner_group = document.getElementById("banner_group");
	banner_group.classList.add('active');
	if (bannePlay) {
		goPlayBanner();
	}
}

var nowDot = 0;
var nowRecruitDot = 0;

function goPlayBanner() {
	var banner_dots = document.getElementById("banner_dots");
	var bannerDotLength = banner_dots.children.length;
	if (bannePlay) {
		if (banneStart != null) {
			clearInterval(banneStart);
		}
		banneStart = setInterval(function () {
			nowDot == bannerDotLength - 1 ? nowDot = 0 : nowDot++;
			removeAllBannerDot(banner_dots);
			if (nowDot > 0 && nowDot <= bannerDotLength - 1) {
				action_1();
			} else if (nowDot == 0) {
				nowDot = 4;
				action_2();
			}
		}, 6000);
	}
}

function removeAllBannerDot(dotsElem) {
	if (dotsElem != null) {
		var banner_dots = dotsElem;
		for (var i = 0; i < banner_dots.children.length; i++) {
			banner_dots.children[i].classList.remove('on');
		}
	}
}

function activeBannerDot(dotsElem, index) {
	if (dotsElem != null) {
		var banner_dots = dotsElem;
		for (var i = 0; i < banner_dots.children.length; i++) {
			if (i == index) {
				banner_dots.children[i].classList.add('on');
			} else {
				banner_dots.children[i].classList.remove('on');
			}
		}
	}
}

function bannerDotClick(event) {
	var banner_dots = document.getElementById("banner_dots");
	var bannerDotLength = banner_dots.children.length;
	var index = 0;		//0~3
	for (var i = 0; i < event.target.parentElement.children.length; i++) {
		if (event.target.parentElement.children[i] == event.target) {
			index = i;
		}
	}
	activeBannerDot(banner_dots, index);
	if (nowDot < bannerDotLength - 1) {
		nowDot = index;
		if (index > 0 && index <= bannerDotLength - 1) {
			nowDot = index;
			action_1();
		} else if (index == 0) {
			action_2();
		}
	} else if (nowDot == 3) {
		if (index > 0 && index <= bannerDotLength - 1) {
			nowDot = index;
			action_1();
		} else if (index == 0) {
			nowDot = 4;
			action_2();
		}
	}
}

// ====== 函式區塊 ======
function goTransform(bannerGroupElem, direct, page, time) {
	if (bannerGroupElem != null && (direct == "X" || direct == "Y")) {
		var banner_group = bannerGroupElem;
		banner_group.style = "transform:translate" + direct + "(-" + page * 100 + "%); transition:" + time + "s";
	}
}

function changeClass(index) {
	var banner_group = document.getElementById("banner_group").children;
	for (var i = 0; i < banner_group.length; i++) {
		if (i == index) {
			banner_group[i].classList.add("active");
		} else {
			banner_group[i].classList.remove("active");
		}
	}
}

function action_1() {
	var banner_dots = document.getElementById("banner_dots");
	var banner_group = document.getElementById("banner_group");
	goTransform(banner_group, "X", nowDot, 0.5);
	// setTimeout(function () { changeClass(nowDot + 1) }, 500);
	setTimeout(function () { changeClass(nowDot) }, 500);
	activeBannerDot(banner_dots, nowDot);
}
function action_2() {
	var banner_dots = document.getElementById("banner_dots");
	var banner_group = document.getElementById("banner_group");
	goTransform(banner_group, "X", nowDot, 0.5);
	setTimeout(function () {
		goTransform(banner_group, "X", 0, 0);
	}, 500);

	setTimeout(function () {
		changeClass(0);
		nowDot = 0;
	}, 510);

	activeBannerDot(banner_dots, 0);
}

var nowRecruitDot = 0
function goPlayRecruit() {
	if(banneRecruitStart != null){
		clearInterval(banneRecruitStart);
		banneRecruitStart = null;
	}
	banneRecruitStart = setInterval(function () {
		nowRecruitDot == 3 ? nowRecruitDot = 0 : nowRecruitDot++;
		execRecruit();
	}, 2000);
}

function execRecruit(){
	var banner_dots = document.getElementById("recruit_dots");
	var bannerDotLength = banner_dots.children.length;
	removeAllBannerDot(banner_dots);
	if (nowRecruitDot < bannerDotLength) {
		goTransform(recruit_group, "Y", nowRecruitDot, 1);
		activeBannerDot(banner_dots, nowRecruitDot);
	} else if (nowRecruitDot == bannerDotLength) {
		goTransform(recruit_group, "Y", nowRecruitDot, 1)
		activeBannerDot(banner_dots, 0);
		setTimeout(() => {
			nowRecruitDot = 0;
			goTransform(recruit_group, "Y", nowRecruitDot, 0);
		}, 1000);
	}
}

function recruitDotClick(event) {
	var banner_dots = document.getElementById("recruit_dots");
	var bannerDotLength = banner_dots.children.length;
	var index = 0;		//0~3
	for (var i = 0; i < event.target.parentElement.children.length; i++) {
		if (event.target.parentElement.children[i] == event.target) {
			index = i;
		}
	}
	nowRecruitDot = index;
	execRecruit();
	goPlayRecruit();
}

function setRecruitMouseEvent() {
	var banner_dots = document.getElementById("recruit_dots");
	var bannerDotLength = banner_dots.children.length;
	for (var i = 0; i < bannerDotLength; i++) {
		banner_dots.children[i].onclick = function (elem) { recruitDotClick(elem) };
	}
}