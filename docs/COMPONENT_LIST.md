# Virtual Klipper - 재사용 컴포넌트 목록

프로젝트에서 사용 가능한 커스텀 재사용 컴포넌트 목록입니다.

**총 컴포넌트 수**: 39개

상세 API 문서는 [docs/components/](components/) 참고

---

## 1. UI 공통 컴포넌트 (10개)

| 컴포넌트 | 위치 | 목적 |
|----------|------|------|
| **Panel** | `src/components/ui/Panel.vue` | 패널 래퍼 (제목, 아이콘, 접기/펼치기) |
| **SubPanel** | `src/components/ui/SubPanel.vue` | 서브패널 래퍼 (중첩된 패널) |
| **SidebarItem** | `src/components/ui/SidebarItem.vue` | 사이드바 네비게이션 아이템 |
| **ConnectionStatus** | `src/components/ui/ConnectionStatus.vue` | Moonraker/Klipper 연결 상태 표시 |
| **PathNavigation** | `src/components/ui/PathNavigation.vue` | 파일 경로 breadcrumb |
| **PrinterSelector** | `src/components/ui/PrinterSelector.vue` | 프린터 선택 드롭다운 |
| **MainsailLogo** | `src/components/ui/MainsailLogo.vue` | Mainsail 로고 SVG |
| **SpoolIcon** | `src/components/ui/SpoolIcon.vue` | 필라멘트 스풀 아이콘 |
| **AutomationHeader** | `src/components/ui/AutomationHeader.vue` | Automation 시스템 헤더 |
| **Responsive** | `src/components/ui/Responsive.vue` | 반응형 요소 래퍼 |

---

## 2. 입력 컴포넌트 (13개)

| 컴포넌트 | 위치 | 목적 |
|----------|------|------|
| **NumberInput** | `src/components/inputs/NumberInput.vue` | 숫자 입력 필드 (스피너, 유효성 검사) |
| **TemperatureInput** | `src/components/inputs/TemperatureInput.vue` | 온도 입력 필드 (히터 제어) |
| **TextfieldWithCopy** | `src/components/inputs/TextfieldWithCopy.vue` | 클립보드 복사 버튼이 있는 텍스트 필드 |
| **ColorPicker** | `src/components/inputs/ColorPicker.vue` | 색상 선택기 (iro.js 기반) |
| **CheckboxList** | `src/components/inputs/CheckboxList.vue` | 체크박스 목록 (전체 선택 지원) |
| **ToolSlider** | `src/components/inputs/ToolSlider.vue` | 도구 제어 슬라이더 (속도, 압출 등) |
| **MiscellaneousSlider** | `src/components/inputs/MiscellaneousSlider.vue` | 기타 장치 슬라이더 (팬, LED 등) |
| **MiscellaneousLight** | `src/components/inputs/MiscellaneousLight.vue` | LED 조명 제어 (RGB/RGBW) |
| **MacroButton** | `src/components/inputs/MacroButton.vue` | 매크로 실행 버튼 |
| **MoveToInput** | `src/components/inputs/MoveToInput.vue` | 축 이동 위치 입력 |
| **FilamentSensor** | `src/components/inputs/FilamentSensor.vue` | 필라멘트 센서 토글 |
| **Codemirror** | `src/components/inputs/Codemirror.vue` | 코드 에디터 (G-Code, JSON 등) |
| **ConsoleTextarea** | `src/components/inputs/ConsoleTextarea.vue` | G-Code 콘솔 입력 영역 |

---

## 3. 다이얼로그 컴포넌트 (8개)

| 컴포넌트 | 위치 | 목적 |
|----------|------|------|
| **ConfirmationDialog** | `src/components/dialogs/ConfirmationDialog.vue` | 확인/취소 다이얼로그 |
| **AboutDialog** | `src/components/dialogs/AboutDialog.vue` | 버전 정보 다이얼로그 |
| **EmergencyStopDialog** | `src/components/dialogs/EmergencyStopDialog.vue` | 비상 정지 확인 다이얼로그 |
| **CoolDownDialog** | `src/components/dialogs/CoolDownDialog.vue` | 쿨다운 확인 다이얼로그 |
| **TheMacroPrompt** | `src/components/dialogs/TheMacroPrompt.vue` | 매크로 프롬프트 컨테이너 |
| **MacroPromptText** | `src/components/dialogs/MacroPromptText.vue` | 매크로 프롬프트 텍스트 표시 |
| **MacroPromptButton** | `src/components/dialogs/MacroPromptButton.vue` | 매크로 프롬프트 버튼 |
| **MacroPromptButtonGroup** | `src/components/dialogs/MacroPromptButtonGroup.vue` | 매크로 프롬프트 버튼 그룹 |

---

## 4. 차트 컴포넌트 (5개)

| 컴포넌트 | 위치 | 목적 |
|----------|------|------|
| **TempChart** | `src/components/charts/TempChart.vue` | 실시간 온도 차트 (ECharts) |
| **HeightmapChart** | `src/components/charts/HeightmapChart.vue` | 3D 베드 메시 차트 (ECharts GL) |
| **HistoryAllPrintStatusChart** | `src/components/charts/HistoryAllPrintStatusChart.vue` | 프린트 상태 통계 도넛 차트 |
| **HistoryFilamentUsage** | `src/components/charts/HistoryFilamentUsage.vue` | 일별 필라멘트 사용량 차트 |
| **HistoryPrinttimeAvg** | `src/components/charts/HistoryPrinttimeAvg.vue` | 프린트 시간 분포 차트 |

---

## 5. 웹캠 컴포넌트 (3개)

| 컴포넌트 | 위치 | 목적 |
|----------|------|------|
| **WebcamWrapper** | `src/components/webcams/WebcamWrapper.vue` | 웹캠 컨테이너 (그리드 지원) |
| **WebcamWrapperItem** | `src/components/webcams/WebcamWrapperItem.vue` | 개별 웹캠 스트림 아이템 |
| **WebcamNozzleCrosshair** | `src/components/webcams/WebcamNozzleCrosshair.vue` | 노즐 위치 십자선 오버레이 |

---

## 카테고리별 요약

- **UI 공통**: 10개 - 레이아웃, 네비게이션, 상태 표시
- **입력**: 13개 - 폼 입력, 슬라이더, 에디터
- **다이얼로그**: 8개 - 확인, 프롬프트, 정보 표시
- **차트**: 5개 - 데이터 시각화
- **웹캠**: 3개 - 비디오 스트림

---

**참고**:
- 모든 컴포넌트는 Vue Class Component 스타일 사용
- `Mixins(BaseMixin)` 확장 필수
- 아이콘은 `@mdi/js`에서 import
- 상세 Props, Events, Methods는 [docs/components/CUSTOM_COMPONENT_API.md](components/CUSTOM_COMPONENT_API.md) 참고

**최종 업데이트**: 2025-12-21
**프로젝트 버전**: 0.0.13
