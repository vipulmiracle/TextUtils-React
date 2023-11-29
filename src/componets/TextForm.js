import React ,{useState} from 'react'

function TextForm(props) {

  const ConvertUppercase = ()=>{
      // console.log('click');
      let newText = text.toUpperCase();
      setText(newText);
  }
  const ConvertLocase = ()=>{
      // console.log('click');
      let newText = text.toLocaleLowerCase();
      setText(newText);
  }

  const ChangeText = (event)=>{
      // console.log('change');
      setText(event.target.value);
  }

  const [text ,setText] = useState('');
  return (
    <>
        <div className={`container py-3 text-${props.mode}`}>

        <label>Enter Your Text Here</label>
      <textarea className='form-control' value={text} onChange={ChangeText} id='textBox' rows='8'></textarea>

      <button className='btn btn-primary mt-2 convertUp' onClick={ConvertUppercase}>Convert To Upercase</button>
      <button className='btn btn-primary mt-2' onClick={ConvertLocase}>Convert To LowerCase</button>
        </div>
        <div className={`container py-3 text-${props.mode}`}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words , {text.length} Charecter</p>
        </div>
    </>
  )
}

export default TextForm
