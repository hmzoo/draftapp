import React, {Component} from 'react';

export default class CallInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            inputValue: '',
            typing: false
        };
    }

    onChangeInput=(e)=> {
        this.setState({
            inputValue: e.target.value.substring(0, 64),
            typing: true
        });
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        e.stopPropagation();
        this.props.onSubmit(this.state.inputValue.trim());
        this.setState({inputValue: '', typing: false});
    }

    render() {
        return (
            <div className="" id="homeInput">

                <div className="tc alert ">{this.props.alert}</div>
                <div className="m-">
                    <form action="" onSubmit={this.handleSubmit}>
                        <div className="intitule mv-">Number to call :</div>
                      <input className="form-input  tc number  6/12 fl " type="text" placeholder="" onChange={this.onChangeInput} value={this.state.inputValue}></input>
                        <button type="submit" className="btn  btn-primary 4/12 fl">call</button>
                    </form>
                </div>

            </div>
        );
    }
}
