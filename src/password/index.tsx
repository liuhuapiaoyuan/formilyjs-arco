import React from 'react'
import { connect, mapReadPretty } from '@formily/react'
import { Input } from '@arco-design/web-react'
import { InputPasswordProps } from '@arco-design/web-react/es/input/interface'
import { PasswordStrength } from './password-strength'
import { PreviewText } from '../preview-text'

export interface IPasswordProps extends InputPasswordProps {
  /**
   * 开启检测
   * @default true
   */
  checkStrength: boolean
}

export const Password = connect((props: IPasswordProps) => {
  const { value, className, checkStrength, ...others } = props
  return (
    <span className={className?.[0]}>
      <Input.Password {...others} value={value} />
      {checkStrength && (
        <PasswordStrength value={String(value)}>
          {(score) => <PasswordScore score={score} />}
        </PasswordStrength>
      )}
    </span>
  )
}, mapReadPretty(PreviewText.Input))

export default Password

const blockStyle: React.CSSProperties = {
  position: 'absolute',
  zIndex: 1,
  height: 8,
  top: 0,
  background: '#fff',
  width: 1,
  transform: 'translate(-50%, 0)',
}
/**
 * 密码强度
 * @param param0
 * @returns
 */
function PasswordScore({ score }: { score: number }) {
  return (
    <div
      style={{
        background: '#e0e0e0',
        marginBottom: 3,
        position: 'relative',
      }}
    >
      <div style={{ ...blockStyle, left: '20%' }} />
      <div style={{ ...blockStyle, left: '40%' }} />
      <div style={{ ...blockStyle, left: '60%' }} />
      <div style={{ ...blockStyle, left: '80%' }} />
      <div
        style={{
          position: 'relative',
          backgroundImage: '-webkit-linear-gradient(left, #ff5500, #ff9300)',
          transition: 'all 0.35s ease-in-out',
          height: 8,
          width: '100%',
          marginTop: 5,
          clipPath: `polygon(0 0,${score}% 0,${score}% 100%,0 100%)`,
        }}
      />
    </div>
  )
}
