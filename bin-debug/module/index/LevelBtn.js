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
var LevelState;
(function (LevelState) {
    LevelState[LevelState["None"] = 0] = "None";
    LevelState[LevelState["OPEN"] = 1] = "OPEN";
    LevelState[LevelState["CLOSE"] = 2] = "CLOSE";
})(LevelState || (LevelState = {}));
var LevelBtn = (function (_super) {
    __extends(LevelBtn, _super);
    function LevelBtn() {
        var _this = _super.call(this) || this;
        // 属性 levalNum 按钮关卡数
        _this._levelNum = 0;
        _this.skinName = 'LevelBtnSkin';
        return _this;
    }
    Object.defineProperty(LevelBtn.prototype, "levelNum", {
        get: function () {
            return this._levelNum;
        },
        set: function (v) {
            this._levelNum = v;
            this.levelLabel.text = this._levelNum.toString();
            if (this._levelNum < 1) {
                // 通关
                this.setState(LevelState.OPEN);
            }
            else if (this._levelNum == 1) {
                // 当前关数
                this.setState(LevelState.OPEN);
                this.showLevelPos();
            }
            else {
                // 未过关
                this.setState(LevelState.CLOSE);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LevelBtn.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (v) {
            this._isSelected = v;
            this.alpha = v ? 0.5 : 1;
        },
        enumerable: true,
        configurable: true
    });
    // 当前关卡显示状态
    LevelBtn.prototype.showLevelPos = function () {
        this.levelPos.visible = true;
        var tw = egret.Tween.get(this.levelPos, { loop: true });
        var y = this.levelPos.y;
        tw.to({ y: y + 20 }, 1200).to({ y: y }, 500);
    };
    // 设置关卡按钮状态，激活/锁定
    LevelBtn.prototype.setState = function (levelState) {
        if (levelState == LevelState.CLOSE) {
            this.levelBg.source = 'selet_g_black_png';
        }
        else if (levelState == LevelState.OPEN) {
            this.levelBg.source = 'selet_g_green_png';
        }
        else {
            this.levelBg.source = '';
        }
    };
    return LevelBtn;
}(eui.Component));
__reflect(LevelBtn.prototype, "LevelBtn");
//# sourceMappingURL=LevelBtn.js.map