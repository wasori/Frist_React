/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> { 따봉 }</h4>
        <p>2월 1일 발행</p>
      </div>
      <div className="list"> 
        <h4>{ 글제목[1] }</h4>
        <p>2월 1일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}} >{ 글제목[2] }</h4>
        <p>2월 1일 발행</p>
      </div> */}

        
      {/* <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
        }}>변경</button>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬</button> */}


      {
        글제목.map(function(a,i){
          return (
            <div className="list"> 
              <h4 onClick={()=>{setModal(true); setTitle(i)}}>
                { 글제목[i] }
                <span onClick={()=>{ 
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>👍</span> { 따봉[i] }
              </h4>
              <p>2월 1일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal color='skyblue' title={title} 글제목={글제목} 글제목변경={글제목변경}/> : null
      }
      

    </div>
  );
}

function Modal(props){
  return(
      <div className='modal' style={{background : props.color}}>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copy = [...props.글제목];
          copy[0] = '여자 코트 추천';
          props.글제목변경(copy);
        }}>글수정</button>
      </div>
  )
}

export default App;
