import React from "react";

class allsheet extends React.Component {
    componentDidMount() {
        fetch(
            "https://3000-anqiii123-project2-0ihp2gei4ny.ws-us53.gitpod.io/get_all_sheet")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className="App">
                <h1> Fetch data from an api in react </h1>  {
                    items.map((item) => (
                        <ol key={item._id} >
                            Song_Name: {item.original.songName},
                            Composer: {item.original.Composer},
                            PublishYear: {item.original.PublishYear}
                        </ol>
                    ))
                }
            </div>
        );
    }
}

export default allsheet;