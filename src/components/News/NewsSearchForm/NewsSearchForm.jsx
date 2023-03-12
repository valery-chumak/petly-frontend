import { useState, useEffect } from 'react';
import { MdSearch, MdHighlightOff } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

import { Input, Form, Button } from './NewsSearchForm.styled';

function NewsSearchForm({ setQ }) {
  const [inputText, setInputText] = useState('');

  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

  const handleChange = e => {
    if (!e.target.value.length) {
      setQ('');
    }
    setInputText(e.target.value.trim());
  };

  const handleDelete = ({ code }) => {
    if (code === 'Delete') {
      setInputText('');
      setQ('');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleDelete);
    return () => {
      window.removeEventListener('keydown', handleDelete);
    };
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputText.length) {
      setQ('');
      return;
    }
    setQ(inputText);
  };

  const handleClick = () => {
    setInputText('');
    setQ('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        placeholder="Search"
        value={inputText}
      ></Input>
      {inputText.length ? (
        <Button type="button" onClick={handleClick}>
          {!isDesktop ? (
            <MdHighlightOff style={{ width: '20', height: '20' }} />
          ) : (
            <MdHighlightOff style={{ width: '25', height: '25' }} />
          )}
        </Button>
      ) : (
        <Button type="submit">
          {!isDesktop ? (
            <MdSearch style={{ width: '20', height: '20' }} />
          ) : (
            <MdSearch style={{ width: '25', height: '25' }} />
          )}
        </Button>
      )}
    </Form>
  );
}

export default NewsSearchForm;
