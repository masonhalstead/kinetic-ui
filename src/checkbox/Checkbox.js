import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import classNames from 'classnames'
import cn from './Checkbox.module.scss'

export const Checkbox = ({
  highlight,
  children,
  margin,
  checked,
  width,
  height,
  disabled,
  theme,
  onClick
}) => {
  const checkbox = useTheme('checkbox', theme)
  return (
    <div
      className={classNames(cn.wrapper, { [cn.disabled]: disabled })}
      onClick={() => {
        if (!disabled) {
          onClick(!checked)
        }
      }}
      style={{
        margin,
        width,
        height,
        fontFamily: checkbox.font_checkbox_family,
        textTransform: checkbox.font_checkbox_transform,
        fontWeight: checkbox.font_checkbox_weight,
        fontSize: checkbox.font_checkbox_size,
        color:
          highlight && checked
            ? checkbox.font_checkbox_highlight
            : checkbox.font_checkbox_color
      }}
    >
      <input type='checkbox' checked={checked} disabled={disabled} />
      {children && <p className={cn.checkbox}>{children}</p>}
    </div>
  )
}
Checkbox.defaultProps = {
  highlight: true,
  children: null,
  margin: 0,
  width: '100%',
  height: 30,
  checked: false,
  disabled: false,
  theme: {},
  onClick: () => {}
}
Checkbox.propTypes = {
  highlight: PropTypes.bool,
  children: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  theme: PropTypes.object,
  onClick: PropTypes.func
}
