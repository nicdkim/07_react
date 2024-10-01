import React from 'react';

function CatImage({ catImage }) {
  return (
    <>
      {catImage ? (
        <img src={catImage} alt="고양이 사진" style={{ width: '300px', marginTop: '20px' }} />
      ) : (
        <p>이미지가 없습니다.</p>
      )}
    </>
  );
}

export default CatImage;