import { useReducer, useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffct-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import Timer, { Container } from "./01_useEffect/04_useEffect-cleanup";
import TimerList from "./component/timer/TimerList";
import ProfileForm from "./component/profileCal/ProfileForm";
import ProfilePreview from "./component/profileCal/ProfilePreview";
import UseReducerBasic from "./02_useReducer/01_useReducer-basic";
import ReducerFormControl from "./02_useReducer/02_reducer-form-control";
import Counter from "./component/counterText/Counter";
import InputText from "./component/counterText/InputText";
import HardCalculator from "./03_useMemo/01_hard-calculator";
import ComplexCalculator from "./03_useMemo/02_complex-calculator";
import UseMemoComponent from "./03_useMemo/03_performance-useMemo";
import LocationComponent from "./03_useMemo/04_object-type-problem";
import SquareCalculator from "./component/profileCal/SquareCalculator";
import ProductPage from "./component/product/ProductPage";
import CallBackProblem from "./04_useCallback/01_problem";
import FunctionMemoization from "./04_useCallback/02_function-memoization";
import CallbackComponent from "./04_useCallback/03_components";
import Square from "./04_useCallback/03_components";
import CounterRef from "./05_useRef/01_problem";
import UseRefCounter from "./05_useRef/02_useRef";
import LoginComponent from "./05_useRef/03_inputRef";
import Board from "./component/board/Board";
import Page from "./06_useContext/01_props-dribbling";
import ContextContainer from "./06_useContext/02_useContext";
import CustomHooks from "./07_custom-hooks/02_custom-hooks";

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

  const initialState = {counter : 0, text : ''};

  function reducer(state,action) {
    switch(action.type) {
      case 'INCREMENT' :
        return {...state, counter : state.counter +1};
      case 'DECREMENT' :
        return {...state, counter : state.counter -1};
      case 'SETTEXT' : 
        return {...state, text : action.payload};
      default :
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  


  return (
    <>
      {/* <UseEffectBasic message={message}/> */}
      {/* <UseEffectMount/> */}
      {/* <UseEffectUpdate/> */}
      {/* <Container/> */}

      {/* <button onClick={addTimer}>타이머 추가</button>
      <TimerList timers={timers} deleteTimer={deleteTimer} />
      <br/>
      <ProfileForm profile={profile} updateProfile={updateProfile} saveProfile={saveProfile}/>
      <ProfilePreview profile={savedProfile}/> */}

      {/* <UseReducerBasic/> */}

      {/* <ReducerFormControl/> */}

      {/* <Counter counter={state.counter} 
      onIncrement={()=> dispatch({type: 'INCREMENT'})}
      onDecrement={()=> dispatch({type: 'DECREMENT'})}
      />
      <InputText text={state.text} 
      onChangeText={(text)=> dispatch({type: 'SETTEXT', payload:text})} /> */}

      {/* <HardCalculator/> */}
      {/* <ComplexCalculator/> */}
      {/* <UseMemoComponent/> */}
      {/* <LocationComponent/> */}
      {/* <SquareCalculator/> */}

      {/* <ProductPage/> */}
      {/* <CallBackProblem/> */}
      {/* <FunctionMemoization/> */}
      {/* <CallbackComponent/> */}
      {/* <CounterRef/> */}
      {/* <UseRefCounter/> */}
      {/* <LoginComponent/> */}

      <Board/>

      {/* <Page/> */}
      {/* <ContextContainer/> */}
      {/* <CustomHooks/> */}

    </>
  );
}

export default App;
