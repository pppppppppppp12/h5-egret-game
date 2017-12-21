// 场景管理类
class SceneManager {
	public static scene: SceneManager = null // 全局 SceneManager
	public static initScene () { // 初始化 SceneManager
		if (SceneManager.scene == null) {
			SceneManager.scene = new SceneManager()
		}
		return SceneManager.scene
	}
	private root: Main = null // Main 层舞台
	public initRoot (main: Main) { // 初始化 SceneManager.root 指向 Main
		this.root = main
	}

	// 切换场景 公共方法
	public replaceScene (layer: egret.DisplayObject) {
		this.root.removeChildren()
		this.root.addChild(layer)
	}
	public pushScene (layer: egret.DisplayObject) {
		this.root.addChild(layer)
	}

	// 进入场景
	public static gotoWelcome () {
		let loading = new LoadingScene()
		let welcome = new WelcomeScene()
		SceneManager.initScene().pushScene(loading)
		loading.load(['preload', 'welcome'], function () {
			SceneManager.initScene().replaceScene(welcome)
		})
	}
	public static gotoIndex () {
		let loading = new LoadingScene()
		let index = new IndexScene()
		SceneManager.initScene().pushScene(loading)
		loading.load(['index'], function () {
			SceneManager.initScene().replaceScene(index)
		})
	}
	public static gotoGame (levelNum: number) {
		let game = new GameScene(levelNum)
		SceneManager.initScene().replaceScene(game)
	}
}