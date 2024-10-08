# 🏠 집 가구싶어 (SweetHome)

<p>React, TypeScript, Rest API를 활용한 라이프 스타일 홈 데코·인테리어 쇼핑몰 프로젝트입니다.<br />
성별과 연령에 상관없이 모두가 관심을 가지고 이용할 수 있는 인테리어 관련 주제로 선정하였으며,<br />
‘집(Home)’ + ‘가구(Furniture)’ + ‘가고싶다.(Want To Go)’ 의 합성어로 언제 어디서나 집에 가고싶게 만드는 제품을 판매하다는 의미의 쇼핑몰입니다.</p>

<br />

## 프로젝트 소개

> **개발기간** : 2023. 05. 30 ~ 2023. 07. 01<br />
> **리팩토링** : 2024. 07. 24 ~ ing <br />
> **배포주소** : [DEMO](https://hello-sweethome.netlify.app/)

<br />

## 사용기술 및 개발환경

### Development

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" />
<img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white" />
<br />
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React Router&logoColor=white" />
<img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat&logo=ReactHookForm&logoColor=white" />
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white" />
</p>

### Config

<p>
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=Vite&logoColor=white"/></a>
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/></a>
</p>

### Deployment

<img src="https://img.shields.io/badge/netlify-00C7B7?style=flat&logo=netlify Pages&logoColor=white"/></a>

<br />

## 성능 개선 
### 🔗 [AWS S3, CloudFront, Route 53으로 웹 호스팅 구축](https://velog.io/@good_sang/AWS-S3-CloudFront-Route-53-를-이용해서-배포)<br />

| **AWS 아키텍처** | **Cache Hit** | **Lighthouse 개선** |
| :--------------------------------------------: | :--------------------------------------------: | :--------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/919ad6b6-7f85-47d4-a25c-5b6928100965" width=360px alt="AWS 아키텍처" />| <img src="https://github.com/user-attachments/assets/2142d39a-038f-4788-8bfb-493514ecb8b6" width=360px alt="Cache Hit" /> | <img src="https://github.com/user-attachments/assets/8e89f35a-4f18-425d-9b79-351c6e6d5efd" width=360px alt="Lighthouse 개선" /> 

### 🔗 [Lighthouse Performance 성능 79% 개선](https://velog.io/@good_sang/Sweet-Home-Lighthouse-Performance-개선하기-1)<br />

**1. 번들 크기 최적화를 통해 First Contentful Paint(FCP) 개선** 
- vite.config.json의 manualChunks를 설정해 라이브러리 청크 분리
- Page 단위로 lazy와 suspense 적용하여 필요한 리소스만 로드

**2. 이미지 최적화를 통해 Largest Contentful Paint(LCP) 개선** 
- Intersection Observer API를 활용해 뷰포트에 보이는 이미지만 로드
- imagemin 플러그인을 사용해 전체 이미지 용량 65.51% 감소

<br />

| **최적화 전** | **최적화 후** |
| :--------------------------------------------: | :--------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/a25aae6e-e7bb-42af-ae02-d636a2083543" width=360px alt="최적화 전 성능" />| <img src="https://github.com/user-attachments/assets/3245c22d-8e1c-4309-a270-77e788eee6f9" width=360px alt="최적화 후 성능" /> 

<br />

## 전체 화면 구성

### Layout
- React-Router-Dom의 outlet 중첩 라우팅을 활용한 레이아웃 구성
- Redux를 사용한 전역 상태 관리
- 재사용을 높이기 위한 세부 컴포넌트 구성
- 더 나은 UX를 위한 로딩 스피너 추가
### Head
- 카테고리 (Navbar) : useNavigate, NavLink를 활용한 페이지 라우터 관리
- 제품 검색 기능 : useState, useNavigate, ChangeEvent를 활용한 검색 기능 구현

### 메인 페이지 (Home)
- 이미지 슬라이더 : React-slider를 활용한 메인 페이지 이미지 슬라이더 구현
  
| **메인 페이지** | **About 페이지** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="public/assets/README/01_main.png" width=360px alt="메인" /> | <img src="public/assets/README/02_about.png" width=360px alt="어바웃" /> |

### 상품 페이지 (Shop)
- 상품 목록 페이지 : productItem 컴포넌트로 재사용성을 높이고 MouseEvent와 useState를 활용한 카테고리 필터 구현
- 상품 상세 페이지 : useParams를 활용한 상품 상세 정보 조회(ID), Redux를 활용한 장바구니 기능 구현
- 장바구니 담기 기능 : Redux, useDispatch, useSelector, useNavigate, useParams를 활용한 장바구니 상태 관리 구현
- 결제 페이지 : useNavigate, Redux를 활용한 페이지 라우팅, 데이터 전달 구현

| **상품 목록 페이지** | **상품 상세 페이지** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="public/assets/README/03_shop.png" width=360px alt="상품 목록" /> | <img src="public/assets/README/04_shopdetail.png" width=360px alt="상품 상세" /> |

### 장바구니 페이지 (Cart) & 결제 페이지 (Buy)
- 장바구니 목록 조회 : Redux, useSelector, useNavigate를 활용한 장바구니 상태 관리 구현
- 전체/선택 상품 구매 : Redux를 활용하여 상품 선택 유무에 따른 조건부 렌더링 구현
- 결제 기능 : Redux를 활용한 결제 상세 정보 출력 및 사용자 계좌 유무에 따른 조건부 렌더링 구현

| **장바구니 페이지** | **결제 페이지** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="public/assets/README/05_cart.png" width=360px alt="장바구니" /> | <img src="public/assets/README/06_buy.png" width=360px alt="결제" />

### 마이페이지 (Mypage)
- 주문 내역 조회
  - 상품 구매 취소, 상품 구매 확정
  - 상세 정보 조회 : 주문 시간(최신순)에 따른 상품 구매 내역 정렬 구현
- 계좌 관리
  - 전체 계좌 조회
  - 계좌 등록 : Modal을 통한 계좌 등록, 은행 선택시 은행 코드 자동 입력 구현, 자리수에 따른 여러 개의 input 상태 관리
  - 계좌 삭제 : 컴포넌트를 활용한 등록 계좌 리스트 출력, 등록 계좌 여부에 따라 조건부 렌더링 구현
- 개인 정보 수정: 비밀번호 재확인 기능 구현, React-Hook-form을 통한 코드 단순화 및 유효성 검사 구현

| **마이 페이지 (주문 내역 관리)** | **마이 페이지 (주문 내역 상세)** |
| :--------------------------------------------: | :--------------------------------------------: |
| <img src="public/assets/README/07_mypage_order.png" width=360px alt="마이페이지 주문 내역" /> | <img src="public/assets/README/08_mypage_orderdetail.png" width=360px alt="마이페이지 주문 상세" />

| **마이 페이지 (계좌 관리)** | **마이 페이지 (계좌 등록 모달)** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="public/assets/README/09_mypage_account.png" width=360px alt="마이페이지 계좌 관리" /> | <img src="public/assets/README/10_mypage_account_modal.png" width=360px alt="마이페이지 계좌 등록 모달" />

| **마이 페이지 (계좌 확인/삭제)** | **마이 페이지 (비밀번호 재확인)** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="public/assets/README/11_mypage_accountlist.png" width=360px alt="마이페이지 계좌 확인/삭제" /> | <img src="public/assets/README/12_mypage_info.png" width=360px alt="마이페이지 비밀번호 재확인" />

| **마이 페이지 (개인정보 수정)** | 
| :--------------------------------------------: |
| <img src="public/assets/README/13_mypage_infochange.png" width=360px alt="마이페이지 개인정보 수정" /> | 


### 인증 & 인가
- 회원가입 : React-Hook-Form을 이용한 비제어 컴포넌트 관리 및 유효성 검사 구현
- 로그인 : useState를 통해 로그인 기능 구현
- 로그인 인증 : App.tsx에서 useEffect를 이용한 모든 하위 페이지 로그인 인증 구현
- 로그아웃 : Redux를 사용해 Header 로그아웃 UI 구현

| **회원가입 페이지** | **로그인 페이지** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="public/assets/README/0_signup.png" width=360px alt="회원가입" /> | <img src="public/assets/README/0_login.png" width=360px alt="로그인" />

| **검색창** | **로딩 스피너** |
| :--------------------------------------------: | :--------------------------------------------: | 
| <img src="public/assets/README/0_search.png" width=360px alt="검색창" /> | <img src="public/assets/README/0_loading.png" width=360px alt="로딩" />

### 관리자 페이지 (Admin)
- 전체 사용자 목록 조회
- 상품 관리
  - 전체 상품 목록 조회
  - 상품 등록 : Select 컴포넌트를 이용한 상품 태그 등록 구현
  - 상품 정보 수정 : Modal 통한 상품 정보 수정 및 기존 정보 확인 기능 구현
  - 상품 삭제
- 주문 내역 관리
  - 전체 거래 내역 조회, 거래 취소, 거래 확정
 
|**관리자 페이지 (사용자 관리)** | **관리자 페이지 (상품 관리)** | 
|:--------------------------------------------: | :--------------------------------------------: |
| <img src="public/assets/README/14_admin_user.png" width=360px alt="b관리자페이지 사용자 관리uy" />| <img src="public/assets/README/15_admin_product.png" width=360px alt="관리자 페이지 상품 관리" /> 

| **관리자 페이지 (주문 내역 관리)** |
| :--------------------------------------------: | 
| <img src="public/assets/README/16_admin_orderlist.png" width=360px alt="관리자 페이지 주문 내역 관리" />
<br />



### clone project

```bash
$ git clone git@github.com:ChoEun-Sang/sweethome.git
```

### go to project

```bash
$ cd sweethome
```

### install npm

```bash
$ npm install
```

### start project

```bash
$ npm run dev
```



  




  

