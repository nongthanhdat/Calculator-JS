function App() {
	const [expression, setExpression] = React.useState("");
	const [answer, setAnswer] = React.useState(0);
	const display = (symbol) => {
		setExpression(prev => prev + symbol)
	};
	const calculate = () => {
		setAnswer(eval(expression));
	};
	const Clear = () => {
		setExpression("");
		setAnswer(0);
	};
	return(
		<div className="container">
			<div className="grid">
				<div  className="dis">
					<input type="text" value={expression} placeholder="0" disabled/>
					<div className="total">{answer}</div>
				</div>
				<div onClick={Clear} className="Button AC">AC</div>
				<div onClick={() => display("/")} className="Button divide">/</div>
				<div onClick={() => display("*")} className="Button multiply">x</div>
				<div onClick={() => display("7")} className="Button seven">7</div>
				<div onClick={() => display("8")} className="Button eight">8</div>
				<div onClick={() => display("9")} className="Button nine">9</div>
				<div onClick={() => display("-")} className="Button subtract">-</div>
				<div onClick={() => display("4")} className="Button four">4</div>
				<div onClick={() => display("5")} className="Button five">5</div>
				<div onClick={() => display("6")} className="Button six">6</div>
				<div onClick={() => display("+")} className="Button add">+</div>
				<div onClick={() => display("1")} className="Button one">1</div>
				<div onClick={() => display("2")} className="Button two">2</div>
				<div onClick={() => display("3")} className="Button three">3</div>
				<div onClick={calculate} className="Button equal">=</div>
				<div onClick={() => display("0")} className="Button zero">0</div>
				<div onClick={() => display(".")} className="Button dot">.</div>
			</div>
		</div>
	); 
}

ReactDOM.render(<App/>, document.getElementById("root"));