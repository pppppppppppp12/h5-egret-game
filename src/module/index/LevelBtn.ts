enum LevelState {
	None, OPEN, CLOSE,
}
class LevelBtn extends eui.Component {
	private levelPos: eui.Image
	private levelBg: eui.Image
	private levelLabel: eui.Label
	
	public constructor () {
		super()
		this.skinName = 'LevelBtnSkin'
	}

	// 属性 levalNum 按钮关卡数
	private _levelNum: number = 0
	public get levelNum () {
		return this._levelNum
	}
	public set levelNum (v) {
		this._levelNum = v
		this.levelLabel.text = this._levelNum.toString()
		if (this._levelNum < 1) {
			// 通关
			this.setState(LevelState.OPEN)
		} else if (this._levelNum == 1) {
			// 当前关数
			this.setState(LevelState.OPEN)
			this.showLevelPos()
		} else {
			// 未过关
			this.setState(LevelState.CLOSE)
		}
	}

	// 属性 isSelected 选中状态
	private _isSelected: boolean
	public get isSelected (): boolean {
		return this._isSelected
	}
	public set isSelected (v: boolean) {
		this._isSelected = v
		this.alpha = v ? 0.5 : 1
	}

	// 当前关卡显示状态
	private showLevelPos () {
		this.levelPos.visible = true
		let tw = egret.Tween.get(this.levelPos, { loop: true })
		let y = this.levelPos.y
		tw.to({ y: y + 20 }, 1200).to({ y }, 500)
	}

	// 设置关卡按钮状态，激活/锁定
	public setState (levelState: LevelState) {
		if (levelState == LevelState.CLOSE) {
			this.levelBg.source = 'selet_g_black_png'
		} else if (levelState == LevelState.OPEN) {
			this.levelBg.source = 'selet_g_green_png'
		} else {
			this.levelBg.source = ''
		}
	}
}