
var MainMenu = React.createClass({
    render: function(){
        return(
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        )
    }
});

var MainContentContact = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi dolorum ducimus, earum, enim ex explicabo illo in molestiae perspiciatis quam quia quibusdam quod repellat repudiandae sit tempora temporibus totam!</p>
            </div>
        )
    }
});


var App = React.createClass({
    render: function() {
        return (
            <div>
                <div className="sidebar">
                    <MainMenu />
                </div>
                <div className="main-content">
                    <MainContentContact />
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
