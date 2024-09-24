import React from "react";

function ProfileForm({profile, updateProfile, saveProfile}) {
    return (
        <div>
            <div>
                <h1>프로필 입력</h1>
                이름 : {''}
                <input 
                type="text" 
                value={profile.name} 
                onChange={(e) => updateProfile('name', e.target.value)}/>
            </div>
            <div>
                이메일 : {''}
                <input 
                type="text" 
                value={profile.email} 
                onChange={(e) => updateProfile('email', e.target.value)}/>
            </div>
            <button onClick={saveProfile}>저장</button>
        </div>
    )
}

export default ProfileForm;