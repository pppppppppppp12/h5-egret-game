class WelcomeScene extends eui.Component {
	public constructor () {
		super()
		this.skinName = 'WelcomeSkin'
		// 初始化
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this)
	}

	private beginBtn: eui.Image

	// 初始化时执行
	private addStage () {
		// 按钮动画
		const tw = egret.Tween.get(this.beginBtn, { loop: true })
		tw.to({ scaleX: 0.8, scaleY: 0.8}, 1000).to( {scaleX: 1, scaleY: 1}, 1000 )
		this.beginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.beginEvent, this)
	}

	private beginEvent () {
		SceneManager.gotoIndex()
	}
}