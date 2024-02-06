import { css } from '../styled-system/css'

import React, { ReactNode } from 'react'
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxProps,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'
import { cva, cx } from '../styled-system/css'
import { Description, FieldError, Label } from './Field'
import { focusRing } from './utils'

export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children'> {
  label?: string
  children?: ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup
      {...props}
      className={css({ display: 'flex', flexDir: 'column', gap: '2' })}
    >
      <Label>{props.label}</Label>
      {props.children}
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </AriaCheckboxGroup>
  )
}

const checkboxStyles = cva({
  base: {
    display: 'flex',
    gap: '2',
    alignItems: 'center',
    fontSize: 'sm',
    lineHeight: 'sm',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.15s',
  },
  variants: {
    isDisabled: {
      false: { color: 'gray.800', _dark: { color: 'zinc.200' } },
      true: { color: 'gray.300', _dark: { color: 'zinc.600' } },
    },
  },
});

const boxStyles = cva({
  base: {
    width: '5',
    height: '5',
    flexShrink: '0',
    borderRadius: 'sm',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '2px',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.15s',
  },
  variants: {
    isSelected: {
      false: {
        backgroundColor: 'white',
        _dark: { backgroundColor: 'zinc.900' },
        borderColor: 'currentColor',
      },
      true: { backgroundColor: 'currentColor', borderColor: 'currentColor' },
    },
    isInvalid: {
      true: {
        color: 'red.700',
        _dark: { color: 'red.600' },
        _groupPressed: { color: 'red.800' },
        _dark_groupPressed: { color: 'red.700' },
      },
    },
    isDisabled: {
      true: {
        color: 'gray.200',
        _dark: { color: 'zinc.700' },
      },
    },
  },
});

const iconStyles = css({
  w: '4',
  h: '4',
  color: 'white',
  _groupDisabled: { color: 'gray.400', _dark: { color: 'slate.600' } },
  _dark: { color: 'slate.900' },
})

export function Checkbox(props: CheckboxProps) {
  return (
    <AriaCheckbox
      {...props}
      className={checkboxStyles({
        isDisabled: props.isDisabled,
      })}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <div
            // className={boxStyles({
            //   isSelected: isSelected || isIndeterminate,
            //   isInvalid: renderProps.isInvalid,
            //   isDisabled: renderProps.isDisabled,
            // })}


            // Okay, try to use the first original method, and just put focus ring styles right into the base styles see if the prop is working.


            // Let's try the raw method
            // className={
            //   cx(
            //     boxStyles({
            //       isSelected: isSelected || isIndeterminate,
            //       isInvalid: renderProps.isInvalid,
            //       isDisabled: renderProps.isDisabled,
            //     }),
            //     focusRing({
            //       isFocusVisible: renderProps.isFocusVisible,
            //     })
            //   )
            // }
            
            className={css(
              boxStyles.raw({
                isSelected: isSelected || isIndeterminate,
                isInvalid: renderProps.isInvalid,
                isDisabled: renderProps.isDisabled,
              }),
              focusRing.raw({isFocusVisible: renderProps.isFocusVisible,})
            )}

          >
            {isIndeterminate ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={iconStyles} aria-hidden="true"><path d="M5 12h14"></path></svg>
            ) : isSelected ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={iconStyles} aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
            ) : null}
          </div>
          {props.children}
        </>
      )}
    </AriaCheckbox>
  )
}
