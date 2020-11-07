import React from "react";

const Form = () => {
  return (
    <Form name="login-form">
      <FormItem>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
      </FormItem>
      <FormItem>
        <label htmlFor="password">Password</label>
        <input name="email" type="password" />
        <Button role="button">Login</Button>
      </FormItem>
    </Form>
  );
};

export default Form;
