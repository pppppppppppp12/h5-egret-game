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
var LoadingScene = (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        var _this = _super.call(this) || this;
        _this.loadGroups = [];
        _this.skinName = 'LoadingSkin';
        // 初始化
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    // 初始化时执行
    LoadingScene.prototype.addStage = function () {
        // loading 动画
        var tw = egret.Tween.get(this.circle, { loop: true });
        tw.to({ rotation: 360 }, 3000);
    };
    LoadingScene.prototype.load = function (groups, callback) {
        this.loadGroups = groups;
        this.loadIndex = 0;
        this.callback = callback;
        // 资源组加载进度事件
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.groupProgress, this);
        // 资源组加载完成事件
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.groupComplete, this);
        RES.loadGroup(this.loadGroups[this.loadIndex]);
    };
    // 资源组正在加载时执行
    LoadingScene.prototype.groupProgress = function (event) {
        this.loadLabel.text = event.itemsLoaded + '/' + event.itemsTotal;
    };
    // 资源组加载完成后执行
    LoadingScene.prototype.groupComplete = function (event) {
        if (this.loadIndex >= this.loadGroups.length - 1) {
            // 全部资源组加载完成
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.groupProgress, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.groupComplete, this);
            if (this.callback) {
                this.callback();
            }
            return;
        }
        this.loadIndex++;
        RES.loadGroup(this.loadGroups[this.loadIndex]);
    };
    return LoadingScene;
}(eui.Component));
__reflect(LoadingScene.prototype, "LoadingScene");
//# sourceMappingURL=LoadingScene.js.map