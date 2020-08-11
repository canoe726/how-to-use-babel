# how-to-use-babel
Javascript Babel Practice

## 1. Babel 이란?
- 자바스크립트 컴파일러
- 최신 자바스크립트 문법을 모든 브라우저가 이해하지 못하기 때문에 babel이 브라우저가 이해할 수 있는 문법으로 변환해준다.
- Babel 사용시 ES6, ES7 과 같은 최신 문법을 사용해서 코딩 후 브라우저 호환성을 위해 이전 버전의 문법으로 다시 변경할 필요가 없다.

</br>

## 2. Babel 사용 순서

### 1) 초기화

프로젝트 폴더 파일에 package.json 파일 생성

프로젝트 폴더에서 다음 명령어 실행
```
npm init -y
```
</br>

### 2) babel-cli 설치

babel-cli 설치 명령어
```
npm install --save-dev babel-cli
```
-g : 글로벌 옵션, --save-dev : 프로젝트 폴더에 설치하는 옵션
<br/>


### 3) npm script로 babel 코드 변경 자동화

package.json 파일 수정
```
"scripts": {
  "build": "babel ./public/src -d ./public/lib -w"
}
```
./public/src 경로에 존재하는 .js 코드를 설정한 es 버전에 맞게 변경하여 ./public/lib 경로에 생성
</br>


### 4) .babelrc 파일을 프로젝트 폴더에 생성

js 파일을 원하는 버전으로 변경하기 위한 옵션 파일 생성

.babelrc 폴더의 내용
```
{
  "presets": [],
  "plugins": [],
}
```
</br>


### 5) preset 설치

ECMA 2015 preset 사용시 설치 명령어
```
npm install --save-dev babel-preset-es2015
```

설치 후 .babelrc 파일에 프리셋 추가
```
{
  "presets": ["es2015"],
  "plugins": [],
}
```
</br>


### 6)  설정한 preset 버전에 맞게 .js 파일을 수정하는 코드

```
npm run build
```
</br>


### 7) minify

./public/lib 디렉터리에 존재하는 .js 파일을 압축하기 위해 minify 패키지 설치

minify 패키지 설치 명령어
```
npm install babel-preset-minify --save-dev
```

.babelrc 파일에 프리셋 추가
```
{
  "presets": ["es2015", "minify"],
  "plugins": [],
}
```

Babel 이 잘 작동하는지 확인한다.
```
npm run build
```
