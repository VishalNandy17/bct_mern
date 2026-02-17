import React from 'react'
import MlDemo from './MlDemo'

const Developer = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Developer - Vishal</h2>
      <p>
        This page represents Vishal as a developer and also shows an integrated
        machine learning demo built with TensorFlow.js.
      </p>

      {/* Reuse the ML demo inside the Developer page */}
      <div
        style={{
          marginTop: '1rem',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
      >
        <h3>Embedded ML Demo</h3>
        <MlDemo />
      </div>
    </div>
  )
}

export default Developer