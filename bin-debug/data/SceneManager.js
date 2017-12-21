var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// 场景管理类
var SceneManager = (function () {
    function SceneManager() {
        this.root = null; // Main 层舞台
    }
    SceneManager.initScene = function () {
        if (SceneManager.scene == null) {
            SceneManager.scene = new SceneManager();
        }
        return SceneManager.scene;
    };
    SceneManager.prototype.initRoot = function (main) {
        this.root = main;
    };
    // 切换场景 公共方法
    SceneManager.prototype.replaceScene = function (layer) {
        this.root.removeChildren();
        this.root.addChild(layer);
    };
    SceneManager.prototype.pushScene = function (layer) {
        this.root.addChild(layer);
    };
    // 进入场景
    SceneManager.gotoWelcome = function () {
        var loading = new LoadingScene();
        var welcome = new WelcomeScene();
        SceneManager.initScene().pushScene(loading);
        loading.load(['preload', 'welcome'], function () {
            SceneManager.initScene().replaceScene(welcome);
        });
    };
    SceneManager.gotoIndex = function () {
        var loading = new LoadingScene();
        var index = new IndexScene();
        SceneManager.initScene().pushScene(loading);
        loading.load(['index'], function () {
            SceneManager.initScene().replaceScene(index);
        });
    };
    SceneManager.gotoGame = function (levelNum) {
        var game = new GameScene(levelNum);
        SceneManager.initScene().replaceScene(game);
    };
    SceneManager.scene = null; // 全局 SceneManager
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map