import React, { useState } from "react"
import styles from './Counter.scss'
const Counter = ()=>{
	const [count, setCount] = useState(0)
	return (
		<div className={styles.counter}>
			Count: {count}
			<div className="mt-8">
			<button className="btn mr-16" onClick={()=>setCount(count - 1)}>Decrement -</button>

			<button className="btn" onClick={()=>setCount(count + 1)}>+ Increment</button>
			</div>
		</div>
	)
}
export default Counter