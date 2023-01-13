<!--
TEC - Automated Mismatch Detection Tool
Copyright 2023 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
DM23-003
-->
 
 
<template>
  <div
    data-id="sds-calendar"
    data-testid="calendar"
    class="select-none"
  >
    <div v-if="showCalendars">
      <template v-if="view === 'days'">
        <div
          class="flex relative gap-1 mb-2 w-56"
          :class="{ 'sm:w-120': isRange }"
        >
          <button
            class="absolute left-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50"
            type="button"
            tabindex="-1"
            :disabled="!canGoToPrevMonth"
            @click="goToPrevMonth"
          >
            <span class="sr-only">Go to previous month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="w-5 h-5"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            ><path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M328 112L184 256l144 144"
            /></svg>
          </button>
          <div class="flex-grow">
            <button
              class="m-auto text-lg font-semibold flex gap-1 text-gray-900 hover:text-gray-500 dark:text-gray-100"
              type="button"
              tabindex="-1"
              @click="view = 'years'"
            >
              <span>{{ calendarMonthTitle }} {{ calendarYearTitle }}</span>
            </button>
          </div>
          <div
            v-if="isRange"
            class="hidden flex-grow sm:block"
          >
            <button
              class="m-auto text-lg font-semibold flex gap-1 text-gray-900 hover:text-gray-500 dark:text-gray-100"
              type="button"
              tabindex="-1"
              @click="view = 'years'"
            >
              <span>{{ calendarNextMonthTitle }} {{ calendarNextYearTitle }}</span>
            </button>
          </div>
          <button
            class="absolute right-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50"
            type="button"
            tabindex="-1"
            :disabled="!canGoToNextMonth"
            @click="goToNextMonth"
          >
            <span class="sr-only">Go to next month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="w-5 h-5"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            ><path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M184 112l144 144l-144 144"
            /></svg>
          </button>
        </div>
        <div
          class="flex flex-col sm:flex-row sm:gap-8"
        >
          <div class="grid grid-cols-7 w-56 h-60 place-content-start">
            <div
              v-for="day in calendarDaysOfWeek"
              :key="day"
              class="text-sm font-bold text-gray-400 text-center uppercase mb-1"
            >
              {{ day.charAt(0) }}
            </div>
            <div
              v-for="day of calendarDaysInMonth"
              :key="day"
              :class="[
                'w-8 h-8 mb-1',
                day === 1 ? `col-start-${calendarStartOfMonth}` : '',
                dateIsWithinInterval(day) ? 'bg-blue-200 dark:bg-blue-800' : '',
                dateIsAtStartOfInterval(day) ? 'bg-blue-200 dark:bg-blue-800 rounded-l-full' : '',
                dateIsAtEndOfInterval(day) ? 'bg-blue-200 dark:bg-blue-800 rounded-r-full' : '',
              ]"
            >
              <button
                class="disabled:pointer-events-none disabled:opacity-25"
                type="button"
                tabindex="-1"
                :class="{
                  'px-2 py-1 w-8 h-8 rounded-full text-sm': true,
                  'hover:bg-gray-300 dark:hover:bg-gray-600': !dateIsSameDay(day),
                  'font-bold bg-blue-500 text-white': dateIsSameDay(day),
                  'font-bold text-blue-500 bg-gray-100 dark:text-blue-100 dark:bg-gray-800': dateIsToday(day) && !dateIsSameDay(day) && !dateIsWithinInterval(day),
                  'font-semibold text-blue-900 dark:text-blue-100': dateIsWithinInterval(day) && !dateIsSameDay(day)
                }"
                :disabled="dateIsNotSelectable(day)"
                :title="dateIsToday(day) ? 'Today' : ''"
                @click="setValueDate(day)"
              >
                {{ day }}
              </button>
            </div>
          </div>

          <template v-if="isRange">
            <div class="hidden sm:grid grid-cols-7 w- place-content-start">
              <div
                v-for="day in calendarDaysOfWeek"
                :key="day"
                class="text-sm font-bold text-gray-400 text-center uppercase mb-1"
              >
                {{ day.charAt(0) }}
              </div>
              <div
                v-for="day of calendarNextDaysInMonth"
                :key="day"
                :class="[
                  'w-8 h-8 mb-1',
                  day === 1 ? `col-start-${calendarNextStartOfMonth}` : '',
                  dateIsWithinInterval(day, true) ? 'bg-blue-200 dark:bg-blue-800' : '',
                  dateIsAtStartOfInterval(day, true) ? 'bg-blue-200 dark:bg-blue-800 rounded-l-full' : '',
                  dateIsAtEndOfInterval(day, true) ? 'bg-blue-200 dark:bg-blue-800 rounded-r-full' : '',
                ]"
              >
                <button
                  class="disabled:pointer-events-none disabled:opacity-25"
                  type="button"
                  tabindex="-1"
                  :class="{
                    'px-2 py-1 w-8 h-8 rounded-full text-sm': true,
                    'hover:bg-gray-300 dark:hover:bg-gray-600': !dateIsSameDay(day, true),
                    'font-bold bg-blue-500 text-white': dateIsSameDay(day, true),
                    'font-bold text-blue-500 bg-gray-100 dark:text-blue-400 dark:bg-gray-100': dateIsToday(day, true) && !dateIsSameDay(day, true) && !dateIsWithinInterval(day, true),
                    'font-semibold text-blue-900 dark:text-blue-100': dateIsWithinInterval(day, true) && !dateIsSameDay(day, true)
                  }"
                  :disabled="dateIsNotSelectable(day, true)"
                  :title="dateIsToday(day, true) ? 'Today' : ''"
                  @click="setValueDate(day, true)"
                >
                  {{ day }}
                </button>
              </div>
            </div>
          </template>
        </div>
      </template>
      <template v-else>
        <div
          class="grid gap-1 w-56"
          :class="{ 'sm:w-120': isRange }"
        >
          <div>
            <div class="mb-1 text-sm uppercase font-semibold text-gray-500">
              Month
            </div>
            <select
              v-model="calendarMonthSelect"
              class="form-control form-control-sm"
            >
              <option
                v-for="month of calendarMonths"
                :key="month"
              >
                {{ month }}
              </option>
            </select>
          </div>
          <div class="mt-1">
            <div class="mb-1 text-sm uppercase font-semibold text-gray-500">
              Year
            </div>
            <select
              v-model="calendarYearSelect"
              class="form-control form-control-sm"
            >
              <option
                v-for="year of calendarYears"
                :key="year"
              >
                {{ year }}
              </option>
            </select>
          </div>
          <button
            class="mt-2 btn btn-primary btn-sm"
            type="button"
            tabindex="-1"
            @click="goToSelectedMonth()"
          >
            Go to Date
          </button>
          <button
            class="mt-2 btn btn-default btn-sm"
            type="button"
            tabindex="-1"
            @click="goToThisMonth()"
          >
            Go to Today
          </button>
          <hr class="my-2">
          <button
            class="btn btn-default btn-sm"
            type="button"
            tabindex="-1"
            @click="view = 'days'"
          >
            Cancel
          </button>
        </div>
      </template>
    </div>

    <!-- Time pickers -->
    <div
      v-if="showTime && view === 'days'"
      :class="{ 'sm:flex sm:gap-8 sm:w-120': showCalendars && isRange }"
    >
      <div
        class="w-56"
        :class="{ 'border-t my-2 pt-2 border-t': showCalendars }"
      >
        <div
          class="uppercase text-sm text-gray-500 mb-2"
        >
          <template v-if="date && date instanceof Date">
            {{ formatDate(date, 'eee MMM dd yyyy') }}
          </template>
          <template v-else-if="date && !(date instanceof Date) && date.start instanceof Date">
            {{ formatDate(date.start, 'eee MMM dd yyyy') }}
          </template>
          <template v-else>
            --
          </template>
        </div>
        <div class="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="my-auto flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
              fill="currentColor"
            />
          </svg>
          <select
            v-model="startTimeHour"
            :disabled="!startTimeHour"
            class="form-control form-control-sm"
            @change="changeTime('hour', $event.target.value)"
          >
            <option
              v-for="hour of getCalendarHours"
              :key="hour"
            >
              {{ hour }}
            </option>
          </select>
          <span class="my-auto">:</span>
          <select
            v-model="startTimeMinutes"
            :disabled="!startTimeMinutes"
            class="form-control form-control-sm"
            @change="changeTime('minutes', $event.target.value)"
          >
            <option
              v-for="minutes of getCalendarMinutes"
              :key="minutes"
            >
              {{ minutes }}
            </option>
          </select>
          <select
            v-model="startTimeMeridian"
            :disabled="!startTimeMeridian"
            class="form-control form-control-sm"
            @change="changeTime('meridian', $event.target.value)"
          >
            <option
              v-for="meridian of getCalendarMeridian"
              :key="meridian"
            >
              {{ meridian }}
            </option>
          </select>
        </div>
      </div>
      <div
        v-if="isRange"
        class="border-t my-2 pt-2 border-t w-56"
      >
        <div
          class="uppercase text-sm text-gray-500 mb-2"
        >
          <template v-if="date && !(date instanceof Date) && date.end instanceof Date">
            {{ formatDate(date.end, 'eee MMM dd yyyy') }}
          </template>
          <template v-else>
            --
          </template>
        </div>
        <div class="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="my-auto flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
              fill="currentColor"
            />
          </svg>
          <select
            v-model="endTimeHour"
            :disabled="!endTimeHour"
            class="form-control form-control-sm"
            @change="changeTime('hour', $event.target.value, true)"
          >
            <option
              v-for="hour of getCalendarHours"
              :key="hour"
            >
              {{ hour }}
            </option>
          </select>
          <span class="my-auto">:</span>
          <select
            v-model="endTimeMinutes"
            :disabled="!endTimeMinutes"
            class="form-control form-control-sm"
            @change="changeTime('minutes', $event.target.value, true)"
          >
            <option
              v-for="minutes of getCalendarMinutes"
              :key="minutes"
            >
              {{ minutes }}
            </option>
          </select>
          <select
            v-model="endTimeMeridian"
            :disabled="!endTimeMeridian"
            class="form-control form-control-sm"
            @change="changeTime('meridian', $event.target.value, true)"
          >
            <option
              v-for="meridian of getCalendarMeridian"
              :key="meridian"
            >
              {{ meridian }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isToday, isWithinInterval, isBefore, isAfter, isEqual, isDate, min, max, isSameDay, getDaysInMonth, startOfMonth, getDay, getHours, setDate, setHours, setMinutes, setSeconds, setMilliseconds, subMonths, addMonths, format, endOfDay } from 'date-fns'

export default {
  name: 'SdsCalendar',
  props: {
    /**
     * The v-model for the component.
     *
     * For single selections, this value can be null or a date object.
     *
     * For range selections, this is an object with start and end keys
     * that can either be null or a date object.
     *
     * Range example:
     *
     * **{ start: new Date(), end: null }**
     */
    value: { type: [Object, Date], default: new Date() },
    /**
     * Determines the mode in which the calendar will function.
     *
     * Options include 'date', 'dateTime', and 'time'.
     */
    mode: { type: String, default: 'date' },
    /**
     * Determines the minimum selectable date for this component.
     */
    min: { type: Date, default: null },
    /**
     * Determines the maximum selectable date for this component.
     */
    max: { type: Date, default: null },
    /**
     * Determines whether to use the current time when selecting a date that is equal to today.
     * 
     * If false, this sets the time to the start of the date.
     */
    useCurrentTimeForToday: { type: Boolean, default: false }
  },
  data () {
    const displayedMonth = new Date()
    return {
      displayedMonth,
      displayedNextMonth: addMonths(displayedMonth, 1),
      view: 'days',
      calendarDaysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      calendarMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      calendarYears: [...Array(200).keys()].map(i => i + 1900),
      calendarMonthSelect: null,
      calendarYearSelect: null,
      startTimeHour: null,
      startTimeMinutes: null,
      startTimeMeridian: null,
      endTimeHour: null,
      endTimeMinutes: null,
      endTimeMeridian: null
    }
  },
  computed: {
    date: {
      get () {
        return this.value
      },
      set (value) {
        /**
         * Emitted when value changes.
         */
        this.$emit('input', value)
      }
    },
    calendarMonthTitle () { return format(this.displayedMonth, 'MMMM') },
    calendarYearTitle () { return format(this.displayedMonth, 'yyyy') },
    calendarStartOfMonth () { return getDay(startOfMonth(this.displayedMonth)) + 1 },
    calendarDaysInMonth () { return getDaysInMonth(this.displayedMonth) },
    calendarNextMonthTitle () { return format(this.displayedNextMonth, 'MMMM') },
    calendarNextYearTitle () { return format(this.displayedNextMonth, 'yyyy') },
    calendarNextStartOfMonth () { return getDay(startOfMonth(this.displayedNextMonth)) + 1 },
    calendarNextDaysInMonth () { return getDaysInMonth(this.displayedNextMonth) },
    showCalendars () { return this.mode === 'date' || this.mode === 'dateTime' },
    showTime () { return this.mode === 'dateTime' || this.mode === 'time' },
    getCalendarHours () {
      const hours = [...Array(12).keys()]
      return hours.map(i => (i + 1).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }))
    },
    getCalendarMinutes () {
      const minutes = [...Array(60).keys()]
      return minutes.map(i => i.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }))
    },
    getCalendarMeridian () { return ['am', 'pm'] },
    canGoToPrevMonth () {
      if (!(this.min instanceof Date)) { return true }
      return isBefore(startOfMonth(this.min), startOfMonth(this.displayedMonth))
    },
    canGoToNextMonth () {
      if (!(this.max instanceof Date)) { return true }
      return isAfter(startOfMonth(this.max), startOfMonth(this.displayedMonth))
    },
    isRange () { return this.value && !isDate(this.value) },
  },
  watch: {
    view () {
      this.setCalendarSelectMonthAndYear()
    },
    value () {
      this.updateTimeSelects()
    }
  },
  mounted () {
    this.initTimeMode()
    this.moveToStartDate()
    this.$nextTick(() => {
      this.updateTimeSelects()
    })
  },
  methods: {
    setCalendarSelectMonthAndYear () {
      this.calendarMonthSelect = format(this.displayedMonth, 'MMMM')
      this.calendarYearSelect = format(this.displayedMonth, 'yyyy')
    },
    initTimeMode () {
      if (this.mode === 'time') {
        if (!this.date || (!(this.date instanceof Date) && (!this.date.start || !this.date.end))) {
          const now = setHours(setMinutes(setSeconds(setMilliseconds(new Date(), 0), 0), 0), 0)
          if (this.isRange) {
            this.date = {
              start: now,
              end: now
            }
          } else {
            this.date = now
          }
        }
      }
    },
    moveToStartDate () {
      if (this.date && !(this.date instanceof Date) && this.date.start instanceof Date) {
        this.displayedMonth = this.date.start
      } else if (this.date && this.date instanceof Date) {
        this.displayedMonth = this.date
      } else if (this.min && this.min instanceof Date && isAfter(this.min, new Date())) {
        this.displayedMonth = this.min
      }
      this.displayedNextMonth = addMonths(this.displayedMonth, 1)
    },
    updateTimeSelects () {
      if (this.isRange) {
        if (this.date && !(this.date instanceof Date) && this.date.start instanceof Date) {
          this.startTimeHour = this.formatDate(this.date.start, 'hh')
          this.startTimeMinutes = this.formatDate(this.date.start, 'mm')
          this.startTimeMeridian = getHours(this.date.start) > 11 ? 'pm' : 'am'
        } else {
          this.startTimeHour = null
          this.startTimeMinutes = null
          this.startTimeMeridian = null
        }
        if (this.date && !(this.date instanceof Date) && this.date.end instanceof Date) {
          this.endTimeHour = this.formatDate(this.date.end, 'hh')
          this.endTimeMinutes = this.formatDate(this.date.end, 'mm')
          this.endTimeMeridian = getHours(this.date.end) > 11 ? 'pm' : 'am'
        } else {
          this.endTimeHour = null
          this.endTimeMinutes = null
          this.endTimeMeridian = null
        }
      } else if (this.date instanceof Date) {
        this.startTimeHour = this.formatDate(this.date, 'hh')
        this.startTimeMinutes = this.formatDate(this.date, 'mm')
        this.startTimeMeridian = getHours(this.date) > 11 ? 'pm' : 'am'
      } else {
        this.startTimeHour = null
        this.startTimeMinutes = null
        this.startTimeMeridian = null
      }
    },
    changeTime (interval, value, isEndOfRange = false) {
      switch (interval) {
        case 'hour':
          if (this.isRange) {
            if (!isEndOfRange && this.date && !(this.date instanceof Date) && this.date.start instanceof Date) {
              const currentHour = getHours(this.date.start)
              const hours = currentHour > 12 ? parseInt(value) + 12 : parseInt(value)
              this.date.start = setHours(this.date.start, hours)
            } else if (isEndOfRange && this.date && !(this.date instanceof Date) && this.date.end instanceof Date) {
              const currentHour = getHours(this.date.end)
              const hours = currentHour > 12 ? parseInt(value) + 12 : parseInt(value)
              this.date.end = setHours(this.date.end, hours)
            }
          } else if (this.date instanceof Date) {
            const currentHour = getHours(this.date)
            const hours = currentHour > 12 ? parseInt(value) + 12 : parseInt(value)
            this.date = setHours(this.date, hours)
          }
          break
        case 'minutes':
          if (this.isRange) {
            if (!isEndOfRange && this.date && !(this.date instanceof Date) && this.date.start instanceof Date) {
              this.date.start = setMinutes(this.date.start, parseInt(value))
            } else if (isEndOfRange && this.date && !(this.date instanceof Date) && this.date.end instanceof Date) {
              this.date.end = setMinutes(this.date.end, parseInt(value))
            }
          } else if (this.date instanceof Date) {
            this.date = setMinutes(this.date, parseInt(value))
          }
          break
        case 'meridian':
          if (this.isRange) {
            if (!isEndOfRange && this.date && !(this.date instanceof Date) && this.date.start instanceof Date) {
              const currentHour = getHours(this.date.start)
              const hours = value === 'am' && currentHour >= 12 ? currentHour - 12 : value === 'pm' && currentHour < 12 ? currentHour + 12 : currentHour
              this.date.start = setHours(this.date.start, hours)
            } else if (isEndOfRange && this.date && !(this.date instanceof Date) && this.date.end instanceof Date) {
              const currentHour = getHours(this.date.end)
              const hours = value === 'am' && currentHour >= 12 ? currentHour - 12 : value === 'pm' && currentHour < 12 ? currentHour + 12 : currentHour
              this.date.end = setHours(this.date.end, hours)
            }
          } else if (this.date instanceof Date) {
            const currentHour = getHours(this.date)
            const hours = value === 'am' && currentHour >= 12 ? currentHour - 12 : value === 'pm' && currentHour < 12 ? currentHour + 12 : currentHour
            this.date = setHours(this.date, hours)
          }
          break
        default:
          break
      }

      if (this.isRange && this.date && !(this.date instanceof Date) && this.date.start instanceof Date && this.date.end instanceof Date) {
        this.date = {
          start: min([this.date.start, this.date.end]),
          end: max([this.date.start, this.date.end])
        }
      }
    },
    goToPrevMonth () {
      this.displayedMonth = subMonths(this.displayedMonth, 1)
      this.displayedNextMonth = subMonths(this.displayedNextMonth, 1)
    },
    goToNextMonth () {
      this.displayedMonth = addMonths(this.displayedMonth, 1)
      this.displayedNextMonth = addMonths(this.displayedNextMonth, 1)
    },
    goToSelectedMonth () {
      if (!this.calendarMonthSelect || !this.calendarYearSelect) { return }
      const monthIndex = this.calendarMonths.findIndex(i => i === this.calendarMonthSelect) + 1
      if (typeof monthIndex === 'number') {
        this.displayedMonth = new Date(parseInt(this.calendarYearSelect), monthIndex, 0, 0, 0, 0, 0)
        this.displayedNextMonth = addMonths(this.displayedMonth, 1)
        this.view = 'days'
      }
    },
    goToThisMonth () {
      this.displayedMonth = new Date()
      this.displayedNextMonth = addMonths(this.displayedMonth, 1)
      this.view = 'days'
    },
    formatDate (date, output) { return format(date, output) },
    setValueDate (day, isNextMonth = false) {
      const month = isNextMonth ? this.displayedNextMonth : this.displayedMonth
      if (this.isRange && this.date) {
        if (this.date.end || !this.date.start) {
          this.date = {
            start: this.useCurrentTimeForToday && isToday(setDate(month, day)) ? new Date() : setHours(setMinutes(setSeconds(setMilliseconds(setDate(month, day), 0), 0), 0), 0),
            end: null
          }
        } else if (
          !(this.date instanceof Date) &&
            (isDate(this.date.start) && this.date.start instanceof Date)
        ) {
          const start = this.date.start
          const end = endOfDay(setDate(month, day))
          if (isSameDay(start, end) && isAfter(end, start)) {
            this.date = { start, end }
          } else {
            const minDate = min([start, end])
            const maxDate = max([start, end])
            this.date = {
              start: isEqual(start, minDate) ? minDate : (this.useCurrentTimeForToday && isToday(minDate) ? new Date() : setHours(setMinutes(setSeconds(setMilliseconds(minDate, 0), 0), 0), 0)),
              end: endOfDay(maxDate)
            }
          }
        } else {
          this.date.end = setHours(setMinutes(setSeconds(setMilliseconds(setDate(month, day), 0), 0), 0), 0)
        }
      } else {
        this.date = this.useCurrentTimeForToday && isToday(setDate(month, day)) ? new Date() : setHours(setMinutes(setSeconds(setMilliseconds(setDate(month, day), 0), 0), 0), 0)
      }

      this.$nextTick(() => {
        this.updateTimeSelects()
      })
    },
    dateIsBeforeMin (day, isNextMonth = false) {
      if (!(this.min instanceof Date)) { return false }
      const month = isNextMonth ? this.displayedNextMonth : this.displayedMonth
      return isBefore(setDate(month, day), setHours(setMinutes(setSeconds(setMilliseconds(this.min, 0), 0), 0), 0))
    },
    dateIsAfterMax (day, isNextMonth = false) {
      if (!(this.max instanceof Date)) { return false }
      const month = isNextMonth ? this.displayedNextMonth : this.displayedMonth
      const date = setDate(month, day - 1)
      const startOfMax = setHours(setMinutes(setSeconds(setMilliseconds(this.max, 0), 0), 0), 0)
      return isAfter(date, startOfMax) || isEqual(date, startOfMax)
    },
    dateIsNotSelectable (day, isNextMonth = false) {
      return this.dateIsBeforeMin(day, isNextMonth) || this.dateIsAfterMax(day, isNextMonth)
    },
    dateIsWithinInterval (day, isNextMonth = false) {
      const month = isNextMonth ? this.displayedNextMonth : this.displayedMonth
      if (
        this.date &&
        !(this.date instanceof Date) &&
        (
          isDate(this.date.start) && this.date.start instanceof Date &&
          isDate(this.date.end) && this.date.end instanceof Date
        )
      ) {
        return isWithinInterval(
          setDate(month, day),
          { start: this.date.start, end: this.date.end }
        )
      }
      return false
    },
    dateIsAtStartOfInterval (day, isNextMonth = false) {
      const month = isNextMonth ? this.displayedNextMonth : this.displayedMonth
      if (
        this.date &&
        !(this.date instanceof Date) &&
        (
          isDate(this.date.start) && this.date.start instanceof Date &&
          isDate(this.date.end) && this.date.end instanceof Date
        )
      ) {
        return isSameDay(setDate(month, day), this.date.start)
      }
      return false
    },
    dateIsAtEndOfInterval (day, isNextMonth = false) {
      const month = isNextMonth ? this.displayedNextMonth : this.displayedMonth
      if (
        this.date &&
        !(this.date instanceof Date) &&
        (
          isDate(this.date.start) && this.date.start instanceof Date &&
          isDate(this.date.end) && this.date.end instanceof Date
        )
      ) {
        return isSameDay(setDate(month, day), this.date.end)
      }
      return false
    },
    dateIsSameDay (day, isNextMonth = false) {
      // is null
      if (!this.date) {
        return false

      // is a date
      } else if (isDate(this.date) && this.date instanceof Date) {
        const month = isNextMonth ? this.displayedNextMonth : this.displayedMonth
        return isSameDay(setDate(month, day), this.date)

      // is an object (range date)
      } else if (
        !(this.date instanceof Date) &&
        (
          (isDate(this.date.start) && this.date.start instanceof Date) ||
          (isDate(this.date.end) && this.date.end instanceof Date)
        )
      ) {
        const month = isNextMonth ? this.displayedNextMonth : this.displayedMonth
        return (isDate(this.date.start) && this.date.start instanceof Date && isSameDay(setDate(month, day), this.date.start)) || (isDate(this.date.end) && this.date.end instanceof Date && isSameDay(setDate(month, day), this.date.end))
      }
    },
    dateIsToday (day, isNextMonth = false) {
      const month = isNextMonth ? this.displayedNextMonth : this.displayedMonth
      return isSameDay(setDate(month, day), new Date())
    }
  }
}
</script>
