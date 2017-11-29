var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var IndexScene = (function (_super) {
    __extends(IndexScene, _super);
    function IndexScene() {
        var _this = _super.call(this) || this;
        _this.btnGroup = [];
        _this.btnGroupPos = [];
        _this.skinName = 'IndexSkin';
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    IndexScene.prototype.addStage = function () {
        var _this = this;
        this.btnGroupPos = [
            { x: 285, y: 160 },
            { x: 403, y: 337 },
            { x: 213, y: 463 },
            { x: 387, y: 640 },
            { x: 230, y: 777 },
            { x: 358, y: 984 },
            { x: 230, y: 1210 },
            { x: 358, y: 1404 },
            { x: 258, y: 1642 },
            { x: 420, y: 1826 },
            { x: 180, y: 1950 },
        ];
        // 添加按钮
        this.btnGroupPos.forEach(function (val, key) {
            var btn = new LevelBtn();
            btn.levelNum = key + 1;
            btn.x = val.x;
            btn.y = val.y;
            _this.indexContainer.addChild(btn);
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.ontouchBeginEvent, btn); // 触摸点为当前对象
            btn.addEventListener(egret.TouchEvent.TOUCH_END, _this.ontouchEndEvent, btn);
            btn.addEventListener(egret.TouchEvent.TOUCH_CANCEL, _this.ontouchEndEvent, btn);
        });
    };
    IndexScene.prototype.ontouchBeginEvent = function (event) {
        this.getChildAt(0).alpha = 0.9; // this 为触摸点，this.getChildAt(0) 为按钮背景
    };
    IndexScene.prototype.ontouchEndEvent = function (event) {
        this.getChildAt(0).alpha = 1;
    };
    return IndexScene;
}(eui.Component));
__reflect(IndexScene.prototype, "IndexScene");
//# sourceMappingURL=IndexScene.js.map