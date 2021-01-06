import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

function SearchForm() {
  return (
    <div>
      <Form inline>
        <FormGroup controlId="formInlineEmail">
          <FormControl type="search" placeholder="enter something..." />
        </FormGroup>{" "}
        <Button type="submit">search</Button>
      </Form>
    </div>
  );
}

export default SearchForm;
