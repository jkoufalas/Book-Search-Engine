import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";

import { QUERY_ME } from "../utils/queries";
import { deleteBook } from "../utils/API";
import Auth from "../utils/auth";
import { removeBookId } from "../utils/localStorage";

const SavedBooks = () => {
  const [userData, setUserData] = useState({});
  console.log("got here");
  const { loading, data } = useQuery(QUERY_ME);
  console.log("got here 1");
  console.log(data);
  console.log(userData);
  setUserData(data?.me || {});
  console.log("got here 2");
  console.log(userData);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteBook(bookId, token);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };
  console.log("got here 3");

  // if data isn't here yet, say so

  if (loading) {
    console.log("got here 4");
    console.log(`-----------Loading:  ${loading}`);
    return <h2>LOADING...</h2>;
  }
  console.log("got here 5");
  console.log(`-----------Loading:  ${loading}`);

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          {console.log(userData)}
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${
                userData.savedBooks.length === 1 ? "book" : "books"
              }:`
            : "You have no saved books!"}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteBook(book.bookId)}
                  >
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
