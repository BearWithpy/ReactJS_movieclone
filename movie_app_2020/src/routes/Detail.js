import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (!location.state) {
      return null;
    } else {
      const titleHTML = document.querySelector("title");
      const { state } = location;
      console.log(state);
      titleHTML.innerHTML = `${state.title}`;
      const runtimeMin = state.runtime;
      return (
        <div className="detail">
          <img
            className="detail__image"
            src={state.poster}
            alt={state.title}
            title={state.title}
          ></img>
          <section className="detail__info">
            <h2 className="detail__info__title">{state.title}</h2>
            <div className="detail__info__genres">
              {state.genres.slice(0, 3).map((genre, index) => {
                if (index === 0) {
                  return (
                    <span key={index} className="detail__info__genres-genre">
                      {genre}
                    </span>
                  );
                } else if (index > 0) {
                  return (
                    <span key={index} className="detail__info__genres-genre">
                      {/* ,&nbsp;{genre} */}
                      &nbsp;|&nbsp;{genre}
                    </span>
                  );
                }
              })}
            </div>
            <ul className="detail__info__misc">
              <li className="detail__info__misc-runtime">{runtimeMin}Min</li>

              <li className="detail__info__misc-year">
                {/* <FontAwesomeIcon icon="video" /> */}
                {state.year}
              </li>
              <li className="detail__info__misc-rating">
                {/* <FontAwesomeIcon icon="star" /> */}
                {state.rating}/10
              </li>
            </ul>
            <article className="detail__info__synopsis">
              <h3>Summary</h3>
              <p>{state.summary}</p>
            </article>
          </section>
        </div>
      );
    }
  }
}
export default Detail;
