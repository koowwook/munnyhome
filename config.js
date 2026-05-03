// Munny — 사이트 공통 설정
// 향후 도메인 이메일 도입 시 본 파일의 CONTACT_EMAIL 한 줄만 수정하면 모든 페이지에 반영됨

const SITE_CONFIG = {
  CONTACT_EMAIL: "ask.moneylog@gmail.com",
  COMPANY_NAME: "주식회사 유희파트너스",
  REPRESENTATIVE: "구채희",
  BUSINESS_NUMBER: "669-87-03092",
  ECOMMERCE_NUMBER: "2023-서울마포-3374",
  ADDRESS: "서울특별시 마포구 독막로28길 10, 109동 B101호",
  HERITAGE_HOMEPAGE: "https://ch9.co.kr/",
  SMARTSTORE_URL: "https://smartstore.naver.com/prettywife",
};

// 페이지 로드 시 mailto·이메일 텍스트 자동 일괄 갱신 (향후 이메일 변경 시 1 곳만 수정)
(function applyContactEmail() {
  if (typeof document === "undefined") return;
  document.addEventListener("DOMContentLoaded", function () {
    const email = SITE_CONFIG.CONTACT_EMAIL;
    document.querySelectorAll("a[href^='mailto:']").forEach(function (a) {
      a.href = "mailto:" + email;
    });
    document.querySelectorAll(".contact-email").forEach(function (el) {
      el.textContent = email;
    });
    const infoEmail = document.getElementById("contact-email-info");
    if (infoEmail) infoEmail.textContent = email;
  });
})();
