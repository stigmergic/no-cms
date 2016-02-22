import React from 'react';

class TextField extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    onInputChange(e) {
        console.log("on input change: ", e);
    }

    onSubmit(e) {
        console.log("on submit: ", e);
    }

    update(dataSnapshot) {
        this.setState({ value: dataSnapshot.val() });
    }

    render() {
        const item = this.props.item;
        const path = this.props.path;

        return (
            <div>{path} {item.val()}</div>
        );
    }

}

TextField.propTypes = {
    item: React.PropTypes.OBJECT,
    path: React.PropTypes.STRING,
};

export default TextField;
