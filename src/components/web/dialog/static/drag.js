// 拖拽属性以及方法配置
var dragConfig = {
    $el: null,
    disX: 0,
    disY: 0,

    // 鼠标按下
    mouseDown(e) {
        var _this = this;

        var pos = getOffset(_this.$el);
        _this.disY = e.clientY - pos.top;
        _this.disX = e.clientX - pos.left;

        // 事件绑定
        document.onmousemove = function(e) {
            var e = e || event;
            _this.mouseMove(e);
        };

        document.onmouseup = function(e) {
            var e = e || event;
            _this.mouseStop(e);
        };

        // 阻止默认事件
        return false;
    },

    // 鼠标移动
    mouseMove(e) {
        this.$el.style.top = e.clientY - this.disY + 'px';
        this.$el.style.left = e.clientX - this.disX + 'px';
    },


    // 鼠标移动停止
    mouseStop(e) {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

// 获取偏移位置
function getOffset(el) {
    var _x = 0,
        _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return {
        top: _y,
        left: _x
    };
}

export default function($el) {
    let drag = Object.assign({}, dragConfig, true);
    drag.$el = $el;
    return drag;
}
