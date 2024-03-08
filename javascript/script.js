//JavavScript Document


    $(".list>li").mouseover(function(){
        var submenu = $(this).children(".submenu").slideDown;});
    
    $(".list>li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp();});

    
                
    var win;
    function winOpen(){
    win = window.open('contact.html', 'child', 'toolbar=no, location=no, status=no, menubar=no, resize=no, scrollbars=no, width=500, height=300')};

    var obTimeOut; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
    var ObjectArray = new Array ();

    ObjectArray[1] = "images(1).jpg";
    ObjectArray[2] = "images(2).jpg";
    ObjectArray[3] = "images(3).jpg";
    ObjectArray[4] = "images(4).jpg";
    ObjectArray[5] = "images(5).jpg";
    ObjectArray[6] = "images(6).jpg";
     
    var nObjectCnt = 0; 
     
    function ShowDefaultRotate() // 스스로 자신을 호출하는 재귀함수 (Recursive Function)
    {
     nObjectCnt++;
     
     if( nObjectCnt < ObjectArray.length )  // 배열의 갯수 이내일때만 실행
     {
     document.getElementById("screen").src = ObjectArray[nObjectCnt];  
     obTimeOut = setTimeout("ShowDefaultRotate()",1000);  // 1초후에 자기자신을 호출 
     }
     else
     {
     clearTimeout(obTimeOut); // 배열의 갯수만큼 반복하여 변환시킨 후에는 Timeout 을 중지시킨다 
     } 
    }
     
     
    function startAnimation()
    {
          obTimeOut = window.setTimeout(ShowDefaultRotate,100); // 윈도우 로드 후 0.1초 후에 반복함수를 호출합니다.
    }
     
     window.onload = startAnimation; // 윈도우 로드시 이미지 변환함수 실행