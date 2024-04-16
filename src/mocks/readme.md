# mocks 폴더 규칙

- mocking 관련 폴더
- 핸들러는 도메인 단위로 폴더를 만든다.
- 핸들러의 파일명 규칙은 `[domain name].handlers.ts`로 작성한다.
- 작성한 핸들러는 `handlers.ts`에 추가한다.

## 폴더 구조

```
📦mocks
 ┣ 📂products               # 도메인 단위
 ┃ ┗ 📜products.handlers.ts # 핸들러
 ┣ 📜browser.ts             # 진입점
 ┣ 📜handlers.ts            # 핸들러 등록
 ┗ 📜readme.md
```
