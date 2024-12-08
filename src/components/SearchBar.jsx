import React from 'react'

class SearchBar extends React.Component {

    onSearchClicked = () => {
        console.log("searching");
    }

    render() {
        return (
            <div className="search">
                <button className="search-submit" type="submit" onClick={this.onSearchClicked}>
                    <span aria-hidden="true" className="search-icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M11.5 2.25a8.25 8.25 0 1 0 5.28 14.59l4.69 4.69a.75.75 0 1 0 1.06-1.06l-4.69-4.69A8.25 8.25 0 0 0 11.5 2.25M4.75 10.5a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
                                clip-rule="evenodd">
                            </path>
                        </svg>
                    </span>
                </button>
                <input className="search-input" id="search" inputmode="search" type="search"
                    aria-label="Search my website" placeholder="Search" />
            </div>
        );
    }
}

export default SearchBar;