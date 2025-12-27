# Vuetify v2.7.2 Component API Reference

This document provides a comprehensive API reference for all Vuetify v2.7.2 components.

Generated on: 2025-12-21T01:45:29.150Z

Total Components: 146
Total Directives: 7

---

## Table of Contents


### Components

1. [VApp](#vapp)
2. [VAppBar](#vappbar)
3. [VAppBarNavIcon](#vappbarnavicon)
4. [VAppBarTitle](#vappbartitle)
5. [VAlert](#valert)
6. [VAutocomplete](#vautocomplete)
7. [VAvatar](#vavatar)
8. [VBadge](#vbadge)
9. [VBanner](#vbanner)
10. [VBottomNavigation](#vbottomnavigation)
11. [VBottomSheet](#vbottomsheet)
12. [VBreadcrumbs](#vbreadcrumbs)
13. [VBreadcrumbsItem](#vbreadcrumbsitem)
14. [VBreadcrumbsDivider](#vbreadcrumbsdivider)
15. [VBtn](#vbtn)
16. [VBtnToggle](#vbtntoggle)
17. [VCalendar](#vcalendar)
18. [VCalendarDaily](#vcalendardaily)
19. [VCalendarWeekly](#vcalendarweekly)
20. [VCalendarMonthly](#vcalendarmonthly)
21. [VCard](#vcard)
22. [VCardActions](#vcardactions)
23. [VCardSubtitle](#vcardsubtitle)
24. [VCardText](#vcardtext)
25. [VCardTitle](#vcardtitle)
26. [VCarousel](#vcarousel)
27. [VCarouselItem](#vcarouselitem)
28. [VCheckbox](#vcheckbox)
29. [VSimpleCheckbox](#vsimplecheckbox)
30. [VChip](#vchip)
31. [VChipGroup](#vchipgroup)
32. [VColorPicker](#vcolorpicker)
33. [VContent](#vcontent)
34. [VCombobox](#vcombobox)
35. [VDataIterator](#vdataiterator)
36. [VDataFooter](#vdatafooter)
37. [VDataTable](#vdatatable)
38. [VEditDialog](#veditdialog)
39. [VDataTableHeader](#vdatatableheader)
40. [VSimpleTable](#vsimpletable)
41. [VDatePicker](#vdatepicker)
42. [VDialog](#vdialog)
43. [VDivider](#vdivider)
44. [VExpansionPanels](#vexpansionpanels)
45. [VExpansionPanel](#vexpansionpanel)
46. [VExpansionPanelHeader](#vexpansionpanelheader)
47. [VExpansionPanelContent](#vexpansionpanelcontent)
48. [VFileInput](#vfileinput)
49. [VFooter](#vfooter)
50. [VForm](#vform)
51. [VContainer](#vcontainer)
52. [VCol](#vcol)
53. [VRow](#vrow)
54. [VSpacer](#vspacer)
55. [VLayout](#vlayout)
56. [VFlex](#vflex)
57. [VHover](#vhover)
58. [VIcon](#vicon)
59. [VImg](#vimg)
60. [VInput](#vinput)
61. [VItem](#vitem)
62. [VItemGroup](#vitemgroup)
63. [VLazy](#vlazy)
64. [VListItemActionText](#vlistitemactiontext)
65. [VListItemContent](#vlistitemcontent)
66. [VListItemTitle](#vlistitemtitle)
67. [VListItemSubtitle](#vlistitemsubtitle)
68. [VList](#vlist)
69. [VListGroup](#vlistgroup)
70. [VListItem](#vlistitem)
71. [VListItemAction](#vlistitemaction)
72. [VListItemAvatar](#vlistitemavatar)
73. [VListItemIcon](#vlistitemicon)
74. [VListItemGroup](#vlistitemgroup)
75. [VMain](#vmain)
76. [VMenu](#vmenu)
77. [VNavigationDrawer](#vnavigationdrawer)
78. [VOtpInput](#votpinput)
79. [VOverflowBtn](#voverflowbtn)
80. [VOverlay](#voverlay)
81. [VPagination](#vpagination)
82. [VSheet](#vsheet)
83. [VParallax](#vparallax)
84. [VProgressCircular](#vprogresscircular)
85. [VProgressLinear](#vprogresslinear)
86. [VRadioGroup](#vradiogroup)
87. [VRadio](#vradio)
88. [VRangeSlider](#vrangeslider)
89. [VRating](#vrating)
90. [VResponsive](#vresponsive)
91. [VSelect](#vselect)
92. [VSkeletonLoader](#vskeletonloader)
93. [VSlider](#vslider)
94. [VSlideGroup](#vslidegroup)
95. [VSlideItem](#vslideitem)
96. [VSnackbar](#vsnackbar)
97. [VSparkline](#vsparkline)
98. [VSpeedDial](#vspeeddial)
99. [VStepper](#vstepper)
100. [VStepperContent](#vsteppercontent)
101. [VStepperStep](#vstepperstep)
102. [VStepperHeader](#vstepperheader)
103. [VStepperItems](#vstepperitems)
104. [VSubheader](#vsubheader)
105. [VSwitch](#vswitch)
106. [VSystemBar](#vsystembar)
107. [VTabs](#vtabs)
108. [VTab](#vtab)
109. [VTabItem](#vtabitem)
110. [VTabsItems](#vtabsitems)
111. [VTabsSlider](#vtabsslider)
112. [VTextarea](#vtextarea)
113. [VTextField](#vtextfield)
114. [VThemeProvider](#vthemeprovider)
115. [VTimeline](#vtimeline)
116. [VTimelineItem](#vtimelineitem)
117. [VTimePicker](#vtimepicker)
118. [VToolbar](#vtoolbar)
119. [VToolbarItems](#vtoolbaritems)
120. [VToolbarTitle](#vtoolbartitle)
121. [VTooltip](#vtooltip)
122. [VTreeview](#vtreeview)
123. [VVirtualScroll](#vvirtualscroll)
124. [VWindow](#vwindow)
125. [VWindowItem](#vwindowitem)
126. [VCarouselTransition](#vcarouseltransition)
127. [VCarouselReverseTransition](#vcarouselreversetransition)
128. [VTabTransition](#vtabtransition)
129. [VTabReverseTransition](#vtabreversetransition)
130. [VMenuTransition](#vmenutransition)
131. [VFabTransition](#vfabtransition)
132. [VDialogTransition](#vdialogtransition)
133. [VDialogBottomTransition](#vdialogbottomtransition)
134. [VDialogTopTransition](#vdialogtoptransition)
135. [VFadeTransition](#vfadetransition)
136. [VScaleTransition](#vscaletransition)
137. [VScrollXTransition](#vscrollxtransition)
138. [VScrollXReverseTransition](#vscrollxreversetransition)
139. [VScrollYTransition](#vscrollytransition)
140. [VScrollYReverseTransition](#vscrollyreversetransition)
141. [VSlideXTransition](#vslidextransition)
142. [VSlideXReverseTransition](#vslidexreversetransition)
143. [VSlideYTransition](#vslideytransition)
144. [VSlideYReverseTransition](#vslideyreversetransition)
145. [VExpandTransition](#vexpandtransition)
146. [VExpandXTransition](#vexpandxtransition)

### Directives

1. [v-mutate](#v-mutate)
2. [v-intersect](#v-intersect)
3. [v-ripple](#v-ripple)
4. [v-resize](#v-resize)
5. [v-scroll](#v-scroll)
6. [v-touch](#v-touch)
7. [v-click-outside](#v-click-outside)

---

## Components

### VApp

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | 'app' | Sets the DOM id on the component |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VAppBar

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies position: absolute to the component. |
| app | boolean | false | Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop |
| bottom | boolean | false | Aligns the component towards the bottom. |
| clipped-left | boolean | false | Designates that the application's `v-navigation-drawer` that is positioned on the left is below the app-bar. |
| clipped-right | boolean | false | Designates that the application's `v-navigation-drawer` that is positioned on the right is below the app-bar. |
| collapse | boolean | false | Puts the toolbar into a collapsed state reducing its maximum width. |
| collapse-on-scroll | boolean | false | Puts the app-bar into a collapsed state when scrolling. |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop). |
| elevate-on-scroll | boolean | false | Elevates the app-bar when scrolling. |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| extended | boolean | false | Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**. |
| extension-height | number \| string | 48 | Specify an explicit height for the `extension` slot.  |
| fade-img-on-scroll | boolean | false | When using the **src** prop or `img` slot, will fade the image when scrolling. |
| fixed | boolean | false | Applies **position: fixed** to the component. |
| flat | boolean | false | Removes the toolbar's box-shadow. |
| floating | boolean | false | Applies **display: inline-flex** to the component. |
| height | number \| string | undefined | Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc. |
| hide-on-scroll | boolean | false | Hides the app-bar when scrolling. Will still show the `extension` slot. |
| inverted-scroll | boolean | false | Hides the app-bar when scrolling down and displays it when scrolling up. |
| light | boolean | false | Applies the light theme variant to the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| outlined | boolean | false | Removes elevation (box-shadow) and adds a *thin* border. |
| prominent | boolean | false | Increases the height of the toolbar content to 128px. |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| scroll-off-screen | boolean | false | Hides the app-bar when scrolling. Will **NOT** show the `extension` slot. |
| scroll-target | string | undefined | Designates the element to target for scrolling events. Uses `window` by default. |
| scroll-threshold | string \| number | undefined | The amount of scroll distance down before **hide-on-scroll** activates. |
| shaped | boolean | false | Applies a large border radius on the top left and bottom right of the card. |
| short | boolean | false | Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop). |
| shrink-on-scroll | boolean | false | Shrinks a **prominent** toolbar to a **dense** or **short** (default) one when scrolling. |
| src | string \| object | undefined | Image source. See `v-img` for details |
| tag | string | 'header' | Specify a custom tag used on the root element. |
| tile | boolean | false | Removes the component's **border-radius**. |
| value | boolean | true | Controls whether the component is visible or hidden. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| extension | - | Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead. |
| img | props: { height: string, src: string \| srcObject } | Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VAppBarNavIcon

#### Props

No props available.

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VAppBarTitle

#### Props

No props available.

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VAlert

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| border | string | undefined | Puts a border on the alert. Accepts **top** \\| **right** \\| **bottom** \\| **left**. |
| close-icon | string | '$cancel' | Change the default icon used for **dismissible** alerts. |
| close-label | string | '$vuetify.close' | Text used for *aria-label* on **dismissible** alerts. Can also be customizing globally in [Internationalization](/customization/internationalization). |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| colored-border | boolean | false | Applies the defined **color** to the alert's border. |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Decreases component's height. |
| dismissible | boolean | false | Adds a close icon that can hide the alert. |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| height | number \| string | undefined | Sets the height for the component. |
| icon | boolean \| string | undefined | Designates a specific icon. |
| light | boolean | false | Applies the light theme variant to the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | undefined | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |
| outlined | boolean | false | Makes the background transparent and applies a thin border. |
| prominent | boolean | false | Displays a larger vertically centered icon to draw more attention. |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| shaped | boolean | false | Applies a large border radius on the top left and bottom right of the card. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| text | boolean | false | Applies the defined **color** to text and a low opacity background of the same. |
| tile | boolean | false | Removes the component's border-radius. |
| transition | string | undefined | Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| type | string | undefined | Specify a **success**, **info**, **warning** or **error** alert. Uses the contextual color and has a pre-defined icon. |
| value | boolean | true | Controls whether the component is visible or hidden. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| input | argument: boolean | The updated bound model |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Slot for icon at end of alert. |
| close | toggle: Function | Slot for icon used in **dismissible** prop. |
| default | - | The default Vue slot. |
| prepend | - | Slot for icon at beginning of alert. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VAutocomplete

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | '$dropdown' | Appends an icon to the component, uses the same syntax as `v-icon` |
| append-outer-icon | string | undefined | Appends an icon to the outside the component's input, uses same syntax as `v-icon` |
| attach | any | false | Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. |
| auto-select-first | boolean | false | When searching, will always highlight the first option |
| autofocus | boolean | false | Enables autofocus |
| background-color | string | undefined | Changes the background-color of the input |
| cache-items | boolean | false | Keeps a local _unique_ copy of all items that have been passed through the **items** prop. |
| chips | boolean | false | Changes display of selections to chips |
| clear-icon | string | '$clear' | Applied when using **clearable** and the input is dirty |
| clearable | boolean | false | Add input clear functionality, default icon is Material Design Icons **mdi-clear** |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| counter | boolean \| number \| string | undefined | Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. |
| counter-value | function | null |  |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| deletable-chips | boolean | false | Adds a remove icon to selected chips |
| dense | boolean | false | Reduces the input height |
| disable-lookup | boolean | false | Disables keyboard lookup |
| disabled | boolean | false | Disables the input |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| filled | boolean | false | Applies the alternate filled input style |
| filter | function | (item, queryText, itemText) => {} | The filtering algorithm used when searching. [example](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/components/VAutocomplete/VAutocomplete.ts#L40) |
| flat | boolean | false | Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props |
| full-width | boolean | false | Designates input type as full-width |
| height | number \| string | undefined | Sets the height of the input |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hide-no-data | boolean | false | Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open. |
| hide-selected | boolean | false | Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| item-color | string | 'primary' | Sets color of selected items |
| item-disabled | string \| array \| function | disabled | Set property of **items**'s disabled value |
| item-text | string \| array \| function | text | Set property of **items**'s text value |
| item-value | string \| array \| function | value | Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) |
| items | array | [] | Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| loader-height | number \| string | 2 | Specifies the height of the loader |
| loading | boolean \| string | false | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color |
| menu-props | string \| array \| object | {   closeOnClick: false,   closeOnContentClick: false,   disableKeys: true,   openOnClick: false,   maxHeight: 304,   offsetY: true,   offsetOverflow: true,   transition: false } | Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| multiple | boolean | false | Changes select to multiple. Accepts array for value |
| no-data-text | string | '$vuetify.noDataText' | Display text when there is no data |
| no-filter | boolean | false | Do not apply filtering when searching. Useful when data is being filtered server side |
| open-on-clear | boolean | false | When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state |
| outlined | boolean | false | Applies the outlined style to the input |
| persistent-hint | boolean | false | Forces hint to always be visible |
| persistent-placeholder | boolean | false | Forces placeholder to always be visible |
| placeholder | string | undefined | Sets the input's placeholder text |
| prefix | string | undefined | Displays prefix text |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| prepend-inner-icon | string | undefined | Prepends an icon inside the component's input, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| return-object | boolean | false | Changes the selection behavior to return the object directly rather than the value specified with **item-value** |
| reverse | boolean | false | Reverses the input orientation |
| rounded | boolean | false | Adds a border radius to the input |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| search-input | string | undefined | Search value. Can be used with `.sync` modifier. |
| shaped | boolean | false | Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` |
| single-line | boolean | false | Label does not move on focus/dirty |
| small-chips | boolean | false | Changes display of selections to chips with the **small** property |
| solo | boolean | false | Changes the style of the input |
| solo-inverted | boolean | false | Reduces element opacity until focused |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| suffix | string | undefined | Displays suffix text |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |
| value-comparator | function | (a: any, b: any): boolean | The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| blur | argument: Event | Emitted when the input is blurred |
| change | argument: any | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:append-outer | argument: Event | Emitted when appended outer icon is clicked |
| click:clear | argument: Event | Emitted when clearable icon clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| click:prepend-inner | argument: Event | Emitted when prepended inner icon is clicked |
| focus | argument: Event | Emitted when component is focused |
| input | argument: any | The updated bound model |
| keydown | argument: KeyboardEvent | Emitted when **any** key is pressed |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |
| update:list-index | argument: number | Emitted when menu item is selected using keyboard arrows |
| update:search-input | argument: string | The `search-input.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Adds an item inside the input and after input content |
| append-item | - | Adds an item after menu content |
| append-outer | - | Adds an item outside the input and after input content |
| counter | props: {"dark":"boolean","light":"boolean","max":"string \| number","value":"string"} |  |
| item | parent: VueComponent, item: object, on: object // Only needed when providing your own v-list-item, attrs: object // Only needed when providing your own v-list-item | Define a custom item appearance |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |
| no-data | - |  |
| prepend | - | Adds an item outside the input and before input content |
| prepend-inner | - | Adds an item inside the input and before input content |
| prepend-item | - | Adds an item before menu content |
| progress | - | Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) |
| selection | parent: VueComponent, item: object, index: number, select: function, selected: boolean, disabled: boolean | Define a custom selection appearance |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VAvatar

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| height | number \| string | undefined | Sets the height for the component. |
| left | boolean | false | Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| right | boolean | false | Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| size | number \| string | 48 | Sets the height and width of the component. |
| tile | boolean | false | Removes the component's **border-radius**. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VBadge

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| avatar | boolean | false | Removes badge padding for the use of the `v-avatar` in the **badge** slot. |
| bordered | boolean | false | Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property. |
| bottom | boolean | false | Aligns the component towards the bottom. |
| color | string | 'primary' | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| content | any | undefined | Any content you want injected as text into the badge. |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dot | boolean | false | Reduce the size of the badge and hide its contents |
| icon | string | undefined | Designates a specific icon used in the badge. |
| inline | boolean | false | Moves the badge to be inline with the wrapping element. Supports the usage of the **left** prop. |
| label | string | '$vuetify.badge' | The **aria-label** used for the badge |
| left | boolean | false | Aligns the component towards the left. |
| light | boolean | false | Applies the light theme variant to the component. |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| offset-x | number \| string | undefined | Offset the badge on the x-axis. |
| offset-y | number \| string | undefined | Offset the badge on the y-axis. |
| origin | string | undefined | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |
| overlap | boolean | false | Overlaps the slotted content on top of the component. |
| tile | boolean | false | Removes the component's border-radius. |
| transition | string | 'scale-rotate-transition' | Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| value | any | true | Controls whether the component is visible or hidden. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| badge | - | The slot used for the badge's content. |
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VBanner

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| app | boolean | false | When used inside of `v-main`, will calculate top based upon application `v-toolbar` and `v-system-bar`. |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| height | number \| string | undefined | Sets the height for the component. |
| icon | string | undefined | Designates a specific icon. |
| icon-color | string | undefined | Designates a specific icon color. |
| light | boolean | false | Applies the light theme variant to the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| mobile-breakpoint | number \| string | - | Sets the designated mobile breakpoint for the component. |
| outlined | boolean | false | Removes elevation (box-shadow) and adds a *thin* border. |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| shaped | boolean | false | Applies a large border radius on the top left and bottom right of the card. |
| single-line | boolean | false | Forces the banner onto a single line. |
| sticky | boolean | false | Applies **position: sticky** to the component (**Evergreen browsers only**). You can find more information on the [MDN documentation for sticky position](https://developer.mozilla.org/en-US/docs/Web/CSS/position). |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| tile | boolean | false | Removes the component's **border-radius**. |
| value | boolean | true | Controls whether the component is visible or hidden. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| actions | dismiss: (): void | The slot used for the action's content such as a [v-btn](/components/buttons). The **dismiss** function in this slots scope, when invoked, will close the banner. |
| default | - | The default Vue slot. |
| icon | - | The slot used for the icon's content. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VBottomNavigation

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies **position: absolute** to the component. |
| active-class | string | 'v-btn--active' | The class applied to a [v-btn](/components/buttons) when activated. |
| app | boolean | false | Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop |
| background-color | string | undefined | Changes the background-color for the component. |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| fixed | boolean | false | Applies **position: fixed** to the component. |
| grow | boolean | false | Force [v-btn](/components/buttons)s to take up all available space. |
| height | number \| string | 56 | Sets the height for the component. |
| hide-on-scroll | boolean | false | Will transition the navigation off screen when scrolling up. |
| horizontal | boolean | false | Uses an alternative horizontal styling for [v-btn](/components/buttons). |
| input-value | boolean | true | Controls whether the component is visible or hidden. Supports the **.sync** modifier. |
| light | boolean | false | Applies the light theme variant to the component. |
| mandatory | boolean | false | Forces a value to always be selected (if available). |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| scroll-target | string | undefined | Designates the element to target for scrolling events. Uses `window` by default. |
| scroll-threshold | string \| number | undefined | The amount of scroll distance down before **hide-on-scroll** activates. |
| shift | boolean | false | Hides text of [v-btn](/components/buttons)s when they are not active. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| value | any | undefined | Holds the value of the currently active [v-btn](/components/buttons). If the button has no value supplied, its index will be used instead.. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: any | The value of currently selected button. If no value is assigned, will be the current index of the button. |
| update:input-value | argument: string \| number | The event used for `input-value.sync`. |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VBottomSheet

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| activator | any | undefined | Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. |
| attach | any | false | Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. |
| close-delay | number \| string | 0 | Milliseconds to wait before closing component. Only applies to hover and focus events. |
| content-class | string | undefined | Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | Disables the ability to open the component. |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| fullscreen | boolean | false | Changes layout for fullscreen display. |
| hide-overlay | boolean | false | Hides the display of the overlay. |
| inset | boolean | false | Reduces the sheet content maximum width to 70%. |
| internal-activator | boolean | false | Detaches the menu content inside of the component as opposed to the document. |
| light | boolean | false | Applies the light theme variant to the component. |
| max-width | string \| number | undefined | Sets the maximum width for the component. |
| no-click-animation | boolean | false | Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop. |
| open-delay | number \| string | 0 | Milliseconds to wait before opening component. Only applies to hover and focus events. |
| open-on-click | boolean | true |  |
| open-on-focus | boolean | false |  |
| origin | string | 'center center' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |
| overlay-color | string | undefined | Sets the overlay color. |
| overlay-opacity | number \| string | undefined | Sets the overlay opacity. |
| persistent | boolean | false | Clicking outside of the element or pressing **esc** key will not deactivate it. |
| retain-focus | boolean | true | Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard. |
| return-value | any | undefined |  |
| scrollable | boolean | false | When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable). |
| transition | string | 'bottom-sheet-transition' | Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| value | any | undefined | Controls whether the component is visible or hidden. |
| width | string \| number | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| activator | attrs: { role: string, aria-haspopup: boolean, aria-expanded: string }, on: { [eventName]: eventHandler }, value: boolean | When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation |
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VBreadcrumbs

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| divider | string | '/' | Specifies the dividing character between items. |
| items | array | [] | An array of objects for each breadcrumb. |
| large | boolean | false | Increase the font-size of the breadcrumb item text to 16px (14px default). |
| light | boolean | false | Applies the light theme variant to the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| divider | - | The slot used for dividers. |
| item | item: any | The slot used to override default `v-breadcrumbs-item` behavior when using the **items** prop. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VBreadcrumbsItem

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | 'v-breadcrumbs__item--disabled' | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| append | boolean | false | Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. |
| disabled | boolean | false | Removes the ability to click or target the component. |
| exact | boolean | false | Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. |
| exact-active-class | string | undefined | Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. |
| exact-path | boolean | false | Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. |
| href | string \| object | undefined | Designates the component as anchor and applies the **href** attribute. |
| link | boolean | false | Designates that the component is a link. This is automatic when using the **href** or **to** prop. |
| nuxt | boolean | false | Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). |
| replace | boolean | false | Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. |
| ripple | boolean \| object | false | Applies the [v-ripple](/directives/ripple) directive. |
| tag | string | undefined | Specify a custom tag used on the root element. |
| target | string | undefined | Designates the target attribute. This should only be applied when using the **href** prop. |
| to | string \| object | undefined | Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VBreadcrumbsDivider

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'li' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VBtn

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies **position: absolute** to the component. |
| active-class | string | - | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| append | boolean | false | Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. |
| block | boolean | false | Expands the button to 100% of available space. |
| bottom | boolean | false | Aligns the component towards the bottom. |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| depressed | boolean | false | Removes the button box shadow. |
| disabled | boolean | false | Removes the ability to click or target the component. |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| exact | boolean | false | Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. |
| exact-active-class | string | undefined | Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. |
| exact-path | boolean | false | Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. |
| fab | boolean | false | Designates the button as a floating-action-button. Button will become _round_. |
| fixed | boolean | false | Applies **position: fixed** to the component. |
| height | number \| string | undefined | Sets the height for the component. |
| href | string \| object | undefined | Designates the component as anchor and applies the **href** attribute. |
| icon | boolean | false | Designates the button as icon. Button will become _round_ and applies the **text** prop. |
| input-value | any | undefined | Controls the button's active state. |
| large | boolean | false | Makes the component large. |
| left | boolean | false | Aligns the component towards the left. This should be used with the **absolute** or **fixed** props. |
| light | boolean | false | Applies the light theme variant to the component. |
| link | boolean | false | Designates that the component is a link. This is automatic when using the **href** or **to** prop. |
| loading | boolean | false | Adds a loading icon animation. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| nuxt | boolean | false | Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). |
| outlined | boolean | false | Makes the background transparent and applies a thin border. |
| plain | boolean | false | Removes the default background change applied when hovering over the button. |
| replace | boolean | false | Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. |
| retain-focus-on-click | boolean | false | Don't blur on click. |
| right | boolean | false | Aligns the component towards the right. This should be used with the **absolute** or **fixed** props. |
| ripple | boolean \| object | undefined | Applies the [v-ripple](/directives/ripple) directive. |
| rounded | boolean | false | Applies a large border radius on the button. |
| shaped | boolean | false | Applies a large border radius on the top left and bottom right of the card. |
| small | boolean | false | Makes the component small. |
| tag | string | 'button' | Specify a custom tag used on the root element. |
| target | string | undefined | Designates the target attribute. This should only be applied when using the **href** prop. |
| text | boolean | false | Makes the background transparent. When using the **color** prop, the color will be applied to the button text instead of the background. |
| tile | boolean | false | Removes the component's **border-radius**. |
| to | string \| object | undefined | Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. |
| top | boolean | false | Aligns the content towards the top. |
| type | string | 'button' | Set the button's **type** attribute. |
| value | any | undefined | Controls whether the component is visible or hidden. |
| width | number \| string | undefined | Sets the width for the component. |
| x-large | boolean | false | Makes the component extra large. |
| x-small | boolean | false | Makes the component extra small. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| click | argument: Event | Event that is emitted when the component is clicked |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| loader | - | Custom loader. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VBtnToggle

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | 'v-item--active' | The **active-class** applied to children when they are activated. |
| background-color | string | undefined | Changes the background-color for the component. |
| borderless | boolean | false | Removes the group's border. |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the button size and padding. |
| group | boolean | false | Generally used in [v-toolbar](/components/toolbars) and [v-app-bar](/components/app-bars). Removes background color, border and increases space between the buttons |
| light | boolean | false | Applies the light theme variant to the component. |
| mandatory | boolean | false | Forces a value to always be selected (if available). |
| max | number \| string | undefined | Sets a maximum number of selections that can be made. |
| multiple | boolean | false | Allow multiple selections. The **value** prop must be an _array_. |
| rounded | boolean | false | Round edge buttons |
| shaped | boolean | false | Applies a large border radius on the top left and bottom right of the card. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| tile | boolean | false | Removes the component's border-radius. |
| value | any | undefined | The designated model value for the component. |
| value-comparator | function | null | Apply a custom value comparator function |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: any[] \| any | Emitted when the input is changed by user interaction |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCalendar

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| categories | array \| string | undefined | Specifies what categories to display in the `category` view. This controls the order of the categories as well. If the calendar uses events any categories specified in those events not specified in this value are dynamically rendered in the view unless `category-hide-dynamic` is true. |
| category-days | number \| string | 1 | The number of days to render in the `category` view. |
| category-for-invalid | string | undefined | The category to place events in that have invalid categories. A category is invalid when it is not a string. By default events without a category are not displayed until this value is specified. |
| category-hide-dynamic | boolean | false | Sets whether categories specified in an event should be hidden if it's not defined in `categories`. |
| category-show-all | boolean | false | Set whether the `category` view should show all defined `categories` even if there are no events for a category. |
| category-text | string \| function | undefined | If categories is a list of objects, you can use this to determine what property to print out as the category text on the calendar. You can provide a function to do some logic or just define the prop name. It's similar to item-text on v-select |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| day-format | function | null | Formats day of the month string that appears in a day to a specified locale |
| end | string \| number \| date | undefined | The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. |
| event-category | string \| function | category | Set property of *event*'s category. Instead of a property a function can be given which takes an event and returns the category. |
| event-color | string \| function | primary | A background color for all events or a function which accepts an event object passed to the calendar to return a color. |
| event-end | string | 'end' | Set property of *event*'s end timestamp. |
| event-height | number | 20 | The height of an event in pixels in the `month` view and at the top of the `day` views. |
| event-margin-bottom | number | 1 | Margin bottom for event |
| event-more | boolean | true | Whether the more 'button' is displayed on a calendar with too many events in a given day. It will say something like '5 more' and when clicked generates a `click:more` event. |
| event-more-text | string | '$vuetify.calendar.moreEvents' | The text to display in the more 'button' given the number of hidden events. |
| event-name | string \| function | name | Set property of *event*'s displayed name, or a function which accepts an event object passed to the calendar as the first argument and a flag signalling whether the name is for a timed event (true) or an event over a day. |
| event-overlap-mode | string \| function | stack | One of `stack`, `column`, or a custom render function |
| event-overlap-threshold | string \| number | 60 | A value in minutes that's used to determine whether two timed events should be placed in column beside each other or should be treated as slightly overlapping events. |
| event-ripple | boolean \| object | undefined | Applies the `v-ripple` directive. |
| event-start | string | 'start' | Set property of *event*'s start timestamp. |
| event-text-color | string \| function | white | A text color for all events or a function which accepts an event object passed to the calendar to return a color. |
| event-timed | string \| function | timed | If Dates or milliseconds are used as the start or end timestamp of an event, this prop can be a string to a property on the event that is truthy if the event is a timed event or a function which takes the event and returns a truthy value if the event is a timed event. |
| events | array | [] | An array of event objects with a property for a start timestamp and optionally a name and end timestamp. If an end timestamp is not given, the value of start will be used. If no name is given, you must provide an implementation for the `event` slot. |
| first-interval | number \| string | 0 | The first interval to display in the `day` view. If `intervalMinutes` is set to 60 and this is set to 9 the first time in the view is 9am. |
| first-time | number \| string \| object | undefined | The first time to display in the `day` view. If specified, this overwrites any `firstInterval` value specified. This can be the number of minutes since midnight, a string in the format of `HH:mm`, or an object with number properties hour and minute. |
| hide-header | boolean | false | If the header at the top of the `day` view should be visible. |
| interval-count | number \| string | 24 | The number of intervals to display in the `day` view. |
| interval-format | function | null | Formats time of day string that appears in the interval gutter of the `day` and `week` view to specified locale |
| interval-height | number \| string | 48 | The height of an interval in pixels in the `day` view. |
| interval-minutes | number \| string | 60 | The number of minutes the intervals are in the `day` view. A common interval is 60 minutes so the intervals are an hour. |
| interval-style | function | null | Returns CSS styling to apply to the interval. |
| interval-width | number \| string | 60 | The width of the interval gutter on the left side in the `day` view. |
| light | boolean | false | Applies the light theme variant to the component. |
| locale | string | undefined | The locale of the calendar. |
| locale-first-day-of-year | string \| number | 0 | Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. |
| max-days | number | 7 | The maximum number of days to display in the custom calendar if an `end` day is not set. |
| min-weeks | any | 1 | The minimum number of weeks to display in the `month` or `week` view. |
| month-format | function | null | Formats month string that appears in a day to specified locale |
| now | string | undefined | Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. |
| short-intervals | boolean | true | If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM |
| short-months | boolean | true | Whether the short versions of a month should be used (Jan vs January). |
| short-weekdays | boolean | true | Whether the short versions of a weekday should be used (Mon vs Monday). |
| show-interval-label | function | null | Checks if a given day and time should be displayed in the interval gutter of the `day` view. |
| show-month-on-first | boolean | true | Whether the name of the month should be displayed on the first day of the month. |
| show-week | boolean | false | Whether week numbers should be displayed when using the `month` view. |
| start | string \| number \| date | 2025-12-21 | The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. |
| type | string | 'month' | A string which is one of `month`, `week`, `day`, `4day`, `custom-weekly`, `custom-daily`, and `category`. The custom types look at the `start` and `end` dates passed to the component as opposed to the `value`. |
| value | string \| number \| date | undefined | A date in the format of `YYYY-MM-DD` which determines what span of time for the calendar. |
| weekday-format | function | null | Formats day of the week string that appears in the header to specified locale |
| weekdays | array \| string | [0,1,2,3,4,5,6] | Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: {"start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}} | The range of days displayed on the calendar changed. This is triggered on initialization. The event passed is an object with start and end date objects. |
| click:date | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The click event on the day of the month link. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| click:day | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The click event on a day. The event passed is the day object. Native mouse event is passed as a second argument. |
| click:day-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The click event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. |
| click:event | argument: {"event":"any","eventParsed":{"input":"any","start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"startIdentifier":"number","startTimestampIdentifier":"number","end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"endIdentifier":"number","endTimestampIdentifier":"number","allDay":"boolean","index":"number","category":"string"},"day":{"outside":"boolean","index":"number","week":[{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}],"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"outside":"boolean","start":"boolean","end":"boolean","timed":"boolean","singleline":"boolean","overlapsNoon":"boolean","formatTime":"(time: VTimestamp, ampm: boolean): string","timeSummary":"(): string","eventSummary":"(): string","nativeEvent":"MouseEvent \| TouchEvent"} | The click event on a specific event. The event passed is the day & time object. |
| click:interval | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The click event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| click:more | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The click event on the `X more` button on views with too many events in a day. Native mouse event is passed as a second argument. |
| click:time | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The click event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| click:time-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The click event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| contextmenu:date | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The right-click event on the day of the month link. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| contextmenu:day | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The right-click event on a day. The event passed is the day object. Native mouse event is passed as a second argument. |
| contextmenu:day-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The right-click event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. |
| contextmenu:event | argument: {"event":"any","eventParsed":{"input":"any","start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"startIdentifier":"number","startTimestampIdentifier":"number","end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"endIdentifier":"number","endTimestampIdentifier":"number","allDay":"boolean","index":"number","category":"string"},"day":{"outside":"boolean","index":"number","week":[{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}],"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"outside":"boolean","start":"boolean","end":"boolean","timed":"boolean","singleline":"boolean","overlapsNoon":"boolean","formatTime":"(time: VTimestamp, ampm: boolean): string","timeSummary":"(): string","eventSummary":"(): string","nativeEvent":"MouseEvent \| TouchEvent"} | The right-click event on an event. The event passed is the day & time object. |
| contextmenu:interval | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The right-click event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| contextmenu:time | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The right-click event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| contextmenu:time-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The right-click event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| input | argument: {"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"} | An alias to the `click:date` event used to support v-model. |
| mousedown:day | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mousedown event on a day. The event passed is the day object. Native mouse event is passed as a second argument. |
| mousedown:day-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mousedown event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. |
| mousedown:event | argument: {"event":"any","eventParsed":{"input":"any","start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"startIdentifier":"number","startTimestampIdentifier":"number","end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"endIdentifier":"number","endTimestampIdentifier":"number","allDay":"boolean","index":"number","category":"string"},"day":{"outside":"boolean","index":"number","week":[{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}],"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"outside":"boolean","start":"boolean","end":"boolean","timed":"boolean","singleline":"boolean","overlapsNoon":"boolean","formatTime":"(time: VTimestamp, ampm: boolean): string","timeSummary":"(): string","eventSummary":"(): string","nativeEvent":"MouseEvent \| TouchEvent"} | The mousedown event on an event. The event passed is the day & time object. |
| mousedown:interval | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mousedown event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mousedown:time | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mousedown event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mousedown:time-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mousedown event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mouseenter:day | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseenter event on a day. The event passed is the day object. Native mouse event is passed as a second argument. |
| mouseenter:day-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseenter event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. |
| mouseenter:event | argument: {"event":"any","eventParsed":{"input":"any","start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"startIdentifier":"number","startTimestampIdentifier":"number","end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"endIdentifier":"number","endTimestampIdentifier":"number","allDay":"boolean","index":"number","category":"string"},"day":{"outside":"boolean","index":"number","week":[{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}],"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"outside":"boolean","start":"boolean","end":"boolean","timed":"boolean","singleline":"boolean","overlapsNoon":"boolean","formatTime":"(time: VTimestamp, ampm: boolean): string","timeSummary":"(): string","eventSummary":"(): string","nativeEvent":"MouseEvent \| TouchEvent"} | The mouseenter event on an event. The event passed is the day & time object. |
| mouseenter:interval | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseenter event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mouseenter:time | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseenter event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mouseenter:time-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseenter event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mouseleave:day | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseleave event on a day. The event passed is the day object. Native mouse event is passed as a second argument. |
| mouseleave:day-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseleave event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. |
| mouseleave:event | argument: {"event":"any","eventParsed":{"input":"any","start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"startIdentifier":"number","startTimestampIdentifier":"number","end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"endIdentifier":"number","endTimestampIdentifier":"number","allDay":"boolean","index":"number","category":"string"},"day":{"outside":"boolean","index":"number","week":[{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}],"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"outside":"boolean","start":"boolean","end":"boolean","timed":"boolean","singleline":"boolean","overlapsNoon":"boolean","formatTime":"(time: VTimestamp, ampm: boolean): string","timeSummary":"(): string","eventSummary":"(): string","nativeEvent":"MouseEvent \| TouchEvent"} | The mouseleave event on an event. The event passed is the day & time object. |
| mouseleave:interval | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseleave event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mouseleave:time | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseleave event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mouseleave:time-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseleave event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mousemove:day | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mousemove event on a day. The event passed is the day object. Native mouse event is passed as a second argument. |
| mousemove:day-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mousemove event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. |
| mousemove:event | argument: {"event":"any","eventParsed":{"input":"any","start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"startIdentifier":"number","startTimestampIdentifier":"number","end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"endIdentifier":"number","endTimestampIdentifier":"number","allDay":"boolean","index":"number","category":"string"},"day":{"outside":"boolean","index":"number","week":[{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}],"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"outside":"boolean","start":"boolean","end":"boolean","timed":"boolean","singleline":"boolean","overlapsNoon":"boolean","formatTime":"(time: VTimestamp, ampm: boolean): string","timeSummary":"(): string","eventSummary":"(): string","nativeEvent":"MouseEvent \| TouchEvent"} | The mousemove event on an event. The event passed is the day & time object. |
| mousemove:interval | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mousemove event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mousemove:time | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mousemove event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mousemove:time-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mousemove event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mouseup:day | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseup event on a day. The event passed is the day object. Native mouse event is passed as a second argument. |
| mouseup:day-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseup event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. |
| mouseup:event | argument: {"event":"any","eventParsed":{"input":"any","start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"startIdentifier":"number","startTimestampIdentifier":"number","end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"endIdentifier":"number","endTimestampIdentifier":"number","allDay":"boolean","index":"number","category":"string"},"day":{"outside":"boolean","index":"number","week":[{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}],"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"outside":"boolean","start":"boolean","end":"boolean","timed":"boolean","singleline":"boolean","overlapsNoon":"boolean","formatTime":"(time: VTimestamp, ampm: boolean): string","timeSummary":"(): string","eventSummary":"(): string","nativeEvent":"MouseEvent \| TouchEvent"} | The mouseup event on an event. The event passed is the day & time object. |
| mouseup:interval | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseup event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mouseup:time | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseup event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| mouseup:time-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, MouseEvent | The mouseup event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| moved | argument: {"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"} | One of the functions `next`, `prev`, and `move` was called. The event passed is the day object calculated for the movement. |
| touchend:day | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchend event on a day. The event passed is the day object. Native mouse event is passed as a second argument. |
| touchend:day-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchend event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. |
| touchend:event | argument: {"event":"any","eventParsed":{"input":"any","start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"startIdentifier":"number","startTimestampIdentifier":"number","end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"endIdentifier":"number","endTimestampIdentifier":"number","allDay":"boolean","index":"number","category":"string"},"day":{"outside":"boolean","index":"number","week":[{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}],"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"outside":"boolean","start":"boolean","end":"boolean","timed":"boolean","singleline":"boolean","overlapsNoon":"boolean","formatTime":"(time: VTimestamp, ampm: boolean): string","timeSummary":"(): string","eventSummary":"(): string","nativeEvent":"MouseEvent \| TouchEvent"} | The touchend event on am view. The event passed is the day & time object. |
| touchend:interval | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchend event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| touchend:time | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchend event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| touchend:time-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchend event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| touchmove:day | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchmove event on a day. The event passed is the day object. Native mouse event is passed as a second argument. |
| touchmove:day-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchmove event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. |
| touchmove:event | argument: {"event":"any","eventParsed":{"input":"any","start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"startIdentifier":"number","startTimestampIdentifier":"number","end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"endIdentifier":"number","endTimestampIdentifier":"number","allDay":"boolean","index":"number","category":"string"},"day":{"outside":"boolean","index":"number","week":[{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}],"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"outside":"boolean","start":"boolean","end":"boolean","timed":"boolean","singleline":"boolean","overlapsNoon":"boolean","formatTime":"(time: VTimestamp, ampm: boolean): string","timeSummary":"(): string","eventSummary":"(): string","nativeEvent":"MouseEvent \| TouchEvent"} | The touchmove event on an `event` view. The event passed is the day & time object. |
| touchmove:interval | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchmove event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| touchmove:time | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchmove event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| touchmove:time-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchmove event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| touchstart:day | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchstart event on a day. The event passed is the day object. Native mouse event is passed as a second argument. |
| touchstart:day-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchstart event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. |
| touchstart:event | argument: {"event":"any","eventParsed":{"input":"any","start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"startIdentifier":"number","startTimestampIdentifier":"number","end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"endIdentifier":"number","endTimestampIdentifier":"number","allDay":"boolean","index":"number","category":"string"},"day":{"outside":"boolean","index":"number","week":[{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}],"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"outside":"boolean","start":"boolean","end":"boolean","timed":"boolean","singleline":"boolean","overlapsNoon":"boolean","formatTime":"(time: VTimestamp, ampm: boolean): string","timeSummary":"(): string","eventSummary":"(): string","nativeEvent":"MouseEvent \| TouchEvent"} | The touchstart event on an event` view. The event passed is the day & time object. |
| touchstart:interval | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchstart event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| touchstart:time | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchstart event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. |
| touchstart:time-category | argument: {   date: string,   time: string,   year: number,   month: number,   day: number,   hour: number,   minute: number,   weekday: number,   hasDay: boolean,   hasTime: boolean,   past: boolean,   present: boolean,   future: boolean,   timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false,   timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false,   minutesToPixels: (minutes: number): number,   week: [     {       date: string,       time: string,       year: number,       month: number,       day: number,       hour: number,       minute: number,       weekday: number,       hasDay: boolean,       hasTime: boolean,       past: boolean,       present: boolean,       future: boolean     }   ] }, TouchEvent | The touchstart event at a specific time in the `category` view. The event passed is the day & time object Native mouse event is passed as a second argument.. |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| category | date: string, time: string, year: number, month: number, day: number, hour: number, minute: number, weekday: number, hasDay: boolean, hasTime: boolean, past: boolean, present: boolean, future: boolean, week: [{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}], category: string \| null | The content placed in a category header for the `category` type. The category variable is null for events with invalid (non-string) categories. |
| day | outside: boolean, index: number, week: [{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}], date: string, time: string, year: number, month: number, day: number, hour: number, minute: number, weekday: number, hasDay: boolean, hasTime: boolean, past: boolean, present: boolean, future: boolean | The content that is placed in a `week` or `month` view. The day & time object is passed through this slots scope. |
| day-body | date: string, time: string, year: number, month: number, day: number, hour: number, minute: number, weekday: number, hasDay: boolean, hasTime: boolean, past: boolean, present: boolean, future: boolean, timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false, timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false, minutesToPixels: (minutes: number): number, week: [{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}] | The content that is placed in a `day` view in the scrollable interval container. The day & time object is passed through this slots scope. |
| day-header | date: string, time: string, year: number, month: number, day: number, hour: number, minute: number, weekday: number, hasDay: boolean, hasTime: boolean, past: boolean, present: boolean, future: boolean, timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false, timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false, minutesToPixels: (minutes: number): number, week: [{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}] | The content that is placed in a `day` view in the top container. The day & time object is passed through this slots scope. |
| day-label | date: string, time: string, year: number, month: number, day: number, hour: number, minute: number, weekday: number, hasDay: boolean, hasTime: boolean, past: boolean, present: boolean, future: boolean | The content that is placed in the day of the month space in the `custom-weekly` or `month` view. The day & time object is passed through this slots scope. |
| day-label-header | date: string, time: string, year: number, month: number, day: number, hour: number, minute: number, weekday: number, hasDay: boolean, hasTime: boolean, past: boolean, present: boolean, future: boolean | The content that is placed in the day of the month space in the `week`, `day`, `4day`, or `custom-daily` view. The day & time object is passed through this slots scope. |
| day-month | date: string, time: string, year: number, month: number, day: number, hour: number, minute: number, weekday: number, hasDay: boolean, hasTime: boolean, past: boolean, present: boolean, future: boolean | The content that is placed in the month space in the `week` or `month` view. The day & time object is passed through this slots scope. |
| event | event: any, eventParsed: {"input":"any","start":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"startIdentifier":"number","startTimestampIdentifier":"number","end":{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"},"endIdentifier":"number","endTimestampIdentifier":"number","allDay":"boolean","index":"number","category":"string"}, day: {"outside":"boolean","index":"number","week":[{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}],"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}, outside: boolean, start: boolean, end: boolean, timed: boolean, singleline: boolean, overlapsNoon: boolean, formatTime: (time: VTimestamp, ampm: boolean): string, timeSummary: (): string, eventSummary: (): string | The content placed in an event. This ignores the `event-name` prop. |
| interval | date: string, time: string, year: number, month: number, day: number, hour: number, minute: number, weekday: number, hasDay: boolean, hasTime: boolean, past: boolean, present: boolean, future: boolean, timeToY: (time: string \| number \| {hour: number, minute: number}, clamp: boolean = false): number \| false, timeDelta: (time: string \| number \| {hour: number, minute: number}): number \| false, minutesToPixels: (minutes: number): number, week: [{"date":"string","time":"string","year":"number","month":"number","day":"number","hour":"number","minute":"number","weekday":"number","hasDay":"boolean","hasTime":"boolean","past":"boolean","present":"boolean","future":"boolean"}] | The content that is placed in the interval space in the `day` view. The day & time object is passed through this slots scope. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCalendarDaily

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| day-format | function | null | Formats day of the month string that appears in a day to a specified locale |
| end | string \| number \| date | undefined | The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. |
| first-interval | number \| string | 0 | The first interval to display in the `day` view. If `intervalMinutes` is set to 60 and this is set to 9 the first time in the view is 9am. |
| first-time | number \| string \| object | undefined | The first time to display in the `day` view. If specified, this overwrites any `firstInterval` value specified. This can be the number of minutes since midnight, a string in the format of `HH:mm`, or an object with number properties hour and minute. |
| hide-header | boolean | false | If the header at the top of the `day` view should be visible. |
| interval-count | number \| string | 24 | The number of intervals to display in the `day` view. |
| interval-format | function | null | Formats time of day string that appears in the interval gutter of the `day` and `week` view to specified locale |
| interval-height | number \| string | 48 | The height of an interval in pixels in the `day` view. |
| interval-minutes | number \| string | 60 | The number of minutes the intervals are in the `day` view. A common interval is 60 minutes so the intervals are an hour. |
| interval-style | function | null | Returns CSS styling to apply to the interval. |
| interval-width | number \| string | 60 | The width of the interval gutter on the left side in the `day` view. |
| light | boolean | false | Applies the light theme variant to the component. |
| locale | string | undefined | The locale of the calendar. |
| max-days | number | 7 | The maximum number of days to display in the custom calendar if an `end` day is not set. |
| now | string | undefined | Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. |
| short-intervals | boolean | true | If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM |
| short-weekdays | boolean | true | Whether the short versions of a weekday should be used (Mon vs Monday). |
| show-interval-label | function | null | Checks if a given day and time should be displayed in the interval gutter of the `day` view. |
| start | string \| number \| date | 2025-12-21 | The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. |
| weekday-format | function | null | Formats day of the week string that appears in the header to specified locale |
| weekdays | array \| string | [0,1,2,3,4,5,6] | Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCalendarWeekly

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| day-format | function | null | Formats day of the month string that appears in a day to a specified locale |
| end | string \| number \| date | undefined | The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. |
| hide-header | boolean | false | If the header at the top of the `day` view should be visible. |
| light | boolean | false | Applies the light theme variant to the component. |
| locale | string | undefined | The locale of the calendar. |
| locale-first-day-of-year | string \| number | 0 | Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. |
| min-weeks | any | 1 | The minimum number of weeks to display in the `month` or `week` view. |
| month-format | function | null | Formats month string that appears in a day to specified locale |
| now | string | undefined | Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. |
| short-months | boolean | true | Whether the short versions of a month should be used (Jan vs January). |
| short-weekdays | boolean | true | Whether the short versions of a weekday should be used (Mon vs Monday). |
| show-month-on-first | boolean | true | Whether the name of the month should be displayed on the first day of the month. |
| show-week | boolean | false | Whether week numbers should be displayed when using the `month` view. |
| start | string \| number \| date | 2025-12-21 | The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. |
| weekday-format | function | null | Formats day of the week string that appears in the header to specified locale |
| weekdays | array \| string | [0,1,2,3,4,5,6] | Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCalendarMonthly

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| day-format | function | null | Formats day of the month string that appears in a day to a specified locale |
| end | string \| number \| date | undefined | The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. |
| hide-header | boolean | false | If the header at the top of the `day` view should be visible. |
| light | boolean | false | Applies the light theme variant to the component. |
| locale | string | undefined | The locale of the calendar. |
| locale-first-day-of-year | string \| number | 0 | Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. |
| min-weeks | any | 1 | The minimum number of weeks to display in the `month` or `week` view. |
| month-format | function | null | Formats month string that appears in a day to specified locale |
| now | string | undefined | Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. |
| short-months | boolean | true | Whether the short versions of a month should be used (Jan vs January). |
| short-weekdays | boolean | true | Whether the short versions of a weekday should be used (Mon vs Monday). |
| show-month-on-first | boolean | true | Whether the name of the month should be displayed on the first day of the month. |
| show-week | boolean | false | Whether week numbers should be displayed when using the `month` view. |
| start | string \| number \| date | 2025-12-21 | The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. |
| weekday-format | function | null | Formats day of the week string that appears in the header to specified locale |
| weekdays | array \| string | [0,1,2,3,4,5,6] | Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCard

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | undefined | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| append | boolean | false | Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | Removes the ability to click or target the component. |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| exact | boolean | false | Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. |
| exact-active-class | string | undefined | Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. |
| exact-path | boolean | false | Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. |
| flat | boolean | false | Removes the card's elevation. |
| height | number \| string | undefined | Sets the height for the component. |
| hover | boolean | false | Will apply an elevation of 4dp when hovered (default 2dp). You can find more information on the [elevation page](/styles/elevation). |
| href | string \| object | undefined | Designates the component as anchor and applies the **href** attribute. |
| img | string | undefined | Specifies an image background for the card. For more advanced implementations, it is recommended that you use the [v-img](/components/images) component. You can find a [v-img example here](/components/cards/#media-with-text). |
| light | boolean | false | Applies the light theme variant to the component. |
| link | boolean | false | Designates that the component is a link. This is automatic when using the **href** or **to** prop. |
| loader-height | number \| string | 4 | Specifies the height of the loader |
| loading | boolean \| string | false | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| nuxt | boolean | false | Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). |
| outlined | boolean | false | Removes elevation (box-shadow) and adds a *thin* border. |
| raised | boolean | false | Specifies a higher default elevation (8dp). You can find more information on the [elevation page](/styles/elevation). |
| replace | boolean | false | Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. |
| ripple | boolean \| object | undefined | Applies the [v-ripple](/directives/ripple) directive. |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| shaped | boolean | false | Applies a large border radius on the top left and bottom right of the card. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| target | string | undefined | Designates the target attribute. This should only be applied when using the **href** prop. |
| tile | boolean | false | Removes the component's **border-radius**. |
| to | string \| object | undefined | Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| click | argument: void | Emitted when component is clicked - Will trigger component to ripple when clicked unless the `.native` modifier is used |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| progress | - | Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCardActions

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCardSubtitle

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCardText

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCardTitle

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCarousel

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | 'v-window-item--active' | The **active-class** applied to children when they are activated. |
| continuous | boolean | true | Determines whether carousel is continuous |
| cycle | boolean | false | Determines if the carousel should cycle through images. |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| delimiter-icon | string | '$delimiter' | Sets icon for carousel delimiter |
| height | number \| string | 500 | Sets the height for the component |
| hide-delimiter-background | boolean | false | Hides the bottom delimiter background. |
| hide-delimiters | boolean | false | Hides the carousel's bottom delimiters. |
| interval | number \| string | 6000 | The duration between image cycles. Requires the **cycle** prop. |
| light | boolean | false | Applies the light theme variant to the component. |
| mandatory | boolean | true | Forces a value to always be selected (if available). |
| max | number \| string | undefined | Sets a maximum number of selections that can be made. |
| multiple | boolean | false | Allow multiple selections. The **value** prop must be an _array_. |
| next-icon | boolean \| string | $next | The displayed icon for forcing pagination to the next item. |
| prev-icon | boolean \| string | $prev | The displayed icon for forcing pagination to the previous item. |
| progress | boolean | false | Displays a carousel progress bar. Requires the **cycle** prop and **interval**. |
| progress-color | string | undefined | Applies specified color to progress bar. |
| reverse | boolean | false | Reverse the normal transition direction. |
| show-arrows | boolean | true | Displays arrows for next/previous navigation. |
| show-arrows-on-hover | boolean | false | Displays navigation arrows only when the carousel is hovered over. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| touch | object | undefined | Provide a custom **left** and **right** function when swiped left or right. |
| touchless | boolean | false | Disable touch support. |
| value | any | undefined | The designated model value for the component. |
| value-comparator | function | null | Apply a custom value comparator function |
| vertical | boolean | false | Uses a vertical transition when changing windows. |
| vertical-delimiters | string | undefined | Displays carousel delimiters vertically. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: number | Emitted when the component value is changed by user interaction |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| next | attrs: { aria-label: string }, on: { click: eventHandler } | Slot displaying the arrow switching to the next item |
| prev | attrs: { aria-label: string }, on: { click: eventHandler } | Slot displaying the arrow switching to the previous item |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCarouselItem

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | undefined | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| append | boolean | false | Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. |
| disabled | boolean | false | Removes the ability to click or target the component. |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| exact | boolean | false | Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. |
| exact-active-class | string | undefined | Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. |
| exact-path | boolean | false | Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. |
| href | string \| object | undefined | Designates the component as anchor and applies the **href** attribute. |
| link | boolean | false | Designates that the component is a link. This is automatic when using the **href** or **to** prop. |
| nuxt | boolean | false | Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). |
| replace | boolean | false | Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. |
| reverse-transition | boolean \| string | undefined | Sets the reverse transition |
| ripple | boolean \| object | undefined | Applies the [v-ripple](/directives/ripple) directive. |
| tag | string | undefined | Specify a custom tag used on the root element. |
| target | string | undefined | Designates the target attribute. This should only be applied when using the **href** prop. |
| to | string \| object | undefined | Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. |
| transition | boolean \| string | undefined | The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| value | any | undefined | The value used when the component is selected in a group. If not provided, the index will be used. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCheckbox

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | undefined | Appends an icon to the component, uses the same syntax as `v-icon` |
| background-color | string | undefined | Changes the background-color of the input |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the input height |
| disabled | boolean | false | Disable the input |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| false-value | any | undefined | Sets value for falsy state |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| indeterminate | boolean | false | Sets an indeterminate state for the checkbox |
| indeterminate-icon | string | '$checkboxIndeterminate' | The icon used when in an indeterminate state |
| input-value | any | undefined | The **v-model** bound value |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| multiple | boolean | false | Changes expected model to an array |
| off-icon | string | '$checkboxOff' | The icon used when inactive |
| on-icon | string | '$checkboxOn' | The icon used when active |
| persistent-hint | boolean | false | Forces hint to always be visible |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| ripple | boolean \| object | true | Applies the [v-ripple](/directives/ripple) directive. |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| true-value | any | undefined | Sets value for truthy state |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |
| value-comparator | function | null | Apply a custom value comparator function |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: any | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |
| update:indeterminate | argument: boolean | The **indeterminate.sync** event. |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Adds an item inside the input and after input content |
| default | - | The default Vue slot. |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |
| prepend | - | Adds an item outside the input and before input content |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSimpleCheckbox

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | Disables simple checkbox. |
| indeterminate | boolean | false | Sets an indeterminate state for the simple checkbox. |
| indeterminate-icon | string | '$checkboxIndeterminate' | The icon used when in an indeterminate state. |
| light | boolean | false | Applies the light theme variant to the component. |
| off-icon | string | '$checkboxOff' | The icon used when inactive. |
| on-icon | string | '$checkboxOn' | The icon used when active. |
| ripple | boolean | true | Applies the [v-ripple](/directives/ripple) directive. |
| value | boolean | false | A boolean value that represents whether the simple checkbox is checked. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| input | argument: Event | The updated bound model |

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VChip

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | boolean | true | Determines whether the chip is visible or not. |
| active-class | string | - | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| append | boolean | false | Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. |
| close | boolean | false | Adds remove button |
| close-icon | string | '$delete' | Change the default icon used for **close** chips |
| close-label | string | '$vuetify.close' | Text used for *aria-label* on the close button in **close** chips. Can also be customized globally in [Internationalization](/customization/internationalization). |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | Disables the chip, making it un-selectable |
| draggable | boolean | false | Makes the chip draggable |
| exact | boolean | false | Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. |
| exact-active-class | string | undefined | Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. |
| exact-path | boolean | false | Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. |
| filter | boolean | false | Displays a selection icon when selected |
| filter-icon | string | '$complete' | Change the default icon used for **filter** chips |
| href | string \| object | undefined | Designates the component as anchor and applies the **href** attribute. |
| input-value | any | undefined | Controls the **active** state of the item. This is typically used to highlight the component. |
| label | boolean | false | Removes circle edges |
| large | boolean | false | Makes the component large. |
| light | boolean | false | Applies the light theme variant to the component. |
| link | boolean | false | Explicitly define the chip as a link |
| nuxt | boolean | false | Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). |
| outlined | boolean | false | Removes background and applies border and text color |
| pill | boolean | false | Remove `v-avatar` padding |
| replace | boolean | false | Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. |
| ripple | boolean \| object | undefined | Applies the [v-ripple](/directives/ripple) directive. |
| small | boolean | false | Makes the component small. |
| tag | string | 'span' | Specify a custom tag used on the root element. |
| target | string | undefined | Designates the target attribute. This should only be applied when using the **href** prop. |
| text-color | string | undefined | Applies a specified color to the control text |
| to | string \| object | undefined | Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. |
| value | any | undefined | The value used when a child of a [v-chip-group](/components/chip-groups). |
| x-large | boolean | false | Makes the component extra large. |
| x-small | boolean | false | Makes the component extra small. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| click | argument: MouseEvent | Emitted when component is clicked, toggles chip if contained in a chip group - Will trigger component to ripple when clicked unless the `.native` modifier is used |
| click:close | argument: void | Emitted when close icon is clicked |
| input | argument: boolean | The updated bound model |
| update:active | argument: boolean | Emitted when close icon is clicked, sets active to `false` |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VChipGroup

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | 'v-slide-item--active' | The **active-class** applied to children when they are activated. |
| center-active | boolean | false | Forces the selected chip to be centered |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| column | boolean | false | Remove horizontal pagination and wrap items as needed |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| light | boolean | false | Applies the light theme variant to the component. |
| mandatory | boolean | false | Forces a value to always be selected (if available). |
| max | number \| string | undefined | Sets a maximum number of selections that can be made. |
| mobile-breakpoint | number \| string | - | Sets the designated mobile breakpoint for the component. |
| multiple | boolean | false | Allow multiple selections. The **value** prop must be an _array_. |
| next-icon | string | '$next' | Specify the icon to use for the next icon |
| prev-icon | string | '$prev' | Specify the icon to use for the prev icon |
| show-arrows | boolean \| string | undefined | Force the display of the pagination arrows |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| value | any | undefined | The designated model value for the component. |
| value-comparator | function | null | Apply a custom value comparator function |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: any[] \| any | Emitted when the component value is changed by user interaction |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VColorPicker

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| canvas-height | string \| number | 150 | Height of canvas |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | Disables picker |
| dot-size | number \| string | 10 | Changes the size of the selection dot on the canvas |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| flat | boolean | false | Removes elevation |
| hide-canvas | boolean | false | Hides canvas |
| hide-inputs | boolean | false | Hides inputs |
| hide-mode-switch | boolean | false | Hides mode switch |
| hide-sliders | boolean | false | Hides sliders |
| light | boolean | false | Applies the light theme variant to the component. |
| mode | string | 'rgba' | Sets mode of inputs. Available modes are 'rgba', 'hsla', and 'hexa'. Can be synced with the `.sync` modifier. |
| show-swatches | boolean | false | Displays color swatches |
| swatches | array | undefined | Sets the available color swatches to select from - This prop only accepts rgba hex strings |
| swatches-max-height | number \| string | 150 | Sets the maximum height of the swatches section |
| value | object \| string | undefined | Current color. This can be either a string representing a hex color, or an object representing a RGBA, HSLA, or HSVA value |
| width | number \| string | 300 | Sets the width of the color picker |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| input | argument: string \| object | Selected color. Depending on what you passed to the `value` prop this is either a string or an object |
| update:color | argument: {"alpha":"number","hex":"string","hexa":"string","hsla":{"h":"number","s":"number","l":"number","a":"number"},"hsva":{"h":"number","s":"number","v":"number","a":"number"},"hue":"number","rgba":{"r":"number","g":"number","b":"number","a":"number"}} | Selected color. This is the internal representation of the color, containing all values. |
| update:mode | argument: string | Selected mode |

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VContent

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'main' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCombobox

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | '$dropdown' | Appends an icon to the component, uses the same syntax as `v-icon` |
| append-outer-icon | string | undefined | Appends an icon to the outside the component's input, uses same syntax as `v-icon` |
| attach | any | false | Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. |
| auto-select-first | boolean | false | When searching, will always highlight the first option |
| autofocus | boolean | false | Enables autofocus |
| background-color | string | undefined | Changes the background-color of the input |
| cache-items | boolean | false | Keeps a local _unique_ copy of all items that have been passed through the **items** prop. |
| chips | boolean | false | Changes display of selections to chips |
| clear-icon | string | '$clear' | Applied when using **clearable** and the input is dirty |
| clearable | boolean | false | Add input clear functionality, default icon is Material Design Icons **mdi-clear** |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| counter | boolean \| number \| string | undefined | Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. |
| counter-value | function | null |  |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| deletable-chips | boolean | false | Adds a remove icon to selected chips |
| delimiters | array | [] | Accepts an array of strings that will trigger a new tag when typing. Does not replace the normal Tab and Enter keys. |
| dense | boolean | false | Reduces the input height |
| disable-lookup | boolean | false | Disables keyboard lookup |
| disabled | boolean | false | Disables the input |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| filled | boolean | false | Applies the alternate filled input style |
| filter | function | (item, queryText, itemText) => {} | The function used for filtering items |
| flat | boolean | false | Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props |
| full-width | boolean | false | Designates input type as full-width |
| height | number \| string | undefined | Sets the height of the input |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hide-no-data | boolean | false | Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open. |
| hide-selected | boolean | false | Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| item-color | string | 'primary' | Sets color of selected items |
| item-disabled | string \| array \| function | disabled | Set property of **items**'s disabled value |
| item-text | string \| array \| function | text | Set property of **items**'s text value |
| item-value | string \| array \| function | value | Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) |
| items | array | [] | Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| loader-height | number \| string | 2 | Specifies the height of the loader |
| loading | boolean \| string | false | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color |
| menu-props | string \| array \| object | {   closeOnClick: false,   closeOnContentClick: false,   disableKeys: true,   openOnClick: false,   maxHeight: 304 } | Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| multiple | boolean | false | Changes select to multiple. Accepts array for value |
| no-data-text | string | '$vuetify.noDataText' | Display text when there is no data |
| no-filter | boolean | false | Do not apply filtering when searching. Useful when data is being filtered server side |
| open-on-clear | boolean | false | When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state |
| outlined | boolean | false | Applies the outlined style to the input |
| persistent-hint | boolean | false | Forces hint to always be visible |
| persistent-placeholder | boolean | false | Forces placeholder to always be visible |
| placeholder | string | undefined | Sets the input's placeholder text |
| prefix | string | undefined | Displays prefix text |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| prepend-inner-icon | string | undefined | Prepends an icon inside the component's input, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| return-object | boolean | true | Changes the selection behavior to return the object directly rather than the value specified with **item-value** |
| reverse | boolean | false | Reverses the input orientation |
| rounded | boolean | false | Adds a border radius to the input |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| search-input | string | undefined | Use the **.sync** modifier to catch user input from the search input |
| shaped | boolean | false | Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` |
| single-line | boolean | false | Label does not move on focus/dirty |
| small-chips | boolean | false | Changes display of selections to chips with the **small** property |
| solo | boolean | false | Changes the style of the input |
| solo-inverted | boolean | false | Reduces element opacity until focused |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| suffix | string | undefined | Displays suffix text |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |
| value-comparator | function | (a: any, b: any): boolean | The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| blur | argument: Event | Emitted when the input is blurred |
| change | argument: any | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:append-outer | argument: Event | Emitted when appended outer icon is clicked |
| click:clear | argument: Event | Emitted when clearable icon clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| click:prepend-inner | argument: Event | Emitted when prepended inner icon is clicked |
| focus | argument: Event | Emitted when component is focused |
| input | argument: any | The updated bound model |
| keydown | argument: KeyboardEvent | Emitted when **any** key is pressed |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |
| update:list-index | argument: number | Emitted when menu item is selected using keyboard arrows |
| update:search-input | argument: string | The `search-input.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Adds an item inside the input and after input content |
| append-item | - | Adds an item after menu content |
| append-outer | - | Adds an item outside the input and after input content |
| counter | props: {"dark":"boolean","light":"boolean","max":"string \| number","value":"string"} |  |
| item | parent: VueComponent, item: object, on: object // Only needed when providing your own v-list-item, attrs: object // Only needed when providing your own v-list-item | Define a custom item appearance |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |
| no-data | - |  |
| prepend | - | Adds an item outside the input and before input content |
| prepend-inner | - | Adds an item inside the input and before input content |
| prepend-item | - | Adds an item before menu content |
| progress | - | Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) |
| selection | parent: VueComponent, item: object, index: number, select: function, selected: boolean, disabled: boolean | Define a custom selection appearance |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VDataIterator

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkbox-color | string | - |  |
| custom-filter | function | gh:searchItems | Function to filter items |
| custom-group | function | gh:groupItems | Function used to group items |
| custom-sort | function | gh:sortItems | Function used to sort items |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disable-filtering | boolean | false | Disables filtering completely |
| disable-pagination | boolean | false | Disables pagination completely |
| disable-sort | boolean | false | Disables sorting completely |
| expanded | array | [] | Array of expanded items. Can be used with `.sync` modifier |
| footer-props | object | undefined | See the [`v-data-footer`](/api/v-data-footer) API for more information |
| group-by | string \| array | [] | Changes which item property should be used for grouping items. Currently only supports a single grouping in the format: `group` or `['group']`. When using an array, only the first element is considered. Can be used with `.sync` modifier |
| group-desc | boolean \| array | [] | Changes which direction grouping is done. Can be used with `.sync` modifier |
| hide-default-footer | boolean | false | Hides default footer |
| item-key | string | 'id' | The property on each item that is used as a unique key |
| items | array | [] | The array of items to display |
| items-per-page | number | 10 | Changes how many items per page should be visible. Can be used with `.sync` modifier. Setting this prop to `-1` will display all items on the page |
| light | boolean | false | Applies the light theme variant to the component. |
| loading | boolean \| string | undefined | If `true` and no items are provided, then a loading text will be shown |
| loading-text | string | '$vuetify.dataIterator.loadingText' | Text shown when `loading` is true and no items are provided |
| locale | string | 'en-US' | Sets the locale used for sorting. This is passed into [`Intl.Collator()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) in the default `customSort` function |
| mobile-breakpoint | number \| string | 600 | Used to set when to toggle between regular table and mobile view |
| multi-sort | boolean | false | If `true` then one can sort on multiple properties |
| must-sort | boolean | false | If `true` then one can not disable sorting, it will always switch between ascending and descending |
| no-data-text | string | '$vuetify.noDataText' | Text shown when no items are provided to the component |
| no-results-text | string | '$vuetify.dataIterator.noResultsText' | Text shown when `search` prop is used and there are no results |
| options | DataOptions | {} |  |
| page | number | 1 |  |
| search | string | undefined | Text input used to filter items |
| selectable-key | string | 'isSelectable' | The property on each item that is used to determine if it is selectable or not |
| server-items-length | number | -1 | Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly |
| single-expand | boolean | false | Changes expansion mode to single expand |
| single-select | boolean | false | Changes selection mode to single select |
| sort-by | string \| array | undefined | Changes which item property (or properties) should be used for sort order. Can be used with `.sync` modifier |
| sort-desc | boolean \| array | undefined | Changes which direction sorting is done. Can be used with `.sync` modifier |
| value | array | [] | Used for controlling selected rows |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| current-items | argument: any[] | Emits the items provided via the **items** prop, every time the internal **computedItems** is changed. |
| input | argument: any[] | Array of selected items |
| item-expanded | argument: { item: any, value: boolean } | Event emitted when an item is expanded or closed |
| item-selected | argument: { item: any, value: boolean } | Event emitted when an item is selected or deselected |
| page-count | argument: number | Emits when the **pageCount** property of the **pagination** prop is updated |
| pagination | argument: {"page":"number","itemsPerPage":"number","pageStart":"number","pageStop":"number","pageCount":"number","itemsLength":"number"} | Emits when something changed to the `pagination` which can be provided via the `pagination` prop |
| toggle-select-all | argument: { items: any[], value: boolean } | Emits when the `select-all` checkbox in table header is clicked. This checkbox is enabled by the **show-select** prop |
| update:expanded | argument: any[] | The `.sync` event for `expanded` prop |
| update:group-by | argument: string \| string[] | Emits when the **group-by** property of the **options** property is updated |
| update:group-desc | argument: boolean \| boolean[] | Emits when the **group-desc** property of the **options** prop is updated |
| update:items-per-page | argument: number | Emits when the **items-per-page** property of the **options** prop is updated |
| update:multi-sort | argument: boolean | Emits when the **multi-sort** property of the **options** prop is updated |
| update:must-sort | argument: boolean | Emits when the **must-sort** property of the **options** prop is updated |
| update:options | argument: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"} | Emits when one of the **options** properties is updated |
| update:page | argument: number | Emits when the **page** property of the **options** prop is updated |
| update:sort-by | argument: string \| string[] | Emits when the **sort-by** property of the **options** prop is updated |
| update:sort-desc | argument: boolean \| boolean[] | Emits when the **sort-desc** property of the **options** prop is updated |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | items: any[], originalItemsLength: number, pagination: {"page":"number","itemsPerPage":"number","pageStart":"number","pageStop":"number","pageCount":"number","itemsLength":"number"}, options: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"}, groupedItems: Array<{ name: string, items: any[] }>, updateOptions: (obj: any) => void, sort: (value: string) => void, sortArray: (sortBy: string[]) => void, group: (value: string) => void, isSelected: (item: any) => boolean, select: (item: any, value: boolean) => void, isExpanded: (item: any) => boolean, expand: (item: any, value: boolean) => void | The default slot. Use this to render your items |
| footer | items: any[], originalItemsLength: number, pagination: {"page":"number","itemsPerPage":"number","pageStart":"number","pageStop":"number","pageCount":"number","itemsLength":"number"}, options: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"}, groupedItems: Array<{ name: string, items: any[] }>, updateOptions: (obj: any) => void, sort: (value: string) => void, sortArray: (sortBy: string[]) => void, group: (value: string) => void | Defines a footer below the items |
| footer.page-text | pageStart: number, pageStop: number, itemsLength: number | This slot is forwarded to the default footer. See the [`v-data-footer`](/api/v-data-footer) API for more information |
| header | items: any[], originalItemsLength: number, pagination: {"page":"number","itemsPerPage":"number","pageStart":"number","pageStop":"number","pageCount":"number","itemsLength":"number"}, options: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"}, groupedItems: Array<{ name: string, items: any[] }>, updateOptions: (obj: any) => void, sort: (value: string) => void, sortArray: (sortBy: string[]) => void, group: (value: string) => void |  |
| item | expand: (v: boolean) => void, index: number, item: any, isExpanded: boolean, isMobile: boolean, isSelected: boolean, select: (v: boolean) => void | Slot for each item |
| loading | - | Defines content for when `loading` is true and no items are provided |
| no-data | - | Defines content for when no items are provided |
| no-results | - | Defines content for when `search` is provided but no results are found |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VDataFooter

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disable-items-per-page | boolean | false | Disables items-per-page dropdown |
| disable-pagination | boolean | false | Disables pagination buttons |
| first-icon | string | '$first' | First icon |
| items-per-page-all-text | string | '$vuetify.dataFooter.itemsPerPageAll' | Text for 'All' option in items-per-page dropdown |
| items-per-page-options | array | [5,10,15,-1] | Array of options to show in the items-per-page dropdown |
| items-per-page-text | string | '$vuetify.dataFooter.itemsPerPageText' | Text for items-per-page dropdown |
| last-icon | string | '$last' | Last icon |
| next-icon | string | '$next' | Next icon |
| options | object | undefined | DataOptions |
| page-text | string | '$vuetify.dataFooter.pageText' |  |
| pagination | object | undefined | DataPagination |
| prev-icon | string | '$prev' | Previous icon |
| show-current-page | boolean | false | Show current page number between prev/next icons |
| show-first-last-page | boolean | false | Show first/last icons |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| update:options | argument: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"} | The `.sync` event for `options` prop |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| page-text | pageStart: number, pageStop: number, itemsLength: number | Defines content for the items-per-page text |
| prepend | - | Adds content to the empty space in the footer |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VDataTable

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| calculate-widths | boolean | false | Enables calculation of column widths. `widths` property will be available in select scoped slots |
| caption | string | undefined | Set the caption (using `<caption>`) |
| checkbox-color | string | undefined | Set the color of the checkboxes (showSelect must be used) |
| custom-filter | function | gh:defaultFilter | Function to filter items |
| custom-group | function | gh:groupItems | Function used to group items |
| custom-sort | function | gh:sortItems | Function used to sort items |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Decreases the height of rows |
| disable-filtering | boolean | false | Disables filtering completely |
| disable-pagination | boolean | false | Disables pagination completely |
| disable-sort | boolean | false | Disables sorting completely |
| expand-icon | string | '$expand' | Icon used for expand toggle button. |
| expanded | array | [] | Array of expanded items. Can be used with `.sync` modifier |
| filter-mode | string | 'intersection' | Controls how how custom column filters are combined with the default filtering. Both modes only apply the default filter to columns not specified in `customKeyFilter`.  - **union**: There is at least one match from the default filter, OR all custom column filters match. - **intersection**: There is at least one match from the default filter, AND all custom column filters match. |
| fixed-header | boolean | false | Fixed header to top of table. **NOTE:** Does not work in IE11 |
| footer-props | object | undefined | See the [`v-data-footer`](/api/v-data-footer) API for more information |
| group-by | string \| array | [] | Changes which item property should be used for grouping items. Currently only supports a single grouping in the format: `group` or `['group']`. When using an array, only the first element is considered. Can be used with `.sync` modifier |
| group-desc | boolean \| array | [] | Changes which direction grouping is done. Can be used with `.sync` modifier |
| header-props | object | undefined | Pass props to the default header. See [`v-data-table-header` API](/api/v-data-table-header) for more information |
| headers | DataTableHeader[] | [] | An array of objects that each describe a header column. See the example below for a definition of all properties |
| headers-length | number | undefined | Can be used in combination with `hide-default-header` to specify the number of columns in the table to allow expansion rows and loading bar to function properly |
| height | number \| string | undefined | Set an explicit height of table |
| hide-default-footer | boolean | false | Hides default footer |
| hide-default-header | boolean | false | Hide the default headers |
| item-class | string \| function | - | Property on supplied `items` that contains item's row class or function that takes an item as an argument and returns the class of corresponding row |
| item-key | string | 'id' | The property on each item that is used as a unique key |
| item-style | string \| function | - |  |
| items | array | [] | The array of items to display |
| items-per-page | number | 10 | Changes how many items per page should be visible. Can be used with `.sync` modifier. Setting this prop to `-1` will display all items on the page |
| light | boolean | false | Applies the light theme variant to the component. |
| loader-height | number \| string | 4 | Specifies the height of the loader |
| loading | boolean \| string | false | If `true` and no items are provided, then a loading text will be shown |
| loading-text | string | '$vuetify.dataIterator.loadingText' | Text shown when `loading` is true and no items are provided |
| locale | string | 'en-US' | Sets the locale used for sorting. This is passed into [`Intl.Collator()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) in the default `customSort` function |
| mobile-breakpoint | number \| string | 600 | Used to set when to toggle between regular table and mobile view |
| multi-sort | boolean | false | If `true` then one can sort on multiple properties |
| must-sort | boolean | false | If `true` then one can not disable sorting, it will always switch between ascending and descending |
| no-data-text | string | '$vuetify.noDataText' | Text shown when no items are provided to the component |
| no-results-text | string | '$vuetify.dataIterator.noResultsText' | Text shown when `search` prop is used and there are no results |
| options | DataOptions | {} |  |
| page | number | 1 | The current displayed page number (1-indexed) |
| search | string | undefined | Text input used to filter items |
| selectable-key | string | 'isSelectable' | The property on each item that is used to determine if it is selectable or not |
| server-items-length | number | -1 | Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly |
| show-expand | boolean | false | Shows the expand toggle in default rows |
| show-group-by | boolean | false | Shows the group by toggle in the header and enables grouped rows |
| show-select | boolean | false | Shows the select checkboxes in both the header and rows (if using default rows) |
| single-expand | boolean | false | Changes expansion mode to single expand |
| single-select | boolean | false | Changes selection mode to single select |
| sort-by | string \| array | undefined | Changes which item property (or properties) should be used for sort order. Can be used with `.sync` modifier |
| sort-desc | boolean \| array | undefined | Changes which direction sorting is done. Can be used with `.sync` modifier |
| value | array | [] | Used for controlling selected rows |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| <event>:row | argument: {   expand: (value: boolean) => void,   headers: DataTableHeader[],   isExpanded: boolean,   isMobile: boolean,   isSelected: boolean,   item: any,   select: (value: boolean) => void }, Event | Pass through any native event listener to the table row elements. The first argument is the event object and the second is related data provided to the item slot. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`. |
| click:row | argument: any, {   expand: (value: boolean) => void,   headers: DataTableHeader[],   isExpanded: boolean,   isMobile: boolean,   isSelected: boolean,   item: any,   select: (value: boolean) => void }, MouseEvent | Emits when a table row is clicked. This event provides 3 arguments: the first is the item data that was clicked, the second is the other related data provided by the `item` slot, and the third is the native click event. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`. |
| current-items | argument: any[] | Emits the items provided via the **items** prop, every time the internal **computedItems** is changed. |
| input | argument: any[] | Array of selected items |
| item-expanded | argument: { item: any, value: boolean } | Event emitted when an item is expanded or closed |
| item-selected | argument: { item: any, value: boolean } | Event emitted when an item is selected or deselected |
| page-count | argument: number | Emits when the **pageCount** property of the **pagination** prop is updated |
| pagination | argument: {"page":"number","itemsPerPage":"number","pageStart":"number","pageStop":"number","pageCount":"number","itemsLength":"number"} | Emits when something changed to the `pagination` which can be provided via the `pagination` prop |
| toggle-select-all | argument: { items: any[], value: boolean } | Emits when the `select-all` checkbox in table header is clicked. This checkbox is enabled by the **show-select** prop |
| update:expanded | argument: any[] | The `.sync` event for `expanded` prop |
| update:group-by | argument: string \| string[] | Emits when the **group-by** property of the **options** property is updated |
| update:group-desc | argument: boolean \| boolean[] | Emits when the **group-desc** property of the **options** prop is updated |
| update:items-per-page | argument: number | Emits when the **items-per-page** property of the **options** prop is updated |
| update:multi-sort | argument: boolean | Emits when the **multi-sort** property of the **options** prop is updated |
| update:must-sort | argument: boolean | Emits when the **must-sort** property of the **options** prop is updated |
| update:options | argument: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"} | Emits when one of the **options** properties is updated |
| update:page | argument: number | Emits when the **page** property of the **options** prop is updated |
| update:sort-by | argument: string \| string[] | Emits when the **sort-by** property of the **options** prop is updated |
| update:sort-desc | argument: boolean \| boolean[] | Emits when the **sort-desc** property of the **options** prop is updated |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| body | items: any[], originalItemsLength: number, pagination: {"page":"number","itemsPerPage":"number","pageStart":"number","pageStop":"number","pageCount":"number","itemsLength":"number"}, options: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"}, groupedItems: Array<{ name: string, items: any[] }>, updateOptions: (obj: any) => void, sort: (value: string) => void, sortArray: (sortBy: string[]) => void, group: (value: string) => void, headers: DataTableHeader[], isMobile: boolean, isSelected: (item: any) => boolean, select: (item: any, value: boolean) => void, isExpanded: (item: any) => boolean, expand: (item: any, value: boolean) => void | Slot to replace the default table `<tbody>` |
| body.append | items: any[], originalItemsLength: number, pagination: {"page":"number","itemsPerPage":"number","pageStart":"number","pageStop":"number","pageCount":"number","itemsLength":"number"}, options: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"}, groupedItems: Array<{ name: string, items: any[] }>, updateOptions: (obj: any) => void, sort: (value: string) => void, sortArray: (sortBy: string[]) => void, group: (value: string) => void, headers: DataTableHeader[], isMobile: boolean, isSelected: (item: any) => boolean, select: (item: any, value: boolean) => void, isExpanded: (item: any) => boolean, expand: (item: any, value: boolean) => void | Appends elements to the end of the default table `<tbody>` |
| body.prepend | items: any[], originalItemsLength: number, pagination: {"page":"number","itemsPerPage":"number","pageStart":"number","pageStop":"number","pageCount":"number","itemsLength":"number"}, options: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"}, groupedItems: Array<{ name: string, items: any[] }>, updateOptions: (obj: any) => void, sort: (value: string) => void, sortArray: (sortBy: string[]) => void, group: (value: string) => void, headers: DataTableHeader[], isMobile: boolean, isSelected: (item: any) => boolean, select: (item: any, value: boolean) => void, isExpanded: (item: any) => boolean, expand: (item: any, value: boolean) => void | Prepends elements to the start of the default table `<tbody>` |
| expanded-item | isMobile: boolean, item: any, headers: DataTableHeader[] | Slot to customize expanded rows |
| foot | items: any[], originalItemsLength: number, pagination: {"page":"number","itemsPerPage":"number","pageStart":"number","pageStop":"number","pageCount":"number","itemsLength":"number"}, options: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"}, groupedItems: Array<{ name: string, items: any[] }>, updateOptions: (obj: any) => void, sort: (value: string) => void, sortArray: (sortBy: string[]) => void, group: (value: string) => void | Slot to add a `<tfoot>` element after the `<tbody>`. Not to be confused with the `footer` slot |
| footer | props: {"options":{"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"},"pagination":{"page":"number","itemsPerPage":"number","pageStart":"number","pageStop":"number","pageCount":"number","itemsLength":"number"},"itemsPerPageText":"string"}, on: {}, headers: DataTableHeader[], widths: [] | Slot to add a custom footer |
| footer.page-text | pageStart: number, pageStop: number, itemsLength: number | Slot to customize footer page text |
| footer.prepend | - | Adds content to the empty space in the footer |
| group | group: string, options: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"}, isMobile: boolean, items: any[], headers: DataTableHeader[] | Slot to replace the default rendering of grouped rows |
| group.header | group: string, groupBy: string[], isMobile: boolean, items: any[], headers: DataTableHeader[], isOpen: boolean, toggle: () => void, remove: () => void | Slot to customize the default rendering of group headers |
| group.summary | group: string, groupBy: string[], isMobile: boolean, items: any[], headers: DataTableHeader[], isOpen: boolean, toggle: () => void | Slot to customize the default rendering of group summaries |
| header | isMobile: boolean, props: {"headers":"DataTableHeader[]","options":{"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"},"mobile":"boolean","showGroupBy":"boolean","someItems":"boolean","everyItem":"boolean"}, on: {"sort":"(value: string) => void","group":"(value: string) => void","toggle-select-all":"(value: boolean) => void"} |  |
| header.<name> | header: DataTableHeader | Slot to customize a specific header column |
| header.data-table-select | isMobile: boolean, props: {"value":"boolean","indeterminate":"boolean"}, on: {"input":"(value: boolean) => void"} | Slot to replace the default `v-simple-checkbox` in header |
| item | expand: (v: boolean) => void, index: number, item: any, isExpanded: boolean, isMobile: boolean, isSelected: boolean, select: (v: boolean) => void, headers: DataTableHeader[], on: {"click":"(event: MouseEvent) => void","contextmenu":"(event: MouseEvent) => void","dblclick":"(event: MouseEvent) => void"}, attrs: {"class":"object"} | Slot to replace the default rendering of a row |
| item.<name> | isMobile: boolean, item: any, header: DataTableHeader, value: any, index: number | Slot to customize a specific column |
| item.data-table-expand | expand: (v: boolean) => void, index: number, item: any, isExpanded: boolean, isMobile: boolean, isSelected: boolean, select: (v: boolean) => void, headers: DataTableHeader[], on: {"click":"(event: MouseEvent) => void","contextmenu":"(event: MouseEvent) => void","dblclick":"(event: MouseEvent) => void"}, attrs: {"class":"object"} | Slot to replace the default `v-icon` used when expanding rows |
| item.data-table-select | expand: (v: boolean) => void, index: number, item: any, isExpanded: boolean, isMobile: boolean, isSelected: boolean, select: (v: boolean) => void, headers: DataTableHeader[], on: {"click":"(event: MouseEvent) => void","contextmenu":"(event: MouseEvent) => void","dblclick":"(event: MouseEvent) => void"}, attrs: {"class":"object"} | Slot to replace the default `v-simple-checkbox` used when selecting rows |
| loading | - | Defines content for when `loading` is true and no items are provided |
| no-data | - | Defines content for when no items are provided |
| no-results | - | Defines content for when `search` is provided but no results are found |
| progress | - | Slot to replace the default `<v-progress-linear>` component |
| top | items: any[], originalItemsLength: number, pagination: {"page":"number","itemsPerPage":"number","pageStart":"number","pageStop":"number","pageCount":"number","itemsLength":"number"}, options: {"page":"number","itemsPerPage":"number","sortBy":"string[]","sortDesc":"boolean[]","groupBy":"string[]","groupDesc":"boolean[]","multiSort":"boolean","mustSort":"boolean"}, groupedItems: Array<{ name: string, items: any[] }>, updateOptions: (obj: any) => void, sort: (value: string) => void, sortArray: (sortBy: string[]) => void, group: (value: string) => void, isMobile: boolean | Slot to add content above the table |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VEditDialog

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancel-text | any | Cancel | Sets the default text for the cancel button when using the **large** prop |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| large | boolean | false | Attaches a submit and cancel button to the dialog |
| light | boolean | false | Applies the light theme variant to the component. |
| persistent | boolean | false | Clicking outside or pressing **esc** key will not dismiss the dialog |
| return-value | any | undefined |  |
| save-text | any | Save | Sets the default text for the save button when using the **large** prop |
| transition | string | 'slide-x-reverse-transition' | Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| cancel | argument: void | Emits when editing is canceled |
| close | argument: void | Emits when edit-dialog close button is pressed |
| open | argument: void | Emits when editing is opened |
| save | argument: void | Emits when edit-dialog save button is pressed |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| input | - | Slot used to denote input component for v-edit-dialog |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VDataTableHeader

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkbox-color | string | undefined |  |
| disable-sort | boolean | false | Toggles rendering of sort button |
| every-item | boolean | false | Indicates if all items in table are selected |
| headers | array | [] | Array of header items to display |
| mobile | boolean | false | Renders mobile view of headers |
| options | object | {"page":1,"itemsPerPage":10,"sortBy":[],"sortDesc":[],"groupBy":[],"groupDesc":[],"multiSort":false,"mustSort":false} | Options object. Identical to the one on `v-data-table` |
| show-group-by | boolean | false | Shows group by button |
| single-select | boolean | false | Toggles rendering of select-all checkbox |
| some-items | boolean | false | Indicates if one or more items in table are selected |
| sort-by-text | string | 'Sort by' | Sets the label text used by the default sort-by selector when `v-data-table` is rendering the mobile view |
| sort-icon | string | '$sort' | Icon used for sort button |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSimpleTable

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Decreases paddings to render a dense table |
| fixed-header | boolean | false | Sets table header to fixed mode |
| height | number \| string | undefined | Sets the height for the component |
| light | boolean | false | Applies the light theme variant to the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VDatePicker

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-picker | string | undefined | Determines which picker in the date or month picker is being displayed. Allowed values: `'DATE'`, `'MONTH'`, `'YEAR'` |
| allowed-dates | function | null | Restricts which dates can be selected |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| day-format | function | null | Allows you to customize the format of the day string that appears in the date table. Called with date (ISO 8601 **date** string) arguments. |
| disabled | boolean | false | Disables interaction with the picker |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| event-color | array \| function \| object \| string | warning | Sets the color for event dot. It can be string (all events will have the same color) or `object` where attribute is the event date and value is boolean/color/array of colors for specified date or `function` taking date as a parameter and returning boolean/color/array of colors for that date |
| events | array \| function \| object | null | Array of dates or object defining events or colors or function returning boolean/color/array of colors |
| first-day-of-week | string \| number | 0 | Sets the first day of the week, starting with 0 for Sunday. |
| flat | boolean | false | Removes  elevation |
| full-width | boolean | false | Forces 100% width |
| header-color | string | undefined | Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color |
| header-date-format | function | null | Allows you to customize the format of the month string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments. |
| landscape | boolean | false | Orients picker horizontal |
| light | boolean | false | Applies the light theme variant to the component. |
| locale | string | undefined | Sets the locale. Accepts a string with a BCP 47 language tag. |
| locale-first-day-of-year | string \| number | 0 | Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. |
| max | string | undefined | Maximum allowed date/month (ISO 8601 format) |
| min | string | undefined | Minimum allowed date/month (ISO 8601 format) |
| month-format | function | null | Formatting function used for displaying months in the months table. Called with date (ISO 8601 **date** string) arguments. |
| multiple | boolean | false | Allow the selection of multiple dates |
| next-icon | string | '$next' | Sets the icon for next month/year button |
| next-month-aria-label | string | '$vuetify.datePicker.nextMonthAriaLabel' |  |
| next-year-aria-label | string | '$vuetify.datePicker.nextYearAriaLabel' |  |
| no-title | boolean | false | Hide the picker title |
| picker-date | string | undefined | Displayed year/month |
| prev-icon | string | '$prev' | Sets the icon for previous month/year button |
| prev-month-aria-label | string | '$vuetify.datePicker.prevMonthAriaLabel' |  |
| prev-year-aria-label | string | '$vuetify.datePicker.prevYearAriaLabel' |  |
| range | boolean | false | Allow the selection of date range |
| reactive | boolean | false | Updates the picker model when changing months/years automatically |
| readonly | boolean | false | Makes the picker readonly (doesn't allow to select new date) |
| scrollable | boolean | false | Allows changing displayed month with mouse scroll |
| selected-items-text | string | '$vuetify.datePicker.itemsSelected' | Text used for translating the number of selected dates when using *multiple* prop. Can also be customizing globally in [Internationalization](/customization/internationalization). |
| show-adjacent-months | boolean | false | Toggles visibility of days from previous and next months |
| show-current | boolean \| string | true | Toggles visibility of the current date/month outline or shows the provided date/month as a current |
| show-week | boolean | false | Toggles visibility of the week numbers in the body of the calendar |
| title-date-format | function | null | Allows you to customize the format of the date string that appears in the title of the date picker. Called with date (ISO 8601 **date** string) arguments. |
| type | string | 'date' | Determines the type of the picker - `date` for date picker, `month` for month picker |
| value | array \| string | undefined | Date picker model (ISO 8601 format, YYYY-mm-dd or YYYY-mm) |
| weekday-format | function | null | Allows you to customize the format of the weekday string that appears in the body of the calendar. Called with date (ISO 8601 **date** string) arguments. |
| width | number \| string | 290 | Width of the picker |
| year-format | function | null | Allows you to customize the format of the year string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments. |
| year-icon | string | undefined | Sets the icon in the year selection button |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| <domevent>:date | argument: string | Emitted when the specified DOM event occurs on the date button |
| <domevent>:month | argument: string | Emitted when the specified DOM event occurs on the month button |
| <domevent>:year | argument: number | Emitted when the specified DOM event occurs on the year button |
| change | argument: string | Reactive date picker emits `input` even when any part of the date (year/month/day) changes, but `change` event is emitted only when the day (for date pickers) or month (for month pickers) changes. If `range` prop is set, date picker emits `change` when both [from, to] are selected. |
| input | argument: string | The updated bound model |
| update:active-picker | argument: string | The `.sync` event for `active-picker` prop |
| update:picker-date | argument: string | The `.sync` event for `picker-date` prop |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | Displayed below the calendar, can be used for example for adding action button (`OK` and `Cancel`) |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VDialog

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| activator | any | undefined | Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. |
| attach | any | false | Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. |
| close-delay | number \| string | 0 | Milliseconds to wait before closing component. Only applies to hover and focus events. |
| content-class | string | undefined | Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | Disables the ability to open the component. |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| fullscreen | boolean | false | Changes layout for fullscreen display. |
| hide-overlay | boolean | false | Hides the display of the overlay. |
| internal-activator | boolean | false | Detaches the menu content inside of the component as opposed to the document. |
| light | boolean | false | Applies the light theme variant to the component. |
| max-width | string \| number | undefined | Sets the maximum width for the component. |
| no-click-animation | boolean | false | Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop. |
| open-delay | number \| string | 0 | Milliseconds to wait before opening component. Only applies to hover and focus events. |
| open-on-click | boolean | true |  |
| open-on-focus | boolean | false |  |
| origin | string | 'center center' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |
| overlay-color | string | undefined | Sets the overlay color. |
| overlay-opacity | number \| string | undefined | Sets the overlay opacity. |
| persistent | boolean | false | Clicking outside of the element or pressing **esc** key will not deactivate it. |
| retain-focus | boolean | true | Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard. |
| return-value | any | undefined |  |
| scrollable | boolean | false | When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable). |
| transition | string \| boolean | dialog-transition | Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| value | any | undefined | Controls whether the component is visible or hidden. |
| width | string \| number | undefined | Sets the width for the component. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| click:outside | argument: MouseEvent | Event that fires when clicking outside an active dialog. |
| input | argument: Boolean | The updated bound model |
| keydown | argument: KeyboardEvent | Event that fires when key is pressed. If dialog is active and not using the **persistent** prop, the **esc** key will deactivate it. |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| activator | attrs: { role: string, aria-haspopup: boolean, aria-expanded: string }, on: { [eventName]: eventHandler }, value: boolean | When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation |
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VDivider

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| inset | boolean | false | Adds indentation (72px) for **normal** dividers, reduces max height for **vertical**. |
| light | boolean | false | Applies the light theme variant to the component. |
| vertical | boolean | false | Displays dividers vertically |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VExpansionPanels

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accordion | boolean | false | Removes the margin around open panels |
| active-class | string | 'v-item--active' | The **active-class** applied to children when they are activated. |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | Disables the entire expansion-panel |
| flat | boolean | false | Removes the expansion-panel's elevation and borders |
| focusable | boolean | false | Makes the expansion-panel headers focusable |
| hover | boolean | false | Applies a background-color shift on hover to expansion panel headers |
| inset | boolean | false | Makes the expansion-panel open with a inset style |
| light | boolean | false | Applies the light theme variant to the component. |
| mandatory | boolean | false | Forces a value to always be selected (if available). |
| max | number \| string | undefined | Sets a maximum number of selections that can be made. |
| multiple | boolean | false | Allow multiple selections. The **value** prop must be an _array_. |
| popout | boolean | false | Makes the expansion-panel open with an popout style |
| readonly | boolean | false | Makes the entire expansion-panel read only. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| tile | boolean | false | Removes the border-radius |
| value | any | undefined | Controls the opened/closed state of content in the expansion-panel. Corresponds to a zero-based index of the currently opened content. If the `multiple` prop (previously `expand` in 1.5.x) is used then it is an array of numbers where each entry corresponds to the index of the opened content.  The index order is not relevant. |
| value-comparator | function | null | Apply a custom value comparator function |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VExpansionPanel

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | - | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| disabled | boolean | false | Disables the expansion-panel content |
| readonly | boolean | false | Makes the expansion-panel content read only. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: void | Toggles the value of the selected panel |
| click | argument: MouseEvent | Mouse click event |

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VExpansionPanelHeader

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| disable-icon-rotate | boolean | false | Removes the icon rotation animation when expanding a panel |
| expand-icon | string | '$expand' | Set the expand action icon |
| hide-actions | boolean | false | Hide the expand icon in the content header |
| ripple | boolean \| object | false | Applies the [v-ripple](/directives/ripple) directive. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| click | argument: MouseEvent | Mouse click event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| actions | open: boolean | Expansion header actions |
| default | open: boolean | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VExpansionPanelContent

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | open: boolean | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VFileInput

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | undefined | Appends an icon to the component, uses the same syntax as `v-icon` |
| append-outer-icon | string | undefined | Appends an icon to the outside the component's input, uses same syntax as `v-icon` |
| autofocus | boolean | false | Enables autofocus |
| background-color | string | undefined | Changes the background-color of the input |
| chips | boolean | false | Changes display of selections to chips |
| clear-icon | string | '$clear' | Applied when using **clearable** and the input is dirty |
| clearable | boolean | true | Add input clear functionality, default icon is Material Design Icons **mdi-clear** |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| counter | boolean \| number \| string | undefined | Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. |
| counter-size-string | string | '$vuetify.fileInput.counterSize' | The text displayed when using the **counter** and **show-size** props. Can also be customized globally on the [internationalization page](/customization/internationalization). |
| counter-string | string | '$vuetify.fileInput.counter' | The text displayed when using the **counter** prop. Can also be customized globally on the [internationalization page](/customization/internationalization). |
| counter-value | function | null |  |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the input height |
| disabled | boolean | false | Disable the input |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| filled | boolean | false | Applies the alternate filled input style |
| flat | boolean | false | Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props |
| full-width | boolean | false | Designates input type as full-width |
| height | number \| string | undefined | Sets the height of the input |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hide-input | boolean | false | Display the icon only without the input (file names) |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| loader-height | number \| string | 2 | Specifies the height of the loader |
| loading | boolean \| string | false | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| multiple | boolean | false | Adds the **multiple** attribute to the input, allowing multiple file selections. |
| outlined | boolean | false | Applies the outlined style to the input |
| persistent-hint | boolean | false | Forces hint to always be visible |
| persistent-placeholder | boolean | false | Forces placeholder to always be visible |
| placeholder | string | undefined | Sets the input's placeholder text |
| prefix | string | undefined | Displays prefix text |
| prepend-icon | string | '$file' | Prepends an icon to the component, uses the same syntax as `v-icon` |
| prepend-inner-icon | string | undefined | Prepends an icon inside the component's input, uses the same syntax as `v-icon` |
| reverse | boolean | false | Reverses the input orientation |
| rounded | boolean | false | Adds a border radius to the input |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| shaped | boolean | false | Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` |
| show-size | boolean \| number | false | Sets the displayed size of selected file(s). When using **true** will default to _1000_ displaying (**kB, MB, GB**) while _1024_ will display (**KiB, MiB, GiB**). |
| single-line | boolean | false | Label does not move on focus/dirty |
| small-chips | boolean | false | Changes display of selections to chips with the **small** property |
| solo | boolean | false | Changes the style of the input |
| solo-inverted | boolean | false | Reduces element opacity until focused |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| suffix | string | undefined | Displays suffix text |
| truncate-length | number \| string | 22 | The length of a filename before it is truncated with ellipsis |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | A single or array of [File objects](https://developer.mozilla.org/en-US/docs/Web/API/File). |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| blur | argument: Event | Emitted when the input is blurred |
| change | argument: File[] | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:append-outer | argument: Event | Emitted when appended outer icon is clicked |
| click:clear | argument: Event | Emitted when clearable icon clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| click:prepend-inner | argument: Event | Emitted when prepended inner icon is clicked |
| focus | argument: Event | Emitted when component is focused |
| input | argument: any | The updated bound model |
| keydown | argument: KeyboardEvent | Emitted when **any** key is pressed |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Adds an item inside the input and after input content |
| append-outer | - | Adds an item outside the input and after input content |
| counter | props: {"dark":"boolean","light":"boolean","max":"string \| number","value":"string"} |  |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |
| prepend | - | Adds an item outside the input and before input content |
| prepend-inner | - | Adds an item inside the input and before input content |
| progress | - | Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) |
| selection | file: File, index: number, multiple: boolean, text: string | Slot for defining a custom appearance for selected item(s). Provides the current **index**, **text** (truncated) and [file](https://developer.mozilla.org/en-US/docs/Web/API/File). |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VFooter

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies **position: absolute** to the component. |
| app | boolean | false | Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| fixed | boolean | false | Applies **position: fixed** to the component. |
| height | number \| string | auto | Sets the height for the component. |
| inset | boolean | false | Positions the toolbar offset from an application `v-navigation-drawer` |
| light | boolean | false | Applies the light theme variant to the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| outlined | boolean | false | Removes elevation (box-shadow) and adds a *thin* border. |
| padless | boolean | false | Remove all padding from the footer |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| shaped | boolean | false | Applies a large border radius on the top left and bottom right of the card. |
| tag | string | 'footer' | Specify a custom tag used on the root element. |
| tile | boolean | false | Removes the component's **border-radius**. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VForm

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Puts all children inputs into a disabled state. |
| lazy-validation | boolean | false | If enabled, **value** will always be _true_ unless there are visible validation errors. You can still call `validate()` to manually trigger validation |
| readonly | boolean | false | Puts all children inputs into a readonly state. |
| value | boolean | false | A boolean value representing the validity of the form. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| input | argument: boolean | The updated bound model |
| submit | argument: event | Emitted when form is submitted |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VContainer

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fluid | boolean | false | Removes viewport maximum-width size breakpoints |
| id | string | undefined | Sets the DOM id on the component |
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCol

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| align-self | string | undefined | Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are **start**, **center**, **end**, **auto**, **baseline** and **stretch**. |
| cols | boolean \| string \| number | false | Sets the default number of columns the component extends. Available options are **1 -> 12** and **auto**. |
| lg | boolean \| string \| number | false | Changes the number of columns on large and greater breakpoints. |
| md | boolean \| string \| number | false | Changes the number of columns on medium and greater breakpoints. |
| offset | string \| number | undefined | Sets the default offset for the column. |
| offset-lg | string \| number | undefined | Changes the offset of the component on large and greater breakpoints. |
| offset-md | string \| number | undefined | Changes the offset of the component on medium and greater breakpoints. |
| offset-sm | string \| number | undefined | Changes the offset of the component on small and greater breakpoints. |
| offset-xl | string \| number | undefined | Changes the offset of the component on extra large and greater breakpoints. |
| order | string \| number | undefined | Sets the default [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) for the column. |
| order-lg | string \| number | undefined | Changes the order of the component on large and greater breakpoints. |
| order-md | string \| number | undefined | Changes the order of the component on medium and greater breakpoints. |
| order-sm | string \| number | undefined | Changes the order of the component on small and greater breakpoints. |
| order-xl | string \| number | undefined | Changes the order of the component on extra large and greater breakpoints. |
| sm | boolean \| string \| number | false | Changes the number of columns on small and greater breakpoints. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| xl | boolean \| string \| number | false | Changes the number of columns on extra large and greater breakpoints. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VRow

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| align | string | undefined | Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are **start**, **center**, **end**, **baseline** and **stretch**. |
| align-content | string | undefined | Applies the [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) css property. Available options are **start**, **center**, **end**, **space-between**, **space-around** and **stretch**. |
| align-content-lg | string | undefined | Changes the **align-content** property on large and greater breakpoints. |
| align-content-md | string | undefined | Changes the **align-content** property on medium and greater breakpoints. |
| align-content-sm | string | undefined | Changes the **align-content** property on small and greater breakpoints. |
| align-content-xl | string | undefined | Changes the **align-content** property on extra large and greater breakpoints. |
| align-lg | string | undefined | Changes the **align-items** property on large and greater breakpoints. |
| align-md | string | undefined | Changes the **align-items** property on medium and greater breakpoints. |
| align-sm | string | undefined | Changes the **align-items** property on small and greater breakpoints. |
| align-xl | string | undefined | Changes the **align-items** property on extra large and greater breakpoints. |
| dense | boolean | false | Reduces the gutter between `v-col`s. |
| justify | string | undefined | Applies the [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) css property. Available options are **start**, **center**, **end**, **space-between** and **space-around**. |
| justify-lg | string | undefined | Changes the **justify-content** property on large and greater breakpoints. |
| justify-md | string | undefined | Changes the **justify-content** property on medium and greater breakpoints. |
| justify-sm | string | undefined | Changes the **justify-content** property on small and greater breakpoints. |
| justify-xl | string | undefined | Changes the **justify-content** property on extra large and greater breakpoints. |
| no-gutters | boolean | false | Removes the gutter between `v-col`s. |
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSpacer

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VLayout

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| align-baseline | Boolean | false |  |
| align-center | Boolean | false |  |
| align-content-center | Boolean | false |  |
| align-content-end | Boolean | false |  |
| align-content-space-around | Boolean | false |  |
| align-content-space-between | Boolean | false |  |
| align-content-start | Boolean | false |  |
| align-end | Boolean | false |  |
| align-start | Boolean | false |  |
| column | boolean | false |  |
| d-{type} | Boolean | false |  |
| fill-height | Boolean | false |  |
| id | string | undefined | Sets the DOM id on the component |
| justify-center | Boolean | false |  |
| justify-end | Boolean | false |  |
| justify-space-around | Boolean | false |  |
| justify-space-between | Boolean | false |  |
| justify-start | Boolean | false |  |
| reverse | boolean | false |  |
| row | boolean | true |  |
| tag | String | div | Specify a custom tag used on the root element. |
| wrap | boolean | false |  |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VFlex

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| (size)(1-12) | boolean | false |  |
| align-self-baseline | boolean | false |  |
| align-self-center | boolean | false |  |
| align-self-end | boolean | false |  |
| align-self-start | boolean | false |  |
| grow | boolean | false |  |
| id | string | undefined | Sets the DOM id on the component |
| offset-(size)(0-12) | boolean | false |  |
| order-(size)(1-12) | boolean | false |  |
| shrink | boolean | false |  |
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VHover

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| close-delay | number \| string | 0 | Milliseconds to wait before closing component. Only applies to hover and focus events. |
| disabled | boolean | false | Turns off hover functionality |
| open-delay | number \| string | 0 | Milliseconds to wait before opening component. Only applies to hover and focus events. |
| value | boolean | false | Controls whether the component is visible or hidden. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | hover: boolean | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VIcon

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Makes icon smaller (20px) |
| disabled | boolean | false | Disable the input |
| large | boolean | false | Makes the component large. |
| left | boolean | false | Applies appropriate margins to the icon inside of a button when placed to the **left** of another element or text |
| light | boolean | false | Applies the light theme variant to the component. |
| right | boolean | false | Applies appropriate margins to the icon inside of a button when placed to the **right** of another element or text |
| size | number \| string | undefined | Specifies a custom font size for the icon |
| small | boolean | false | Makes the component small. |
| tag | string | 'i' | Specifies a custom tag to be used |
| x-large | boolean | false | Makes the component extra large. |
| x-small | boolean | false | Makes the component extra small. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VImg

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| alt | string | undefined | Alternate text for screen readers. Leave empty for decorative images |
| aspect-ratio | string \| number | undefined | Calculated as `width/height`, so for a 1920x1080px image this will be `1.7778`. Will be calculated automatically if omitted |
| contain | boolean | false | Prevents the image from being cropped if it doesn't fit |
| content-class | string | undefined | Apply a custom class to the responsive content div. |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| gradient | string | undefined | Overlays a gradient onto the image. Only supports [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) syntax, anything else should be done with classes (see examples) |
| height | number \| string | undefined | Sets the height for the component. |
| lazy-src | string | undefined | Something to show while waiting for the main image to load, typically a small base64-encoded thumbnail. Has a slight blur filter applied.  Use [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader) to generate automatically |
| light | boolean | false | Applies the light theme variant to the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| options | object | {} | Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor. |
| position | string | 'center center' | Overrides the default to change which parts get cropped off. Uses the same syntax as [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) |
| sizes | string | undefined | For use with `srcset`, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes) |
| src | string \| object | undefined | The image URL. This prop is mandatory |
| srcset | string | undefined | A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset) |
| transition | boolean \| string | fade-transition | The transition to use when switching from `lazy-src` to `src` |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| error | argument: object \| string | Emitted when there is an error |
| load | argument: object \| string | Emitted when image is loaded |
| loadstart | argument: string | Emitted when the image starts to load |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| placeholder | - | Slot for image placeholder |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VInput

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | undefined | Appends an icon to the component, uses the same syntax as `v-icon` |
| background-color | string | undefined | Changes the background-color of the input |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the input height |
| disabled | boolean | false | Disable the input |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| height | number \| string | undefined | Sets the height of the input |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hide-spin-buttons | boolean | false | Hides spin buttons on the input when type is set to `number`. |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| loading | boolean | false | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| persistent-hint | boolean | false | Forces hint to always be visible |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: any | Emitted when the input is changed by user interaction |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VItem

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | - | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| disabled | boolean | false | Removes the ability to click or target the component. |
| value | any | undefined | The value used when the component is selected in a group. If not provided, the index will be used. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | active: boolean, toggle: Function | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VItemGroup

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | 'v-item--active' | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| light | boolean | false | Applies the light theme variant to the component. |
| mandatory | boolean | false | Forces a value to always be selected (if available). |
| max | number \| string | undefined | Sets a maximum number of selections that can be made. |
| multiple | boolean | false | Allow multiple selections. The **value** prop must be an _array_. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| value | any | undefined | The designated model value for the component. |
| value-comparator | function | null | Apply a custom value comparator function |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: any[] \| any | Emitted when the component value is changed by user interaction |

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VLazy

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| height | number \| string | undefined | Sets the height for the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| options | object | {} | Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| transition | string | 'fade-transition' | Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| value | any | undefined | Controls whether the component is visible or hidden. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VListItemActionText

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'span' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VListItemContent

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VListItemTitle

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VListItemSubtitle

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VList

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Lowers max height of list tiles |
| disabled | boolean | false | Disables all children `v-list-item` components |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| expand | boolean | false | Will only collapse when explicitly closed |
| flat | boolean | false | Remove the highlighted background on active `v-list-item`s |
| height | number \| string | undefined | Sets the height for the component. |
| light | boolean | false | Applies the light theme variant to the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| nav | boolean | false | An alternative styling that reduces `v-list-item` width and rounds the corners. Typically used with **[v-navigation-drawer](/components/navigation-drawers)** |
| outlined | boolean | false | Removes elevation (box-shadow) and adds a *thin* border. |
| rounded | boolean | false | Rounds the `v-list-item` edges |
| shaped | boolean | false | Provides an alternative active style for `v-list-item`. |
| subheader | boolean | false | Removes top padding. Used when previous sibling is a header |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| three-line | boolean | false | Increases list-item height for three lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. |
| tile | boolean | false | Removes the component's **border-radius**. |
| two-line | boolean | false | Increases list-item height for two lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VListGroup

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | undefined | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| append-icon | string | '$expand' | Appends an icon to the component, uses the same syntax as `v-icon` |
| color | string | 'primary' | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| disabled | boolean | false | Disables all children `v-list-item` components |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| group | string \| regexp | undefined | Assign a route namespace. Accepts a string or regexp for determining active state |
| no-action | boolean | false | Removes left padding assigned for action icons from group items |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| ripple | boolean \| object | true | Applies the [v-ripple](/directives/ripple) directive. |
| sub-group | boolean | false | Designate the component as nested list group |
| value | any | undefined | Expands / Collapse the list-group |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| click | argument: MouseEvent | Event that is emitted when the component is clicked |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| activator | - | When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation |
| appendIcon | - | Appends an icon to the component, uses the same syntax as `v-icon` |
| default | - | The default Vue slot. |
| prependIcon | - | Prepends an icon to the component, uses the same syntax as `v-icon` |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VListItem

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | - | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| append | boolean | false | Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. |
| color | string | undefined | Applies specified color to the control when in an **active** state or **input-value** is **true** - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`) |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Lowers max height of list tiles |
| disabled | boolean | false | Disables the component |
| exact | boolean | false | Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. |
| exact-active-class | string | undefined | Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. |
| exact-path | boolean | false | Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. |
| href | string \| object | undefined | Designates the component as anchor and applies the **href** attribute. |
| inactive | boolean | false | If set, the list tile will not be rendered as a link even if it has to/href prop or @click handler |
| input-value | any | undefined | Controls the **active** state of the item. This is typically used to highlight the component |
| light | boolean | false | Applies the light theme variant to the component. |
| link | boolean | false | Designates that the component is a link. This is automatic when using the **href** or **to** prop. |
| nuxt | boolean | false | Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). |
| replace | boolean | false | Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. |
| ripple | boolean \| object | undefined | Applies the [v-ripple](/directives/ripple) directive. |
| selectable | boolean | false | Allow text selection inside `v-list-item`. This prop uses [user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select) |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| target | string | undefined | Designates the target attribute. This should only be applied when using the **href** prop. |
| three-line | boolean | false | Increases list-item height for three lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. |
| to | string \| object | undefined | Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. |
| two-line | boolean | false | Increases list-item height for two lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers. |
| value | any | undefined | The value used when a child of a [v-list-item-group](/components/list-item-groups). |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| click | argument: MouseEvent \| KeyboardEvent | Event that is emitted when the component is clicked |
| keydown | argument: KeyboardEvent |  |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | active: boolean, toggle: Function | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VListItemAction

#### Props

No props available.

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VListItemAvatar

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| height | number \| string | undefined | Sets the height for the component. |
| horizontal | boolean | false | Uses an alternative horizontal style. |
| left | boolean | false | Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| right | boolean | false | Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons). |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| size | number \| string | 40 | Sets the height and width of the component. |
| tile | boolean | false | Removes the component's **border-radius**. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VListItemIcon

#### Props

No props available.

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VListItemGroup

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | 'v-item--active' | The **active-class** applied to children when they are activated. |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| light | boolean | false | Applies the light theme variant to the component. |
| mandatory | boolean | false | Forces a value to always be selected (if available). |
| max | number \| string | undefined | Sets a maximum number of selections that can be made. |
| multiple | boolean | false | Allow multiple selections. The **value** prop must be an _array_. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| value | any | undefined | Sets the active list-item inside the list-group |
| value-comparator | function | null | Apply a custom value comparator function |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: any[] \| any | Emitted when the component value is changed by user interaction |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VMain

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'main' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VMenu

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies **position: absolute** to the component. |
| activator | any | undefined | Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. |
| allow-overflow | boolean | false | Removes overflow re-positioning for the content |
| attach | any | false | Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. |
| auto | boolean | false | Centers list on selected element |
| bottom | boolean | false | Aligns the component towards the bottom. |
| close-delay | number \| string | 0 | Milliseconds to wait before closing component. Only works with the **open-on-hover** prop |
| close-on-click | boolean | true | Designates if menu should close on outside-activator click |
| close-on-content-click | boolean | true | Designates if menu should close when its content is clicked |
| content-class | string | undefined | Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. |
| content-props | object | {} | Applies props/attributes to the detached menu. This is useful because the content is moved to the beginning of the `v-app` component (unless the attach prop is provided) and is not targetable by classes passed directly on the component. You could use this for example for applying a `data-cy` for cypress testing purposes. |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disable-keys | boolean | false | Removes all keyboard interaction |
| disabled | boolean | false | Disables the menu |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| internal-activator | boolean | false | Detaches the menu content inside of the component as opposed to the document. |
| left | boolean | false | Aligns the component towards the left. |
| light | boolean | false | Applies the light theme variant to the component. |
| max-height | number \| string | auto | Sets the max height of the menu content |
| max-width | number \| string | auto | Sets the maximum width for the content |
| min-width | number \| string | undefined | Sets the minimum width for the content |
| nudge-bottom | number \| string | 0 | Nudge the content to the bottom |
| nudge-left | number \| string | 0 | Nudge the content to the left |
| nudge-right | number \| string | 0 | Nudge the content to the right |
| nudge-top | number \| string | 0 | Nudge the content to the top |
| nudge-width | number \| string | 0 | Nudge the content width |
| offset-overflow | boolean | false | Causes the component to flip to the opposite side when repositioned due to overflow |
| offset-x | boolean | false | Offset the menu on the x-axis. Works in conjunction with direction left/right |
| offset-y | boolean | false | Offset the menu on the y-axis. Works in conjunction with direction top/bottom |
| open-delay | number \| string | 0 | Milliseconds to wait before opening component. Only works with the **open-on-hover** prop |
| open-on-click | boolean | true | Designates whether menu should open on activator click |
| open-on-focus | boolean | false |  |
| open-on-hover | boolean | false | Designates whether menu should open on activator hover |
| origin | string | 'top left' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |
| position-x | number | undefined | Used to position the content when not using an activator slot |
| position-y | number | undefined | Used to position the content when not using an activator slot |
| return-value | any | undefined | The value that is updated when the menu is closed - must be primitive. Dot notation is supported |
| right | boolean | false | Aligns the component towards the right. |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| tile | boolean | false | Removes the component's **border-radius**. |
| top | boolean | false | Aligns the content towards the top. |
| transition | boolean \| string | v-menu-transition | Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| value | any | undefined | Controls whether the component is visible or hidden. |
| z-index | number \| string | undefined | The z-index used for the component |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| input | argument: boolean | The updated bound model |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| activator | attrs: { role: string, aria-haspopup: boolean, aria-expanded: string }, on: { [eventName]: eventHandler }, value: boolean | When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation |
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VNavigationDrawer

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies **position: absolute** to the component. |
| app | boolean | false | Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop |
| bottom | boolean | false | Expands from the bottom of the screen on mobile devices |
| clipped | boolean | false | A clipped drawer rests under the application toolbar. **Note:** requires the **clipped-left** or **clipped-right** prop on `v-app-bar` to work as intended |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disable-resize-watcher | boolean | false | Will automatically open/close drawer when resized depending if mobile or desktop. |
| disable-route-watcher | boolean | false | Disables opening of navigation drawer when route changes |
| expand-on-hover | boolean | false | Collapses the drawer to a **mini-variant** until hovering with the mouse |
| fixed | boolean | false | Applies **position: fixed** to the component. |
| floating | boolean | false | A floating drawer has no visible container (no border-right) |
| height | number \| string | 100% | Sets the height of the navigation drawer |
| hide-overlay | boolean | false | Hides the display of the overlay. |
| light | boolean | false | Applies the light theme variant to the component. |
| mini-variant | boolean | false | Condenses navigation drawer width, also accepts the **.sync** modifier. With this, the drawer will re-open when clicking it |
| mini-variant-width | number \| string | 56 | Designates the width assigned when the `mini` prop is turned on |
| mobile-breakpoint | number \| string | - | Sets the designated mobile breakpoint for the component. This will apply alternate styles for mobile devices such as the `temporary` prop, or activate the `bottom` prop when the breakpoint value is met. Setting the value to `0` will disable this functionality. |
| overlay-color | string | undefined | Sets the overlay color. |
| overlay-opacity | number \| string | undefined | Sets the overlay opacity. |
| permanent | boolean | false | The drawer remains visible regardless of screen size |
| right | boolean | false | Places the navigation drawer on the right |
| src | string \| object | undefined | Specifies a [v-img](/components/images) as the component's background. |
| stateless | boolean | false | Remove all automated state functionality (resize, mobile, route) and manually control the drawer state |
| tag | string | 'aside' | Specify a custom tag used on the root element. |
| temporary | boolean | false | A temporary drawer sits above its application and uses a scrim (overlay) to darken the background |
| touchless | boolean | false | Disable mobile touch functionality |
| value | any | undefined | Controls whether the component is visible or hidden. |
| width | number \| string | 256 | Sets the width for the component. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| input | argument: boolean | The updated bound model |
| transitionend | argument: object | Emits event object when transition is complete. |
| update:mini-variant | argument: boolean | The `mini-variant.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | A slot at the bottom of the drawer |
| default | - | The default Vue slot. |
| img | height: string, src: string \| srcObject | Used to modify `v-img` properties when using the **src** prop |
| prepend | - | A slot at the top of the drawer |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VOtpInput

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | Disable the input |
| id | string | undefined | Sets the DOM id on the component |
| length | number \| string | 6 | The OTP field's length |
| plain | boolean | false | Outlined style applied by default to the input, set to `true` to apply plain style |
| readonly | boolean | false | Puts input in readonly state |
| type | string | 'text' | Supported types: `text`, `password`, `number` |
| value | any | undefined | The input's value |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: string | Emitted when the input is changed by user interaction |
| finish | argument: string | Emitted when the input is filled completely and cursor is blurred |
| input | argument: string | The updated bound model |

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VOverflowBtn

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | '$dropdown' | Appends an icon to the component, uses the same syntax as `v-icon` |
| append-outer-icon | string | undefined | Appends an icon to the outside the component's input, uses same syntax as `v-icon` |
| attach | any | false | Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. |
| auto-select-first | boolean | false | When searching, will always highlight the first option |
| autofocus | boolean | false | Enables autofocus |
| background-color | string | undefined | Changes the background-color of the input |
| cache-items | boolean | false | Keeps a local _unique_ copy of all items that have been passed through the **items** prop. |
| chips | boolean | false | Changes display of selections to chips |
| clear-icon | string | '$clear' | Applied when using **clearable** and the input is dirty |
| clearable | boolean | false | Add input clear functionality, default icon is Material Design Icons **mdi-clear** |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| counter | boolean \| number \| string | undefined | Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. |
| counter-value | function | null |  |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| deletable-chips | boolean | false | Adds a remove icon to selected chips |
| dense | boolean | false | Reduces the input height |
| disable-lookup | boolean | false | Disables keyboard lookup |
| disabled | boolean | false | Disables the input |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| editable | boolean | false | Creates an editable button |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| filled | boolean | false | Applies the alternate filled input style |
| filter | function | (item, queryText, itemText) => {} | The function used for filtering items |
| flat | boolean | false | Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props |
| full-width | boolean | false | Designates input type as full-width |
| height | number \| string | undefined | Sets the height of the input |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hide-no-data | boolean | false | Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open. |
| hide-selected | boolean | false | Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| item-color | string | 'primary' | Sets color of selected items |
| item-disabled | string \| array \| function | disabled | Set property of **items**'s disabled value |
| item-text | string \| array \| function | text | Set property of **items**'s text value |
| item-value | string \| array \| function | value | Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) |
| items | array | [] | Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| loader-height | number \| string | 2 | Specifies the height of the loader |
| loading | boolean \| string | false | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color |
| menu-props | string \| array \| object | {   closeOnClick: false,   closeOnContentClick: false,   disableKeys: true,   openOnClick: false,   maxHeight: 304 } | Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| multiple | boolean | false | Changes select to multiple. Accepts array for value |
| no-data-text | string | '$vuetify.noDataText' | Display text when there is no data |
| no-filter | boolean | false | Do not apply filtering when searching. Useful when data is being filtered server side |
| open-on-clear | boolean | false | When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state |
| outlined | boolean | false | Applies the outlined style to the input |
| persistent-hint | boolean | false | Forces hint to always be visible |
| persistent-placeholder | boolean | false | Forces label to always be visible |
| placeholder | string | undefined | Sets the input's placeholder text |
| prefix | string | undefined | Displays prefix text |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| prepend-inner-icon | string | undefined | Prepends an icon inside the component's input, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| return-object | boolean | false | Changes the selection behavior to return the object directly rather than the value specified with **item-value** |
| reverse | boolean | false | Reverses the input orientation |
| rounded | boolean | false | Adds a border radius to the input |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| search-input | string | undefined | Use the **.sync** modifier to catch user input from the search input |
| segmented | boolean | false | Creates a segmented button |
| shaped | boolean | false | Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` |
| single-line | boolean | false | Label does not move on focus/dirty |
| small-chips | boolean | false | Changes display of selections to chips with the **small** property |
| solo | boolean | false | Changes the style of the input |
| solo-inverted | boolean | false | Reduces element opacity until focused |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| suffix | string | undefined | Displays suffix text |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |
| value-comparator | function | (a: any, b: any): boolean | The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| blur | argument: Event | Emitted when the input is blurred |
| change | argument: any | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:append-outer | argument: Event | Emitted when appended outer icon is clicked |
| click:clear | argument: Event | Emitted when clearable icon clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| click:prepend-inner | argument: Event | Emitted when prepended inner icon is clicked |
| focus | argument: Event | Emitted when component is focused |
| input | argument: any | The updated bound model |
| keydown | argument: KeyboardEvent | Emitted when **any** key is pressed |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |
| update:list-index | argument: number | Emitted when menu item is selected using keyboard arrows |
| update:search-input | argument: string | The `search-input.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Adds an item inside the input and after input content |
| append-item | - | Adds an item after menu content |
| append-outer | - | Adds an item outside the input and after input content |
| counter | props: {"dark":"boolean","light":"boolean","max":"string \| number","value":"string"} |  |
| item | parent: VueComponent, item: object, on: object // Only needed when providing your own v-list-item, attrs: object // Only needed when providing your own v-list-item | Define a custom item appearance |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |
| no-data | - |  |
| prepend | - | Adds an item outside the input and before input content |
| prepend-inner | - | Adds an item inside the input and before input content |
| prepend-item | - | Adds an item before menu content |
| progress | - | Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) |
| selection | parent: VueComponent, item: object, index: number, select: function, selected: boolean, disabled: boolean | Define a custom selection appearance |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VOverlay

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies **position: absolute** to the component. |
| color | string | '#212121' | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | true | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| light | boolean | false | Applies the light theme variant to the component. |
| opacity | number \| string | 0.46 | Sets the overlay opacity |
| value | any | true | Controls whether the component is visible or hidden. |
| z-index | number \| string | 5 | The z-index used for the component |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VPagination

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| circle | boolean | false | Shape pagination elements as circles |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| current-page-aria-label | string | '$vuetify.pagination.ariaLabel.currentPage' |  |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | Disables component |
| length | number | 0 | The length of the pagination component |
| light | boolean | false | Applies the light theme variant to the component. |
| navigation-color | string | undefined |  |
| navigation-text-color | string | undefined |  |
| next-aria-label | string | '$vuetify.pagination.ariaLabel.next' |  |
| next-icon | string | '$next' | Specify the icon to use for the next icon |
| page-aria-label | string | '$vuetify.pagination.ariaLabel.page' |  |
| prev-icon | string | '$prev' | Specify the icon to use for the prev icon |
| previous-aria-label | string | '$vuetify.pagination.ariaLabel.previous' |  |
| total-visible | number \| string | undefined | Specify the max total visible pagination numbers |
| value | number | 0 | Current selected page |
| wrapper-aria-label | string | '$vuetify.pagination.ariaLabel.wrapper' |  |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| input | argument: number | The updated bound model |
| next | argument: void | Emitted when going to next item |
| previous | argument: void | Emitted when going to previous item |

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSheet

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| height | number \| string | undefined | Sets the height for the component. |
| light | boolean | false | Applies the light theme variant to the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| outlined | boolean | false | Removes elevation (box-shadow) and adds a *thin* border. |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| shaped | boolean | false | Applies a large border radius on the top left and bottom right of the card. |
| tag | string | div | Specify a custom tag used on the root element. |
| tile | boolean | false | Removes the component's **border-radius**. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VParallax

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| alt | string | undefined | Attaches an alt property to the parallax image |
| height | string \| number | 500 | Sets the height for the component |
| src | string | undefined | The image to parallax |
| srcset | string | undefined | A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset) |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VProgressCircular

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| button | boolean | false | Deprecated - Pending removal |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| indeterminate | boolean | false | Constantly animates, use when loading progress is unknown. |
| rotate | number \| string | 0 | Rotates the circle start point in deg |
| size | number \| string | 32 | Sets the diameter of the circle in pixels |
| value | number \| string | 0 | The percentage value for current progress |
| width | number \| string | 4 | Sets the stroke of the circle in pixels |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | value: number | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VProgressLinear

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies **position: absolute** to the component. |
| active | boolean | true | Reduce the height to 0, hiding component |
| background-color | string | undefined | Background color, set to component's color if null |
| background-opacity | number \| string | undefined | Background opacity, if null it defaults to 0.3 if background color is not specified or 1 otherwise |
| bottom | boolean | false | Aligns the component towards the bottom. |
| buffer-value | number \| string | 100 | The percentage value for the buffer |
| color | string | 'primary' | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| fixed | boolean | false | Applies **position: fixed** to the component. |
| height | number \| string | 4 | Sets the height for the component |
| indeterminate | boolean | false | Constantly animates, use when loading progress is unknown. |
| light | boolean | false | Applies the light theme variant to the component. |
| query | boolean | false | Animates like **indeterminate** prop but inverse |
| reverse | boolean | false | Displays reversed progress (right to left in LTR mode and left to right in RTL) |
| rounded | boolean | false | Adds a border radius to the progress component |
| stream | boolean | false | An alternative style for portraying loading that works in tandem with **buffer-value** |
| striped | boolean | false | Adds a stripe background to the filled portion of the progress component |
| top | boolean | false | Aligns the content towards the top. |
| value | number \| string | 0 | The designated model value for the component. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: number | Emitted when the component value is changed by user interaction |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | value: number | Provides the current value of the component |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VRadioGroup

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | 'v-item--active' | The **active-class** applied to children when they are activated. |
| append-icon | string | undefined | Appends an icon to the component, uses the same syntax as `v-icon` |
| background-color | string | undefined | Changes the background-color of the input |
| column | boolean | true | Displays radio buttons in column |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the input height |
| disabled | boolean | false | Disable the input |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| mandatory | boolean | false | Forces a value to always be selected (if available). |
| max | number \| string | undefined | Sets a maximum number of selections that can be made. |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| multiple | boolean | false | Allow multiple selections. The **value** prop must be an _array_. |
| name | string | undefined | Sets the component's name attribute |
| persistent-hint | boolean | false | Forces hint to always be visible |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| row | boolean | false | Displays radio buttons in row |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |
| value-comparator | function | null | Apply a custom value comparator function |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: any | Emitted when the input is changed by user interaction |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Adds an item inside the input and after input content |
| default | - | The default Vue slot. |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |
| prepend | - | Adds an item outside the input and before input content |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VRadio

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | - | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | Removes the ability to click or target the component. |
| id | string | undefined | Sets the DOM id on the component |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| name | string | undefined | Sets the component's name attribute |
| off-icon | string | '$radioOff' | The icon used when inactive |
| on-icon | string | '$radioOn' | The icon used when active |
| readonly | boolean | false | Puts input in readonly state |
| ripple | boolean \| object | true | Applies the [v-ripple](/directives/ripple) directive. |
| value | any | - | The value used when the component is selected in a group. If not provided, the index will be used. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: any | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked. **Note:** the **change** event should be used instead of **click** when monitoring state change |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VRangeSlider

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | undefined | Appends an icon to the component, uses the same syntax as `v-icon` |
| background-color | string | undefined | Changes the background-color of the input |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the input height |
| disabled | boolean | false | Disable the input |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| height | number \| string | undefined | Sets the height of the input |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| inverse-label | boolean | false | Reverse the label position. Works with **rtl**. |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| loader-height | number \| string | 2 | Specifies the height of the loader |
| loading | boolean \| string | false | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color |
| max | number \| string | 100 | Sets the maximum allowed value |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| min | number \| string | 0 | Sets the minimum allowed value |
| persistent-hint | boolean | false | Forces hint to always be visible |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| step | number \| string | 1 | If greater than 0, sets step interval for ticks |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| thumb-color | string | undefined | Sets the thumb and thumb label color |
| thumb-label | boolean \| string | undefined | Show thumb label. If `true` it shows label when using slider. If set to `'always'` it always shows label. |
| thumb-size | number \| string | 32 | Controls the size of the thumb label. |
| tick-labels | array | [] | When provided with Array<string>, will attempt to map the labels to each step in index order |
| tick-size | number \| string | 2 | Controls the size of **ticks** |
| ticks | boolean \| string | false | Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks. |
| track-color | string | undefined | Sets the track's color |
| track-fill-color | string | undefined | Sets the track's fill color |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |
| vertical | boolean | false | Changes slider direction to vertical |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: array | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| end | argument: array | Slider value emitted at the end of slider movement |
| input | argument: array | The updated bound model |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| start | argument: array | Slider value emitted at start of slider movement |
| update:error | argument: boolean | The `error.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Adds an item inside the input and after input content |
| default | - | The default Vue slot. |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |
| prepend | - | Adds an item outside the input and before input content |
| progress | - | Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) |
| thumb-label | value: number \| string | Replaces the content inside the thumb label |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VRating

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| background-color | string | 'accent' | The color used for empty icons |
| clearable | boolean | false | Allows for the component to be cleared. Triggers when the icon containing the current value is clicked. |
| close-delay | number \| string | 0 | Milliseconds to wait before closing component. Only applies to hover and focus events. |
| color | string | 'primary' | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Icons have a smaller size |
| empty-icon | string | '$ratingEmpty' | The icon displayed when empty |
| full-icon | string | '$ratingFull' | The icon displayed when full |
| half-icon | string | '$ratingHalf' | The icon displayed when half (requires **half-increments** prop) |
| half-increments | boolean | false | Allows the selection of half increments |
| hover | boolean | false | Provides visual feedback when hovering over icons |
| icon-label | string | '$vuetify.rating.ariaLabel.icon' | The **aria-label** used for icons |
| large | boolean | false | Makes the component large. |
| length | number \| string | 5 | The amount of ratings to show |
| light | boolean | false | Applies the light theme variant to the component. |
| open-delay | number \| string | 0 | Milliseconds to wait before opening component. Only applies to hover and focus events. |
| readonly | boolean | false | Removes all hover effects and pointer events |
| ripple | boolean \| object | true | Applies the [v-ripple](/directives/ripple) directive. |
| size | number \| string | undefined | Sets the height and width of the component. |
| small | boolean | false | Makes the component small. |
| value | number | 0 | The rating value |
| x-large | boolean | false | Makes the component extra large. |
| x-small | boolean | false | Makes the component extra small. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| input | argument: Number | Emits the rating number when this value changes |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| item | click: (i: number) => void, index: number, isFilled: boolean, isHalfFilled: ?boolean, isHalfHovered: ?boolean, isHovered: boolean, value: number | The slot for rendered items |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VResponsive

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aspect-ratio | string \| number | undefined | Sets a base aspect ratio, calculated as width/height. This will only set a **minimum** height, the component can still grow if it has a lot of content. |
| content-class | string | undefined | Apply a custom class to the responsive content div. |
| height | number \| string | undefined | Sets the height for the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSelect

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | '$dropdown' | Appends an icon to the component, uses the same syntax as `v-icon` |
| append-outer-icon | string | undefined | Appends an icon to the outside the component's input, uses same syntax as `v-icon` |
| attach | any | false | Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. |
| autofocus | boolean | false | Enables autofocus |
| background-color | string | undefined | Changes the background-color of the input |
| cache-items | boolean | false | Keeps a local _unique_ copy of all items that have been passed through the **items** prop. |
| chips | boolean | false | Changes display of selections to chips |
| clear-icon | string | '$clear' | Applied when using **clearable** and the input is dirty |
| clearable | boolean | false | Add input clear functionality, default icon is Material Design Icons **mdi-clear** |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| counter | boolean \| number \| string | undefined | Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. |
| counter-value | function | null |  |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| deletable-chips | boolean | false | Adds a remove icon to selected chips |
| dense | boolean | false | Reduces the input height |
| disable-lookup | boolean | false | Disables keyboard lookup |
| disabled | boolean | false | Disables the input |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| filled | boolean | false | Applies the alternate filled input style |
| flat | boolean | false | Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props |
| full-width | boolean | false | Designates input type as full-width |
| height | number \| string | undefined | Sets the height of the input |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hide-selected | boolean | false | Do not display in the select menu items that are already selected. Also removes checkboxes from the list when multiple |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| item-color | string | 'primary' | Sets color of selected items |
| item-disabled | string \| array \| function | disabled | Set property of **items**'s disabled value |
| item-text | string \| array \| function | text | Set property of **items**'s text value |
| item-value | string \| array \| function | value | Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479) |
| items | array | [] | Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable. |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| loader-height | number \| string | 2 | Specifies the height of the loader |
| loading | boolean \| string | false | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color |
| menu-props | string \| array \| object | {   closeOnClick: false,   closeOnContentClick: false,   disableKeys: true,   openOnClick: false,   maxHeight: 304 } | Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"` |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| multiple | boolean | false | Changes select to multiple. Accepts array for value |
| no-data-text | string | '$vuetify.noDataText' | Display text when there is no data |
| open-on-clear | boolean | false | When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state |
| outlined | boolean | false | Applies the outlined style to the input |
| persistent-hint | boolean | false | Forces hint to always be visible |
| persistent-placeholder | boolean | false | Forces placeholder to always be visible |
| placeholder | string | undefined | Sets the input's placeholder text |
| prefix | string | undefined | Displays prefix text |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| prepend-inner-icon | string | undefined | Prepends an icon inside the component's input, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| return-object | boolean | false | Changes the selection behavior to return the object directly rather than the value specified with **item-value** |
| reverse | boolean | false | Reverses the input orientation |
| rounded | boolean | false | Adds a border radius to the input |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| shaped | boolean | false | Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` |
| single-line | boolean | false | Label does not move on focus/dirty |
| small-chips | boolean | false | Changes display of selections to chips with the **small** property |
| solo | boolean | false | Changes the style of the input |
| solo-inverted | boolean | false | Reduces element opacity until focused |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| suffix | string | undefined | Displays suffix text |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |
| value-comparator | function | (a: any, b: any): boolean | The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts) |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| blur | argument: Event | Emitted when the input is blurred |
| change | argument: any | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:append-outer | argument: Event | Emitted when appended outer icon is clicked |
| click:clear | argument: Event | Emitted when clearable icon clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| click:prepend-inner | argument: Event | Emitted when prepended inner icon is clicked |
| focus | argument: Event | Emitted when component is focused |
| input | argument: any | The updated bound model |
| keydown | argument: KeyboardEvent | Emitted when **any** key is pressed |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |
| update:list-index | argument: number | Emitted when menu item is selected using keyboard arrows |
| update:search-input | argument: string | The `search-input.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Adds an item inside the input and after input content |
| append-item | - | Adds an item after menu content |
| append-outer | - | Adds an item outside the input and after input content |
| counter | props: {"dark":"boolean","light":"boolean","max":"string \| number","value":"string"} |  |
| item | parent: VueComponent, item: object, on: object // Only needed when providing your own v-list-item, attrs: object // Only needed when providing your own v-list-item | Define a custom item appearance |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |
| no-data | - |  |
| prepend | - | Adds an item outside the input and before input content |
| prepend-inner | - | Adds an item inside the input and before input content |
| prepend-item | - | Adds an item before menu content |
| progress | - | Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) |
| selection | parent: VueComponent, item: object, index: number, select: function, selected: boolean, disabled: boolean | Define a custom selection appearance |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSkeletonLoader

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| boilerplate | boolean | false | Remove the loading animation from the skeleton |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| height | number \| string | undefined | Sets the height for the component. |
| light | boolean | false | Applies the light theme variant to the component. |
| loading | boolean | false | Applies a loading animation with a on-hover loading cursor. A value of **false** will only work when there is content in the `default` slot. |
| loading-text | string | '$vuetify.loading' |  |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| tile | boolean | false | Removes the component's border-radius |
| transition | string | undefined | Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| type | string | undefined | A string delimited list of skeleton components to create such as `type="text@3"` or `type="card, list-item"`. Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as **article@3** and **paragraph@2** which will generate 3 _article_ skeletons and 2 _paragraph_ skeletons. Please see below for a list of available pre-defined options. |
| types | object | {} | A custom types object that will be combined with the pre-defined options. For a list of available pre-defined options, see the **type** prop. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSlider

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | undefined | Appends an icon to the component, uses the same syntax as `v-icon` |
| background-color | string | undefined | Changes the background-color of the input |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the input height |
| disabled | boolean | false | Disable the input |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| height | number \| string | undefined | Sets the height of the input |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| inverse-label | boolean | false | Reverse the label position. Works with **rtl**. |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| loader-height | number \| string | 2 | Specifies the height of the loader |
| loading | boolean \| string | false | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color |
| max | number \| string | 100 | Sets the maximum allowed value |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| min | number \| string | 0 | Sets the minimum allowed value |
| persistent-hint | boolean | false | Forces hint to always be visible |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| step | number \| string | 1 | If greater than 0, sets step interval for ticks |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| thumb-color | string | undefined | Sets the thumb and thumb label color |
| thumb-label | boolean \| string | undefined | Show thumb label. If `true` it shows label when using slider. If set to `'always'` it always shows label. |
| thumb-size | number \| string | 32 | Controls the size of the thumb label. |
| tick-labels | array | [] | When provided with Array<string>, will attempt to map the labels to each step in index order |
| tick-size | number \| string | 2 | Controls the size of **ticks** |
| ticks | boolean \| string | false | Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks. |
| track-color | string | undefined | Sets the track's color |
| track-fill-color | string | undefined | Sets the track's fill color |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |
| vertical | boolean | false | Changes slider direction to vertical |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: number | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| end | argument: number | Slider value emitted at the end of slider movement |
| input | argument: number | The updated bound model |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| start | argument: number | Slider value emitted at start of slider movement |
| update:error | argument: boolean | The `error.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Adds an item inside the input and after input content |
| default | - | The default Vue slot. |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |
| prepend | - | Adds an item outside the input and before input content |
| progress | - | Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) |
| thumb-label | value: number \| string | Replaces the content inside the thumb label |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSlideGroup

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | 'v-slide-item--active' | The **active-class** applied to children when they are activated. |
| center-active | boolean | false | Forces the selected component to be centered |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| light | boolean | false | Applies the light theme variant to the component. |
| mandatory | boolean | false | Forces a value to always be selected (if available). |
| max | number \| string | undefined | Sets a maximum number of selections that can be made. |
| mobile-breakpoint | number \| string | - | Sets the designated mobile breakpoint for the component. |
| multiple | boolean | false | Allow multiple selections. The **value** prop must be an _array_. |
| next-icon | string | '$next' | The appended slot when arrows are shown |
| prev-icon | string | '$prev' | The prepended slot when arrows are shown |
| show-arrows | boolean \| string | undefined | Change when the overflow arrow indicators are shown. By **default**, arrows *always* display on Desktop when the container is overflowing. When the container overflows on mobile, arrows are not shown by default. A **show-arrows** value of `true` allows these arrows to show on Mobile if the container overflowing. A value of `desktop` *always* displays arrows on Desktop while a value of `mobile` always displays arrows on Mobile. A value of `always` always displays arrows on Desktop *and* Mobile. A value of `never` always hides the arrows. Find more information on how to customize breakpoint thresholds on the [breakpoints page](/customizing/breakpoints). |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| value | any | undefined | The designated model value for the component. |
| value-comparator | function | null | Apply a custom value comparator function |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: any[] \| any | Emitted when the component value is changed by user interaction |
| click:next | argument: void | Emitted when the next is clicked |
| click:prev | argument: void | Emitted when the prev is clicked |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| next | - | The next slot |
| prev | - | The prev slot |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSlideItem

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | - | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| disabled | boolean | false | Removes the ability to click or target the component. |
| value | any | undefined | The value used when the component is selected in a group. If not provided, the index will be used. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | active: boolean, toggle: Function | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSnackbar

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies **position: absolute** to the component. |
| app | boolean | false | Respects boundaries of—and will not overlap with—other `app` components like `v-app-bar`, `v-navigation-drawer`, and `v-footer`. |
| bottom | boolean | false | Aligns the component towards the bottom. |
| centered | boolean | false | Positions the snackbar in the center of the screen, (x and y axis). |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| content-class | string | undefined | Apply a custom class to the snackbar content |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| height | number \| string | undefined | Sets the height for the component. |
| left | boolean | false | Aligns the component towards the left. |
| light | boolean | false | Applies the light theme variant to the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| multi-line | boolean | false | Gives the snackbar a larger minimum height. |
| outlined | boolean | false | Removes elevation (box-shadow) and adds a *thin* border. |
| right | boolean | false | Aligns the component towards the right. |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| shaped | boolean | false | Applies a large border radius on the top left and bottom right of the card. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| text | boolean | false | Applies the defined **color** to text and a low opacity background of the same. |
| tile | boolean | false | Removes the component's **border-radius**. |
| timeout | number \| string | 5000 | Time (in milliseconds) to wait until snackbar is automatically hidden.  Use `-1` to keep open indefinitely (`0` in version < 2.3 ). It is recommended for this number to be between `4000` and `10000`. Changes to this property will reset the timeout. |
| top | boolean | false | Aligns the content towards the top. |
| transition | boolean \| string | v-snack-transition | Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| value | any | undefined | Controls whether the component is visible or hidden. |
| vertical | boolean | false | Stacks snackbar content on top of the actions (button). |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| input | argument: boolean | The updated bound model |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| action | attrs: object | Used to bind styles to [v-btn](/components/buttons) to match MD2 specification. |
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSparkline

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auto-draw | boolean | false | Trace the length of the line when first rendered |
| auto-draw-duration | number | 2000 | Amount of time (in ms) to run the trace animation |
| auto-draw-easing | string | 'ease' | The easing function to use for the trace animation |
| auto-line-width | boolean | false | Automatically expand bars to use space efficiently |
| color | string | 'primary' | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| fill | boolean | false | Using the **fill** property allows you to better customize the look and feel of your sparkline. |
| gradient | array | [] | An array of colors to use as a linear-gradient |
| gradient-direction | string | 'top' | The direction the gradient should run |
| height | string \| number | 75 | Height of the SVG trendline or bars |
| label-size | number \| string | 7 | The label font size |
| labels | array | [] | An array of string labels that correspond to the same index as its data counterpart |
| line-width | string \| number | 4 | The thickness of the line, in px |
| padding | string \| number | 8 | Low `smooth` or high `line-width` values may result in cropping, increase padding to compensate |
| show-labels | boolean | false | Show labels below each data point |
| smooth | boolean \| number \| string | false | Number of px to use as a corner radius. `true` defaults to 8, `false` is 0 |
| type | string | 'trend' | Choose between a trendline or bars |
| value | array | [] | An array of numbers. |
| width | number \| string | 300 | Width of the SVG trendline or bars |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| label | - | Replaces the default label |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSpeedDial

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies **position: absolute** to the component. |
| bottom | boolean | false | Aligns the component towards the bottom. |
| direction | string | 'top' | Direction in which speed-dial content will show. Possible values are `top`, `bottom`, `left`, `right`. |
| fixed | boolean | false | Applies **position: fixed** to the component. |
| left | boolean | false | Aligns the component towards the left. |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| open-on-hover | boolean | false | Opens speed-dial on hover |
| origin | string | undefined | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |
| right | boolean | false | Aligns the component towards the right. |
| top | boolean | false | Aligns the content towards the top. |
| transition | string | 'scale-transition' | Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| value | any | undefined | Controls whether the component is visible or hidden. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| activator | - | When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation |
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VStepper

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| alt-labels | boolean | false | Places the labels beneath the step |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| flat | boolean | false | Removes the stepper's elevation. |
| height | number \| string | undefined | Sets the height for the component. |
| light | boolean | false | Applies the light theme variant to the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| non-linear | boolean | false | Allow user to jump to any step |
| outlined | boolean | false | Removes elevation (box-shadow) and adds a *thin* border. |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| shaped | boolean | false | Applies a large border radius on the top left and bottom right of the card. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| tile | boolean | false | Removes the component's **border-radius**. |
| value | any | undefined | The designated model value for the component. |
| vertical | boolean | false | Display steps vertically |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: number | Emitted when step is changed by user interaction |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VStepperContent

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| step | number \| string | undefined | Sets step to associate the content to |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VStepperStep

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | 'primary' | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| complete | boolean | false | Marks step as complete |
| complete-icon | string | '$complete' | Icon to display when step is marked as completed |
| edit-icon | string | '$edit' | Icon to display when step is editable |
| editable | boolean | false | Marks step as editable |
| error-icon | string | '$error' | Icon to display when step has an error |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| step | number \| string | undefined | Content to display inside step circle |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| click | argument: MouseEvent | Emitted when component is clicked |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VStepperHeader

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VStepperItems

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSubheader

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| inset | boolean | false | Adds indentation (72px) |
| light | boolean | false | Applies the light theme variant to the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSwitch

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | undefined | Appends an icon to the component, uses the same syntax as `v-icon` |
| background-color | string | undefined | Changes the background-color of the input |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the input height |
| disabled | boolean | false | Disable the input |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| false-value | any | undefined | Sets value for falsy state |
| flat | boolean | false | Display component without elevation. Default elevation for thumb is 4dp, `flat` resets it |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| input-value | any | undefined | The **v-model** bound value |
| inset | boolean | false | Enlarge the `v-switch` track to encompass the thumb |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| loading | boolean \| string | false | Displays circular progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it's supported by the component) or the primary color |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| multiple | boolean | false | Changes expected model to an array |
| persistent-hint | boolean | false | Forces hint to always be visible |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| ripple | boolean \| object | true | Applies the [v-ripple](/directives/ripple) directive. |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| true-value | any | undefined | Sets value for truthy state |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |
| value-comparator | function | null | Apply a custom value comparator function |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: any | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked. **Note:** the **change** event should be used instead of **click** when monitoring state change |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSystemBar

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies **position: absolute** to the component. |
| app | boolean | false | Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| fixed | boolean | false | Applies **position: fixed** to the component. |
| height | number \| string | undefined | Sets the height for the component. |
| light | boolean | false | Applies the light theme variant to the component. |
| lights-out | boolean | false | Reduces the system bar opacity. |
| window | boolean | false | Increases the system bar height to 32px (24px default). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTabs

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | undefined | The **active-class** applied to children when they are activated. |
| align-with-title | boolean | false | Make `v-tabs` lined up with the toolbar title |
| background-color | string | undefined | Changes the background color of the component. |
| center-active | boolean | false | Forces the selected tab to be centered |
| centered | boolean | false | Centers the tabs |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| fixed-tabs | boolean | false | `v-tabs-item` min-width 160px, max-width 360px |
| grow | boolean | false | Force `v-tab`'s to take up all available space |
| height | number \| string | undefined | Sets the height of the tabs bar |
| hide-slider | boolean | false | Hide's the generated `v-tabs-slider` |
| icons-and-text | boolean | false | Will stack icon and text vertically |
| light | boolean | false | Applies the light theme variant to the component. |
| mobile-breakpoint | string \| number | undefined | Sets the designated mobile breakpoint for the component. |
| next-icon | string | '$next' | Right pagination icon |
| optional | boolean | false | Does not require an active item. Useful when using `v-tab` as a `router-link` |
| prev-icon | string | '$prev' | Left pagination icon |
| right | boolean | false | Aligns tabs to the right |
| show-arrows | boolean \| string | undefined | Show pagination arrows if the tab items overflow their container. For mobile devices, arrows will only display when using this prop. |
| slider-color | string | undefined | Changes the background color of an auto-generated `v-tabs-slider` |
| slider-size | number \| string | 2 | Changes the size of the slider, **height** for horizontal, **width** for vertical. |
| value | any | undefined | The designated model value for the component. |
| vertical | boolean | false | Stacks tabs on top of each other vertically. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: number \| string | Emitted when tab is changed by user interaction. Returns a string if **href** attribute is set and number if it is not. |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTab

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | - | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| append | boolean | false | Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation. |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | Removes the ability to click or target the component. |
| exact | boolean | false | Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation. |
| exact-active-class | string | undefined | Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation. |
| exact-path | boolean | false | Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation. |
| href | string \| object | undefined | Designates the component as anchor and applies the **href** attribute. |
| light | boolean | false | Applies the light theme variant to the component. |
| link | boolean | false | Designates that the component is a link. This is automatic when using the **href** or **to** prop. |
| nuxt | boolean | false | Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/). |
| replace | boolean | false | Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation. |
| ripple | boolean \| object | true | Applies the [v-ripple](/directives/ripple) directive. |
| tab-value | any | undefined |  |
| tag | string | undefined | Specify a custom tag used on the root element. |
| target | string | undefined | Designates the target attribute. This should only be applied when using the **href** prop. |
| to | string \| object | undefined | Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: void | Emitted when tab becomes active |
| click | argument: ClickEvent | Emitted when the component is clicked |
| keydown | argument: KeyboardEvent | Emitted when **enter** key is pressed |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTabItem

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | - | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| disabled | boolean | false | Removes the ability to click or target the component. |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| id | string | undefined | Sets the DOM id on the component |
| reverse-transition | boolean \| string | undefined | Sets the reverse transition |
| transition | boolean \| string | undefined | The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| value | any | undefined | Sets the value of the tab. If not provided, the index will be used. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTabsItems

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | 'v-window-item--active' | The **active-class** applied to children when they are activated. |
| continuous | boolean | false | If `true`, window will "wrap around" from the last item to the first, and from the first item to the last |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| light | boolean | false | Applies the light theme variant to the component. |
| mandatory | boolean | false | Forces a value to always be selected (if available). |
| max | number \| string | undefined | Sets a maximum number of selections that can be made. |
| multiple | boolean | false | Allow multiple selections. The **value** prop must be an _array_. |
| next-icon | boolean \| string | $next | Icon used for the "next" button if `show-arrows` is `true` |
| prev-icon | boolean \| string | $prev | Icon used for the "prev" button if `show-arrows` is `true` |
| reverse | boolean | false | Reverse the normal transition direction. |
| show-arrows | boolean | false | Display the "next" and "prev" buttons |
| show-arrows-on-hover | boolean | false | Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| touch | object | undefined | Provide a custom **left** and **right** function when swiped left or right. |
| touchless | boolean | false | Disable touch support. |
| value | any | undefined | The designated model value for the component. |
| value-comparator | function | null | Apply a custom value comparator function |
| vertical | boolean | false | Uses a vertical transition when changing windows. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: string | Emitted when user swipes between tabs. |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTabsSlider

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTextarea

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | undefined | Appends an icon to the component, uses the same syntax as `v-icon` |
| append-outer-icon | string | undefined | Appends an icon to the outside the component's input, uses same syntax as `v-icon` |
| auto-grow | boolean | false | Automatically grow the textarea depending on amount of text |
| autofocus | boolean | false | Enables autofocus |
| background-color | string | undefined | Changes the background-color of the input |
| clear-icon | string | '$clear' | Applied when using **clearable** and the input is dirty |
| clearable | boolean | false | Add input clear functionality, default icon is Material Design Icons **mdi-clear** |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| counter | boolean \| number \| string | undefined | Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. |
| counter-value | function | null |  |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the input height |
| disabled | boolean | false | Disable the input |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| filled | boolean | false | Applies the alternate filled input style |
| flat | boolean | false | Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props |
| full-width | boolean | false | Designates input type as full-width |
| height | number \| string | undefined | Sets the height of the input |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| loader-height | number \| string | 2 | Specifies the height of the loader |
| loading | boolean \| string | false | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| no-resize | boolean | false | Remove resize handle |
| outlined | boolean | false | Applies the outlined style to the input |
| persistent-hint | boolean | false | Forces hint to always be visible |
| persistent-placeholder | boolean | false | Forces placeholder to always be visible |
| placeholder | string | undefined | Sets the input's placeholder text |
| prefix | string | undefined | Displays prefix text |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| prepend-inner-icon | string | undefined | Prepends an icon inside the component's input, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| reverse | boolean | false | Reverses the input orientation |
| rounded | boolean | false | Adds a border radius to the input |
| row-height | number \| string | 24 | Height value for each row. Requires the use of the **auto-grow** prop. |
| rows | number \| string | 5 | Default row count |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| shaped | boolean | false | Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` |
| single-line | boolean | false | Label does not move on focus/dirty |
| solo | boolean | false | Changes the style of the input |
| solo-inverted | boolean | false | Reduces element opacity until focused |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| suffix | string | undefined | Displays suffix text |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| blur | argument: Event | Emitted when the input is blurred |
| change | argument: any | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:append-outer | argument: Event | Emitted when appended outer icon is clicked |
| click:clear | argument: Event | Emitted when clearable icon clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| click:prepend-inner | argument: Event | Emitted when prepended inner icon is clicked |
| focus | argument: Event | Emitted when component is focused |
| input | argument: any | The updated bound model |
| keydown | argument: KeyboardEvent | Emitted when **any** key is pressed |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Adds an item inside the input and after input content |
| append-outer | - | Adds an item outside the input and after input content |
| counter | props: {"dark":"boolean","light":"boolean","max":"string \| number","value":"string"} |  |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |
| prepend | - | Adds an item outside the input and before input content |
| prepend-inner | - | Adds an item inside the input and before input content |
| progress | - | Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTextField

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| append-icon | string | undefined | Appends an icon to the component, uses the same syntax as `v-icon` |
| append-outer-icon | string | undefined | Appends an icon to the outside the component's input, uses same syntax as `v-icon` |
| autofocus | boolean | false | Enables autofocus |
| background-color | string | undefined | Changes the background-color of the input |
| clear-icon | string | '$clear' | Applied when using **clearable** and the input is dirty |
| clearable | boolean | false | Add input clear functionality, default icon is Material Design Icons **mdi-clear** |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| counter | boolean \| number \| string | undefined | Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. |
| counter-value | function | null |  |
| dark | boolean | false | Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the input height |
| disabled | boolean | false | Disable the input |
| error | boolean | false | Puts the input in a manual error state |
| error-count | number \| string | 1 | The total number of errors that should display at once |
| error-messages | string \| array | [] | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation |
| filled | boolean | false | Applies the alternate filled input style |
| flat | boolean | false | Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props |
| full-width | boolean | false | Designates input type as full-width |
| height | number \| string | undefined | Sets the height of the input |
| hide-details | boolean \| string | undefined | Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display |
| hide-spin-buttons | boolean | false | Hides spin buttons on the input when type is set to `number`. |
| hint | string | undefined | Hint text |
| id | string | undefined | Sets the DOM id on the component |
| label | string | - | Sets input label |
| light | boolean | false | Applies the light theme variant to the component. |
| loader-height | number \| string | 2 | Specifies the height of the loader |
| loading | boolean \| string | false | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color |
| messages | string \| array | [] | Displays a list of messages or message if using a string |
| outlined | boolean | false | Applies the outlined style to the input |
| persistent-hint | boolean | false | Forces hint to always be visible |
| persistent-placeholder | boolean | false | Forces placeholder to always be visible |
| placeholder | string | undefined | Sets the input’s placeholder text |
| prefix | string | undefined | Displays prefix text |
| prepend-icon | string | undefined | Prepends an icon to the component, uses the same syntax as `v-icon` |
| prepend-inner-icon | string | undefined | Prepends an icon inside the component's input, uses the same syntax as `v-icon` |
| readonly | boolean | false | Puts input in readonly state |
| reverse | boolean | false | Reverses the input orientation |
| rounded | boolean | false | Adds a border radius to the input |
| rules | array | [] | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` |
| shaped | boolean | false | Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` |
| single-line | boolean | false | Label does not move on focus/dirty |
| solo | boolean | false | Changes the style of the input |
| solo-inverted | boolean | false | Reduces element opacity until focused |
| success | boolean | false | Puts the input in a manual success state |
| success-messages | string \| array | [] | Puts the input in a success state and passes through custom success messages. |
| suffix | string | undefined | Displays suffix text |
| type | string | 'text' | Sets input type |
| validate-on-blur | boolean | false | Delays validation until blur event |
| value | any | - | The input's value |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| blur | argument: Event | Emitted when the input is blurred |
| change | argument: any | Emitted when the input is changed by user interaction |
| click | argument: MouseEvent | Emitted when input is clicked |
| click:append | argument: Event | Emitted when appended icon is clicked |
| click:append-outer | argument: Event | Emitted when appended outer icon is clicked |
| click:clear | argument: Event | Emitted when clearable icon clicked |
| click:prepend | argument: Event | Emitted when prepended icon is clicked |
| click:prepend-inner | argument: Event | Emitted when prepended inner icon is clicked |
| focus | argument: Event | Emitted when component is focused |
| input | argument: any | The updated bound model |
| keydown | argument: KeyboardEvent | Emitted when **any** key is pressed |
| mousedown | argument: MouseEvent | Emitted when click is pressed |
| mouseup | argument: MouseEvent | Emitted when click is released |
| update:error | argument: boolean | The `error.sync` event |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | - | Adds an item inside the input and after input content |
| append-outer | - | Adds an item outside the input and after input content |
| counter | props: {"dark":"boolean","light":"boolean","max":"string \| number","value":"string"} |  |
| label | - | Replaces the default label |
| message | key: number, // the messages index, message: string, // the message |  |
| prepend | - | Adds an item outside the input and before input content |
| prepend-inner | - | Adds an item inside the input and before input content |
| progress | - | Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False) |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VThemeProvider

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| light | boolean | false | Applies the light theme variant to the component. |
| root | boolean | false | Use the current value of `$vuetify.theme.dark` as opposed to the provided one. |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTimeline

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| align-top | boolean | false | Align caret and dot of timeline items to the top |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Hide opposite slot content, and position all items to one side of timeline |
| light | boolean | false | Applies the light theme variant to the component. |
| reverse | boolean | false | Reverse direction of timeline items |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTimelineItem

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | 'primary' | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| fill-dot | boolean | false | Remove padding from dot container |
| hide-dot | boolean | false | Hide display of timeline dot |
| icon | string | undefined | Specify icon for dot container |
| icon-color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| large | boolean | false | Large size dot |
| left | boolean | false | Explicitly set the item to a left orientation |
| light | boolean | false | Applies the light theme variant to the component. |
| right | boolean | false | Explicitly set the item to a right orientation |
| small | boolean | false | Small size dot |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| icon | - | Used to customize the icon inside the timeline item's dot |
| opposite | - | Used to customize the opposite side of timeline items |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTimePicker

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-picker | string | undefined | Determines which picker is being displayed. Allowed values: `'HOUR'`, `'MINUTE'`, `'SECOND'` |
| allowed-hours | function \| array | undefined | Restricts which hours can be selected |
| allowed-minutes | function \| array | undefined | Restricts which minutes can be selected |
| allowed-seconds | function \| array | undefined | Restricts which seconds can be selected |
| ampm-in-title | boolean | false | Place AM/PM switch in title, not near the clock. |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| disabled | boolean | false | disables picker |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| flat | boolean | false | Removes  elevation |
| format | string | 'ampm' | Defines the format of a time displayed in picker. Available options are `ampm` and `24hr`. |
| full-width | boolean | false | Forces 100% width |
| header-color | string | undefined | Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color |
| landscape | boolean | false | Orients picker horizontal |
| light | boolean | false | Applies the light theme variant to the component. |
| max | string | undefined | Maximum allowed time |
| min | string | undefined | Minimum allowed time |
| no-title | boolean | false | Hide the picker title |
| readonly | boolean | false | Puts picker in readonly state |
| scrollable | boolean | false | Allows changing hour/minute with mouse scroll |
| use-seconds | boolean | false | Toggles the use of seconds in picker |
| value | any | undefined | Time picker model (ISO 8601 format, 24hr hh:mm) |
| width | number \| string | 290 | Width of the picker |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: string | Emitted when the time selection is done (when user changes the minute for HH:MM picker and the second for HH:MM:SS picker |
| click:hour | argument: string | Emitted when user selects the hour |
| click:minute | argument: string | Emitted when user selects the minute |
| click:second | argument: string | Emitted when user selects the second |
| input | argument: string | The updated bound model |
| update:active-picker | argument: string | The `.sync` event for `active-picker` prop |
| update:period | argument: string | Emitted when user clicks the AM/PM button |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | Displayed below the clock, can be used for example for adding action button (`OK` and `Cancel`) |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VToolbar

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies position: absolute to the component. |
| bottom | boolean | false | Aligns the component towards the bottom. |
| collapse | boolean | false | Puts the toolbar into a collapsed state reducing its maximum width. |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop). |
| elevation | number \| string | undefined | Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation). |
| extended | boolean | false | Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**. |
| extension-height | number \| string | 48 | Specify an explicit height for the `extension` slot.  |
| flat | boolean | false | Removes the toolbar's box-shadow. |
| floating | boolean | false | Applies **display: inline-flex** to the component. |
| height | number \| string | undefined | Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc. |
| light | boolean | false | Applies the light theme variant to the component. |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| outlined | boolean | false | Removes elevation (box-shadow) and adds a *thin* border. |
| prominent | boolean | false | Increases the height of the toolbar content to 128px. |
| rounded | boolean \| string | undefined | Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius). |
| shaped | boolean | false | Applies a large border radius on the top left and bottom right of the card. |
| short | boolean | false | Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop). |
| src | string \| object | undefined | Specifies a [v-img](/components/images) as the component's background. |
| tag | string | 'header' | Specify a custom tag used on the root element. |
| tile | boolean | false | Removes the component's **border-radius**. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| extension | - | Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead. |
| img | props: { height: string, src: string \| srcObject } | Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VToolbarItems

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VToolbarTitle

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | 'div' | Specify a custom tag used on the root element. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTooltip

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| absolute | boolean | false | Applies **position: absolute** to the component. |
| activator | any | undefined | Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node. |
| allow-overflow | boolean | false | Removes overflow re-positioning for the content |
| attach | any | false | Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default. |
| bottom | boolean | false | Aligns the component towards the bottom. |
| close-delay | number \| string | 0 | Delay (in ms) after which menu closes (when open-on-hover prop is set to true) |
| color | string | undefined | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). |
| content-class | string | undefined | Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component. |
| disabled | boolean | false | Disables the tooltip |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| internal-activator | boolean | false | Designates whether to use an internal activator |
| left | boolean | false | Aligns the component towards the left. |
| max-width | number \| string | auto | Sets the maximum width for the content |
| min-width | number \| string | undefined | Sets the minimum width for the content |
| nudge-bottom | number \| string | 0 | Nudge the content to the bottom |
| nudge-left | number \| string | 0 | Nudge the content to the left |
| nudge-right | number \| string | 0 | Nudge the content to the right |
| nudge-top | number \| string | 0 | Nudge the content to the top |
| nudge-width | number \| string | 0 | Nudge the content width |
| offset-overflow | boolean | false | Causes the component to flip to the opposite side when repositioned due to overflow |
| open-delay | number \| string | 0 | Delay (in ms) after which tooltip opens (when `open-on-hover` prop is set to **true**) |
| open-on-click | boolean | true | Designates whether the tooltip should open on activator click |
| open-on-focus | boolean | true |  |
| open-on-hover | boolean | true | Designates whether the tooltip should open on activator hover |
| position-x | number | undefined | Used to position the content when not using an activator slot |
| position-y | number | undefined | Used to position the content when not using an activator slot |
| right | boolean | false | Aligns the component towards the right. |
| tag | string | 'span' | Specifies a custom tag for the activator wrapper |
| top | boolean | false | Aligns the content towards the top. |
| transition | string | undefined | Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| value | any | undefined | Controls whether the component is visible or hidden. |
| z-index | number \| string | undefined | The z-index used for the component |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| activator | attrs: { role: string, aria-haspopup: boolean, aria-expanded: string }, on: { [eventName]: eventHandler }, value: boolean | When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation |
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTreeview

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| activatable | boolean | false | Allows user to mark a node as active by clicking on it |
| active | array | [] | Syncable prop that allows one to control which nodes are active. The array consists of the `item-key` of each active item. |
| active-class | string | 'v-treeview-node--active' | The class applied to the node when active |
| color | string | 'primary' | Sets the color of the active node |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| dense | boolean | false | Decreases the height of the items |
| disable-per-node | boolean | false | Prevents disabling children nodes |
| disabled | boolean | false | Disables selection for all nodes |
| expand-icon | string | '$subgroup' | Icon used to indicate that a node can be expanded |
| filter | function | null | Custom item filtering function. By default it will use case-insensitive search in item's label. |
| hoverable | boolean | false | Applies a hover class when mousing over nodes |
| indeterminate-icon | string | '$checkboxIndeterminate' | Icon used when node is in an indeterminate state. Only visible when `selectable` is `true`. |
| item-children | string | 'children' | Property on supplied `items` that contains its children |
| item-disabled | string | 'disabled' | Property on supplied `items` that contains the disabled state of the item |
| item-key | string | 'id' | Property on supplied `items` used to keep track of node state. The value of this property has to be unique among all items. |
| item-text | string | 'name' | Property on supplied `items` that contains its label text |
| items | array | [] | An array of items used to build the treeview |
| light | boolean | false | Applies the light theme variant to the component. |
| load-children | function | null | A function used when dynamically loading children. If this prop is set, then the supplied function will be run if expanding an item that has a `item-children` property that is an empty array. Supports returning a Promise. |
| loading-icon | string | '$loading' | Icon used when node is in a loading state |
| multiple-active | boolean | false | When `true`, allows user to have multiple active nodes at the same time |
| off-icon | string | '$checkboxOff' | Icon used when node is not selected. Only visible when `selectable` is `true`. |
| on-icon | string | '$checkboxOn' | Icon used when leaf node is selected or when a branch node is fully selected. Only visible when `selectable` is `true`. |
| open | array | [] | Syncable prop that allows one to control which nodes are open. The array consists of the `item-key` of each open item. |
| open-all | boolean | false | When `true` will cause all branch nodes to be opened when component is mounted |
| open-on-click | boolean | false | When `true` will cause nodes to be opened by clicking anywhere on it, instead of only opening by clicking on expand icon. When using this prop with `activatable` you will be unable to mark nodes with children as active. |
| return-object | boolean | false | When `true` will make `v-model`, `active.sync` and `open.sync` return the complete object instead of just the key |
| rounded | boolean | false | Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `shaped` prop. |
| search | string | undefined | The search model for filtering results |
| selectable | boolean | false | Will render a checkbox next to each node allowing them to be selected |
| selected-color | string | 'accent' | The color of the selection checkbox |
| selection-type | string | 'leaf' | Controls how the treeview selects nodes. There are two modes available: 'leaf' and 'independent' |
| shaped | boolean | false | Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `rounded` prop. |
| transition | boolean | false | Applies a transition when nodes are opened and closed |
| value | array | [] | Allows one to control which nodes are selected. The array consists of the `item-key` of each selected item. Is used with `@input` event to allow for `v-model` binding. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| input | argument: array | Emits the array of selected items when this value changes |
| update:active | argument: array | Emits the array of active items when this value changes |
| update:open | argument: array | Emits the array of open items when this value changes |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| append | item: any, leaf: boolean, selected: boolean, indeterminate: boolean, active: boolean, open: boolean | Appends content after label |
| label | item: any, leaf: boolean, selected: boolean, indeterminate: boolean, active: boolean, open: boolean | Label content |
| prepend | item: any, leaf: boolean, selected: boolean, indeterminate: boolean, active: boolean, open: boolean | Prepends content before label |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VVirtualScroll

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bench | number \| string | 0 | The number of items **outside** the user view that are rendered (even if they are **not** viewable); to help prevent empty white space when scrolling *fast*. |
| height | number \| string | undefined | Height of the component as a css value |
| item-height | number \| string | undefined | Height in pixels of the items to display |
| items | array | [] | The array of items to display |
| max-height | number \| string | undefined | Sets the maximum height for the component. |
| max-width | number \| string | undefined | Sets the maximum width for the component. |
| min-height | number \| string | undefined | Sets the minimum height for the component. |
| min-width | number \| string | undefined | Sets the minimum width for the component. |
| width | number \| string | undefined | Sets the width for the component. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | index: number, item: any | Default slot to customize items appearance |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VWindow

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | 'v-window-item--active' | The **active-class** applied to children when they are activated. |
| continuous | boolean | false | If `true`, window will "wrap around" from the last item to the first, and from the first item to the last |
| dark | boolean | false | Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). |
| light | boolean | false | Applies the light theme variant to the component. |
| next-icon | boolean \| string | $next | Icon used for the "next" button if `show-arrows` is `true` |
| prev-icon | boolean \| string | $prev | Icon used for the "prev" button if `show-arrows` is `true` |
| reverse | boolean | false | Reverse the normal transition direction. |
| show-arrows | boolean | false | Display the "next" and "prev" buttons |
| show-arrows-on-hover | boolean | false | Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set. |
| tag | string | 'div' | Specify a custom tag used on the root element. |
| touch | object | undefined | Provide a custom **left** and **right** function when swiped left or right. |
| touchless | boolean | false | Disable touch support. |
| value | any | undefined | The designated model value for the component. |
| value-comparator | function | null | Apply a custom value comparator function |
| vertical | boolean | false | Uses a vertical transition when changing windows. |

#### Events

| Name | Arguments | Description |
|------|-----------|-------------|
| change | argument: number | Emitted when the component value is changed by user interaction |

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |
| next | attrs: { aria-label: string }, on: { click: eventHandler } | Slot displaying the arrow switching to the next item |
| prev | attrs: { aria-label: string }, on: { click: eventHandler } | Slot displaying the arrow switching to the previous item |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VWindowItem

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active-class | string | - | Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation. |
| disabled | boolean | false | Prevents the item from becoming active when using the "next" and "prev" buttons or the `toggle` method |
| eager | boolean | false | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. |
| reverse-transition | boolean \| string | undefined | Sets the reverse transition |
| transition | boolean \| string | undefined | The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own. |
| value | any | undefined | The value used when the component is selected in a group. If not provided, the index will be used. |

#### Events

No events available.

#### Slots

| Name | Props | Description |
|------|-------|-------------|
| default | - | The default Vue slot. |

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCarouselTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VCarouselReverseTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTabTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VTabReverseTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VMenuTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VFabTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | 'out-in' | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'center center' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VDialogTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VDialogBottomTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VDialogTopTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VFadeTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VScaleTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VScrollXTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VScrollXReverseTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VScrollYTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VScrollYReverseTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSlideXTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSlideXReverseTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSlideYTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VSlideYReverseTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | false | Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group) |
| hide-on-leave | boolean | false | Hides the leaving element (no exit animation) |
| leave-absolute | boolean | false | Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)) |
| mode | string | undefined | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |
| origin | string | 'top center 0' | Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VExpandTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mode | string | 'in-out' | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

### VExpandXTransition

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mode | string | 'in-out' | Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition). |

#### Events

No events available.

#### Slots

No slots available.

#### Methods

Methods information is not available in web-types format. Please refer to the component source code or documentation.

---

## Directives

### v-mutate

#### Argument

No description available.

#### Modifiers

| Name | Description |
|------|-------------|
| once | Will only invoke the provided user callback once, then directive will be unbound. |
| attr | Sets the value of [attributes](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributes) to true. |
| char | Sets the value of [characterData](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/characterData) to true. |
| child | Sets the value of [childList](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/childList) to true. |
| sub | Sets the value of [subtree](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe#Parameters) to true. |

#### Value

Type: any

---

### v-intersect

#### Argument

No description available.

#### Modifiers

| Name | Description |
|------|-------------|
| once | Will only invoke the provided user callback on mount and once intersected. If using the **quiet** modifier will only invoke once. |
| quiet | Will not automatically invoke the provided callback on bind. |

#### Value

Type: any

---

### v-ripple

#### Argument

No description available.

#### Value

Type: any

---

### v-resize

#### Argument

No description available.

#### Modifiers

| Name | Description |
|------|-------------|
| quiet | Will **not** automatically invoke the provided callback on bind. |

#### Value

Type: any

---

### v-scroll

#### Argument

No description available.

#### Modifiers

| Name | Description |
|------|-------------|
| #target | The target watched for scroll changes. Defaults to window but can be changed to any valid id selector. |
| self | Binds to the element that the the directive is attached. |

#### Value

Type: any

---

### v-touch

#### Argument

No description available.

#### Value

Type: any

---

### v-click-outside

#### Argument

No description available.

#### Value

Type: any

---
