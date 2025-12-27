# 상태 관리 가이드 (State Management Guide)

Virtual Klipper 프로젝트의 **로컬 상태 vs Vuex Store 사용 기준**

## 핵심 원칙

**"데이터의 범위와 생명주기가 사용처를 결정한다"**

- **전역 범위 + 영속성** → Vuex Store
- **컴포넌트 범위 + 임시성** → 로컬 상태
- **부모-자식 통신** → Props
- **계산/가공된 값** → Computed Properties

---

## Store 사용 기준 (MUST)

### 1. 애플리케이션 전역 상태
- 프린터 상태 (온도, 위치, 속도 등)
- 서버 상태 (Moonraker 연결, 컴포넌트 목록)
- 파일 시스템 (G-Code 파일 목록, 현재 경로)

### 2. 여러 컴포넌트가 공유하는 데이터
- 숨겨진 매크로 목록
- 웹캠 설정
- 콘솔 이벤트 로그

### 3. 세션 간 유지되는 설정값
- UI 설정 (테마, 레이아웃, 패널 가시성)
- 사용자 기본 설정 (콘솔 필터, 제어 스타일)
- localStorage에 저장되는 모든 설정

### 4. WebSocket으로 받은 실시간 데이터
- 프린터 온도, 위치, 팬 속도
- 프린트 진행률, 남은 시간
- 콘솔 로그 메시지

### Store 접근 패턴
```typescript
// State
this.$store.state.printer.temperature

// Getters (네임스페이스)
this.$store.getters['printer/getMacros']

// Mutations (동기)
this.$store.commit('printer/setData', data)

// Actions (비동기)
this.$store.dispatch('printer/init')
```

---

## 로컬 상태 사용 기준 (MUST)

### 1. 폼 입력의 임시 데이터
- 다이얼로그 입력 필드
- 검증 에러 상태
- 드래그 앤 드롭 상태

### 2. 컴포넌트 내부 UI 상태
- 메뉴 열림/닫힘
- 로딩 스피너 표시
- 탭 선택 상태
- 호버 상태

### 3. 제출 전까지만 필요한 데이터
- 입력 중인 디렉토리 이름
- 선택된 파일 목록 (제출 전)
- 임시 설정 값

### 4. UI 제어 메서드
- 스크롤 제어
- 포커스 이동
- 애니메이션 트리거
- DOM 직접 조작

### 로컬 상태 선언
```typescript
export default class MyComponent extends Mixins(BaseMixin) {
    // 로컬 상태
    name = ''
    isLoading = false
    selectedTab = 0
}
```

---

## Computed Properties 사용 기준

### 사용 경우
- Store 데이터의 필터링/가공
- 여러 상태를 조합한 결과
- 포맷팅된 값 (날짜, 숫자, 문자열)
- 조건부 렌더링을 위한 boolean 값

### 특징
- **반응형 유지**: Store 변경 시 자동 업데이트
- **캐싱**: 의존성이 변경될 때만 재계산
- **읽기 전용**: getter/setter 패턴으로 수정 가능

```typescript
get isPrinting() {
    return ['printing'].includes(this.printer_state)
}

get sortedFiles() {
    return [...this.files].sort((a, b) => a.name.localeCompare(b.name))
}
```

---

## Props 사용 기준

### 사용 경우
- 부모 컴포넌트가 자식에게 데이터 전달
- 재사용 가능한 컴포넌트 설계
- 단방향 데이터 흐름 유지

### 선언 방식
```typescript
@Prop({ required: true, default: false })
declare readonly bool: boolean

@Prop({ required: true })
declare file: FileStateGcodefile
```

---

## 결정 플로우차트

```
데이터 필요
    ↓
여러 컴포넌트 사용? → Yes → Store
    ↓ No
세션 간 유지? → Yes → Store
    ↓ No
WebSocket 데이터? → Yes → Store
    ↓ No
폼 입력/UI 임시? → Yes → 로컬 상태
    ↓ No
계산된 값? → Yes → Computed
    ↓ No
부모가 제어? → Yes → Props
    ↓ No
로컬 상태
```

---

## 빠른 체크리스트

### ✅ Store 사용
- [ ] 여러 컴포넌트에서 접근
- [ ] WebSocket으로 받은 데이터
- [ ] 새로고침 후에도 유지 필요
- [ ] 프린터/서버 상태
- [ ] 사용자 설정

### ✅ 로컬 상태 사용
- [ ] 폼 입력 중인 값
- [ ] 다이얼로그 열림/닫힘
- [ ] 드롭다운 선택 상태
- [ ] 애니메이션 진행 상태
- [ ] 로딩 스피너 표시

### ✅ Computed 사용
- [ ] Store 데이터의 필터링/가공
- [ ] 여러 상태를 조합한 결과
- [ ] 포맷팅된 값

### ✅ Props 사용
- [ ] 부모 컴포넌트가 전달
- [ ] 컴포넌트 간 단방향 통신
- [ ] 재사용 가능한 컴포넌트

---

## 흔한 실수

### ❌ 실수 1: 로컬 상태에 전역 데이터 복사
```typescript
// 잘못됨: 반응형 끊김
data() {
    return { printerTemp: this.$store.state.printer.temperature }
}

// 올바름: 반응형 유지
get printerTemp() {
    return this.$store.state.printer.temperature
}
```

### ❌ 실수 2: Store에 UI 임시 상태 저장
```typescript
// 잘못됨: 불필요한 전역 상태
this.$store.commit('gui/setMenuOpen', true)

// 올바름: 로컬 상태로 충분
data() {
    return { isMenuOpen: false }
}
```

### ❌ 실수 3: Props 대신 Store 사용
```typescript
// 잘못됨: 부모-자식 간 Store 공유
this.$store.commit('setDialogData', data)

// 올바름: Props로 전달
<child-dialog :data="dialogData" />
```

---

## 데이터 흐름 패턴

### 패턴 1: 읽기 전용 (Store → Component)
```typescript
get macros() {
    return this.$store.getters['printer/getMacros']
}
```

### 패턴 2: 양방향 바인딩 (Store ↔ Component)
```typescript
get autoscroll() {
    return this.$store.state.gui.console.autoscroll
}

set autoscroll(newVal) {
    this.$store.dispatch('gui/saveSetting', {
        name: 'console.autoscroll',
        value: newVal
    })
}
```

### 패턴 3: 폼 제출 (Component → Server → Store)
```typescript
// 로컬 상태로 입력 관리
name = ''

// 제출 시 서버로 전송
createDirectory() {
    this.$socket.emit('server.files.post_directory', {
        path: this.currentPath + '/' + this.name
    })
    this.name = ''  // 로컬 초기화
}
```

---

## 추가 참고 사항

### Store 모듈 구조
```
src/store/
├── socket/          # WebSocket 연결
├── server/          # Moonraker 서버 상태
├── printer/         # 프린터 상태 및 제어
├── files/           # 파일 시스템
├── gui/             # UI 설정 및 상태
├── farm/            # 프린터 팜 관리
├── editor/          # 코드 에디터
└── gcodeviewer/     # G-Code 뷰어
```

### BaseMixin 제공 속성
```typescript
// 모든 컴포넌트는 BaseMixin 확장 필수
export default class MyComponent extends Mixins(BaseMixin) {
    // 자동 제공되는 computed 속성들:
    // - klipperReadyForGui
    // - printerIsPrinting
    // - socketIsConnected
    // - printer_state
}
```

---

**마지막 업데이트**: 2025-12-08
