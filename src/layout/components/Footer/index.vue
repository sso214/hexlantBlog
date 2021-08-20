<template>
  <footer>
    <div class="cont">
      <div class="info">
        <div class="left">
          <img src="@/assets/logo_w.png" alt="logo"/>
          <p>
            (주) 헥슬란트 | 서울시 강남구 강남대로 340 경원빌딩 7층 | 대표 노진우<br/>
            사업자등록번호 636-88-00831 | 통신판매업신고 2018-서울강남-02117<br/>
            <a href="mailto:contact@hexlant.com">contact@hexlant.com</a>
          </p>
        </div>
        <div class="right">
          <div>
            <p>사업부문</p>
            <ol>
              <li><a href="#" target="_blank">헥슬란트 오딧</a></li>
              <li><a href="#" target="_blank">헥슬란트 리서치</a></li>
              <li><a href="#" target="_blank">헥슬란트 이벤트</a></li>
              <li><a href="#" target="_blank">헥슬란트 언론보도</a></li>
            </ol>
          </div>
          <div>
            <p>시장연구</p>
            <ol>
              <li><a href="#" target="_blank">이슈리포트</a></li>
              <li><a href="#" target="_blank">공시리포트</a></li>
              <li><a href="#" target="_blank">위클리리포트</a></li>
              <li><a href="#" target="_blank">기술리포트</a></li>
            </ol>
          </div>
          <div>
            <p>서비스</p>
            <ol>
              <li><a href="#" target="_blank">옥텟</a></li>
              <li><a href="#" target="_blank">토큰뱅크</a></li>
              <li><a href="#" target="_blank">시럽월렛 암호화폐 지갑</a></li>
              <li><a href="#" target="_blank">클레이튼폰 월렛</a></li>
            </ol>
          </div>
        </div>
      </div>

      <div class="sns">
        <a href="#" target="_blank">
          <img src="@/assets/sns-facebook.svg" alt="sns"/>
        </a>
        <a href="#" target="_blank">
          <img src="@/assets/sns-blog.svg" alt="sns"/>
        </a>
        <a href="#" target="_blank">
          <img src="@/assets/sns-naver.svg" alt="sns"/>
        </a>
        <a href="#" target="_blank">
          <img src="@/assets/sns-twitter.svg" alt="sns"/>
        </a>
        <a href="#" target="_blank">
          <img src="@/assets/sns-instagram.svg" alt="sns"/>
        </a>
      </div>
    </div>

    <div class="bottom">
      <div class="cont">
        <p>© 2021 Hexlant Inc.</p>
        <div class="terms">
          <span>서비스 이용약관</span>
          <span>|</span>
          <span>개인정보 처리방침</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
footer {background:#000;color:#fff;padding-top:100px;font-size:12px}
footer .cont {max-width:$contWidth;margin:0 auto}
footer .info {display:flex}
footer .left img {height:25px;margin-bottom:60px}
footer .left p {line-height:1.8}
footer .right {margin-left:auto;display:flex}
footer .right div {margin-left:110px;border:1px}
footer .right p {margin-bottom:10px;font-weight:bold}
footer .right li {margin-bottom:10px}
footer .right a {opacity:0.6;transition:all .2s}
footer .right a:hover {opacity:1}
footer .sns {margin:50px 0;display:flex;align-items:center}
footer .sns a {margin-right:10px;transition:all .2s;opacity:.5}
footer .sns a:hover {opacity:1}
footer .bottom {font-weight:500;height:50px;border-top:1px solid #232323;color:#787878}
footer .bottom .cont {display:flex;align-items:center;height:100%}
footer .bottom .terms {display:flex;align-items:center;margin-left:auto;height:100%}
footer .bottom span {cursor:pointer}
footer .bottom span:nth-child(2) {margin:0 5px}
footer .bottom span:nth-child(3) {color:#fff}
</style>
