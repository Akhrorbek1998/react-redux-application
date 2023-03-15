const Input = ({type="text", label, state, setState, htmlForType}) => {
    return (
        <div className="form-floating">
            <input 
                type={type} 
                className="form-control" 
                id={htmlForType}
                placeholder={label} 
                value={state}
                onChange={e => setState(e.target.value)}
                autoComplete={"off"}
            />
            <label htmlFor={htmlForType}>{label}</label>
        </div>
    )
}

export default Input