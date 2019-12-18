import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'
import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import useAutoResize from '../../use/autoResize'

import './style.less'

const defaultColor = ['rgba(255, 255, 255, 0.35)', 'gray']

const BorderBox = ({ children, className, style, color = [] }) => {
  const { width, height, domRef } = useAutoResize()

  const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])

  const classNames = useMemo(() => classnames('dv-border-box-6', className), [
    className
  ])

  return (
    <div className={classNames} style={style} ref={domRef}>
      <svg className='dv-svg-container' width={width} height={height}>
        <circle fill={mergedColor[1]} cx='5' cy='5' r='2' />
        <circle fill={mergedColor[1]} cx={width - 5} cy='5' r='2' />
        <circle fill={mergedColor[1]} cx={width - 5} cy={height - 5} r='2' />
        <circle fill={mergedColor[1]} cx='5' cy={height - 5} r='2' />
        <polyline stroke={mergedColor[0]} points={`10, 4 ${width - 10}, 4`} />
        <polyline stroke={mergedColor[0]} points={`10, ${height - 4} ${width - 10}, ${height - 4}`} />
        <polyline stroke={mergedColor[0]} points={`5, 70 5, ${height - 70}`} />
        <polyline stroke={mergedColor[0]} points={`${width - 5}, 70 ${width - 5}, ${height - 70}`} />
        <polyline stroke={mergedColor[0]} points={`3, 10, 3, 50`} />
        <polyline stroke={mergedColor[0]} points={`7, 30 7, 80`} />
        <polyline stroke={mergedColor[0]} points={`${width - 3}, 10 ${width - 3}, 50`} />
        <polyline stroke={mergedColor[0]} points={`${width - 7}, 30 ${width - 7}, 80`} />
        <polyline stroke={mergedColor[0]} points={`3, ${height - 10} 3, ${height - 50}`} />
        <polyline stroke={mergedColor[0]} points={`7, ${height - 30} 7, ${height - 80}`} />
        <polyline
          stroke={mergedColor[0]}
          points={`${width - 3}, ${height - 10} ${width - 3}, ${height - 50}`}
        />
        <polyline
          stroke={mergedColor[0]}
          points={`${width - 7}, ${height - 30} ${width - 7}, ${height - 80}`}
        />
      </svg>

      <div className='border-box-content'>{children}</div>
    </div>
  )
}

BorderBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.array
}

export default BorderBox
