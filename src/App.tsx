import React from 'react'
import './App.css'
import Button from './commons/Button';
import InputField from './commons/InputField';

function App() {

  return <div className={"w-3/6 mx-auto border my-2 border-black p-4"}>
    <InputField label={"Default field"} onChange={(e) => alert(`value - ${e.target.value}`)} />
    <InputField
      label={<>
        <span className={"italic"}>Custom Label</span>
        <span className={'text-red-500'}>*</span>
      </>} displayType={"bottom-border"} />
    <InputField label={"Field with only bottom border"} displayType={"bottom-border"} />
    <InputField label={"Label Inline field"} isLabelInline />
    <InputField label={"Textarea"} rows={10} />
    <InputField label={"Textarea"} rows={4} displayType={"bottom-border"} />
    <InputField label={"Extra style classes"} className={"bg-red-500"} />

    <div className="mb-4 flex gap-2 flex-wrap">
      <Button variant='success' size='small'>Success</Button>
      <Button variant='error' size='small'>Error</Button>
      <Button variant='warning' size='small'>Warning</Button>
      <Button variant='primary' size='small'>Primary</Button>
      <Button variant='secondary' size='small'>Secondary</Button>
    </div>

    {/*I am not giving size here as default size is medium*/}
    <div className="mb-4 flex gap-2 flex-wrap">
      <Button variant='success'>Success</Button>
      <Button variant='error'>Error</Button>
      <Button variant='warning'>Warning</Button>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
    </div>
    <div className="mb-10 flex gap-2 flex-wrap">
      <Button variant='success' size='large'>Success</Button>
      <Button variant='error' size='large'>Error</Button>
      <Button variant='warning' size='large'>Warning</Button>
      <Button variant='primary' size='large'>Primary</Button>
      <Button variant='secondary' size='large'>Secondary</Button>
    </div>

    <div className="mb-4 flex gap-2 flex-wrap">
      <Button variant='success' size='small' isOutline>Success</Button>
      <Button variant='error' size='small' isOutline>Error</Button>
      <Button variant='warning' size='small' isOutline>Warning</Button>
      <Button variant='primary' size='small' isOutline>Primary</Button>
    </div>

    {/*I am not giving size here as default size is medium*/}
    <div className="mb-4 flex gap-2 flex-wrap">
      <Button variant='success' isOutline>Success</Button>
      <Button variant='error' isOutline>Error</Button>
      <Button variant='warning' isOutline>Warning</Button>
      <Button variant='primary' isOutline>Primary</Button>
    </div>
    <div className="mb-4 flex gap-2 flex-wrap">
      <Button variant='success' size='large' isOutline>Success</Button>
      <Button variant='error' size='large' isOutline>Error</Button>
      <Button variant='warning' size='large' isOutline>Warning</Button>
      <Button variant='primary' size='large' isOutline>Primary</Button>
    </div>
  </div>
}

export default App;


{/*  */ }