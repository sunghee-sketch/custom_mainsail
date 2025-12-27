# Virtual Klipper - 컴포넌트 API 레퍼런스

프로젝트 커스텀 컴포넌트들의 API 문서입니다. Props, Events, Methods, Slots 정보를 포함합니다.

**목차**
- [1. UI 공통 컴포넌트](#1-ui-공통-컴포넌트)
- [2. 입력 컴포넌트](#2-입력-컴포넌트)
- [3. 다이얼로그 컴포넌트](#3-다이얼로그-컴포넌트)
- [4. 차트 컴포넌트](#4-차트-컴포넌트)
- [5. 웹캠 컴포넌트](#5-웹캠-컴포넌트)

---

## 1. UI 공통 컴포넌트

### Panel

**위치**: `src/components/ui/Panel.vue`

### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| icon | string \| null | No | null | 패널 헤더 좌측에 표시할 Material Design 아이콘 경로 |
| title | string \| TranslateResult | Yes | '' | 패널 헤더 타이틀 텍스트 (i18n 지원) |
| collapsible | boolean | No | false | 패널 접기/펼치기 가능 여부 |
| cardClass | string | Yes | - | 패널을 식별하는 고유 클래스명 (expand 상태 저장에 사용) |
| toolbarColor | string | No | '' | 툴바 배경색 (현재 미사용) |
| toolbarClass | string | No | '' | 툴바 추가 CSS 클래스 |
| loading | boolean | No | false | 로딩 상태 표시 여부 (현재 미사용) |
| marginBottom | boolean | No | true | 패널 하단 여백 표시 여부 |
| hideButtonsOnCollapse | boolean | No | false | 접혔을 때 버튼 숨기기 여부 |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
공개 메서드가 없습니다. (내부 getter/setter만 존재)

#### Slots
| Name | Scoped | Description |
|------|--------|-------------|
| icon | No | 기본 아이콘 대신 커스텀 아이콘 슬롯 |
| buttons-left | No | 헤더 우측 영역의 왼쪽 버튼 영역 |
| buttons-title | No | 헤더 우측 영역의 타이틀 버튼 영역 |
| buttons | No | 헤더 우측의 주요 버튼 영역 |
| default | No | 패널 본문 콘텐츠 |

---

### SubPanel

**위치**: `src/components/ui/SubPanel.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| iconExpanded | string \| null | No | mdiChevronDown | 펼쳐진 상태의 아이콘 경로 |
| iconCollapsed | string \| null | No | mdiChevronDown | 접힌 상태의 아이콘 경로 |
| title | string | Yes | '' | 서브패널 타이틀 텍스트 |
| subPanelClass | string | Yes | - | 서브패널을 식별하는 고유 클래스명 (expand 상태 저장에 사용) |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
공개 메서드가 없습니다.

#### Slots
| Name | Scoped | Description |
|------|--------|-------------|
| default | No | 서브패널 본문 콘텐츠 |

---

### SidebarItem

**위치**: `src/components/ui/SidebarItem.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| item | NaviPoint | Yes | - | 네비게이션 아이템 객체 (icon, title, to, href, target 포함) |

**NaviPoint 타입**: `{ icon: string, title: string, to?: string, href?: string, target?: string }`

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
공개 메서드가 없습니다.

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### ConnectionStatus

**위치**: `src/components/ui/ConnectionStatus.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| moonraker | boolean \| undefined | No | false | Moonraker 연결 상태 |
| klipper | boolean \| undefined | No | false | Klipper 연결 상태 |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
공개 메서드가 없습니다.

#### Slots
이 컴포넌트는 슬롯이 없습니다.

**참고**: SVG 기반 연결 상태 시각화 컴포넌트. Mainsail ↔ Moonraker ↔ Klipper 연결 상태를 아이콘과 색상으로 표시.

---

### PathNavigation

**위치**: `src/components/ui/PathNavigation.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| path | string | No | false | 현재 경로 (breadcrumb 표시용) |
| baseDirectoryLabel | string | No | false | 첫 번째 디렉토리 표시 레이블 (절대 경로의 `/` 대체용) |
| onSegmentClick | Function | No | false | 경로 세그먼트 클릭 시 호출되는 콜백 함수 `(segment: { location: string }) => void` |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다. (Props로 콜백 함수를 받음)

#### Methods
공개 메서드가 없습니다.

#### Slots
이 컴포넌트는 슬롯이 없습니다.

**참고**: 파일 경로를 Breadcrumb 형태로 시각화.

---

### PrinterSelector

**위치**: `src/components/ui/PrinterSelector.vue`

#### Props
이 컴포넌트는 Props가 없습니다.

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| switchToPrinters | - | void | '/allPrinters' 경로로 라우팅 |
| getPrinterName | namespace: string | string | 프린터 namespace로 프린터 이름 조회 |
| getPrinterDescription | printer: FarmPrinterState | string | 프린터 상태 설명 조회 |
| changePrinter | printer: FarmPrinterState | void | 선택된 프린터로 전환 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### MainsailLogo

**위치**: `src/components/ui/MainsailLogo.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| color | string | No | '' | 로고 색상 (비어있으면 defaultLogoColor 사용) |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
공개 메서드가 없습니다.

#### Slots
이 컴포넌트는 슬롯이 없습니다.

**참고**: SVG 기반 Mainsail 로고 컴포넌트.

---

### SpoolIcon

**위치**: `src/components/ui/SpoolIcon.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| color | string | No | '#ff0' | 필라멘트 스풀 외부 색상 (노란색 기본값) |

#### Events
| Name | Payload | Description |
|------|---------|-------------|
| click-spool | - | 스풀 아이콘 클릭 시 발생 |

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| clickSpool | - | void | 클릭 이벤트 발생 (내부 메서드) |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

**참고**: SVG 기반 필라멘트 스풀 아이콘.

---

### AutomationHeader

**위치**: `src/components/ui/AutomationHeader.vue`

#### Props
이 컴포넌트는 Props가 없습니다.

#### Events
이 컴포넌트는 명시적 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| handleUploadPrint | - | void | "Upload & Print" 버튼 클릭 핸들러 |
| handleEmergencyStop | - | void | "Emergency Stop" 버튼 클릭 핸들러 |
| handleSettings | - | void | 설정 아이콘 버튼 클릭 핸들러 |
| handleNotifications | - | void | 알림 아이콘 버튼 클릭 핸들러 |
| handleMenu | - | void | 메뉴 아이콘 버튼 클릭 핸들러 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

**참고**: Automation 시스템용 헤더 컴포넌트.

---

### Responsive

**위치**: `src/components/ui/Responsive.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| noHide | boolean | No | false | true일 경우 초기 렌더링 시 숨김 처리 생략 |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
공개 메서드가 없습니다.

#### Slots
| Name | Scoped | Description |
|------|--------|-------------|
| default | Yes (el: Element) | 반응형 요소를 위한 슬롯. `el` 파라미터로 DOM 요소 접근 가능 |

**참고**: ResponsiveMixin을 사용한 반응형 래퍼 컴포넌트.

---

## 2. 입력 컴포넌트

### NumberInput

**위치**: `src/components/inputs/NumberInput.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| label | TranslateResult \| string | Yes | - | 입력 필드의 레이블 및 식별자 |
| param | string | Yes | - | 입력 필드의 파라미터 이름 |
| target | number | Yes | - | 현재 타겟 값 (표시될 값) |
| defaultValue | number | No | - | 기본값 (리셋 버튼용) |
| min | number | Yes | - | 최소값 |
| max | number \| null | No | null | 최대값 (null이면 제한 없음) |
| dec | number | Yes | - | 소수점 자릿수 |
| step | number | No | 1 | 증감 단계 값 |
| unit | string | No | - | 단위 (suffix로 표시) |
| hasSpinner | boolean | No | false | 스피너 버튼 표시 여부 |
| spinnerFactor | number | No | 1 | 스피너 증감 배수 |
| disabled | boolean | No | false | 비활성화 여부 |
| outputErrorMsg | boolean | No | false | 에러 메시지 출력 여부 |

#### Events
| Name | Payload | Description |
|------|---------|-------------|
| submit | { name: string, value: number } | 폼 제출 시 발생 (name: param, value: 입력값) |

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| incrementValue | - | void | 값을 step * spinnerFactor만큼 증가 |
| decrementValue | - | void | 값을 step * spinnerFactor만큼 감소 |
| resetToDefault | - | void | defaultValue로 리셋 후 submit |
| submit | - | void | 현재 값을 submit 이벤트로 발생 |
| checkInvalidChars | event: any | void | 유효하지 않은 문자 입력 방지 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### TemperatureInput

**위치**: `src/components/inputs/TemperatureInput.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| name | string | Yes | - | 히터 이름 (extruder, heater_bed 등) |
| target | number | Yes | 0 | 현재 목표 온도 |
| min_temp | number | Yes | - | 최소 허용 온도 |
| max_temp | number | Yes | - | 최대 허용 온도 |
| command | string | Yes | - | G-code 명령어 (SET_HEATER_TEMPERATURE 등) |
| attributeName | string | Yes | - | G-code 속성 이름 (HEATER, EXTRUDER 등) |
| presets | number[] | No | [] | 프리셋 온도 목록 |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다. (내부적으로 WebSocket emit 사용)

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| setTemps | - | void | 온도 설정 G-code 전송 (유효성 검사 포함) |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### TextfieldWithCopy

**위치**: `src/components/inputs/TextfieldWithCopy.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| label | string | Yes | - | 입력 필드 레이블 |
| value | string | Yes | - | 표시할 값 (읽기 전용) |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| copy | - | void | 클립보드에 value 복사 후 툴팁 표시 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### ColorPicker

**위치**: `src/components/inputs/ColorPicker.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| color | IroColor \| string | No | '#ffffff' | 현재 색상 값 |
| options | ColorPickerProps | No | {} | iro.js 컬러피커 옵션 |

#### Events
| Name | Payload | Description |
|------|---------|-------------|
| change | IroColor | 색상 변경 시 발생 |
| update:color | IroColor | 색상 변경 시 발생 (v-model 지원) |

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| emitColorChange | color: IroColor | void | 색상 변경 이벤트 발생 |
| onColorChange | color: IroColor | void | iro.js 색상 변경 핸들러 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### CheckboxList

**위치**: `src/components/inputs/CheckboxList.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| options | { label: string \| TranslateResult; value: string }[] | Yes | - | 체크박스 옵션 목록 |
| selectAll | boolean | No | false | "전체 선택" 체크박스 표시 여부 |

#### Events
| Name | Payload | Description |
|------|---------|-------------|
| update:selectedCheckboxes | (string \| TranslateResult)[] | 선택된 체크박스 값 목록 변경 시 발생 |

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| getSelectAll | - | boolean | 전체 선택 상태 계산 (computed getter) |
| setSelectAll | state: boolean | void | 전체 선택/해제 (computed setter) |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### ToolSlider

**위치**: `src/components/inputs/ToolSlider.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| target | number | Yes | - | 현재 타겟 값 |
| command | string | Yes | - | G-code 명령어 |
| attributeName | string | No | '' | G-code 속성 이름 |
| label | string \| TranslateResult | No | '' | 슬라이더 레이블 |
| icon | string | No | '' | 아이콘 (mdi path) |
| unit | string | No | '%' | 단위 |
| attributeScale | number | No | 1 | 속성값 스케일 배수 |
| min | number | No | 0 | 최소값 |
| max | number | No | 100 | 최대값 |
| hasInputField | boolean | No | false | 입력 필드 표시 여부 |
| dynamicRange | boolean | No | false | 동적 범위 확장 여부 |
| defaultValue | number | No | 100 | 기본값 |
| step | number | No | 100 | 증감 단계 |
| multi | number | No | 1 | 값 표시 배수 |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다. (내부적으로 G-code 전송)

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| changeSlider | - | void | 슬라이더 값 변경 시 G-code 전송 (250ms debounce) |
| resetSlider | - | void | defaultValue로 리셋 |
| sendCmd | - | void | G-code 명령어 전송 |
| decrement | - | void | step만큼 값 감소 |
| increment | - | void | step만큼 값 증가 |
| submitInput | - | void | 입력 필드 값 제출 |
| startLockTimer | - | void | 슬라이더 잠금 타이머 시작 |
| resetLockTimer | - | void | 슬라이더 잠금 타이머 리셋 |
| checkInvalidChars | event: any | void | 유효하지 않은 문자 입력 방지 |
| errors | - | string[] | 입력 유효성 에러 목록 반환 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### MiscellaneousSlider

**위치**: `src/components/inputs/MiscellaneousSlider.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| target | number | Yes | - | 현재 타겟 값 |
| max | number | No | 1 | 최대값 |
| name | string | No | '' | 장치 이름 |
| type | string | No | '' | 장치 타입 (fan, fan_generic, led, output_pin) |
| controllable | boolean | No | false | 제어 가능 여부 |
| pwm | boolean | No | false | PWM 제어 여부 |
| rpm | number \| boolean | No | false | RPM 값 (팬인 경우) |
| multi | number | No | 1 | 값 배수 |
| off_below | number | No | 0 | 최소 작동 값 (이하면 0으로 스냅) |
| colorOrder | string | No | '' | LED 색상 순서 (R, G, B, W) |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다. (내부적으로 G-code 전송)

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| changeSliderValue | - | void | 슬라이더 값 변경 시 G-code 전송 (500ms debounce) |
| sendCmd | newVal: number | void | G-code 명령어 전송 |
| ledOff | - | void | LED 끄기 |
| ledOn | - | void | LED 켜기 |
| switchOutputPin | - | void | 출력 핀 토글 |
| decrement | - | void | 값 0.01만큼 감소 |
| increment | - | void | 값 0.01만큼 증가 |
| submitInput | - | void | 입력 필드 값 제출 |
| startLockTimer | - | void | 슬라이더 잠금 타이머 시작 |
| resetLockTimer | - | void | 슬라이더 잠금 타이머 리셋 |
| checkInvalidChars | event: any | void | 유효하지 않은 문자 입력 방지 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### MiscellaneousLight

**위치**: `src/components/inputs/MiscellaneousLight.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| object | PrinterStateLight | Yes | - | 프린터 LED 상태 객체 |
| root | boolean | No | false | 루트 컴포넌트 여부 |
| group | GuiMiscellaneousStateEntryLightgroup \| undefined | No | - | LED 그룹 정보 |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다. (내부적으로 G-code 전송)

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| colorChanged | color: ColorData | void | 색상 변경 및 G-code 전송 |
| onColorRGBChanged | payload: IroColor | void | RGB 색상 변경 핸들러 (500ms debounce) |
| onColorWhiteChanged | payload: IroColor | void | 화이트 채널 변경 핸들러 (500ms debounce) |
| onColorInput | payload: { name: string; value: number } | void | 숫자 입력 핸들러 (500ms debounce) |
| off | - | void | LED 끄기 |
| on | - | void | LED 켜기 (모든 채널 최대) |
| presetStyle | preset: GuiMiscellaneousStateEntryPreset | object | 프리셋 스타일 계산 |
| usePreset | preset: GuiMiscellaneousStateEntryPreset | void | 프리셋 적용 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### MacroButton

**위치**: `src/components/inputs/MacroButton.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| macro | GuiMacrosStateMacrogroupMacro \| PrinterStateMacro | Yes | - | 매크로 객체 |
| color | string | No | 'primary' | 버튼 색상 |
| alias | string \| TranslateResult | No | null | 매크로 별칭 (표시 이름) |
| disabled | boolean | No | false | 버튼 비활성화 여부 |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다. (내부적으로 G-code 전송)

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| refreshParams | - | void | 매크로 파라미터 목록 새로고침 |
| doSendMacro | gcode: string | void | 매크로 G-code 전송 |
| sendWithParams | - | void | 파라미터와 함께 매크로 전송 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### MoveToInput

**위치**: `src/components/inputs/MoveToInput.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| position (v-model) | string | Yes | - | 현재 입력 위치 값 |
| currentPos | string | Yes | - | 실제 현재 위치 |
| label | string | No | - | 레이블 (대괄호로 표시) |
| suffix | string | No | - | 접미사 |
| step | number | No | 1 | 증감 단계 |
| disabled | boolean | No | - | 비활성화 여부 |
| readonly | boolean | No | - | 읽기 전용 여부 |

#### Events
| Name | Payload | Description |
|------|---------|-------------|
| submit | - | 폼 제출 시 발생 |

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| onBlur | - | void | blur 시 currentPos로 리셋 |
| submit | - | void | submit 이벤트 발생 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### FilamentSensor

**위치**: `src/components/inputs/FilamentSensor.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| type | string | Yes | - | 센서 타입 (filament_switch_sensor, hall_filament_width_sensor 등) |
| name | string | Yes | - | 센서 이름 |
| enabled | boolean | Yes | - | 센서 활성화 여부 |
| filament_detected | boolean | Yes | - | 필라멘트 감지 여부 |
| filament_diameter | number | No | - | 필라멘트 직경 (hall sensor용) |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다. (내부적으로 G-code 전송)

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| changeSensor | - | void | 센서 활성화/비활성화 토글 G-code 전송 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### Codemirror

**위치**: `src/components/inputs/Codemirror.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| code | string | No | '' | 초기 코드 내용 |
| value | string | No | '' | v-model 값 |
| name | string | No | 'codemirror' | 에디터 이름 |
| fileExtension | string | No | '' | 파일 확장자 (cfg, conf, gcode, json, css 등) |

#### Events
| Name | Payload | Description |
|------|---------|-------------|
| ready | EditorView | 에디터 초기화 완료 시 발생 |
| input | string | 코드 내용 변경 시 발생 (v-model용) |
| lineChange | number | 선택 라인 변경 시 발생 |

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| initialize | - | void | CodeMirror 에디터 초기화 |
| destroy | - | void | 에디터 인스턴스 파괴 |
| setCmValue | content: string | void | 에디터 내용 설정 |
| visibilityChanged | isVisible: boolean | void | 가시성 변경 시 포커스 처리 |
| gotoLine | line: number | void | 특정 라인으로 이동 및 선택 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### ConsoleTextarea

**위치**: `src/components/inputs/ConsoleTextarea.vue`

#### Props
이 컴포넌트는 Props가 없습니다.

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다. (내부적으로 G-code 전송)

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| getCurrentLine | - | number | 현재 커서가 위치한 라인 번호 반환 |
| setGcode | gcode: string | void | gcode 값 설정 후 포커스 |
| onKeyUp | event: KeyboardEvent | void | 위 화살표 키로 명령어 히스토리 탐색 |
| onKeyDown | event: KeyboardEvent | void | 아래 화살표 키로 명령어 히스토리 탐색 |
| doSend | cmd: KeyboardEvent | void | G-code 전송 (Shift+Enter는 줄바꿈) |
| onAutocomplete | e: Event | void | Tab 키로 자동완성 수행 |
| updateGcode | text: string, start: number, end: number | void | gcode 문자열 업데이트 |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

## 3. 다이얼로그 컴포넌트

### ConfirmationDialog

**위치**: `src/components/dialogs/ConfirmationDialog.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| show | Boolean | Yes | - | 다이얼로그 표시 여부 제어 |
| title | String | Yes | - | 다이얼로그 제목 텍스트 |
| text | String | Yes | - | 다이얼로그 본문 메시지 |
| actionButtonText | String | Yes | - | 확인(액션) 버튼 텍스트 |
| cancelButtonText | String | Yes | - | 취소 버튼 텍스트 |

#### Events
| Name | Payload | Description |
|------|---------|-------------|
| action | - | 확인 버튼 클릭 시 발생 |
| close | - | 취소 버튼 또는 닫기 버튼 클릭 시 발생 |

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| action | - | void | 확인 버튼 클릭 핸들러, action 이벤트 emit |
| close | - | void | 취소/닫기 버튼 클릭 핸들러, close 이벤트 emit |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### AboutDialog

**위치**: `src/components/dialogs/AboutDialog.vue`

#### Props
이 컴포넌트는 Props가 없습니다.

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
공개 메서드가 없습니다. (computed getters만 존재)

#### Slots
이 컴포넌트는 슬롯이 없습니다.

**참고**: Vuetify tooltip으로 구현된 정보 표시 컴포넌트. Mainsail, Moonraker, Klipper 버전 정보를 store에서 읽어 표시.

---

### EmergencyStopDialog

**위치**: `src/components/dialogs/EmergencyStopDialog.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| showDialog | Boolean | No | false | 다이얼로그 표시 여부 제어 |

#### Events
| Name | Payload | Description |
|------|---------|-------------|
| close | - | 닫기 버튼 또는 취소 버튼 클릭 시 발생 |

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| emergencyStop | - | void | 비상 정지 명령 실행 (printer.emergency_stop WebSocket 전송) |
| closePrompt | - | void | 다이얼로그 닫기, close 이벤트 emit |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### CoolDownDialog

**위치**: `src/components/dialogs/CoolDownDialog.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| showDialog | Boolean | No | false | 다이얼로그 표시 여부 제어 |

#### Events
| Name | Payload | Description |
|------|---------|-------------|
| close | - | 닫기 버튼 또는 취소 버튼 클릭 시 발생 |

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| cooldown | - | void | 쿨다운 G-Code 실행 (store에서 가져온 프리셋 G-Code 전송) |
| closePrompt | - | void | 다이얼로그 닫기, close 이벤트 emit |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

---

### TheMacroPrompt

**위치**: `src/components/dialogs/TheMacroPrompt.vue`

#### Props
이 컴포넌트는 Props가 없습니다. (store events를 직접 감시)

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| closePrompt | - | void | 매크로 프롬프트 종료 (RESPOND 명령으로 prompt_end 전송) |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

**참고**: Klipper 매크로 프롬프트 시스템의 메인 컨테이너 다이얼로그. store의 server.events를 실시간 파싱하여 prompt 액션 처리.

---

### MacroPromptText

**위치**: `src/components/dialogs/MacroPromptText.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| event | ServerStateEventPromptContent | Yes | - | 표시할 텍스트 이벤트 객체 (message 속성 포함) |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
공개 메서드가 없습니다. (computed getter만 존재)

#### Slots
이 컴포넌트는 슬롯이 없습니다.

**참고**: 매크로 프롬프트에서 텍스트 메시지 표시용 컴포넌트.

---

### MacroPromptButton

**위치**: `src/components/dialogs/MacroPromptButton.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| event | ServerStateEventPrompt | Yes | - | 버튼 이벤트 객체 (message는 파이프로 구분된 text\|command\|color 형식) |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다. (내부적으로 G-Code 명령 전송)

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| sendCommand | - | void | 버튼 클릭 시 G-Code 명령 전송 (WebSocket + store) |

#### Slots
이 컴포넌트는 슬롯이 없습니다.

**참고**: event.message 파싱 로직 - `text|command|color` 형식 (파이프 구분).

---

### MacroPromptButtonGroup

**위치**: `src/components/dialogs/MacroPromptButtonGroup.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| children | ServerStateEventPrompt[] | Yes | - | 그룹 내 버튼 이벤트 배열 |
| groupIndex | Number | Yes | - | 그룹 인덱스 (key 생성용) |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
공개 메서드가 없습니다.

#### Slots
이 컴포넌트는 슬롯이 없습니다.

**참고**: MacroPromptButton 컴포넌트들을 가로 중앙 정렬로 그룹화하는 레이아웃 컴포넌트.

---

## 4. 차트 컴포넌트

### TempChart

**위치**: `src/components/charts/TempChart.vue`

#### Props
이 컴포넌트는 Props를 사용하지 않습니다.

#### Events
이 컴포넌트는 커스텀 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| visibilityChanged | isVisible: boolean | void | 컴포넌트의 가시성 변경 시 호출되며, isVisible 플래그를 업데이트합니다. |
| tooltipFormatter | datasets: any | string | ECharts 툴팁용 HTML 포맷터. 시간, 온도, 타겟 온도, PWM 값을 포맷팅합니다. |
| beforeDestroy | - | void | 컴포넌트 파괴 전 차트 인스턴스를 정리합니다. |

#### Slots
이 컴포넌트는 슬롯을 제공하지 않습니다.

**참고**: Vuex store에서 온도 히스토리 데이터를 자동으로 가져와 실시간 차트 표시.

---

### HeightmapChart

**위치**: `src/components/charts/HeightmapChart.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| showProbed | Boolean | No | false | 프로브된 메시 데이터 표시 여부 |
| showMesh | Boolean | No | false | 메시 매트릭스 데이터 표시 여부 |
| showFlat | Boolean | No | false | 평평한 참조 평면 표시 여부 |
| wireframe | Boolean | No | false | 와이어프레임 모드 활성화 여부 |
| scaleGradient | Boolean | No | false | 그라디언트 스케일 사용 여부 (false인 경우 -0.1~0.1 고정) |
| scaleZMax | Number | No | 1 | Z축의 최대 스케일 값 |

#### Events
이 컴포넌트는 커스텀 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| tooltipFormatter | data: any | string | ECharts 툴팁용 포맷터. X, Y, Z 좌표를 밀리미터 단위로 표시합니다. |
| beforeDestroy | - | void | 컴포넌트 파괴 전 차트 인스턴스를 정리합니다. |

#### Slots
이 컴포넌트는 슬롯을 제공하지 않습니다.

**참고**: echarts-gl을 사용하여 3D 표면 차트를 렌더링.

---

### HistoryAllPrintStatusChart

**위치**: `src/components/charts/HistoryAllPrintStatusChart.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| valueName | String (HistoryStatsValueNames) | No | 'jobs' | 표시할 값 타입 ('jobs', 'filament', 'time' 등) |

#### Events
이 컴포넌트는 커스텀 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| visibilityChanged | isVisible: boolean | void | 가시성 변경 시 차트를 리사이즈합니다. |
| beforeDestroy | - | void | 컴포넌트 파괴 전 차트 인스턴스를 정리합니다. |

#### Slots
이 컴포넌트는 슬롯을 제공하지 않습니다.

**참고**: 프린트 상태별 통계를 도넛 차트로 표시.

---

### HistoryFilamentUsage

**위치**: `src/components/charts/HistoryFilamentUsage.vue`

#### Props
이 컴포넌트는 Props를 사용하지 않습니다.

#### Events
이 컴포넌트는 커스텀 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| visibilityChanged | isVisible: boolean | void | 가시성 변경 시 차트를 리사이즈합니다. |
| beforeDestroy | - | void | 컴포넌트 파괴 전 차트 인스턴스를 정리합니다. |

#### Slots
이 컴포넌트는 슬롯을 제공하지 않습니다.

**참고**: 최근 14일간의 일별 필라멘트 사용량을 막대 차트로 표시.

---

### HistoryPrinttimeAvg

**위치**: `src/components/charts/HistoryPrinttimeAvg.vue`

#### Props
이 컴포넌트는 Props를 사용하지 않습니다.

#### Events
이 컴포넌트는 커스텀 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| visibilityChanged | isVisible: boolean | void | 가시성 변경 시 차트를 리사이즈합니다. |
| beforeDestroy | - | void | 컴포넌트 파괴 전 차트 인스턴스를 정리합니다. |

#### Slots
이 컴포넌트는 슬롯을 제공하지 않습니다.

**참고**: 프린트 시간 분포를 5개의 카테고리로 분류하여 막대 차트로 표시 (0-2시간, 2-6시간, 6-12시간, 12-24시간, 24시간 초과).

---

## 5. 웹캠 컴포넌트

### WebcamWrapper

**위치**: `src/components/webcams/WebcamWrapper.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| webcam | GuiWebcamStateWebcam | Yes | - | 웹캠 설정 객체 (이름, 서비스, URL 등 포함) |
| showFps | Boolean | No | true | FPS 표시 여부 |
| printerUrl | string \| null | No | null | 프린터 URL (스트림 URL 구성에 사용) |
| page | string \| null | No | null | 현재 페이지 식별자 (컨텍스트 전달용) |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| webcams | - | GuiWebcamStateWebcam[] | Vuex에서 모든 웹캠 목록을 가져오는 getter (grid 서비스에서 사용) |

#### Slots
이 컴포넌트는 슬롯을 제공하지 않습니다.

**참고**: `webcam.service === 'grid'`인 경우 6열 그리드로 모든 웹캠을 표시, 그 외에는 단일 `WebcamWrapperItem` 렌더링.

---

### WebcamWrapperItem

**위치**: `src/components/webcams/WebcamWrapperItem.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| webcam | GuiWebcamStateWebcam | Yes | - | 웹캠 설정 객체 (서비스 타입, URL, 회전, 플립 등 포함) |
| showFps | Boolean | No | true | FPS 표시 여부 |
| printerUrl | string \| null | No | null | 프린터 URL |
| page | string \| null | No | null | 페이지 식별자 |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| service | - | string | 웹캠의 서비스 타입을 반환하는 getter (`webcam.service ?? 'unknown'`) |

#### Slots
이 컴포넌트는 슬롯을 제공하지 않습니다.

**참고**: 웹캠 서비스 타입에 따라 적절한 스트리머 컴포넌트를 동적으로 로드.

**지원 서비스 타입**: mjpegstreamer, mjpegstreamer-adaptive, uv4l-mjpeg, ipstream, hlsstream, jmuxer-stream, webrtc-camerastreamer, webrtc-janus, webrtc-mediamtx, webrtc-go2rtc

---

### WebcamNozzleCrosshair

**위치**: `src/components/webcams/WebcamNozzleCrosshair.vue`

#### Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| webcam | GuiWebcamStateWebcam | Yes | - | 웹캠 설정 객체 (십자선 색상 및 크기 포함) |

#### Events
이 컴포넌트는 이벤트를 발생시키지 않습니다.

#### Methods
| Name | Parameters | Returns | Description |
|------|------------|---------|-------------|
| handleResize | - | void | 컨테이너 크기 변경 시 호출되어 `clientHeight`를 업데이트 |

#### Slots
이 컴포넌트는 슬롯을 제공하지 않습니다.

**참고**: 웹캠 화면 중앙에 노즐 위치를 나타내는 십자선과 원을 오버레이로 표시.

**설정 옵션**:
- `extra_data.nozzleCrosshairColor`: 십자선 색상 (기본값: '#ff0000')
- `extra_data.nozzleCrosshairSize`: 십자선 크기 (기본값: 0.1)

---

## GuiWebcamStateWebcam 타입 참조

웹캠 컴포넌트에서 사용되는 `GuiWebcamStateWebcam` 인터페이스:

```typescript
interface GuiWebcamStateWebcam {
    name: string                    // 웹캠 이름
    location?: string               // 웹캠 위치
    service: string                 // 서비스 타입 (mjpegstreamer, webrtc-* 등)
    enabled: boolean                // 활성화 여부
    icon: string                    // 아이콘
    target_fps: number              // 목표 FPS
    target_fps_idle?: number        // 유휴 시 목표 FPS
    stream_url: string              // 스트림 URL
    snapshot_url: string            // 스냅샷 URL
    flip_horizontal: boolean        // 수평 뒤집기
    flip_vertical: boolean          // 수직 뒤집기
    rotation: number                // 회전 각도
    aspect_ratio?: string           // 종횡비
    extra_data?: {                  // 추가 설정
        enableAudio?: boolean       // 오디오 활성화
        hideFps?: boolean           // FPS 숨김
        nozzleCrosshair?: boolean   // 노즐 십자선 표시
        nozzleCrosshairColor?: string  // 십자선 색상 (기본값: '#ff0000')
        nozzleCrosshairSize?: number   // 십자선 크기 (기본값: 0.1)
    }
    source?: 'config' | 'database'  // 설정 출처
}
```

---

## 공통 패턴 및 컨벤션

### Vue Class Component 스타일

모든 컴포넌트는 다음 패턴을 따릅니다:

```typescript
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'

@Component({
    components: { ... }
})
export default class MyComponent extends Mixins(BaseMixin) {
    // Props: @Prop 데코레이터 사용
    // Events: this.$emit으로 발생
    // Methods: public 클래스 메서드
}
```

### 아이콘 패턴

```typescript
import { mdiHome, mdiCheck } from '@mdi/js'

export default class MyComponent extends Mixins(BaseMixin) {
    mdiHome = mdiHome  // 템플릿에서 사용 가능하도록
}

// 템플릿에서:
// <v-icon>{{ mdiHome }}</v-icon>
```

### Vuex 접근 패턴

```typescript
// BaseMixin을 통해 store 접근
this.$store.state.printer.status
this.$store.dispatch('printer/setStatus', data)
this.$store.getters['gui/getTheme']
```

---

**최종 업데이트**: 2025-12-21
**프로젝트 버전**: 0.0.13
**총 컴포넌트 수**: 39개
