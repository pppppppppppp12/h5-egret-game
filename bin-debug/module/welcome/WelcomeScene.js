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
var WelcomeScene = (function (_super) {
    __extends(WelcomeScene, _super);
    function WelcomeScene() {
        var _this = _super.call(this) || this;
        _this.skinName = 'WelcomeSkin';
        // 初始化
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    // 初始化时执行
    WelcomeScene.prototype.addStage = function () {
        // 按钮动画
        var tw = egret.Tween.get(this.beginBtn, { loop: true });
        tw.to({ scaleX: 0.8, scaleY: 0.8 }, 1000).to({ scaleX: 1, scaleY: 1 }, 1000);
        this.beginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.beginEvent, this);
    };
    WelcomeScene.prototype.beginEvent = function () {
        SceneManager.gotoIndex();
    };
    return WelcomeScene;
}(eui.Component));
__reflect(WelcomeScene.prototype, "WelcomeScene");
//# sourceMappingURL=WelcomeScene.js.map