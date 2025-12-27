# Virtual Klipper - Claude 개발 가이드

## 프로젝트 정체성

**Virtual Klipper**는 Klipper 3D 프린터 펌웨어를 위한 커스터마이징된 웹 인터페이스로, Mainsail을 기반으로 합니다. 실시간 프린터 모니터링, 제어, G-Code 파일 관리 및 커스텀 페이지(Device, Method, Sequence)를 Vue.js 단일 페이지 애플리케이션으로 제공합니다.

**핵심 목적**: WebSocket을 통한 Moonraker API 통합 기반 웹 3D 프린터 제어

## 핵심 기술 스택

### 프레임워크 & 코어
- **Vue 2.7.10** - Progressive 프레임워크 (Class Component 스타일)
- **TypeScript 4.9.5** - 데코레이터 기반 타입 안전성
- **Vuetify 2.7.2** - Material Design 컴포넌트 라이브러리
- **Vuex 3.6.2** - 중앙 집중식 상태 관리
- **Vue Router 3.5.2** - 클라이언트 사이드 라우팅

### 주요 라이브러리
- **@mdi/js 7.0.0** - Material Design Icons (import 패턴, 폰트 아님)
- **echarts 5.5.0** + **vue-echarts 6.0.2** - 차트 및 시각화
- **axios 1.8.3** - HTTP 클라이언트
- **CodeMirror 6.x** - G-Code용 코드 에디터
- **@sindarius/gcodeviewer 3.7.17** - 3D G-Code 시각화

### 빌드 & 개발 도구
- **Vite 5.4.19** - 빌드 도구 및 개발 서버
- **ESLint + Prettier** - 코드 품질 및 포맷팅
- **Cypress 14.2.0** - E2E 테스팅

## 코드 작성 규칙

### 컴포넌트 구조 (필수)
```typescript
// 1. Template 먼저
<template>
    <div>...</div>
</template>

// 2. TypeScript로 작성된 Script
<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'

@Component({
    components: { ... }
})
export default class MyComponent extends Mixins(BaseMixin) {
    // 컴포넌트 로직
}
</script>

// 3. Scoped 스타일 마지막
<style scoped>
/* 컴포넌트별 스타일 */
</style>
```

### Import 순서
1. Vue 코어 (`vue`, `vue-class-component`, `vue-property-decorator`)
2. Mixins (`@/components/mixins/base`)
3. 컴포넌트 (UI 컴포넌트, 패널)
4. `@mdi/js`에서 아이콘
5. 타입/인터페이스
6. 유틸리티

### 네이밍 컨벤션
- **컴포넌트**: PascalCase 파일 및 클래스 (`MyComponent.vue`, `class MyComponent`)
- **Props/변수**: camelCase (`myVariable`, `isActive`)
- **CSS 클래스**: kebab-case (`my-class`, `step-item`)
- **Store 모듈**: 소문자 디렉토리 (`store/printer/`, `store/files/`)
- **아이콘**: mdi 접두사 상수 (`mdiHome`, `mdiCheck`)

### TypeScript 사용
- 데코레이터 사용: `@Component`, `@Prop`, `@Watch`
- 공통 기능은 `Mixins(BaseMixin)` 확장
- props, state, API 응답에 타입 정의
- `any` 사용 금지 - `unknown` 또는 구체적 타입 사용

### 아이콘 패턴 (중요)
```typescript
import { mdiHome, mdiCheck } from '@mdi/js'

export default class MyComponent extends Mixins(BaseMixin) {
    mdiHome = mdiHome  // 템플릿에서 사용 가능하도록
    mdiCheck = mdiCheck
}

// 템플릿에서:
<v-icon>{{ mdiHome }}</v-icon>
```

## 디렉토리 구조

### 핵심 경로
```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── panels/         # 대시보드 패널 (xxxPanel.vue)
│   ├── ui/             # 공통 UI (Panel.vue 등)
│   ├── mixins/         # 공유 로직 (base.ts)
│   └── dialogs/        # 모달 다이얼로그
├── pages/              # 라우트 레벨 페이지 (Dashboard.vue, Device.vue)
├── store/              # Vuex 모듈 (printer/, files/, gui/)
│   ├── index.ts        # 루트 스토어
│   └── [module]/       # index.ts를 가진 상태 모듈
├── plugins/            # Vue 플러그인 (router.ts, vuetify.ts, i18n.ts)
├── locales/            # i18n JSON 파일
└── main.ts             # 애플리케이션 진입점
```

### 컴포넌트 구성
- **Panels**: `components/panels/` - 대시보드 위젯
- **Pages**: `pages/` - 최상위 라우트 컴포넌트
- **UI**: `components/ui/` - 재사용 가능한 UI 컴포넌트
- **Store**: `store/[module]/` - 도메인별 상태

## 개발 워크플로우

### 주요 명령어
```bash
npm run serve          # localhost:8080 개발 서버
npm run build          # 프로덕션 빌드
npm run build.zip      # 빌드 + mainsail.zip 생성
npm run lint           # ESLint 검사
npm run lint:fix       # 린팅 이슈 자동 수정
npm run format         # Prettier로 포맷팅
npm run test           # Cypress E2E 테스트 실행
npm run preview        # 프로덕션 빌드 미리보기
```

### 개발 프로세스
1. `npm run serve`로 핫 리로드 개발 서버 실행
2. `src/`에서 변경 작업
3. 커밋 전 `npm run lint:fix` 실행
4. 브라우저에서 변경사항 테스트 (반응형 모드)
5. `npm run build`로 프로덕션 빌드 확인

### 새 페이지 추가하기
1. Class Component 구조로 `src/pages/MyPage.vue` 생성
2. `src/routes/index.ts`에 라우트 추가
3. 라우터에 import 및 등록
4. 반응형 브레이크포인트 사용 (`isMobile`, `isTablet`, `isDesktop`, `isWidescreen`)

### 패널 컴포넌트 추가하기
1. `src/components/panels/MyPanel.vue` 생성
2. `Mixins(BaseMixin)` 확장
3. title/icon과 함께 `<panel>` 래퍼 컴포넌트 사용
4. 부모 페이지에서 import 후 components에 추가

## 핵심 규칙 & 안티패턴

### 반드시 해야 할 것
✅ 데코레이터와 함께 Vue Class Component 사용
✅ 모든 컴포넌트에서 `Mixins(BaseMixin)` 확장
✅ `@mdi/js`에서 아이콘 import (폰트 기반 아님)
✅ 상태 관리에 Vuex 사용
✅ 반응형 브레이크포인트 패턴 따르기
✅ 스타일 scoped로 유지
✅ TypeScript 타입 사용

### 절대 하지 말아야 할 것
❌ Options API와 Class Component API 혼용
❌ BaseMixin 생략 - store/반응형 접근 불가
❌ 아이콘 폰트 사용 - @mdi/js에서 import
❌ 컴포넌트에 복잡한 상태 저장 - Vuex 사용
❌ 반응형 브레이크포인트 무시
❌ 네임스페이스 없이 전역 스타일 사용
❌ TypeScript에서 `any` 타입 사용

### Vuex 접근 패턴
```typescript
// BaseMixin을 통해 store 접근
this.$store.state.printer.status
this.$store.dispatch('printer/setStatus', data)
this.$store.getters['gui/getTheme']
```

### 반응형 패턴
```vue
<v-row v-if="isMobile">...</v-row>
<v-row v-else-if="isTablet">...</v-row>
<v-row v-else-if="isDesktop">...</v-row>
<v-row v-else-if="isWidescreen">...</v-row>
```

## 빠른 참조

### WebSocket 통신
- 플러그인: `src/plugins/webSocketClient.ts`
- Store: `store/socket/`
- Moonraker API: WebSocket을 통한 JSON-RPC 2.0

### 상태 관리
- 모듈: `socket`, `server`, `printer`, `files`, `gui`, `farm`, `editor`, `gcodeviewer`
- 패턴: `state` → `mutations` → `actions` → `getters`
- 접근: BaseMixin을 통해 `this.$store`로

### i18n (국제화)
- 파일: `src/locales/*.json`
- 사용법: `$t('Panels.MyPanel.Title')`
- 기본값: 영어 (en)

## 참조 문서

자세한 정보는 다음 문서를 참조하세요:
- **[docs/PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md)** - 아키텍처 및 전체 기술 스택
- **docs/API_INTEGRATION.md** (추후) - 백엔드 API 서버 연결 및 통합 가이드 (Moonraker 포워딩)
- **docs/WEBSOCKET_ANALYSIS.md** (추후) - WebSocket 통신 패턴 및 상태 관리 분석
- **docs/CODE_CONVENTIONS.md** - 상세 코딩 표준
- **docs/COMPONENT_PATTERNS.md** - 컴포넌트 예시 및 베스트 프랙티스 (리뷰시에 사용)
- **docs/COMPONENT_LIST.md** - 재사용 컴포넌트 목록
- **docs/STATE_MANAGEMENT.md** - 상태 관리 패턴

---

**최종 업데이트**: 2025-12-08
**프로젝트 버전**: 0.0.13

