import React, { useState, useEffect } from 'react';

const EditForm = ({ todo, onUpdate, onCancel }) => {
  const [content, setContent] = useState(todo?.content || '');

  // todo prop이 변경될 때마다 content 상태를 업데이트
  useEffect(() => {
    setContent(todo?.content || '');
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== '') {
      onUpdate(content);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="수정할 내용을 입력하세요"
      />
      <button type="submit">수정</button>
      <br />
      <button type="button" onClick={onCancel}>
        취소
      </button>
    </form>
  );
};

export default EditForm;
