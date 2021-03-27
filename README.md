# 프론트 엔드 기초 수업

## GITHUB 기초 개념

> GITHUB 용어

- stage : commit할 대상을 선택
- commit : 수정한 내용의 스냅샷을 찍음
- push : GITHUB 서버에 업로드
- pull : GITHUB 서버에서 다운로드
- branch : 각각의 개발자가 독립적으로 개발하기 위한 가지
- pull request : 각각의 branch에서 개발한 것을 master branch로 병합하기 위한 요청
- merge : 각각의 branch에서 개발한 것을 master branch로 병합

> 사이트 링크

마크다운 사용법 : [안내문서](https://gist.github.com/ihoneymon/652be052a0727ad59601)<br/>
HTML, CSS, JS 참고 사이트 : [W3Schools](https://www.w3schools.com/)<br/>
온라인 에디터 : [Codepen](https://codepen.io/trending)<br/>

## WEB/IT 기초 개념

> 클라이언트-서버 모델

<img src="https://github.com/ministori-yonsei/green_weekend_03/blob/main/1200px-Client-server-model.svg.png" width="648" />

클라이언트-서버 모델에서 클라이언트는 사용자가 사용하는 디바이스(PC, Mobile)를 의미하고, 서버는 클라이언트가 접속해서 데이터나 파일을 요청했을때 응답하는 시스템

클라이언트와 서버는 네트워크를 통해서 연결됨

<img src="https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/course/2614/4971.png" />

클라이언트와 서버 모델은 실제 연결은 아니지만 개념적으로 클라이언트 관점에서 1:1로 연결되었다고 생각할 수 있음

클라이언트 서버 모델에서 이루어지는 동작은 클라이언트의 요청(request)과 서버의 응답(response)의 1 사이클로 구성됨

클라이언트는 클라이언트 디바이스에서 실행되는 웹브라우저, 서버는 서버 디바이스에서 실행되는 서버 소프트웨어가 실제로 사용되는 것임

## HTML

> [HTML Introduction](https://www.w3schools.com/html/html_intro.asp)<br/>

> [HTML Elements](https://www.w3schools.com/html/html_elements.asp)<br/>

> [HTML Attributes](https://www.w3schools.com/html/html_attributes.asp)<br/>

HTML 속성(Attributes)
1) HTML Element에 추가 정보를 제공
2) name = "value" 형태로 사용

웹 문서에서 표시할 수 있는 콘텐츠
1) 텍스트
2) 이미지
3) 멀티미디어(비디오, 오디오)

### 텍스트 콘텐츠 요소(Element)

> [HTML Headings](https://www.w3schools.com/html/html_headings.asp)<br/>

제목 태그(Tag)
Heading -> h
h1 ~ h6

> [HTML Paragraphs](https://www.w3schools.com/html/html_paragraphs.asp)

단락 태그
Paragraph -> p

수평선
Horizontal Rules -> hr(Empty Element)

> [HTML Links](https://www.w3schools.com/html/html_links.asp)

하이퍼링크
Anchor -> a
href : 링크로 연결된 목적지 주소

1) 외부링크
- 링크 주소 입력 시 http(https) 키워드를 사용

2) 북마크
- 목적지에 id attribute를 사용해서 이름을 정해줌
- href attribute에 #를 사용해서 목적지 이름을 입력

[HTML Tables](https://www.w3schools.com/html/html_tables.asp)

- [Table Generator](https://www.tablesgenerator.com/html_tables)

[HTML Lists](https://www.w3schools.com/html/html_lists.asp)

1) 순서없는 목록(ul)
2) 순서있는 목록(ol)
3) 설명 목록

ul, ol 목록에서 중첩(nested) 형태로 사용할때 포함 관계를 주의
- 포함하는 목록 항목에 작은 목록 전체가 포함됨

### 이미지 콘텐츠 요소

[HTML Images](https://www.w3schools.com/html/html_images.asp)

1) src attiribute : 가져올 이미지 파일 위치 정보
2) alt(alternative) attribute : 대체 텍스트

### 멀티미디어 콘텐츠 요소

[HTML Video](https://www.w3schools.com/html/html5_video.asp)

attribute의 형태
1) name = "value"
2) name만 사용

video 태그의 attribute
1) controls
2) autoplay
3) muted
4) loop

[HTML YouTube Videos](https://www.w3schools.com/html/html_youtube.asp)

Youtube의 매개변수
1) controls => youtube_url/VIDEO_ID?controls=1
2) autoplay => youtube_url/VIDEO_ID?autoplay=1
3) mute => youtube_url/VIDEO_ID?mute=1
4) loop => youtube_url/VIDEO_ID?loop=1&playlist=VIDEO_ID

여러 매개변수 동시 사용
youtube_url/VIDEO_ID?controls=1&autoplay=1&mute=1&loop=1&playlist=VIDEO_ID (& : ampersand)

