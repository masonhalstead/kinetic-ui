import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDebounce } from '../components/Debounce'
import { TextareaBase } from './TextareaBase'
import cn from './Textarea.module.scss'

export const Textarea = ({
  placeholder,
  debounce,
  text_align,
  auto_focus,
  input_control,
  type,
  name,
  value,
  default_value,
  controlled,
  ...rest
}) => {
  const [debounce_value, setValue] = useState('')
  const onChange = (e) => {
    e.preventDefault()

    if (debounce && !controlled) {
      setValue(e.target.value)
      return
    }

    rest.onChange(e.target.value)
  }

  useEffect(() => {
    if (controlled) {
      setValue(value)
    }
  }, [value])

  useEffect(() => {
    if (debounce && !controlled) {
      setValue(default_value)
    }
  }, [default_value])

  useDebounce(
    () => rest.onChange(debounce_value),
    default_value,
    debounce_value,
    debounce,
    [debounce_value]
  )

  const props = { value, default_value }

  if (!controlled) {
    props.value = undefined
    props.default_value = default_value
  }
  if (controlled) {
    props.value = value
    props.default_value = undefined
  }

  return (
    <TextareaBase {...rest} auto_focus={auto_focus}>
      <Base
        {...props}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        input_control={input_control}
        auto_focus={auto_focus}
        text_align={text_align}
      />
    </TextareaBase>
  )
}
Textarea.defaultProps = {
  value: undefined,
  default_value: undefined,
  auto_focus: false,
  input_control: true,
  controlled: true,
  placeholder: '',
  text_align: 'left',
  type: 'text',
  name: '',
  label: null,
  debounce: null,
  onChange: () => {}
}
Textarea.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  default_value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  auto_focus: PropTypes.bool,
  input_control: PropTypes.bool,
  controlled: PropTypes.bool,
  text_align: PropTypes.oneOf(['left', 'center', 'right']),
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  debounce: PropTypes.number,
  onChange: PropTypes.func
}

const Base = ({
  placeholder,
  default_value,
  auto_focus,
  input_control,
  value,
  min_height,
  text_align,
  type,
  name,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  disabled
}) => (
  <textarea
    className={cn.base}
    placeholder={placeholder}
    defaultValue={default_value}
    value={value}
    type={type}
    name={name}
    autoFocus={auto_focus}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    onKeyDown={onKeyDown}
    disabled={disabled}
    style={{
      textAlign: text_align,
      cursor: !input_control && 'pointer',
      caretColor: !input_control && 'transparent',
      minHeight: min_height
    }}
  />
)
Base.defaultProps = {
  default_value: undefined,
  value: undefined,
  auto_focus: false,
  input_control: true,
  min_height: 30,
  type: '',
  name: '',
  placeholder: '',
  text_align: 'left',
  disabled: null,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {}
}
Base.propTypes = {
  default_value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min_height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  auto_focus: PropTypes.bool,
  name: PropTypes.string,
  input_control: PropTypes.bool,
  type: PropTypes.string,
  text_align: PropTypes.oneOf(['left', 'center', 'right']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func
}

// import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import { useDebounce } from '../components/Debounce'
// import { TextareaBase } from './TextareaBase'
// import cn from './Textarea.module.scss'

// export const Textarea = ({
//   placeholder,
//   value,
//   default_value,
//   debounce,
//   text_align,
//   controlled,
//   type,
//   name,
//   ...rest
// }) => {
//   const [debounce_value, setValue] = useState('')
//   const onChange = (e) => {
//     e.preventDefault()

//     if (debounce && !controlled) {
//       setValue(e.target.value)
//       return
//     }

//     rest.onChange(e.target.value)
//   }

//   useEffect(() => {
//     if (controlled) {
//       setValue(value)
//     }
//   }, [value])

//   useEffect(() => {
//     if (debounce && !controlled) {
//       setValue(default_value)
//     }
//   }, [default_value])

//   useDebounce(
//     () => rest.onChange(debounce_value),
//     default_value,
//     debounce_value,
//     debounce,
//     [debounce_value]
//   )

//   const props = { value, default_value }

//   if (!controlled) {
//     props.value = undefined
//     props.default_value = default_value || ''
//   }
//   if (controlled) {
//     props.value = value || ''
//     props.default_value = undefined
//   }
//   return (
//     <TextareaBase {...rest}>
//       <Base
//         {...props}
//         onChange={onChange}
//         placeholder={placeholder}
//         type={type}
//         name={name}
//         text_align={text_align}
//       />
//     </TextareaBase>
//   )
// }
// Textarea.defaultProps = {
//   value: undefined,
//   default_value: undefined,
//   controlled: true,
//   placeholder: '',
//   text_align: 'left',
//   type: 'text',
//   name: '',
//   theme: {},
//   label: null,
//   debounce: null,
//   onChange: () => {}
// }
// Textarea.propTypes = {
//   value: PropTypes.string,
//   default_value: PropTypes.string,
//   controlled: PropTypes.bool,
//   placeholder: PropTypes.string,
//   text_align: PropTypes.string,
//   theme: PropTypes.object,
//   type: PropTypes.string,
//   name: PropTypes.string,
//   label: PropTypes.string,
//   debounce: PropTypes.number,
//   onChange: PropTypes.func
// }

// const Base = ({
//   placeholder,
//   default_value,
//   value,
//   text_align,
//   min_height,
//   type,
//   name,
//   onChange,
//   onBlur,
//   onFocus,
//   onKeyDown,
//   disabled
// }) => (
//   <textarea
//     className={cn.base}
//     placeholder={placeholder}
//     defaultValue={default_value}
//     value={value}
//     type={type}
//     name={name}
//     onChange={onChange}
//     onBlur={onBlur}
//     onFocus={onFocus}
//     onKeyDown={onKeyDown}
//     disabled={disabled}
//     style={{ textAlign: text_align, minHeight: min_height }}
//   />
// )
// Base.defaultProps = {
//   default_value: undefined,
//   value: undefined,
//   type: '',
//   name: '',
//   placeholder: '',
//   min_height: 30,
//   text_align: 'left',
//   disabled: null,
//   onChange: () => {},
//   onBlur: () => {},
//   onFocus: () => {},
//   onKeyDown: () => {}
// }
// Base.propTypes = {
//   default_value: PropTypes.string,
//   value: PropTypes.string,
//   name: PropTypes.string,
//   type: PropTypes.string,
//   min_height: PropTypes.number,
//   text_align: PropTypes.string,
//   placeholder: PropTypes.string,
//   disabled: PropTypes.bool,
//   onChange: PropTypes.func,
//   onBlur: PropTypes.func,
//   onFocus: PropTypes.func,
//   onKeyDown: PropTypes.func
// }
