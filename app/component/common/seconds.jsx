import React from 'react';

class Seconds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0};
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="cont">
                <div className="top">
                    <i className="logo"/>
                    这是{this.props.title}
                </div>
                <div className="bottom">
                    Seconds: {this.state.seconds}
                </div>
            </div>
        );
    }
}

export default Seconds;