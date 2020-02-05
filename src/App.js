import React from "react";
import axios from "axios";
import Book from "./Book";
class App extends React.Component {
  state = {
    isLoading: true,
    item: []
  };
  getBook = async () => {
    const {
      data: { item }
    } = await axios.get("https://lhk3337.github.io/book_json/books.json");

    this.setState({ item, isLoading: false });
  };
  componentDidMount() {
    this.getBook();
  }

  render() {
    const { isLoading, item } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="books">
            {item.map(book => (
              <Book
                key={book.bestRank}
                best={book.bestRank}
                author={book.author}
                year={book.pubDate}
                price={book.priceStandard}
                sale={book.priceSales}
                buy={book.link}
                title={book.title}
                rating={book.customerReviewRank}
                summary={book.description}
                poster={book.cover}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
