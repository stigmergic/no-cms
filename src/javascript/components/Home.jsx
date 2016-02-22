import React from 'react';
import Firebase from 'firebase';
import TextField from './widgets/TextField';

const path = 'https://no-cms.firebaseio.com/list';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.updateItem = this.updateItem.bind(this);
    }

    componentDidMount() {
        this.firebaseRef = new Firebase(path);
        this.firebaseRef.on('value', this.updateItem);
    }

    updateItem(dataSnapshot) {
        this.setState({ list: dataSnapshot });
        // console.log({ dataSnapshot });
    }

    onInputChange(e) {
        console.log("input change: ", e);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("submit: ", e);
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    renderList() {
        if (!(this.state && this.state.list) || !this.state.list.exists()) {
            return null;
        }

        const list = [];
        this.state.list.forEach((item) => {
            list.push(
                <TextField item={item} path={path + '/' + item.key()} />
                );
        });
        return list;
    }

    render() {
        return (
            <div>
                <h1>no-cms</h1>
                <ul>
                    { this.renderList() }
                </ul>
                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onInputChange} />
                </form>
            </div>
        );
    }

}

export default Home;
