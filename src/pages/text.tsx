import useSheet from '@/hooks/Sheet';
import React from 'react';
type nameType = {Users: string}
export default function Text() {

    const [text, setText] = React.useState("");
    const {names, isLoading, error, addName} = useSheet();
  return <div>Text Page
    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
    <button onClick={()=>{
        addName(text);
    }}>Do do</button>
    {isLoading && <div>Loading...</div>}
    {error && <div>Error: {(error as Error).message}</div>}
    {names.map((name: nameType, index: number) => (
        <div key={index}>{name.Users}</div> ) )}
  </div> }