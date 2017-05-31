import React from 'react'
import {RadialBarChart, RadialBar, Legend, Tooltip} from 'recharts'

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px'
}
const CustomTooltip  = React.createClass({
  render() {
    const { active } = this.props
    if (active) {
      const [ item ] = this.props.payload
      return (
        <div className="circlechart-tooltip">
          <p className="label">{item.name}</p>
        </div>
      )
    }

    return null
  }
})

export default React.createClass({
  render () {
    return (
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={105/this.props.data.length}
        data={this.props.data}>
        <RadialBar
          startAngle={180}
          endAngle={-180}
          maxAngle={340}
          minAngle={0}
          label={false}
          background={false}
          clockWise={true}
          dataKey='percent'/>
        <Legend iconSize={15} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        <Tooltip content={<CustomTooltip/>}/>
      </RadialBarChart>
    )
  }
})
