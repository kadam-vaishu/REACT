function TextInput({ text, setText }) {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <textarea
      rows="6"
      placeholder="Type something..."
      value={text}
      onChange={handleChange}
    />
  );
}

export default TextInput;