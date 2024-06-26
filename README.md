# Datepicker

The Datepicker project provides a set of components for selecting and managing dates in UI applications. It includes three main components: DatePicker, RangeCalendar, and CalendarTodo.

## Installation

You can install the Datepicker package using either Yarn or npm:

```sh
yarn add datepicker_front
```

```sh
npm install --save datepicker-front
```

## Usage

To use the Datepicker components in your application, import them as follows:

```sh
import { DatePicker, CalendarTodo, RangeCalendar } from "datepicker_front";
```

### DatePicker

The DatePicker component allows users to select a single date from a calendar view. It includes a text input field for manual date entry and navigation.

**Props:**

-   `showHolidays` (boolean, default: `true`): Determines whether weekends are highlighted on the calendar.
-   `showWeekends` (boolean, default: `true`): Determines whether holidays are highlighted on the calendar.
-   `startDayOfWeek` (`"Monday"` or `"Sunday"`, default: `"Monday"`): Specifies the start day of the week.
-   `minDate` (`{year: number, month: number}`, default: `{year: 2010, month: 1}`): Sets the minimum selectable date on the calendar.
-   `maxDate` (`{year: number, month: number}`, default: `{year: 2030, month: 12}`): Sets the maximum selectable date on the calendar.
-   `color` ("default", "primary", "success", default: `"default"`): Specifies the color used for days.

Example usage:

```jsx
<DatePicker
    showHolidays={false}
    startDayOfWeek={"Sunday"}
    minDate={{ year: 2010, month: 1 }}
    maxDate={{ year: 2030, month: 12 }}
    color="primary"
/>
```

### RangeCalendar

The RangeCalendar component allows users to select a range of dates from a calendar view. It provides functionality for highlighting the start and end dates of the range, as well as a clear button to reset the selection.

**Props:**

-   `showHolidays` (boolean, default: `true`): Determines whether weekends are highlighted on the calendar.
-   `showWeekends` (boolean, default: `true`): Determines whether holidays are highlighted on the calendar.
-   `startDayOfWeek` (`"Monday"` or `"Sunday"`, default: `"Monday"`): Specifies the start day of the week.
-   `minDate` (`{year: number, month: number}`, default: `{year: 2010, month: 1}`): Sets the minimum selectable date on the calendar.
-   `maxDate` (`{year: number, month: number}`, default: `{year: 2030, month: 12}`): Sets the maximum selectable date on the calendar.
-   `color` ("default", "primary", "success", default: `"default"`): Specifies the color used for days.

    Example usage:

```jsx
<RangeCalendar
    showHolidays={false}
    startDayOfWeek={"Sunday"}
    minDate={{ year: 2010, month: 1 }}
    maxDate={{ year: 2030, month: 12 }}
    color="success"
/>
```

### CalendarTodo

The CalendarTodo component allows users to add tasks for selected dates. It provides an input field for entering task names, and the tasks are saved in local storage. The component also displays the tasks at the bottom of the calendar, allowing users to change the task status and delete tasks. Days with tasks are marked with a blue frame on the calendar.

**Props:**

-   `showHolidays` (boolean, default: `true`): Determines whether weekends are highlighted on the calendar.
-   `showWeekends` (boolean, default: `true`): Determines whether holidays are highlighted on the calendar.
-   `startDayOfWeek` (`"Monday"` or `"Sunday"`, default: `"Monday"`): Specifies the start day of the week.
-   `minDate` (`{year: number, month: number}`, default: `{year: 2010, month: 1}`): Sets the minimum selectable date on the calendar.
-   `maxDate` (`{year: number, month: number}`, default: `{year: 2030, month: 12}`): Sets the maximum selectable date on the calendar.
-   `showDaysWithTask` (boolean, default: `true`): Determines whether days with tasks are highlighted on the calendar.
-   `color` ("default", "primary", "success", default: `"default"`): Specifies the color used for days.

Example usage:

```jsx
<CalendarTodo
    showHolidays={false}
    startDayOfWeek={"Sunday"}
    minDate={{ year: 2008, month: 5 }}
    maxDate={{ year: 2028, month: 5 }}
    showDaysWithTask={false}
    color="default"
/>
```

## Available scripts

In the project directory, you can run:

### `yarn storybook`

Runs storybook in development mode.
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build-lib`

Builds the app with rollup for production to the `dist` folder.

### `yarn lint`

Launches lint to check for errors.

### `yarn lint:fix`

Launches lint to check for errors and fix them.

### `yarn test`

Launches jest testing.

## Built with:

[React](https://react.dev/)

[Rollup](https://rollupjs.org)

[Storybook](https://storybook.js.org)

[Typescript](https://www.typescriptlang.org/)

[Eslint](https://eslint.org/)

[Babel](https://babeljs.io/)

[Jest](https://jestjs.io/)
