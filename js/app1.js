var library = [
    {
        "autor":"Jonathan Swift",
        "img":"http://t0.gstatic.com/images?q=tbn:ANd9GcRzF3c1tkASLO-7RTKXAemQUuoLaoyFph3uhxmn-P2kbWhh3mul",
        "name":"Gulliver's Travels",
        "description":"Gulliver goes on four separate voyages in Gulliver's Travels. Each journey is preceded by a storm. All four voyages bring new perspectives to Gulliver's life and new opportunities for satirizing the ways of England. The first voyage is to Lilliput, where Gulliver is huge and the Lilliputians are small.",
        "pages":"125"
    },
    {
        "autor":"Lewis Carroll",
        "img":"http://t2.gstatic.com/images?q=tbn:ANd9GcTa_9WE4U3tScNG0Cts30MVlaesIVvFde6U10-d6YJNUIf6KqKk",
        "name":"Alice's Adventures in Wonderland",
        "description":"Alice sits on a riverbank on a warm summer day, drowsily reading over her sister's shoulder, when she catches sight of a White Rabbit in a waistcoat running by her. The White Rabbit pulls out a pocket watch, exclaims that he is late, and pops down a rabbit hole.",
        "pages":"225"
    },
    {
        "autor":"Eleanor H. Porter",
        "img":"http://t1.gstatic.com/images?q=tbn:ANd9GcTKvUhVsv1FJXMxEhi1dRKr7cmVEclev_RBA7xJwfH7EQGpWfPH",
        "name":"Pollyanna",
        "description":"The title character is Pollyanna Whittier, a young orphan who goes to live in the fictional town of Beldingsville, Vermont, with her wealthy but stern and cold spinster Aunt Polly, who does not want to take in Pollyanna but feels it is her duty to her late sister.",
        "pages":"425"
    }
];

var LibraryItem = React.createClass({
    propTypes:{
        data: React.PropTypes.shape({
            autor: React.PropTypes.string.isRequired,
            img: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            pages: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function () {
        return{
            visible: false
        };
    },
    readmoreClick:function (e) {
        e.preventDefault();
        this.setState({visible:true});
    },
    render: function(){
        var autor = this.props.data.autor,
            name = this.props.data.name,
            img = this.props.data.img,
            description = this.props.data.description,
            pages = this.props.data.pages;

        return (
            <div>
                <img src={img} alt={name}/>
                <p className="name"><strong>Title: </strong>{name}</p>
                <p className="autor"><strong>Autor: </strong>{autor}</p>
                <a href="#"
                   onClick={this.readmoreClick}
                >Learn more</a>
                <p className="desc"><strong>Description: </strong>{description}</p>
                <p className="pages"><strong>Pages: </strong>{pages}</p>
            </div>
        )
    }
});




var LibraryContent = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    render: function() {
        var data = this.props.data;
        var libraryTemplate;

        if (data.length > 0) {
            libraryTemplate = data.map(function (item, index) {
                return (
                    <div className="book" key={index}>
                        <LibraryItem data={item}/>
                    </div>
                )
            })
        }
        else {
            libraryTemplate = <p className="bookmas">There are no books in the library</p>
        }
        return (
            <div className="library-wrapp">
                {libraryTemplate}
                <div className={data.length > 0 ? 'bookmas' : 'booknone'}>Books in library: {data.length}</div>
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div>
                <LibraryContent data={library} />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


