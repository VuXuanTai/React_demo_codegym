import React from 'react';
import Button from './button';
import Input from './input';


class BMICal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            weight: '',
            bmi: 0
        }
    }
    handleKeyUp = (e) => {
        this.setState({ [e.taget.name]: e.taget.value });
    }
    check = (e) => {
        e.preventDefault();
        var bmiResult = this.state.bmiweight / Math.pow(this.state.height, 2);
        this.setState({ bmi: bmiResult });
    }
    render() {
        return (
            <div className='container'>
                <h1>Tính chỉ số BMI</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input value={this.state.height} name="height" type="number" onChange={this.handleKeyUp} label="Nhập vào chiều cao của bạn:" />
                    <Input value={this.state.weight} name="weight" type="number" onChange={this.handleKeyUp} label="Nhập vào cân nặng của bạn:" />
                    <p>Chỉ số BMI của bạn là: {this.state.bmi}</p>
                    <Button className="btn btn-primary" label="Check" onClick={this.check} />
                </form>
            </div>

        )
    }


};
export default BMICal;