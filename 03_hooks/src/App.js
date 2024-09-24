import { useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffct-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import Timer, { Container } from "./01_useEffect/04_useEffect-cleanup";
import TimerList from "./component/TimerList";
import ProfileForm from "./component/ProfileForm";
import ProfilePreview from "./component/ProfilePreview";

function App() {
  const [timers, setTimers] = useState([]);
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [savedProfile, setSavedProfile] = useState({ name: '', email: '' });

  const addTimer = () => {
    setTimers([...timers, {id: timers.length + 1, time : 0}]);
  }  

  const deleteTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  const updateProfile = (field, value) => {
    setProfile({...profile, [field]: value});
    console.log(`${field === 'name' ? '이름' : '이메일'} 수정됨: ${value}`);
  };

  const saveProfile = () => {
    setSavedProfile(profile);
    alert('프로필이 저장되었습니다');
    setProfile({name: '', email: ''});
  };


  return (
    <>
      {/* <UseEffectBasic message={message}/> */}
      {/* <UseEffectMount/> */}
      {/* <UseEffectUpdate/> */}
      {/* <Container/> */}
      <button onClick={addTimer}>타이머 추가</button>
      <TimerList timers={timers} deleteTimer={deleteTimer} />
      <br/>
      <ProfileForm profile={profile} updateProfile={updateProfile} saveProfile={saveProfile}/>
      <ProfilePreview profile={savedProfile}/>
    </>
  );
}

export default App;
