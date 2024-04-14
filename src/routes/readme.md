# routes 폴더 규칙

- [tanstack-router의 file 기반 라우팅](https://tanstack.com/router/v1/docs/framework/react/guide/file-based-routing)을 따른다.
- 응집도있게 작성한다.
  - 해당 페이지 내에서 공통으로 사용되는 컴포넌트, 훅 등은 `-common` 폴더에 작성한다.
  - 중첩된 페이지에서 공통으로 사용되는 컴포넌트, 훅 등도 해당 페이지와 같은 레벨에 `-common` 폴더를 만들고 작성한다.
  - ex) 리스트 페이지(`/list`), 상세 페이지(`/list/:id`)에서 공통으로 사용된다면 `/list`와 같은 레벨에 `-common` 폴더를 만든다.(`/list/-common`)

## 폴더 구조

```
📦routes
 ┣ 📂-common              # 페이지 내에서 공통으로 사용하는 컴포넌트, 훅, 유틸 등
 ┣ 📂list                 # 페이지
 ┃ ┣ 📂-common            # 리스트, 상세 페이지 내에서 공통 사용하는 컴포넌트, 훅, 유틸 등
 ┃ ┣ 📂 $id
 ┃ ┗ 📜index.lazy.tsx
 ┣ 📜-product-list.api.ts # 해당 페이지에서 사용하는 api
 ┣ 📜__root.tsx
 ┣ 📜index.lazy.tsx
 ┗ 📜readme.md
```
