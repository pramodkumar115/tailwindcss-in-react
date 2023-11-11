import React, { useState } from 'react'
import './App.css'
import Button from './commons/Button';
import InputField from './commons/InputField';
import { NotificationConfig, notifyMessage } from './commons/notifyMessage';
import Modal from './Modal';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const config: NotificationConfig = {
    closeIcon: true,
    duration: 100,
    placement: 'top-left',
    type: 'success',
    title: 'SUCCESS'
  }
  const config2: NotificationConfig = {
    closeIcon: true,
    duration: 100,
    placement: 'bottom-right',
    type: 'error',
    title: 'Message'
  }
  const config3: NotificationConfig = {
    closeIcon: true,
    duration: 100,
    placement: 'bottom-left',
    type: 'info',
    title: 'This is Information title'
  }
  const config4: NotificationConfig = {
    closeIcon: true,
    duration: 100,
    placement: 'top-right',
    type: 'warning',
    title: 'Warning'
  }
  const config5: NotificationConfig = {
    closeIcon: true,
    duration: 100,
    placement: 'center',
    type: 'default'
  }
  const config6: NotificationConfig = {
    closeIcon: true,
    duration: 100,
    placement: 'top-center',
    type: 'default'
  }
  const config7: NotificationConfig = {
    closeIcon: true,
    duration: 100,
    placement: 'bottom-center',
    type: 'default'
  }
  return <div className={"w-1/2 mx-auto border my-2 border-black p-4"}>
    {/* <InputField label={"Default field"} onChange={(e) => alert(`value - ${e.target.value}`)} />
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
    </div> */}
    <div className="mb-4 flex gap-2 flex-wrap">

      <Button variant='success' size='large'
        onClick={() => notifyMessage(`Hello, this is a message for Pramod for 
        the success of the component - ${new Date()}`, config)}>
        Success
      </Button>
      <Button variant='error' size='large'
        onClick={() => notifyMessage("Hello, this is a message for Pramod's 2nd for the error of the component - " + new Date(), config2)}>Error</Button>
      <Button variant='primary' size='large'
        onClick={() => notifyMessage("Hello, this is a message for Pramod's 2nd for the info of the component - " + new Date(), config3)}>Info</Button>
      <Button variant='warning' size='large'
        onClick={() => notifyMessage("Hello, this is a message for Pramod's 2nd for the warning of the component - " + new Date(), config4)}>Warning</Button>
      <Button variant='secondary' size='large'
        onClick={() => notifyMessage("Hello, this is a message for Pramod's 2nd for the default of the component - " + new Date(), config5)}>Secondary</Button>
      <Button variant='success' size='large'
        onClick={() => notifyMessage("Hello, this is a message for Pramod's 2nd for the top-center of the component - " + new Date(), config6)}>top-center</Button>
      <Button variant='primary' size='large'
        onClick={() => notifyMessage("Hello, this is a message for Pramod's 2nd for the bottom-center of the component - " + new Date(), config7)}>bottom-center</Button>

<button className={`bg-orange-700 
          p-2 text-white rounded 
          hover:bg-orange-500`}
          onClick={() => setShowPopup(true)}
          >
            Open Popup
          </button>

    </div>

    <Modal show={showPopup} size={'sm'}>
          <Modal.Header>This is Header</Modal.Header>
          <Modal.Content>Testing</Modal.Content>
          <Modal.Footer>
          <button className={`bg-blue-700 p-2 text-white 
          rounded hover:bg-blue-500`}>OK</button>
          <button
            className="bg-red-700 p-2 
          text-white rounded 
          hover:bg-red-500" onClick={() => setShowPopup(false)}>Cancel</button>
          </Modal.Footer>
      </Modal>

  </div>
}

export default App;