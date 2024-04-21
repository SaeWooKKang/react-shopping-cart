# mocks 폴더 규칙

- mocking 관련 폴더
- 핸들러는 도메인 단위로 폴더를 만든다.
- 핸들러의 파일명 규칙은 `[domain name].handlers.ts`로 작성한다.
- 하나의 도메인에 여러개의 핸들러를 가질 수 있다. (1:N 관계이다.)
- index.handlers에 핸들러를 등록하고 해당 핸들러를 `mocks/handlers.ts`에 추가한다.

## 폴더 구조

```
📦mocks
 ┣ 📂products                 # 도메인
 ┣ ┣ 📜products.db.json       # DB
 ┣ ┣ 📜products.repository.ts # DB의 CRUD를 담당한다.
 ┣ ┣ 📜carts.handlers.ts      # 도메인과 핸들러는 1:N 관계이다.
 ┣ ┣ 📜products.handlers.ts   # 핸들러
 ┃ ┗ 📜index.handlers.ts      # 도메인에 작성한 모든 핸들러들을 등록한다.
 ┣ 📜browser.ts               # 진입점
 ┣ 📜handlers.ts              # 핸들러 등록
 ┗ 📜readme.md
```
