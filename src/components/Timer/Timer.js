import './Timer.css'


export default function Timer(props) {
  function buildMins() {
    let mins = []
    for (let i = 1; i < props.timeMins; i++) {
      if (i % 5) mins.push(0)
      else mins.push(i)
    }
    console.log(mins)
    return mins
  }

  function increase() {
    props.changeTime(props.timeMins + 1)
  }

  function decrease() {
    props.changeTime(props.timeMins - 1)
  }

  return(
    <main className="Timer">
      <div className="timer-wrap">
        <h3>{props.timeMins}:00 </h3>
        <div className="btn-wrap">
          <button className="btn" onClick={increase}>+</button>
          <button className="btn" onClick={decrease}>-</button>
        </div>
      </div>
      <div className="wrapper">
        <div className="timer-inner"></div>
      </div>
      <div className="markers">
        {buildMins().map(i => <div className={i ? 'tick big-tick' : 'tick' }></div>)}
      </div>
    </main>
  )
}