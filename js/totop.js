        //totop 버튼
    function toggleTotopButton() {
        var totopButton = document.getElementById("totop");
        if (document.documentElement.scrollTop > 300) {
          totopButton.style.opacity = "1";
        } else {
          totopButton.style.opacity = "0";
        }
      }
      
      // 상단으로 스크롤하는 함수
      function scrollToTop() {
        document.documentElement.scrollTop = 0;
      }
      
      // 스크롤 이벤트를 감지하여 "totop" 버튼의 표시/숨김을 처리
      window.onscroll = function() {
        toggleTotopButton();
      };
