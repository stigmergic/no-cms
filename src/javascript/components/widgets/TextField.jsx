import React from 'react';
import ContentEditable from 'react-contenteditable';


class TextField extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    onInputChange(e) {
        console.log(`on input change: ${e}  path: ${this.props.path}`);
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
            <ContentEditable
                html={item.val()}
                disabled={false}
                onChange={this.onInputChange}
            />
        );
    }

}

TextField.propTypes = {
    item: React.PropTypes.object,
    path: React.PropTypes.string,
};

export default TextField;
