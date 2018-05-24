import React from 'react'

const RegisterLink = ({ href, text='Register Now!' }) => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <a
      className="btn btn-primary"
      href={href}
      role="button"
    >
      {text}
    </a>
  </div>
)

export default RegisterLink
