import React, { useEffect, useState } from 'react'


const MlDemo = () => {
  const [loading, setLoading] = useState(true)
  const [inputX, setInputX] = useState('')
  const [prediction, setPrediction] = useState(null)
  const [trainingInfo, setTrainingInfo] = useState(null)
  const [params, setParams] = useState({ w: 0, b: 0 }) // y = w * x + b

  useEffect(() => {
    const trainModel = () => {
      setLoading(true)

      // Training data: y = 2x - 1
      const xs = [-1, 0, 1, 2, 3, 4]
      const ys = [-3, -1, 1, 3, 5, 7]

      let w = 0
      let b = 0
      const learningRate = 0.01
      const epochs = 500
      const n = xs.length
      let finalLoss = 0

      for (let epoch = 0; epoch < epochs; epoch++) {
        let dw = 0
        let db = 0
        let loss = 0

        for (let i = 0; i < n; i++) {
          const x = xs[i]
          const yTrue = ys[i]
          const yPred = w * x + b
          const error = yPred - yTrue
          loss += error * error
          dw += (2 / n) * error * x
          db += (2 / n) * error
        }

        loss /= n
        finalLoss = loss

        // Gradient descent update
        w -= learningRate * dw
        b -= learningRate * db
      }

      setParams({ w, b })
      setTrainingInfo({
        epochs,
        finalLoss,
      })
      setLoading(false)
    }

    trainModel()
  }, [])

  const handlePredict = (e) => {
    e.preventDefault()
    const x = Number(inputX)
    if (Number.isNaN(x)) {
      setPrediction('Please enter a valid number')
      return
    }

    const { w, b } = params
    const y = w * x + b
    setPrediction(y.toFixed(3))
  }

  return (
    <div style={{ padding: '1.5rem' }}>
      <h1>ML Demo - Vishal</h1>
      <p>
        This page trains a tiny linear model in pure JavaScript to learn the
        function <strong>y = 2x - 1</strong>. No heavy ML libraries are used, so
        installs stay fast.
      </p>

      {loading && <p>Training model in your browser... please wait a moment.</p>}

      {!loading && trainingInfo && (
        <div style={{ marginBottom: '1rem' }}>
          <p>
            <strong>Training complete</strong>
          </p>
          <p>Epochs: {trainingInfo.epochs}</p>
          <p>Final loss: {trainingInfo.finalLoss.toFixed(6)}</p>
          <p>
            Learned parameters: y ≈ {params.w.toFixed(3)}x + {params.b.toFixed(3)}
          </p>
        </div>
      )}

      <form onSubmit={handlePredict} style={{ marginTop: '1rem' }}>
        <label>
          Enter a number (x):{' '}
          <input
            type="number"
            value={inputX}
            onChange={(e) => setInputX(e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
        </label>
        <button type="submit" disabled={loading}>
          Predict y
        </button>
      </form>

      {prediction !== null && (
        <p style={{ marginTop: '1rem' }}>
          Predicted y: <strong>{prediction}</strong>
        </p>
      )}

      <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#555' }}>
        This is a basic machine learning example using gradient descent written
        directly in JavaScript, so your project stays lightweight.
      </p>
    </div>
  )
}

export default MlDemo

