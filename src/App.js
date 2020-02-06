import React from "react";
import axios from "axios";
import "./App.css";
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
    console.log(item);
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
                key={book.itemId}
                rank={book.rank}
                title={book.title}
                priceStandard={book.priceStandard}
                priceSales={book.priceSales}
                image={book.coverLargeUrl}
                summary={book.description}
                buy={book.link}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
