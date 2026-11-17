---
title: 메뉴, 키, 마우스
summary: MarkupCraft 자체 도구 모음, PDF 검토 메뉴 막대 또는 리본 중에서 고르고, 어떤 도구에든 직접 키를 지정하며, 도구를 메뉴 사이로 옮기고, 휠과 마우스 버튼의 동작을 설정합니다.
keywords: 메뉴 스타일, 메뉴, 메뉴 막대, 도구 모음, 리본, 탭, PDF 검토, 키보드 단축키, 핫키, 키, 사용자 지정, 키 재지정, 마우스, 휠, 반전, 확대/축소 방향, 가운데 버튼, 오른쪽 버튼, 초점 이동, 내보내기, 가져오기, 전환, 익숙한 방식
from: 081438a6
---

MarkupCraft의 도구는 어떤 방법으로 찾아가든 같습니다. **메뉴 스타일**은 화면에서 도구가 놓이는 위치, 그곳에서의 이름, 그리고 그 도구를 고르는 키만 결정합니다. {{ui:Settings}}({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}에서 하나를 선택합니다. 변경은 즉시 적용되며 이 브라우저가 기억합니다.

## 세 가지 스타일

| 스타일 | 제공되는 내용 |
|---|---|
| {{ui:MarkupCraft}} | MarkupCraft 자체 도구 모음(파일, 선택, 그리기, 수정, 주석 달기, 측정, 편집)과 한 글자 키: {{key:V}} 선택, {{key:H}} 초점 이동, {{key:P}} 펜, {{key:I}} 형광펜, {{key:L}} 선, {{key:A}} 화살표, {{key:R}} 사각형, {{key:E}} 타원, {{key:C}} 구름, {{key:K}} 콜아웃, {{key:T}} 문자, {{key:N}} 비고, {{key:S}} 스탬프, {{key:M}} 길이, {{key:Q}} 면적, {{key:U}} 수량. 기본 시작 스타일입니다. |
| {{ui:PDF review}} | 메뉴 막대({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Document}}, {{ui:Markup}}, {{ui:Measure}}, {{ui:Review}}, {{ui:Window}}) 아래에 검토 도구 줄이 있고, 키는 PDF 검토 프로그램이 설정하는 방식대로 배치됩니다: {{key:V}} 선택, {{key:Shift+V}} 초점 이동, {{key:H}} 형광펜, {{key:Q}} 콜아웃, {{key:N}} 폴리곤, {{key:Shift+N}} 폴리선, {{key:Shift+T}} 비고, {{key:Shift+A}} 호. 측정은 {{key:Alt+Shift}} 조합입니다: {{key:Alt+Shift+K}} 보정, {{key:Alt+Shift+L}} 길이, {{key:Alt+Shift+G}} 각도, {{key:Alt+Shift+A}} 면적, {{key:Alt+Shift+C}} 수량. {{key:Alt+L}} 키는 마크업 목록을 엽니다. 가운데 버튼은 초점을 이동하고, 오른쪽 클릭은 이동하지 않습니다. |
| {{ui:Ribbon}} | 작업에 맞게 이름 붙인 탭: {{ui:Mark up}}(선택, 그리기, 구름, 콜아웃, 문자, 비고, 스탬프), {{ui:Measure}}, {{ui:Edit}}, {{ui:Review}}(마크업 목록과 내보내기, BCF 이슈, 펀치 리스트, 현장 기록, 도구 상자, 비교), {{ui:Pages}}와 {{ui:View}}, 그리고 파일 및 열기, 저장, 실행 취소, 다시 실행을 위한 빠른 버튼. 도구는 MarkupCraft 자체의 한 글자 키를 유지합니다. 열려 있지 않은 패널의 버튼을 누르면 그 패널을 먼저 엽니다. |

모든 스타일은 {{key:Mod}} 키 조합을 유지합니다: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}}({{ui:Fit page}}), {{key:Mod+9}}({{ui:Fit width}}). {{key:PageUp}} 및 {{key:PageDown}} 키는 시트를 바꿉니다.

:::tip
선택한 스타일에 속하지 않는 MarkupCraft 자체 배치의 키는 아무 동작도 하지 않으며, 상태 표시줄에 도구가 옮겨진 위치가 표시됩니다("PDF 검토에서 콜아웃은 Q"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} 키와 화살표 키는 항상 원래 의미를 유지합니다. 문자 상자, 콜아웃 또는 비고에 입력하는 동안에는 모든 키가 입력한 문자이며, 그리는 중 입력한 숫자는 여전히 길이 입력 상자를 엽니다.
:::

## 나만의 설정 만들기

1. 원하는 것과 가장 가까운 스타일을 고른 다음 {{ui:Customize…}} 항목을 클릭합니다.
2. {{ui:Keys and menus}}에서 도구를 찾습니다(검색 상자가 도움이 됩니다). {{ui:Add a key}} 항목을 선택한 다음 키를 누릅니다. 두 글자 키라면 두 키를 연달아 누릅니다. 키를 클릭하면 그 키가 제거됩니다.
3. 메뉴 막대를 쓸 때 {{ui:Where it sits}} 항목은 도구를 다른 메뉴나 {{ui:Keys only}} 항목으로 옮깁니다.
4. {{ui:Mouse}}에서 휠과 시트의 초점을 이동하는 버튼을 설정합니다.
5. 이름을 붙이고 {{ui:Save}} 버튼을 클릭합니다.

기본 제공 스타일을 저장하면 자신만의 사본("내 PDF 검토")이 만들어지며, 기본 제공 스타일은 바뀌지 않습니다. 키 하나가 도구 두 개에 지정되면 빨간색으로 표시되며, 저장하기 전에 고쳐야 합니다.

## 마우스

- **마우스 휠**: {{ui:Scroll up zooms in}}(기본값) 또는 {{ui:Scroll up zooms out}}, 그리고 속도. 트랙패드 핀치는 손가락이 움직이는 방향 그대로 항상 확대/축소합니다.
- **시트 초점 이동 버튼**: 가운데 버튼, 오른쪽 버튼 또는 둘 다. {{key:Space}} 키를 누른 채 드래그하는 방식과 {{ui:Pan}} 도구는 항상 초점을 이동합니다. 왼쪽 버튼은 그 외에는 그리기와 선택에 쓰이므로, 여기서 체크해도 아무것도 바뀌지 않습니다.
- MarkupCraft에는 3D 보기가 없으므로 3D 버튼은 여기서 아무 동작도 하지 않습니다.

## 설정 가져가기

{{ui:Export}} 항목은 사용 중인 스타일을 작은 `.ccinput.json` 파일로 저장합니다. {{ui:Import…}} 항목은 다른 컴퓨터나 동료에게서 받은 파일을 추가합니다. 가져온 파일은 MarkupCraft 자체 도구만 가리킬 수 있으며, 그 밖의 것은 빠지고 상태 표시줄에 그 개수가 표시됩니다. {{ui:Delete this style}} 항목은 내 스타일 하나를 삭제합니다.

:::note
이 설정은 이 브라우저에만 남습니다. 스타일 카드 아래의 {{ui:Use this style in every app}} 옵션을 켜면 모든 앱이 맞는 스타일로 열립니다. {{ui:PDF review}}는 다른 앱의 메뉴 막대 스타일과, {{ui:Ribbon}}은 다른 앱의 리본과, MarkupCraft 자체 도구 모음은 다른 앱의 도구 모음과 짝을 이룹니다. 맞는 스타일이 없는 앱은 자기 스타일을 유지합니다.
:::

:::tip
{{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}({{ui:Ribbon and project browser}}, {{ui:Toolbox and info box}})의 작업 공간 배치는 리본을 {{ui:Ribbon}} 스타일의 탭으로, 도구 상자를 MarkupCraft 도구 모음으로 구성합니다. 그래서 그 안에서도 모든 도구가 같은 방식으로 작동합니다.
:::

관련 항목: [키보드와 마우스](topic:keyboard) · [MarkupCraft 설정](topic:settings) · [다른 마크업 소프트웨어에서 옮겨 오기](topic:coming-from)
