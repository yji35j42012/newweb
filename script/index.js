//  load讀取條 

  var nowLoad = 0
  var imgLength = $('img').length

   $('img').each(function(){
       var x = $('img').index(this)
        $(this).ready(function(){
            nowLoad += 100 / imgLength
            $('.loading_box span').animate({'left':`${parseInt(nowLoad)}%`},80);
        })
   })

   var barWidth = $('.loading_box').css('width')
   var barTime = setInterval(() => {
       var barLeft =  $('.loading_box span').css('left') 
       var now = parseInt(parseFloat((parseInt(barLeft) / parseInt(barWidth))*102))  
       $('.loading tt').text(now)
       if(now >= 100){
           clearInterval(barTime)
           $('#load').removeClass('active');
           setTimeout(function(){
                $('#load').fadeOut()
            },1000)    
           setTimeout(function(){
                $('#hm_1').addClass('active')
           },1000)         
       }
   },100);


 // 登入彈窗控制
   var signIn = false;
   $('.menu li:eq(6)').click(function(){
        signIn = true;
        nowSignIn()
   })

   $('.login_close_btn').click(function(){
        signIn = false;
        nowSignIn()
   })
   function nowSignIn(){
     if(signIn){ $('#signIn').fadeIn(500)}
     else{ $('#signIn').fadeOut(500)} 
   }

    var move = 0
    var list = $('.banner_group>div').length
    var banneStart;
    var bannePlay = true;

    $(document).ready(function(){
        bannePlay = true
        $(`.banner_group>div:eq(0)`).addClass('active') 
        if(bannePlay){goPlay();} 
    })	
    $('#move_about').mouseenter(function(evt){
        bannePlay = false;
        clearInterval(banneStart);
    })
    $('#move_about').mouseleave(function(e) {
        bannePlay = true
        if(bannePlay){goPlay();}
    });


    //禁止圖片拖動
    $('#move_about img').mousedown(function(e){
        e.preventDefault()
    }) 
    var downX,upX; 
    $('#move_about').mousedown(function(e){
       downX = e.clientX
    })
    $('#move_about').mouseup(function(e){
        upX = e.clientX
       if(downX - upX > 100){
            move == list - 1? move = 1 : move++
            $('.banner_dots li').removeClass('on')
		    if(move>0 && move < list - 1){action_1()}
            else if(move == list - 1){action_2()} 
       }
     })

    // 輪播計時器
    function goPlay() {
        if(bannePlay){
            banneStart = setInterval(banner, 6000)
        }      
    };

    function banner(){
        move == list - 1? move = 1 : move++
        $('.banner_dots li').removeClass('on')
		if(move>0 && move < list - 1){action_1()}
        else if(move == list - 1){action_2()}     
    }

    // 輪播按鍵點擊事件
    $('.banner_dots li').click(function(){
        bannePlay = false;
        $('.banner_dots li').removeClass('on')
        var find = $('.banner_dots li').index(this)
        if(move < 3){
            move = find;
            if(find>0 && find < list - 1){
                move = find;
                action_1();
            }
            else if(find == 0){      
                action_2()
            }	
        } 
        else if(move == 3){
            if(find>0 && find < list - 1){
                move = find;
                action_1();
            }
            else if(find == 0){      
                move = 4
                action_2()
            }	   
        }
    })


    // 輪播按鈕點擊事件
    $('#bannerPrev').click(function(){
        move < 1 ? move =3 : move--
        $('.banner_dots li').removeClass('on')
		if(move>0 && move < list - 1){action_1()}
        else if(move < 1){action_2()} 
    })
    $('#bannerNext').click(function(){
        banner()
    })

 
    // ====== 函式區塊 ======
	function goTransform(page,time){
		$('.banner_group').css('transform',`translateX(-${page * 100}%)`).css('transition',`${time}s`);
	}
	function changeClass(name){
		$(`.banner_group>div`).removeClass('active')
		$(`.banner_group>div:eq(${name-1})`).addClass('active')
    }
    function action_1(){
        goTransform(move, 0.5);
        setTimeout(function(){changeClass(move+1)},500);
        $(`.banner_dots li:eq(${move})`).addClass('on')
    }
    function action_2(){
        goTransform(move, 0.5);
		setTimeout(function(){goTransform(0, 0);},500);
        setTimeout(function(){
            changeClass(1)
            move = 0
        },510)
        $(`.banner_dots li:eq(0)`).addClass('on')
    }

    
    // 漢堡bar點擊menu 展開/關閉
    $('.menu_btn').click(function(){$(this).toggleClass('active')})
    $('.menu li').click(function(){$('.menu_btn').removeClass('active')})
    
	var scroll = $(window).scroll(function () {
		for (var i = 1; i < 6; i++) {
			if (scroll.scrollTop() > $(`#hm_${i}`).offset().top + $(`#hm_${i}`).height() / 3 * 2) {
				$(`#hm_${i + 1}`).addClass('active')
			}
		}
    })


    var recruitTime = 0
    setInterval(() => {
        recruitTime == 3? recruitTime = 0 : recruitTime++
        $('.recruit_dots li').removeClass('on')

        if(recruitTime<3){
            recruit(recruitTime,1)
            $(`.recruit_dots li:eq(${recruitTime})`).addClass('on')
        }else if(recruitTime == 3){      
            recruit(recruitTime,1)
            $(`.recruit_dots li:eq(0)`).addClass('on')
            setTimeout(() => {
                recruitTime = 0 
                recruit(recruitTime,0)
            },1000);
        }  
       
    },2000);

    function recruit(page,time){
        $('.recruit_group').css('transform',`translateY(-${page *100}%)`).css('transition',`${time}s`);  
    }
