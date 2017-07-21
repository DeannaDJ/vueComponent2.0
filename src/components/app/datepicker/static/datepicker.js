import {
    props
} from './config.js'

import {
    handle
} from './handle.js'

export default {
    name: 'datepicker',
    props: props,

    data() {
        return {
            minTop: 88,
            yearmaxTop: 88,
            monthmaxTop: 88,
            daymaxTop: 88,
            hourmaxTop: 88,
            minutemaxTop: 88,

            yeartop: 44,
            monthtop: 44,
            daytop: 44,
            hourtop: 44,
            minutetop: 44,

            dateValue: '',
            currDate: new Date(),
            currYear: '',
            currMonth: '',
            currDay: '',
            currHour: '',
            currMinute: '',

            years: [],
            months: [],
            days: [],
            hours: [],
            minutes: [],

            minMonth: '',
            minDay: '',
            maxMonth: '',
            maxDay: '',

            yeartouchstarty: 0,
            monthtouchstarty: 0,
            daytouchstarty: 0,
            hourtouchstarty: 0,
            minutetouchstarty: 0
        }
    },

    created() {
        this.initData();
    },

    computed: {
        showDetepicker() {
            return this.show;
        },

        display() {
            return this.show;
        },

        formatString() {
            return this.format || 'yyyy-MM-dd'
        }
    },

    watch: {
        showDetepicker(val) {
            var vm = this;
            if (vm.display == val) return;
            vm.display = val;
            val && vm.initData();
        },

        display(val) {
            var vm = this;
            if (vm.show == val) return;

            setTimeout(() => {
                vm.show = val;
            }, 1000);
        }
    },

    methods: {
        initData() {
            if (this.value) {
                this.currDate = handle.getDate(this.value);
            }

            this.dateValue = handle.dateFormat(this.currDate, this.formatString);
            this.currYear = this.currDate.getFullYear();
            this.currMonth = this.currDate.getMonth();
            this.currDay = this.currDate.getDate();
            this.currHour = this.currDate.getHours();
            this.currMinute = this.currDate.getMinutes();

            handle.options = this;
            handle.years();
            handle.months();
            handle.days();
            handle.hoursMinutes();
        },

        onTouchstart(e, type) {
            this[type + 'touchstarty'] = e.touches[0].pageY;
        },

        onTouchmove(e, type) {
            var vm = this,
                diff = 0;

            vm[type + 'touchendy'] = e.touches[0].pageY;
            diff = vm[type + 'touchendy'] - vm[type + 'touchstarty'];

            var t = Math.round((vm[type + 'top'] + diff) / 44);
            var top = t * 44;

            if (top > vm.minTop) {
                top = vm.minTop;
            } else if (top < vm[type + 'maxTop']) {
                top = vm[type + 'maxTop'];
            }

            setTimeout(function() {
                var min = vm[type + 's'][0],
                    curr = 'curr' + handle.firstToUpperCase(type);

                if (type == 'month') {
                    --min;
                }

                vm[type + 'top'] = top;
                vm[curr] = min + Math.round((top - 88) / -44);
            }, 100);
        },

        onTouchend(e, type) {
            switch (type) {
                case 'year':
                    this.onSelectMonth(0);
                    break;
                case 'month':
                    handle.days();
                    this.onSelectDay(1);
                    break;
                case 'day':
                    this.onSelectHour(0);
                    break;
                case 'hour':
                    this.onSelectMinute(0);
                    break;
                case 'hour':
                default:
                    return;
            }
        },

        onSelectYear(year) {
            var diff = year - this.currYear;
            this.yeartop = this.yeartop - diff * 44;
            this.currYear = year;
            this.onSelectMonth(0);
        },

        onSelectMonth(month) {
            var diff = month - this.currMonth;
            this.monthtop = this.monthtop - diff * 44;
            this.currMonth = month;
            handle.days();
            this.onSelectDay(1);
        },

        onSelectDay(day) {
            var diff = day - this.currDay;
            this.daytop = this.daytop - diff * 44;
            this.currDay = day;
        },

        onSelectHour(hour) {
            var diff = hour - this.currHour;
            this.hourtop = this.hourtop - diff * 44;
            this.currHour = hour;
        },

        onSelectMinute(min) {
            var diff = min - this.currMinute;
            this.minutetop = this.minutetop - diff * 44;
            this.currMinute = min;
        },

        onClose() {
            this.$store.dispatch(this.hideEventName);
        },

        onSure() {
            this.currDate = new Date(this.currYear, this.currMonth, this.currDay, this.currHour, this.currMinute);
            this.dateValue = handle.dateFormat(this.currDate, this.formatString);
            this.$store.dispatch(this.eventsName, this.dateValue);
            this.onClose();
        }
    },

    filters: {
        toZero(value) {
            return handle.zero(value);
        }
    }

}
