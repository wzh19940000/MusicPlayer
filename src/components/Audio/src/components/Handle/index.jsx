import React from 'react';
import {Row, Col, Button, Slider, Popover} from 'antd';
import PropTypes from 'prop-types';
import * as PlayTypeEnum from '../../enums/PlayTypeEnum';

class Handle extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {isMuted, volume, playType, doAdjustVolume, doToggleMute, doChangePlayType} = this.props;

		return (
			<Row gutter={1} >
				<Col span={8}>
					<Popover
						content={
							<div className='h100'>
								<Slider
									vertical
									min={0}
									max={1}
									step={0.1}
									value={volume}
									defaultValue={volume}
									tipFormatter={null}
									onChange={doAdjustVolume}
								/>
							</div>
						}
					>
						<Button
							shape='circle'
							onClick={doToggleMute}
						>
							<i className={`iconfont ${isMuted ? `icon-volume-none` : (volume > 0.7 ? `icon-volume-max` : (volume > 0.4 ? `icon-volume-mid` : `icon-volume-min`) ) }`} />
						</Button>

					</Popover >
				</Col>

				<Col span={8}>
					<Button
						shape='circle'
						onClick={() => doChangePlayType(playType+1)}
					>
						<i className={
							`iconfont
								${
									playType === PlayTypeEnum.AllRepeat ?
										`icon-all-repeat` :
										(
											playType === PlayTypeEnum.RepeatOnce ?
												`icon-repeat-once` :
												(
													playType === PlayTypeEnum.Shuffle ?
														`icon-shuffle` : `icon-order`
												)
										)
								}
							 `}
						/>
					</Button>
				</Col>

				<Col span={8}>
					<Button
						shape='circle'
						icon='bars'
					/>
				</Col>
			</Row>
		)
	}
}

export default Handle;

Handle.propTypes = {
	isMuted: PropTypes.bool.isRequired,
	volume: PropTypes.number.isRequired,
	playType: PropTypes.number.isRequired,
	doAdjustVolume: PropTypes.func.isRequired,
	doToggleMute: PropTypes.func.isRequired,
	doChangePlayType: PropTypes.func.isRequired
};