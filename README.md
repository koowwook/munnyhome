# Munny 랜딩 페이지

Apple Developer Program / Google Play Console 조직 등록 + 앱 출시 심사용 공식 사이트.

## 파일 구조

```
landing_page/
├── index.html              # 메인 (/)
├── privacy/index.html      # 개인정보처리방침 (/privacy)
├── terms/index.html        # 이용약관 (/terms)
├── styles.css              # 공통 스타일
├── config.js               # 사이트 설정 (이메일·운영사 정보 상수)
├── vercel.json             # Vercel 라우팅·보안 헤더
└── README.md               # 이 파일
```

## ⚠️ 정식 출시 전 법률 검토 필요

- `privacy/index.html` (개인정보처리방침) — 법무 자문 후 최종 확정
- `terms/index.html` (이용약관) — 법무 자문 후 최종 확정
- 외부 변호사 자문 예산 ₩1,000 만 (Day 11 결정-097) 범위 내에서 진행

## 운영사 정보 (모든 페이지 공통)

- **운영사:** 주식회사 유희파트너스
- **대표자:** 구채희
- **사업자등록번호:** 669-87-03092
- **통신판매업 신고번호:** 2023-서울마포-3374
- **주소:** 서울특별시 마포구 독막로28길 10, 109동 B101호
- **문의:** ask.moneylog@gmail.com (`config.js` 의 `CONTACT_EMAIL` 한 곳에서 관리)
- **기존 공식홈:** https://ch9.co.kr/

## TODO

- [x] ~~네이버 스마트스토어 링크 입력~~ ✅ 2026-05-03 반영 (smartstore.naver.com/prettywife)
- [x] ~~문의 이메일 변경~~ ✅ 2026-05-03 ask.moneylog@gmail.com 일괄 반영
- [ ] 향후 도메인 이메일 도입 시 `config.js` 의 `CONTACT_EMAIL` 1 곳 수정 → 모든 페이지 자동 반영
- [ ] 법률 검토 후 privacy·terms 의 `draft-notice` 박스 제거 + 정식 시행일 갱신

## Vercel 배포

```bash
# 1) Vercel CLI 설치 (최초 1회)
npm i -g vercel

# 2) landing_page 폴더에서
cd landing_page
vercel --prod
```

또는 GitHub 연결 시 자동 배포 (main 브랜치 push 시 deploy).

## 검증 체크리스트

- [ ] / 메인 페이지 정상 접속
- [ ] /privacy 개인정보처리방침 정상 접속
- [ ] /terms 이용약관 정상 접속
- [ ] 모든 페이지 푸터에 사업자 정보 표시
- [ ] ask.moneylog@gmail.com 표시
- [ ] ch9.co.kr 링크 정상 연결
- [ ] 주소 = 서울특별시 마포구 독막로28길 10, 109동 B101호 통일
- [ ] 사업자등록번호 669-87-03092
- [ ] 통신판매업 신고번호 2023-서울마포-3374
- [ ] App Store / Google Play 버튼 = "Coming Soon" 비활성 처리
- [ ] "본 웹사이트에서는 앱 직접 결제를 제공하지 않습니다" 문구 명시
- [ ] 모바일에서 가독성 확인 (640px 미만 반응형)
- [ ] Apple/Google 심사자 시점 — 운영사·서비스 목적 즉시 이해 가능

## 변경 이력

- **2026-05-03 (Day 28):** Apple/Google 심사용 전면 개편
  - 메인 페이지 = 운영사 정보·기존 가계부 → AI 앱 확장 스토리·기존 서비스 링크·앱 출시 안내 추가
  - /privacy·/terms 신규 페이지 (10·12 조항)
  - 푸터 = 사업자 정보·법률 페이지 링크·기존 공식홈 링크 보강
  - SEO 메타데이터·Open Graph 보강
  - styles.css·config.js 분리 (재사용성·관리성 ↑)
- **2026-05-02 (Day 26):** 카카오 채널·네이버 스마트스토어 링크 추가
- **이전:** 회사 정보 기본 페이지
