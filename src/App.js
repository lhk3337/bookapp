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
    } = await axios.get(
      "http://book.interpark.com/api/bestSeller.api?key=1673DA05EE3AEC5BA66552F95B7094CE659F33FA38195886D4B3315563E062A9&categoryId=100&output=json"
    );
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
              <Book key={book.itemId} />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
