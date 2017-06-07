
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

var MainContentHome = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Books app</h1>
                <p>This application was created with educational purpose.I used React, Redux, Router and Google Books APIs.</p>
                <p>All sources are located on my GitHub page. Link you can find at section 'Contacts'.</p>

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
                    <MainContentHome />
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
