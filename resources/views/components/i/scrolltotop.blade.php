
<style>
    #scrollToTopBtn {
      display: none;
      position: fixed;
      bottom: 20px;
      right: 30vw;
      z-index: 99;
      background-color: #303030;
      color: white;
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.3s ease; /* Adicionando transição para suavizar o movimento */
    }

    #scrollToTopBtn:active {
      transform: translateY(5px); /* Mover para baixo quando clicado */
    }
</style>
<button onclick="scrollToTop()" id="scrollToTopBtn" title="Go to top">↑</button>

<script>    
    window.scrollFunction = f => {
      var scrollToTopBtn = document.getElementById("scrollToTopBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    window.onscroll = f => scrollFunction();
    
    window.scrollToTop = f => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    </script>