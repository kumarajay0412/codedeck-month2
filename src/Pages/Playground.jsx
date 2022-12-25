import React, { useContext, useState } from 'react'
import Navbar from '../Component/Playground/Navbar'
import EditorContainer from '../Component/Playground/EditorContainer'
import { useParams } from 'react-router'
import { PlaygroundContext, languageMap } from '../Context/PlaygroundContext'
import { ModalContext } from '../Context/ModalContext'
import Modal from '../Component/Modal'
import { Buffer } from 'buffer'
import axios from 'axios'
import InputConsole from '../Component/Playground/InputConsole'
import OutputConsole from '../Component/Playground/OutputConsole'

function Playground() {

  const { folderId, playgroundId } = useParams()
  const { folders, savePlayground } = useContext(PlaygroundContext)
  const { isOpenModal, openModal, closeModal } = useContext(ModalContext)
  const { title, language, code } = folders[folderId].playgrounds[playgroundId]

  const [currentCode, setCurrentCode] = useState(code)
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const [currentInput, setCurrentInput] = useState("")
  const [currentOutput, setCurrentOutput] = useState("")
  const [isFullScreen, setIsFullScreen] = useState(false)

  const saveCode = () => {
    savePlayground(folderId, playgroundId, currentCode, currentLanguage)
  }

  const encode = (str) => {
    return Buffer.from(str, "binary").toString('base64')
  }
  const decode = (str) => {
    return Buffer.from(str, 'base64').toString()
  }

  const postSubmission = async (language_id, source_code, stdin) => {
    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'b4e5c5a05fmsh9adf6ec091523f8p165338jsncc58f31c26e1',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      data: JSON.stringify({
        language_id: language_id,
        source_code: source_code,
        stdin: stdin
      })
    }
    const res = await axios.request(options)
    return res?.data?.token
  }
    return (
      <div>Playground</div>
    )
  }

  export default Playground