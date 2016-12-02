import React from 'react'
import { connectField } from 'uniforms'
import classNames from 'classnames'

const Text = ({
    type = 'text',
    textSuffix,
    style,
    textPrefix,
    iconClasses,
    iconInner,
    buttonIcon,
    inputClassName,
    label,
    labelClassName,
    disabled,
    name,
    onBlur,
    onChange,
    onKeyDown,
    placeholder,
    value,
    customError,
    errorMessage,
    className,
    inputRef,
    autoFocus,
    children,
    ...props
}) =>
   (
    <div className={classNames('pt-input-group', className, {
      'pt-intent-danger': errorMessage,
      disabled
    })}>
        {textPrefix ? `${textPrefix} ` : null}
        {iconClasses && iconInner ? <span className={iconClasses}></span> : null}
        <input
          ref={inputRef}
          style={style}
          className='pt-input'
          name={name}
          onKeyDown={onKeyDown}
          onChange={event => onChange(event.target.value)}
          placeholder={placeholder}
          type={type}
          value={value}
          onBlur={ (event) => {
            if (onBlur) {
              onBlur()
            }
          }}
          autoFocus={autoFocus}
        />
        {textSuffix ? <span className="inline-extension">{textSuffix}</span> : null}
        {buttonIcon ? <button className="pt-button pt-minimal pt-intent-warning pt-icon-lock"></button>: null}


        {children}
      {errorMessage ? (
      <div className="pt-callout pt-icon-info-sign">
        {customError || `${errorMessage}`}
      </div>

      ) : null }
    </div>
  )


export default connectField(Text)
