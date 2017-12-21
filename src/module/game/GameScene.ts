class GameScene extends eui.Component {
	public constructor (levelNum: number) {
		super()
		this.skinName = 'gameSkin'
		this.levelNum = levelNum
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this)
	}

	private levelNum: number

	private addStage () {
		
	}
}