import React from 'react';

function ProfilePreview({ profile }) {
    return (
    <div>
        <h1>프로필 미리보기</h1>
        <p>이름: {profile.name}</p>
        <p>이메일: {profile.email}</p>
    </div>
    );
}

export default ProfilePreview;