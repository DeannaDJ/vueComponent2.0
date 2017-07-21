import Vue from 'vue'
import {
    props
} from './config.js'

export default {
    name: 'select',
    props: props,

    data() {
        return {
            currentIndex: '',
            ck: '',
            cv: '',
            selAll: false,
            open: false,
            selItems: [],
            itemsStyle: {
                top: '29px',
                left: '0px',
                width: '150px'
            }
        };
    },

    created() {
        this.selAll = !!this.isAll;
        this.open = !!this.isOpen;
        this.ck = this.currentKey || '';
        this.cv = this.currentValue || '';
        this.selItems = this.selectItems || [];

        if (this.isChangeValue) {
            this.vSelectGetValue();
        }

        // 多选状态下拉数据设置
        if (this.multiSelect) {
            this.selAll && this.vSelectAddAll();
        }
    },

    mounted() {
        var vm = this;

        var getOffset = function(el) {
            var offest = {
                top: el.offsetTop,
                left: el.offsetLeft
            };
            if (el.offsetParent) {
                var ot = getOffset(el.offsetParent);
                offest.top += ot.top;
                offest.left += ot.left;
            }
            return offest;
        }

        var offest = getOffset(vm.$el);
        vm.itemsStyle = {
            top: (offest.top + vm.$el.offsetHeight - 1) + 'px',
            left: offest.left + 'px',
            width: vm.$el.offsetWidth + 'px'
        }

        var contains = function(root, el) {
            if (root.compareDocumentPosition)
                return root === el || !!(root.compareDocumentPosition(el) & 16);
            if (root.contains && el.nodeType === 1) {
                return root.contains(el) && root !== el;
            }
            while ((el = el.parentNode))
                if (el === root) return true;
            return false;
        }

        window.vSelect = window.vSelect || [];
        var contains = false;
        for (let select of vSelect) {
            if (select.$el == vm.$el) {
                contains = true;
            }
        }

        // 不包含则加入
        !contains && (window.vSelect.push(vm));

        document.body.onclick = function(e) {
            for (let select of vSelect) {
                if (!select.$el.contains(e.target)) {
                    select.open = false;
                    select.vSelectValidate();
                }
            }

        };
    },

    watch: {
        'selItems': {
            handler(val, oldVal) {
                if (this.selItems.length === this.list.length) {
                    this.selAll = true;
                } else {
                    this.selAll = false;
                    this.vSelectSetShowText();
                }

                if (this.eventName && this.multiSelect) {
                    this.$store.dispatch(this.eventName, {
                        key: this.ck,
                        value: this.cv,
                        selectItems: this.selItems
                    });
                }
            },
            deep: true
        },

        cv() {
            if (!this.multiSelect) {
                var ls = this.list,
                    len = ls.length,
                    dn = this.displayName,
                    val = this.cv;

                for (let i = 0; i < len; i++) {
                    if (dn && ls[i][dn] == val) {
                        this.currentIndex = i;
                    } else if (ls[i] == val) {
                        this.currentIndex = i;
                    }
                }
            }
        }
    },

    methods: {
        _onStop(e) {

        },
        _onOpenToggle(e) {
            if (this.disabled) return;

            this.open = !this.open;

            // 校验
            if (!this.open && this.binded && this.isValidate) {
                this.vSelectValidate();
            }

            return false;
        },

        // 单选选择
        onSingleSelect(e, item, index) {
            this.open = false;
            this.currentIndex = index;

            if (!item) {
                item = {};
                item[this.displayKey] = '';
                item[this.displayName] = '';
                this.currentIndex = '';
                this.ck = '';
                this.cv = this.emptyValue;

                if (this.eventName) {
                    this.$store.dispatch(this.eventName, {
                        key: this.ck,
                        value: this.cv
                    });
                }
                return;
            }

            if (this.displayKey && item[this.displayKey]) {
                this.ck = item[this.displayKey];
                this.cv = item[this.displayName];
            } else {
                this.ck = index;
                this.cv = item;
            }

            if (this.eventName) {
                this.$store.dispatch(this.eventName, {
                    key: this.ck,
                    value: this.cv
                });
            }
        },

        onCheckedAll() {
            var vm = this;
            setTimeout(function() {
                if (vm.selAll) {
                    vm.vSelectAddAll();
                    return;
                }

                vm.vSelectRemoveAll();
            }, 0);
        },

        onHideErrorMsg() {
            this.isError = false;
        },

        vSelectSetShowText() {
            var tempList = [];
            if (this.selItems.length == 0) return;

            var index = 0;
            for (let item of this.list) {
                var key = index,
                    name = item;
                if (this.displayKey && item[this.displayKey]) {
                    key = item[this.displayKey];
                    name = item[this.displayName];
                }
                for (let el of this.selItems) {
                    if (el == key) {
                        tempList.push(name);
                    }
                }
                index++;
            }

            this.ck = this.selItems.join(',');
            this.cv = tempList.join(',');
        },

        vSelectGetValue() {
            var vm = this;
            if (vm.cv) return;

            for (item of vm.list) {
                //遍历list数据，找到key键对应的value等于ck的item
                if (item[vm.displayKey] === vm.ck) {
                    vm.cv =
                        typeof item === 'object' ? item[vm.displayName] : item;
                }
            }

            vm.cv = vm.cv || vm.emptyValue;
        },

        vSelectAddAll() {
            var index = 0,
                tempList = [];
            for (let item of this.list) {
                var key = index;
                if (this.displayKey && item[this.displayKey]) {
                    key = item[this.displayKey];
                }
                tempList.push(key);
                index++;
            }

            this.selItems = tempList;

            this.ck = tempList.join(',');
            this.cv = '全部';
        },

        vSelectRemoveAll() {
            this.selItems = [];
            this.ck = '';
            this.cv = '-请选择-';
        },

        vSelectValidate() {
            this.isError = !!(this.emptyValue == this.cv);
        }
    },

    filters: {
        filterDisplay(item, index, displayName) {
            var value = '';
            if (displayName && item[displayName]) {
                value = item[displayName];
            } else {
                value = item;
            }

            var HTML_DECODE = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;
            return (typeof value != "string") ? value : value.replace(HTML_DECODE, function($0) {
                var c = $0.charCodeAt(0),
                    r = ["&#"];
                c = (c == 0x20) ? 0xA0 : c;
                r.push(c);
                r.push(";");
                return r.join("");
            });
        }
    }
}
