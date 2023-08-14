<h1 align='center'> For-Minutes</h1>

<img src="https://user-images.githubusercontent.com/43867711/161374231-0bb7b99c-e2b6-4556-a808-2c4c9968a7e5.png" />

minutes ⓝ 회의록  
인공지능 회의록 요약 서비스

> 2021 IT Media Engineering Capstone Design Project

## Introduction

### 기획 의도

코로나 상황의 악화로 불가피한 비대면 온라인 회의의 빈도가 급격히 증가했다.   
또한 회의록 작성자의 집중도가 떨어지거나 회의 시간 외에 개별적으로 시간을 투자하는 등 수기 회의록 작성 시 여러 가지 불편한 점이 있었다. 음성 녹음 파일의 낮은 재사용성과 회의록 작성 시 생기는 단점 등을 인공지능 회의록 작성 서비스가 시간과 노력을 절감함으로써 보완할 수 있을 것으로 보인다. 

### 작품 소개

장기적인 코로나 상황에 온라인 미팅이나 수업 등 언택트 상황의 빈도가 높아짐에 따라 본격적인 비대면 시대에 도래했다. 반복되는 수기 회의록 작성의 불편함을 해소하기 위해 4차 산업 혁명 시대를 이끌기 위한 분야 중 하나로 꼽히는 인공지능을 도입하여 회의록 작성에 드는 시간과 노력을 절감하는 데에 목적을 둔다.

## Tech Stack

`Python` `Django` `React` `JavaScript`

## Architecture

<img width="945" alt="image" src="https://github.com/ttaerrim/for-minutes/assets/43867711/fa7fb974-dd43-4f05-bee4-475985d647a6">


## Directory Structure

```bash
├── forminutesprj       # backend
├── frontend            # front
│   ├── public
│   └── src
│       ├── component
│       │   ├── Button
│       │   ├── Footer
│       │   ├── Navigation
│       │   ├── ScrollToTop
│       │   └── Spinner
│       ├── container
│       │   ├── Cards
│       │   ├── Detail
│       │   ├── Main
│       │   ├── Minute
│       │   ├── Modal
│       │   ├── Pdf
│       │   └── Post
│       └── images
└── testapp             # backend
```

## Program Video

https://www.youtube.com/watch?v=IzfqtNxByGk

## 담당 기능

**프론트엔드**

- 회의록 GET, POST, PUT, DELETE
- 회의 스크립트 결과 GET, POST
- 회의록 요약, 키워드 결과 GET, POST
- 회의록 PDF 변환 → [react-pdf](https://react-pdf.org/) 라이브러리 사용

**백엔드**

- STT API (CLOVA Speech) 연동
- 요약 API (CLOVA Summary) 연동

## 배운 점

- 프론트엔드를 `React` 를 사용해 구현할 수 있게 되었다.
- 서버와 데이터로 소통할 수 있는 HTTP Method 통신 방식에 대해 알게 되었다.

## 수상

2021 한이음 ICT멘토링 공모전 입선  
2021 덕성여자대학교 과학기술대학 학술제 학술경연대회 장려상
