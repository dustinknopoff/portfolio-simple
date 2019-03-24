import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import { Tag } from "../templates/post"
import styled from "styled-components"

// Search component
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ``,
            results: [],
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.query}
                    onChange={this.search}
                />
                <ul style={{ marginLeft: `0` }}>
                    {this.state.results.map(page => (
                        <li key={page.id} style={{ paddingTop: `3px` }}>
                            <ListItem as={Link} to={"/" + page.path}>
                                {page.title}
                                <Tag>{page.tag}</Tag>
                                <p>{page.excerpt}</p>
                            </ListItem>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    getOrCreateIndex = () =>
        this.index
            ? this.index
            : // Create an elastic lunr index and hydrate with graphql query results
              Index.load(this.props.searchIndex)

    search = evt => {
        const query = evt.target.value
        this.index = this.getOrCreateIndex()
        this.setState({
            query,
            // Query the index with search string to get an [] of IDs
            results: this.index
                .search(query, { expand: true }) // Accept partial matches
                // Map over each ID and return the full document
                .map(({ ref }) => this.index.documentStore.getDoc(ref)),
        })
    }
}
export const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`
